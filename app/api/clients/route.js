import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const client = await request.json();

    const { children, userId, ...clientData } = client;
    const newClient = await prisma.client.create({
      data: {
        ...clientData,
        children: {
          createMany: {
            data: children.map((child) => ({
              name: child.name,
              dob: child.dob,
            })),
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return Response.json({ newClient, message: "Client created successfully" });
  } catch (error) {
    console.error("Error creating a client:", error);

    return Response.json(
      { message: "Error creating a client" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const allClients = await prisma.client.findMany({
      include: {
        children: true,
      },
    });
    return Response.json(allClients, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Error getting clients" }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    const deletedClient = await prisma.client.delete({
      where: { id: id },
    });

    return Response.json({ deletedClient, message: "Client deleted" });
  } catch (error) {
    console.error("Error deleting a client:", error);

    return Response.json(
      { message: "Error deleting a client" },
      { status: 500 }
    );
  }
}

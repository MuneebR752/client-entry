import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const allUsers = await prisma.users.findMany({});
    return Response.json(allUsers, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Error getting Users" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = await request.json();

    const newUser = await prisma.users.create({
      data: user,
    });

    return Response.json({ newUser, message: "User created successfully" });
  } catch (error) {
    console.error("Error creating a client:", error);

    return Response.json(
      { message: "Error creating a client" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    const client = await prisma.clients.findUnique({
      where: {
        userId: id,
      },
    });

    if (!client) {
      const deletedUser = await prisma.users.delete({
        where: { id: id },
      });
      return Response.json({ deletedUser, message: "User deleted" });
    }

    const deletedChildren = await prisma.children.deleteMany({
      where: { clientId: client.id },
    });

    const deletedClients = await prisma.clients.deleteMany({
      where: { userId: id },
    });

    const deletedUser = await prisma.users.delete({
      where: { id: id },
    });

    return Response.json({ deletedUser, message: "User deleted" });
  } catch (error) {
    console.error("Error deleting a user:", error);

    return Response.json({ message: "Error deleting a user" }, { status: 500 });
  }
}

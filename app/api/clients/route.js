import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const client = await request.json();
    const newClient = await prisma.client.create({
      data: client,
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
    const allClients = await prisma.client.findMany();
    return Response.json(allClients, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Error getting clients" }, { status: 500 });
  }
}

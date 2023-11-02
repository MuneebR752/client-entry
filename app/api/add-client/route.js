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

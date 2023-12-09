import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const { v4: uuidv4 } = require("uuid");
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

    return NextResponse.json({
      newClient,
      message: "Client created successfully",
    });
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
    const deletedChildren = await prisma.children.deleteMany({
      where: { clientId: id },
    });
    if (deletedChildren) {
      const deletedClient = await prisma.client.delete({
        where: { id: id },
      });
      return Response.json({ deletedClient, message: "Client deleted" });
    } else {
      return Response.json(
        { message: "Error deleting client" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error deleting a client:", error);

    return Response.json(
      { message: "Error deleting a client" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const client = await request.json();

    const { children, userId, ...clientData } = client;
    children.map((child) => {
      console.log(child);
    });
    const updatedClient = await prisma.client.update({
      where: { id: client.id },
      data: {
        ...clientData,
        children: {
          upsert: children.map((child) => ({
            where: { id: child.id || uuidv4() },
            update: {
              name: child.name,
              dob: child.dob,
            },
            create: {
              name: child.name,
              dob: child.dob,
            },
          })),
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return Response.json({
      updatedClient,
      message: "Client updated successfully",
    });
  } catch (error) {
    console.error("Error updating a client:", error);

    return Response.json(
      { message: "Error updating a client" },
      { status: 500 }
    );
  }
}

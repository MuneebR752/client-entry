import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const { v4: uuidv4 } = require("uuid");
const prisma = new PrismaClient();
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
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

    sendResendEmail(userId, clientData.name, clientData.email, false);

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

    sendResendEmail(userId, clientData.name, clientData.email, true);

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

const sendResendEmail = async (userId, name, email, updated) => {
  try {
    const data = await resend.emails.send({
      from: "Client Type 1 <onboarding@resend.dev>",
      to: ["swiftservices14@gmail.com"],
      subject: `${updated ? "Updated" : "New"} Response from ${name}}`,
      html: `<html lang="en">
      <head>
        <meta charset="UTF-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          h1 {
            text-align: center;
          }
          p {
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${updated ? "Updated" : "New"} Response from Client Type 1</h1>
          <p>Dear Team,</p>
          <p>${
            updated ? "An updated" : "A new"
          } response has been received from the SwiftServices form</p> <br>
          <p><strong>Name: </strong> ${name} <br> <strong>Email: </strong> ${email} <br> <strong>User ID: </strong> ${userId}</p>
          <!-- Add more details about the response -->
          <p>You can log in to the admin panel or visit the form dashboard to view the complete response details.</p>
          <p>Thank you!</p>
          <p>Best Regards,<br>SwiftServices Team</p>
        </div>
      </body>
      </html>`,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
};

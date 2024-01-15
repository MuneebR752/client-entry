import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request) {
  const requestedUser = await request.json();
  try {
    const user = await prisma.users.findUnique({
      where: {
        email: requestedUser.email,
      },
      include: {
        formData: {
          include: {
            children: true,
          },
        },
      },
    });
    if (!user) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }
    if (user.password !== requestedUser.password) {
      return Response.json({ message: "Incorrect password" }, { status: 401 });
    }
    return Response.json(user, { status: 200 });
  } catch (error) {
    console.error("Error getting user:", error);

    return Response.json({ message: "Error getting user" }, { status: 500 });
  }
}

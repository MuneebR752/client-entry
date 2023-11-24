import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request) {
  const requestedUser = await request.json();
  console.log(requestedUser);
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: requestedUser.email,
      },
    });
    console.log(user);
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

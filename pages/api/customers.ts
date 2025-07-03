import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.email) return res.status(401).json({ error: "Not signed in" });

  if (req.method === "GET") {
    const customers = await prisma.customer.findMany({
      where: { owner: { email: session.user.email } },
      orderBy: { createdAt: "desc" }
    });
    return res.json(customers);
  }

  if (req.method === "POST") {
    const { name, email } = req.body;
    const customer = await prisma.customer.create({
      data: { name, email, owner: { connect: { email: session.user.email! } } }
    });
    return res.status(201).json(customer);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end();
}
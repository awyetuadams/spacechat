// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      const result = await prisma.email.create({
        data: data,
      });

      res.status(200).json(result);
    } catch (err: any) {
      if (err.code === "P2002") {
        return res
          .status(400)
          .json({ message: "Email already already on the waitlist" });
      }
      res.status(500).json({ message: "Failed to add to waitlist backend" });
    } finally {
      await prisma.$disconnect();
    }
  } else if (req.method === "GET") {
    try {
      const count = await prisma.email.count();
      res.status(200).json(count);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Failed to add to get the total number of users" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

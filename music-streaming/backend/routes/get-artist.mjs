import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res)=> {
    try {
    const artists = await prisma.artist.findMany();
    res.json(artists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch artists" });
  }
});

export default router;
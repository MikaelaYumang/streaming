// routes/artist.js or in your controller file
import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// POST /artists
router.post('/', async (req, res) => {
  const { name, genre, debut_year } = req.body;

  if (!name || !genre || !debut_year) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const newArtist = await prisma.artist.create({
      data: {
        name,
        genre,
        debut_year,
      },
    });

    res.status(201).json(newArtist);
  } catch (error) {
    console.error('Error creating artist:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

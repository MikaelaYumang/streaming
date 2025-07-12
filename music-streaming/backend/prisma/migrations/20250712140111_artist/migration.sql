-- CreateTable
CREATE TABLE "Artist" (
    "artist_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "debut_year" INTEGER NOT NULL,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("artist_id")
);

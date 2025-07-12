import express from "express";
import cors from "cors";
import postArtistRoute from "./routes/post-artist.mjs"
import getArtistRoute from "./routes/get-artist.mjs"

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/post-artist', postArtistRoute);
app.use('/get-artist', getArtistRoute);



app.get("/", (req, res) => {
  res.send("Working express");
});


app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

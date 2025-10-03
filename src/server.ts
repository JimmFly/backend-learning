import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// Get the file path from the URL of the current module
const __filename = fileURLToPath(import.meta.url);
// Get the directory name of the current module
const __dirname = dirname(__filename);
// Path to the HTML file
const pathToHtml = path.join(__dirname, "public", "index.html");

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "../public")));

// Route to serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(pathToHtml);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

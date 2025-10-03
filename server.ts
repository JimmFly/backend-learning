import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  console.log("Received a request at /", req.method);

  res.status(201).send("Hello World!");
});

app.get("/api/data", (req, res) => {
  console.log("Received a request at /api/data", req.method);

  res.json({
    name: "Sample Data",
    message: "This is some data from the server.",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

import express from "express";

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Mock data to be sent in responses

const mockData: Array<{ name: string; message: string }> = [
  {
    name: "Sample Data",
    message: "This is some data from the server.",
  },
];

// Server Side Rendering (SSR) for the root route (Website endpoint)
app.get("/", (req, res) => {
  console.log("Received a request at /", req.method);
  res.status(201).send(`
    <body style="background-color: #000000; color: #FFFFFF; font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
      <h1>Data!</h1>
      ${mockData.map((item) => `<p>${item.name}: ${item.message}</p>`).join("")}
    </body>
  `);
});

// API endpoint to get mock data
app.get("/api/data", (req, res) => {
  console.log("Received a request at /api/data", req.method);
  res.json(mockData);
});

app.post("/api/data", (req, res) => {
  console.log("Received a POST request at /api/data", req.body);
  const { name, message } = req.body;
  if (name && message) {
    mockData.push({ name, message });
    res.status(201).json({ message: "Data received successfully!" });
  } else {
    res.status(400).json({ message: "Invalid data format." });
  }
});

app.put("/api/data", (req, res) => {
  console.log("Received a PUT request at /api/data", req.body);
  const { name, message } = req.body;
  const item = mockData.find((item) => item.name === name);
  if (item) {
    item.message = message;
    res.status(200).json({ message: "Data updated successfully!" });
  } else {
    res.status(404).json({ message: "Data not found." });
  }
});

app.delete("/api/data", (req, res) => {
  console.log("Received a DELETE request at /api/data", req.body);
  const { name } = req.body;
  const index = mockData.findIndex((item) => item.name === name);
  if (index !== -1) {
    mockData.splice(index, 1);
    res.status(200).json({ message: "Data deleted successfully!" });
  } else {
    res.status(404).json({ message: "Data not found." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

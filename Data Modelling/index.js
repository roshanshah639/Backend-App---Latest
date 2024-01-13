import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("<h1>Hello from Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Hello from About Page</h1>");
});

app.get("/twitter", (req, res) => {
  res.send("<h1>Hello from Twitter Page</h1>");
});
app.get("/login", (req, res) => {
  res.send("<h1>Hello from Login Page</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Hello from Contact Page</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

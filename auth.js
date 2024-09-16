const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

// Use the CORS middleware
server.use(cors());

server.use(bodyParser.json());

server.use("/api", router);

server.post("/login", (req, res) => {
  const { email } = req.body;
  const db = router.db; // access to lowdb instance
  const user = db.get("profiles").find({ email }).value();

  if (user) {
    res.status(200).json({
      success: true,
      message: "Login successful!",
      accessToken: jwt.sign({ user }, "secret", { expiresIn: "1h" }),
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        isVerified: user.isVerified,
        phoneNumber: user.phoneNumber,
      },
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }
});

// In your json-server setup file
server.post("/register", (req, res) => {
  const { email, password, name } = req.body;
  const db = router.db; // access to lowdb instance

  // Check if user already exists
  const existingUser = db.get("profiles").find({ email }).value();
  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "User already exists",
    });
  }

  // Save new user
  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    pass: password,
    is_verified: false,
    phoneNumber: "",
  };
  db.get("profiles").push(newUser).write();

  res.status(201).json({
    success: true,
    message: "Registration successful",
    user: newUser,
  });
});

// Custom charts/spending endpoint
server.get("/api/charts/spending", (req, res) => {
  res.status(200).json({
    chartData: [
      { 2023: 0, 2024: 0, month: "January" },
      { 2023: 3000, 2024: 300, month: "February" },
      { 2023: 0, 2024: 0, month: "March" },
      { 2023: 0, 2024: 0, month: "April" },
      { 2023: 0, 2024: 0, month: "May" },
      { 2023: 536, 2024: 0, month: "June" },
      { 2023: 0, 2024: 0, month: "July" },
      { 2023: 0, 2024: 4045, month: "August" },
      { 2023: 0, 2024: 5146, month: "September" },
      { 2023: 0, 2024: 0, month: "October" },
      { 2023: 0, 2024: 0, month: "November" },
      { 2023: 0, 2024: 0, month: "December" },
    ],
    totals: [
      { year: 2023, total: 3536 },
      { year: 2024, total: 9491 },
    ],
  });
});

// Custom charts/cost endpoint
server.get("/api/charts/cost", (req, res) => {
  res.status(200).json({
    totals: [
      { sortedBy: "year", count: 11 },
      { sortedBy: "month", count: 5 },
    ],
    topApps: [
      { sortedBy: "year", appName: "jiraaaaaa", cost: 4321 },
      { sortedBy: "year", appName: "Xbox game pass", cost: 1810 },
      { sortedBy: "year", appName: "Pro", cost: 1500 },
      { sortedBy: "year", appName: "Office", cost: 865 },
      { sortedBy: "year", appName: "netofurikusu", cost: 340 },
      { sortedBy: "month", appName: "Xbox game pass", cost: 1810 },
      { sortedBy: "month", appName: "Pro", cost: 1500 },
      { sortedBy: "month", appName: "Office", cost: 865 },
      { sortedBy: "month", appName: "jiraaaaaa", cost: 276 },
      { sortedBy: "month", appName: "Youtube Red", cost: 207 },
    ],
  });
});

server.use(middlewares);
server.use(router);
server.listen(8000, () => {
  console.log("JSON Server is running on port 8000");
});

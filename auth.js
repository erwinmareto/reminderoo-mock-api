const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router({
  subscriptions: [
    {
      id: 1,
      user_id: 1,
      app_name: "Netflix",
      category: "entertainment",
      pricing: "12.99",
      start_payment: "2024-05-01T12:00:00.000Z",
      next_payment: "2024-10-01T12:00:00.000Z",
      status: "active",
      cycle: "monthly",
      payment_method: "credit card",
      interval_days: 30,
      email: "alice@mail.com",
      icon: "netflix",
      is_deleted: 0,
    },
    {
      id: 2,
      user_id: 2,
      app_name: "Spotify",
      category: "entertainment",
      pricing: "9.99",
      start_payment: "2024-06-15T12:00:00.000Z",
      next_payment: "2024-10-15T12:00:00.000Z",
      status: "active",
      cycle: "monthly",
      payment_method: "paypal",
      interval_days: 30,
      email: "bob@mail.com",
      icon: "spotify",
      is_deleted: 0,
    },
    {
      id: 3,
      user_id: 3,
      app_name: "Adobe Creative Cloud",
      category: "work",
      pricing: "52.99",
      start_payment: "2024-07-20T12:00:00.000Z",
      next_payment: "2024-10-20T12:00:00.000Z",
      status: "overdue",
      cycle: "monthly",
      payment_method: "credit card",
      interval_days: 30,
      email: "carol@mail.com",
      icon: "adobe",
      is_deleted: 0,
    },
    {
      id: 4,
      user_id: 9,
      app_name: "Xbox game pass",
      category: "games",
      pricing: "877.00",
      start_payment: "2024-09-07T17:00:00.000Z",
      next_payment: "2024-09-23T17:00:00.000Z",
      status: "active",
      cycle: "weekly",
      payment_method: "shopee pay",
      interval_days: 7,
      email: "john@mail.com",
      icon: "xbox",
      is_deleted: 0,
    },
    {
      id: 5,
      user_id: 4,
      app_name: "Amazon Prime",
      category: "entertainment",
      pricing: "14.99",
      start_payment: "2024-03-10T12:00:00.000Z",
      next_payment: "2024-10-10T12:00:00.000Z",
      status: "active",
      cycle: "monthly",
      payment_method: "gopay",
      interval_days: 30,
      email: "dave@mail.com",
      icon: "amazon",
      is_deleted: 0,
    },
    {
      id: 6,
      user_id: 5,
      app_name: "Disney+",
      category: "entertainment",
      pricing: "7.99",
      start_payment: "2024-01-01T12:00:00.000Z",
      next_payment: "2024-10-01T12:00:00.000Z",
      status: "upcoming",
      cycle: "yearly",
      payment_method: "credit card",
      interval_days: 365,
      email: "eve@mail.com",
      icon: "disney",
      is_deleted: 0,
    },
    {
      id: 7,
      user_id: 6,
      app_name: "HBO Max",
      category: "entertainment",
      pricing: "15.00",
      start_payment: "2024-02-20T12:00:00.000Z",
      next_payment: "2024-10-20T12:00:00.000Z",
      status: "active",
      cycle: "monthly",
      payment_method: "credit card",
      interval_days: 30,
      email: "frank@mail.com",
      icon: "hbo",
      is_deleted: 0,
    },
    {
      id: 8,
      user_id: 7,
      app_name: "Apple Music",
      category: "entertainment",
      pricing: "4.99",
      start_payment: "2024-04-10T12:00:00.000Z",
      next_payment: "2024-10-10T12:00:00.000Z",
      status: "active",
      cycle: "monthly",
      payment_method: "credit card",
      interval_days: 30,
      email: "george@mail.com",
      icon: "apple",
      is_deleted: 0,
    },
    {
      id: 9,
      user_id: 8,
      app_name: "LinkedIn Premium",
      category: "work",
      pricing: "29.99",
      start_payment: "2024-08-01T12:00:00.000Z",
      next_payment: "2024-10-01T12:00:00.000Z",
      status: "inactive",
      cycle: "monthly",
      payment_method: "paypal",
      interval_days: 30,
      email: "harry@mail.com",
      icon: "linkedin",
      is_deleted: 0,
    },
    {
      id: 10,
      user_id: 10,
      app_name: "YouTube Premium",
      category: "entertainment",
      pricing: "11.99",
      start_payment: "2024-07-15T12:00:00.000Z",
      next_payment: "2024-10-15T12:00:00.000Z",
      status: "active",
      cycle: "monthly",
      payment_method: "credit card",
      interval_days: 30,
      email: "ivan@mail.com",
      icon: "youtube",
      is_deleted: 0,
    },
  ],
  transactions: [
    {
      id: 1,
      subscription_id: 1,
      pricing: "12.99",
      status: "Completed",
      payment_method: "credit card",
      payment_date: "2024-09-01T12:00:00.000Z",
      appName: "Netflix",
      icon: "netflix",
      category: "entertainment",
    },
    {
      id: 2,
      subscription_id: 2,
      pricing: "9.99",
      status: "Completed",
      payment_method: "paypal",
      payment_date: "2024-09-01T12:00:00.000Z",
      appName: "Spotify",
      icon: "spotify",
      category: "music",
    },
    {
      id: 3,
      subscription_id: 3,
      pricing: "52.99",
      status: "Completed",
      payment_method: "credit card",
      payment_date: "2024-08-20T12:00:00.000Z",
      appName: "Adobe Creative Cloud",
      icon: "adobe",
      category: "design",
    },
    {
      id: 4,
      subscription_id: 4,
      pricing: "877.00",
      status: "Completed",
      payment_method: "shopee pay",
      payment_date: "2024-09-10T12:00:00.000Z",
      appName: "Xbox game pass",
      icon: "xbox",
      category: "games",
    },
    {
      id: 5,
      subscription_id: 5,
      pricing: "222.00",
      status: "Completed",
      payment_method: "gopay",
      payment_date: "2024-08-29T17:00:00.000Z",
      appName: "no games",
      icon: "playstation",
      category: "work",
    },
    {
      id: 6,
      subscription_id: 6,
      pricing: "14.99",
      status: "Completed",
      payment_method: "gopay",
      payment_date: "2024-08-10T17:00:00.000Z",
      appName: "Amazon Prime",
      icon: "amazon",
      category: "shopping",
    },
    {
      id: 7,
      subscription_id: 7,
      pricing: "7.99",
      status: "Completed",
      payment_method: "credit card",
      payment_date: "2024-07-01T17:00:00.000Z",
      appName: "Disney+",
      icon: "disney",
      category: "entertainment",
    },
    {
      id: 8,
      subscription_id: 8,
      pricing: "15.00",
      status: "Completed",
      payment_method: "credit card",
      payment_date: "2024-06-01T17:00:00.000Z",
      appName: "HBO Max",
      icon: "hbo",
      category: "entertainment",
    },
    {
      id: 9,
      subscription_id: 9,
      pricing: "4.99",
      status: "Completed",
      payment_method: "credit card",
      payment_date: "2024-09-01T17:00:00.000Z",
      appName: "Apple Music",
      icon: "apple",
      category: "music",
    },
    {
      id: 10,
      subscription_id: 10,
      pricing: "11.99",
      status: "Completed",
      payment_method: "credit card",
      payment_date: "2024-09-01T17:00:00.000Z",
      appName: "YouTube Premium",
      icon: "youtube",
      category: "entertainment",
    },
  ],
  profiles: [
    {
      id: 1,
      name: "Alice",
      email: "alice@mail.com",
      isVerified: true,
      phoneNumber: "1111111111",
    },
    {
      id: 2,
      name: "Bob",
      email: "bob@mail.com",
      isVerified: false,
      phoneNumber: "2222222222",
    },
    {
      id: 3,
      name: "Carol",
      email: "carol@mail.com",
      isVerified: true,
      phoneNumber: "3333333333",
    },
    {
      id: 4,
      name: "Dave",
      email: "dave@mail.com",
      isVerified: true,
      phoneNumber: "4444444444",
    },
    {
      id: 5,
      name: "Eve",
      email: "eve@mail.com",
      isVerified: false,
      phoneNumber: "5555555555",
    },
    {
      id: 6,
      name: "Frank",
      email: "frank@mail.com",
      isVerified: true,
      phoneNumber: "6666666666",
    },
    {
      id: 7,
      name: "George",
      email: "george@mail.com",
      isVerified: false,
      phoneNumber: "7777777777",
    },
    {
      id: 8,
      name: "Harry",
      email: "harry@mail.com",
      isVerified: true,
      phoneNumber: "8888888888",
    },
    {
      id: 9,
      name: "Ivan",
      email: "ivan@mail.com",
      isVerified: false,
      phoneNumber: "9999999999",
    },
    {
      id: 10,
      name: "John",
      email: "john@mail.com",
      isVerified: true,
      phoneNumber: "1010101010",
    },
  ],
});

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

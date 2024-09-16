const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router({
  subscriptions: [
    {
      icon: "disney",
      appName: "Hulu",
      category: "entertainment",
      cycle: "monthly",
      startPayment: "2023-09-01T00:00:00.000Z",
      nextPayment: "2024-10-03T17:00:00.000Z",
      pricing: 43,
      paymentMethod: "credit card",
      status: "active",
      interval: 30,
      email: "user1@example.com",
      id: "1",
    },
    {
      id: "2",
      icon: "spotify",
      appName: "Apple Music",
      category: "entertainment",
      pricing: 600,
      startPayment: "2023-10-01T00:00:00.000Z",
      nextPayment: "2024-10-01T00:00:00.000Z",
      status: "inactive",
      cycle: "yearly",
      paymentMethod: "paypal",
      interval: 365,
      email: "user2@example.com",
    },
    {
      id: "3",
      icon: "google-play",
      appName: "Google Workspace",
      category: "work",
      pricing: 20,
      startPayment: "2023-08-31T00:00:00.000Z",
      nextPayment: "2024-08-31T00:00:00.000Z",
      status: "active",
      cycle: "monthly",
      paymentMethod: "credit card",
      interval: 30,
      email: "user3@example.com",
    },
    {
      icon: "prime",
      appName: "mid videos",
      category: "entertainment",
      cycle: "monthly",
      startPayment: "2024-08-17T17:00:00.000Z",
      nextPayment: "2024-09-10T17:00:00.000Z",
      pricing: 321,
      paymentMethod: "debit card",
      status: "inactive",
      interval: 5,
      email: "q@mail.com",
      id: "4",
    },
    {
      icon: "zoom",
      appName: "zooomin",
      category: "work",
      cycle: "6 months",
      startPayment: "2024-10-30T17:00:00.000Z",
      nextPayment: "2024-11-21T17:00:00.000Z",
      pricing: 75,
      paymentMethod: "ovo",
      status: "inactive",
      interval: 3,
      email: "rusdai@gmail.com",
      id: "6",
    },
    {
      icon: "category-health",
      appName: "MyFitnessPal Premium",
      category: "health",
      cycle: "monthly",
      startPayment: "2024-08-18T17:00:00.000Z",
      nextPayment: "2024-08-19T17:00:00.000Z",
      pricing: 15,
      paymentMethod: "debit card",
      status: "inactive",
      interval: 5,
      email: "user6@example.com",
      id: "7",
    },
    {
      id: "8",
      icon: "category-entertainment",
      appName: "Paramount+",
      category: "entertainment",
      pricing: 20,
      startPayment: "2023-09-15T00:00:00.000Z",
      nextPayment: "2024-09-15T00:00:00.000Z",
      status: "active",
      cycle: "monthly",
      paymentMethod: "credit card",
      interval: 30,
      email: "user7@example.com",
    },
    {
      icon: "category-health",
      appName: "Calm",
      category: "health",
      cycle: "weekly",
      startPayment: "2024-08-17T17:00:00.000Z",
      nextPayment: "2024-08-19T17:00:00.000Z",
      pricing: 12,
      paymentMethod: "paypal",
      status: "overdue",
      interval: 7,
      email: "user8@example.com",
      id: "9",
    },
    {
      id: "12",
      icon: "xbox",
      appName: "Xbox Game Pass",
      category: "games",
      pricing: 12,
      startPayment: "2023-08-15T00:00:00.000Z",
      nextPayment: "2024-08-15T00:00:00.000Z",
      status: "active",
      cycle: "monthly",
      paymentMethod: "credit card",
      interval: 30,
      email: "user11@example.com",
    },
    {
      icon: "playstation",
      appName: "sonys nuts",
      category: "games",
      cycle: "6 months",
      startPayment: "2024-09-18T17:00:00.000Z",
      nextPayment: "2024-10-10T17:00:00.000Z",
      pricing: 1212,
      paymentMethod: "gopay",
      status: "active",
      interval: 3,
      email: "new@mail.com",
      id: "syhaLZm",
    },
    {
      icon: "category-games",
      appName: "game apa",
      category: "games",
      cycle: "monthly",
      startPayment: "2024-08-24T17:00:00.000Z",
      nextPayment: "2024-09-06T17:00:00.000Z",
      pricing: 12,
      paymentMethod: "gopay",
      status: "upcoming",
      interval: 3,
      email: "q@mail.com",
      id: "rz0uks4",
    },
    {
      icon: "medium",
      appName: "some article",
      category: "education",
      cycle: "monthly",
      startPayment: "2024-08-21T17:00:00.000Z",
      nextPayment: "2024-09-29T17:00:00.000Z",
      pricing: 222,
      paymentMethod: "ovo",
      status: "inactive",
      interval: 1,
      email: "q@mail.com",
      id: "ucFkXYn",
    },
    {
      icon: "category-creative",
      appName: "clip studio paint",
      category: "work",
      cycle: "monthly",
      startPayment: "2024-09-03T17:00:00.000Z",
      nextPayment: "2024-10-04T17:00:00.000Z",
      pricing: 122,
      paymentMethod: "ovo",
      status: "inactive",
      interval: 5,
      email: "john@mail.com",
      id: "CkIl9uI",
    },
    {
      icon: "category-education",
      appName: "dicoding",
      category: "education",
      cycle: "daily",
      startPayment: "2024-09-03T17:00:00.000Z",
      nextPayment: "2024-09-11T17:00:00.000Z",
      pricing: 100,
      paymentMethod: "dana",
      status: "active",
      interval: 3,
      email: "asas@ma.kl",
      id: "KZ2S79P",
    },
    {
      icon: "youtube",
      appName: "Twitch",
      category: "entertainment",
      cycle: "monthly",
      startPayment: "2024-09-02T19:19:57.506Z",
      nextPayment: "2024-09-10T17:00:00.000Z",
      pricing: 10,
      paymentMethod: "shopee pay",
      status: "upcoming",
      interval: 5,
      email: "example@mail.com",
      id: "a8Gbsnf",
    },
    {
      icon: "dribbble",
      appName: "bagas Dribbble",
      category: "games",
      cycle: "3 months",
      startPayment: "2024-09-02T19:24:11.145Z",
      nextPayment: "2024-12-03T17:00:00.000Z",
      pricing: 222,
      paymentMethod: "gopay",
      status: "active",
      interval: 7,
      email: "test@mail.com",
      id: "4MXe96V",
    },
    {
      icon: "notion",
      appName: "Notion",
      category: "work",
      cycle: "6 months",
      startPayment: "2024-09-02T19:27:27.220Z",
      nextPayment: "2024-10-08T17:00:00.000Z",
      pricing: 222,
      paymentMethod: "ovo",
      status: "active",
      interval: 7,
      email: "john@mail.com",
      id: "oBAJN6w",
    },
    {
      icon: "netflix",
      appName: "Netflix",
      category: "entertainment",
      cycle: "monthly",
      startPayment: "2024-09-02T19:28:45.253Z",
      nextPayment: "2024-09-26T17:00:00.000Z",
      pricing: 122,
      paymentMethod: "gopay",
      status: "active",
      interval: 3,
      email: "q@mail.com",
      id: "USrL6VD",
    },
    {
      icon: "spotify",
      appName: "apple music",
      category: "entertainment",
      cycle: "weekly",
      startPayment: "2024-09-03T14:14:29.218Z",
      nextPayment: "2024-09-14T17:00:00.000Z",
      pricing: 55,
      paymentMethod: "shopee pay",
      status: "active",
      interval: 5,
      email: "some@mail.com",
      id: "aQTmgtZ",
    },
    {
      icon: "creative-cloud",
      appName: "chips",
      category: "education",
      cycle: "weekly",
      startPayment: "2024-09-03T14:31:32.296Z",
      nextPayment: "2024-09-06T17:00:00.000Z",
      pricing: 12,
      paymentMethod: "debit card",
      status: "upcoming",
      interval: 3,
      email: "q@mail.com",
      id: "igQ_-3D",
    },
    {
      icon: "google-play",
      appName: "app store",
      category: "home",
      cycle: "monthly",
      startPayment: "2024-09-03T15:22:47.087Z",
      nextPayment: "2024-09-30T17:00:00.000Z",
      pricing: 222,
      paymentMethod: "OVO",
      status: "active",
      interval: 3,
      email: "some@mail.com",
      id: "ue0lNLC",
    },
    {
      icon: "ms-365",
      appName: "docs",
      category: "work",
      cycle: "3 months",
      startPayment: "2024-09-03T16:14:38.030Z",
      nextPayment: "2024-09-27T17:00:00.000Z",
      pricing: 111,
      paymentMethod: "OVO",
      status: "active",
      interval: 5,
      email: "john@mail.com",
      id: "MWP4458",
    },
    {
      icon: "creative-cloud",
      appName: "Creative Cloud",
      category: "games",
      cycle: "weekly",
      startPayment: "2024-09-03T16:19:48.777Z",
      nextPayment: "2024-10-10T17:00:00.000Z",
      pricing: 688,
      paymentMethod: "paypal",
      status: "active",
      interval: 5,
      email: "some@mail.com",
      id: "HuWaMol",
    },
    {
      icon: "category-health",
      appName: "helth",
      category: "health",
      cycle: "weekly",
      startPayment: "2024-09-04T12:31:28.495Z",
      nextPayment: "2024-09-09T17:00:00.000Z",
      pricing: 55,
      paymentMethod: "paypal",
      status: "upcoming",
      interval: 3,
      email: "wing@mail.com",
      id: "I3mFnTp",
    },
    {
      icon: "youtube",
      appName: "YouTube Music",
      category: "entertainment",
      cycle: "weekly",
      startPayment: "2024-09-04T12:44:41.690Z",
      nextPayment: "2024-09-10T17:00:00.000Z",
      pricing: 55,
      paymentMethod: "OVO",
      status: "upcoming",
      interval: 3,
      email: "q@mail.com",
      id: "Di7TlQ5",
    },
    {
      icon: "xbox",
      appName: " spedicey",
      category: "games",
      cycle: "6 months",
      startPayment: "2024-09-04T13:52:25.299Z",
      nextPayment: "2024-10-02T17:00:00.000Z",
      pricing: 788,
      paymentMethod: "OVO",
      status: "active",
      interval: 3,
      email: "some@mail.com",
      id: "MW8uBE8",
    },
    {
      icon: "gmail",
      appName: "google meet",
      category: "work",
      cycle: "3 months",
      startPayment: "2024-09-05T15:49:41.812Z",
      nextPayment: "2024-12-05T17:00:00.000Z",
      pricing: 333,
      paymentMethod: "ovo",
      status: "active",
      interval: 5,
      email: "some@mail.com",
      id: "Lh2_8OK",
    },
    {
      icon: "prime",
      appName: "prime videos indonesia",
      category: "entertainment",
      cycle: "monthly",
      startPayment: "2024-09-05T15:57:29.851Z",
      nextPayment: "2024-10-06T17:00:00.000Z",
      pricing: 280,
      paymentMethod: "gopay",
      status: "active",
      interval: 7,
      email: "q@mail.com",
      id: "8drvNFL",
    },
    {
      icon: "jira",
      appName: "trello",
      category: "work",
      cycle: "3 months",
      startPayment: "2024-09-05T18:21:29.860Z",
      nextPayment: "2024-09-11T17:00:00.000Z",
      pricing: 122,
      paymentMethod: "debit card",
      status: "upcoming",
      interval: 3,
      email: "q@mail.com",
      id: "2GtDM4d",
    },
  ],
  transactions: [
    {
      id: "1",
      appName: "Hulu",
      icon: "disney",
      category: "entertainment",
      pricing: 1000,
      status: "active",
      payment: "credit card",
      paymentDate: "2024-08-01T00:00:00.000Z",
    },
    {
      id: "1212",
      appName: "Hulu",
      icon: "disney",
      category: "entertainment",
      pricing: 23,
      status: "active",
      payment: "credit card",
      paymentDate: "2024-05-12T00:00:00.000Z",
    },
    {
      id: "223",
      appName: "Hulu",
      icon: "disney",
      category: "entertainment",
      pricing: 12,
      status: "active",
      payment: "credit card",
      paymentDate: "2023-05-12T00:00:00.000Z",
    },
    {
      id: "444",
      appName: "Hulu",
      icon: "disney",
      category: "entertainment",
      pricing: 54,
      status: "active",
      payment: "credit card",
      paymentDate: "2022-09-15T00:00:00.000Z",
    },
    {
      id: "44497",
      appName: "Hulu",
      icon: "disney",
      category: "entertainment",
      pricing: 542,
      status: "active",
      payment: "credit card",
      paymentDate: "2022-02-15T00:00:00.000Z",
    },
    {
      id: "412",
      appName: "Hulu",
      icon: "disney",
      category: "entertainment",
      pricing: 690,
      status: "active",
      payment: "credit card",
      paymentDate: "2023-01-15T00:00:00.000Z",
    },
    {
      id: "489",
      appName: "Hulu",
      icon: "disney",
      category: "entertainment",
      pricing: 700,
      status: "active",
      payment: "credit card",
      paymentDate: "2021-01-15T00:00:00.000Z",
    },
    {
      id: "2",
      appName: "Spotify",
      icon: "spotify",
      category: "entertainment",
      pricing: 500,
      status: "active",
      payment: "paypal",
      paymentDate: "2024-09-10T00:00:00.000Z",
    },
    {
      id: "4",
      appName: "Amazon Prime",
      icon: "disney",
      category: "entertainment",
      pricing: 200,
      status: "active",
      payment: "debit card",
      paymentDate: "2024-08-15T00:00:00.000Z",
    },
    {
      id: "5",
      appName: "Duolingo Plus",
      icon: "category-education",
      category: "education",
      pricing: 220,
      status: "active",
      payment: "credit card",
      paymentDate: "2024-08-22T00:00:00.000Z",
    },
    {
      id: "6",
      appName: "Adobe Creative Cloud",
      icon: "creative-cloud",
      category: "work",
      pricing: 30,
      status: "active",
      payment: "paypal",
      paymentDate: "2024-09-05T00:00:00.000Z",
    },
    {
      id: "10",
      appName: "LinkedIn Learning",
      icon: "category-education",
      category: "education",
      pricing: 20,
      status: "upcoming",
      payment: "credit card",
      paymentDate: "2024-08-12T00:00:00.000Z",
    },
    {
      id: "13",
      appName: "Apple Music",
      icon: "spotify",
      category: "entertainment",
      pricing: 10,
      status: "active",
      payment: "credit card",
      paymentDate: "2024-09-01T00:00:00.000Z",
    },
    {
      appName: "some article",
      icon: "medium",
      category: "education",
      pricing: 233,
      status: "active",
      payment: "dana",
      paymentDate: "2024-08-29T13:08:58.272Z",
      id: "9W5b0YD",
    },
    {
      appName: "some article",
      icon: "medium",
      category: "education",
      pricing: 455,
      status: "active",
      payment: "dana",
      paymentDate: "2024-08-29T13:12:40.953Z",
      id: "Q7Ydcl8",
    },
    {
      appName: "some article",
      icon: "medium",
      category: "education",
      pricing: 11,
      status: "active",
      payment: "ovo",
      paymentDate: "2024-08-29T13:28:45.280Z",
      id: "0XYNUB9",
    },
    {
      appName: "some article",
      icon: "medium",
      category: "education",
      pricing: 11,
      status: "active",
      payment: "ovo",
      paymentDate: "2024-08-29T13:29:54.191Z",
      id: "N0rNRUC",
    },
    {
      appName: "clip studio paint",
      icon: "category-creative",
      category: "work",
      pricing: 122,
      status: "active",
      payment: "ovo",
      paymentDate: "2024-09-02T13:31:45.146Z",
      id: "-23dG1p",
    },
    {
      appName: "Jira",
      icon: "jira",
      category: "work",
      pricing: 57,
      status: "active",
      payment: "gopay",
      paymentDate: "2024-09-02T13:32:20.131Z",
      id: "rDF2IVw",
    },
    {
      appName: "Hulu",
      icon: "disney",
      category: "entertainment",
      pricing: 1200,
      status: "active",
      payment: "credit card",
      paymentDate: "2024-09-02T16:02:50.615Z",
      id: "IW5fWwg",
    },
    {
      appName: "Hulu",
      icon: "disney",
      category: "entertainment",
      pricing: 43,
      status: "active",
      payment: "credit card",
      paymentDate: "2024-09-02T16:03:44.219Z",
      id: "pGAD0qp",
    },
    {
      appName: "dicoding",
      icon: "category-education",
      category: "education",
      pricing: 100,
      status: "active",
      payment: "dana",
      paymentDate: "2024-09-02T17:27:53.316Z",
      id: "-HbS_tv",
    },
    {
      appName: "bagas Dribbble",
      icon: "dribbble",
      category: "games",
      pricing: 222,
      status: "active",
      payment: "gopay",
      paymentDate: "2024-09-02T19:37:10.260Z",
      id: "IAL-agB",
    },
    {
      appName: "dicoding",
      icon: "category-education",
      category: "education",
      pricing: 100,
      status: "active",
      payment: "dana",
      paymentDate: "2024-09-02T19:39:37.478Z",
      id: "PfopYsI",
    },
    {
      appName: "dicoding",
      icon: "category-education",
      category: "education",
      pricing: 100,
      status: "active",
      payment: "dana",
      paymentDate: "2024-09-02T19:42:38.508Z",
      id: "XuY3gtm",
    },
    {
      appName: "dicoding",
      icon: "category-education",
      category: "education",
      pricing: 100,
      status: "active",
      payment: "dana",
      paymentDate: "2024-09-02T19:46:43.884Z",
      id: "DPcTCSB",
    },
    {
      appName: "dicoding",
      icon: "category-education",
      category: "education",
      pricing: 100,
      status: "active",
      payment: "dana",
      paymentDate: "2024-09-02T19:47:15.412Z",
      id: "1AmizRU",
    },
    {
      appName: "dicoding",
      icon: "category-education",
      category: "education",
      pricing: 100,
      status: "active",
      payment: "dana",
      paymentDate: "2024-09-02T19:47:37.946Z",
      id: "nanf-pa",
    },
    {
      appName: "dicoding",
      icon: "category-education",
      category: "education",
      pricing: 100,
      status: "active",
      payment: "dana",
      paymentDate: "2024-09-02T19:47:41.229Z",
      id: "kcmw_wk",
    },
    {
      appName: "dicoding",
      icon: "category-education",
      category: "education",
      pricing: 100,
      status: "active",
      payment: "dana",
      paymentDate: "2024-09-02T19:47:43.924Z",
      id: "sylJf0s",
    },
    {
      appName: "dicoding",
      icon: "category-education",
      category: "education",
      pricing: 100,
      status: "active",
      payment: "dana",
      paymentDate: "2024-09-02T19:47:51.108Z",
      id: "5jE5qDs",
    },
    {
      appName: "dicoding",
      icon: "category-education",
      category: "education",
      pricing: 100,
      status: "active",
      payment: "dana",
      paymentDate: "2024-09-02T19:47:53.684Z",
      id: "b8bRvO6",
    },
    {
      appName: "YouTube Music",
      icon: "youtube",
      category: "entertainment",
      pricing: 55,
      status: "active",
      payment: "OVO",
      paymentDate: "2024-09-05T13:47:34.105Z",
      id: "UOvlSD5",
    },
    {
      appName: "google meet",
      icon: "gmail",
      category: "work",
      pricing: 333,
      status: "active",
      payment: "ovo",
      paymentDate: "2024-09-05T15:56:23.396Z",
      id: "-TAKWpb",
    },
    {
      appName: "prime videos indonesia",
      icon: "prime",
      category: "entertainment",
      pricing: 280,
      status: "active",
      payment: "gopay",
      paymentDate: "2024-09-05T15:58:17.916Z",
      id: "U1exHLo",
    },
  ],
  profiles: [
    {
      name: "John Deez",
      email: "john.doe@example.com",
      location: "united states",
      phoneNumber: "+1234567890",
      id: "1",
    },
    {
      name: "asasasdfdfdfssss",
      email: "jane.WWWWWWWWWWWWWWWW@example.com",
      location: "japan",
      phoneNumber: "+0987654321",
      id: "2",
    },
    {
      id: "3",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      pass: "alice789",
      isVerified: true,
      phoneNumber: "+1122334455",
    },
    {
      name: "Bob Brownlee",
      email: "sasass@example.co.id",
      location: "united states",
      phoneNumber: "+998877665512",
      id: "4",
    },
    {
      name: "nama",
      email: "email@mail.com",
      location: "united states",
      phoneNumber: "121212121212",
      id: "5",
    },
    {
      id: "1723987227893",
      name: "Ewing Hade",
      email: "mijiaji17@gmail.com",
      pass: "121212",
      is_verified: false,
      phoneNumber: "",
    },
    {
      id: "1723987325125",
      name: "simename",
      email: "example@gmail.com",
      pass: "121212",
      is_verified: false,
      phoneNumber: "",
    },
    {
      id: "1723987492811",
      name: "random",
      email: "ex@mail.ocm",
      pass: "121212",
      is_verified: false,
      phoneNumber: "",
    },
    {
      name: "4 BIG GUYS",
      email: "new@mail.com",
      location: "indonesia",
      phoneNumber: "1234512345",
      id: "1723987680888",
    },
    {
      id: "1723987810980",
      name: "Taylor charlotte",
      email: "taylor@mail.com",
      pass: "121212",
      is_verified: false,
      phoneNumber: "",
    },
    {
      id: "1724419169272",
      name: "nama",
      email: "example@mail.ocm",
      pass: "12121212",
      is_verified: false,
      phoneNumber: "",
    },
    {
      id: "1724680214599",
      name: "Bob Brownlee",
      email: "hadi@mail.com",
      pass: "121212",
      is_verified: false,
      phoneNumber: "",
    },
    {
      id: "1724690804037",
      name: "example",
      email: "example@mail.com",
      pass: "121212",
      is_verified: false,
      phoneNumber: "",
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

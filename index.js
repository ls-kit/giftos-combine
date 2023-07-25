const express = require("express");
const { MongoClient } = require("mongodb");
const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const secretKey = process.env.JWT_SECRET_KEY || "your-secret-key";

app.use(cors());
app.use(express.json());

// connect database
const uri = process.env.MONGO_URL;

// console.log(uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// console.log(client);

// making a function there we'll operate crud

const run = async () => {
  try {
    // connect db
    await client.connect();
    // create database name
    const database = client.db("crud-practice");
    // create a collection
    const userCollection = database.collection("user");

    // User Registration
    app.post("/register", async (req, res) => {
      try {
        const { name, email, password } = req.body;
        console.log(req.body);
        // Check if the username already exists
        const existingUser = await userCollection.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ error: "User already exists" });
        }

        // Hash the password before storing it

        const hashedPassword = await bcrypt.hash(password, 10);
        const token = jwt.sign({ email }, secretKey, {
          expiresIn: "1h", // Set the token expiration time
        });

        // Create a new user object with the hashed password
        const newUser = {
          name,
          email,
          password: hashedPassword,
          token,
        };
        // console.log(newUser);
        const result = await userCollection.insertOne(newUser);
        console.log(result);
        res.json(result);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // User Login
    app.post("/login", async (req, res) => {
      try {
        const { email, password } = req.body;

        // Find the user by username
        const user = await userCollection.findOne({ email });
        if (!user) {
          res
            .status(401)
            .json({ error: "User not found with this email. please register first" });
          return;
        }

        // Compare the hashed password with the input password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          res.status(401).json({ error: "Invalid password" });
          return;
        }
       

        res.json(user);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // Secure your APIs with JWT authentication middleware
    const verifyToken = (req, res, next) => {
      const token = req.header("Authorization")?.replace("Bearer ", "");
      if (!token) {
        return res.status(401).json({ error: "Access denied. Token missing." });
      }

      try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
      } catch (error) {
        res.status(401).json({ error: "Invalid token." });
      }
    };

    // post data

    app.post("/user", async (req, res) => {
      try {
        const user = req.body;
        console.log(user);
        const result = await userCollection.insertMany(user);
        console.log(result);
        res.json(result);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // get data
    app.get("/user", async (req, res) => {
      try {
        const data = await userCollection.find({}).toArray();
        res.send(data);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // update data
    app.patch("/user/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const updatedData = req.body;
        const result = await userCollection.findOneAndUpdate(
          { _id: new ObjectId(id) },
          { $set: updatedData }
        );
        console.log(result);
        res.json(result);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // delete data
    app.delete("/user/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const result = await userCollection.findOneAndDelete({
          _id: new ObjectId(id),
        });
        console.log(result);
        res.json(result);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
  } catch (error) {
    console.log(error);
  } finally {
    // await client.close();
  }
};
run().catch(console.dir);

// first server api
app.get("/", (req, res) => {
  res.send("getting data properly...");
});

app.listen(port, () => {
  console.log("server is running on port", port);
});

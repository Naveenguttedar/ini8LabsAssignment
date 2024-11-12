import Fastify from "fastify";
import cors from "@fastify/cors";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
const db = new Low(new JSONFile("db.json"), { user: "naveen" });

async function startServer() {
  const fastify = Fastify({ logger: true });

  // Initialize the database
  async function initializeDB() {
    await db.read();
    if (!db.data) {
      db.data = { users: [] };
      await db.write(); // Write default structure to db.json
    }
  }

  await fastify.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  });

  fastify.get("/users", async (req, res) => {
    await db.read();
    res.status(200).send(db.data.users);
  });

  fastify.get("/", async (req, res) => {
    return res.send("Hello World!");
  });

  fastify.post("/users", async (req, res) => {
    const newUser = req.body;
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).send({ error: "Name and email are required." });
    }
    db.data.users = db.data.users || [];
    await db.read();
    newUser.id = db.data.users.length + 1;
    db.data.users.push(newUser);
    await db.write();
    res.status(201).send(newUser);
  });
  fastify.delete("/users/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    db.data.users = db.data.users.filter((user) => user.id != id);
    await db.write();
    res.status(200).send({ message: `User with id ${id} deleted` });
  });

  fastify.put("/users/:id", async (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    db.data.users = db.data.users.map((user) => {
      if (user.id == id) {
        return { ...user, ...updatedUser };
      } else return user;
    });
    db.write();
    res.status(200).send({ message: `User with id ${id} updated` });
  });
  await initializeDB();
  try {
    await fastify.listen({ host: "0.0.0.0", port: process.env.PORT || 3001 });
    console.log("Server is running ");
  } catch (err) {
    console.error("Error starting server:", err);
  }
}

startServer();

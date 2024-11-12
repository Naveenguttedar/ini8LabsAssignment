const fastify = require("fastify")({ logger: true });
const cors = require("@fastify/cors");
fastify.get("/", async (req, res) => {
  return JSON.stringify({ message: "Helo world" });
});
const start = async () => {
  await fastify.register(cors, {
    origin: "*",
    methosds: ["GET", "POST"],
  });
  try {
    await fastify.listen({ port: 3000 });
    console.log("Server is running on port 3000");
  } catch (err) {
    console.log(err);
  }
};
start();

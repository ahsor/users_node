const express = require("express");
const usersRoutes = require("./routes/users.js");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/users", usersRoutes);
app.get("/", (req, res) => res.send("Welcome Root!"));
app.all("*", (req, res) =>res.send("존재하지 않습니다."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));

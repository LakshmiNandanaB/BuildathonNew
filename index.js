const express = require("express");
const cors = require("cors");
const fs = require("fs"); // to read JSON

const app = express();
app.use(cors());
app.use(express.json());

// login route
app.post("/api/login", (req, res) => {
  const { studentId, password } = req.body;

  // read students.json
  const studentsData = fs.readFileSync("students.json", "utf-8");
  const students = JSON.parse(studentsData);

  // check if student exists
  const student = students.find(
    (s) => s.studentId === studentId && s.password === password
  );

  if (student) {
    res.status(200).json({ message: `Login successful, welcome ${student.name}` });
  } else {
    res.status(401).json({ message: "Invalid Student ID or Password" });
  }
});

// start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

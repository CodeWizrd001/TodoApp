var mongoose = require("mongoose"),
  db;

const dotenv = require("dotenv");
dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.PORT;
const db_name = process.env.DB_NAME;

// Database Setup
if (!db) {
  mongoose
    .connect(`mongodb://${username}:${password}@${host}:${port}/${db_name}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("Now connected to MongoDB!"))
    .catch(err => console.error(`Something went wrong ${err}`));
  db = mongoose.connection;
}

// Schemas
const UserSchema = {
  name: { type: String, required: true },
  password: { type: String, required: true },
  token: { type: String }
};

const TaskSchema = {
  id: { type: Number, required: true },
  user: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  Time: { type: String }
};

// Models
const User = mongoose.model("Users", UserSchema);
const Task = mongoose.model("Tasks", TaskSchema);

module.exports = {
  db: db,
  User: User,
  Task: Task
};

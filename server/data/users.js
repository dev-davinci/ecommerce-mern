import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "Muhammad",
    email: "muhammad@muhammad.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "Ahmed",
    email: "ahmed@ahmed.com",
    password: bcrypt.hashSync("12345", 10),
  },
];

export default users;

import type { NextApiRequest, NextApiResponse } from "next";

import User from "../../../models/UserModel";
import connect from "../../../utils/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    try {
      // Connect to the MongoDB database
      await connect();

      // Check if a user with the provided email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash the password
      //   const hashedPassword = await bcrypt.hash(password, 12);

      // Create a new user document
      const user = new User({
        name,
        email,
        password,
      });

      // Save the user document to the database
      await user.save();

      res.status(201).json({ message: "User created" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Something went wrong" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

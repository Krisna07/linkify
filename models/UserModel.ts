import { Document, model, Schema } from "mongoose";

interface User {
  name: string;
  email: string;
  password: string;
}

export interface userModel extends User, Document {}

const userSchema = new Schema<userModel>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model<userModel>("Client", userSchema);

export default User;

import mongoose, { Schema, Document, Model } from "mongoose";

// Define the interface for the User model
export interface IUser extends Document {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

// Create a schema corresponding to the document interface
const UserSchema: Schema<IUser> = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the Mongoose model
const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;

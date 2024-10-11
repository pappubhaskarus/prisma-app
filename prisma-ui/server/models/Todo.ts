import mongoose, { Schema, Document, Model } from "mongoose";

// Define the interface for the Todo model
export interface ITodo extends Document {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Create a schema corresponding to the document interface
const TodoSchema: Schema<ITodo> = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the Mongoose model
const Todo: Model<ITodo> =
  mongoose.models.Todo || mongoose.model<ITodo>("Todo", TodoSchema);

export default Todo;

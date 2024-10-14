import mongoose, { Schema, Document, Model } from "mongoose";

// Define the interface for the Metadata model
export interface IMetadata extends Document {
  id: string;
  type: string;
  value: string;
  parent: Schema.Types.ObjectId;
  extras: [
    {
      name: string;
      values: Schema.Types.Mixed;
    }
  ];
  createdAt: Date;
  updatedAt: Date;
}

// Create a schema corresponding to the document interface
const MetadataSchema: Schema<IMetadata> = new Schema(
  {
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    parent: {
      type: Schema.Types.ObjectId,
      ref: "Metadata",
      required: false,
    },
    extras: [
      {
        name: String,
        values: Schema.Types.Mixed,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Create and export the Mongoose model
const Metadata: Model<IMetadata> =
  mongoose.models.Metadata ||
  mongoose.model<IMetadata>("Metadata", MetadataSchema);

export default Metadata;

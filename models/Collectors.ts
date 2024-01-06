import mongoose, { Schema, Model } from "mongoose";
import { ICollector } from "../interfaces";

const collectorSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const CollectorModel: Model<ICollector> =
  mongoose.models.Collector || mongoose.model("Collector", collectorSchema);

export default CollectorModel;

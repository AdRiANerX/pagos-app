import mongoose, { Schema, Model } from "mongoose";
import { IPerson } from "../interfaces";

const abonoSchema = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      index: true,
      required: true,
      auto: true,
    },
    date: { type: String, required: true },
    quantity: { type: String, required: true },
    idCollector: { type: String, required: true },
    nameOfCollector: { type: String, required: true },
  },
  { timestamps: true }
);

const personSchema = new Schema(
  {
    name: { type: String, required: true },
    manzana: { type: String, required: true },
    birthdate: { type: String, required: true },
    street: { type: String, required: true },
    movilPhone: { type: String },
    civilState: { type: String, required: true },
    abonos: { type: [abonoSchema] },
  },
  { timestamps: true }
);

const PersonModel: Model<IPerson> =
  mongoose.models.Person || mongoose.model("Person", personSchema);

export default PersonModel;

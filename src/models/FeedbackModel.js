import { Schema, model } from "mongoose";
const feedbackSchema = new Schema({
  foodId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  numOfStars: {
    type: Number,
  },
  content: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
  },
});
export const Feedback = model("Feedback", feedbackSchema, "Feedback");

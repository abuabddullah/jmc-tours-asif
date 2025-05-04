import mongoose from "mongoose";
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  review: {
    type: String,
  },
});

const tourSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: [true, "Image is required"],
    default: "https://i.ibb.co/jvBVcJh/tour-9.jpg",
  },
  location: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    enum: ["Wildlife", "Adventure"],
    default: "Adventure",
  },
  tourCount: {
    type: Number,
    required: true,
    default: 0,
  },
  ratings: {
    type: Number,
    min: 0,
    max: 5,
  },
  cost: {
    type: Number,
    required: true,
  },
  reviews: [reviewSchema],
});

const TourModel = mongoose.models.Tour || mongoose.model("Tour", tourSchema);

export default TourModel;

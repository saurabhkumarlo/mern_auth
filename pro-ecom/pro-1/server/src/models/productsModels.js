const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter your product name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter Your product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter Your product Price"],
    maxLength: [8, "Price cannot be exceed 8 characters"],
  },

  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      public_url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter your product Category"],
  },
  Stock: {
    type: Number,
    required: [true, "Please Enter Your Product Stock"],
    default: 1,
    maxLength: [4, "Stock cannot exceed 4 characters"],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      Comment: {
        type: String,
        required: true,
      },
    },
  ],
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);

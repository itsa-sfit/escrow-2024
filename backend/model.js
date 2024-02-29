import mongoose from "mongoose";

const { Schema } = mongoose;

// User document Schema
const UserSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  storyline: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
  },
  endTime: {
    type: Date,
  },
  progress: {
    type: Number,
    default: 0,
  },
});

// User document Model
const UserModel = mongoose.model("user", UserSchema);

// Group document Schema
const StorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quiz: [
    {
      _id: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true,
      },
      question: {
        type: String,
        required: true,
      },
      answer: [
        {
          type: String,
        },
      ],
      hint: {
        type: String, 
      },
    },
  ],
});

// Group document Model
const StoryModel = mongoose.model("story", StorySchema);

// Export
export { UserModel, StoryModel };

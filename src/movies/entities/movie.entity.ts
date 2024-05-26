import * as mongoose from 'mongoose';

export const Movie = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'movie name is a required filed'],
    unique: true,
  },
  duration: {
    type: Number,
    
  },
  createAt: {
    type: Date,
    default:Date.now()
  },
  ratings: {
    type: Number,
    default:1.0
  }
    
});

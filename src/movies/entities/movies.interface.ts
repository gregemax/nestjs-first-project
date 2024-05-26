import { Document } from "mongoose";

export interface moviesinterface extends Document {
  name: string;
  duration: number;
  rating: Date;
}
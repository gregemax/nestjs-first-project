import { IsNotEmpty } from "class-validator";

export class CreateMovieDto {
    @IsNotEmpty()
    name: string;
    
  duration: number;
  rating: Date;
}

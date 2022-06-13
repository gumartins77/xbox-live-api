export class Game {
  id?: string;
  Title: string;
  CoverImageUrl: string;
  Description: string;
  Year: number;
  ImdbScore: number;
  TrailerYouTubeUrl: string;
  GameplayYouTubeUrl: string;
  genres: string[]
  createdAt?: Date;
  updatedAt?: Date;
}

export interface movie {
  Position: number;
  Const: string;
  Created: Date;
  Modified: Date;
  Plot: string;
  Title: string;
  OriginalTitle: string;
  Poster: string;
  URL: string;
  TitleType: string;
  IMDbRating: number;
  RuntimeMins: number;
  Year: number;
  Genres: string;
  NumVotes: number;
  ReleaseDate: Date;
  Directors: string;
  YourRating: number | null;
  DateRated: Date | null;
  Category: string;
}

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
  imdbRating: string;
  RuntimeMins: number;
  Year: number;
  Genre: string;
  NumVotes: number;
  ReleaseDate: Date;
  Directors: string;
  YourRating: number | null;
  DateRated: Date | null;
  Category: string;
  Reviewed: boolean;
}

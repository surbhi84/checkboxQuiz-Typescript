export type Level = "EASY" | "MED" | "HARD";
export type Role = "ADMIN" | "PLAYER";
export type CategoryType = "FEATURED" | "PERSONAL";
export interface UserRaw {
  id: string;
  fname: string;
  lname: string;
  username: string;
  password: string;
  dob: string;
  contact: number;
  email: string;
  createdAt: string;
  updatedAt: string;
  score: number;
  quizPlayed: number;
  recentlyPlayed: Array<{ category: CategoryRaw; level: Level }>;
  correctAnswered: number;
  incorrectAnswered: number;
  role: Role;
}
export interface QuestionRaw {
  id: string;
  statement: string;
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  correct_option: string;
  tags: string[];
  level: Level;
}
export interface CategoryRaw {
  id: string;
  title: string;
  description: string;
  image: string;
  category_type: CategoryType;
  tags: string[];
  timer_detail: {
    level: Level;
    time: number;
  }[];
}
export interface HighscoresRaw {
  id: string;
  rank: number;
  username: string;
  score: number;
}
export interface UserModel extends UserRaw {
  questionIds: string[];
  categoryIds: string[];
}
export interface QuestionModel extends QuestionRaw {
  creatorId: string;
}
export interface CategoryModel extends CategoryRaw {
  creatorId: string;
}
export interface HighscoresModel extends HighscoresRaw {
  userId: string;
}

export interface UserResponse
  extends Omit<UserModel, "password" | "updatedAt"> {}

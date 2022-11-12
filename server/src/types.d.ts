export interface Question {
  question_id: int;
  title: string;
  question_title: string;
  problem_url: string;
  difficulty_level: int;
  difficulty: string;
}

export interface QuestionData {
  question_id: int;
  question: string;
}

export interface Companies {
  question_id: int;
  companies: string[];
}
export interface Tags {
  question_id: int;
  tags: string[];
}

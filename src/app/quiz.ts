export class Quiz {
    constructor(
      private category: string,
      private type: string,
      private difficulty: string,
      private question: string,
      private correct_answer: string,
      private incorrect_answers: string[],
    ) {
    }
  }

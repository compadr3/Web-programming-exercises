/*
* Sporządź plik klasy.js i zaimplementuj w nim składającą się z co najmniej dwóch klas hierarchię
generalizacji-specjalizacji o tematyce zbieżnej z wybraną przez Ciebie dziedziną problemową
projektu semestralnego. W powstałym kodzie uwzględnij:
• funkcję pełniącą rolę konstruktora
• adekwatne do semantyki poszczególnych algorytmów udostępnienie getterów i setterów.
* */
//zadanie 1
// classes for quiz app
class Question {
    constructor(statement, answers, correctAnswer) {
        this.statement = statement;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    getStatement() {
        return this.statement;
    }

    getAnswers() {
        return this.answers;
    }

    getCorrectAnswer() {
        return this.correctAnswer;
    }

    setStatement(statement) {
        this.statement = statement;

    }

    setAnswer(answer) {
        this.answer = answer;
    }

    setCorrectAnswer(correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

}

var answers = ["8","28","34","90"];
var question = new Question("What is the answer?", answers);
console.log(question.getStatement());
question.setCorrectAnswer(answers[3]);
console.log(question.getAnswers());
console.log("Correct answer " + question.getCorrectAnswer());

class WriteAnswerQuestion extends Question {
    constructor(statement, correctAnswers, answer) {
        super(statement);
        this.correctAnswers = correctAnswers;
        this.answer = answer;
    }
    getAnswer() {
        return this.answer;
    }
    getCorrectAnswers() {
        return this.correctAnswers;
    }
    setAnswer(answer) {
        super.setAnswer(answer);
    }

    setCorrectAnswers(correctAnswer) {
        super.setCorrectAnswer(correctAnswer);
    }

    isNumber(char){
        return char >= "0" && char <= "9";
    }
    checkAnswer(answer) {
        var correctAnswers = this.getCorrectAnswers();
        if(!this.isNumber(answer[0])){
            console.log("Answer is not a number");
            answer = answer.toLowerCase();
            for (let i = 0; i < answer.length; i++) {
                if(answer[i] < "a" || answer[i] > "z"){
                    answer = answer.replace(answer[i], "");
                    i--;
                }
            }
            console.log("Answer after cleaning: " + answer);
        }
        for (let i = 0; i < correctAnswers.length; i++) {
            if(answer === correctAnswers[i]){
                return true;
            }
        }
        return false;
    }
}

writeAnswerQuestion = new WriteAnswerQuestion("40 + 2 = ?", ["42","fortytwo"]);
writeAnswerQuestion.setAnswer(["fortytwo","42","forty two","forty-two"]);
writeAnswerQuestion.setAnswer("42");
console.log(writeAnswerQuestion.getStatement());
console.log(writeAnswerQuestion.getAnswer());
console.log(writeAnswerQuestion.checkAnswer(writeAnswerQuestion.getAnswer()));
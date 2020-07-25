import React, { Component } from "react";
import classes from "./Quiz.module.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

export default class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: "How color is sky?",
        rightAnswerId: 2,
        id: 1,
        answers: [
          { text: "Black", id: 1 },
          { text: "Blue", id: 2 },
          { text: "Red", id: 3 },
          { text: "Green", id: 4 },
        ],
      },
      {
        question: "When Moscow was esteblished?",
        rightAnswerId: 1,
        id: 2,
        answers: [
          { text: "1147", id: 1 },
          { text: "1204", id: 2 },
          { text: "1148", id: 3 },
          { text: "1201", id: 4 },
        ],
      },
    ],
  };

  onAnswerClickhandler = (answerId) => {
    const results = this.state.results;

    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "success") {
        console.log("You try click on right answer more than one time!");
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      if (!results[answerId]) {
        results[answerId] = "success";
      }
      this.setState({
        answerState: { [answerId]: "success" },
        results: results,
      });

      const timeOut = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }

        window.clearTimeout(timeOut);
      }, 1000);
    } else {
      results[answerId] = "error";
      this.setState({
        answerState: { [answerId]: "error" },
        results: results,
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  retryHandler = () => {
    this.setState({
      results: {},
      isFinished: false,
      activeQuestion: 0,
      answerState: null
    })
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Please, answer the question</h1>

          {this.state.isFinished ? (
            <FinishedQuiz 
              results={this.state.results}
              quiz={this.state.quiz}
              onRetry={this.retryHandler}
            />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickhandler}
              quizLenght={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

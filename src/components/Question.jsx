import { useState } from 'react';
import Answers from './Answers.jsx';
import QUESTIONS from '../questions.js';

export default function Question({ index, onSelectAnswer }) {
    const [showNextButton, setShowNextButton] = useState(false);

    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null,
    });

    let timer = 10000;

    if (answer.selectedAnswer) {
        timer = 1000;
    }

    if (answer.isCorrect !== null) {
        timer = 2000;
    }

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null,
        });

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer,
            });

            setShowNextButton(true);
        }, 1000);
    }

    function handleNextQuestion() {
        // console.log(answer);
        onSelectAnswer(answer);
    }

    let answerState = '';

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'answered';
    }

    return (
        <div id="question">
            <h2>{QUESTIONS[index].text}</h2>
            <Answers answers={QUESTIONS[index].answers} selectedAnswer={answer.selectedAnswer} answerState={answerState} onSelect={handleSelectAnswer} />
            {showNextButton && (
                <div className="actions">
                    <button onClick={handleNextQuestion}>Next</button>
                </div>
            )}
        </div>
    );
}

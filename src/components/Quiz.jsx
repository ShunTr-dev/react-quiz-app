import { useState, useCallback } from 'react';

import QUESTIONS from '../questions.js';
import Question from './Question.jsx';
import Summary from './Summary.jsx';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    console.log(userAnswers);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }, []);

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers} />;
    }

    return (
        <div id="quiz">
            <Question key={activeQuestionIndex} index={activeQuestionIndex} onSelectAnswer={handleSelectAnswer} />
        </div>
    );
}

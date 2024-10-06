import { useState, useCallback } from 'react';

import QUESTIONS from '../questions.js';
<<<<<<< HEAD
import Question from './Question.jsx';
import Summary from './Summary.jsx';
=======
import quizCompleteImg from '../assets/quiz-complete.png';
import Question from './Question.jsx';
>>>>>>> 1e1532b77cf2738f834398ebbbe3f1f972e8d7d8

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers} />;
    }

    return (
        <div id="quiz">
            <Question key={activeQuestionIndex} index={activeQuestionIndex} onSelectAnswer={handleSelectAnswer} onSkipAnswer={handleSkipAnswer} />
        </div>
    );
}

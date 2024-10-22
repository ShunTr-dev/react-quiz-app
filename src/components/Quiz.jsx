import { useState, useCallback } from 'react'

import QUESTIONS from '../questions.jsx'
import Question from './Question.jsx'
import Summary from './Summary.jsx'

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([])
    const [showExplanation, setShowExplanation] = useState(false)

    const activeQuestionIndex = userAnswers.length
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        })
    }, [])

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers} />
    }

    return (
        <>
            <div id="quiz" className="quiz">
                <Question
                    key={activeQuestionIndex}
                    index={activeQuestionIndex}
                    onSelectAnswer={handleSelectAnswer}
                    setShowExplanation={setShowExplanation}
                />
            </div>
            {showExplanation && (
                <div className="quiz" style={{ marginTop: '20px', textAlign: 'left', whiteSpace: 'pre-line' }}>
                    {QUESTIONS[activeQuestionIndex].explanation}
                </div>
            )}
        </>
    )
}

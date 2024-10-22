import { useState } from 'react'
import Answers from './Answers.jsx'
import QUESTIONS from '../questions.jsx'

export default function Question({ index, onSelectAnswer, setShowExplanation }) {
    const [showNextButton, setShowNextButton] = useState(false)

    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null,
    })

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null,
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer,
            })

            setShowExplanation(true)
            setShowNextButton(true)
        }, 1000)
    }

    function handleNextQuestion() {
        onSelectAnswer(answer)
        setShowExplanation(false)
    }

    let answerState = ''

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong'
    } else if (answer.selectedAnswer) {
        answerState = 'answered'
    }

    return (
        <div id="question">
            <h2 style={{ whiteSpace: 'pre-line' }}>{QUESTIONS[index].text}</h2>
            <Answers
                answers={QUESTIONS[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
            {showNextButton && (
                <div className="actions">
                    <button className="button" onClick={handleNextQuestion}>
                        Next
                    </button>
                </div>
            )}
        </div>
    )
}

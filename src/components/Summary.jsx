import QUESTIONS from '../questions.jsx'

export default function Summary({ userAnswers }) {
    return (
        <div id="summary">
            <h2>Hola mundo 👋</h2>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = 'user-answer'

                    if (answer.selectedAnswer === QUESTIONS[index].answers[0]) {
                        cssClass += ' correct'
                    } else {
                        cssClass += ' wrong'
                    }

                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className={cssClass}>{answer.selectedAnswer}</p>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

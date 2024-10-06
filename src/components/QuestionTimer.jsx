import { useEffect, useState } from 'react';

export default function QuestionTimer({ timeOut, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeOut);

    useEffect(() => {
        setTimeout(onTimeout, timeOut);
    }, [onTimeout, timeOut]);

    useEffect(() => {
        setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);
    }, []);

    return <progress id="question-time" value={remainingTime} max={timeOut} />;
}

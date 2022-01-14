import React, { useState } from 'react'
import AnswerButton from '../AnswerButton/AnswerButton'

const Answers = ({options}) => {


const [answer, setAnswer] = useState(false);

const answerHandler = () => {
    setAnswer(!answer);
    if(answer == false) {
        
    }

}



    return (
        <div className="quiz__answers">
            {
                options.map((el,i) => {
                    return (
                        <AnswerButton i={i} answerId={el.answerId} onClick={answerHandler} text = {el.answerText}/>
                    )
                })
            }
        </div>
    )
}

export default Answers

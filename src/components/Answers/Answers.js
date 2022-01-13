import React from 'react'
import AnswerButton from '../AnswerButton/AnswerButton'

const Answers = ({options}) => {


    return (
        <div className="quiz__answers">
            {
                options.map((el,i) => {
                    return (
                        <AnswerButton i={i} id={el.id} text = {el.answerText}/>
                    )
                })
            }
        </div>
    )
}

export default Answers

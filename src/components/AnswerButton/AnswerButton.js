import React, {useState} from 'react'

const AnswerButton = (props) => {
    
    const [clicked, setClicked] = useState(false)
    const {text, i, id} = props

    function handleClick() {
        // button.classList.toggle('answer--selected')
        setClicked(!clicked)
        // setSelected()
    }
    return (
          <button className={`answer ${clicked ? 'answer--selected' :''}`} key={i} onClick={handleClick}>{text}</button>  
    )
}

export default AnswerButton

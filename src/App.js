import React, {useState,useEffect} from 'react'
import Questions from './components/Questions/Questions';
import Answers from './components/Answers/Answers';
import './App.scss'

function App() {

    const [points, setPoints] = useState(0);
    const [timer, setTimer] = useState(120);
    const [index, setIndex] = useState(1);
    const [reset, setReset] = useState(false);
    const [data,setData] = useState(null);
    const [clicked, setClicked] = useState(false)
  
    const niz=[3,1,2];
    const niz2=[1,2,3];

    console.log(niz.sort().toString()===niz2.toString());

    console.log(index);

    async function getData() {
      const response = await fetch('http://localhost:3000/questions');
      const dataArr = await response.json();
      setData(dataArr);
    }

    function handleClick() { 
      setClicked(!clicked)
    }

    function handleNext() {
      setIndex(index + 1)
      setClicked(!clicked)
    }

    useEffect(() => {
      getData();
    },[])
    
    console.log(data);
  
      return (
        <div className="quiz">
            <div className="container">
                <div className="quiz__points">Points: {points}</div>
                <div className="quiz__reset">Reset<img src={(require('./img/img2.png'))}></img></div>
                <div className="quiz__timer">{timer}</div>
            </div>
          {
            data && data.map((el, i) => {
              if(index===el.id) {
             return(
              <div key={i} className="quiz__section">
                {/* <div>{index===1 ?<button>Previous</button>: <button></button> }</div> */}
                <Questions title={el.title}/>
                <Answers options={el.answerOptions}/>
              </div>
             ) 
            }
            })
          }
          <div className="quiz__buttons">
             <div>{index>1 ? <button className="quiz__button" onClick={() => setIndex(index-1)}>Previous</button> : ''}</div> 
              <div>{!clicked ? <button className="quiz__button" onClick={handleClick}>Submit</button> : index!==data.length ? <button onClick={handleNext} className="quiz__button">Next</button> : <button className="quiz__button">Preview</button>}</div>
          </div>
        </div>
      )
    
  }

  export default App
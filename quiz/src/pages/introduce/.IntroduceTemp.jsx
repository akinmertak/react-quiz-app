import React, { useState } from 'react'
import Dropdown from '../../component/dropdown/Dropdown'
import './Introduce.css'
import { useNavigate } from 'react-router-dom'
import quizLogo from '../../asset/quiz.jpeg'
const Introduce = () => {
    const difficulty =["easy","medium","hard"]
    const [difficultyChange,setDifficultyChange] = useState('easy')
    const navigate = useNavigate()
    const TotalQuestions = 10;
    const startQuiz = () =>{
      if(difficultyChange){
        navigate(`/quiz/${difficultyChange}/${TotalQuestions}`)
      }
    }
  return (
    <div className='introduce'>
        <div className="introduce-container">
            <img src={quizLogo} alt="Quiz Logo" style={{ width: '200px', marginBottom: '20px' }} />
            <Dropdown data ={difficulty}setDifficultyChange ={setDifficultyChange}/>
            <div onClick={startQuiz} className='introduce-btn'>Quiz'e Başla</div>


        </div>
    </div>
  )
}


export default Introduce
import React, { useEffect, useState } from 'react'
import './Quiz.css'
import { useParams } from 'react-router-dom'
import * as api from "../../api/api"
import QuestionCard from '../../component/questionCard/QuestionCard'
import Modal from '../../modal/Modal' // Güncellenen yol

const Quiz = () => {
  const { difficulty, amount } = useParams()
  const [questionsData, setQuestionData] = useState([])
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(0)
  const [modal, setModal] = useState(false) // Başlangıçta false olmalı

  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData(difficulty, amount)
      setQuestionData(data) // Gelen veriyi state'e aktarıyoruz
    }
    getData();
  }, [difficulty, amount]) // [] Boş bırakırsan veya değişkenleri eklersen sürekli çalışmaz

  return (
    <div className='quiz'>
      {
        modal ? (
          <Modal score={score} />
        ) : (
          // Veri henüz gelmediyse hata vermemesi için questionsData.length kontrolü
          questionsData.length > 0 && (
            <QuestionCard
              questionsData={questionsData}
              score={score}
              setScore={setScore}
              count={count}
              setCount={setCount}
              modal={modal}
              setModal={setModal}
            />
          )
        )
      }
    </div>
  )
}

export default Quiz
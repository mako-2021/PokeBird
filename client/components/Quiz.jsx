import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import quizData from '../apis/quizData.js'

function Quiz() {
    const [load, setLoad] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false);

    function handleClick() {
        setLoad(true)
    }

    function handleAnswer(isCorrect) {
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizData.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }

    }

    return (
        <div className='quiz-wrapper'>
            {load ?
                <div className='row'>
                    {showScore ? (
                        <div className='column' style={{ width: '600px' }}>
                            <div className='card' style={{ width: '400px' }}>
                                <h2>You scored {score} out of {quizData.length}</h2>
                                <div>Correct answers:
                                    <ul className='quiz-list'>
                                        {quizData.map((data, i) => <li className='quiz-correct' key={i}>Question {data.id}: {data.questionText} <br /> {data.correctAnswer} <br /> <img src={data.imageURL} style={{ maxWidth: '200px', borderRadius: '10px' }}></img></li>)}
                                    </ul>
                                    Find more on <a href='https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/'>DOC Website</a><br />
                                    This quiz has been made using the information provided on the DOC website (including all photography works). Attribution 4.0 International (CC BY 4.0) <a href='https://creativecommons.org/licenses/by/4.0/legalcode'>Legal Code</a>
                                </div>
                            </div>
                        </div>

                    ) : (
                        <div className='column' style={{ width: '600px' }}>
                            <div className='card' style={{ width: '400px' }} >
                                Question {currentQuestion + 1} /{quizData.length} <br />
                                {quizData[currentQuestion].questionText}
                                <ul className='quiz-answers'>{quizData[currentQuestion].answerOptions.map((answerOption, i) => (<li key={i} > <button className='quiz-button' onClick={() => handleAnswer(answerOption.isCorrect)}>{answerOption.answerText}</button></li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
                :
                <div className='row'>
                    <div className='column'>
                        <div className='card'>
                            <h2 id="quiz">Ngā manu – Birds</h2>
                            <button onClick={handleClick}>Start the quiz</button>
                            <img src='images/placeholder-pidgey.png' style={{ height: '200px', width: '200px', borderRadius: '50%', background: 'white' }}></img>
                        </div>
                    </div>
                </div>
            }
        </div >
    )

}



export default connect()(Quiz)

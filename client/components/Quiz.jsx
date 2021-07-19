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
        <>
            {load ?
                <div className='row'>
                    {showScore ? (
                        <div className='column'>
                            <div className='card'>
                                You scored {score} out of {quizData.length}
                            </div>
                        </div>

                    ) : (
                        <div className='column'>
                            <div className='card'>
                                Question {currentQuestion + 1}/{quizData.length} <br />
                                {quizData[currentQuestion].questionText}
                                <ul>{quizData[currentQuestion].answerOptions.map((answerOption, i) => (<li key={i} > <button onClick={() => handleAnswer(answerOption.isCorrect)}>{answerOption.answerText}</button></li>
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
                            <button onClick={handleClick}>Start a quiz</button>
                            <img src='https://www.doc.govt.nz/thumbs/hero/contentassets/59ca125424394c748fb9988e93411190/brown-kiwi-hero.jpg' style={{ maxWidth: '400px', borderRadius: '10px' }}></img>
                        </div>
                    </div>
                </div>
            }
        </>
    )

}



export default connect()(Quiz)

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
        <div className="ui vertical segment" style={{ padding: '20px', background: '#eeeeee' }}>
            {
                load ?
                    <div className="ui column centered grid" style={{ padding: '40px', display: 'block', margin: '0 auto', textAlign: 'center' }}>
                        {
                            showScore ? (

                                <div >
                                    <h2 className="ui header" style={{ marginTop: '50px' }}>You scored {score} out of {quizData.length}!</h2>
                                    <div>
                                        <h3 className="ui header" style={{ marginBottom: '20px', marginTop: '50px' }}>Correct answers:</h3>
                                        <div className="ui list" style={{ display: 'inline' }}>
                                            {quizData.map((data, i) => <div className="item" style={{ padding: '20px' }} key={i}>
                                                <div className="content">
                                                    <h3 className="header" style={{ margin: '40px' }}>
                                                        Question {data.id}: {data.questionText}
                                                    </h3>
                                                    <div class="description" style={{ textAlign: 'justify' }}> {data.correctAnswer}</div>
                                                    <img className="ui avatar image" style={{ width: '300px', height: 'auto', margin: '30px' }} src={data.imageURL}></img><br />
                                                </div>
                                                <div class="ui section divider"></div>
                                            </div>
                                            )}
                                        </div>
                                        <small>Find more on <a href='https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/' target="_blank">DOC Website</a><br />
                                            This quiz has been made using the information provided on the DOC website (including all photography works). Attribution 4.0 International (CC BY 4.0) <a href='https://creativecommons.org/licenses/by/4.0/legalcode'>Legal Code</a></small>
                                    </div>
                                </div>

                            ) : (

                                <div >
                                    <h3 className="ui header" style={{ margin: '50px' }}>Question {currentQuestion + 1} /{quizData.length}:</h3>
                                    <p style={{ marginBottom: '40px' }}>{quizData[currentQuestion].questionText}</p>
                                    <div className="ui list" style={{ marginBottom: '40px' }}>{quizData[currentQuestion].answerOptions.map((answerOption, i) => (<div className="item" key={i} ><button className="fluid ui button" style={{ padding: '20px 40px' }} onClick={() => handleAnswer(answerOption.isCorrect)}>{answerOption.answerText}</button></div>
                                    ))}
                                    </div>
                                </div>

                            )
                        }
                    </div>
                    :
                    <div className="ui column centered grid" style={{ padding: '40px', display: 'block', margin: '0 auto', textAlign: 'center' }}>
                        <div>
                            <h2 className="ui header" style={{ marginBottom: '50px' }}>PokeBird Quiz</h2>
                            <button className="ui button" style={{ padding: '20px 40px' }} onClick={handleClick}>Start the quiz</button>
                        </div>
                    </div>
            }
        </div >
    )

}



export default connect()(Quiz)

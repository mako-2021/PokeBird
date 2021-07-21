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
        <div className="ui raised segment">
            {load ?
                <div className="ui column centered grid">
                    {showScore ? (
                        <div>
                            <h2 className="ui header">You scored {score} out of {quizData.length}</h2>
                            <div>
                                <h2 className="ui header">Correct answers:</h2>
                                <div className="ui list">
                                    {quizData.map((data, i) => <div className="item" key={i}>Question {data.id}: {data.questionText} <br /> {data.correctAnswer} <br /> <img className="ui medium rounded image" src={data.imageURL} style={{ maxWidth: '200px', borderRadius: '10px' }}></img></div>)}
                                </div>
                                <small>Find more on <a href='https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/' target="_blank">DOC Website</a><br />
                                    This quiz has been made using the information provided on the DOC website (including all photography works). Attribution 4.0 International (CC BY 4.0) <a href='https://creativecommons.org/licenses/by/4.0/legalcode'>Legal Code</a></small>
                            </div>
                        </div>
                    ) : (

                        <div >
                            <h2 className="ui header">Question {currentQuestion + 1} /{quizData.length}</h2>
                            {quizData[currentQuestion].questionText}
                            <div className="ui list">{quizData[currentQuestion].answerOptions.map((answerOption, i) => (<div className="item" key={i} ><button className="fluid ui button" onClick={() => handleAnswer(answerOption.isCorrect)}>{answerOption.answerText}</button></div>
                            ))}
                            </div>
                        </div>
                    )}
                </div>
                :
                <div className="ui column centered grid">
                    <div>
                        <h2 className="ui header">Ngā manu – Birds</h2>
                        <button className="ui button" onClick={handleClick}>Start the quiz</button>
                        <img className="ui medium rounded image" src='pnghut_question-mark-adobe-illustrator-icon-pale-yellow.png' style={{ height: '200px', width: '200px', borderRadius: '50%', background: 'white' }}></img>
                    </div>
                </div>
            }
        </div >
    )

}



export default connect()(Quiz)

import React from 'react';
import db from '../db.json';
import LoadingWidget from '../src/components/LoadingWidget'
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import QuestionWidget from '../src/components/QuestionWidget'

const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT'
};

export default function QuizPage() {
    const [screenState,setScreenState] = React.useState(screenStates.LOADING);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const totalQuestions = db.questions.length;
    const questionIndex = currentQuestion;
    const question = db.questions[questionIndex];
    
    React.useEffect(()=> {
        setTimeout(()=>{
            setScreenState(screenStates.QUIZ);
        }, 1 * 1000);
    },[]);

    function handleSubmitQuiz() {
        const nextQuestion = questionIndex + 1;
        if (nextQuestion < totalQuestions) {
          setCurrentQuestion(nextQuestion);
        } else {
          setScreenState(screenStates.RESULT);
        }
      }
    
    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <QuizLogo/>
                {screenState === screenStates.QUIZ && (
                <QuestionWidget 
                    question={question} 
                    questionIndex={questionIndex}
                    totalQuestions={totalQuestions}
                />
                )}

                {screenState === screenStates.LOADING && <LoadingWidget />}

                {screenState === screenStates.RESULT && <div>Você acertou X questões, parabéns!</div>}
            </QuizContainer>
        </QuizBackground>
    );
}

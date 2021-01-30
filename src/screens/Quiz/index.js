import React from 'react';
// import db from '../../db.json';
import LoadingWidget from '../../components/LoadingWidget'
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import QuizLogo from '../../components/QuizLogo';
import QuestionWidget from '../../components/QuestionWidget'
import ResultWidget from '../../components/ResultWidget';


const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT'
};

export default function QuizPage({externalQuestions, externalBg}) {
    const [screenState,setScreenState] = React.useState(screenStates.LOADING);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [results, setResults] = React.useState([]);
    const totalQuestions = externalQuestions.length;
    const questionIndex = currentQuestion;
    const question = externalQuestions[questionIndex];
    const bg = externalBg;

    function addResults(result) {
        setResults([...results, result])
    }
    
    React.useEffect(()=> {
        setTimeout(()=> {
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
        <QuizBackground backgroundImage={bg}>
            <QuizContainer>
                <QuizLogo/>
                {screenState === screenStates.QUIZ && (
                <QuestionWidget 
                    question={question} 
                    questionIndex={questionIndex}
                    totalQuestions={totalQuestions}
                    onSubmit={handleSubmitQuiz}
                    addResults ={addResults}
                />
                )}

                {screenState === screenStates.LOADING && <LoadingWidget/>}

                {screenState === screenStates.RESULT && <ResultWidget results={results} totalQuestions={totalQuestions}/>}
            </QuizContainer>
        </QuizBackground>
    );
}

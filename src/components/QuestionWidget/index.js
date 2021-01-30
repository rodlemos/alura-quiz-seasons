import React from 'react';
import Widget from '../Widget';
import Button from '../Button';
import AlternativesForm from '../AlternativesForm';
import BackLinkArrow from '../BackLinkArrow';

function QuestionWidget({question,questionIndex,totalQuestions,onSubmit,addResults}) {
    const [selectedAlternative,setSelectedAlternative] = React.useState(undefined);
    const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
    const questionId = `question__${questionIndex}`;
    const isCorrect = selectedAlternative === question.answer;
    const hasAlternativeSelected = selectedAlternative !== undefined;

    return (
        <Widget>
            <Widget.Header>
                <BackLinkArrow href="/"/>
                <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
            </Widget.Header>

            <img src={question.image} alt="Descrição"
            style={{width: '100%', height: '150px', objectFit: 'cover'}}/>

            <Widget.Content>
                <h2>{question.title}</h2>
                <p>{question.description}</p>
                
                <AlternativesForm onSubmit={(e)=> {
                    e.preventDefault();
                    setIsQuestionSubmited(true);
                    setTimeout(()=> {
                        addResults(isCorrect);
                        onSubmit();
                        setIsQuestionSubmited(false);
                        setSelectedAlternative(undefined);
                    }, 3000);
                }}>
                    {question.alternatives.map((alternative,alternativeIndex)=> {
                        const alternativeId = `alternative__${alternativeIndex}`;
                        const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
                        const isSelected = selectedAlternative === alternativeIndex;

                        return (
                            <Widget.Topic 
                                as="label" 
                                htmlFor={alternativeId}
                                key={alternativeId}
                                data-selected={isSelected}
                                data-status={isQuestionSubmited && alternativeStatus}
                            >
                                <input 
                                    type="radio" 
                                    id={alternativeId} 
                                    name={questionId}
                                    style={{visibility: 'hidden'}}
                                    onChange={()=> setSelectedAlternative(alternativeIndex)}            
                                />
                                {alternative}
                            </Widget.Topic>
                        );
                    })}
                    <Button type="submit" disabled={!hasAlternativeSelected}>
                        Confirmar
                    </Button>
                    {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
                    {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}
                </AlternativesForm>
            </Widget.Content>
        </Widget>
    );
}

export default QuestionWidget;
import React from 'react';
import db from '../../../db.json';
import Widget from '../Widget';
import Button from '../Button';

function QuestionWidget({question,questionIndex,totalQuestions,onSubmit}) {
    const questionId = `question__${questionIndex}`;
    console.log(questionId);

    return (
        <Widget>
            <Widget.Header>
                <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
            </Widget.Header>

            <img src={question.image} alt="Descrição"
            style={{width: '100%', height: '150px', objectFit: 'cover'}}/>

            <Widget.Content>
                <h2>{question.title}</h2>
                <p>{question.description}</p>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmit();
                }}>
                    {question.alternatives.map((alternative,alternativeIndex)=> {
                        const alternativeId = `alternative__${alternativeIndex}`

                        return (
                            <Widget.Topic as="label" htmlFor={alternativeId}>
                                <input 
                                    type="radio" 
                                    id={alternativeId} 
                                    name={questionId}
                                    style={{visibility: 'hidden'}}
                                />
                                {alternative}
                            </Widget.Topic>
                        );
                    })}
                    <Button>Confirmar</Button>
                </form>
            </Widget.Content>
        </Widget>
    );
}

export default QuestionWidget;
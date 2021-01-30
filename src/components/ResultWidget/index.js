import Widget from '../Widget'
import styled from 'styled-components';
import Router from 'next/router';
import Button from '../Button';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { VscError } from 'react-icons/vsc';
import db from '../../../db.json';

const QuestionList = styled.ul`
  list-style-type: none;
`

function ResultWidget({results, totalQuestions}) {
  const { name } = Router.query;

    return (
      <Widget>
        <Widget.Header>
          Fim de jogo!
        </Widget.Header>
  
        <Widget.Content>
            {/* Você acertou {results.reduce((currentCount, currentResult)=> {
              const isTrue = currentResult === true;
              if(isTrue){
                return currentCount + 1;
              }
              return currentCount;
            }, 0)} questões de {results.length} */}

            <div> {name}, você acertou {results.filter((x)=> x).length} questões de {totalQuestions}</div>

            <QuestionList>
            {results.map((result, resultIndex)=>{
              return (
                <Widget.Topic as="li" key={`result__${resultIndex}`} style={{textAlign: 'center', cursor: 'default'}}>
                  Questão {resultIndex + 1}: {result === true ? <Button.V><AiOutlineCheckCircle/></Button.V> : <Button.X><VscError/></Button.X>}
                </Widget.Topic>
                )
              })}
            </QuestionList>
        </Widget.Content>
      </Widget>
    );
}

export default ResultWidget;
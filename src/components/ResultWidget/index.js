import Widget from '../Widget'
import styled from 'styled-components';

const QuestionList = styled.ul`
  list-style-type: none;
`

function ResultWidget({results, totalQuestions}) {
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

            <div>Você acertou {results.filter((x)=> x).length} questões de {totalQuestions}</div>

            <QuestionList>
            {results.map((result, resultIndex)=>{
              return (
                <li key={`result__${result}`}>
                  Questão {resultIndex + 1}: {result === true ? 'V' : 'X'}
                </li>
                )
              })}
            </QuestionList>
        </Widget.Content>
      </Widget>
    );
}

export default ResultWidget;
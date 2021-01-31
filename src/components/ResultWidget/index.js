import Widget from '../Widget'
import styled from 'styled-components';
import Router from 'next/router';
import Button from '../Button';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { VscError } from 'react-icons/vsc';
import db from '../../../db.json';
import ShowAnswer from '../ShowAnswer'
import Link from '../Link';
import { motion } from 'framer-motion';

const QuestionList = styled.ul`
  list-style-type: none;
`

function ResultWidget({results, totalQuestions}) {
  const { name } = Router.query;
  const questions = db.questions;
    const rightAnswer = questions.map((question) =>{
        const {answer,alternatives} = question;
        return (alternatives[answer]);
    })

    return (
      <Widget
        as={motion.section}
        transition={{delay: 0, duration: 0.7}}
        variants={{
          closed: {height: 0},
          open: {height: 'auto'}
        }}
        initial="closed"
        animate="open"
      >
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
                <Widget.Topic as="li" key={`result__${resultIndex}`} style={{cursor: 'default'}}>
                  Questão {resultIndex + 1}: {result === true ? <Button.V><AiOutlineCheckCircle/></Button.V> : <Button.X><VscError/><ShowAnswer> {`(${rightAnswer[resultIndex]})`}</ShowAnswer></Button.X>}
                </Widget.Topic>
                )
              })}
            </QuestionList>
            <Link href="/"><Button style={{fontWeight: '700'}}>Home</Button></Link>
        </Widget.Content>
      </Widget>
    );
}

export default ResultWidget;
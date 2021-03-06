import db from '../db.json';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import Form from '../src/components/Form';
import Link from '../src/components/Link';
import { motion } from 'framer-motion';
import ShowAnswer from '../src/components/ShowAnswer'

export default function Home() {

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget 
          as={motion.section}
          transition={{delay: 0, duration: 0.4}}
          variants={{
            show: {opacity: 1, y: 0},
            hidden: {opacity: 0, y: '100%'}
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <ShowAnswer/>
            <Form/>
          </Widget.Content>
        </Widget>

        <Widget 
          as={motion.section}
          transition={{delay: .3, duration: .4}}
          variants={{
            show: {opacity: 1},
            hidden: {opacity: 0}
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão 
              React fez:</p>
            
            <ul>              
            {db.external.map((linkExterno)=> {
              const [projectName,gitHubUser] = linkExterno
              .replace(/\//g, '')
              .replace('https:', '')
              .replace('.vercel.app', '')
              .split('.');

              return (
                <li key={linkExterno}>
                  <Widget.Topic as={Link} href={`/quiz/${projectName}___${gitHubUser}`}>
                    {`${gitHubUser}/${projectName}`}
                  </Widget.Topic>
                </li> 
              )
            })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{delay: .5, duration: .4}}
          variants={{
            show: {opacity: 1},
            hidden: {opacity: 0}
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/rodlemos" />
    </QuizBackground>
  );
}

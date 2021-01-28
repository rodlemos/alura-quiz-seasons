import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 350px;
  padding-top: 45px;
  margin: auto auto;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default QuizContainer;
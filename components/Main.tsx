import styled from 'styled-components';
import Portfolio from './Portfolio';

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 64px);

  & div {
    border-radius: 0.4rem;
  }
`;

const Main = () => {
  return (
    <Wrapper>
      <Portfolio />
    </Wrapper>
  );
};

export default Main;

import styled from 'styled-components';
import Portfolio from './Portfolio';
import Promos from './Promos';

const Wrapper = styled.div`
  display: flex;
  & div {
    border-radius: 0.4rem;
  }
`;

const Main = () => {
  return (
    <Wrapper>
      <Portfolio />
      <Promos />
    </Wrapper>
  );
};

export default Main;

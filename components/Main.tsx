import styled from 'styled-components';
import Portfolio from './Portfolio';
import Promos from './Promos';

const Wrapper = styled.div`
  display: flex;
  & div {
    border-radius: 0.4rem;
  }
`;

const Main = ({ twTokens, sanityTokens, walletAddress }) => {
  return (
    <Wrapper>
      <Portfolio twTokens={twTokens} sanityTokens={sanityTokens} walletAddress={walletAddress} />
      <Promos />
    </Wrapper>
  );
};

export default Main;

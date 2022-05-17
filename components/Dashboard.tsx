import Header from './Header';
import styled from 'styled-components';
import Main from './Main';
import Sidebar from './Sidebar';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
`;

const MainContainer = styled.div`
  flex: 1;
`;

const Dashboard = ({ address }) => {
  console.log(address);
  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header />
        <Main />
      </MainContainer>
    </Wrapper>
  );
};

export default Dashboard;

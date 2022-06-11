import Header from './Header';
import styled from 'styled-components';
import Main from './Main';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import { ThirdwebSDK, Token } from '@thirdweb-dev/sdk';
import { ethers } from 'ethers';
import { useToken } from '@thirdweb-dev/react';

const Wrapper = styled.div`
  display: flex;
  background-color: #0a0b0d;
  color: white;
`;

const MainContainer = styled.div`
  flex: 1;
`;

const Dashboard = ({ address }) => {
  const [twTokens, setTwTokens] = useState<(Token | undefined)[]>([]);
  const [sanityTokens, setSanityTokens] = useState([]);
  const btcToken = useToken('0xd3dbEC4a7Ec046b391F2A122c09bA6Ed881db47D');
  const ethToken = useToken('0x9694c549278f7E48b52E0fc962A5FB6B79d8422d');
  const solToken = useToken('0x21fa7326210aB529af345ae4FA70a6D60B62Fe4f');

  useEffect(() => {
    (async () => {
      try {
        const coins = await fetch(
          'https://2l4l687g.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D%27coins%27%5D%20%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D'
        );
        const tempSanityTokens = await coins.json();

        // const thirdwebTokens: (Token | undefined)[] = [];

        // thirdwebTokens.push(btcToken);
        // thirdwebTokens.push(ethToken);
        // thirdwebTokens.push(solToken);
        // setTwTokens(thirdwebTokens);
        setSanityTokens(tempSanityTokens.result);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (sanityTokens) {
      const sdk = new ThirdwebSDK(
        new ethers.Wallet(
          process.env.NEXT_PUBLIC_METAMASK_KEY!,
          ethers.getDefaultProvider(`https://rinkeby.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID!}`)
        )
      );

      sanityTokens.map((tokenItem: any) => {
        const currentToken = sdk.getToken(tokenItem.contractAddress);

        setTwTokens((prevState) => [...prevState, currentToken]);
      });
    }
  }, [sanityTokens]);

  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header twTokens={twTokens} sanityTokens={sanityTokens} walletAddress={address} />
        <Main twTokens={twTokens} sanityTokens={sanityTokens} walletAddress={address} />
      </MainContainer>
    </Wrapper>
  );
};

export default Dashboard;

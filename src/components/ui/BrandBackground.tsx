import styled from "styled-components";
import BgLines from '@assets/bg-lines.svg';

const Background = styled.div`
  background: linear-gradient(122.47deg, #231f1f 7.76%, #455b75 90.49%);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

export const BrandBackground = () => (
  <Background>
    <BgLines />
  </Background>
);

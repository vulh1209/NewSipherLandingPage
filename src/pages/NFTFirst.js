import React from "react";
import styled from "styled-components";

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  p {
    width: 21rem;
    text-align: justify;
  }
`;
const Header = styled.h1`
  background-image: url("/images/general/headerline.png");
  width: 21rem;
  height: 3rem;
  text-align: right;
  background-repeat: no-repeat;
  background-size: 100% 3rem;
  background-color: transparent;
  span {
    margin-right: 5%;
    color: #1ef6f9 !important;
  }
`;

export default function NFTFirst({ Position, isActive }) {
  return (
    <Wrap>
      <Header>
        <span>WE CREATE UNIQUE NFT</span>
      </Header>
      <p>
        <span>10,000 unique digital avatars as NFTs</span> - the first citizens
        of the Sipher World (Sipheria), are beautifully illustrated by our
        awesome 2D & 3D artists. Inspired by the cryptographic ethos, this
        collection is aptly named "Sipherian Surge", with all the 10,000
        characters belonging to the Sipher's origin race: SIPHER INU
      </p>
    </Wrap>
  );
}

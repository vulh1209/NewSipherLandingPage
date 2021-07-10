import React from "react";
import styled from "styled-components";
import { useSprings, animated } from "react-spring";

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  p {
    width: 21rem;
    text-align: justify;
  }
  .decor-line {
    margin: 0.25rem 0rem;
  }
  h1 {
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
  }
`;
const WrapSketch = styled.div`
  margin: 0.5rem 0rem;
  width: 96%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  #sketch-choose {
    width: 48%;
  }
`;
const SketchPicker = styled.div`
  width: 48%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  img {
    width: 46%;
    margin: 2%;
  }
`;

export default function NFTSecond({ Position, isActive }) {
  const springs = useSprings(
    15,
    Position.map((item) => ({
      from: isActive
        ? {
            opacity: 0.5,
            transform: `rotate3d(${item.rx}, ${item.ry}, ${item.rz}, ${item.deg}) translate3d(${item.tx}, ${item.ty}, ${item.tz}) scale3d(${item.sx}, ${item.sy}, ${item.sz})`,
          }
        : {
            opacity: 1,
            transform: `rotate3d(0, 0, 0, 0deg) translate3d(0px, 0px, 0px) scale3d(1,1, 1)`,
          },
      to: !isActive
        ? {
            opacity: 0.5,
            transform: `rotate3d(${item.rx}, ${item.ry}, ${item.rz}, ${item.deg}) translate3d(${item.tx}, ${item.ty}, ${item.tz}) scale3d(${item.sx}, ${item.sy}, ${item.sz})`,
          }
        : {
            opacity: 1,
            transform: `rotate3d(0, 0, 0, 0deg) translate3d(0px, 0px, 0px) scale3d(1,1, 1)`,
          },
      config: { duration: 500 },
    }))
  );
  return (
    <>
      {springs && (
        <Wrap>
          <animated.h1 style={springs[0]}>
            <animated.span style={springs[1]}>
              WE CREATE UNIQUE NFT
            </animated.span>
          </animated.h1>
          <WrapSketch>
            <animated.img
              id="sketch-choose"
              src="./images/nft/nft1.png"
              alt=""
              style={springs[2]}
            />
            <SketchPicker>
              <animated.img
                style={springs[3]}
                className={`sketch-item`}
                src="./images/nft/nft1.png"
                alt=""
              />
              <animated.img
                style={springs[4]}
                className={`sketch-item`}
                src="./images/nft/nft2.png"
                alt=""
              />
              <animated.img
                style={springs[5]}
                className={`sketch-item`}
                src="./images/nft/nft3.png"
                alt=""
              />
              <animated.img
                style={springs[6]}
                className={`sketch-item`}
                src="./images/nft/nft4.png"
                alt=""
              />
            </SketchPicker>
          </WrapSketch>
          <animated.p style={springs[7]}>
            Each <span>Sipher Inu</span> is{" "}
            <span>unique and programmatically generated</span> from over 200
            possible traits, including expression, headwear, clothing, and more.
            All doges are dope, but some are doper than others.
          </animated.p>
          <animated.img
            style={springs[8]}
            className={`decor-line`}
            src="./images/general/decorline.png"
            alt=""
          />
          <animated.p style={springs[9]}>
            The 1ST NFT Avatars with{" "}
            <span>multiple expressions of emotions</span> linking with real life
            events and user interactions
          </animated.p>
          <animated.img
            style={springs[10]}
            className={`decor-line`}
            src="./images/general/decorline.png"
            alt=""
          />
          <animated.p style={springs[11]}>
            <span>16 personality traits</span> which can be used for future
            gameplay and benefits
          </animated.p>
          <animated.img
            style={springs[12]}
            className={`decor-line`}
            src="./images/general/decorline.png"
            alt=""
          />
          <animated.p style={springs[13]}>
            <span>$SHARD ERC-1155</span> is our World Energy, allowing you to
            unlock future functionalities of your avatar. Each NFT your own and
            keep is a{" "}
            <span>Wallet Address Beacon for Sipher team to airdrop $SHARD</span>{" "}
            tokens in later phases.
          </animated.p>
        </Wrap>
      )}
    </>
  );
}

import React from "react";
import styled from "styled-components";
import { useSprings, animated } from "react-spring";

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  #logo-with-text {
    width: 10rem;
    margin: 0.5rem 0rem 0.75rem 0rem;
  }

  #avatar {
    width: 16rem;
  }
  p {
    width: 21rem;
    text-align: justify;
  }
  button {
    background-image: url("/images/general/bgbutton.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-color: transparent;
    border: 0;
    height: 2.5rem;
    color: white;
    width: 9rem;
    margin-top: 1rem;
  }
  button > span {
    background: -webkit-linear-gradient(0deg, #1ef6f9, #fcd11f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 1000;
  }
`;

export default function Welcome({ Position, isActive }) {
  const springs = useSprings(
    10,
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
          <animated.img
            id="avatar"
            src="./images/welcome/avatar.png"
            alt=""
            style={springs[0]}
          />
          <animated.h1 style={springs[1]}>WELCOME TO</animated.h1>
          <animated.img
            id="logo-with-text"
            src="./images/general/logowithtext.png"
            alt=""
            style={springs[2]}
          />
          <animated.p style={springs[3]}>
            <span>SIPHER</span>, the combination of two incredibly potent words:{" "}
            <span>Surrogates and Cipher</span>, form the whole new digital race.
            Its genesis beings (codename: Sipher Inu) will include{" "}
            <span>10,000 unique NFTs</span> with their own personalities and
            story. Become the First Owners of Sipher Inu TODAY to gain full
            access to our meta-verse with owner-only benefits and jaw-woofing
            features that can be unlocked by our community via Roadmap!
          </animated.p>
          <animated.button style={springs[4]}>
            <animated.span>BE OUR FIRST</animated.span>
          </animated.button>
        </Wrap>
      )}
    </>
  );
}

import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  height: 3.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0rem;
  .single-line {
    width: 90%;
  }
`;
const Content = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  #icon-menu {
    height: 2rem;
    margin-right: 1.25rem;
  }
`;
const WrapLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  #logo {
    height: 2rem;
    margin-left: 1.5rem;
  }
  #sipher-text {
    height: 1rem;
    margin-left: 0.5rem;
  }
`;

export default function Menu({ Page, setPage }) {
  return (
    <Wrap>
      <Content>
        <WrapLogo>
          <img id="logo" src="./images/general/logo.png" alt="logo"  />
          <img
            id="sipher-text"
            src="./images/general/siphertext.png"
            alt="logo"
          />
        </WrapLogo>
        <img
          id="icon-menu"
          src="./images/icons/menu.png"
          alt="logo"
          onClick={() => setPage(Page === 1 ? 2 : 1)}
        />
      </Content>
      <img
        className="single-line"
        src="./images/general/singleline.png"
        alt="logo"
      />
    </Wrap>
  );
}

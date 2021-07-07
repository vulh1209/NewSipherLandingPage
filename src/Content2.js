import React from "react";
import styled from "styled-components";

const CT2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: blue;
  .Active1 {
    animation: _toActive1 1.5s;
  -webkit-animation-fill-mode: forwards;
  }
  .Active2 {
    animation: _toActive2 2s;
  -webkit-animation-fill-mode: forwards;
  }
  .Deactive1 {
    animation: _toDeactive1 1.5s;
  -webkit-animation-fill-mode: forwards;
  }
  .Deactive2 {
    animation: _toDeactive2 2s;
  -webkit-animation-fill-mode: forwards;
  }
  @keyframes _toActive1 {
    0% {
      transform: rotate3d(1, 0.5, 0.5, 145deg) translate3d(10px, -162px, -335px);
      opacity: 0.5;
    }
    100% {
      transform: rotate3d(0) translate3d(0);
    }
  }
  @keyframes _toActive2 {
    0% {
      transform: rotate3d(0.75, 1, 0.5, 245deg) translate3d(20px, -262px, -235px);
      opacity: 0.5;
    }
    100% {
      transform: rotate3d(0) translate3d(0);
    }
  }
  @keyframes _toDeactive1 {
    0% {
      transform: rotate3d(0) translate3d(0);
    }
    100% {
      transform: rotate3d(1, 0.5, 0.5, 145deg) translate3d(10px, -162px, -335px);
      opacity: 0.5;
    }
  }
  @keyframes _toDeactive2 {
    0% {
      transform: rotate3d(0) translate3d(0);
    }
    100% {
      transform: rotate3d(0.75, 1, 0.5, 245deg) translate3d(20px, -262px, -235px);
      opacity: 0.5;
    }
  }
`;

export default function Content2({Page}) {
  return (
    <CT2>
      <h2 className={Page !== 2 ? "Active2" : "Deactive2"}>Welcome to</h2>
      <h1 className={Page !== 2 ? "Active1" : "Deactive1"}>SYPHERIA</h1>
      <p className={Page !== 2 ? "Active2" : "Deactive2"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
    </CT2>
  );
}

import React from "react";
import styled from "styled-components";

const CT1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  img {
    width: 50%;
  }
  p {
    background-color: gray;
  }
  h2 {
    background-color: blue;
  }
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
      transform: rotate3d(1, 0.5, 1, 225deg) translate3d(50px, -262px, -135px) scale3d(0.5, 0.5, 0.5);
      opacity: 0.5;
    }
    100% {
      transform: rotate3d(0) translate3d(0) scale3d(0);
    }
  }
  @keyframes _toActive2 {
    0% {
      transform: rotate3d(1, 1, 0.5, 245deg) translate3d(80px, -162px, -235px) scale3d(0.5, 0.5, 0.5);
      opacity: 0.5;
    }
    100% {
      transform: rotate3d(0) translate3d(0) scale3d(0);
    }
  }
  @keyframes _toDeactive1 {
    0% {
      transform: rotate3d(0) translate3d(0) scale3d(0);
    }
    100% {
      transform: rotate3d(1, 0.5, 1, 225deg) translate3d(50px, -262px, -135px) scale3d(0.5, 0.5, 0.5);
      opacity: 0.5;
    }
  }
  @keyframes _toDeactive2 {
    0% {
      transform: rotate3d(0) translate3d(0) scale3d(0);
    }
    100% {
      transform: rotate3d(1, 1, 0.5, 225deg) translate3d(80px, -162px, -235px) scale3d(0.5, 0.5, 0.5);
      opacity: 0.5;
    }
  }
`;

export default function Content1({ Page }) {
  return (
    <CT1>
      <h2 className={Page !== 1 ? "Active1" : "Deactive1"}>
        VERY REAL, MUCH ALIVE!
      </h2>
      <div>
        <p className={Page !== 1 ? "Active2" : "Deactive2"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
      <div>
        <img src="./logo.svg" alt=""  className={Page !== 1 ? "Active2" : "Deactive2"}/>
        <img src="./logo.svg" alt=""  className={Page !== 1 ? "Active1" : "Deactive1"} />
        <img src="./logo.svg" alt=""  className={Page !== 1 ? "Active1" : "Deactive1"} />
        <img src="./logo.svg" alt=""  className={Page !== 1 ? "Active2" : "Deactive2"} />
      </div>
    </CT1>
  );
}

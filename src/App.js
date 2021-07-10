import React, { useState, useEffect, useRef } from "react";
import Menu from "./Menu";
import Test from "./pages/Test";
import Welcome from "./pages/Welcome";
import NFTFirst from "./pages/NFTFirst";
import NFTSecond from "./pages/NFTSecond";
import styled, { keyframes } from "styled-components";
import _ from "lodash";

const maxPage = 2;


const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #121a41;
  h1 {
    color: #1ef6f9;
    margin: 0;
    padding: 0;
    font-size: 18px;
  }
  p {
    color: white;
    margin: 0;
    padding: 0;
  }
  span {
    color: #fcd11f;
  }
  .menubutton {
    position: fixed;
    right: 1rem;
  }
  section {
    height: calc(100vh - 4rem);
    width: 100%;
    overflow: hidden;
  }
`;
const PageView = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  margin-top: 4rem;
`;

const _random = (Min, Max) => {
  var Range = Max - Min;
  var Rand = Math.random();
  return Min + Math.round(Rand * Range);
};
function App() {
  const [Page, setPage] = useState(1);
  const [Position, setPosition] = useState([]);
  const currentPage = useRef(Page);

  useEffect(() => {
    setPage(currentPage.current);
    const _generate = async () => {
      let _array = [];
      for (let i = 0; i < 20; i++) {
        const newelem = {
          rx: `${_random(0, 100) / 100}`,
          ry: `${_random(0, 100) / 100}`,
          rz: `${_random(0, 100) / 100}`,
          deg: `${_random(0, 360)}deg`,
          tx: `${_random(-200, 200)}px`,
          ty: `${_random(-200, window.screen.height)}px`,
          tz: `${_random(-200, 200)}px`,
          sx: `${_random(0, 100) / 100}`,
          sy: `${_random(0, 100) / 100}`,
          sz: `${_random(0, 100) / 100}`,
        };
        _array = await [..._array, newelem];
      }
      return _array;
    };
    const waittogen = async () => {
      const _pos = await _generate();
      console.log(_pos);
      setPosition(_pos);
    };
    if (Position.length === 0) waittogen();

    window.addEventListener(
      "wheel",
      _.throttle((e) => {
        if (e.wheelDelta < 0)
          currentPage.current =
            currentPage.current >= maxPage
              ? currentPage.current
              : currentPage.current + 1;
        else
          currentPage.current =
            currentPage.current <= 1
              ? currentPage.current
              : currentPage.current - 1;
        setPage(currentPage.current);
        console.log(currentPage.current);
      }, 500)
    );
    window.addEventListener("swiped", function (e) {
      console.log(e.target); // the element that was swiped
      console.log(e.detail.dir); // swiped direction
    });
  }, []);
  return (
    <>
      {Position.length !== 0 && (
        <Wrap id="wrapper" Position={Position}>
          <Menu Page={Page} setPage={setPage} />
          <PageView>
            <Welcome Position={Position} isActive={Page === 1 ? true : false} />
          </PageView>
          <PageView>
            <NFTSecond Position={Position} isActive={Page === 2 ? true : false} />
          </PageView>
        </Wrap>
      )}
    </>
    /* <>
      {Position.length !== 0 && (
        <Test Position={Position} isActive={Page === 1 ? true : false} />
      )}
    </> */
  );
}

export default App;

//  <Content1 Page={Page}/>
//       <Content2  Page={Page}/>

//       <button
//         className="menubutton"
//         onClick={() => (Page === 1 ? setPage(2) : setPage(1))}
//       >
//         {Page}
//       </button>


// // const _toActive = (rx, ry, rz, deg, tx, ty, tz, sx, sy, sz) => keyframes`
// //     0% {
// //       transform: rotate3d(${rx}, ${ry}, ${rz}, ${deg}) translate3d(${tx}, ${ty}, ${tz}) scale3d(${sx}, ${sy}, ${sz});
// //       opacity: 0.1;
// //     }
// //     100% {
// //       transform: rotate3d(0, 0, 0, 0deg) translate3d(0px, 0px, 0px) scale3d(1,1, 1);
// //     }
// // `;
// // const _toDeactive = (rx, ry, rz, deg, tx, ty, tz, sx, sy, sz) => keyframes`
// //     0% {
// //       transform: rotate3d(0, 0, 0, 0deg) translate3d(0px, 0px, 0px) scale3d(1,1, 1);
// //     }
// //     100% {
// //       transform: rotate3d(${rx}, ${ry}, ${rz}, ${deg}) translate3d(${tx}, ${ty}, ${tz}) scale3d(${sx}, ${sy}, ${sz});
// //       opacity: 0.1;
// //     }
// // `;
// /* .Active {
//     animation: ${(props) =>
//         _toActive(
//           props.pos.rx,
//           props.pos.ry,
//           props.pos.rz,
//           props.pos.deg,
//           props.pos.tx,
//           props.pos.ty,
//           props.pos.tz,
//           props.pos.sx,
//           props.pos.sy,
//           props.pos.sz
//         )}
//       0.5s;
//     -webkit-animation-fill-mode: forwards;
//   }
//   .Deactive {
//     animation: ${(props) =>
//         _toDeactive(
//           props.pos.rx,
//           props.pos.ry,
//           props.pos.rz,
//           props.pos.deg,
//           props.pos.tx,
//           props.pos.ty,
//           props.pos.tz,
//           props.pos.sx,
//           props.pos.sy,
//           props.pos.sz
//         )}
//       0.5s;
//     -webkit-animation-fill-mode: forwards;
//   } */
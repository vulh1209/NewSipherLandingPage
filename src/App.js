import React, { useState } from "react";
import Content1 from "./Content1";
import Content2 from "./Content2";
import styled from "styled-components";

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  .menubutton {
    position: fixed;
    right: 1rem;
  }
`;

function App() {
  const [Page, setPage] = useState(1);
  return (
    <Wrap>
      <Content1 Page={Page}/>
      <Content2  Page={Page}/>

      <button
        className="menubutton"
        onClick={() => (Page === 1 ? setPage(2) : setPage(1))}
      >
        {Page}
      </button>
    </Wrap>
  );
}

export default App;

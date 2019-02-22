import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Popup: React.FunctionComponent = () => {
  return (
    <PopupWrapper>
      <div>Testing Popup Window</div>
    </PopupWrapper>
  );
};

const PopupWrapper = styled.div`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
  }

  a {
    text-decoration: none;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 500px;
`;

ReactDOM.render(<Popup />, document.getElementById("popup"));

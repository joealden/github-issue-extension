import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const TestingComponent: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Toolbar>
        <button>x</button>
      </Toolbar>
      <p>Testing Embed</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* Ensures that other page styles don't effect the embed */
  all: initial;

  * {
    all: initial;
    font-size: 20px;
    color: black;
  }

  position: fixed;
  bottom: 20px;
  right: 20px;

  width: 400px;
  height: 300px;
  z-index: 99999999999999;

  background-color: white;
  border: 1px solid black;
  box-shadow: 15px 15px 30px 0px rgba(0, 0, 0, 0.6);

  display: flex;
  flex-direction: column;

  p {
    margin-left: 10px;
  }
`;

const Toolbar = styled.div`
  background-color: grey;
  width: 100%;

  display: flex;
  justify-content: flex-end;

  button {
    background-color: blue;
  }
`;

const rootNodeId = "___github-issue-extension-root";

const rootNode = document.createElement("div");
rootNode.id = rootNodeId;
document.body.appendChild(rootNode);

ReactDOM.render(<TestingComponent />, document.getElementById(rootNodeId));

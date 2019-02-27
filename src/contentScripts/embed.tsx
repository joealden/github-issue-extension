import React from "react";
import ReactDOM from "react-dom";
import { Rnd } from "react-rnd";
import styled from "styled-components";

const TestingComponent: React.FunctionComponent = () => {
  return (
    <InvisibleWrapper>
      <InvisibleWrapperInner>
        <Rnd
          default={{
            x: 0,
            y: 0,
            width: 450,
            height: 600
          }}
          dragHandleClassName="rnd-drag-handle"
          minWidth={200}
          minHeight={300}
          bounds="parent"
        >
          <Wrapper>
            <Toolbar className="rnd-drag-handle">
              <button>x</button>
            </Toolbar>
            <p>Testing Embed</p>
          </Wrapper>
        </Rnd>
      </InvisibleWrapperInner>
    </InvisibleWrapper>
  );
};

const InvisibleWrapper = styled.div`
  position: relative;
  z-index: 99999999999999;
`;

const InvisibleWrapperInner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

const Wrapper = styled.div`
  /* Ensures that other page styles don't effect the embed */
  all: initial;
  pointer-events: initial;

  * {
    all: initial;
    font-size: 20px;
    color: black;
  }

  width: 450px;
  height: 600px;

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
  cursor: move;

  display: flex;
  justify-content: flex-end;

  button {
    cursor: pointer;
    background-color: blue;
  }
`;

const rootNodeId = "___github-issue-extension-root";

const rootNode = document.createElement("div");
rootNode.id = rootNodeId;
document.body.appendChild(rootNode);

ReactDOM.render(<TestingComponent />, document.getElementById(rootNodeId));

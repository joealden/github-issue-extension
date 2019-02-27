import React from "react";
import styled from "styled-components";

import Cog from "./icons/Cog";
import Cross from "./icons/Cross";

const Toolbar: React.FunctionComponent = () => {
  return (
    <ToolbarWrapper className="___embed-drag-handle">
      <h1>Create Issue</h1>
      <div>
        <button onClick={() => console.log("test")}>
          <Cog />
        </button>
        <button>
          <Cross />
        </button>
      </div>
    </ToolbarWrapper>
  );
};

export default Toolbar;

const ToolbarWrapper = styled.div`
  background-color: #f0f0f0;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;

  cursor: move;

  h1 {
    font-weight: normal;
    font-size: 20px;
    padding: 15px;
  }

  div {
    display: flex;

    button {
      background: none;
      border: none;
      font-size: 20px;
      font-weight: normal;
      padding: 15px;
      cursor: pointer;

      display: flex;
      align-items: center;

      svg {
        color: black;
      }

      &:first-child svg {
        width: 25px;
        height: 25px;
      }

      &:last-child svg {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

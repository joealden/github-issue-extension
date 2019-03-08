import React from "react";
import styled from "styled-components";

import Cog from "./icons/Cog";
import Cross from "./icons/Cross";

type TitleBarProps = {
  className: string;
};

const TitleBar: React.FunctionComponent<TitleBarProps> = ({ className }) => {
  return (
    <TitleBarWrapper className={className}>
      <h1>Create Issue</h1>
      <div>
        <button onClick={() => console.log("test")}>
          <Cog />
        </button>
        <button>
          <Cross />
        </button>
      </div>
    </TitleBarWrapper>
  );
};

export default TitleBar;

const TitleBarWrapper = styled.div`
  && {
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
      }
    }
  }
`;

import React from "react";
import { Rnd } from "react-rnd";
import styled from "styled-components";

import Toolbar from "./components/Toolbar";

const Embed: React.FunctionComponent = () => {
  return (
    <InvisibleWrapper>
      <div>
        <Rnd
          dragHandleClassName="___embed-drag-handle"
          style={{
            background: "white",
            pointerEvents: "initial",
            boxShadow: "15px 15px 60px 0px rgba(0, 0, 0, 0.3)"
          }}
          default={{
            x: 0,
            y: 0,
            width: 450,
            height: 600
          }}
          minWidth={450}
          minHeight={600}
          bounds="parent"
        >
          <InnerWrapper>
            <Toolbar />
          </InnerWrapper>
        </Rnd>
      </div>
    </InvisibleWrapper>
  );
};

export default Embed;

const InvisibleWrapper = styled.div`
  position: relative;
  z-index: 99999999999999;

  > div {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;

    pointer-events: none;
  }
`;

const InnerWrapper = styled.div`
  /* Ensures that other page styles don't effect the embed */
  all: initial;
`;

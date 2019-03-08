import React from "react";
import { Rnd } from "react-rnd";
import styled from "styled-components";

import TitleBar from "./components/TitleBar";

const DRAG_HANDLE_CLASS_NAME = "___embed-drag-handle";

const Embed: React.FunctionComponent = () => {
  return (
    <InvisibleWrapper>
      <div>
        <Rnd
          dragHandleClassName={DRAG_HANDLE_CLASS_NAME}
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
            <TitleBar className={DRAG_HANDLE_CLASS_NAME} />
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
  * {
    all: unset;
  }

  /**
   * For some reason, the above 'all: unset' rule doesn't reset
   * the value of '::-moz-focus-inner', which some sites use to
   * get rid of the focus ring that is present in firefox. This
   * rule below ensures that the focus ring is enabled again.
   *
   * TODO:
   * Check that the focus ring in chrome is also correctly
   * displayed on sites that get rid of it.
   */
  button:focus::-moz-focus-inner {
    border: 1px dotted black;
  }
`;

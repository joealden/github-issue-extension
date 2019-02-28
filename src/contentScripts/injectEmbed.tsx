import React from "react";
import ReactDOM from "react-dom";

import Embed from "./Embed";

const ROOT_NODE_ID = "___github-issue-extension-root";

const rootNode = document.createElement("div");
rootNode.id = ROOT_NODE_ID;
document.body.appendChild(rootNode);

ReactDOM.render(<Embed />, document.getElementById(ROOT_NODE_ID));

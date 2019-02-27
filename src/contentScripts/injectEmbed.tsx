import React from "react";
import ReactDOM from "react-dom";

import Embed from "./Embed";

const rootNodeId = "___github-issue-extension-root";

const rootNode = document.createElement("div");
rootNode.id = rootNodeId;
document.body.appendChild(rootNode);

ReactDOM.render(<Embed />, document.getElementById(rootNodeId));

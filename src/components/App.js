// //We have an image fo star with dimensions 300x300, what we need to do is each time we click on the star , it grows by 2px in height and width.

// So initial dimensions 300x300 302x302 - after first click 304x304 - after second click and so on

import React from "react";
import "../styles/App.css";
import ResizeStar from "./ResizeStar";
const App = () => {
  return (
    <div id="main">
      <ResizeStar />
    </div>
  );
};

export default App;

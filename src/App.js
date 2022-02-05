import React from "react";
import "./App.css";
import Feed from "./Feed";
import "./Sidebar";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      {/* sidebar */}
      <Sidebar />

      {/* feed */}
      <Feed />

      {/* widgets  */}
    </div>
  );
}

export default App;

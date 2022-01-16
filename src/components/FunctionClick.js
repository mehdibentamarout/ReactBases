import React from "react";
function FunctionClick() {
  function ClickHander() {
    console.log("Cliked the button");
  }
  return (
    <div>
      <button onClick={ClickHander}>Clic</button>
    </div>
  );
}
export default FunctionClick;

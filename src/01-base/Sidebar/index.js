import React from "react";

export default function Sidebar(props) {
  //解构赋值
  let { bg, position } = props;

  console.log(props, bg, position);

  var obj1 = {
    left: 0,
  };

  var obj2 = {
    right: 0,
  };

  var obj = {
    width: "200px",
    position: "fixed",
    background: bg,
  };

  //这样写解构赋值
  var styleObj =
    position === "left" ? { ...obj, ...obj1 } : { ...obj, ...obj2 };

  return (
    // <div style={{ background: bg, width: "200px" }}>
    <div style={styleObj}>
      <ul>
        <li>1111111111</li>
        <li>1111111111</li>
        <li>1111111111</li>
        <li>1111111111</li>
        <li>1111111111</li>
        <li>1111111111</li>
        <li>1111111111</li>
        <li>1111111111</li>
        <li>1111111111</li>
        <li>1111111111</li>
      </ul>
    </div>
  );
}

// Sidebar.propTypes = {};
// Sidebar.defaultProps = {};

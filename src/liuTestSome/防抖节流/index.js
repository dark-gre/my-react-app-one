// import React from "react";

// export default function TestDebounceAndThrottle() {
//   const oncli = () => {
//     console.log("121212");
//   };

//   function debounce(func, wait, immediate) {
//     let timeout;
//     return function () {
//       let context = this;
//       let args = arguments;

//       console.log("11111", context, args);

//       if (timeout) clearTimeout(timeout);
//       if (immediate) {
//         let callNow = !timeout;
//         timeout = setTimeout(() => {
//           timeout = null;
//         }, wait);
//         if (callNow) func.apply(context, args);
//       } else {
//         timeout = setTimeout(() => {
//           func.apply(context, args);
//         }, wait);
//       }
//     };
//   }

//   return (
//     <div>
//       {/* <div onClick={() => oncli()}>点击操作</div> */}
//       <div onClick={() => debounce(oncli(), 2000)}>点击操作</div>
//     </div>
//   );
// }

import React, { Component } from "react";

export default class index extends Component {
  oncli() {
    console.log("121212");
  }
  //   debounce(func, wait, immediate) {
  //     let timeout;
  //     return function () {
  //       let context = this;
  //       let args = arguments;

  //       console.log("11111", context, args);

  //       if (timeout) clearTimeout(timeout);
  //       if (immediate) {
  //         let callNow = !timeout;
  //         timeout = setTimeout(() => {
  //           timeout = null;
  //         }, wait);
  //         if (callNow) func.apply(context, args);
  //       } else {
  //         timeout = setTimeout(() => {
  //           func.apply(context, args);
  //         }, wait);
  //       }
  //     };
  //   }

  debounce(func, wait) {
    var timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  }
  render() {
    return (
      <div>
        <div onClick={() => this.debounce(this.oncli, 2000)}>点击操作</div>
      </div>
    );
  }
}

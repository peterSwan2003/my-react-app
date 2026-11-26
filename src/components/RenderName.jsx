// المشكلة التي احدث بدوم استخدام react memo
// import React, from "react";
// const RenderName = ({ name }) => {
//   console.log("Rendring Component");
//   return (
//     <>
//       <h1>name: {name}</h1>
//     </>
//   );
// };
// export default RenderName;

// الطريقة الأولى ل react memo
// import React, { memo } from "react";
// export default memo(function RenderName({ name }) {
//   console.log("Rendring Component");
//   return (
//     <>
//       <h1>name: {name}</h1>
//     </>
//   );
// });
// الطريقة الثانية ل react memo

import React, { memo } from "react";

const RenderName = ({ name }) => {
  console.log("Rendr Component");
  return (
    <div>
      <h1>name: {name}</h1>
    </div>
  );
};

export default memo(RenderName);

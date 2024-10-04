// import React from "react";
// import "./Jumbotron.css";
// import JumbotronImage from "../assets/jumbotron.jpg";

// export default function Jumbotron() {
//   return (
//     <div className="bg-primary-1">
//       <div className="container animate__animated animate__slideInDown">
//         <img src={JumbotronImage} className="jumbotron-image" alt="" />
//       </div>
//     </div>
//   );
// }


import React from "react";
import "./Jumbotron.css";

export default function Jumbotron({ imageUrl }) {
  return (
    <div className="bg-primary-1">
      <div className="container animate__animated animate__slideInDown">
        <img src={imageUrl} className="jumbotron-image" alt="Jumbotron" />
      </div>
    </div>
  );
}

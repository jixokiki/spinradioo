// import React, { useEffect, useState } from "react";
// import "./Crews2.css";
// import { BsFillPlayFill } from "react-icons/bs";

// import ProfileGambar from "./ProfileGambar.jsx"; // Assuming ProfileGambar is the component for displaying images

// import Crew1 from '../assets/PhotoCrewDIAM/1a.png';
// import Crew2 from '../assets/PhotoCrewDIAM/2a.png';
// import Crew3 from '../assets/PhotoCrewDIAM/3a.png';
// import Crew4 from '../assets/PhotoCrewDIAM/4a.png';
// import Crew5 from '../assets/PhotoCrewDIAM/5a.png';
// import Crew6 from '../assets/PhotoCrewDIAM/6a.png';
// import Crew7 from '../assets/PhotoCrewDIAM/7a.png';
// import Crew8 from '../assets/PhotoCrewDIAM/8a.png';
// import Crew9 from '../assets/PhotoCrewDIAM/9a.png';
// import Crew10 from '../assets/PhotoCrewDIAM/10a.png';
// import Crew11 from '../assets/PhotoCrewDIAM/11a.png';
// import Crew12 from '../assets/PhotoCrewDIAM/12a.png';
// import Crew13 from '../assets/PhotoCrewDIAM/13a.png';
// import Crew14 from '../assets/PhotoCrewDIAM/14a.png';
// import Crew15 from '../assets/PhotoCrewDIAM/15a.png';
// import Crew16 from '../assets/PhotoCrewDIAM/16a.png';
// import Crew17 from '../assets/PhotoCrewDIAM/17a.png';
// import Crew18 from '../assets/PhotoCrewDIAM/18a.png';
// import Crew19 from '../assets/PhotoCrewDIAM/19a.png';
// import Crew20 from '../assets/PhotoCrewDIAM/20a.png';
// import Crew21 from '../assets/PhotoCrewDIAM/21a.png';
// import Crew22 from '../assets/PhotoCrewDIAM/22a.png';
// import Crew23 from '../assets/PhotoCrewDIAM/23a.png';
// import Crew24 from '../assets/PhotoCrewDIAM/24a.png';
// import Crew25 from '../assets/PhotoCrewDIAM/25a.png';
// import Crew26 from '../assets/PhotoCrewDIAM/26a.png';
// import Crew27 from '../assets/PhotoCrewDIAM/27a.png';
// import Crew28 from '../assets/PhotoCrewDIAM/28a.png';
// import Crew29 from '../assets/PhotoCrewDIAM/29a.png';
// import Crew30 from '../assets/PhotoCrewDIAM/30a.png';
// import Crew31 from '../assets/PhotoCrewDIAM/31a.png';
// import Crew32 from '../assets/PhotoCrewDIAM/32a.png';
// import Crew33 from '../assets/PhotoCrewDIAM/33a.png';
// import Crew34 from '../assets/PhotoCrewDIAM/34a.png';
// import Crew35 from '../assets/PhotoCrewDIAM/35a.png';
// import Crew36 from '../assets/PhotoCrewDIAM/36a.png';
// import Crew37 from '../assets/PhotoCrewDIAM/37a.png';
// import Crew38 from '../assets/PhotoCrewDIAM/38a.png';

// export default function CrewData() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [imageUrls, setImageUrls] = useState({});
//   const [newImages, setNewImages] = useState([]);

//   const images = [
//     Crew1, Crew2, Crew3, Crew4, Crew5, Crew6, Crew7, Crew8, Crew9, Crew10,
//     Crew11, Crew12, Crew13, Crew14, Crew15, Crew16, Crew17, Crew18, Crew19, Crew20,
//     Crew21, Crew22, Crew23, Crew24, Crew25, Crew26, Crew27, Crew28, Crew29, Crew30,
//     Crew31, Crew32, Crew33, Crew34, Crew35, Crew36, Crew37, Crew38,
//   ];

//   const IMAGES_PER_PAGE = 3;

//   useEffect(() => {
//     const storedImageUrls = JSON.parse(localStorage.getItem("crewImages"));
//     if (storedImageUrls) {
//       setImageUrls(storedImageUrls);
//     } else {
//       const defaultImageUrls = {};
//       images.forEach((_, index) => {
//         defaultImageUrls[`Crew${index + 1}`] = images[index];
//       });
//       setImageUrls(defaultImageUrls);
//     }
//   }, []);

//   const handleImageChange = (e, key) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const newImageUrls = { ...imageUrls, [key]: reader.result };
//         setImageUrls(newImageUrls);
//         localStorage.setItem("crewImages", JSON.stringify(newImageUrls));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleNext = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex + IMAGES_PER_PAGE < Object.keys(imageUrls).length
//         ? prevIndex + IMAGES_PER_PAGE
//         : 0
//     );
//   };

//   const handlePrevious = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex - IMAGES_PER_PAGE >= 0
//         ? prevIndex - IMAGES_PER_PAGE
//         : Math.max(0, Object.keys(imageUrls).length - IMAGES_PER_PAGE)
//     );
//   };

//   const handleNewImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     const imagePreviews = files.map((file) => URL.createObjectURL(file));
//     setNewImages(imagePreviews);
//   };

//   const addNewImage = () => {
//     const newKey = `Crew${Object.keys(imageUrls).length + 1}`;
//     const newImageUrl = newImages[newImages.length - 1];
//     const updatedImageUrls = { ...imageUrls, [newKey]: newImageUrl };
//     setImageUrls(updatedImageUrls);
//     localStorage.setItem("crewImages", JSON.stringify(updatedImageUrls));
//     setNewImages([]);
//   };

//   return (
//     <div className="bg-primary-1">
//       <div className="container crews-container">
//         <h1 className="title-container">KHI STATION CREWS</h1>
//         <div className="crews-list">
//           <div className="play rotate" onClick={handlePrevious}>
//             <BsFillPlayFill />
//           </div>
//           <div className="crews-items">
//             {/* Display 3 images at once */}
//             {Object.keys(imageUrls)
//               .slice(currentImageIndex, currentImageIndex + IMAGES_PER_PAGE)
//               .map((key) => (
//                 <ProfileGambar key={key} profileImage={imageUrls[key]} />
//               ))}
//           </div>
//           <div className="play" onClick={handleNext}>
//             <BsFillPlayFill />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





import React, { useEffect, useState } from "react";
import "./Crews2.css";
import { BsFillPlayFill } from "react-icons/bs";

import ProfileGambar from "./ProfileGambar.jsx"; // Assuming ProfileGambar is the component for displaying images

import Crew1 from '../assets/PhotoCrewDIAM/1a.png';
import Crew2 from '../assets/PhotoCrewDIAM/2a.png';
import Crew3 from '../assets/PhotoCrewDIAM/3a.png';
import Crew4 from '../assets/PhotoCrewDIAM/4a.png';
import Crew5 from '../assets/PhotoCrewDIAM/5a.png';
import Crew6 from '../assets/PhotoCrewDIAM/6a.png';
import Crew7 from '../assets/PhotoCrewDIAM/7a.png';
import Crew8 from '../assets/PhotoCrewDIAM/8a.png';
import Crew9 from '../assets/PhotoCrewDIAM/9a.png';
import Crew10 from '../assets/PhotoCrewDIAM/10a.png';
import Crew11 from '../assets/PhotoCrewDIAM/11a.png';
import Crew12 from '../assets/PhotoCrewDIAM/12a.png';
import Crew13 from '../assets/PhotoCrewDIAM/13a.png';
import Crew14 from '../assets/PhotoCrewDIAM/14a.png';
import Crew15 from '../assets/PhotoCrewDIAM/15a.png';
import Crew16 from '../assets/PhotoCrewDIAM/16a.png';
import Crew17 from '../assets/PhotoCrewDIAM/17a.png';
import Crew18 from '../assets/PhotoCrewDIAM/18a.png';
import Crew19 from '../assets/PhotoCrewDIAM/19a.png';
import Crew20 from '../assets/PhotoCrewDIAM/20a.png';
import Crew21 from '../assets/PhotoCrewDIAM/21a.png';
import Crew22 from '../assets/PhotoCrewDIAM/22a.png';
import Crew23 from '../assets/PhotoCrewDIAM/23a.png';
import Crew24 from '../assets/PhotoCrewDIAM/24a.png';
import Crew25 from '../assets/PhotoCrewDIAM/25a.png';
import Crew26 from '../assets/PhotoCrewDIAM/26a.png';
import Crew27 from '../assets/PhotoCrewDIAM/27a.png';
import Crew28 from '../assets/PhotoCrewDIAM/28a.png';
import Crew29 from '../assets/PhotoCrewDIAM/29a.png';
import Crew30 from '../assets/PhotoCrewDIAM/30a.png';
import Crew31 from '../assets/PhotoCrewDIAM/31a.png';
import Crew32 from '../assets/PhotoCrewDIAM/32a.png';
import Crew33 from '../assets/PhotoCrewDIAM/33a.png';
import Crew34 from '../assets/PhotoCrewDIAM/34a.png';
import Crew35 from '../assets/PhotoCrewDIAM/35a.png';
import Crew36 from '../assets/PhotoCrewDIAM/36a.png';
import Crew37 from '../assets/PhotoCrewDIAM/37a.png';
import Crew38 from '../assets/PhotoCrewDIAM/38a.png';

export default function CrewDataFix() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageUrls, setImageUrls] = useState({});

  const IMAGES_PER_PAGE = 3;

  useEffect(() => {
    const images = [
        Crew1, Crew2, Crew3, Crew4, Crew5, Crew6, Crew7, Crew8, Crew9, Crew10,
        Crew11, Crew12, Crew13, Crew14, Crew15, Crew16, Crew17, Crew18, Crew19, Crew20,
        Crew21, Crew22, Crew23, Crew24, Crew25, Crew26, Crew27, Crew28, Crew29, Crew30,
        Crew31, Crew32, Crew33, Crew34, Crew35, Crew36, Crew37, Crew38,
      ];
    const storedImageUrls = JSON.parse(localStorage.getItem("crewImages"));
    if (storedImageUrls) {
      setImageUrls(storedImageUrls);
    } else {
      const defaultImageUrls = {};
      images.forEach((_, index) => {
        defaultImageUrls[`Crew${index + 1}`] = images[index];
      });
      setImageUrls(defaultImageUrls);
    }
  }, []);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex + IMAGES_PER_PAGE < Object.keys(imageUrls).length
        ? prevIndex + IMAGES_PER_PAGE
        : 0
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex - IMAGES_PER_PAGE >= 0
        ? prevIndex - IMAGES_PER_PAGE
        : Math.max(0, Object.keys(imageUrls).length - IMAGES_PER_PAGE)
    );
  };

  return (
    <div className="bg-primary-1">
      <div className="container crews-container">
        <h1 className="title-container">KHI STATION CREWS</h1>
        <div className="crews-list">
          <div className="play rotate" onClick={handlePrevious}>
            <BsFillPlayFill />
          </div>
          <div className="crews-items">
            {/* Display 3 images at once */}
            {Object.keys(imageUrls)
              .slice(currentImageIndex, currentImageIndex + IMAGES_PER_PAGE)
              .map((key) => (
                <ProfileGambar key={key} profileImage={imageUrls[key]} />
              ))}
          </div>
          <div className="play" onClick={handleNext}>
            <BsFillPlayFill />
          </div>
        </div>
      </div>
    </div>
  );
}

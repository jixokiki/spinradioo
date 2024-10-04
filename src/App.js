// import {
//   HashRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// // Img
// import png1 from "./assets/Thumbnail Segmen/1.png";
// import png2 from "./assets/Thumbnail Segmen/2.png";
// import png3 from "./assets/Thumbnail Segmen/3.png";
// import png4 from "./assets/Thumbnail Segmen/4.png";
// import png5 from "./assets/Thumbnail Segmen/5.png";

// // Latest Podcast
// import pod1 from "./assets/Podcast/podcast1.mp3";
// import pod2 from "./assets/Podcast/podcast2.mp3";
// import pod3 from "./assets/Podcast/podcast3.wav";
// import pod4 from "./assets/Podcast/podcast4.wav";

// // css
// import "./pages/Play.css";

// import HeaderMenu from "./components/HeaderMenu";
// import Navbar from "./components/Navbar";
// import AudioPlay from "./components/AudioPlay";
// import Jumbotron from "./components/Jumbotron";
// import CardList from "./components/CardList";
// import ViewButton from "./components/ViewButton";
// import Crews from "./components/Crews";
// import Footer from "./components/Footer";
// import NewsItem from "./components/NewsItem";
// import Play from "./pages/Play";
// // import { useEffect, useState } from "react";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// // import { AuthContextProvider } from "./AuthContext";
// // import Protected from "./Protected";
// import Chart from "./components/Chart";
// import CrewSpin from './components/CrewSpin';
// import ImageGallery from "./components/ImageGalery";
// import PhaserGameCanvas from "./components/PhaserGameCanvas";



// function App() {
//   return (
//     <div className="App pages-container">
//       {/* <AuthContextProvider> */}
//         <Router>
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/" element={<Navigate replace to="/listen" />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/Chart" element={<Chart/>}/>
//             <Route path="/CrewSpin" element={<CrewSpin/>}/>
//             <Route path="/Game" element={<PhaserGameCanvas/>} />
//             <Route
//               path="/listen"
//               element={
//                 <>
//                   {/* <Protected> */}
//                     <HeaderMenu />
//                     <Navbar view={true} />
//                     <AudioPlay />
//                     <Jumbotron />
//                     <CardList
//                       title={"LATEST PODCAST"}
//                       png1={png1}
//                       png2={png2}
//                       png3={png3}
//                       png4={png4}
//                       png5={png5}
//                       pod1={pod1}
//                       pod2={pod2}
//                       pod3={pod3}
//                       pod4={pod4}
//                     />
//                     <ViewButton />
//                     <Crews />
//                     {/* <ImageGallery/> */}
//                     <Footer />
//                   {/* </Protected> */}
//                 </>
//               }
//             />
//             <Route
//               path="/chartcontent"
//               element={
//                 <>
//                   {/* <Protected> */}
//                     <HeaderMenu />
//                     <Navbar/>
//                     <Chart/>
//                     <Crews />
//                     <Footer />
//                   {/* </Protected> */}
//                 </>
//               }
//             />
//             <Route
//               path="/CrewSpin"
//               element={
//                 <>
//                   <HeaderMenu/>
//                   <Navbar/>
//                   <Footer/>
//                 </>
//               }
//             />
//             <Route
//               path="/news"
//               element={
//                 <>
//                   {/* <Protected> */}
//                     <HeaderMenu />
//                     <Navbar view={true} />
//                     <AudioPlay />
//                     <NewsItem />
//                     <ViewButton />
//                     <CardList title={"PODCAST"} />
//                     <Footer />
//                   {/* </Protected> */}
//                 </>
//               }
//             />
//             <Route
//               path="/watch"
//               element={
//                 <>
//                   {/* <Protected> */}
//                     <HeaderMenu />
//                     <Navbar view={true} />
//                     <AudioPlay />
//                     <CardList title={"WATCH"} isCategory={true} />
//                     <ViewButton />
//                     <CardList title={"TRENDING"} />
//                     <Footer />
//                   {/* </Protected> */}
//                 </>
//               }
//             />
//             <Route
//               path="/play/:pod_id"
//               element={
//                 <>
//                   {/* <Protected> */}
//                     <Play />
//                   {/* </Protected> */}
//                 </>
//               }
//             />
//           </Routes>
//         </Router>
//       {/* </AuthContextProvider> */}
//     </div>
//   );
// }

// export default App;

//update tgl 3 oktober 2024
// import {
//   BrowserRouter as Router, // Using BrowserRouter instead of HashRouter
//   Routes,
//   Route,
//   Navigate,
//   Link
// } from "react-router-dom";

// // Img
// import png1 from "./assets/Thumbnail Segmen/1.png";
// import png2 from "./assets/Thumbnail Segmen/2.png";
// import png3 from "./assets/Thumbnail Segmen/3.png";
// import png4 from "./assets/Thumbnail Segmen/4.png";
// import png5 from "./assets/Thumbnail Segmen/5.png";

// // Latest Podcast
// import pod1 from "./assets/Podcast/podcast1.mp3";
// import pod2 from "./assets/Podcast/podcast2.mp3";
// import pod3 from "./assets/Podcast/podcast3.wav";
// import pod4 from "./assets/Podcast/podcast4.wav";

// // css
// import "./pages/Play.css";
// import "./pages/AdminDashboard.css";

// import HeaderMenu from "./components/HeaderMenu";
// import Navbar from "./components/Navbar";
// import AudioPlay from "./components/AudioPlay";
// import Jumbotron from "./components/Jumbotron";
// import CardList from "./components/CardList";
// import ViewButton from "./components/ViewButton";
// import Crews from "./components/Crews";
// import Footer from "./components/Footer";
// import NewsItem from "./components/NewsItem";
// import Play from "./pages/Play";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Chart from "./components/Chart";
// import CrewSpin from './components/CrewSpin';
// import ImageGallery from "./components/ImageGalery";
// import PhaserGameCanvas from "./components/PhaserGameCanvas";

// function App() {
//   return (
//     <div className="App pages-container">
//       <Router>
//         <Routes>
//           {/* Redirect / to /dashboard */}
//           <Route path="/" element={<Navigate replace to="/dashboard" />} />

//           {/* Route for Login */}
//           <Route path="/login" element={<Login />} />

//           {/* Route for Register */}
//           <Route path="/register" element={<Register />} />

//           {/* Route for Dashboard */}
//           <Route
//   path="/dashboard"
//   element={
//     <>
//       {/* Main Admin Dashboard */}
//       <div className="admin-dashboard-container">
//         {/* Header Menu and Navbar */}
//         <HeaderMenu />
//         <Navbar view={true} />

//         <div className="admin-dashboard-content">
//           {/* Admin Dashboard Title */}
//           <h1 className="admin-dashboard-title">Admin Dashboard</h1>
//           <p className="admin-dashboard-subtitle">Manage Radio Content, Podcasts, and Crew</p>

//           {/* Jumbotron and AudioPlay Section */}
//           <div className="admin-section">
//             <h2 className="admin-section-title">Radio Control Panel</h2>
//             <AudioPlay />
//             <Jumbotron />
//           </div>

//           {/* Podcast Management Section */}
//           <div className="admin-section">
//             <h2 className="admin-section-title">Latest Podcasts</h2>
//             <CardList
//               title={"LATEST PODCAST"}
//               png1={png1}
//               png2={png2}
//               png3={png3}
//               png4={png4}
//               png5={png5}
//               pod1={pod1}
//               pod2={pod2}
//               pod3={pod3}
//               pod4={pod4}
//             />
//             <ViewButton />
//           </div>

//           {/* Crew Management Section */}
//           <div className="admin-section">
//             <h2 className="admin-section-title">Manage Crew</h2>
//             <Crews />
//           </div>

//           {/* Add a Button to Go to Listen Page */}
//           <Link to="/listen">
//             <button className="listen-btn">Go to Listen Page</button>
//           </Link>
//         </div>
//       </div>
//     </>
//   }
// />


//           {/* Route for Listen */}
//           <Route
//             path="/listen"
//             element={
//               <>
//                 <HeaderMenu />
//                 <Navbar view={true} />
//                 <AudioPlay />
//                 <Jumbotron />
//                 <CardList
//                   title={"LATEST PODCAST"}
//                   png1={png1}
//                   png2={png2}
//                   png3={png3}
//                   png4={png4}
//                   png5={png5}
//                   pod1={pod1}
//                   pod2={pod2}
//                   pod3={pod3}
//                   pod4={pod4}
//                 />
//                 <ViewButton />
//                 <Crews />
//                 <Footer />
//               </>
//             }
//           />

//           {/* Other Routes */}
//           <Route path="/Chart" element={<Chart />} />
//           <Route path="/CrewSpin" element={<CrewSpin />} />
//           <Route path="/Game" element={<PhaserGameCanvas />} />
//           <Route
//             path="/chartcontent"
//             element={
//               <>
//                 <HeaderMenu />
//                 <Navbar />
//                 <Chart />
//                 <Crews />
//                 <Footer />
//               </>
//             }
//           />
//           <Route
//             path="/CrewSpin"
//             element={
//               <>
//                 <HeaderMenu />
//                 <Navbar />
//                 <Footer />
//               </>
//             }
//           />
//           <Route
//             path="/news"
//             element={
//               <>
//                 <HeaderMenu />
//                 <Navbar view={true} />
//                 <AudioPlay />
//                 <NewsItem />
//                 <ViewButton />
//                 <CardList title={"PODCAST"} />
//                 <Footer />
//               </>
//             }
//           />
//           <Route
//             path="/watch"
//             element={
//               <>
//                 <HeaderMenu />
//                 <Navbar view={true} />
//                 <AudioPlay />
//                 <CardList title={"WATCH"} isCategory={true} />
//                 <ViewButton />
//                 <CardList title={"TRENDING"} />
//                 <Footer />
//               </>
//             }
//           />
//           <Route
//             path="/play/:pod_id"
//             element={
//               <>
//                 <Play />
//               </>
//             }
//           />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";

// // Img
// import png1Default from "./assets/Thumbnail Segmen/1.png";
// import png2Default from "./assets/Thumbnail Segmen/2.png";
// import png3Default from "./assets/Thumbnail Segmen/3.png";
// import png4Default from "./assets/Thumbnail Segmen/4.png";
// import png5Default from "./assets/Thumbnail Segmen/5.png";

// // Latest Podcast
// import pod1 from "./assets/Podcast/podcast1.mp3";
// import pod2 from "./assets/Podcast/podcast2.mp3";
// import pod3 from "./assets/Podcast/podcast3.wav";
// import pod4 from "./assets/Podcast/podcast4.wav";

// // css
// import "./pages/Play.css";
// import "./pages/AdminDashboard.css";

// import HeaderMenu from "./components/HeaderMenu";
// import Navbar from "./components/Navbar";
// import AudioPlay from "./components/AudioPlay";
// import Jumbotron from "./components/Jumbotron";
// import CardList from "./components/CardList";
// import ViewButton from "./components/ViewButton";
// import Crews from "./components/Crews";
// import Footer from "./components/Footer";
// import NewsItem from "./components/NewsItem";
// import Play from "./pages/Play";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Chart from "./components/Chart";
// import CrewSpin from './components/CrewSpin';
// import ImageGallery from "./components/ImageGalery";
// import PhaserGameCanvas from "./components/PhaserGameCanvas";

// function App() {
//   // State untuk setiap gambar
//   const [png1, setPng1] = useState(png1Default);
//   const [png2, setPng2] = useState(png2Default);
//   const [png3, setPng3] = useState(png3Default);
//   const [png4, setPng4] = useState(png4Default);
//   const [png5, setPng5] = useState(png5Default);

//   // Fungsi untuk mengubah gambar
//   const handleImageChange = (e, setImage) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setImage(imageUrl);
//     }
//   };

//   return (
//     <div className="App pages-container">
//       <Router>
//         <Routes>
//           {/* Redirect / to /dashboard */}
//           <Route path="/" element={<Navigate replace to="/dashboard-admin" />} />

//           {/* Route for Login */}
//           <Route path="/login" element={<Login />} />

//           {/* Route for Register */}
//           <Route path="/register" element={<Register />} />

//           {/* Route for Dashboard */}
//           <Route
//             path="/dashboard-admin"
//             element={
//               <>
//                 <div className="admin-dashboard-container">
//                   <HeaderMenu />
//                   <Navbar view={true} />
//                   <div className="admin-dashboard-content">
//                     <h1 className="admin-dashboard-title">Admin Dashboard</h1>
//                     <p className="admin-dashboard-subtitle">Manage Radio Content, Podcasts, and Crew</p>

//                     <div className="admin-section">
//                       <h2 className="admin-section-title">Radio Control Panel</h2>
//                       <AudioPlay />
//                       <Jumbotron />
//                     </div>

//                     <div className="admin-section">
//                       <h2 className="admin-section-title">Latest Podcasts</h2>
//                       <CardList
//                         title={"LATEST PODCAST"}
//                         png1={png1}
//                         png2={png2}
//                         png3={png3}
//                         png4={png4}
//                         png5={png5}
//                         pod1={pod1}
//                         pod2={pod2}
//                         pod3={pod3}
//                         pod4={pod4}
//                       />
//                       {/* Tambahkan input file untuk mengubah gambar */}
//                       <div>
//                         <label>Ubah Gambar 1</label>
//                         <input type="file" onChange={(e) => handleImageChange(e, setPng1)} />
//                       </div>
//                       <div>
//                         <label>Ubah Gambar 2</label>
//                         <input type="file" onChange={(e) => handleImageChange(e, setPng2)} />
//                       </div>
//                       <div>
//                         <label>Ubah Gambar 3</label>
//                         <input type="file" onChange={(e) => handleImageChange(e, setPng3)} />
//                       </div>
//                       <div>
//                         <label>Ubah Gambar 4</label>
//                         <input type="file" onChange={(e) => handleImageChange(e, setPng4)} />
//                       </div>
//                       <div>
//                         <label>Ubah Gambar 5</label>
//                         <input type="file" onChange={(e) => handleImageChange(e, setPng5)} />
//                       </div>
//                       <ViewButton />
//                     </div>

//                     <div className="admin-section">
//                       <h2 className="admin-section-title">Manage Crew</h2>
//                       <Crews />
//                     </div>

//                     <Link to="/listen">
//                       <button className="listen-btn">Go to Listen Page</button>
//                     </Link>
//                   </div>
//                 </div>
//               </>
//             }
//           />

//           {/* Route for Listen */}
//           <Route
//             path="/listen"
//             element={
//               <>
//                 <HeaderMenu />
//                 <Navbar view={true} />
//                 <AudioPlay />
//                 <Jumbotron />
//                 <CardList
//                   title={"LATEST PODCAST"}
//                   png1={png1}
//                   png2={png2}
//                   png3={png3}
//                   png4={png4}
//                   png5={png5}
//                   pod1={pod1}
//                   pod2={pod2}
//                   pod3={pod3}
//                   pod4={pod4}
//                 />
//                 <ViewButton />
//                 <Crews />
//                 <Footer />
//               </>
//             }
//           />

//           {/* Other Routes */}
//           <Route path="/Chart" element={<Chart />} />
//           <Route path="/CrewSpin" element={<CrewSpin />} />
//           <Route path="/Game" element={<PhaserGameCanvas />} />
//           <Route path="/chartcontent" element={<><HeaderMenu /><Navbar /><Chart /><Crews /><Footer /></>} />
//           <Route path="/CrewSpin" element={<><HeaderMenu /><Navbar /><Footer /></>} />
//           <Route path="/news" element={<><HeaderMenu /><Navbar view={true} /><AudioPlay /><NewsItem /><ViewButton /><CardList title={"PODCAST"} /><Footer /></>} />
//           <Route path="/watch" element={<><HeaderMenu /><Navbar view={true} /><AudioPlay /><CardList title={"WATCH"} isCategory={true} /><ViewButton /><CardList title={"TRENDING"} /><Footer /></>} />
//           <Route path="/play/:pod_id" element={<Play />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase"; // Import your Firebase config

// Img
import png1Default from "./assets/Thumbnail Segmen/1.png";
import png2Default from "./assets/Thumbnail Segmen/2.png";
import png3Default from "./assets/Thumbnail Segmen/3.png";
import png4Default from "./assets/Thumbnail Segmen/4.png";
import png5Default from "./assets/Thumbnail Segmen/5.png";

import png1DefaultCardList from "./assets/Thumbnail Segmen/1.png";
import png2DefaultCardList from "./assets/Thumbnail Segmen/2.png";
import png3DefaultCardList from "./assets/Thumbnail Segmen/3.png";
import png4DefaultCardList from "./assets/Thumbnail Segmen/4.png";
import png5DefaultCardList from "./assets/Thumbnail Segmen/5.png";
import png6DefaultCardList from "./assets/Thumbnail Segmen/6.png";
import png7DefaultCardList from "./assets/Thumbnail Segmen/1.png";
import png8DefaultCardList from "./assets/Thumbnail Segmen/2.png";
import png9DefaultCardList from "./assets/Thumbnail Segmen/3.png";
import png10DefaultCardList from "./assets/Thumbnail Segmen/4.png";

// Latest Podcast
import pod1 from "./assets/Podcast/podcast1.mp3";
import pod2 from "./assets/Podcast/podcast2.mp3";
import pod3 from "./assets/Podcast/podcast3.wav";
import pod4 from "./assets/Podcast/podcast4.wav";

// css
import "./pages/Play.css";
import "./pages/AdminDashboard.css";

import HeaderMenu from "./components/HeaderMenu";
import Navbar from "./components/Navbar";
import AudioPlay from "./components/AudioPlay";
import Jumbotron from "./components/Jumbotron";
import CardList from "./components/CardList";
import ViewButton from "./components/ViewButton";
import Crews from "./components/Crews";
import Footer from "./components/Footer";
import NewsItem from "./components/NewsItem";
import Play from "./pages/Play";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chart from "./components/Chart";
import CrewSpin from './components/CrewSpin';
import PhaserGameCanvas from "./components/PhaserGameCanvas";
import CrewData from "./components/CrewData";
import CrewDataFix from "./components/CrewDataFix";
import CardListMore from "./components/CardListMore";
import NavbarAdmin from "./components/NavbarAdmin";
import HeaderMenuAdmin from "./components/HeaderMenuAdmin";
import CardListMoreAdmin from "./components/CardListMoreAdmin";


function App() {
  const [imageUrls, setImageUrls] = useState({
    png1: png1Default,
    png2: png2Default,
    png3: png3Default,
    png4: png4Default,
    png5: png5Default,
  });

  const [imageUrlsCardList, setImageUrlsCardList] = useState({
    png1: png1DefaultCardList,
    png2: png2DefaultCardList,
    png3: png3DefaultCardList,
    png4: png4DefaultCardList,
    png5: png5DefaultCardList,
    png6: png6DefaultCardList,
    png7: png7DefaultCardList,
    png8: png8DefaultCardList,
    png9: png9DefaultCardList,
    png10: png10DefaultCardList,
  });

  const [jumbotronImageUrl, setJumbotronImageUrl] = useState(""); // State for Jumbotron image

  useEffect(() => {
    // Load image URLs from Firebase Storage on component mount
    const loadImages = async () => {
      const urls = await Promise.all(
        Object.keys(imageUrls).map(async (key) => {
          const storageRef = ref(storage, `images/${key}.png`); // Adjust path if necessary
          try {
            const url = await getDownloadURL(storageRef);
            return url;
          } catch (error) {
            return imageUrls[key]; // Return default if not found
          }
        })
      );
      setImageUrls((prev) => ({
        ...prev,
        png1: urls[0],
        png2: urls[1],
        png3: urls[2],
        png4: urls[3],
        png5: urls[4],
      }));
    };

    loadImages();
  
    // Fetch Jumbotron image from Firebase Storage
    const fetchJumbotronImage = async () => {
      const jumbotronRef = ref(storage, 'images/jumbotron.png');
      try {
        const jumbotronUrl = await getDownloadURL(jumbotronRef);
        setJumbotronImageUrl(jumbotronUrl);
      } catch (error) {
        console.error("Error fetching Jumbotron image:", error);
      }
    };

    fetchJumbotronImage();
  }, []);

  useEffect(() => {
    // Load image URLs from Firebase Storage on component mount
    const loadImagesCardList = async () => {
      const urls = await Promise.all(
        Object.keys(imageUrlsCardList).map(async (key) => {
          const storageRef = ref(storage, `images/${key}.png`); // Adjust path if necessary
          try {
            const url = await getDownloadURL(storageRef);
            return url;
          } catch (error) {
            return imageUrlsCardList[key]; // Return default if not found
          }
        })
      );
      setImageUrlsCardList((prev) => ({
        ...prev,
        png1: urls[0],
        png2: urls[1],
        png3: urls[2],
        png4: urls[3],
        png5: urls[4],
        png6: urls[5],
        png7: urls[6],
        png8: urls[7],
        png9: urls[8],
        png10: urls[9],
      }));
    };

    loadImagesCardList();
  }, []);

  const handleImageChange = async (e, key) => {
    const file = e.target.files[0];
    if (file) {
      const storageRef = ref(storage, `images/${key}.png`); // Adjust path if necessary
      await uploadBytes(storageRef, file);
      const imageUrl = await getDownloadURL(storageRef);

      if (key === 'jumbotron') {
        setJumbotronImageUrl(imageUrl); // Update Jumbotron image URL
      } else {
        setImageUrls((prev) => ({ ...prev, [key]: imageUrl }));
      }
    }
  };

  return (
    <div className="App pages-container">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard-admin" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
  path="/dashboard-admin"
  element={
    <div className="admin-dashboard-container">
      <HeaderMenuAdmin />
      <NavbarAdmin view={true} />
      <div className="admin-dashboard-content">
        <h1 className="admin-dashboard-title">Admin Dashboard</h1>
        <p className="admin-dashboard-subtitle">Manage Radio Content, Podcasts, and Crew</p>

        <div className="admin-section">
          <h2 className="admin-section-title">Radio Control Panel</h2>
          <Jumbotron imageUrl={jumbotronImageUrl} />
          {/* Input file untuk mengubah gambar Jumbotron */}
          <label>Ubah Gambar Jumbotron</label>
          <input type="file" onChange={(e) => handleImageChange(e, 'jumbotron')} />
        </div>

        <div className="admin-section">
          <h2 className="admin-section-title">Content Podcasts</h2>
          <CardList
            title={"CONTENT PODCAST"}
            png1={imageUrls.png1}
            png2={imageUrls.png2}
            png3={imageUrls.png3}
            png4={imageUrls.png4}
            png5={imageUrls.png5}
            pod1={pod1}
            pod2={pod2}
            pod3={pod3}
            pod4={pod4}
          />
          {/* File inputs for image changes */}
          {Object.keys(imageUrls).map((key) => (
            <div key={key}>
              <label>{`Ubah Gambar ${key.charAt(3)}`}</label>
              <input type="file" onChange={(e) => handleImageChange(e, key)} />
            </div>
          ))}
          <ViewButton />
        </div>

        <div className="admin-section">
          <h2 className="admin-section-title">Manage Crew</h2>
          <CrewData />

        </div>
        </div>

        <Link to="/listen">
          <button className="listen-btn">Go to Listen Page</button>
        </Link>
      </div>
  }
/>

<Route
  path="/cardlistmoreadmin"
  element={
    <div className="admin-dashboard-container">
      <HeaderMenuAdmin />
      <NavbarAdmin view={true} />
      <div className="admin-dashboard-content">
        <h1 className="admin-dashboard-title">Card List More Dashboard</h1>
        <p className="admin-dashboard-subtitle">Manage Radio Card List</p>

        <div className="admin-section">
          <h2 className="admin-section-title">Content Podcasts</h2>
          <CardListMoreAdmin
            title={"ALL CONTENT PODCAST"}
            png1={imageUrlsCardList.png1}
            png2={imageUrlsCardList.png2}
            png3={imageUrlsCardList.png3}
            png4={imageUrlsCardList.png4}
            png5={imageUrlsCardList.png5}
            pod1={pod1}
            pod2={pod2}
            pod3={pod3}
            pod4={pod4}
          />
          {/* File inputs for image changes */}
          {Object.keys(imageUrlsCardList).map((key) => (
  <div style={{ marginRight: '1120px' }} key={key}>
    <label>{`Ubah Gambar ${key.charAt(3)}`}</label>
    <input type="file" onChange={(e) => handleImageChange(e, key)} />
  </div>
))}

        </div>

        <div className="admin-section">
          <h2 className="admin-section-title">Manage Crew</h2>
          <CrewData />

        </div>
        </div>

        <Link to="/cardlistmore">
          <button className="listen-btn">Go to Listen Page</button>
        </Link>
      </div>
  }
  />
          <Route path="/listen" element={
            <>
              <HeaderMenu />
              <Navbar view={true} />
              <AudioPlay />
              <Jumbotron imageUrl={jumbotronImageUrl} />
              <CardList
                title={"LATEST PODCAST"}
                png1={imageUrls.png1}
                png2={imageUrls.png2}
                png3={imageUrls.png3}
                png4={imageUrls.png4}
                png5={imageUrls.png5}
                pod1={pod1}
                pod2={pod2}
                pod3={pod3}
                pod4={pod4}
              />
              <ViewButton />
              <CrewDataFix />
              <Footer />
            </>
          } />

          <Route path="/cardlistmore" element={
            <>
              <HeaderMenu />
              <Navbar view={true} />
              <AudioPlay />
              <CardListMore
                title={"LATEST PODCAST"}
                png1={imageUrlsCardList.png1}
                png2={imageUrlsCardList.png2}
                png3={imageUrlsCardList.png3}
                png4={imageUrlsCardList.png4}
                png5={imageUrlsCardList.png5}
                pod1={pod1}
                pod2={pod2}
                pod3={pod3}
                pod4={pod4}
              />
              <CrewDataFix />
              <Footer />
            </>
          } />
          {/* <Route path="/cardlistmoreadmin" element={
            <>
              <HeaderMenuAdmin />
              <NavbarAdmin view={true} />
              <AudioPlay />
              <CardListMoreAdmin
                title={"CONTENT PODCAST"}
                png1={imageUrlsCardList.png1}
                png2={imageUrlsCardList.png2}
                png3={imageUrlsCardList.png3}
                png4={imageUrlsCardList.png4}
                png5={imageUrlsCardList.png5}
                pod1={pod1}
                pod2={pod2}
                pod3={pod3}
                pod4={pod4}
              />
              <CrewDataFix />
              <Footer />
            </>
          } /> */}
          {/* Other Routes */}
          <Route path="/Chart" element={<Chart />} />
          <Route path="/CrewSpin" element={<CrewSpin />} />
          <Route path="/Game" element={<PhaserGameCanvas />} />
          <Route path="/chartcontent" element={<><HeaderMenu /><Navbar /><Chart /><CrewDataFix /><Footer /></>} />
          <Route path="/CrewSpin" element={<><HeaderMenu /><Navbar /><Footer /></>} />
          <Route path="/news" element={<><HeaderMenu /><Navbar view={true} /><AudioPlay /><NewsItem /><ViewButton /><CardList title={"PODCAST"} /><Footer /></>} />
          <Route path="/watch" element={<><HeaderMenu /><Navbar view={true} /><AudioPlay /><CardList title={"WATCH"} isCategory={true} /><ViewButton /><CardList title={"TRENDING"} /><Footer /></>} />
          <Route path="/play/:pod_id" element={<Play />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

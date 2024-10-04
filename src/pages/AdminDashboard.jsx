import React from "react";
import HeaderMenu from "../components/HeaderMenu";
import Navbar from "../components/Navbar";
import AudioPlay from "../components/AudioPlay";
import Jumbotron from "../components/Jumbotron";
import CardList from "../components/CardList";
import ViewButton from "../components/ViewButton";
import Crews from "../components/Crews";
import Footer from "../components/Footer";

// Images & Audio
import png1 from "../assets/Thumbnail Segmen/1.png";
import png2 from "../assets/Thumbnail Segmen/2.png";
import png3 from "../assets/Thumbnail Segmen/3.png";
import png4 from "../assets/Thumbnail Segmen/4.png";
import png5 from "../assets/Thumbnail Segmen/5.png";

import pod1 from "../assets/Podcast/podcast1.mp3";
import pod2 from "../assets/Podcast/podcast2.mp3";
import pod3 from "../assets/Podcast/podcast3.wav";
import pod4 from "../assets/Podcast/podcast4.wav";

// CSS for the dashboard layout
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <HeaderMenu />
      <Navbar view={true} />
      <div className="admin-main-content">
        <div className="dashboard-container">
          <Jumbotron />
          <AudioPlay />
          <CardList
            title={"LATEST PODCAST"}
            png1={png1}
            png2={png2}
            png3={png3}
            png4={png4}
            png5={png5}
            pod1={pod1}
            pod2={pod2}
            pod3={pod3}
            pod4={pod4}
          />
          <ViewButton />
          <Crews />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;

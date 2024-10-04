// import React from "react";
// import "./HeaderMenu.css";
// import {
//   BsFillPersonFill,
//   BsChevronLeft,
//   BsChevronDoubleLeft,
//   BsStarFill,
//   // BsFillKeyFill,
//   // BsPersonLinesFill,
// } from "react-icons/bs";
// import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// // import { UserAuth } from "../AuthContext";

// export default function HeaderMenu() {
//   const [name, setName] = useState("");
//   // // const [token, setToken] = useState("");
//   // const [expire, setExpire] = useState("");

//   const [showProfiles, setShowProfiles] = useState(false);
//   const navigate = useNavigate();

//   // const { user, logOut } = UserAuth();

//   // const logout = async () => {
//   //   try {
//   //     await axios.delete("http://localhost:5000/logout");
//   //     navigate("/");
//   //   } catch (error) {}
//   // };

//   // const handleGoogleSignOut = async () => {
//   //   try {
//   //     if (user != null) {
//   //       await logOut();
//   //       navigate("/");
//   //     }
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // useEffect(() => {
//   //   setName(user.photoURL);
//   // }, [user]);

//   // console.log(user.displayName);
//   // console.log(user);

//   return (
//     <>
//       <div className="header-box animate__animated animate__slideInDown">
//         <div className="header-container">
//           <Link to="/listen" className="logo-container-link">
//             <div className="logo-container">
//               <p>SPIN RADIO</p>
//             </div>
//           </Link>
//           <div>
//             <div
//               className="user-container"
//               onClick={() => setShowProfiles(!showProfiles)}
//             >
//               {<BsFillPersonFill />}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         className={
//           showProfiles === false ? "profile-bar" : "profile-bar-active"
//         }
//       >
//         <div className="profile-bar-container">
//           <div
//             className="profile-bar-title"
//             onClick={() => setShowProfiles(!showProfiles)}
//           >
//             <BsChevronLeft className="" />
//             <p>Your Account</p>
//           </div>
//           <div className="profile-item">
//             <div className="profile-images-name">
//               {/* <h2>{user?.displayName}</h2> */}
//             </div>
//           </div>
//           <ul
//             className="sidebar-list"
//             onClick={() => setShowProfiles(!showProfiles)}
//           >
//             {/* <li className="sidebar-items">
//               <Link className="sidebar-link" to="/">
//                 <BsPersonLinesFill />
//                 CHANGE NAME
//               </Link>
//             </li>
//             <li className="sidebar-items">
//               <Link className="sidebar-link" to="/">
//                 <BsFillKeyFill />
//                 CHANGE PASSWORD
//               </Link>
//             </li> */}
//             <li className="sidebar-items">
//               <Link className="sidebar-link" to="/">
//                 <BsStarFill />
//                 FAVORITE PODCAST
//               </Link>
//             </li>
//             <li className="sidebar-items">
//               <Link
//                 className="sidebar-link"
//                 to="/"
//                 // onClick={handleGoogleSignOut}
//               >
//                 <BsChevronDoubleLeft />
//                 REGISTER
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }





import React, { useState, useEffect } from "react";
import "./HeaderMenu.css";
import {
  BsFillPersonFill,
  BsChevronLeft,
  BsChevronDoubleLeft,
  BsStarFill,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider, signInWithPopup, signOut } from "../firebase"; // Import googleProvider

export default function HeaderMenu() {
  const [user, setUser] = useState(null); // Store user data
  const [showProfiles, setShowProfiles] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      // Use the imported googleProvider directly
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user); // Set user data
      console.log("User signed in:", result.user);
    } catch (error) {
      console.log("Error during sign-in:", error.message);
    }
  };

  const handleGoogleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear user data
      navigate("/");
    } catch (error) {
      console.log("Error during sign-out:", error.message);
    }
  };

  useEffect(() => {
    // Check for an already logged-in user
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="header-box animate__animated animate__slideInDown">
        <div className="header-container">
          <Link to="/dashboard-admin" className="logo-container-link">
            <div className="logo-container">
              <p>SPIN RADIO</p>
            </div>
          </Link>
          <div>
            <div
              className="user-container"
              onClick={() => setShowProfiles(!showProfiles)}
            >
              <BsFillPersonFill />
            </div>
          </div>
        </div>
      </div>

      <div className={showProfiles === false ? "profile-bar" : "profile-bar-active"}>
        <div className="profile-bar-container">
          <div
            className="profile-bar-title"
            onClick={() => setShowProfiles(!showProfiles)}
          >
            <BsChevronLeft />
            <p>Your Account</p>
          </div>
          <div className="profile-item">
            <div className="profile-images-name">
              <h2>{user ? user.displayName : "Guest"}</h2>
            </div>
          </div>

          <ul
            className="sidebar-list"
            onClick={() => setShowProfiles(!showProfiles)}
          >
            <li className="sidebar-items">
              <Link className="sidebar-link" to="/">
                <BsStarFill />
                FAVORITE PODCAST
              </Link>
            </li>
            <li className="sidebar-items">
              {user ? (
                <Link className="sidebar-link" to="/" onClick={handleGoogleSignOut}>
                  <BsChevronDoubleLeft />
                  SIGN OUT
                </Link>
              ) : (
                <Link className="sidebar-link" to="/" onClick={handleGoogleSignIn}>
                  <BsChevronDoubleLeft />
                  REGISTER WITH GOOGLE
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}


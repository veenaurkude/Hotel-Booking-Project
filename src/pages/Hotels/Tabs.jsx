// import React, { useState, useRef } from "react";
// import "./Tabs.css";
// import RoomCard from "./rooms";
// import Overviews from "./Overviews";
// import Ratings from "../../components/Ratings";

// const Tabs = () => {
//   const [selectedTab, setSelectedTab] = useState("Overview");
//   const overviewRef = useRef(null);
//   const roomsRef = useRef(null);
//   const facilitiesRef = useRef(null);
//   const reviewsRef = useRef(null);

//   const handleTabSelect = (tabName) => {
//     setSelectedTab(tabName);
//     scrollToSection(tabName);
//   };

//   const scrollToSection = (sectionName) => {
//     const ref = getRefBySection(sectionName);
//     ref.current.scrollIntoView({ behavior: "smooth" });
//   };

//   const getRefBySection = (sectionName) => {
//     switch (sectionName) {
//       case "Overview":
//         return overviewRef;
//       case "Rooms":
//         return roomsRef;
//       case "Facilities":
//         return facilitiesRef;
//       case "Reviews":
//         return reviewsRef;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <div className="tab-buttons">
//         <button onClick={() => handleTabSelect("Overview")}>Overview</button>
//         <button onClick={() => handleTabSelect("Rooms")}>Rooms</button>
//         <button onClick={() => handleTabSelect("Facilities")}>Facilities</button>
//         <button onClick={() => handleTabSelect("Reviews")}>Reviews</button>
//       </div>
//       <div className="tab-content">
//         <div ref={overviewRef}>
//           <Overview />
//         </div>
//         <div ref={roomsRef}>
//             <Rooms/>
//         </div>
//         <div ref={facilitiesRef}>
//           <Facilities />
//         </div>
//         <div ref={reviewsRef}>
//           <Reviews />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tabs;

// const Overview = () => {
//   return (
//     <div>
//         <h2>Overview</h2>

//         <Overviews/>
//     </div>
//   );
// };

// const Rooms = () =>{
//     return(
//        <div>
//         <h2>Rooms</h2>

//         <RoomCard/>
//        </div>
//     );
// };

// const Facilities = () => {
//   return (
//     <div>
//       <h2>Facilities</h2>
//       <p>Description for Facilities</p>

//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
//         eius vitae ullam aspernatur unde, dicta quasi saepe esse, at eos atque
//         illum molestiae quidem dolor soluta sed voluptates. Animi, laboriosam!
//       </p>

//     </div>
//   );
// };

// const Reviews = () => {
//   return (
//     <div>
//         <h2>Ratings</h2>

//       <Ratings/>
//     </div>
//   );
// };

// ----------------------------------------------------

// import React from "react";
// import { useState, useRef } from 'react'; // { useState, useRef }
// import "./Tabs.css";
// import RoomCard from "./rooms";
// import Overviews from "./Overviews";
// import Ratings from "../../components/Ratings";

// const Tabs = () => {
//   const [selectedTab, setSelectedTab] = useState("Overview");
//   const overviewRef = useRef(null);
//   const roomsRef = useRef(null);
//   const facilitiesRef = useRef(null);
//   const reviewsRef = useRef(null);

//   const handleTabSelect = (tabName) => {
//     setSelectedTab(tabName);
//     scrollToSection(tabName);
//   };

//   const scrollToSection = (sectionName) => {
//     const ref = getRefBySection(sectionName);
//     ref.current.scrollIntoView({ behavior: "smooth" });
//   };

//   const getRefBySection = (sectionName) => {
//     switch (sectionName) {
//       case "Overview":
//         return overviewRef;
//       case "Rooms":
//         return roomsRef;
//       case "Facilities":
//         return facilitiesRef;
//       case "Reviews":
//         return reviewsRef;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>

//       <div className="tab-buttons">

//         <button
//           className={selectedTab === "Overview" ? "active" : ""}
//           onClick={() => handleTabSelect("Overview")}
//         >
//           Overview
//         </button>

//         <button
//           className={selectedTab === "Rooms" ? "active" : ""}
//           onClick={() => handleTabSelect("Rooms")}
//         >
//           Rooms
//         </button>

//         <button
//           className={selectedTab === "Facilities" ? "active" : ""}
//           onClick={() => handleTabSelect("Facilities")}
//         >
//           Facilities
//         </button>

//         <button
//           className={selectedTab === "Reviews" ? "active" : ""}
//           onClick={() => handleTabSelect("Reviews")}
//         >
//           Reviews
//         </button>

//       </div>
//       <div className="tab-content">

//         {/* <div ref={overviewRef}>
//           <Overviews />
//         </div> */}

//         <div ref={overviewRef} className={selectedTab === "Overview" ? "active" : ""}>
//           <Overviews />
//         </div>

//         <div ref={roomsRef} className={selectedTab === "Rooms" ? "active" : ""}>
//           <RoomCard />
//         </div>

//         <div ref={facilitiesRef} className={selectedTab === "Facilities" ? "active" : ""}>
//           <h2>Facilities</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
//             eius vitae ullam aspernatur unde, dicta quasi saepe esse, at eos
//             atque illum molestiae quidem dolor soluta sed voluptates. Animi,
//             laboriosam!
//           </p>
//         </div>

//         <div ref={reviewsRef} className={selectedTab === "Reviews" ? "active" : ""}>
//           <Ratings />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Tabs;
// --------------------------------------------

import React from "react";
import Overviews from "./Overviews";
import RoomCard from "./rooms";
import Ratings from "../../components/Ratings";

function Tabs() {
  return (
    <section>
      <div className="tab-buttons">
        <button>
          <a href="#overview">Overview</a>
        </button>

        <button>
          <a href="#rooms">Rooms</a>
        </button>

        <button>
          <a href="#facilities">Facilities</a>
        </button>

        <button>
          <a href="#reviews">Reviews</a>
        </button>
      </div>

      <div>
        <div>
          
          <h2 id="overview">Overview</h2>
          <p>This chapter explains ba bla bla</p>
          <Overviews />
        </div>

        <div>
          <h2 id="rooms">Rooms</h2>
          <p>This chapter explains ba bla bla</p>
          <RoomCard />
        </div>

        <div>
          <h2 id="facilities">Facilities</h2>
          <p>This chapter explains ba bla bla</p>
          
        </div>

        <div>
          <h2 id="reviews">Reviews</h2>
          <p>This chapter explains ba bla bla</p>
          <Ratings />
        </div>

      </div>
    </section>
  );
}

export default Tabs;

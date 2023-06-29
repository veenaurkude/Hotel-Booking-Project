import "./Overview.css";

function Overview() {
  return (
    <>
      <div className="maincontainer">
        <div className="contentmain">
          <h2>Radisson Blu Hotel Nagpur</h2>
          <p>Luxury hotel in Nagpur with outdoor ool and bar/lounge</p>
          <h3>8.8/10 Fabulous</h3>
          <p>162 varified Holels.com guest reviews</p>
          <br />
          <h2>Popular amenities</h2>
          <div className="item">
            <div className="item1">
              <p>Pool</p>
              <p>Airport transfer</p>
              <p>Free wifi</p>
            </div>
            <div className="item2">
              <p>SPA</p>
              <p>Free parking</p>
              <p>Restaurant</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Overview;

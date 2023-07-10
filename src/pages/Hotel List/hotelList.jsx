import Header from "../../components/common/Header";
import MediaCard from "./hotelCard";
import Sidebar from "./sidebar/sidebar";

function HotelList() {
    const count = 10;
  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div className="contentCard">
          <div>
            <Sidebar />
          </div>
          <div className="hotelDetails"> 
          {/* style={{ display: "flex", flexDirection: "column" }} */}
            {Array.from({ length: count }, (_, index) => (
              <div key={index} style={{ paddingBottom: "10px" }}>
                <MediaCard></MediaCard>
              </div>    
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default HotelList;

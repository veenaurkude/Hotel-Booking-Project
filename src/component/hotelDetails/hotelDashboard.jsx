import ButtonAppBar from "../header/header";
import ImageCard from "./basicPaper";
import NavTabs from "./navTabs";
import Overview from "./overview";
import RoomCard from "./rooms";

function HotelDashboard(){
    return(
        <>
        {/* <ButtonAppBar></ButtonAppBar> */}
        <ImageCard></ImageCard>
        <Overview></Overview>
        <RoomCard></RoomCard>
        </>
    )
}
export default HotelDashboard;
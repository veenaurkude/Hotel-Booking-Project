import styled from "styled-components";
import ButtonAppBar from "../header/header";
import BasicTextFields from "./roomSchedule";
import MediaCard from "./hotelCard";
import BasicDatePicker from "./basicdate";

// const LayoutContainer = styled.div`
//   /* for mobile */
//   display: flex;
//   flex-direction: row;
//   height: 100vh;
// `;


// const SidebarWrapper = styled.div`
//   min-width: 248px;
//   min-height: 100px;
// `;

// const MainContainer = styled.div`
//   padding: 2rem;
//   height: 100vh;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
const Layout =()=>{
    return(
        <>
    
        <ButtonAppBar></ButtonAppBar>
        <BasicTextFields></BasicTextFields>
        <MediaCard></MediaCard>
     
    
        </>
    )
}
export default Layout
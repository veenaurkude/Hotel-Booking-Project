import "../sidebar/sideBar.css"
import CheckboxLabels from "./checkbox";
import RadioButtonsGroup from "./radioBotton";
import DiscreteSlider from "./range";


const Sidebar=()=>{
return(
    <div className="sidebar">
        <CheckboxLabels></CheckboxLabels>
    <RadioButtonsGroup></RadioButtonsGroup>
    <DiscreteSlider></DiscreteSlider>
  </div>
)
}
export default Sidebar;
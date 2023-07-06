
import CheckboxLabels from "./checkbox";
import RadioButtonsGroup from "./radioBotton";
import DiscreteSlider from "./range";
import './sideBar.css'


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
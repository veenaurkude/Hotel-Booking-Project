import { BrowserRouter} from "react-router-dom";
import Layout from "./components/layout/Layout";
import "./App.css"
import MyForm from "./pages/Register/SignIn";


function App() {
  return (
    <BrowserRouter>
      <Layout/>
      {/* <MyForm></MyForm> */}
    </BrowserRouter>
  );
}

export default App;

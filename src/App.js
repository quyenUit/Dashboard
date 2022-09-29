import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import Sidebar from "./components/Sidebar/Sidebar";
import RightSide from "./components/RightSide/RightSide";
//import SignIn from "./components/SignIn/SignIn";
import "./components/SignIn/SignIn.css";
// import SignUp from "./components/SignUp/SignUp";
// import "./components/SignUp/SignUp.css";

function App() {
  return (
    // <div className="">
    //   <SignUp />
    // </div>
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;

import About from "./About";
import Experiance from "./Experiance";
import MainCard from "./MainCard";
import Projects from "./Projects";


function LandingPage() {
    return (
      <div className="landingpage">
     
      <MainCard></MainCard>
      <About></About>
      <Experiance></Experiance>
      <Projects></Projects>

      </div>
    );
  }
  
  export default LandingPage;
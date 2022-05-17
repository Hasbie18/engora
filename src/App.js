import AboutUs from "./components/About";
import CompanyBuild from "./components/Company";
import ContactCompany from "./components/Contact";
import SuperHero from "./components/Hero";
// import Navigationbar from "./components/Navbar2";
import NavigationBar from "./components/Navbar";
import AboutCompany from "./components/Profile";


function App() {
  return (
    <div>
      <NavigationBar/>
      {/* <Navigationbar/> */}
      <div className="myBg">
        <SuperHero/>
      </div>
      <CompanyBuild/>
      <AboutUs/>
      <AboutCompany/>
      <ContactCompany/>
    </div>
  );
}

export default App;

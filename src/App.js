import AboutUs from "./About-Us/AboutUs";
import ContactUs from "./Contact-Us/ContactUs";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Navbar from "./Nav/Navbar";
import OurFeature from "./Our-Features/OurFeatures";
import OurTrainers from "./Our-Trainers/OurTrainers";


function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <AboutUs />
            <OurTrainers />
            <OurFeature />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default App;

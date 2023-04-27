import Homeindex from './Components/Home/Homeindex';
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom"
import ScrollTop from './Components/ScrollTop';
import Footer from './Components/Footer';
import AboutUsIndex from './Components/About_Us/AboutUsIndex';
import CoursesIndex from './Components/Courses/CoursesIndex';
import ServiceIndex from './Components/Service/ServiceIndex';
import TeamIndex from './Components/Team/TeamIndex';
import GalleryIndex from './Components/Gallery/GalleryIndex';
import ContactIndex from './Components/Contact/ContactIndex';
import FacilityIndex from './Components/Facility/FacilityIndex';

function App() {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <Routes>
        <Route index element={<Homeindex />} />
        <Route path='/about' element={<AboutUsIndex />} />
        <Route path='/courses' element={<CoursesIndex />} />
        <Route path='/service' element={<ServiceIndex />} />
        <Route path='/facility' element={<FacilityIndex />} />
        <Route path='/team' element={<TeamIndex />} />
        <Route path='/gallery' element={<GalleryIndex />} />
        <Route path='/contact' element={<ContactIndex />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

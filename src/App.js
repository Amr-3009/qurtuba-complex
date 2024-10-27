import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Boys from "./Routes/Boys";
import BoysInter from "./Routes/BoysInter";
import Unfinished from "./Routes/Unfinished";
import EventsPhoto from "./Routes/EventsPhoto";
import EventsVideo from "./Routes/EventsVideo";
import ParentMeeting1 from "./Routes/ParentMeeting1";
import EquesTripPhotos from "./Routes/EquesTripPhotos";
import EquesTripVideos  from "./Routes/EquesTripVideos";
import FootballOlympicsPhotos from "./Routes/FootballOlympicsPhotos";
import CultureDayPhotos from "./Routes/CulturalDayPhotos";
import HonoringPhotos from "./Routes/HonoringPhotos";
import TeacherTrainingPhotos from "./Routes/TeacherTrainingPhotos";
import TeacherTrainingVideos from "./Routes/TeacherTrainingVideos";
import FootballOlympicsVideos from "./Routes/FootballOlympicsVideos";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="qurtuba-complex/" element={<Home />} />
        <Route path="qurtuba-complex/home" element={<Home />} />
        {/* <Route path="qurtuba-complex/kindergarten" element={<Kindergarten />} /> */}
        <Route path="qurtuba-complex/boys" element={<Boys />} />
        <Route
          path="qurtuba-complex/boys/international"
          element={<BoysInter />}
        />
        <Route
          path="qurtuba-complex/boys/international/events-photo"
          element={<EventsPhoto />}
        />
        <Route
          path="qurtuba-complex/boys/international/events-photo/parent-meeting-1"
          element={<ParentMeeting1 />}
        />
        <Route
          path="qurtuba-complex/boys/international/events-photo/equestrian-club-trip"
          element={<EquesTripPhotos />}
        />
        <Route
          path="qurtuba-complex/boys/international/events-photo/football-oylmpics"
          element={<FootballOlympicsPhotos />}
        />
        <Route
          path="qurtuba-complex/boys/international/events-photo/cultural-day"
          element={<CultureDayPhotos />}
        />
        <Route
          path="qurtuba-complex/boys/international/events-photo/honoring-ceremony"
          element={<HonoringPhotos />}
        />
        <Route
          path="qurtuba-complex/boys/international/events-photo/teachers-training"
          element={<TeacherTrainingPhotos />}
        />
        <Route
          path="qurtuba-complex/boys/international/events-video"
          element={<EventsVideo />}
        />
        <Route
          path="qurtuba-complex/boys/international/events-video/equestrian-club-trip"
          element={<EquesTripVideos />}
        />
        <Route
          path="qurtuba-complex/boys/international/events-video/football-oylmpics"
          element={<FootballOlympicsVideos />}
        />
        <Route
          path="qurtuba-complex/boys/international/events-video/teachers-training"
          element={<TeacherTrainingVideos />}
        />
        {/* <Route path="qurtuba-complex/girls" element={<Girls />} /> */}
        <Route path="qurtuba-complex/contact" element={<Contact />} />
        <Route path="*" element={<Unfinished />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

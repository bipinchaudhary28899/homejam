import Card from "./Components/card.js";
import image1 from "./picture/benny.png";
import image2 from "./picture/Img1.png";
import image3 from "./picture/Img2.png";
import image4 from "./picture/Img.png";
import "./upcomingShows.css";

const UpcomingShows = () => {
  return (
    <div className="upcomingShows">
      <div className="upcomingShows_heading">
        <h1 className="upcomingShows_heading_left">Upcoming Shows</h1>
        <div className="horizontal"></div>
        <p className="upcomingShows_heading_right">View All</p>
      </div>
      <div className="upcomingShows_container">
        <Card pic={image1} type="Folk" name="Benny Dayal" />
        <Card pic={image2} type="Bollywood" name="Vijay Yesudas" />
        <Card pic={image3} type="Folk" name="Andrea Jeremiah" />
        <Card pic={image4} type="Folk" name="Shilpa Rao" />
      </div>
    </div>
  );
};

export default UpcomingShows;

import ReviewCard from "./Components/reviewCard.js";
import "./reviews.css";
import face1 from "./picture/1.png";
import face2 from "./picture/2.png";
import face3 from "./picture/3.png";
import country from "./picture/USA-512.png";
import left from "./picture/Vector (2).png";
import right from "./picture/Vector (3).png";

const Reviews = () => {
  return (
    <div className="Reviews">
      <div className="Reviews_heading">
        <h1 className="Reviews_heading_left">Reviews</h1>
        <div className="Reviews_heading_right">
          <div className="horizontal"></div>
          <p className="page">1/12</p>
          <img className="leftarrow" src={left}></img>
          <img className="rightarrow" src={right}></img>
        </div>
      </div>
      <div className="Reviews_container">
        <ReviewCard pic={face1} flag={country} rname="Hellen Jummy" />
        <ReviewCard pic={face2} flag={country} rname="Issac Oluwatemilorun" />
        <ReviewCard pic={face3} flag={country} rname="Hellen Jummy" />
      </div>
      <div className="new"></div>
    </div>
  );
};

export default Reviews;

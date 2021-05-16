import "./reviewCard.css";

const ReviewCard = ({ pic, flag, rname }) => {
  return (
    <div className="reviewCard_Container">
      <div className="reviewCard_background"></div>
      <div className="reviewCard_front">
        <div className="reviewCard_front_top">
          <div className="reviewCard_pic">
            <img src={pic} />
          </div>
          <div className="reviewCard_detail">
            <div className="reviewCard_name">{rname}</div>
            <div className="reviewCard_info">
              <img className="reviewCard_countryflag" src={flag}></img>
              <div className="reviewCard_countryname">PALO ALTO, CA</div>
            </div>
          </div>
        </div>
        <div className="reviewCard_front_bottom">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter.
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

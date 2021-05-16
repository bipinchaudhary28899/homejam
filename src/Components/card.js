import "./card.css";
import RightArrow from "../picture/Vector.png";


const Card = ({ pic, type, name }) => {
  return (
    <div className="card_Container">
      <div className="card_background"></div>
      <div className="card_front">
        <img src={pic}></img>
        <div className="detail">
          <div className="detail_label">
            <p>{type}</p>
          </div>
          <h2 className="detail_name">{name}</h2>
          <div className="card_footer">
            <div className="footer_left">
              <p className="moreinfo">More Info</p>
              <img src={RightArrow}></img>
            </div>
            <div className="footer_right">
              <div className="vertical"></div>
              <div className="frimage"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

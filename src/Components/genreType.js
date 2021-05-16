import "./genreType.css";

const GenreType = ({ label, icon }) => {
  return (
    <div className="circle_container">
      <div className="progress"></div>
      <div className="circle">
        <div>
          <img src={icon} />
        </div>
        <p className="count">0</p>
        <p className="label">{label}</p>
      </div>
    </div>
  );
};

export default GenreType;

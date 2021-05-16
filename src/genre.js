import "./genre.css";
import GenreType from "./Components/genreType";
import Heart from "./picture/Vector (4).png";
import Calendar from "./picture/Calendar.png";

const Genre = () => {
  return (
    <div className="genreContainer">
      <GenreType label="Label" icon={Heart} />
      <GenreType label="Label 2" icon={Calendar} />
      <GenreType label="Label 3" icon={Calendar} />
      <GenreType label="Label 4" icon={Calendar} />
    </div>
  );
};

export default Genre;

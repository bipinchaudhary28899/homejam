import NavBar from "./navbar";
import "./App.css";
import Front from "./front";
import Genre from "./genre";
import Reviews from "./reviews";
import UpcomingShows from "./upcomingShows";


function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="overlay">
        <NavBar />
          <div className="container">
            <Front />
            <Genre />
            <UpcomingShows />
            <Reviews />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

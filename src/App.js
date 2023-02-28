import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Filter from "./components/Filter/Filter";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import MovieList from "./components/MovirList/MovieList";

function App() {
  const { moviedata } = useSelector((state) => state);

  const [name, setName] = useState("");

  const [rate, setRate] = useState(0);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const ratingChanged = (rate) => {
    setRate(rate);
  };

  return (
    <div className="App">
      <Filter
        handleChange={handleChange}
        ratingChanged={ratingChanged}
        name={name}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                movie={moviedata.filter(
                  (elt) =>
                    elt.title
                      .trim()
                      .toUpperCase()
                      .includes(name.trim().toUpperCase()) && elt.rate >= rate
                )}
              />
            }
          />

          <Route
            path="/Details/:id"
            element={<MovieDetails movie={moviedata} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

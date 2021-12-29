import React, { useEffect } from "react";
import "../styleComponents/Recommends.css";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectOriginals } from "../features/movieSlice";

function Originals() {
  const movies = useSelector(selectOriginals);

  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (movies) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [movies]);

  return (
    <div className="recommends">
      <div className="recommends__container">
        <h4>Originals</h4>
        {loading ? (
          <div className="loader"></div>
        ) : (
          <div className="recommends__content">
            {movies &&
              movies.map((movie) => (
                <div className="recommends__wrap" key={movie.id}>
                  <Link to={`/detail/` + movie.id}>
                    <img src={movie.cardImg} alt="" />
                  </Link>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Originals;

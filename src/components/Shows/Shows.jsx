import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import NoRecordsFound from "../NoRecordsFound/NoRecordsFound";
import { getShowsStart, setFavorite } from "./showsActions";

function Shows() {
  const { shows = [], isLoading = false } = useSelector((state) => state.shows);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!(shows && shows.length > 0)) {
      dispatch(getShowsStart());
    }
  }, []);

  //   handle favorite

  const handleFavorite = (show) => {
    dispatch(setFavorite(show));
  };
  return (
    <div className="shows-grid">
      <div className="row">
        {shows && shows.length > 0 ? (
          shows.map((show) => (
            <div className="col-md-3 mb-4" key={show.id}>
              <div className="card h-100">
                <img
                  src={show.image.medium}
                  className="card-img-top"
                  alt={show.image.medium}
                  loading="lazy"
                />
                <div className="card-body bg-primary text-white">
                  <h5 className="card-title">{show.name}</h5>

                  <div className="d-flex justify-content-between pt-2">
                    <i
                      className={`bi bi-heart-fill ${
                        show.isFavorite ? "text-warning favorite-active" : ""
                      }`}
                      role="button"
                      onClick={() => handleFavorite(show)}
                    />
                    <div>
                      <i className="bi bi-star-fill mr-1" role="button" />

                      <span> {show.rating.average}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : isLoading ? (
          <Loader />
        ) : (
          <NoRecordsFound />
        )}
      </div>
    </div>
  );
}

export default Shows;

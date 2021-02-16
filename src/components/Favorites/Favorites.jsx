import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import NoRecordsFound from "../NoRecordsFound/NoRecordsFound";
import { setFavorite } from "../Shows/showsActions";

function Favorites() {
  const { favorites = [], isLoading = false } = useSelector(
    (state) => state.shows
  );
  const dispatch = useDispatch();

  //   handle favorite
  const handleFavorite = (show) => {
    dispatch(setFavorite(show));
  };
  return (
    <div className="shows-grid">
      <div className="row">
        {favorites && favorites.length > 0 ? (
          favorites.map((favorite) => (
            <div className="col-md-3 mb-4" key={favorite.id}>
              <div className="card h-100">
                <img
                  src={favorite.image.medium}
                  className="card-img-top"
                  alt={favorite.image.medium}
                  loading="lazy"
                />
                <div className="card-body bg-primary text-white">
                  <h5 className="card-title">{favorite.name}</h5>

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleFavorite(favorite)}
                    >
                      Unfavorite
                    </button>
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

export default Favorites;

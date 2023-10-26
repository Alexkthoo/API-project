import { useDispatch, useSelector } from "react-redux";
import { getAllSpotsThunk } from "../../store/spots";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./Spot.css";

const Spots = () => {
  const dispatch = useDispatch();
  const spots = useSelector((state) => state.spots);

  const getAllSpots = Object.values(spots.allSpots);

  useEffect(() => {
    dispatch(getAllSpotsThunk());
  }, [dispatch]);

  return (
    <>
      <div className="spots-grid">
        {getAllSpots.map((spot) => (
          <NavLink to={`/spots/${spot.id}`} key={spot.id}>
            <div className="each-spot">
              <div className="tooltip">
                <img id="spot-img" src={`${spot.previewImage}`} alt="img" />
                <span className="tooltiptext">{spot.name}</span>
              </div>
              <div className="spot-info">
                <div className="left-spot-info">
                  <p className="city">
                    {spot.city}, {spot.state}
                  </p>
                  <p className="price">
                    <b>${spot.price}</b> night
                  </p>
                </div>
                <div className="right-review-info">
                  {spot.avgRating ? (
                    <div className="review">
                      <b>
                        {" "}
                        <i className="fa-solid fa-star"></i>
                        {parseFloat(spot.avgRating).toFixed(1)}
                      </b>
                    </div>
                  ) : (
                    <div className="review">
                      <b>New</b>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Spots;

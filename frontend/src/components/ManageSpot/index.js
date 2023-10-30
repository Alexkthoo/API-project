import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./ManageSpot.css";
import { getAllSpotsThunk } from "../../store/spots";
import { NavLink, useHistory } from "react-router-dom";
import DeleteModal from "../DeleteSpotModal/index";
import OpenModalButton from "../OpenModalButton";

const UserSpot = () => {
  const user = useSelector((state) => state.session.user);
  const spots = useSelector((state) => state.spots.allSpots);
  const allSpots = Object.values(spots);
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSpotsThunk());
  }, [dispatch]);

  const userSpots = allSpots.filter((spot) => {
    return spot.ownerId === user.id;
  });

  //If there is no User
  if (!user) {
    history.push("/");
  }

  const renderCreateSpotButton = userSpots.length === 0;

  return (
    <div className="manage-spot-container">
      <div className="manage">
        <h2>Manage Spots</h2>
        {renderCreateSpotButton && (
          <div id="new-spot-manage">
            <NavLink id="manage-spot-button" to="/spots/new">
              Create a new Spot
            </NavLink>
          </div>
        )}
      </div>
      <div className="spots-grid">
        {userSpots.map((spot) => (
          <div key={spot.id} className="spots-grid-update-button">
            <NavLink to={`/spots/${spot.id}`}>
              <div className="spot-card">
                <img id="spot-img" src={`${spot.previewImage}`} alt="img" />
                <div className="manage-review">
                  <div className="city">
                    {spot.city}, {spot.state}
                  </div>
                  {spot.avgRating ? (
                    <div className="review">
                      <i className="fa-solid fa-star"></i>
                      <b> {parseFloat(spot.avgRating).toFixed(1)}</b>
                    </div>
                  ) : (
                    <div className="review">
                      <i className="fa-solid fa-star"></i>
                      <b>New</b>
                    </div>
                  )}
                </div>
                <div className="price">
                  <b>
                    {spot.price}
                    <img
                      className="gold-img"
                      src="https://w7.pngwing.com/pngs/466/390/png-transparent-gold-coin-gold-bar-gold-as-an-investment-coin-game-gold-coin-orange-thumbnail.png"
                    />
                  </b>{" "}
                  night
                </div>
              </div>
            </NavLink>
            <div className="update-delete-button">
              <button>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={`/spots/${spot.id}/edit`}
                  id="update-button"
                >
                  Update
                </NavLink>
              </button>
              <OpenModalButton
                buttonText="Delete"
                modalComponent={<DeleteModal spotId={spot.id} />}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSpot;

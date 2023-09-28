import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpotThunk } from "../../store/spots";

const SpotId = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const Spot = useSelector((state) => state.spots.singleSpot);

  useEffect(() => {
    dispatch(getSpotThunk(spotId));
  }, [dispatch, spotId]);

  const handleReserve = () => {
    alert("Feature Coming Soon");
  };

  //spot avg rating
  //   let avg = 0;
  //   if (newReview.length) {
  //     let sum = 0;
  //     for (let i = 0; i < newReview.length; i++) {
  //       sum += newReview[i].stars;
  //     }
  //     avg = sum / newReview.length;
  //   }

  return (
    <>
      <div>
        <h1>{Spot?.name}</h1>
        <p>
          {Spot?.city}, {Spot?.state}, {Spot?.country}
        </p>
        <img
          id="spot-img1"
          src={Spot?.SpotImages?.find((img) => img.preview === true)?.url}
          alt="img"
        />
        <div className="description-host-name">
          <h2>
            Hosted by {Spot?.Owner?.firstName} {Spot?.Owner?.lastName}
          </h2>
          <p>{Spot?.description}</p>
        </div>
        <div className="right-description">
          <div className="price-star">
            <div>
              <b>${Spot?.price}</b> night
            </div>
            <div className="inside-price-star">
              <i className="fa-solid fa-star"></i>
              <div></div>

              <div>
                {Spot?.numReviews ? <span>·</span> : ""}
                {Spot?.numReviews ? (
                  <span>
                    {Spot?.numReviews}
                    {Spot?.numReviews === 1 ? " Review" : " Reviews"}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <button onClick={handleReserve} id="reserve-button">
            Reserve
          </button>
        </div>
      </div>
      <div className="reviews-container">
        <div className="top-reviews"></div>
      </div>
    </>
  );
};

export default SpotId;

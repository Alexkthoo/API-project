import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpotThunk, getAllSpotsThunk } from "../../store/spots";
import AllReviews from "./spotReview";
import { getAllReviewsThunk } from "../../store/review";
import "./spotId.css";

const SpotId = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const Spot = useSelector((state) => state.spots.singleSpot);
  const reviewObj = useSelector((state) => state.reviews.spot);
  const newReview = Object.values(reviewObj);

  const [loadData, setLoadData] = useState(false);

  useEffect(() => {
    dispatch(getSpotThunk(spotId));
    dispatch(getAllSpotsThunk()).then(() => setLoadData(true));
  }, [dispatch, spotId]);

  useEffect(() => {
    dispatch(getAllReviewsThunk(spotId));
  }, [dispatch, spotId]);

  const handleReserve = () => {
    alert("Feature Coming Soon");
  };

  if (!newReview || !Spot) return null;

  if (!Spot.SpotImages) return null;

  //   getting avg review rating
  let avgReview = 0;
  if (newReview.length) {
    let sum = 0;
    for (let i = 0; i < newReview.length; i++) {
      sum += newReview[i].stars;
    }
    avgReview = sum / newReview.length;
  }

  return (
    <div className="single-spot-container">
      <div className="spotId-container">
        {Spot?.id && (
          <>
            <div className="title-info">
              <h2 className="spotId-name">{Spot.name}</h2>
              <p className="spotId-location">
                {Spot.city}, {Spot.state}, {Spot.country}
              </p>
            </div>
            <div className="image-container">
              <img
                id="spotId-main-image"
                src={Spot?.SpotImages?.find((img) => img.preview === true)?.url}
                alt="screen"
              />

              <div className="image-grid">
                {Spot.SpotImages.filter((img, index) => index > 0).map(
                  (img, index) =>
                    index < 4 && img ? (
                      <img src={img.url} className="grid-images" alt="img" />
                    ) : null
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="description-container">
        <div className="left-description">
          Hosted by {Spot?.Owner?.firstName} {Spot?.Owner?.lastName}
          <p className="spot-description-box">{Spot.description}</p>
        </div>
        <div className="right-description">
          <div className="price-star">
            <div>
              <b>
                {Spot.price}{" "}
                <img
                  className="gold-img"
                  src="https://w7.pngwing.com/pngs/466/390/png-transparent-gold-coin-gold-bar-gold-as-an-investment-coin-game-gold-coin-orange-thumbnail.png"
                />
              </b>{" "}
              night
            </div>
            <div className="inside-price-star">
              <i class="fa-solid fa-star"></i>
              <div></div>

              <div>
                {avgReview > 0 ? `${avgReview} ` : "New"}
                {Spot.numReviews ? <span>·</span> : ""}
                {Spot.numReviews ? (
                  <span>
                    {Spot.numReviews}
                    {Spot.numReviews === 1 ? " Review" : " Reviews"}
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
        <div className="top-reviews">
          <div className="review-star">
            <i className="fa-solid fa-star"></i>
          </div>
          {Spot.numReviews ? (
            <div className="review-star-review">
              {parseFloat(avgReview)?.toFixed(1)} · {Spot.numReviews}{" "}
              {Spot.numReviews === 1 ? "Review" : "Reviews"}
            </div>
          ) : (
            <div className="new-review-text">New</div>
          )}
        </div>
        <AllReviews spotId={spotId} />
      </div>
    </div>
  );
};

export default SpotId;

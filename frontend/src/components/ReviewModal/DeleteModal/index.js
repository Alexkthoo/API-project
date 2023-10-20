import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../../context/Modal";
import { deleteReviewThunk } from "../../../store/review";

// import "./CreateReviewModal.css";

const DeleteReviewModal = ({ spotId, reviewId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { closeModal } = useModal();

  const deleteIt = () => {
    dispatch(deleteReviewThunk(reviewId, spotId));
    history.push(`/spots/${spotId}`);
    closeModal();
  };

  const dontDelete = () => {
    closeModal();
  };

  return (
    <>
      <div>
        <h3>Confirm Delete</h3>
        <p>Are you sure you want to delete this review?</p>
        <div>
          <button onClick={deleteIt}>Yes (Delete Review)</button>
          <button onClick={dontDelete}>No (Keep Review)</button>
        </div>
      </div>
    </>
  );
};

export default DeleteReviewModal;

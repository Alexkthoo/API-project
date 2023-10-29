import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../../context/Modal";
import { deleteReviewThunk } from "../../../store/review";
import "./DeleteModal.css";

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
      <div className="delete-modal-container">
        <h3>Confirm Delete</h3>
        <p>Are you sure you want to delete this review?</p>

        <button onClick={deleteIt} className="modal-button" id="delete-button">
          Yes (Delete Review)
        </button>
        <button
          onClick={dontDelete}
          className="modal-button"
          id="cancel-button"
        >
          No (Keep Review)
        </button>
      </div>
    </>
  );
};

export default DeleteReviewModal;

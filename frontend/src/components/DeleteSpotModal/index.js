import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useHistory } from "react-router-dom";
import { deleteSpotThunk } from "../../store/spots";
import "./DeleteSpotModal.css";

const DeleteModal = ({ spotId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { closeModal } = useModal();

  const yesButton = async () => {
    await dispatch(deleteSpotThunk(spotId));
    history.push("/spots/current");
    closeModal();
  };

  const noButton = async () => {
    closeModal();
  };

  return (
    <div className="delete-modal-container">
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to remove this spot?</p>

        <button onClick={yesButton} className="modal-button" id="delete-button">
          Yes (Delete Spot)
        </button>
        <button onClick={noButton} className="modal-button" id="cancel-button">
          No (Keep Spot)
        </button>
      </div>

  );
};

export default DeleteModal;

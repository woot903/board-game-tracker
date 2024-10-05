import { Modal } from "react-bootstrap";
import './BoardGameDetailModal.scss'

const BoardGameDetailModal = ({ game, show, setShow }) => {

  const playersFormat = (playersArray) => {
    if (playersArray[0] === playersArray[1]) {
      return playersArray[0].toString();
    } else {
      return playersArray[0].toString() + " - " + playersArray[1].toString()
    }
  }

  return (
    <Modal
    show={show}
    onHide={() => setShow(false)}
    dialogClassName="modal-width"
    aria-labelledby="example-custom-modal-styling-title">
      <Modal.Header closeButton>
        <Modal.Title>
          {game.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Players</h4>
        <p>{playersFormat(game.players)}</p>
        <h4>Runtime</h4>
        <p>{game.runtime}</p>
        <h4>Description</h4>
        <p>{game.Description}</p>
      </Modal.Body>
    </Modal>
  );
};

export default BoardGameDetailModal;

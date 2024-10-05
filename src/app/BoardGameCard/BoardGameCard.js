import { useState } from "react";
import { Card, Badge, Button } from "react-bootstrap";
import BoardGameDetailModal from "../BoardGameDetailModal/BoardGameDetailModal";
import ImageCreditModal from "../ImageCreditModal/ImageCreditModal";
import './BoardGameCard.scss'


const BoardGameCard = ({ game }) => {
  const [detailShow, setDetailShow] = useState(false);
  const [creditShow, setCreditShow] = useState(false);
  const handleDetailsClick = () => {
    setDetailShow(true);
  }
  const handleImageCreditClick = () => {
    setCreditShow(true);
  }

  const playersFormat = (playersArray) => {
    if (playersArray[0] === playersArray[1]) {
      return playersArray[0].toString();
    } else {
      return playersArray[0].toString() + " - " + playersArray[1].toString()
    }
  }
  const gameImage = () => {
    if (typeof(game.image.credit) === "undefined") {
      return "";
    } else {
      return (
        <div>
          <ImageCreditModal show={creditShow} setShow={setCreditShow} gameName={game.name} credit={game.image.credit}></ImageCreditModal>
          <Card.Img variant="top" src={game.image.path} alt={game.name} style={{ maxHeight: '150px', objectFit: 'contain' }} />
          <Card.Text className="mb-0 text-center">
            <small onClick={handleImageCreditClick} className="text-blue"><u>Image Credit</u></small>
          </Card.Text>
        </div>
      );
    }
  }

  return (
    <Card className="mb-3 card-body">
      <BoardGameDetailModal game={game} show={detailShow} setShow={setDetailShow}></BoardGameDetailModal>
      {gameImage()}
      <Card.Body className="pb-0">
        <Card.Title>{game.name}</Card.Title>
        <Card.Text>
          <strong>Players: </strong> {playersFormat(game.players)} <br />
          <strong>Genre: </strong> {game.genre}
        </Card.Text>
        <div className="pb-3">
          {game.keywords.map((keyword, index) => (
            <Badge key={index} pill variant="primary" className="me-1">
              {keyword}
            </Badge>
          ))}
        </div>
        <div className="text-center d-grid gap-2">
          <Button variant='secondary' size='lg' onClick={handleDetailsClick}>
            Details
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BoardGameCard;

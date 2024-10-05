import React, { useState, useEffect } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import BoardGameCard from "./BoardGameCard/BoardGameCard";
import './app.scss';
import SearchBar from "./SearchBar/SearchBar";
import Filters from "./Filters/Filters"

const App = () => {
  const [games, setGames] = useState([]);

  // Load the JSON data
  useEffect(() => {
    fetch("./boardgames.json")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [playerFilter, setPlayerFilter] = useState(0);

  const filteredGames = games.filter((game) => {
    return game.name.toLowerCase().includes(searchQuery.toLowerCase()) && (Number(playerFilter) === 0 || (game.players[0] <= Number(playerFilter) && Number(playerFilter) <= game.players[1]))
  });
  const FilterActiveText = () => {
    if (Number(playerFilter) !== 0) {
      return "(Active Filter)"
    }
  }

  return (
    <Container>
      <h1 className="header lobster-regular text-center my-4">The Paplham's Board Games Collection</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}></SearchBar>
      <Accordion className="pb-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Filters {FilterActiveText()}</Accordion.Header>
          <Accordion.Body><Filters setPlayerFilter={setPlayerFilter} playerFilter={playerFilter}></Filters></Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Row>
        {filteredGames.map((game) => (
          <Col md={4} key={game.id}>
            <BoardGameCard game={game} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;

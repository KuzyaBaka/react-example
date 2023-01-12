import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../../components/Card/Card";
import { buttonPagination } from "../../constants/buttonPagination";
import "./RicAndMorty.css";

function RicAndMorty() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(``);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, [page]);

  const handlePage = (e) => {
    setPage(e.target.textContent);
  };

  return (
    <>
      <div className="cont-card">
        {characters.map((i) => {
          return <Card key={i.id} name={i.name} status={i.status} image={i.image} />;
        })}
      </div>
      {buttonPagination.map((i) => {
        return (
          <button key={i.id} onClick={handlePage} className="btn-pagination">
            {i.text}
          </button>
        );
      })}
    </>
  );
}

export default RicAndMorty;

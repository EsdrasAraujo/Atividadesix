import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmeById } from "../service/filmes";

const Details = () => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  useEffect(() => {
    async function fetchFilme() {
      const filme = await getFilmeById(id);
      setInfo(filme);
    }
    fetchFilme();
  }, []);
  return (
    <div>
      <h1 className="details">{id}</h1>
    </div>
  );
};

export default Details;

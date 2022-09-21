import React, { useState } from "react";
import { useQuery } from "react-query";

import Character from "./character";

const Characters = () => {
  const [page, setPage] = useState(1);

  const fetchCharacter = async ({ queryKey }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };

  const { isLoading, data, isError } = useQuery(
    ["characters", page],
    fetchCharacter,
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <div className="characters">
        {data.results.map((item, index) => {
          return <Character character={item} />;
        })}
      </div>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Previous
      </button>
      <button disabled={!data.info.next} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </>
  );
};

export default Characters;

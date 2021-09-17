import React, { useState } from "react";

const Search = ({ setList, list }) => {
  const [inputValue, setInputValue] = useState("");
  const [showError, setShowError] = useState(false);
  const [showErrorListContain, setShowErrorListContain] = useState(false);
  const handleChange = (e) => {
    setShowError(false);
    return setInputValue(e.target.value);
  };

  const handleclick = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/repos/${inputValue}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.id) {
          if (!list.some((e) => response.id === e.id)) {
            setList([...list, response]);
            setShowErrorListContain(false);
          } else if (list.find((e) => response.id === e.id) !== undefined) {
            setShowErrorListContain(true);
          }
        } else {
          setShowError(true);
          setShowErrorListContain(false);
        }
      })
      .catch((error) => console.log("Erro na requisição.", error));
  };

  return (
    <form>
      <div>
        <input
          required
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="usuário/repositório"
        />
        <button onClick={handleclick}>Pesquisar</button>
      </div>
      {showError && <p>Erro na busca. Usuário ou repositório invalidos.</p>}
      {showErrorListContain && <p>Repositório já listado.</p>}
    </form>
  );
};

export default Search;

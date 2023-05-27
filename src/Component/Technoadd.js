import React from "react";

const Technoadd = () => {
  return (
    <div>
      <h1 className="Add">Add Techno</h1>
      <div>
        <form>
          <label htmlFor="techno-name">Name:</label>
          <br />
          <input type="text" name="techno-name" id="techno-name" required />
          <br />
          <br />
          <label>Categorie:</label>
          <br />
          <select name="categorie" id="categorie" required>
            <option value="">Javascript</option>
            <option value="">Php</option>
            <option value="">Python</option>
            <option value="">Java</option>
            <option value="">Ruby</option>
          </select>
          <br />
          <br />
          <label htmlFor="description">Description:</label>
          <br />

          <textarea type="textearea" rows="10" cols="70"></textarea>
          <br />
          <br />
          <input className="submit" type="submit" value="Valider"></input>
        </form>
      </div>
    </div>
  );
};

export default Technoadd;

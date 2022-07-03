import React from "react";

const SongArtist = ({bio}:any) => {
  return (
    <section>
      <h3>{bio.strArtist}</h3>
      <img src={bio.strArtistThumb} alt={bio.strArtist} />
      <p>Fecha de Nacimiento: {bio.intBornYear} - {bio.intDiedYear || "Presente"}</p>
      <p>Pais: {bio.strCountry} </p>
      <p>Genero: {bio.strGender}</p>
      <a href={`http://${bio.strWebsite}`} target="_blank" rel="noreferrer" >Sitio web</a>
      <p>Biografia: {bio.strBiographyES}</p>
    </section>
  );
};

export default SongArtist;

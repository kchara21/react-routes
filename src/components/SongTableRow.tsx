import React from "react";
import { useNavigate } from 'react-router-dom';

const SongTableRow = ({id,handleDeleteSong,el}:any) => {
    console.log(el);
    let avatar = el.bio.artists[0].strArtistThumb;
    let avatarStyles = {
        width:"auto",
        height:"40px"
    }
    let navigate = useNavigate();
  return (
    <tr>
      <td>
        <img style={avatarStyles} src={avatar} alt={el.search.artist} />
      </td>
      <td>{el.search.artist}</td>
      <td>{el.search.song}</td>
      <td>
        <button onClick={()=>navigate(`/${id}`)}>Watch</button>
        <button onClick={()=>handleDeleteSong(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default SongTableRow;

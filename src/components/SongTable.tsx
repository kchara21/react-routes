import React from "react";
import SongTableRow from './SongTableRow';

const SongTable = ({ mySongs, handleDeleteSong }: any) => {
  return (
    <div>
      <h3>Mis canciones favoritas</h3>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Artista</th>
            <th>Cancion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mySongs.length > 0 ? (
            mySongs.map((el:any,index:number)=><SongTableRow key={index} el={el} id={index} handleDeleteSong={handleDeleteSong}/>)
          ) : (
            <>
              <tr>
                <td colSpan={4}>Sin canciones</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SongTable;

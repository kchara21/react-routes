import React from "react";
import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, lyric, bio }: any) => {
  if (!lyric || !bio) return null;

  return (
    <>
     {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: No existe la cancion <em>${search.song}</em>`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={search.song} lyric={lyric.lyrics} />
      )}

      
      {bio.artists ? (
        <SongArtist bio={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: No existe el interprete <em>${search.artist}</em>`}
          bgColor="#dc3545"
        />
      )}
     
    </>
  );
};

export default SongDetails;

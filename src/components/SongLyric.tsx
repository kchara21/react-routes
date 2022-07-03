import React from "react";

const SongLyric = ({title,lyric}:any) => {
  return (
    <section>
      <h3>{title}</h3>
      <blockquote style={{whiteSpace:"pre-wrap"}}>{lyric}</blockquote>
    </section>
  );
};

export default SongLyric;

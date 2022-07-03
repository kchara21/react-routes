import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import { helpHttp } from "../helpers/helpHttp";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Error404 from "../pages/Error404";
import SongTable from "./SongTable";
import SongPage from "../pages/SongPage";

interface formDataSong {
  artist: string;
  song: string;
}

let mySongsInit: string[] = JSON.parse(localStorage.getItem("mySongs")!) || [];

const SongSearch = () => {
  const [search, setSearch] = useState<formDataSong | null>(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [mySongs, setMySongs] = useState<Object[]>(mySongsInit);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;
      let artistURL = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songURL = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      setLoading(true);
      const [artistRes, songRes]: any = await Promise.all([
        helpHttp().get(artistURL),
        helpHttp().get(songURL),
      ]);

      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };
    fetchData();
    localStorage.setItem("mySongs", JSON.stringify(mySongs));
  }, [search, mySongs]);

  const handleSearch = (data: formDataSong) => {
    setSearch(data);
  };

  const handleSaveSong = () => {
    alert("Salvando cancion en Favoritos");

    let currentSong: Object = {
      search,
      lyric,
      bio,
    };
    let songs = [...mySongs, currentSong];
    setMySongs(songs);
    setSearch(null);
    localStorage.setItem("mySongs", JSON.stringify(songs));
  };

  const handleDeleteSong = (id: number) => {
    let isDelete = window.confirm(`Eliminando cancion con el id "${id}"`);

    if (isDelete) {
      let songs = mySongs.filter((el, index) => index !== id);
      setMySongs(songs);
      localStorage.setItem("mySongs", JSON.stringify(songs));
    }
  };

  return (
    <div>
      <HashRouter basename="song">
        <header>
          <h2>Song Search</h2>
          <Link to="/">Home</Link>
        </header>
        {loading && <Loader />}
        <article className="grid-1-2">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SongForm
                    handleSearch={handleSearch}
                    handleSaveSong={handleSaveSong}
                  />
                  <SongTable
                    mySongs={mySongs}
                    handleDeleteSong={handleDeleteSong}
                  />
                  {search && !loading && (
                    <SongDetails search={search} lyric={lyric} bio={bio} />
                  )}
                </>
              }
            />
            <Route path="/:id" element={<SongPage mySongs={mySongs} />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </article>
      </HashRouter>
    </div>
  );
};

export default SongSearch;

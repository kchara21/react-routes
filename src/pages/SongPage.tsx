import React from 'react'
import SongDetails from '../components/SongDetails';
import { useParams } from 'react-router-dom';

const SongPage = ({mySongs}:any) => {
    let {id}:any = useParams();
    let currentSong = mySongs[id];
    let {search,lyric,bio} = currentSong;
  return (
    <SongDetails search={search} lyric={lyric} bio={bio} />
  )
}

export default SongPage
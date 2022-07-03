import * as React from 'react';
import { useState, useEffect } from 'react';

const initialForm = {
  artist:"",
  song:"",
}

interface formDataSong {
  artist: string;
  song: string;
}


const SongForm = ({handleSearch,handleSaveSong}:any) => {
  const [form, setForm] = useState<formDataSong>(initialForm);
  const [isDisabled, setIsDisabled] = useState<any>(true);

  const handleChange = (e: { target: HTMLSelectElement } | { target: HTMLInputElement }) =>{
    setForm({
      ...form,
      [e.target.name]:e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
   
    if(!form.artist || !form.song){
      alert("Incomplete Data");
      setIsDisabled(true);
      return;
    }

    handleSearch(form);
    setForm(initialForm);
    setIsDisabled(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="artist" placeholder="Name of an Artist" onChange={handleChange} value={form.artist}/>
        <input type="text" name="song" placeholder="Name of the Song" onChange={handleChange} value={form.song}/>
        <input type="submit" value="Enviar"/>
        <input  type="button" onClick={handleSaveSong} value="Agregar Cancion" disabled={isDisabled && "disabled"}/>
      </form>
    </div>
  );
};

export default SongForm;

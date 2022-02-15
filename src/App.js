import "./App.css";
// import TextFile from Material UI
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";

function App() {
  const [text, setText] = useState("");
  const [gifs, setGifs] = useState([]);

  async function search() {
    const key = "V9Xu2YHeMWSVi3bhGN0buXSowlxWCf3w";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${text}&limit=25&offset=0&lang=en`;
    const r = await fetch(url);
    const j = await r.json();
    console.log(j);
    setGifs(j.data);
  }

  return (
    <div className="App">
      <div className="searchbar">
        {/*  "outlined" variant prop gives the nice animation */}
        <TextField
          id = "search"
          label = "Search"
          variant = "outlined"
          onChange = {(e) => setText(e.target.value)}
          value = {text}
          onKeyPress ={(e) => {if (e.key === "Enter") search();}}
        />
        <Button variant="outlined" onClick={search} size="large">
          Search
        </Button>
      </div>
      <div className = "gifs">
        {gifs.map((gif, i) => {return <img key = {i} src = {gif.images.fixed_height.url}/>;})}
      </div>
    </div>
  );
}

export default App;
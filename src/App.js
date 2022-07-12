import "./styles.css";
import { useState } from "react";

export default function App() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="App">
      <h2>Preview Image</h2>
      <div className="addimg">
        <p>Add image : </p>

        <input type="file" onChange={handleChange} />
      </div>

      <div>
        <img className="image" src={file} alt="imageformat" />
      </div>
    </div>
  );
}

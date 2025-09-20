import { useState } from "react";
import "./App.css";
import CreateImage from "./pages/CreateImage/CreateImage";
import Downloaded from "./pages/Downloaded/Downloaded";

function App() {
  const [createImage, setCreateImage] = useState(false);
  return (
    <>{createImage ? <CreateImage></CreateImage> : <Downloaded></Downloaded>}</>
  );
}

export default App;

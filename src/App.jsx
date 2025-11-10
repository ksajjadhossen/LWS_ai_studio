import { useState } from "react";
import "./App.css";
import CreateImage from "./pages/CreateImage/CreateImage";
import Downloaded from "./pages/Downloaded/Downloaded";

function App() {
  const [page, setPage] = useState("create");

  function changeRouteByClick(data) {
    setPage(data);
  }

  return (
    <>
      {page === "create" && (
        <CreateImage route={changeRouteByClick}></CreateImage>
      )}
      {page === "download" && (
        <Downloaded route={changeRouteByClick}></Downloaded>
      )}
    </>
  );
}

export default App;

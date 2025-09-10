import React, { useState } from "react";
import Upload from "./components/Upload";
import Thumbnails from "./components/Thumbnails";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => setRefresh(!refresh);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Serverless Image App</h1>
      <div className="mb-4">
        <Upload onUploadSuccess={triggerRefresh} />
      </div>
      <Thumbnails refresh={refresh} />
    </div>
  );
}

export default App;
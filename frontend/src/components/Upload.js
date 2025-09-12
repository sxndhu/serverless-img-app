import React, { useState } from "react";
import API from "../api";
import axios from "axios";

function Upload({ onUploadSuccess }) {
  const [file, setFile] = useState(null);

  const handleChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return;

    try {
      const res = await API.get("/presign-upload/", {
        params: { filename: file.name, filetype: file.type },
      });

      const { uploadUrl } = res.data;

      await axios.put(uploadUrl, file, {
        headers: { "Content-Type": file.type },
      });
      console.log(uploadUrl)
      alert("Upload successful!");
      onUploadSuccess();
      setFile(null); // reset input
    }  catch (err) {
  console.error("Upload failed", err.response ? err.response.data : err.message);
  alert("Upload failed! Check console for details.");
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="file"
        className="form-control"
        onChange={handleChange}
      />
      <button className="btn btn-primary" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}

export default Upload;
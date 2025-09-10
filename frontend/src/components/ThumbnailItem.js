import React from "react";
import API from "../api";

function ThumbnailItem({ thumbnail, onDelete }) {
  const handleDelete = async () => {
    try {
      await API.post("/delete-thumbnails/", { key: thumbnail.key });
      onDelete(thumbnail.key);
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <div className="card m-2" style={{ width: "150px", display: "inline-block" }}>
      <img src={thumbnail.url} className="card-img-top" alt="thumbnail" />
      <div className="card-body p-2 text-center">
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ThumbnailItem;
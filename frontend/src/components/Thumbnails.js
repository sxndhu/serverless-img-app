import React, { useEffect, useState } from "react";
import API from "../api";
import ThumbnailItem from "./ThumbnailItem";

function Thumbnails({ refresh }) {
  const [thumbnails, setThumbnails] = useState([]);

  const fetchThumbnails = async () => {
    try {
      const res = await API.get("/list-thumbnails/");
      setThumbnails(res.data.thumnbnails || []);
    } catch (err) {
      console.error("Failed to fetch thumbnails", err);
    }
  };    

  useEffect(() => {
    fetchThumbnails();
  }, [refresh]);

  const handleDelete = (key) => {
    setThumbnails(thumbnails.filter((t) => t.key !== key));
  };

  return (
    <div>
      <h3>Thumbnails</h3>
      <div className="d-flex flex-wrap">
        {thumbnails.map((t) => (
          <ThumbnailItem key={t.key} thumbnail={t} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default Thumbnails;
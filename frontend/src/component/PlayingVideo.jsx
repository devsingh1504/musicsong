import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../utils/spotify-Api";
import ReactAudioPlayer from "react-audio-player";

export default function PlayingVideo() {
  const [play, setPlay] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchSongDetails();
  }, [id]);

  const fetchSongDetails = async () => {
    try {
      const res = await fetchData(`/video/${id}`);
      console.log("API Response:", res);

      // Log all track IDs in the response
      const trackItems = res.data.tracks.items;
      console.log("Track Items:", trackItems);

      // Log all track IDs to compare with the URL ID
      const trackIds = trackItems.map((item) => item.id);
      console.log("Available Track IDs:", trackIds);

      // Find the track that matches the URL ID
      const track = trackItems.find((item) => item.id === id);
      if (track) {
        console.log("Track Details:", track);
        setPlay(track);
      } else {
        console.error("Track not found for ID:", id);
      }
    } catch (error) {
      console.error("Error fetching song details:", error);
    }
  };

  return (
    <div className="container">
      {play ? (
        <div>
          <h2>{play.name}</h2>
          <ReactAudioPlayer src={play.preview_url} controls className="w-50" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

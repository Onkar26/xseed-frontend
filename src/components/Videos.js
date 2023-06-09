import React from "react";
import YouTube from "react-youtube";
import backgroundImage from "../images/img.jpg";

export default function Videos() {
  const videoId = "lMtXfwk7PXg";

  const handleReady = (event) => {
    // Access the player object for additional functionalities
    const player = event.target;
    // player.playVideo(); // Example: autoplay the video
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 3px 100px rgba(0, 0, 0, 0.1)",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2
        style={{
          background: "linear-gradient(270deg, #800080 0%, #ff864c 100%)",
          color: "white",
          margin: "2px",
          minWidth: "99.7%",
        }}
      >
        YouTube Video
      </h2>
      <div
        style={{
          boxShadow: "0px 3px 100px rgba(0, 0, 0, 0.1)",
          border: "solid purple 2px",
          borderRadius: "20px",
          padding: "20px",
          background: "white",
          // background: "linear-gradient(270deg, #800080 0%, #ff864c 100%)",
          margin: "5px",
        }}
      >
        <YouTube
          videoId={videoId}
          onReady={handleReady}
          opts={{ width: "800px", height: "500px" }}
        />
      </div>
    </div>
  );
}

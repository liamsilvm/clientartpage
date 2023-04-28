import React from 'react';

function ImageMap(props) {
  return (
    <div id="image-container" className="image-container">
      <img src={props.main} useMap="#my-image-map" id="image" className="images" />
      <map name="my-image-map" className="my-image-map" id="us-map">
        <area
          id="about"
          className="about-button"
          target="_blank"
          alt="about"
          title="about"
          href=""
          coords="323,328,559,371,549,454,326,391"
          shape="poly"
          data-key="about-button"
          onClick={props.onAreaClick}
        />
        <area
          target="_blank"
          alt="music"
          title="music"
          href=""
          coords="333,454,555,504,529,563,333,510"
          shape="poly"
          className="music-button"
          data-key="music-button"
          onClick={props.onAreaClick}
        />
        <area
          target="_blank"
          alt="art"
          title="art"
          href=""
          coords="373,557,376,626,489,646,505,596"
          shape="poly"
          className="art-button"
          data-key="art-button"
          onClick={props.onAreaClick}
        />
        <area
          className="main-face"
          target="_blank"
          alt="main-face"
          title="main-face"
          href=""
          coords="592,341,552,729,336,673,317,686,287,282"
          shape="poly"
        />
        <area
          target="_blank"
          alt="right-face"
          title="right-face"
          href=""
          coords="555,719,645,583,694,292,598,345"
          shape="poly"
          className="right-face"
        />
        <area
          target="_blank"
          alt="top-face"
          title="top-face"
          href=""
          coords="293,282,466,235,694,295,598,341"
          shape="poly"
          className="top-face"
        />
        <area
          target="_blank"
          alt="logo"
          title="logo"
          href=""
          coords="71,36,51,159,61,192,51,222,75,255,41,338,273,325,254,265,277,215,227,215,247,192,307,205,273,119,250,129,247,106,134,63"
          shape="poly"
          className="logo"
        />
      </map>
    </div>
  );
}

export default ImageMap;

import React, { Component } from 'react';
import main from "./main.PNG"
import AboutPage from './pages/About'; 
import ArtPage from './pages/ArtPage'; 
import MusicPage from './pages/MusicPage';
import Navigation from './Navigation';  
class MyComponent extends Component {
    constructor(props){ 
        super(props); 
        this.state = { 
            selectedArea: null
        }; 
        this.handleAreaClick = this.handleAreaClick.bind(this); 
    }

    handleAreaClick(event){  
        const selectedArea = event.target.getAttribute('data-key'); 
        this.setState({selectedArea}); 
    }

  render() {
    let content; 
    switch(this.state.selectedArea){ 
        case this.state.selectedArea = "about-button": 
        content = <AboutPage pages = {this.props.pages}/>; 
        break; 
        
        case this.state.selectedArea = "music-button": 
        content = <MusicPage pages = {this.props.pages}/>; 
        break; 
        case this.state.selectedArea = "art-button": 
        content = <ArtPage images = {this.props.images} sketches = {this.props.sketches} pages = {this.props.pages}/>; 
        break; 

    }
    return(
        <div>
        <div id="image-container" className="image-container">
        <img src={main} useMap="#my-image-map" id="image" className="images" />
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
            onClick = {this.handleAreaClick}
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
            onClick = {this.handleAreaClick}
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
            onClick = {this.handleAreaClick}
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

      <div id="content-container" className="content-container">
        
                {content}
         
         
        </div>
    </div>
    )
  }
}

export default MyComponent;

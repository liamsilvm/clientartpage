import React, { Component } from 'react'; 
import './Pages.css';
import ArtContainer from './ArtworkContainer'; 

class ArtPage extends Component{ 
    constructor(props){ 
        super(props); 

        this.state = { 
            pageTitle: null,
            pageBody: null
        }


    }
  
    render(){ 
        let page
        this.props.pages !== null ? page = this.props.pages.filter((p) => p.page == "Art") : page = null; 
        if(page !== null){ 
            page = page[0]; 
        }
      
        return(
            
            <div className = "gallery"> 

                {page !== null ? <h1 id = "ArtPageTitle">{page.title}</h1> : <h1 id = "loading">loading...</h1>}
                {page !== null ? <p className = "ArtPageText">{page.body}</p> : <p id = "loading">loading...</p>}
                <div className = "ArtPageText" >
                
          
                </div>



                <div className = "galleryContainer">
                <ArtContainer images = {this.props.images} sketches = {this.props.sketches}/>
                </div>
                
            </div>
        )
    }
}

export default ArtPage; 
import React, { Component } from 'react'; 
import './Pages.css'
class MusicPage extends Component{ 
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
            <div className = "MusicPage">
                {page !== null ? <h1 className = "aboutPageTitle">{page.title}</h1> : <h1 id = "loading">Loading...</h1>}
                {page !== null ? <p className = "AboutText">{page.body}</p> : <p id = "loading">loading...</p>}
                 <div className = "MusicContainer"> 
                 <iframe
                    width="50%"
                    height="300"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1442402281&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    ></iframe>
                 <iframe
                    width="50%"
                    height="300"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1410042196&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    ></iframe>
                 <iframe
                    width="50%"
                    height="300"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1407667555&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    ></iframe>
                 </div>
            </div>
        )
    }
}


export default MusicPage; 
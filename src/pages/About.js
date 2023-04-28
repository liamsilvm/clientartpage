import React, { Component } from 'react'; 
import './Pages.css'; 


class AboutPage extends Component { 

    constructor(props){ 
        super(props); 

        this.state = { 
            pageTitle: null, 
            pageBody: null
        }
    }

 
    render(){ 
        let page
        this.props.pages !== null ? page = this.props.pages.filter((p) => p.page == "About") : page = null; 
        if(page !== null){ 
            page = page[0]; 
        }
     
        return(
            <div> 
                {page !== null ? <h1 className = "aboutPageTitle">{page.title}</h1> : <h1 id = "loading">loading...</h1>}
                <div className = "AboutText"> 
                {page !== null ? <p>{page.body}</p> : <p id = "loading">loading...</p>}
                </div>
                </div>
        )
    }
}


export default AboutPage; 
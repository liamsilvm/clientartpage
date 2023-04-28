import React, { Component } from 'react'; 
import './Navigation.css'; 
class Navigation extends Component{ 
    static defaultProps={ 
        items : ['home', 'artwork', 'music','about', 'cart']
    }
    render(){ 
        
        
        return(
            <nav className = "nav">
                 <ul>
                    <a href = '/' className = 'site-title'>Liam Silv Art</a>
                    {this.props.items.map((n) =>{ 
                        let ancor = `/${n}`
                        return<li id = {n}>
                            <a href = {ancor}>{n}</a>
                        </li>
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navigation; 
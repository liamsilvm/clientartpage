import React, {Component} from 'react'; 
import Image from './image/Image'; 
import './Pages.css'; 


class ImageContainer extends Component{ 


    constructor(props){ 
        super(props); 

        this.handleClick = this.handleClick.bind(this); 
        this.addToCart = this.addToCart.bind(this); 
        this.state = { 
            curTarget: 'paintings'
        }
    }
    
    addToCart(){ 
        console.log('is this clicking?')
    }
    handleClick(event){ 
        console.log(event.target.value); 
        this.setState({
            curTarget: event.target.value
        })
    }
    render(){ 
        let content = this.props.images; 
        let curTarget = this.state.curTarget; 

        let imageArr = this.props.images; 
    
        switch(this.state.curTarget){ 
            case this.state.curTarget = "paintings": 
            content = this.props.images; 
            break; 

            case this.state.curTarget = "sketches":
            content = this.props.sketches; 
            break; 
        }
        return(
            <div className="pages">
                <select id = "type" onClick = {this.handleClick}>
                    <option>paintings</option>
                    <option>sketches</option>
                </select>
              
                <div className="imageContainer">
                    {content?.map((n) => { 
                        return <Image src={n} size = {Math.floor(Math.random() * 3) + 1}/>
                    })}
                </div>
            </div>
        );
    }
    
}

export default ImageContainer; 
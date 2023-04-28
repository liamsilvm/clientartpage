import { Modal } from 'bootstrap';
import React, {Component} from 'react'; 
import './Image.css'; 
import './ImageModal'; 
import './commentsContainer.css'; 


class Image extends Component { 
        constructor(props){ 
            super(props); 
            this.openImage = this.openImage.bind(this); 
            this.addComment = this.addComment.bind(this); 
            this.handleModalClickBack = this.handleModalClickBack.bind(this); 
            this.handleInputChange = this.handleInputChange.bind(this); 
            this.handleSubmit = this.handleSubmit.bind(this); 
            this.openComments = this.openComments.bind(this); 
            this.handleSubmitButton = this.handleSubmitButton.bind(this); 
            this.state = {
                clicks: 1, 
                showModal: false, 
                showComments: false
            }; 

        }
    openImage(){ 
        window.open(`${this.props.src}`, '_blank'); 
    }
    handleSubmit(e){ 
        e.preventDefault(); 
    }
    handleSubmitButton(e){ 
        document.getElementById('name').value = ''; 
        document.getElementById('comment').value = ''; 
        fetch('/api/items', { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                image: this.props.src,
                name: this.state.nameValue, 
                comment: this.state.commentValue
            })
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then((this.openComments))
        .then(this.setState({showComments : true}))
        .catch((err)=> console.log(err))
        
    }
    handleModalClickBack(){ 
        this.setState({ 
            showModal: false
        })
    }
    handleInputChange(e){ 
        if(e.target.placeholder == 'name'){ 
            this.setState({ 
                nameValue: e.target.value 
            })
        }else{ 
            this.setState({ 
                commentValue: e.target.value
            })
        }
        
    }
    openComments(){ 

            fetch('/api/items')
            .then((comments) => comments.json())
            .then((comments) => this.setState({ 
                comments: comments, 
                showComments : !this.state.showComments
            }))
            .catch((error) => { 
                console.error('error fetching comments: ', error)
            })
            
    }
    addComment(){ 

        const currentUrl = window.location.href;
        const commentUrl = currentUrl + "comment.html?image=" + this.props.src;
        // window.open(commentUrl, "comment window");
        this.setState({
            showModal: !this.state.showModal
        })
    }   
    render(){ 
      const modalStyle = { 
        display: this.state.showModal ? "block" : "none", 
        zIndex: 999, 
        position: "fixed", 
        backgroundColor: "black", 
        top: 0,
        left: 0, 
       }

    const commentsContainer = { 
        display: this.state.showComments ? "block" : "none", 
    }
       const { showModal, comments} = this.state; 

       let commentsContent; 
       let filteredComments = []; 
       let buttonAction = ''; 
       this.state.showComments ? buttonAction = 'hide comments' : buttonAction = 'show comments';
       if(comments){ 
        console.log(comments); 
        comments.forEach((comment) => { 
            if(comment.image == this.props.src){ 
                filteredComments.push(comment); 
            }
        })  
        commentsContent = filteredComments.map((comment) => (
            <p key = {comment.id}>{comment.name}:{comment.comment}</p>
        ))
        
       }


        let rem;  
        let num = this.props.size; 
        switch(num){ 
            case 1: 
            rem = "200em"; 
            break; 

            case 2: 
            rem = "300em"; 
            break; 

            case 3: 
            rem = "400em"; 
            break; 
        }

        return(
            <div className = "parent">
                <img src ={this.props.src} className = "image" alt = "image" width = "200em"></img>
                    <div className = "imageButtons">

                    
                    <button className = "individualButton">share</button> 
                    <button className = "individualButton" onClick = {this.addComment}>view/comment</button>
                    </div>
                <div className = "modal" style = {modalStyle}>
                    
                    <img src = {this.props.src} width = "500em"></img>
                    <form id = "comment-form" onSubmit = {this.handleSubmit}>
                        <button onClick = {this.handleModalClickBack} id = "x-button">back</button>
                        <input placeholder = "name" onChange = {this.handleInputChange} id = "name"></input>
                      
                        <input placeholder = "comment" onChange = {this.handleInputChange} id = "comment"></input>
                        <button onClick = {this.handleSubmitButton}>send</button>
                    </form>
                    <button onClick = {this.openComments}>{buttonAction}</button>
                    <div id = "comments-container" style = {commentsContainer}>
                        {commentsContent}
                    </div>
                    
                </div>
            </div>
        )

        /* 
            
        */ 

    }
}

export default Image;
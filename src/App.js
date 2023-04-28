import React from 'react'; 
import './App.css';
import Main from './MainImage'; 
import axios from 'axios'; 

function App() {

  //so here we are going to make some api calls. 


  //----------------------------------------------------------\\



  const [data, setData] = React.useState(null); //const [state, setState] = useState(initialState); 
  const [sketches, setSketches] = React.useState(null); //const [state, setState] = useState(initialState); 
  const [comments, setComments] = React.useState(null); //const [state, setState] = useState(initialState); 
  const [pages, setPages] = React.useState(null); //const [state, setState] = useState(initialState); 
  const [main, setMain] = React.useState(null); 

  React.useEffect(() => {
    
    fetch("/imgurimages/paintings")
    .then((res) => res.json())
    .then((data) => setData(data.images))
  }, []); 

  React.useEffect(() => {
    fetch("/imgurimages/sketches")
    .then((res) => res.json())
    .then((data) => setSketches(data.images))
  }, []); 



  React.useEffect(() => {
    fetch("/imgurimages/main")
    .then((res) => res.json())
    .then((data) => setMain(data.images))
  }, []); 

  React.useEffect(() => {
    fetch("/api/items")
    .then((res) => res.json())
    .then((data) => setComments(data))
  }, []); 
  React.useEffect(() => {
    fetch("/api/pages")
    .then((res) => res.json())
    .then((data) => setPages(data))
  }, []); 
  



  return (
    <div className="App">
      <Main images = {data} sketches = {sketches}  pages = {pages} main = {main}/>
    </div>
  );
}

export default App;

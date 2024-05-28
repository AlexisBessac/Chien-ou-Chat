import { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";


function Result(props) {
  return (
    <p>Vous préférez les {props.catClics > props.dogClics ? "chats" : "chiens"}</p>
  );
}


function App() {
  const [catClics, setCatClics] = useState(0);
  const [dogClics, setDogClics] = useState(0);

  const [srcChient, setSrcChient] = useState("");
  const [srcChat, setSrcChat] = useState("");


  useEffect(() => {
    async function fetchImages() {
      const resChien = await fetch("https://dog.ceo/api/breeds/image/random");
      const dataChien = await resChien.json();
      setSrcChient(dataChien.message);


      const resChat = await fetch("https://api.thecatapi.com/v1/images/search");
      const dataChat = await resChat.json();
      setSrcChat(dataChat[0].url);
    }
    fetchImages();
  }, [catClics, dogClics]);


  return (
  
    <>
      <div className="container">
        <Typography style={{ textAlign: 'center', padding: '30px', color: 'darkblue', marginLeft: '50px' }} variant="h1">Chien ou Chat</Typography>
        <div className="row" style={{marginLeft: '50px'}}>
          <div className="col-lg-6">
            <img src={srcChient} height={200} alt="Chien" />
          </div>
          <div className="col-lg-6">
            <img src={srcChat} height={200} alt="Chat" />
          </div>
        </div>
        <div className="row" style={{marginLeft: '50px'}}>
          <div className="col-6">
            <Button style={{ marginTop: '10px' }} variant="contained" color="primary" size="medium" onClick={() => { setDogClics(dogClics + 1) }}>Voter</Button>
          </div>
          <div className="col-6">
            <Button style={{ marginTop: '10px' }} variant="contained" color="primary" size="medium" onClick={() => { setCatClics(catClics + 1) }}>Voter</Button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Typography style={{ textAlign: 'center', marginTop: "30px", fontSize: '25x' }} variant="body1"><Result catClics={catClics} dogClics={dogClics} /></Typography>
          </div>
        </div>
      </div>
    </>

  );
}


export default App;


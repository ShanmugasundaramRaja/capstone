import {React,useState} from 'react';
import {Row,Col,Container,Button } from 'react-bootstrap';
import CardP from './CardP';
import NavBar from './NavBar';
import {GiCarousel} from "react-icons/gi"
import { Link } from 'react-router-dom';
import Footer from './Footer'
import { storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function Carouse(){
    const [file, setFile] = useState("");

    const[src,setSrc]=useState("");
 
  
 
 
    
    function handleChange(event) {
        setFile(event.target.files[0]);
    }
 
    const handleUpload = () => {
        if (!file) {
            alert("Please upload an image first!");
        }
 
        const storageRef = ref(storage, `/files/${file.name}`);
 
      
        const uploadTask = uploadBytesResumable(storageRef, file);
 
        uploadTask.on(
           
            (err) => console.log(err),
            () => {
               
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setSrc(url)
                   
                    console.log(url);
                });
            }
        );
    };


    
    return(

 

<Container fluid style={{padding:'0'}} className="back">
    <NavBar/>
    <Row>
        <Col >
            <Container  fluid style={{width:'100%',height:'200px',padding:'5%'}}>
            <div className="App d-flex flex-column justify-content-center align-items-center p-4" >
             
             <label for="upload-photo">Add images</label>
      <input type="file" id="upload-photo" onChange={handleChange} />
      <button className="btn " style={{borderRadius:"24px",width:'20%',backgroundColor:'aliceblue'}} onClick={handleUpload}>Submit</button>
             
             </div>
            </Container>
            </Col>
    </Row>
<Row>
    <Col xs={12} className="d-flex back2  mt-5 ml-5">
        <CardP src={src}/>
        <CardP src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png"/>
        <CardP src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png"/>
        </Col>
        </Row>
        <Row>
    <Col xs={12} className="d-flex back2 ml-5  mt-5">
        <CardP src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png"/>
        <CardP src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png"/>
        <CardP src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png"/>
        </Col>
        </Row>
        <Footer/>
     

</Container>
    



    )
}
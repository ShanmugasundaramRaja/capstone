import React from "react"
import { Container } from "react-bootstrap"
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import '../styles/Home.css';

export default function Footer(){

    return(
<Container fluid style={{padding:0}} className="back2">

<footer class="text-center text-white">

<Container fluid>
  <section class="mb-4 pt-3">
 
    <a class="btn  btn-floating m-1" href="#!" role="button"
      ><FaFacebook />
    </a>


    <a class="btn  btn-floating m-1" href="#!" role="button">
     <FaTwitter></FaTwitter></a>

   
    <a class="btn  btn-floating m-1" href="#!" role="button"
      ><FaGoogle></FaGoogle>
    </a>

    
    <a class="btn  btn-floating m-1" href="#!" role="button"
      ><FaInstagram></FaInstagram>
    </a>

 
    <a class="btn  btn-floating m-1" href="#!" role="button"
      ><FaLinkedin></FaLinkedin>
    </a>


    <a class="btn  btn-floating m-1" href="#!" role="button"
      ><FaGithub></FaGithub>
    </a>
  </section>

  </Container>



<div class="text-center p-3" style={{backgroundColor: "white",color:"black",opacity:'0.5'}}>
  © 2022 Copyright :
  <a style={{color:"black"}}href="https://google.com/">  Globetrotter.com</a>
</div>

</footer>

</Container>
    )
}
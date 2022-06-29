import './App.css';
import { InlineWidget } from "react-calendly";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiExpress} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { SiLaravel} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiGit } from "react-icons/si";
import "aos/dist/aos.css"
import { useState,useEffect} from "react";
import Aos from 'aos';
import Axios from 'axios';
import axios from 'axios';
function App() {
  
useEffect(()=>{
  Aos.init({duration: 1000});
},[])

const [name,setName] =useState("")
const [mail,setMail] =useState("")
const [message,setMessage] =useState("")

function nameHandler(e){
  setName(e.target.value)
}

function mailHandler(e){
  setMail(e.target.value)
}

function messageHandler(e){
  setMessage(e.target.value)
}
async function fetchHandler(e) {
  await axios.post("https://whispering-depths-85783.herokuapp.com/enviar",{name,mail,message})
}
  
  
  return (
    <div className="App">
     {/* <div className="background">
      <img src="https://p1.pxfuel.com/preview/825/228/861/macbook-laptop-computer-technology-business-office.jpg"/>
  </div>  */}






      <div className='profession' data-aos="fade-right">
        <h1>Damian Duran</h1>
        <h3>FULL STACK DEVELOPER</h3>
      </div>

      
      

      <div className="presentacion" data-aos="zoom-in">
        <p>Hello there!!! Mi nombre es Damián Duran, soy desarrollador full stack 😇 </p>
        <h4>Por que yo en especifico?</h4>
        <p>Bueno podría comenzar a nombrar una lista de cosas que me hagan quedar bien, sin  embargo lo cierto es que si hay personas
          que pudan y que estan haciendo lo que yo, personalmente un atributo que no es tan destacado pero siento que en realidad es muy importante, es que soy leal, a mi trabajo
          y a mi equipo.
        </p>
        
      </div>





      <div className="skills">
        <p>Bueno bueno, y que hay de mis tecnologias?🤔<br/> Las enlisto aqui abajo!!!!😉<br/> 
        He aqui un par de tecnologias que he aprendido con el tiempo:</p>
        <div className="list">
          <ul>
            <li data-aos="fade-up-left"> <FaJsSquare/> JAVASCRIPT</li>
            <li data-aos="fade-up-right"><FaReact/> REACT </li>
            <li data-aos="fade-up-left"> <SiRedux/> REDUX</li>
            <li data-aos="fade-up-right"> <SiExpress/> EXPRESS JS</li>
            <li data-aos="fade-up-left"><FaNodeJs/> NODE JS </li>
            <li data-aos="fade-up-right"> <SiMysql/> MY SQL</li>
            <li data-aos="fade-up-left"> <SiPostgresql/> POSTGRESS</li>
            <li data-aos="fade-up-right"> <FaPhp/> PHP</li>
            <li data-aos="fade-up-left"><SiLaravel/> LARAVEL </li>
            <li data-aos="fade-up-right"><FaGithub/> GITHUB </li>
            <li data-aos="fade-up-left"> <SiGit/> GIT</li>
          </ul>
        </div>
      </div>

      <div className="laboral-experience">
        <p>En cuanto a mi experiecia laboral trabajé como desarrolador backend en una empresa llamada Webleads en febrero de 2022, creando apis para el consumo del frontend, cual, dicho sea de paso, me desempeñé en ambos cargos.
          <br/> (Información mas detallada en CV)
        
        Por supusto no todas son habilidades tecnicas, en ese trabajo desarrollé las siguientes habilidades tales como:</p>
        <ul>
          <li >Trabajar en equipo</li>
          <li >Metodologias agiles</li>
          <li >Aprender una nueva tecnologia</li>
          <li >Capacidad de adaptarse a cualquier proyecto</li>
          <li >Planeamiento y avance diario</li>
        </ul>
      </div>

      <div className="projects">
        <p>Entiendo cuan duro conocer a una persona a travez de textos puede ser, por lo que adjunto una lista de proyectos realizados</p>
        <div className="project">
          <p>Este es una landing page para la empresa cual trabajo, hecha con React, y un formulario conectado a un backend
            que desplegué en Heroku hecho con Node usando Express JS.
          </p>
          <a href="https://pag-webleads-react.vercel.app/">
          <img src={require("./screen.png")}/> </a>
        </div>
        <div className="project">
          
          <p>No puedo decir mucha de esta, es una peticion fetch usando Axios a una api llamada "Random Users"</p>
        <a href="https://fetchbasic.vercel.app/">
          <img src={require("./screen2.png")}/> </a>
        </div>
        <div className="project">
        <p>Aplicacion tipo consultora de Ropa hecha con React</p>
        <a href="https://ventas-ropa.vercel.app/"> <img src={require("./screen3.png")}/></a>
        
        </div>
      </div>

      <div className="social">
        <p>Hey! Buen viaje hasta aqui al fondo, eh? Aqui abajo se encuetran alguna de mis redes sociales donde podras hallarme ;)</p>
        <p>Tranquilo/a! No necesariamente hagamos esto tan formal! Podes escribirme y hablaremos de la vida, quizas un buen cafe espere por nosotros :)</p>
        <ul>
          <li data-aos="fade-right"><a href="https://wa.me/5493884872173"><p>WhatsApp </p><FaWhatsapp/></a></li>
          <li data-aos="fade-right"><a href="https://www.facebook.com/damian.duran.35175/"><p>Facebook </p><FaFacebookF/></a></li>
          <li data-aos="fade-right"><a href="https://ar.linkedin.com/in/dami%C3%A1n-duran-5a17b0231"><p>LinkedIn </p><FaLinkedinIn/></a></li>
          <li data-aos="fade-right"><a href="https://github.com/Damian-luis"><p>Github </p><FaGithubSquare/></a></li>
        </ul>
      </div>

      <div className="form" data-aos="fade-up">
        <h4>Okay...lo hacemos mas formal? Enviame un mensaje para hablar, quizas podamos hacer algo juntos!</h4>

        <form onSubmit={fetchHandler}>
        <label htmlFor="fname">Nombre</label>
        <input type="text" id="fname" name="firstname" placeholder="Tu nombre..." onChange={nameHandler}/>
        <label htmlFor="lname">Correo</label>
        <input type="text" id="lname" name="lastname" placeholder="Tu correo electronico..." onChange={mailHandler}></input>
        <label htmlFor="subject">Sobre...</label>
        <textarea id="subject" name="subject" placeholder="Escriba un tema por favor" onChange={messageHandler} ></textarea>

        <button className="form-button" type="submit">Enviar mensaje</button>
        </form>
      </div>






      
<div className="about-me">
<h4>Un poco sobre mi...</h4>
        <p>Tengo 23 años, vivo en Argentina, comencé hace un par de años a sentir que programar podría ser lo que me acabe definiendo, escribir código ya lo siento como algo dentro de mi, es lo que me mueve al final del día.
        </p>
</div>
      <div className="fotos">
          <div className="mi-foto" data-aos="zoom-in">
            <img src={require("./foto.jpg")} className="foto"/>
          </div>
      </div>



      


      <div className="thanks">
        <h4>Quiero tomarme este espacio para agradecerte por haberte pasado por mi pequeño portfolio, no es lo mejor del mundo pero es hecho totalmente por mi<br />
        Muchas gracias!</h4>
      </div>


    

    </div>
  );
}

export default App;

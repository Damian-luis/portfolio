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
      <div className="background">
      <img src="https://p1.pxfuel.com/preview/825/228/861/macbook-laptop-computer-technology-business-office.jpg"/>
      </div>






      <div className='profession' data-aos="fade-right">
        <h1>Damian Duran</h1>
        <h3>FULL STACK DEVELOPER</h3>
      </div>
      <div className="presentacion" data-aos="zoom-in">
        <h4>Hello there!!! Mi nombre es Damián Duran, soy desarrollador full stack 😇 </h4>
        <h3>Por que yo en especifico?</h3>
        <h4>Bueno podría comenzar a nombrar una lista de cosas que me hagan quedar bien, yo soy más de ser cortito y al pie, soy 100% leal.😊 </h4>
        <h3>Un poco sobre mi...</h3>
        <h4> Comencé hace un par de años a sentir que programar podría ser lo que me acabe definiendo, escribir código ya lo siento como algo dentro de mi, es lo que me mueve al final del día.
        </h4>
      </div>

      <div className="fotos">
          <div className="mi-foto" data-aos="zoom-in">
            <img src={require("./foto.jpg")} className="foto"/>
          </div>
      </div>

      <div className="skills">
        <h3>Entonces...un buen desarrolador sin un buen stack de tecnologias!?!?🤔<br/> Por supuesto que NO!!!!😉<br/> 
        He aqui un par de tecnologias que he aprendido con el tiempo:</h3>
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
        <h3>En cuanto a mi experiecia laboral trabajé como desarrolador backend, creando apis para el consumo del frontend, cual, dicho sea de paso, me desempeñé en ambos cargos.</h3>
        <h3>Por supusto no todas son habilidades tecnicas, en ese trabajo desarrollé las siguientes habilidades tales como.</h3>
        <ul>
          <li data-aos="fade-right">Trabajar en equipo</li>
          <li data-aos="fade-right">Metodologias agiles</li>
          <li data-aos="fade-right">Aprender una nueva tecnologia</li>
          <li data-aos="fade-right">Capacidad de adaptarse a cualquier proyecto</li>
          <li data-aos="fade-right">Planeamiento y avance diario</li>
        </ul>
      </div>

      <div className="projects">
        <h3>Entiendo cuan duro conocer a una persona a travez de textos puede ser, por lo que adjunto una lista de proyectos realizados</h3>
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
        
        <a href="https://ventas-ropa.vercel.app/"><p>Aplicacion tipo consultora de Ropa hecha con React</p></a>
        
        </div>
      </div>

      <div className="social">
        <h3>Hey! Buen viaje hasta aqui al fondo, eh? Aqui abajo se encuetran alguna de mis redes sociales donde podras hallarme ;)</h3>
        <h3>Tranquilo/a! No necesariamente hagamos esto tan formal! Podes escribirme y hablaremos de la vida, quizas un buen cafe espere por nosotros :)</h3>
        <ul>
          <li><a href="https://wa.me/5493884872173">WhatsApp <FaWhatsapp/></a></li>
          <li><a href="https://www.facebook.com/damian.duran.35175/">Facebook <FaFacebookF/></a></li>
          <li><a href="https://ar.linkedin.com/in/dami%C3%A1n-duran-5a17b0231">LinkedIn <FaLinkedinIn/></a></li>
          <li><a href="https://github.com/Damian-luis">Github <FaGithubSquare/></a></li>
        </ul>
      </div>

      <div className="form" data-aos="fade-up">
        <h2>Okay...lo hacemos mas formal? Enviame un mensaje para hablar, quizas podamos hacer algo juntos!</h2>

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

      <div className="thanks">
        <h4>Quiero tomarme este espacio para agradecerte por haberte pasado por mi pequeño portfolio, siento que de una vez por todas todo finalmente va a estar bien. Esta vez vez todo estará bien.</h4>
      </div>


    

    </div>
  );
}

export default App;

import './App.css';
import { InlineWidget } from "react-calendly";
function App() {
  return (
    <div className="App">
      <div className="background">
      <img src="https://p1.pxfuel.com/preview/825/228/861/macbook-laptop-computer-technology-business-office.jpg"/>
      </div>






      <div className='profession'>
        <h1>Damian Duran</h1>
        <h3>FULL STACK DEVELOPER</h3>
      </div>
      <div className="presentacion">
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </h4>
        <h2>Por que yo?</h2>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </h4>
        <h2>Un poco sobre mi...</h2>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        </h4>
      </div>

      <div className="fotos">

      </div>

      <div className="skills">
        <h2>Un buen desarrolador sin un buen stack de tecnologias? Por supuesto que no!</h2>
        <div className="list">
          <ul>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
            <li>REDUX</li>
            <li>EXPRESS JS</li>
            <li>NODE JS</li>
            <li>MY SQL</li>
            <li>POSTGRESS</li>
            <li>PHP</li>
            <li>LARAVEL</li>
            <li>GITHUB</li>
            <li>GIT</li>
          </ul>
        </div>
      </div>

      <div className="laboral-experience">
        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </h2>
        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</h3>
        <ul>
          <li>Trabajar en equipo</li>
          <li>Metodologias agiles</li>
          <li>Aprender una nueva tecnologia</li>
          <li>Capacidad de adaptarse a cualquier proyecto</li>
          <li>Planeamiento y avance diario</li>
        </ul>
      </div>

      <div className="projects">
        <h2>Entiendo cuan duro conocer a una persona a travez de textos puede ser, por lo que adjunto una lista de proyectos realizados</h2>
        <div className="project1">

        </div>
        <div className="project2">
          
        </div>
        <div className="project3">
          
        </div>
      </div>

      <div className="social">
        <h2>Hey! Buen viaje hasta aqui al fondo, eh? Aqui abajo se encuetran alguna de mis redes sociales donde podras hallarme ;)</h2>
        <h2>Tranquilo/a! No necesariamente hagamos esto tan formal! Podes escribirme y hablaremos de la vida, quizas un buen cafe espere por nosotros :)</h2>
        <ul>
          <li>WhatsApp</li>
          <li>Facebook</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
        </ul>
      </div>

      <div className="form">
        <h2>Okay...lo hacemos mas formal? Enviame un mensaje para hablar, quizas podamos hacer algo juntos!</h2>

        <form>
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label htmlFor="lname">Sobre...</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
        <label htmlFor="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

        <button className="form-button" type="submit">Enviar mensaje</button>
        </form>
      </div>

      <div className="thanks">
        <h3>Quiero tomarme este espacio para agradecerte por haberte pasado por mi pequeño portfolio, siento que de una vez por todas todo finalmente va a estar bien. Esta vez vez todo estará bien.</h3>
      </div>


    

    </div>
  );
}

export default App;

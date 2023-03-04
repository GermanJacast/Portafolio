import '../style/skills.css'
import {  NavLink } from 'react-router-dom';

export const Skills = () => {
  return (
    <div className='container-skills'>
      <div className='text'>
        <h2>Habilidades</h2>
        <p>Desde que comencé en este mundo, tenia muy en claro
          que me enfocaria al Front-End, pero ello no quiere decir que 
          no conociera y aprendiera sobre otros campos.
          <br />
          -Siempre entrega algo que te llene y te haga sentir conforme con lo que
          se ha realizado-.
        </p>
      </div>
      <div className='skills'>
        {/* basic -> intermediate -> advanced -> almost expert */}
        <div className='bar almost-expert' data-skills="HTML5"></div>
        <div className='bar almost-expert' data-skills="Css3"></div>
        <div className='bar advanced' data-skills="Java Script"></div>
        <div className='bar intermediate' data-skills="ReactJS"></div>
        <div className='bar intermediate' data-skills="Photoshop"></div>
        <div className='bar intermediate' data-skills="Illustrator"></div>
      </div>
      <div className='text'>
        <p>
          Puedes ver más información sobre mis habilidades u otra cosa que le interese,
          como tambien ponerse en contacto si me necesita, y solo realizando un simple click aqui
          <NavLink to='/contact'>Contacto</NavLink>
        </p>
      </div>
    </div>
  )
}

export default Skills

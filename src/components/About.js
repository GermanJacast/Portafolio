import '../style/about.css'
import {  NavLink } from 'react-router-dom';

export const About = () => {
  return (
    <div className="container-about">
      <div className='text'>
        <h2>Sobre mi</h2>
        <p>
        Aloha!.
        <br />
        Soy un desarrollador front - end ubicado en Antofagasta, Chile. Tengo una gran pasión
        por el diseño, lo cual me lleva a querer entregar diseños adaptados a los gustos de quien lo
        solicite, en donde el usuario pueda navegar de manera intuitiva y dinámica. Siempre interesado
        en formar parte de diversos proyectos.
        <br />
        Me considero alguien bien organizado con su tiempo, solucionador de problemas si se llegan a presentar, 
        independiente, y sobre todo con una gran atención hacia los detalles. 
        <br />
        Aficionado al arte, manualidades, psicología, la lectura y la escritura, entre otros.
        <br />
        Me encuentro totalmente interesado en todo lo relacionado con front - end, creciendo constantemente.
        </p>
        <NavLink to='/contact'>Creemos algo.</NavLink>
      </div>
    </div>
  )
};

export default About;
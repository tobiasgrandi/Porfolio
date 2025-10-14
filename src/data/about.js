import profileImg from '../assets/aboutIcons/profile.png';
import cv from '../assets/aboutIcons/cv.svg'
import email from '../assets/aboutIcons/email.svg'

const about = {
    name: "Tobías Grandi",
    img: profileImg,
    role: "Estudiante avanzado de Ingeniería en Sistemas de Información",
    description: `Soy estudiante avanzado de Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional, Facultad Regional Concepción del Uruguay. Desde que tengo memoria me apasiona la computación y, con el tiempo, fui orientando mi camino hacia el fascinante mundo de la inteligencia artificial, el aprendizaje automático y el análisis de datos.

En mi casa de estudios, formo parte del Grupo de Investigación en Inteligencia Computacional y Optimización de Sistemas <a href="https://frcu.utn.edu.ar/giicos" target="_blank" rel="noopener noreferrer">(GIICOS)</a>, donde participo en el desarrollo de modelos y experimentos aplicados a distintas problemáticas reales, dando soporte a la toma de decisiones. Además, me desempeño como ayudante de cátedra en la materia Lógica y Estructuras Discretas, lo que me permite compartir conocimientos y fortalecer mi comprensión teórica.

Me interesa especialmente el desarrollo de soluciones que integren IA, ciencia de datos y software de calidad, combinando el rigor técnico con la creatividad para resolver problemas complejos. Busco seguir creciendo como profesional en este campo, contribuyendo a proyectos que generen impacto a través de la tecnología y el análisis inteligente de la información.`,
    sources: [
        {source: '', link:"https://www.linkedin.com/in/tobias-grandi-301a76227/", img:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg", alt:'LinkedIn logo'},
        {source: '', link:"https://github.com/tobiasgrandi", img:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg', alt:'Github logo'},
        {source: '', link:"https://drive.google.com/file/d/1IcDT5waQS6q1frpRGIB47XJERVurnjun/view?usp=sharing", img:cv, alt:'CV logo'},
        {source: '', link:"mailto:granditobias@gmail.com", img:email, alt:'Email logo'}, 
    ]
}

export default about;
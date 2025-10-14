import blackjack from '../assets/proyectsIcons/blackjack.svg';
import maze from '../assets/proyectsIcons/maze.svg';
import snake from '../assets/proyectsIcons/snake.svg';
import code from '../assets/proyectsIcons/code.svg';
import youtube from '../assets/proyectsIcons/youtube.svg';



const githubIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg";

const projects = [
    {
        id: "project-1",
        title: "Agente inteligente jugador de BlackJack",
        icon: blackjack,
        description: `Este proyecto implementa un agente autónomo capaz de jugar al Blackjack utilizando aprendizaje por refuerzo. El objetivo principal es que el agente aprenda una política óptima para maximizar sus ganancias en el juego, tomando decisiones de “pedir” o “plantarse” en función de su mano y la carta visible del dealer.

La implementación se basa en Q-Learning, un algoritmo que permite al agente aprender valores de acción-estado y mejorar su estrategia a través de simulaciones iterativas del juego. Se utiliza una estrategia ε-greedy para equilibrar exploración y explotación durante el entrenamiento.

Se evaluó el rendimiento del agente mediante múltiples partidas simuladas, verificando cómo su política mejora progresivamente hasta converger hacia decisiones óptimas. Este proyecto demuestra la aplicación práctica de técnicas de aprendizaje automático en un entorno de juego clásico, destacando la capacidad del agente para aprender y adaptarse sin intervención humana.`,
        sources: [{source: '', link: "https://github.com/tobiasgrandi/Agente_BlackJack", img: githubIcon, alt:'Github logo'}]
    },
    {
        id: "project-2",
        title: "Agente inteligente para resolución de laberintos",
        icon: maze,
        description: `Este proyecto implementa un agente autónomo capaz de resolver laberintos utilizando aprendizaje por refuerzo. El agente aprende a encontrar la ruta óptima desde un punto de inicio hasta la meta, maximizando la recompensa acumulada en cada paso.

La implementación se basa en Q-Learning, donde el agente actualiza iterativamente su Q-Table para asociar cada estado del laberinto con la acción que optimiza la recompensa esperada. Para entrenarlo, se generan laberintos aleatorios mediante el algoritmo Depth-First Search (DFS), permitiendo al agente adaptarse a entornos variados y complejos.

Se incluye visualización 2D del laberinto, mostrando el camino recorrido y las decisiones del agente durante el entrenamiento, lo que permite evaluar su rendimiento y evolución. Este proyecto demuestra la aplicación de técnicas de inteligencia artificial para navegación y planificación autónoma en entornos estructurados.`,
        sources: [{source: '', link: "https://github.com/tobiasgrandi/Agente-Inteligente-Resolvedor-Laberinto", img: githubIcon, alt:'Github logo'}]
    },
    {
        id: "project-3",
        title: "Agente inteligente Snake Game",
        icon: snake,
        description: `Este proyecto implementa un agente autónomo capaz de jugar al clásico juego de la serpiente (Snake) utilizando aprendizaje por refuerzo basado en gradientes de política (REINFORCE). El agente aprende a maximizar la puntuación explorando el entorno y adaptando su estrategia de movimiento según el estado de la cuadrícula.

La implementación se basa en una red neuronal que aproxima la función de política, tomando como entrada el estado actual del juego y generando probabilidades para cada acción posible. Durante el entrenamiento, el agente ejecuta episodios completos, acumula recompensas y actualiza los parámetros de la red neuronal para mejorar progresivamente su rendimiento.

Se incluyeron mecanismos de visualización y evaluación, permitiendo observar la evolución de la puntuación y el comportamiento del agente a lo largo del entrenamiento. Este proyecto demuestra la aplicación práctica de técnicas de aprendizaje por refuerzo en entornos dinámicos y secuenciales, destacando la capacidad del agente para aprender estrategias complejas de manera autónoma.`,
        sources: [{source: '', link: "https://github.com/tobiasgrandi/Agente_Snake_Game", img: githubIcon, alt:'Github logo'}]
    },
    {
        id: "project-4",
        title: "Lenguaje de programación",
        icon: code,
        description: `Lenguaje de programación propio, creado como trabajo práctico final para la cátedra de Sintaxis y Semántica de los Lenguajes en la UTN FRCU. El proyecto se centra en la implementación de un compilador que procesa código fuente escrito en un lenguaje diseñado específicamente para este propósito.
        
        Este proyecto demuestra la aplicación práctica de conceptos fundamentales en la teoría de lenguajes de programación, como el análisis léxico y sintáctico, la construcción de árboles de sintaxis, y la evaluación semántica. Además, ofrece una visión integral del proceso de desarrollo de un compilador, desde la definición del lenguaje hasta la implementación de su entorno de ejecución.`,
        sources: [{source: '', link: "https://github.com/tobiasgrandi/Lenguaje-Programacion", img: githubIcon, alt:'Github logo'}]
    },
    {
        id: "project-5",
        title: "App web - Descarga de audio/video de Youtube",
        icon: youtube,
        description: `Este proyecto implementa una aplicación web para la descarga de videos y audios de YouTube, permitiendo procesar múltiples URLs de manera simultánea. La aplicación está diseñada para ofrecer un flujo de trabajo sencillo y eficiente para el usuario final.

La implementación se basa en Django en el backend, que gestiona las solicitudes y coordina los procesos de descarga, integrando herramientas como yt-dlp para la obtención de contenidos desde YouTube. La interfaz está desarrollada en HTML y CSS.

Se priorizó la robustez y escalabilidad, permitiendo que múltiples descargas se ejecuten sin conflictos y que la aplicación se pueda ejecutar localmente mediante un servidor Django estándar. Este proyecto demuestra la integración de tecnologías web con librerías externas para la automatización de tareas de descarga y procesamiento de contenido multimedia.`,
        sources: [{source: '', link: "https://github.com/tobiasgrandi/Youtube-Downloader", img: githubIcon, alt:'Github logo'}]
    },
]

export default projects;
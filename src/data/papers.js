import ieee from '../assets/proyectsIcons/ieee.svg';
import ieee_cis from '../assets/proyectsIcons/ieee_cis.png';
import researchgate from '../assets/proyectsIcons/researchgate.svg';
import ant from '../assets/proyectsIcons/ant.svg';

const papers = [
    {
        id: "paper-1",
        title: "Metrics for the Evaluation of Optimization Methods in Dynamic Problems: application to Vehicle Routing using Ant Systems",
        description: `Solving dynamic optimization problems is always a challenging task. For this purpose, heuristic and metaheuristic methods are the preferred ones, especially in the context of real-time decision making. In this sense, it is necessary to have evaluation mechanisms for such methods, in order to assist in the selection of one of them to be applied in a particular reality. In this paper we propose metrics for the evaluation of methods that solve real-time dynamic problems that do not require complete knowledge of the search space. These metrics can be used to compare methods quantitatively in various ways. Besides, the application of the proposal on variants of Ant Systems in a classical combinatorial optimization problem such as the Vehicule Routing Problem (VRP) is studied.`,
        icon: ant,
        sources: [ 
            {source: '', link: 'https://ieeexplore.ieee.org/document/10735838', img: ieee, alt:'IEEE Xplore logo'},
            {source: '', link: 'https://www.researchgate.net/publication/385539459_Metrics_for_the_Evaluation_of_Optimization_Methods_in_Dynamic_Problems_Application_to_Vehicle_Routing_Using_Ant_Systems', img: researchgate, alt:'ResearchGate logo'},
        ]
    },
    {
        id: "paper-2",
        title: "Agente basado en Colonia de Hormigas aplicado al problema de Enrutamiento de Vehículos en Tiempo Real",
        description: `La resolución de problemas de optimización es un área desafiante, aún más cuando estos son del tipo dinámico. En el contexto de toma de decisiones en tiempo real, los métodos metaheurísticos son ampliamente utilizados por su capacidad de brindar soluciones aceptables en tiempos cortos de respuesta. En este trabajo se propone la resolución de una variante de VRP con incertidumbre en sus componentes y actualizado en tiempo real mediante un agente inteligente basado en utilidades que utiliza ACO para la toma de decisiones.
        
        Este trabajo fue presentado en el marco del IEEE TRIC (Torneo Regional de Inteligencia Computacional), logrando obtener el segundo puesto dentro de la categoría Sistemas Inteligentes. `,
        icon: ant,
        sources: [
            {source: '', link: 'https://r9.ieee.org/argentina-cis/2025/01/30/ieee-tric-xi-reloaded/', img: ieee_cis, alt: 'Ieee CIS logo'}
        ]
    },
]

export default papers;
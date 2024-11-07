const programTable = document.querySelector('#body-table');
const programTable2 = document.querySelector('#body-table2');

const colors = ['col1', 'col2','col3','col4','col5','col6','col7','col8', 'col9', 'col10', 'col11']


document.addEventListener('DOMContentLoaded', ()=>{
    participantes.forEach(participante =>{
        addParticipant(programTable, participante);
    })
    
    participantes2.forEach(participante =>{
        addParticipant(programTable2, participante);
    })
    addFinalRow(programTable2, '19:10');
})

function addFinalRow(table,hora){
    const finalRow = document.createElement('tr');
    finalRow.innerHTML = 
    `
    <td>${hora}</td>
    <td> - </td>
    <td> - </td>
    <td>Closing remarks and awards</td>
    `;
    table.appendChild(finalRow);
}
function addParticipant(table, participante){
    const {NOMBRE, TITULO, SLOT, NOMBRE_SLOT, HORA, NUMERO} = participante;
    hora_short = HORA.substr(0, 5)
    const row = document.createElement('tr');
    row.classList.add(colors[parseInt(SLOT)-1]);
    if(NOMBRE!==" "){
        row.innerHTML = 
        `
        <td>${hora_short}</td>
        <td> ${SLOT} </td>
        <td> ${NUMERO} </td>
        <td> <strong>${NOMBRE}.</strong> <i>${TITULO}.</i></td>
        `;
    } else{
        row.innerHTML = 
        `
        <td>${hora_short}</td>
        <td> ${SLOT} </td>
        <td> ${NUMERO} </td>
        <td> ${TITULO}.</td>
        `;
    }
    table.appendChild(row);
}

const participantes =  [
        {
         "NOMBRE": "Miguel Aguilar Janita",
         "TITULO": "Predicting small field chaos in spin glasses from the ultrametric tree and comparison with numerical simulations",
         "SLOT": 1,
         "NOMBRE_SLOT": " ",
         "HORA": "15:30:00",
         "NUMERO": 1
        },
        {
         "NOMBRE": "Manuel Mayo León",
         "TITULO": "Bacterial chemotaxis considering memory effects",
         "SLOT": 1,
         "NOMBRE_SLOT": " ",
         "HORA": "15:40:00",
         "NUMERO": 2
        },
        {
         "NOMBRE": "Miguel Jesús Torrejón Ríos",
         "TITULO": "Determinación de la línea de disociación y del driving force para la nucleación del hidrato de nitrógeno mediante simulación molecular. Estudio del efecto de la ocupación múltiple",
         "SLOT": 1,
         "NOMBRE_SLOT": "Biophysics",
         "HORA": "15:50:00",
         "NUMERO": 3
        },
        {
            "NOMBRE": " ",
            "TITULO": "Preguntas slot 1",
            "SLOT": "-",
            "NOMBRE_SLOT": "-",
            "HORA": "16:00:00",
            "NUMERO": "-"
           },
        {
        "NOMBRE": "David González Calatayud",
        "TITULO": "Smart Magnetic Microrobots Learn to Roll with Reinforcement Learning",
        "SLOT": 2,
        "NOMBRE_SLOT": " ",
        "HORA": "16:10:00",
        "NUMERO": 4
        },
        {
        "NOMBRE": "Sara Oliver",
        "TITULO": "Numerical methods for quasi-stationary distributions",
        "SLOT": 2,
        "NOMBRE_SLOT": " ",
        "HORA": "16:20:00",
        "NUMERO": 5
        },
        {
        "NOMBRE": "Fernando Carreño Navas",
        "TITULO": "Stability of solitons in the nonlinear Schrödinger equation with dissipation and parametric force",
        "SLOT": 2,
        "NOMBRE_SLOT": " ",
        "HORA": "16:30:00",
        "NUMERO": 6
        },
            {
            "NOMBRE": " ",
            "TITULO": "Preguntas slot 2",
            "SLOT": "-",
            "NOMBRE_SLOT": "-",
            "HORA": "16:40:00",
            "NUMERO": "-"
           },
        {
         "NOMBRE": "Pau Esteve Ferrer",
         "TITULO": "Exploring Delay Propagation in Air Transport using Temporal Networks",
         "SLOT": 3,
         "NOMBRE_SLOT": " ",
         "HORA": "16:50:00",
         "NUMERO": 7
        },
        {
         "NOMBRE": "Mariona Fucho Rius",
         "TITULO": "Studying synergistic effects in critical slowing down for mushroom bifurcations",
         "SLOT": 3,
         "NOMBRE_SLOT": " ",
         "HORA": "17:00:00",
         "NUMERO": 8
        },
        {
         "NOMBRE": "Jesús María Marcos Merino",
         "TITULO": "Study of oil extraction from an emulsion under the action of a surface acoustic wave (SAW) by means of an MC simulation.",
         "SLOT": 3,
         "NOMBRE_SLOT": " ",
         "HORA": "17:10",
         "NUMERO": 9
        },
        {
            "NOMBRE": " ",
            "TITULO": "Preguntas slot 3",
            "SLOT": "-",
            "NOMBRE_SLOT": "-",
            "HORA": "17:20:00",
            "NUMERO": "-"
         },
        {
            "NOMBRE": " ",
            "TITULO": "Descanso",
            "SLOT": "-",
            "NOMBRE_SLOT": "-",
            "HORA": "17:30:00",
            "NUMERO": "-"
           },
        {
         "NOMBRE": "Jaume Llabrés Rubio",
         "TITULO": "Universality of noise-induced transitions in nonlinear voter models",
         "SLOT": 4,
         "NOMBRE_SLOT": " ",
         "HORA": "17:50:00",
         "NUMERO": 10
        },
        {
         "NOMBRE": "Francesca Dilisante",
         "TITULO": "Epidemics in metapopulations with contagions during reaction and diffusion phases.",
         "SLOT": 4,
         "NOMBRE_SLOT": " ",
         "HORA": "18:00",
         "NUMERO": 11
        },
        {
         "NOMBRE": "Pablo Gallarta Sáenz",
         "TITULO": "A quantum-like approach to unveil the limits of compartmental epidemiological models.",
         "SLOT": 4,
         "NOMBRE_SLOT": " ",
         "HORA": "18:10:00",
         "NUMERO": 12
        },
        {
            "NOMBRE": " ",
            "TITULO": "Preguntas slot 4",
            "SLOT": "-",
            "NOMBRE_SLOT": "-",
            "HORA": "18:20:00",
            "NUMERO": "-"
           },
        {
        "NOMBRE": "Gianluca Manzan",
        "TITULO": "Efficiency limits in Restricted Boltzmann Machines",
        "SLOT": 5,
        "NOMBRE_SLOT": "socio-physics",
        "HORA": "18:30:00",
        "NUMERO": 13
        },
        {
        "NOMBRE": "David Ortiz del Campo",
        "TITULO": "Anticipated synchronization in systems with distributed delay",
        "SLOT": 5,
        "NOMBRE_SLOT": "socio-physics",
        "HORA": "18:40:00",
        "NUMERO": 14
        },
        {
        "NOMBRE": "Roger Bellido Peralta",
        "TITULO": "Hydration/solvation study of a Polyethylenimine chain confined inside a graphitic pore.",
        "SLOT": 5,
        "NOMBRE_SLOT": "socio-physics",
        "HORA": "18:50:00",
        "NUMERO": 15
        },
        
        
        
        {
            "NOMBRE": " ",
            "TITULO": "Preguntas slot 5",
            "SLOT": "-",
            "NOMBRE_SLOT": "-",
            "HORA": "19:00:00",
            "NUMERO": "-"
           },
        
       ]



const participantes2 = [
    {
        "NOMBRE": "Rubén Rodríguez Casañ",
        "TITULO": "Emerging collaboration patterns within the ATLAS experiment at CERN",
        "SLOT": 6,
        "NOMBRE_SLOT": " ",
        "HORA": "15:30:00",
        "NUMERO": 16
       },
       {
        "NOMBRE": "Juan de Gregorio",
        "TITULO": "Language relations through syntactic distances: An information-theoretic approach",
        "SLOT": 6,
        "NOMBRE_SLOT": " ",
        "HORA": "15:40:00",
        "NUMERO": 17
       },
       {
        "NOMBRE": "Caterina Landi",
        "TITULO": "Self-Assembly of Active Bifunctional Patchy Particles",
        "SLOT": 6,
        "NOMBRE_SLOT": " ",
        "HORA": "15:50:00",
        "NUMERO": 18
       },
       {
           "NOMBRE": " ",
           "TITULO": "Preguntas slot 6",
           "SLOT": "-",
           "NOMBRE_SLOT": "-",
           "HORA": "16:00:00",
           "NUMERO": "-"
          },
        {
        "NOMBRE": "Carles Martorell",
        "TITULO": "Chaos and criticality in non-reciprocal networks",
        "SLOT": 7,
        "NOMBRE_SLOT": " ",
        "HORA": "16:10:00",
        "NUMERO":19
        },
        {
        "NOMBRE": "Carlos Sebastián Monago",
        "TITULO": "Parameter Estimation for Coarse-Grained Models via Self-Averaging",
        "SLOT": 7,
        "NOMBRE_SLOT": " ",
        "HORA": "16:20:00",
        "NUMERO": 20
        },
        {
        "NOMBRE": "Mar Cuevas Blanco",
        "TITULO": "On the structure of species-function participation in multilayer ecological networks",
        "SLOT": 7,
        "NOMBRE_SLOT": " ",
        "HORA": "16:30:00",
        "NUMERO": 21
        },
            {
           "NOMBRE": " ",
           "TITULO": "Preguntas slot 7",
           "SLOT": "-",
           "NOMBRE_SLOT": "-",
           "HORA": "16:40:00",
           "NUMERO": "-"
          },
       {
        "NOMBRE": "Manuel Miranda Barrado",
        "TITULO": "Indirect social influence and diffusion of innovations: An experimental approach",
        "SLOT": 8,
        "NOMBRE_SLOT": " ",
        "HORA": "16:50:00",
        "NUMERO": 22
       },
       {
        "NOMBRE": "Sara Ghivarello",
        "TITULO": "Coevolution of individual perception and cooperative behavior in the Norm Compliance Dilemma",
        "SLOT": 8,
        "NOMBRE_SLOT": " ",
        "HORA": "17:00:00",
        "NUMERO": 23
       },
       {
        "NOMBRE": "Javier Molina Hernández",
        "TITULO": "An Evolutionary Model to Unravel Antibiotic Sequential Therapies",
        "SLOT": 8,
        "NOMBRE_SLOT": " ",
        "HORA": "17:10:00",
        "NUMERO": 24
       },
       {
           "NOMBRE": " ",
           "TITULO": "Preguntas slot 8",
           "SLOT": "-",
           "NOMBRE_SLOT": "-",
           "HORA": "17:20:00",
           "NUMERO": "-"
          },
          {
           "NOMBRE": " ",
           "TITULO": "Descanso",
           "SLOT": "-",
           "NOMBRE_SLOT": "-",
           "HORA": "17:30:00",
           "NUMERO": "-"
          },
       {
        "NOMBRE": "Alejandro Almodóvar del Pozo",
        "TITULO": "Interacting particle systems with mobility and demographic dynamics as biological models",
        "SLOT": 9,
        "NOMBRE_SLOT": " ",
        "HORA": "17:50:00",
        "NUMERO": 25
       },
       {
        "NOMBRE": "Samuel Martínez Alcalá",
        "TITULO": "Non-equilibrium dynamics of viral quasispecies under Darwinian evolution",
        "SLOT": 9,
        "NOMBRE_SLOT": " ",
        "HORA": "18:00:00",
        "NUMERO": 26
       },
       {
        "NOMBRE": "Àlex Giménez Romero",
        "TITULO": "Population structure plays a key role in ecosystem stability",
        "SLOT": 9,
        "NOMBRE_SLOT": " ",
        "HORA": "18:10:00",
        "NUMERO": 27
       },
       {
           "NOMBRE": " ",
           "TITULO": "Preguntas slot 9",
           "SLOT": "-",
           "NOMBRE_SLOT": "-",
           "HORA": "18:20:00",
           "NUMERO": "-"
          },
        
          {
            "NOMBRE": "Marina Fernández Ruz",
            "TITULO": "Autocatalytic chemical networks in the origin of life",
            "SLOT": 10,
            "NOMBRE_SLOT": "Miscelánea",
            "HORA": "18:30:00",
            "NUMERO": 28
           },
           {
            "NOMBRE": "Gorka Buenvarón Campo",
            "TITULO": "Game theory to implement conservation strategies on marine life",
            "SLOT": 10,
            "NOMBRE_SLOT": "Information theory",
            "HORA": "18:40",
            "NUMERO": 29
           },
           {
            "NOMBRE": "Alberto Martinez Serra",
            "TITULO": "Characterizing the Hard and Soft Nanoparticle-Protein Corona with Multilayer Adsorption",
            "SLOT": 10,
            "NOMBRE_SLOT": "Information theory",
            "HORA": "18:50",
            "NUMERO": 30
           },
       
       {
           "NOMBRE": " ",
           "TITULO": "Preguntas slot 10",
           "SLOT": "-",
           "NOMBRE_SLOT": "-",
           "HORA": "19:00:00",
           "NUMERO": "-"
          },
]
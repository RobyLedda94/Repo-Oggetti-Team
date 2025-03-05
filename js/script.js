// Definizione delle funzioni


// Funzione che mostra in console l'array del mio team

function showinConsole() {
    for (let i = 0; i < array_team.length; i++) {
        console.log(`${array_team[i].name} ${array_team[i].role} ${array_team[i].img}`);
    }
};


// Funzione per creare le colonne del mio layout
function creaColonna() {
    // Creazione di un elemento ('div')
    const col = document.createElement('div');
    // Assegno all'elemento creato le classi di bootstrap per definire le colonne
    col.classList.add('col-12', 'col-sm-6', 'col-md-4');
    // Restituisco la colonna appena creata
    return col;
};

// Funzione per la creazione della card
function creaCarta(member) { // parametro delle funzione a cui passo un valore reale (argomento)
    return `<div class="card p-2 my-2">
                <div class="card-img-top">
                    <img>
                </div>
                <div class="card-body">
                    <h4>nome</h4>
                    <p><strong>Ruolo :</strong> </p>
                </div>
            </div>`;
}



// Defnizione array di oggetti per il team

const array_team = [
    {
        name: "Wayne Barnett",
        role: "Founder & Ceo",
        img: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Carrol",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg",
    },
];

// Richiamo la funzione che mostra in console l'array team
showinConsole();



// Recupero gli elementi di ancoraggio dal DOM

// Bottoni
let mostra_btn = document.getElementById('mostra-membri');
let aggiungi_btn = document.getElementById('aggiungi-membri');

// Contitore
let team_container = document.getElementById('team-container');



// Evento al bottone che mostra gli elementi del team
mostra_btn.addEventListener('click', function () {
    // Ciclo for per iterare su tutti gli elementi dell'array
    for (let i = 0; i < array_team.length; i++) {
        // Richiamo all'interno del ciclo la funzione che crea una colonna
        let cols = creaColonna();

        // Inietto alle colonne il contenuto (card) richiamando la funzione e passando il valore reale (argomento)
        cols.innerHTML = creaCarta(array_team[i]);

        // Appendo il contenuto creato al contenitore
        team_container.appendChild(cols);
    };
});


// Evento al bottone che aggiunge un nuovo elemento al team
aggiungi_btn.addEventListener('click', function () {
    console.log(this);
});






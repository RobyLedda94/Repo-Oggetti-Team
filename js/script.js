// Definizione delle funzioni

function showinConsole() {
    for (let i = 0; i < array_team.length; i++) {
        console.log(`${array_team[i].name} ${array_team[i].role} ${array_team[i].img}`);
    }
};



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



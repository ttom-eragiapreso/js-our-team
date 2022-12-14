// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// Wayne Barnett	Founder & CEO			wayne-barnett-founder-ceo.jpg
// Angela Caroll	        Chief Editor			        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager			walter-gordon-office-manager.jpg
// Angela Lopez	        Social Media Manager	        angela-lopez-social-media-manager.jpg
// Scott Estrada	        Developer				scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer		        barbara-ramos-graphic-designer.jpg
// **MILESTONE 0:**
// Creare l’array di oggetti con le informazioni fornite.
// **MILESTONE 1:**
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// **MILESTONE 2:**
// Stampare le stesse informazioni su DOM sotto forma di stringhe
// **MILESTONE 3:**
// Stampare delle card formattate contenete immagini e testo (La grafica fornita è solo un esempio ma sentitevi liberi di “graficare” come preferite)
// **BONUS:**
// Aggiungere degli aggettivi (più di uno) che identifichino ogni persona e stamparli nella card

console.log("caricata")

const team = [{
  name: "Wayne Barnett",
  title: "Founder & CEO",
  photo: "wayne-barnett-founder-ceo.jpg",
  adjectives: "Fun, team-player, loves coffee"
},{
  name: "Angela Caroll",
  title: "Chief Editor",
  photo: "angela-caroll-chief-editor.jpg",
  adjectives: "Don't talk to me before 10AM"
},{
  name: "Walter Gordon",
  title: "Office Manager",
  photo: "walter-gordon-office-manager.jpg",
  adjectives: "Love dogs, hates cats, eats whatever"
}, {
  name: "Angela Lopez",
  title: "Social Media Manager",
  photo: "angela-lopez-social-media-manager.jpg",
  adjectives: "Music player, karaoke legend"
}, {
  name: "Scott Estrada",
  title: "Developer",
  photo: "scott-estrada-developer.jpg",
  adjectives: "I hate company photoshoots"
}, {
  name: "Barbara Ramos",
  title: "Graphic Designer",
  photo: "barbara-ramos-graphic-designer.jpg",
  adjectives: "Me too.."
}
  ];

const row = document.getElementById("container-photo")
for(let member of team){

    let output = "";
    output += `<div class="col p-3">
              <div class="card em-card">
              <div class="overflow-hidden">
              <img src="our-team/img/${member.photo}" class="card-img-top overflow-hidden" alt="...">
              </div>
              <div class="card-body">
              <p class="card-text text-center fs-4">${member.name}</p>
              <p class="card-text text-center text-secondary">${member.title}</p>
              <p class="card-text text-secondary">${member.adjectives}</p>
              </div>
              </div>
              </div>`;

    row.innerHTML += output;

}

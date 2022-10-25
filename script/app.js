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
  photo: "wayne-barnett-founder-ceo.jpg"
},{
  name: "Angela Caroll",
  title: "Chief Editor",
  photo: "angela-caroll-chief-editor.jpg"
},{
  name: "Walter Gordon",
  title: "Office Manager",
  photo: "walter-gordon-office-manager.jpg"
}, {
  name: "Angela Lopez",
  title: "Social Media Manager",
  photo: "angela-lopez-social-media-manager.jpg"
}, {
  name: "Scott Estrada",
  title: "Developer",
  photo: "scott-estrada-developer.jpg"
}, {
  name: "Barbara Ramos",
  title: "Graphic Designer",
  photo: "barbara-ramos-graphic-designer.jpg"
}
  ];


for(let member of team){
  for(let key in member){
    console.log(`${key} --- ${member[key]}`)
  }
}
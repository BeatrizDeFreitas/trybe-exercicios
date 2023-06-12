//console.log(document.getElementById("page-title"));


//console.log(document.getElementById("page-title").innerHTML);


//console.log(document.getElementById("second-paragraph").innerHTML);


//console.log(document.getElementById("second-paragraph").innerText);


//console.log(document.getElementById("second-paragraph").style);


//document.getElementById("second-paragraph").innerText = "Aprendizados da aula de hoje";



//console.log(document.getElementsByClassName("paragraph-style"));


// document.getElementsByClassName("paragraph-style")[0].innerText = 'Spirit';

//let paragraphstyle = document.getElementsByClassName("paragraph-style")
//for (let index = 0; index < paragraphstyle.length; index += 1) {
//    paragraphstyle[index].innerText = 'ola';}


//console.log(document.getElementsByTagName("p"));


//document.getElementsByTagName("p")[1].innerText = "hello";


document.getElementById("page-title").innerText = "Spirit";

document.getElementById("first-paragraph").innerText = "A wild stallion is captured by humans and slowly loses the will to resist training, yet, throughout his struggles for freedom, the stallion refuses to let go of the hope of one day returning home to his herd.";

document.getElementById("subtitle").innerText = "Principais informações";

const paragraphs = document.getElementsByClassName('paragraph-style');
const firstParagraph = paragraphs[0];
firstParagraph.style.fontStyle = 'italic';

document.getElementById("second-paragraph").innerText = "Directors: Kelly Asbury, Lorna Cook; Writers: John Fusco, Michael Lucker";

  const subtitle = document.getElementsByTagName('h2');
  subtitle[0].style.color = 'grey';
document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.getElementById("Home");

    homeLink.addEventListener("mouseover", function() {
        homeLink.querySelector("a").style.color = "#52BE80";  // Change the font color to green on mouseover
    });

    homeLink.addEventListener("mouseout", function() {
        homeLink.querySelector("a").style.color = "black";  // Change the font color back to black on mouseout
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const habilidadesLink = document.getElementById("Habilidades");

    habilidadesLink.addEventListener("mouseover", function() {
        habilidadesLink.querySelector("a").style.color = "#52BE80";  // Change the font color to green on mouseover
    });

    habilidadesLink.addEventListener("mouseout", function() {
        habilidadesLink.querySelector("a").style.color = "black";  // Change the font color back to black on mouseout
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const projetosLink = document.getElementById("Projetos");

    projetosLink.addEventListener("mouseover", function() {
        projetosLink.querySelector("a").style.color = "#52BE80";  // Change the font color to green on mouseover
    });

    projetosLink.addEventListener("mouseout", function() {
        projetosLink.querySelector("a").style.color = "black";  // Change the font color back to black on mouseout
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const contatoLink = document.getElementById("Contato");

    contatoLink.addEventListener("mouseover", function() {
        contatoLink.querySelector("a").style.color = "#52BE80";  // Change the font color to green on mouseover
    });

    contatoLink.addEventListener("mouseout", function() {
        contatoLink.querySelector("a").style.color = "black";  // Change the font color back to black on mouseout
    });
});

const headerToggle = document.getElementById('header-toggle');
const header = document.getElementById('header');

headerToggle.addEventListener('click', () => {
  header.style.display = header.style.display === 'none' ? 'block' : 'none';
});
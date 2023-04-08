
const aboutText = document.getElementById('aboutText');
const aboutSkills = document.getElementById('aboutSkills');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const footerContent = document.getElementById('footerContent');


const cargarSeccion = (entradas, observador) =>{
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        }
    });

};

const observador = new IntersectionObserver(cargarSeccion, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5,
});

observador.observe(aboutText);
observador.observe(aboutSkills);
observador.observe(card1);
observador.observe(card2);
observador.observe(card3);
observador.observe(footerContent);



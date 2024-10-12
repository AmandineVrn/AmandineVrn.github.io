
function afficheMenu(obj){
    var idMenu     = obj.id;
    var idSousMenu = 'sous' + idMenu;
    var sousMenu   = document.getElementById(idSousMenu);

    // get all sous-menus elements
    var sousMenus = document.querySelectorAll(".sous_menu");
    // loop through all sous-menus and hide them
    for (let i = 0; i < sousMenus.length; i++) {
        if(sousMenus[i] != sousMenu){
            sousMenus[i].style.display = "none";
        }
    }

    if(sousMenu){
        if(sousMenu.style.display == "flex"){
            sousMenu.style.display = "none";
        }
        else{
            sousMenu.style.display = "flex";
        }
    }
}

function showAlert(){
    alert("Le formulaire n'est pas fonctionel pour l'instant, pour me contacter envoyez moi un mail.");
}

fetch('data/projects.json')
    .then(response => response.json())
    .then(data => {
        const projects = Object.values(data.projects);
        const stackIcons = {
            "HTML": '<i class="fa-brands fa-html5"></i>',
            "CSS": '<i class="fa-brands fa-css3-alt"></i>',
            "JavaScript": '<i class="fa-brands fa-js"></i>',
            "PHP": '<i class="fa-brands fa-php"></i>',
            "MySQL": '<i class="fa-solid fa-database"></i>',
            "Vuejs": '<i class="fa-brands fa-vuejs"></i>',
            "sass": '<i class="fa-brands fa-sass"></i>',
            "Figma": '<i class="fa-brands fa-figma"></i>'
        };
        const sortedProjects = projects.sort((a, b) => b.id - a.id);
        const cardContainer = document.querySelector('.projects__content__cards');
        const showAllButton = document.getElementById('show-all');

        let showAll = false; // Variable pour suivre l'état actuel

        function displayProjects(projectsToShow) {
            cardContainer.innerHTML = '';
            projectsToShow.forEach(project => {
                const icons = project.stack.map(tech => stackIcons[tech] || tech).join(' ');
                let card = `
                    <a href="${project.link}" target="_blank">
                        <div class="card">
                            <div class="card__img card__img__${project.image}">
                                <!-- en css -->
                            </div>
                            <div class="card__content">
                                <p>${project.title}</p>
                                <div class="row">
                                    <p>${project.year}</p>
                                    <p class="icons-stack">${icons}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                `;
                cardContainer.innerHTML += card;
            });
        }

        // Fonction pour alterner entre l'affichage de tous les projets et les 3 derniers
        function toggleProjects() {
            if (showAll) {
                // Si on montre tous les projets, on affiche les 3 derniers
                displayProjects(sortedProjects.slice(0, 3));
                showAll = false;
                // showAllButton.textContent = 'Afficher tous les projets'; // Mise à jour du texte du bouton
            } else {
                // Sinon, on affiche tous les projets
                displayProjects(sortedProjects);
                showAll = true;
                showAllButton.textContent = 'Less'; // Mise à jour du texte du bouton
            }
        }

        // Initialisation : on affiche les 3 derniers projets
        displayProjects(sortedProjects.slice(0, 3));

        // Ajout de l'événement de clic pour alterner
        showAllButton.addEventListener('click', toggleProjects);

        // Filtrage des projets en fonction des stacks
        document.getElementById('filter-html').addEventListener('click', () => {
            const filteredProjects = sortedProjects.filter(project => project.stack.includes('HTML'));
            displayProjects(filteredProjects);
            showAllButton.textContent = 'All'; // Mise à jour du texte du bouton
            showAll = false; // Remettre à l'état initial après filtre
        });

        document.getElementById('filter-php').addEventListener('click', () => {
            const filteredProjects = sortedProjects.filter(project => project.stack.includes('PHP'));
            displayProjects(filteredProjects);
            showAllButton.textContent = 'All';
            showAll = false;
        });

        document.getElementById('filter-sass').addEventListener('click', () => {
            const filteredProjects = sortedProjects.filter(project => project.stack.includes('sass'));
            displayProjects(filteredProjects);
            showAllButton.textContent = 'All';
            showAll = false;
        });

        document.getElementById('filter-vuejs').addEventListener('click', () => {
            const filteredProjects = sortedProjects.filter(project => project.stack.includes('Vuejs'));
            displayProjects(filteredProjects);
            showAllButton.textContent = 'All';
            showAll = false;
        });

        document.getElementById('filter-figma').addEventListener('click', () => {
            const filteredProjects = sortedProjects.filter(project => project.stack.includes('Figma'));
            displayProjects(filteredProjects);
            showAllButton.textContent = 'All';
            showAll = false;
        });
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));


/* Animation */

// Sélectionner les éléments à animer
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1, // 10% de l'élément doit être visible pour déclencher l'animation
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target); // Désactive l'observation une fois l'animation jouée
  });
}, appearOptions);

// Appliquer l'observation sur tous les éléments .fade-in
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


/* Fin Animation */


document.getElementById('contactButton').addEventListener('click', function() {
    const contactSection = document.getElementById('contact'); // Assurez-vous que cette section existe
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });
  
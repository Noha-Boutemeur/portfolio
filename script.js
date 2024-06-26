// script.js

document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const navBar = document.querySelector("body > div.nav-bar");
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - navBar.clientHeight,
            behavior: 'smooth'
        });

        // Met à jour l'indicateur de la section active
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let mostVisibleSection = sections[0];
    let maxVisibleHeight = 0;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

        if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            mostVisibleSection = section;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === mostVisibleSection.getAttribute('id')) {
            link.classList.add('active');
        }
    });
});


document.querySelectorAll('.en-savoir-plus i').forEach(icon => {
    icon.addEventListener('click', function() {
        const projectTitle = this.closest('.project-info').querySelector('h3').innerText;

        if (projectTitle === "Robot Rumble") {
            Swal.fire({
                html: '<p>' +
                    'Ce jeu est un jeu multijoueur, un peu comme Smash Bros, mais dans l\'espace. ' +
                    'Vous évoluez dans un système solaire généré aléatoirement et composé de planètes miniatures (comparées à la taille de votre robot). ' +
                    'La gravité y est réaliste, vous êtes attiré par les planètes les plus proches et les plus massives. Vous disposez de 3 armes : <br> <br></p>' +
                    '<ul>' +
                        '<li>Le minigun, qui tire une rafale de balles </li>' +
                        '<li>Le fusil à pompe, qui tire beaucoup de balles en une seule fois </li>' +
                        '<li>Le pistolet à trou noir, qui tire un trou noir ayant son propre champ gravitationnel très puissant. </li>' +
                    '</ul> <br>' +
                    '<p>Votre but est d\'éjecter les autres joueurs dans le vide en leur infligeant des chocs avec vos balles ou en les propulsant dans l\'espace avec un trou noir. Lorsque vous êtes touché, votre pourcentage augmente. Le nombre de coups que vous recevez est multiplié par ce pourcentage.' +
                    '</p>',
                customClass: {
                    popup: 'swal-large'
                }
            });
        } else if (projectTitle === "Eticeo"){
            Swal.fire({
                html: `
                    <div>
                        <h3>Tableau de bord</h3>
                        <img src="./images/projets/dashboard.png" alt="Dashboard Image" style="width: 100%;">
                        <p>Dans le cadre de mon alternance chez Eticeo, j'ai développé un dashboard permettant de centraliser toutes les informations des différentes plateformes Moodle des clients de l'entreprise.
                        Ce tableau de bord réalisé en Symfony, récupère les informations des plateformes, les traites et les affiche. Il existe différente page permettant d'accéder aux diverses informations.
                        Comme une page pour lister tout plugins moodle et de voir chez quel client il est installé, une page affichant les repos github et les versions des plugins disponible dessus, ect.
                        </p>
                    </div>
                    <div>
                        <h3>Boosticeo</h3>
                        <img src="./images/projets/boosticeo.png" alt="Boosticeo Image" style="width: 100%;">
                        <p>En fonction des nouveaux besoins de nos clients, nous devons améliorer nos plugins. L’une des améliorations auxquelles 
                        j’ai participé était sur un plugin qui impacte le thème du site. Ce plugin nommé Boosticeo est un plugin utilisé sur plusieurs pages et sert à 
                        intégrer des éléments de style personnalisé pour certaines pages. En ce qui concerne l’amélioration de Boosticeo, elle consiste à remplacer la fonctionnalité du plugin qui 
                        permettait d’avoir deux tableaux de bord mais cette fois-ci, en avoir jusqu’à 5 et donc afficher jusqu'à 5 pages différente.
                        </p>
                    </div>
                `,
                customClass: {
                    popup: 'swal-large'
                }
            });
        } else if (projectTitle === "GazePlay") {
            Swal.fire({
                html: `
                    <div>
                        <h3>Sprint to the finish</h3>
                        <img src="./images/projets/sprintToTheFinish.png" alt="Sprint To The Finish Image" style="width: 100%;">
                        <p>Jeu coopératif en simultané pour deux joueurs. Le joueur 1 doit se déplacer et atteindre la ligne d’arrivée, 
                        Tandis que le joueur 2 doit surveiller les ennemis qui se déplacent en les regardants ou en utilisant la souris ce qui permettra de les immobiliser et d'utiliser des interrupteurs pour aider le joueur 1.</p>
                    </div>
                    <div>
                        <h3>Simon</h3>
                        <img src="./images/projets/simon.png" alt="Simon Image" style="width: 100%;">
                        <p>Jouez au célèbre jeu de société Simon !
                            3 modes de jeux sont disponibles :

                            <ul>
                                <li> Classique : répétez les notes que la borne produit </li>
                                <li> Simon te copie : La borne reproduit cette fois-ci tes notes. Attention à effectuer la bonne séquence ! </li>
                                <li> Multijoueur : Deux joueurs jouent chacun leur tour et doivent imiter la borne ! </li>
                            </ul>
                            
                            
                        </p>
                    </div>
                    <div>
                        <h3>Survive Against Robots</h3>
                        <img src="./images/projets/surviveAgainstRobots.png" alt="Survive Against Robots Image" style="width: 100%;">
                        <p>Survivez contre des vagues de robots en vous déplaçant et en tirant en utilisant les flèches directionnelles. N’hésitez pas à ramasser des bonus pour vous aider à survivre !</p>
                    </div>
                    <div>
                        <h3>GazeRace</h3>
                        <img src="./images/projets/gazeRace.png" alt="GazeRace Image" style="width: 100%;">
                        <p>Jeu de voiture où le but est d'esquiver les autres véhicules ou obstacles.</p>
                    </div>
                `,
                customClass: {
                    popup: 'swal-large'
                }
            });
        }
    });
});

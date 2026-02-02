console.log("Site chargé correctement");

function toggleMenu(id) {
    const menu = document.getElementById(id);
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        // Ferme tous les autres menus
        document.querySelectorAll('.enterprise-menu').forEach(m => {
            if (m.id !== id) m.style.display = 'none';
        });
        menu.style.display = 'block';
    }
}

function toggleProject(id) {
    const project = document.getElementById(id);
    if (project.style.display === 'block') {
        project.style.display = 'none';
    } else {
        // Ferme tous les autres projets
        document.querySelectorAll('.project-menu').forEach(p => {
            if (p.id !== id) p.style.display = 'none';
        });
        project.style.display = 'block';
    }
}

function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');

    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabName).style.display = 'block';
}

// Copier le contenu d'une commande
function copyCommand(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Commande copiée dans le presse-papier !');
    }).catch(err => console.error('Erreur de copie :', err));
}

const form = document.getElementById("form-contact");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Merci ${name} !\nVotre message a été envoyé avec succès.\nNous vous contacterons bientôt à ${email}.`);
    
    form.reset();
});
/* FILTRAR IMAGENS SERVIÇOS */ 
    document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const carrosselItems = document.querySelectorAll('.carrossel-item');
    const carrosselServico = document.querySelector('.carrossel-servico');
    const leftButton = document.querySelector('.carrossel-control.left');
    const rightButton = document.querySelector('.carrossel-control.right');

    let currentIndex = 0;
    let activeFilter = 'all';

    function updatecarrossel() {
        // Hiding all items first
        carrosselItems.forEach(item => item.style.display = 'none');

        // Showing only filtered items
        const items = Array.from(carrosselItems).filter(item => {
            return activeFilter === 'all' || item.dataset.category === activeFilter;
        });

        if (items.length === 0) return;

        // Show the current item
        items[currentIndex].style.display = 'flex';

        const itemWidth = items[0].getBoundingClientRect().width;
        carrosselServico.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
    }

    function setActiveFilter(filter) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.filter-btn[data-filter="${filter}"]`).classList.add('active');
        activeFilter = filter;
        currentIndex = 0;
        updatecarrossel();
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            setActiveFilter(filter);
        });
    });

    leftButton.addEventListener('click', () => {
        const visibleItems = Array.from(carrosselItems).filter(item => {
            return activeFilter === 'all' || item.dataset.category === activeFilter;
        });
        if (visibleItems.length === 0) return;

        currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
        updatecarrossel();
    });

    rightButton.addEventListener('click', () => {
        const visibleItems = Array.from(carrosselItems).filter(item => {
            return activeFilter === 'all' || item.dataset.category === activeFilter;
        });
        if (visibleItems.length === 0) return;

        currentIndex = (currentIndex + 1) % visibleItems.length;
        updatecarrossel();
    });

    // Initialize with default filter
    setActiveFilter('all');
});

/* CARROSSEL FEEDBACK */
document.addEventListener('DOMContentLoaded', () => {
    let feedbackIndex = 0;
    const feedbacks = document.querySelectorAll('#feedback-carrossel .carrossel-image');

    function mostrarProximoFeedback() {
        feedbacks[feedbackIndex].classList.remove('active');
        feedbackIndex = (feedbackIndex + 1) % feedbacks.length;
        feedbacks[feedbackIndex].classList.add('active');
    }

    setInterval(mostrarProximoFeedback, 3000);
    feedbacks.forEach(feedback => feedback.classList.remove('active')); // Oculta todas as imagens inicialmente
    feedbacks[0].classList.add('active'); // Mostra a primeira imagem
});

/* CARROSSEL ANTES E DEPOIS */
document.addEventListener('DOMContentLoaded', () => {
    let antesdepoisIndex = 0;
    const antesdepoiss = document.querySelectorAll('#sub-carrossel .carrossel-image');

    function mostrarProximoantesdepois() {
        antesdepoiss[antesdepoisIndex].classList.remove('active');
        antesdepoisIndex = (antesdepoisIndex + 1) % antesdepoiss.length;
        antesdepoiss[antesdepoisIndex].classList.add('active');
    }

    setInterval(mostrarProximoantesdepois, 3000);
    antesdepoiss.forEach(antesdepois => antesdepois.classList.remove('active')); // Oculta todas as imagens inicialmente
    antesdepoiss[0].classList.add('active'); // Mostra a primeira imagem
});

/* FORMULÁRIO WHATSAPP */
function enviarFormularioWhatsApp() {
    var nome = document.getElementById('nome').value.trim();
    var mensagem = document.getElementById('mensagem').value.trim();

    var urlWhatsApp = "https://api.whatsapp.com/send?phone=5548999254360&text=";
    var textoWhatsApp = "Diretamente do site exemplo.com\n \n" +
                        "Meu nome é " + nome + "\n" + mensagem;

    var urlCompleta = urlWhatsApp + encodeURIComponent(textoWhatsApp);

    window.open(urlCompleta);

    return false;
}
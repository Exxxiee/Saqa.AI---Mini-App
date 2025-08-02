function setupCarouselImageClickHandler() {
    const cards = document.querySelectorAll('.carousel .card');
    
    cards.forEach(card => {
        card.addEventListener('click', function(event) {
            event.preventDefault();

            const imgElement = this.querySelector('img');
            if (!imgElement) return;
            
            const imgUrl = imgElement.src;

            localStorage.setItem('selectedClothesImage', imgUrl);

            window.location.href = this.href;
        });
    });
}

document.addEventListener('DOMContentLoaded', setupCarouselImageClickHandler);
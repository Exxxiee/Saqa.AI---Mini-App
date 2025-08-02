function displaySelectedImage() {
    const imgUrl = localStorage.getItem('selectedClothesImage');
    
    if (imgUrl) {
        const imgElement = document.querySelector('.clothes-image .card img');
        if (imgElement) {
            imgElement.src = imgUrl;
        }
    }
}

document.addEventListener('DOMContentLoaded', displaySelectedImage);
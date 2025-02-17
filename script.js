
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-section input');
    const restaurantCards = document.querySelectorAll('.restaurant-card');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        restaurantCards.forEach(card => {
            const restaurantName = card.querySelector('h3').textContent.toLowerCase();
            if (restaurantName.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

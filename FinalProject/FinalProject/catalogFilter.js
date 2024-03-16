document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.guitarTypes');
    const searchInput = document.getElementById('search-input');
    const cards = document.querySelectorAll('.card');

    //Search Filter
    function filterByName() {
        const searchText = searchInput.value.toLowerCase();
        cards.forEach(card => {
            const name = card.querySelector('.guitarName').innerText.toLowerCase();
            if (name.includes(searchText)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', filterByName);

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = button.dataset.filter;
            cards.forEach(card => {
                card.style.display = 'none';
                if (filterValue === 'all' || card.classList.contains(filterValue)) {
                    card.style.display = 'block';
                }
            });
        });
    });

    //Button Filters
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            button.classList.add('active');

            const filterValue = button.dataset.filter;
            if (filterValue === 'all') {
                cards.forEach(card => {
                    card.style.display = 'block';
                });
            } else {
                cards.forEach(card => {
                    card.style.display = 'none';
                    if (card.classList.contains(filterValue)) {
                        card.style.display = 'block';
                    }
                });
            }
        });
    });
});

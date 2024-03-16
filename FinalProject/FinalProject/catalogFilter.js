document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.guitarTypes');
    const cards = document.querySelectorAll('.card');

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

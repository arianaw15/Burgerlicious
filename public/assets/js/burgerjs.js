document.addEventListener('DOMContentLoaded', (event) => {
            if (event) {
                console.info('DOM loaded');
            }

            const createBurgerBtn = document.getElementById('create-form');

            if (createBurgerBtn) {
                createBurgerBtn.addEventListener('submit', (y) => {
                    y.preventDefault();

                    const newBurger = {
                        burger: document.getElementById('burg').value.trim(),
                    };
                    fetch('/api/burger', {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(newBurger),
                    }).then(() => {
                        console.log('Created a new burger');
                        console.log(newBurger);
                        document.getElementById('burg').value = '';
                        location.reload();
                    });
                });
            }
        });
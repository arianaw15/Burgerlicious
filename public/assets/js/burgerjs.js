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

    //Devour function deletes the burger

    const deleteBurgerBtn = document.querySelectorAll('.devour');

    deleteBurgerBtn.forEach((a) => {
        a.addEventListener('click', (event) => {
            console.log(event.target)
           const id = event.target.getAttribute('value');
           console.log(id);
            
            fetch(`/api/burger/${id}`, {
                method: 'DELETE',
            }).then((res) => {
                console.log(res);
                console.log(`Deleted burger: ${id}`);

                location.reload();
            })
        })
    })
});
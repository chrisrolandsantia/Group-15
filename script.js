const searchBar = document.getElementById('searchBar');
const games = document.querySelectorAll('.game-card');


searchBar.addEventListener('keyup', () => {
    const searchText = searchBar.value.toLowerCase();


    games.forEach(game => {
        const title = game.querySelector('.game-title').textContent.toLowerCase();


        if (title.includes(searchText)) {
            game.style.display = "flex";
        } else {
            game.style.display = "none";
        }
    });
});

/*clickimage*/

    const clickimage = document.getElementById('clickimage');
    const imgs = document.querySelectorAll('.masonry-item');

    imgs.forEach(img => {
        img.addEventListener('click', () => {
            clickimage.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
            clickimage.style.display = "flex";
        });
    });

    clickimage.addEventListener('click', () => {
        clickimage.style.display = "none";
        clickimage.innerHTML = "";
    });

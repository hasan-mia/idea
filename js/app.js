// Title Color Change
function titleColor(titleId, colorcode) {
    document.getElementById(titleId).addEventListener('click', function() {
        const title = document.getElementById(titleId);
        title.style.color = colorcode;
        if (title.id == 'top-player') {
            title.innerText = "Top 2022 Player"
        }
        if (title.id == 'top-blog') {
            title.innerText = "Top 2022 Blog"
        }

    });
}
// Top Player
titleColor('top-player', 'rgb(255, 0, 0)');
// Top Blog
titleColor('top-blog', 'rgb(0, 191, 255)');

// Player Background Color Change
const plyaerClass = document.getElementsByClassName('player');
for (const palyer of plyaerClass) {
    palyer.style.background = 'rgb(243 241 255)';
    palyer.style.borderRadius = '10px';
}
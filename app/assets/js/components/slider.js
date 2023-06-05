import Glide from '@glidejs/glide';

export default function() {
    const container = document.querySelector('.page--workpost__images');

    if (!container) return; 

    const glide = new Glide('.glide', {
        peek: 30,
        gap: 20
    });

    glide.on('mount.before', function() {
        container.classList.remove('no-glide');
    })

    glide.mount();
}
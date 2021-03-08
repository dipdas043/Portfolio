const navSlide = () => {
    const min = document.querySelector('.min');
    const menu = document.querySelector('.menu');
    const items = document.querySelectorAll('.menu li');

    // Toggle nav
    min.addEventListener('click', () => {
        menu.classList.toggle('menu-active');

        // Animate nav links
        items.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation = '';
        }
        else{
            link.style.animation = `navMenuFade 0.5s ease forwards ${index/7 + 0.3}s`;
        }
        });

        // min animation
        min.classList.toggle('toggle');
    });

    
}

const app = () =>{
    navSlide();
}

app();

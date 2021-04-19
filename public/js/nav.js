// const logoActive = () => {
//     const logo = document.querySelector('.logo a h1');
//     logo.addEventListener('click', () => {
//         logo.style.color = 'rgb(4, 228, 209)';
//         console.log("white");
//     });
// }

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
    // logoActive();
    navSlide();
}

app();

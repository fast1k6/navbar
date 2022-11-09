window.onload = function(){
    let icon = document.querySelector('.sidebar__icon');
    let main = document.querySelector('.main');
    let mainContent = document.querySelector('.main > .main__content');

    // icon
    icon.onclick = function() {
        this.classList.toggle('change__icon');
        main.classList.toggle('main__bg');
        mainContent.classList.toggle('main__content_bg');
        console.log();
    };
    let closeMenu = event => {
        let target = event.target;
        console.log(target.classList.contains('main__bg'));

        

        if(target.classList.contains('main__bg')){
        icon.classList.remove('change__icon');
        main.classList.remove('main__bg');
        mainContent.classList.remove('main__content_bg');
        }
    };

    main.addEventListener('click', closeMenu);
};
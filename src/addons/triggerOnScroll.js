const triggerOnScroll = (container, changes, addedValue=-window.innerHeight/3) => {
    const cont = document.querySelector(container);
    const show = () => {
        let yOff = window.pageYOffset;
        if(yOff > cont.getBoundingClientRect().top+addedValue) {
            changes();
            window.removeEventListener('scroll', show);
        }
    }
    show();
    window.addEventListener('scroll', show);
}

export default triggerOnScroll;

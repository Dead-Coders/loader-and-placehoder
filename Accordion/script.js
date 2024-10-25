let accordion = document.querySelectorAll('.accordion-container .accordion');

accordion.forEach(acco =>{
    acco.onclick = () => {
        accordion.forEach(subacco => {
            subacco.classList.remove('active')
        });
        acco.classList.add('active');
    }
})
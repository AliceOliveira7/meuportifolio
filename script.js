document.addEventListener('DOMContentLoaded', function() {
    
    const puxadorDoMenu = document.querySelector('.puxador-do-menu button');
    const menuDosPitoco = document.querySelector('.menu-dos-pitoco');

    puxadorDoMenu.addEventListener('click', function() {
        menuDosPitoco.classList.toggle('open');
        const boneco = this.querySelector('i');
        
        if (menuDosPitoco.classList.contains('open')) {
            boneco.classList.remove('bi-list');
            boneco.classList.add('bi-x-lg');
        } else {
            boneco.classList.remove('bi-x-lg');
            boneco.classList.add('bi-list');
        }
    });

    document.querySelectorAll('.menu-dos-pitoco a').forEach(link => {
        link.addEventListener('click', () => {
            menuDosPitoco.classList.remove('open');
            const boneco = puxadorDoMenu.querySelector('i');
            boneco.classList.remove('bi-x-lg');
            boneco.classList.add('bi-list');
        });
    });

    const botaoPraSubir = document.getElementById('subir-ligeiro');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { 
            botaoPraSubir.classList.add('active');
        } else {
            botaoPraSubir.classList.remove('active');
        }
    });
});

function copiarOEmail() {
    const oemail = 'alice.o@acad.ifma.edu.br';

    navigator.clipboard.writeText(oemail).then(() => {
        alert('E-mail copiado, meu cumpade!');
    }).catch(err => {
        console.error('Deu um bode pra copiar: ', err);
        alert('Iiiih, num deu pra copiar não. Tente na mão, faz favor.');
    });
}
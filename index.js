// klik card information

const identityCard= document.getElementById('mynav5')
        const information = document.getElementById('information')
        identityCard.addEventListener('click', function () {
        // Menambahkan class 'hidden' untuk menyembunyikan elemen
        const elementToHide = document.getElementById('dommain')
        elementToHide.classList.add('hidden');
        information.classList.remove('information');
        information.classList.add('cloneInfo');
  });

//   click card Main
const main = document.getElementById('mynav1')

main.addEventListener('click',function(){
    information.classList.remove('cloneInfo')
    information.classList.add('information')
    const mainKu = document.getElementById('dommain')
    const article = document.getElementById('article')
    const certif = document.getElementById('certif')
    mainKu.classList.remove('hidden')
    mainKu.classList.add('main')
    article.classList.remove('hidden')
    article.classList.add('article')
    certif.classList.add('hidden')
})

// click certif
const certif = document.getElementById('certif')
const article = document.getElementById('article')
const btn = document.getElementById('mynav3')
const mainKu = document.getElementById('dommain')


btn.addEventListener('click',function(){
    mainKu.classList.remove('hidden')
    mainKu.classList.add('main')
    information.classList.remove('cloneInfo')
    information.classList.add('information')
    certif.classList.remove('hidden')
    certif.classList.add('certif')
    article.classList.add('hidden')
})
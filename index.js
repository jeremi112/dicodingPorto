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
    article.classList.remove('article')
    article.classList.add('hidden')
    
})


// mengubah warna --------------------------------------------------------------------------------

const btnMoon= document.getElementById('moon')

btnMoon.addEventListener('click',function(){
    // body
    const body = document.getElementById('body')
    // button sun
    const btnSoon = document.getElementById('sun')

    // display setiap kotak
    // 1. display information
    const myInfo = document.getElementById('myInfo')
    // 2. display main-card
    const mainCard=document.getElementById('article')
    // 3. display navigation
    const navigation= document.getElementById('mynav')
    // 4. display certificate
    const certif= document.getElementById('certif')

    const h1 = document.getElementsByTagName('h1')
    const p = document.getElementsByTagName('p')
    const svg = document.getElementsByTagName('svg')
    const icon = document.getElementsByTagName('i')
    const button = document.getElementsByTagName('button')

    // display kotak di dalam kotak main
    const bgInfo = document.getElementById('bg-info')
    const card1=document.getElementById('card1')
    const card2=document.getElementById('card2')
    const card3=document.getElementById('card3')
    const card4=document.getElementById('card4')
    const card5=document.getElementById('card5')

    // border
    const border1=document.getElementById('border1')
    const border2=document.getElementById('border2')
    const border3=document.getElementById('border3')



    // 1 mengubah display moon ke none dan sun ke flex
    btnMoon.style.display='none'
    btnSoon.style.display='flex'

    // 2 mengubah background image dari light ke dark
    body.classList.remove('bg-img-light')
    body.classList.add('bg-img-dark')

    // 3. mengubah setiap kotak utama menjadi dark
    myInfo.classList.remove('bg-light')
    myInfo.classList.add('bg-dark')

    mainCard.classList.remove( 'bg-light')  
    mainCard.classList.add('bg-dark')

    navigation.classList.remove('bg-light')
    navigation.classList.add('bg-dark')

    certif.classList.remove('bg-light')
    certif.classList.add('bg-dark')

    // mengubah setiap tag h1,i,svg dan p dengan for
    for(let i=0;i<h1.length;i++){
        h1[i].style.color='white'
    }
    for(let i=0;i<p.length;i++){
        p[i].style.color='white'
    }
    for(let i=0;i<icon.length;i++){
        icon[i].style.color='white'
    }
    for(let i = 0;i<svg.length;i++){
        svg[i].style.color='white'
    }

    for(let i = 0;i<button.length;i++){
        button[i].style.color='white'
        button[i].style.backgroundColor='black'
        button[i].style.borderStyle='bold'
        button[i].style.borderColor='white'
    }

    // mengubah setiap kotak di kotak utama
    card1.classList.remove('bg-primer')
    card1.classList.add('bg-sekunder')

    card2.classList.remove('bg-primer')
    card2.classList.add('bg-sekunder')

    card3.classList.remove('bg-primer')
    card3.classList.add('bg-sekunder')

    card4.classList.remove('bg-primer')
    card4.classList.add('bg-sekunder')

    card5.classList.remove('bg-primer')
    card5.classList.add('bg-sekunder')

    card1.classList.remove('bg-primer')
    card1.classList.add('bg-sekunder')
    
    bgInfo.classList.remove('bg-primer')
    bgInfo.classList.add('bg-sekunder')

    border1.classList.remove('border-color-light')
    border1.classList.add('border-color-dark')
    
    border2.classList.remove('border-color-light')
    border2.classList.add('border-color-dark')

    border3.classList.remove('border-color-light')
    border3.classList.add('border-color-dark')
})




// jika tombol light di klik
const btnSun= document.getElementById('sun')

btnSun.addEventListener('click',function(){
// body
const body = document.getElementById('body')
// button sun
const btnMoon = document.getElementById('moon')

// display setiap kotak
// 1. display information
const myInfo = document.getElementById('myInfo')
// 2. display main-card
const mainCard=document.getElementById('article')
// 3. display navigation
const navigation= document.getElementById('mynav')
// 4. display certificate
const certif= document.getElementById('certif')

const h1 = document.getElementsByTagName('h1')
const p = document.getElementsByTagName('p')
const svg = document.getElementsByTagName('svg')
const icon = document.getElementsByTagName('i')
const button = document.getElementsByTagName('button')

// display kotak di dalam kotak main
const bgInfo = document.getElementById('bg-info')
const card1=document.getElementById('card1')
const card2=document.getElementById('card2')
const card3=document.getElementById('card3')
const card4=document.getElementById('card4')
const card5=document.getElementById('card5')

// border
const border1=document.getElementById('border1')
const border2=document.getElementById('border2')
const border3=document.getElementById('border3')



// 1 mengubah display moon ke none dan sun ke flex
btnSun.style.display='none'
btnMoon.style.display='flex'

// 2 mengubah background image dari light ke dark
body.classList.remove('bg-img-dark')
body.classList.add('bg-img-light')

// 3. mengubah setiap kotak utama menjadi dark
myInfo.classList.remove('bg-dark')
myInfo.classList.add('bg-light')

mainCard.classList.remove( 'bg-dark')  
mainCard.classList.add('bg-light')

navigation.classList.remove('bg-dark')
navigation.classList.add('bg-light')

certif.classList.remove('bg-dark')
certif.classList.add('bg-light')

// mengubah setiap tag h1,i,svg dan p dengan for
for(let i=0;i<h1.length;i++){
    h1[i].style.color='black'
}
for(let i=0;i<p.length;i++){
    p[i].style.color='black'
}
for(let i=0;i<icon.length;i++){
    icon[i].style.color='black'
}
for(let i = 0;i<svg.length;i++){
    svg[i].style.color='black'
}

for(let i = 0;i<button.length;i++){
    button[i].style.color='black'
    button[i].style.backgroundColor='white'
    button[i].style.borderStyle='bold'
    button[i].style.borderColor='black'
}

// mengubah setiap kotak di kotak utama
card1.classList.remove('bg-sekunder')
card1.classList.add('bg-primer')

card2.classList.remove('bg-sekunder')
card2.classList.add('bg-primer')

card3.classList.remove('bg-sekunder')
card3.classList.add('bg-primer')

card4.classList.remove('bg-sekunder')
card4.classList.add('bg-primer')

card5.classList.remove('bg-sekunder')
card5.classList.add('bg-primer')

card1.classList.remove('bg-sekunder')
card1.classList.add('bg-primer')

bgInfo.classList.remove('bg-sekunder')
bgInfo.classList.add('bg-primer')

    border1.classList.remove('border-color-dark')
    border1.classList.add('border-color-light')
    
    border2.classList.remove('border-color-dark')
    border2.classList.add('border-color-light')

    border3.classList.remove('border-color-dark')
    border3.classList.add('border-color-light')

})
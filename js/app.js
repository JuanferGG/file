

function navBars(){
    document.getElementById('barsNav').classList.add('visibleNav')
}
function closeNavBars(){
    document.getElementById('barsNav').classList.remove('visibleNav')
    document.getElementById('barsNav').classList.remove('closeNav')
}




//! DarkMode
function darkMode(){
    document.querySelector('BODY').classList.add('darkBody')
    document.getElementById('darkMode').classList.add('moonHiden')
    document.getElementById('moon').classList.add('sunLogo')
    
    //!DarkTitles-P
    document.getElementsByTagName('h2')[0].classList.add('darkH2')
    document.getElementsByTagName('h2')[1].classList.add('darkH2')
    document.getElementsByTagName('h2')[2].classList.add('darkH2')
    document.getElementsByTagName('h2')[3].classList.add('darkH2')
    document.getElementsByTagName('h2')[4].classList.add('darkH2')
    document.getElementsByTagName('h2')[5].classList.add('darkH2')
    document.getElementsByTagName('h2')[6].classList.add('darkH2')
    document.getElementsByTagName('h2')[7].classList.add('darkH2')
    document.getElementsByTagName('h2')[8].classList.add('darkH2')
    document.getElementsByTagName('h2')[9].classList.add('darkH2')
    document.getElementsByTagName('h2')[10].classList.add('darkH2')
    document.getElementsByTagName('h2')[11].classList.add('darkH2')
    document.getElementsByTagName('h2')[12].classList.add('darkH2')
    document.getElementsByTagName('p')[0].classList.add('darkP')

    //! habilidadesDark
    document.getElementsByClassName('habilidades')[0].classList.add('darkUl')
    document.getElementsByClassName('habilidades')[1].classList.add('darkUl')
}

function sunMode(){
    document.querySelector('BODY').classList.remove('darkBody')
    document.getElementById('darkMode').classList.remove('moonHiden')
    document.getElementById('moon').classList.remove('sunLogo')

    //!DarkTitles-P
    document.getElementsByTagName('h2')[0].classList.remove('darkH2')
    document.getElementsByTagName('h2')[1].classList.remove('darkH2')
    document.getElementsByTagName('h2')[2].classList.remove('darkH2')
    document.getElementsByTagName('h2')[3].classList.remove('darkH2')
    document.getElementsByTagName('h2')[4].classList.remove('darkH2')
    document.getElementsByTagName('h2')[5].classList.remove('darkH2')
    document.getElementsByTagName('h2')[6].classList.remove('darkH2')
    document.getElementsByTagName('h2')[7].classList.remove('darkH2')
    document.getElementsByTagName('h2')[8].classList.remove('darkH2')
    document.getElementsByTagName('h2')[9].classList.remove('darkH2')
    document.getElementsByTagName('h2')[10].classList.remove('darkH2')
    document.getElementsByTagName('h2')[11].classList.remove('darkH2')
    document.getElementsByTagName('h2')[12].classList.remove('darkH2')
    document.getElementsByTagName('p')[0].classList.remove('darkP')

    //! habilidadesDark
    document.getElementsByClassName('habilidades')[0].classList.remove('darkUl')
    document.getElementsByClassName('habilidades')[1].classList.remove('darkUl')
}


//! Contacto

function getContacto(){
    document.getElementById('getContacto').classList.add('contactoVisible')
}

function closeContacto(){
    document.getElementById('getContacto').classList.remove('contactoVisible')
}



//? Experimental

// const titulos = document.getElementsByTagName('h2').classList.remove('darkH2')
// for (let index = 0; index < titulos.length; index++) {
//     titulos[index].classList.add('darkH2')
//     }
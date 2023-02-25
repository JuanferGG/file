

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
}

function sunMode(){
    document.querySelector('BODY').classList.remove('darkBody')
    document.getElementById('darkMode').classList.remove('moonHiden')
    document.getElementById('moon').classList.remove('sunLogo')
}
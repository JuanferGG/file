

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
    document.getElementById('moon').classList.add('moonHiden')
    document.getElementById('darkMode').classList.add('sunVisible')
}
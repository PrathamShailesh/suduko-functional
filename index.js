let name;

document.querySelector('#play-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    
    
    let name = document.querySelector(".need").value;
    let justname = document.querySelector(".gg").value;
    sessionStorage.setItem('nn',name)
    sessionStorage.setItem('gg',justname)
    const nn=sessionStorage.getItem('nn')
    const ll=sessionStorage.getItem('gg')
    localStorage.setItem('playerName', name);
    console.log(name);
    
    if(nn!='' &&justname!=''){   
        window.location.href="game.html"
    }
});
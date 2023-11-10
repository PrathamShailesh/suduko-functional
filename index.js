let name;

document.querySelector('#play-button').addEventListener('click', function(event) {
    event.preventDefault();
    
    
    let name = document.querySelector(".need").value;
    let justname = document.querySelector(".gg").value;
    sessionStorage.setItem('nn',name)
    const nn=sessionStorage.getItem('nn')
    localStorage.setItem('playerName', name);
    console.log(name);
    
    if(nn!='' &&justname!=''){   
        window.location.href="game.html"
    }
});
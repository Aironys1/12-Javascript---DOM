function trocar(){
    if(document.querySelector('button').classList.contains('preto')){
        document.querySelector('button').classList.remove('preto');
        document.querySelector('button').classList.add('vermelho');
       

        
    }
    else{
       
        document.querySelector('button').classList.remove('vermelho');
        document.querySelector('button').classList.add('preto');
    }
}
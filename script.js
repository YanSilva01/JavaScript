function carregar (){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 11
    msg.innerHTML= `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        // BOM DIA 
        img.src = 'dia2.png'
        document.body.style.background = '#ffe1ba'
        
    } else if (hora >= 12 && hora <= 18){
        // BOA TARDE
        img.src = 'tarde2.png'
        document.body.style.background = '#3b5a79'
        
    } else {
        img.src = 'noite2.png'
        document.body.style.background = '#0a233c'
    }


}
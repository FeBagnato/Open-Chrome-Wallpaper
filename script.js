function setBackgroundImage(){
    let total_images = 6
    let random_image = Math.round(Math.random() * (total_images - 1) + 1)
    
    document.body.setAttribute('style', '--img:url("images/' 
    + random_image + '.webp")')
}

function setShortcuts(){
    let shortcuts = JSON.parse(data)
    let div_shortcuts = document.getElementById('shortcuts')

    for(let i in shortcuts){
        div_shortcuts.innerHTML += "<div id='" + shortcuts[i].name + "' class='website'>" +
            "<img src='https://logo.clearbit.com/" + shortcuts[i].link + 
                "' width='50px' height='50px'>" +
            "<p>" + shortcuts[i].name + "</p>" +
        "</div>"
    }

    for(let i in shortcuts){
        document.getElementById(shortcuts[i].name).addEventListener('click', () => {
            location.href = shortcuts[i].link
        })
    }
}

setBackgroundImage()
setShortcuts()

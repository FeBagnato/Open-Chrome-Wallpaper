function setBackgroundImage(){
    let total_images = 6
    let random_image = Math.round(Math.random() * (total_images - 1) + 1)
    
    document.body.setAttribute('style', '--img:url("images/' 
    + random_image + '.webp")')
}

setBackgroundImage()
function setBackgroundImage(){
    let total_images = 3
    let random_image = Math.floor(Math.random() * total_images) + 1
    
    document.body.style.setProperty('--img', 'url("images/' + random_image + '.webp")')
}

function setShortcuts(){
    let shortcuts = data
    let div_shortcuts = document.getElementById('shortcuts')
    const LINK_API = "https://api.companyenrich.com/logo/"

    for (const { name, link } of shortcuts){
        let domain = ''
        let after_tld = false
        for (const char of link){
            if(char == '.'){
                after_tld = true
            }
            else if(char == '/'){
                if(after_tld == true) break
            }
            domain += char
        }

        let website = document.createElement('div')
        website.className = 'website'

        website.addEventListener('click', () => {
            location.href = "https://" + link
        })

        let logo = document.createElement('img')
        logo.src = LINK_API + domain
        logo.setAttribute('width', '50px')
        logo.setAttribute('height', '50px')

        let label = document.createElement('p')
        label.textContent = name

        website.appendChild(logo)
        website.appendChild(label)
        div_shortcuts.appendChild(website)
    }
}

setBackgroundImage()
setShortcuts()

function setBackgroundImage(){
    let total_images = 3
    let random_image = Math.floor(Math.random() * total_images) + 1
    
    document.body.setAttribute('style', '--img:url("images/' 
    + random_image + '.webp")')
}

function setShortcuts(){
    let shortcuts = JSON.parse(data)
    let div_shortcuts = document.getElementById('shortcuts')
    const LINK_API = "https://api.companyenrich.com/logo/"

    for(let i in shortcuts){
        let link = ''
        let after_tld = false
        let this_link = shortcuts[i].link
        for (let y in this_link){
            if(this_link[y] == '.'){
                after_tld = true
            }
            else if(this_link[y] == '/'){
                if(after_tld == true) break
            }
            link += this_link[y]
        }

        let website = document.createElement('div')
        website.id = shortcuts[i].name
        website.className = 'website'

        let logo = document.createElement('img')
        logo.src = LINK_API + link
        logo.setAttribute('width', '50px')
        logo.setAttribute('height', '50px')

        let name = document.createElement('p')
        name.textContent = shortcuts[i].name

        website.appendChild(logo)
        website.appendChild(name)
        div_shortcuts.appendChild(website)
    }

    for(let i in shortcuts){
        document.getElementById(shortcuts[i].name).addEventListener('click', () => {
            location.href = "https://" + shortcuts[i].link
        })
    }
}

setBackgroundImage()
setShortcuts()

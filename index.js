let tagUl = document.querySelector(".post-ul")

function createCard(user, post) {
    let tagLi = document.createElement("li")
    let tagDiv = document.createElement("div")
    let tagImagem = document.createElement("img")
    let tagDivNome = document.createElement("div")
    let tagNome = document.createElement("h1")
    let tagProfissao = document.createElement("p")
    let tagTitulo = document.createElement("h2")
    let tagDescricao = document.createElement("p")
    let tagBotao = document.createElement("button")
    let tagDivTitulo = document.createElement("div")



    tagImagem.classList = 'heigth-80 width-80'
    tagNome.classList.add("post-nome")
    tagProfissao.classList.add("post-profissao")
    tagTitulo.classList = 'font-size-17 padding-rigth-5 padding-top-20 '
    tagDescricao.classList.add("post-descricao")
    tagBotao.classList.add("post-botao")
    tagLi.classList = 'width-auto'
    tagDiv.classList = 'flex items-center '
    tagDivNome.classList = 'padding-top-0 padding-left-5'
    tagDivTitulo.classList = 'heigth-185'

    tagImagem.src = user.img
    tagImagem.alt = ""
    tagNome.innerText = user.user
    tagProfissao.innerText = user.stack
    tagTitulo.innerText = post.title
    tagDescricao.innerText = post.text
    tagBotao.innerText = "Abrir post"



    tagDiv.appendChild(tagImagem)
    tagDiv.appendChild(tagDivNome)
    tagDivNome.appendChild(tagNome)
    tagDivNome.appendChild(tagProfissao)
    tagLi.appendChild(tagDiv)
    tagDivTitulo.appendChild(tagTitulo)
    tagDivTitulo.appendChild(tagDescricao)
    tagDivTitulo.appendChild(tagBotao)
    tagLi.appendChild(tagDivTitulo)


    tagUl.appendChild(tagLi)
    // const nav = document.querySelector('.navbar')
    const container = document.getElementById('add-transparencia')

    tagBotao.addEventListener('click', () => {
        // nav.classList.add("transparencia");
        container.classList.add("transparencia");


        criandoPostModal(user, post)

    })

    return tagLi

}

function listandoCards(listaDePosts) {
    for (let index = 0; index < listaDePosts.length; index++) {
        let post = listaDePosts[index]

        for (let j = 0; j < users.length; j++) {
            let user = users[j]

            if (user.id === post.user) {
                createCard(user, post)
            }
        }
    }
}
listandoCards(posts);


let tagModalUl = document.querySelector(".modal-ul")

let contPostsAbertos = 0;

function criandoPostModal(users, posters) {

    let tagModalLi = document.createElement("li")
    let tagModalDiv = document.createElement("div")
    let tagModalImagem = document.createElement("img")
    let tagModalDivNome = document.createElement("div")
    let tagModalNome = document.createElement("h1")
    let tagModalProfissao = document.createElement("p")
    let tagDivArmazenandoBotao = document.createElement("div")
    let tagModalTitulo = document.createElement("h2")
    let tagModalDescricao = document.createElement("p")
    let tagDivModalTitulo = document.createElement("div")
    let tagButtonModal = document.createElement("button")



    tagModalImagem.classList = 'heigth-80 width-80'
    tagModalNome.classList = 'post-nome'
    tagModalProfissao.classList = 'post-profissao'
    tagModalTitulo.classList = 'font-size-17 padding-rigth-5 padding-top-20 '
    tagModalDescricao.classList = 'modal-descricao'
    tagModalLi.classList = 'modal-li'

    const idDoModal = `modal-user-${users.id}-${contPostsAbertos}`

    tagModalLi.id = idDoModal;
    contPostsAbertos += 1;

    tagModalDiv.classList = 'flex items-center'
    tagModalDivNome.classList = 'modal-div-nome-profissao nome-profissao'
    tagDivModalTitulo.classList = 'padding-left-20'
    tagButtonModal.classList = 'modal-button'
    tagButtonModal.id = 'modal-close'
    tagDivArmazenandoBotao.classList = 'armazenando-botao'


    tagModalImagem.src = users.img
    tagModalImagem.alt = ""
    tagModalNome.innerText = users.user
    tagModalProfissao.innerText = users.stack
    tagModalTitulo.innerText = posters.title
    tagModalDescricao.innerText = posters.text
    tagButtonModal.innerText = "X"

    tagModalLi.appendChild(tagDivArmazenandoBotao)
    tagModalDiv.appendChild(tagModalImagem)
    tagModalDiv.appendChild(tagModalDivNome)
    tagDivArmazenandoBotao.appendChild(tagButtonModal)
    tagModalDivNome.appendChild(tagModalNome)
    tagModalDivNome.appendChild(tagModalProfissao)
    tagModalLi.appendChild(tagModalDiv)
    tagDivModalTitulo.appendChild(tagModalTitulo)
    tagDivModalTitulo.appendChild(tagModalDescricao)
    tagModalLi.appendChild(tagDivModalTitulo)


    tagModalUl.appendChild(tagModalLi)
    console.log(tagModalUl)
    console.log(idDoModal)

    let idModal = document.getElementById(idDoModal)
    const container = document.getElementById('add-transparencia')
    tagButtonModal.addEventListener('click', () => {
        container.classList.remove("transparencia");
        idModal.remove()
    })

    return tagModalLi
}
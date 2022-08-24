const cep = document.querySelector('#cep')
let novo_cep = ''
cep.addEventListener('blur', (e) => {
    novo_cep = cep.value.replace('-', '')
    search()
})

search = async() => {
    const search_cep = await fetch(`https://viacep.com.br/ws/${novo_cep}/json/`)
    const show_cep = await search_cep.json()
    for (i in show_cep) {
        if (document.querySelector(`#${i}`)) {
            document.querySelector(`#${i}`).value = show_cep[i]
        }
    }
}
function save(){
    event.preventDefault()
    let name = document.querySelector("input[name='name']").value
    let email = document.querySelector("input[name='email']").value
    let mensagem = document.querySelector("textarea[name='mensagem']").value

    if(name === '' || email === '' || mensagem === ''){
        alert('Faltou preencher algum campo!')
    }else{
        alert(`Nome: ${name} 
            \nEmail: ${email}
            \nMensagem: ${mensagem}
            \n\nMensagem Enviada com Sucesso!!`
        )
    }
}
function save() { /*Essa função será executada quando o formulário do contato.html for submetido*/
    event.preventDefault() /*Faz com que não ocorra a ação padrão ao submeter um formulário, que é recarregar a página*/
    let name = document.querySelector("input[name='name']").value /*Pega o valor do input com o name = name*/
    let email = document.querySelector("input[name='email']").value /*Pega o valor do input com o name = email*/
    let mensagem = document.querySelector("textarea[name='mensagem']").value /*Pega o valor do textarea com o name = mensagem*/

    if (name === '' || email === '' || mensagem === '') { /*Verifica se algum dos inputs ou o textarea está vazio*/
        alert('Faltou preencher algum campo!') /*Se estiver vazio, dispara esse alerta para o usuário*/
    } else {
        alert(`Nome: ${name}
            \nEmail: ${email}
            \nMensagem: ${mensagem}
            \n\nMensagem Enviada com Sucesso!!`
        ) /*Se não estiver vazio, dispara esse alerta para o usuário*/
    }

    clearForm() /*Chama a função para limpar o formulário*/
}

function clearForm() { /*Função para limpar o formulário*/
    document.querySelector("input[name='name']").value = '' /**/
    document.querySelector("input[name='email']").value = '' /**/
    document.querySelector("textarea[name='mensagem']").value = ''
}
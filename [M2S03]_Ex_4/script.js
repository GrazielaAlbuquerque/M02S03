let permissao;
permissao = window.prompt("Por favor, digíte seu perfil:");

switch (permissao) {
    case 'aluno':
        alert('Acesso de aluno')
    break;
    case 'funcionario':
        alert('Acesso de funcionario')
    break;
    case 'professor':
        alert('Acesso de professor')
    break;
    case 'diretor':
        alert('Acesso de diretor')
    break;
    default:
        alert('Acesso negado, verifique seu perfil')
}
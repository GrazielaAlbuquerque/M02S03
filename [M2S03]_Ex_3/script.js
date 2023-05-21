let media, n1, n2, n3;

n1 = prompt("Informe a nota do primeiro Módulo: ") ;
n1 = eval(n1);

n2 = prompt("Informe a nota do segundo Módulo: ") ;
n2 = eval(n2) ; 

n3 = prompt("Informe a nota do terceio Módulo: ") ; 
n3 = eval(n3) ;

media = (n1 + n2 + n3)/3 ; 

if ( media >= 7 ) {
    document.write ("Aluno(a) aprovado com nota: " + media);
} else { 
    if ( media <= 6 ) {
    document.write ("Aluno(a) reprovado com nota: " + media);
} else {
    document.write ("Aluno(a) em recuperação");
}}

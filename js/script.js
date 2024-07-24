const obterNotas = (n1, n2, n3) => {   //Realiza a soma das 3 notas
    
    return n1 + n2 + n3;
  };
  
  const calculoMedia = (n1, n2, n3) => {
    return obterNotas(n1, n2, n3) / 3; //Exemplo de entradas das notas e divide por 3 obtendo a média
  };
  
  const exibeMedia = (n1, n2, n3) => {
    alert(`A média do aluno foi de ${calculoMedia(n1, n2, n3)}`); //Exibe a media do aluno em um alert
  };
  
  exibeMedia(10, 5, 4);
let livros = [];

function adicionarLivro(livro) {
  livros.push(livro);
  return livro;
}

function listarLivros() {
  return livros;
}

function buscarLivro(id) {
  return livros.find((livro) => livro.id === id);
}

function atualizarLivro(id, novosDados) {
  let index = livros.findIndex((livro) => livro.id === id);
  if (index !== -1) {
    livros[index] = { ...livros[index], ...novosDados };
    return livros[index];
  }
  return null;
}

function removerLivro(id) {
  let index = livros.findIndex((livro) => livro.id === id);
  if (index !== -1) {
    return livros.splice(index, 1)[0];
  }
  return null;
}

//TESTE
console.log("CREATE:");
adicionarLivro({ id: 1, titulo: "Cinco Mulheres", autor: "Machado de Assis", status: "Lido" });
adicionarLivro({ id: 2, titulo: "Moreninha", autor: "Casemiro De Abreu", status: "Não lido" });
adicionarLivro({ id: 3, titulo: "Amar e Perder", autor: "Rafael Arrais", status: "Não lido" });
console.log(listarLivros());

console.log("\nREAD por id:");
console.log(buscarLivro(1));

console.log("\nUPDATE:");
console.log(atualizarLivro(2, { status: "Lido" }));
console.log(listarLivros());

console.log("\nDELETE:");
console.log(removerLivro(1));
console.log(listarLivros());


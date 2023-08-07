const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
      },
    ],
  };

  let favoriteBook = `O livro favorito de ${reader.name} ${reader.lastName} se chama ${reader.favoriteBooks[0].title}`;

  console.log(favoriteBook);

  reader.favoriteBooks.push(
    {
      title: 'Harry Potter e o Prisioneiro de Azkaban',
      author: 'JK Rowling',
      publisher: 'Rocco',
    },
  );

  const numFavoriteBooks = reader.favoriteBooks.length;

  let favoriteBookList = `${reader.name} tem ${numFavoriteBooks} livros favoritos`;

  console.log(favoriteBookList);

  console.log(reader);
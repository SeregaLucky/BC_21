/*
 * Задача. Объект с книгами и методами
 * 1. Вернуть все книги
 * 2. Добавить книгу
 * 3. Удалить книгу
 * 4. Заменить книгу
 * 5. Заменить имя книги
 */

const objBooks = {
  books: [
    { id: 1, name: 'Метро 2033' },
    { id: 2, name: 'Мартин Иден' },
    { id: 3, name: 'Путешествие к центру земли' },
  ],

  getAllBook() {
    return this.books;
  },

  // M addNewBook
  // addNewBook(book) {
  //   const newBook = {
  //     id: Date.now(),
  //     name: book,
  //   };

  //   this.books.push(newBook);
  //   // const newB = [...this.books, newBook]
  // },

  addNewBook(book) {
    const newBook = {
      id: Date.now(),
      name: book,
    };

    this.books = [...this.books, newBook];
  },

  // M deleteBook
  // deleteBook(id) {
  //   for (let i = 0; i < this.books.length; i += 1) {
  //     if (this.books[i].id === id) {
  //       this.books.splice(i, 1);
  //     }
  //   }
  // },

  deleteBook(id) {
    const newArr = [];

    for (const book of this.books) {
      if (book.id !== id) {
        newArr.push(book);
      }
    }

    this.books = newArr;
  },

  changeBook(id, bookName) {
    const newArr = [];

    for (const book of this.books) {
      // console.log(book);

      if (book.id === id) {
        const newBook = {
          id: Date.now(),
          name: bookName,
        };
        newArr.push(newBook);
      } else {
        newArr.push(book);
      }
    }

    this.books = newArr;
  },

  changeNameBook(oldNameBook, newNamebook) {
    const newArr = [];

    for (const book of this.books) {
      if (book.name === oldNameBook) {
        const newBook = { ...book, name: newNamebook };

        // console.log('need book', newBook);
        newArr.push(newBook);
      } else {
        newArr.push(book);
      }
    }

    this.books = newArr;
  },
};

console.log('START --- ', objBooks.getAllBook());
console.log('==============================');

// objBooks.addNewBook('Морской волк');
// console.log('ADD --- ', objBooks.getAllBook());
// console.log('==============================');

// objBooks.addNewBook('Морской волк 222');
// console.log('ADD --- ', objBooks.getAllBook());
// console.log('==============================');

// objBooks.deleteBook(2);
// console.log('DELETE --- ', objBooks.getAllBook());
// console.log('==============================');

// objBooks.changeBook(3, 'Древний');
// console.log('CHANGE --- ', objBooks.getAllBook());
// console.log('==============================');

objBooks.changeNameBook('Метро 2033', 'Метро 2035');
console.log('CHANGE NAME --- ', objBooks.getAllBook());
console.log('==============================');

// console.log(Date.now());

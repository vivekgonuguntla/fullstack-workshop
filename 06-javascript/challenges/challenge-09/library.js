function createLibrary() {
  const books = [];    
  const members = [];  
  const borrowHistory = []; 
  const BORROW_LIMIT_DAYS = 14;

  return {
    
    addBook(book) {
      const existing = books.find(b => b.isbn === book.isbn);
      if (existing) {
        existing.copies += book.copies;
      } else {
        books.push({ ...book });
      }
    },

  
    addMember(member) {
      if (!members.some(m => m.id === member.id)) {
        members.push({ ...member });
      }
    },

    
    borrowBook(memberId, isbn) {
      const book = books.find(b => b.isbn === isbn);
      const member = members.find(m => m.id === memberId);

      if (!book) return console.log("Book not found");
      if (!member) return console.log("Member not found");
      if (book.copies <= 0) return console.log("No copies available");

      book.copies -= 1;
      borrowHistory.push({
        memberId,
        isbn,
        title: book.title,
        borrowedAt: new Date(),
        returnedAt: null
      });
    },

   
    returnBook(memberId, isbn) {
      const book = books.find(b => b.isbn === isbn);
      const record = borrowHistory
        .filter(h => h.memberId === memberId && h.isbn === isbn && !h.returnedAt)
        .pop();

      if (!book || !record) return console.log("Invalid return");

      book.copies += 1;
      record.returnedAt = new Date();
    },

    
    getAvailableCopies(isbn) {
      const book = books.find(b => b.isbn === isbn);
      return book ? book.copies : 0;
    },

   
    getMemberHistory(memberId) {
      return borrowHistory
        .filter(h => h.memberId === memberId)
        .map(h => ({ isbn: h.isbn, title: h.title, borrowedAt: h.borrowedAt, returnedAt: h.returnedAt }));
    },

   
    getOverdueBooks() {
      const now = new Date();
      return borrowHistory
        .filter(h => !h.returnedAt && (now - h.borrowedAt) / (1000 * 60 * 60 * 24) > BORROW_LIMIT_DAYS)
        .map(h => ({ memberId: h.memberId, isbn: h.isbn, title: h.title, borrowedAt: h.borrowedAt }));
    },
    searchBooks(query) {
      const q = query.toLowerCase();
      return books.filter(b => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q));
    }
  };
}


const library = createLibrary();

library.addBook({ isbn: '123', title: '1984', author: 'Orwell', copies: 3 });
library.addBook({ isbn: '456', title: 'Dune', author: 'Herbert', copies: 2 });

library.addMember({ id: 'M1', name: 'John', email: 'john@example.com' });
library.addMember({ id: 'M2', name: 'Jane', email: 'jane@example.com' });

library.borrowBook('M1', '123');
library.borrowBook('M2', '123');

console.log(library.getAvailableCopies('123'));  // 1

library.returnBook('M1', '123');

console.log(library.getMemberHistory('M1'));
console.log(library.getOverdueBooks());
console.log(library.searchBooks('orwell'));

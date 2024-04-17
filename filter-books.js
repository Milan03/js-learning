const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    yearPublished: 1925,
    genres: ['Novel', 'Fiction'],
  },
  {
    title: '1984',
    author: 'George Orwell',
    yearPublished: 1949,
    genres: ['Dystopian', 'Political Fiction'],
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    yearPublished: 1960,
    genres: ['Novel', 'Southern Gothic'],
  },
  {
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    yearPublished: 1988,
    genres: ['Non-fiction', 'Science'],
  },
  {
    title: 'The Road',
    author: 'Cormac McCarthy',
    yearPublished: 2006,
    genres: ['Post-apocalyptic', 'Fiction'],
  },
];

function filterBooks(afterYear, genre) {
  return books
    .filter((x) => {
      return (
        x.yearPublished >= afterYear && x.genres.filter((x) => x === genre)
      );
    })
    .map((x) => x.title + ' by ' + x.author + ' (' + x.yearPublished + ')');
}

var filteredBooks = filterBooks(1950, 'Fiction');
console.log(filteredBooks);

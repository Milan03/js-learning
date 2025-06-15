function SQLEngine(database) {

    this.execute = function (query) {
        let queryParts = query.trim().split(/\s+/);
        console.log("Executing query:", queryParts);

        if (queryParts[0].toUpperCase() !== 'SELECT') {
            throw new Error('Only SELECT queries are supported in this simple engine.');
        }

        if (queryParts.length < 4) {
            throw new Error('Invalid query format. Expected at least 4 parts: SELECT, columns, FROM, table.');
        }

        // Columns will always be table.column after the SELECT keyword and before the FROM keyword
        let columnMap = new Map();
        for (let i = 1; i < queryParts.length; ++i) {
            if (queryParts[i] === 'FROM') {
                break;
            } else {
                let part = queryParts[i];
                let tableCol = part.replace(',', '').split('.');
                if (!columnMap.has(tableCol[0])) {
                    columnMap.set(tableCol[0], new Array(tableCol[1]));
                } else {
                    let colMapVal = columnMap.get(tableCol[0]);
                    colMapVal.push(tableCol[1]);
                }
            }
        }
        let test = 0;
    }

}

var movieDatabase = {
    movie: [
        { id: 1, name: 'Avatar', directorID: 1 },
        { id: 2, name: 'Titanic', directorID: 1 },
        { id: 3, name: 'Infamous', directorID: 2 },
        { id: 4, name: 'Skyfall', directorID: 3 },
        { id: 5, name: 'Aliens', directorID: 1 }
    ],
    actor: [
        { id: 1, name: 'Leonardo DiCaprio' },
        { id: 2, name: 'Sigourney Weaver' },
        { id: 3, name: 'Daniel Craig' },
    ],
    director: [
        { id: 1, name: 'James Cameron' },
        { id: 2, name: 'Douglas McGrath' },
        { id: 3, name: 'Sam Mendes' }
    ],
    actor_to_movie: [
        { movieID: 1, actorID: 2 },
        { movieID: 2, actorID: 1 },
        { movieID: 3, actorID: 2 },
        { movieID: 3, actorID: 3 },
        { movieID: 4, actorID: 3 },
        { movieID: 5, actorID: 2 },
    ]
};

module.exports = SQLEngine;

// how do i call execute method?
const engine = new SQLEngine(movieDatabase);
engine.execute('SELECT movie.name, actor.name, actor.id, movie.id FROM movie'); // This will log the query parts to the console
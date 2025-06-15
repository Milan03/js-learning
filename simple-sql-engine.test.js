const SQLEngine = require('./simple-sql-engine');

describe('execution', function () {
    var engine = new SQLEngine(movieDatabase);

    it('should SELECT columns', function () {
        var actual = engine.execute('SELECT movie.name FROM movie');
        expect(actual).toEqual([
            { 'movie.name': 'Avatar' },
            { 'movie.name': 'Titanic' },
            { 'movie.name': 'Infamous' },
            { 'movie.name': 'Skyfall' },
            { 'movie.name': 'Aliens' }
        ]);
    });
});

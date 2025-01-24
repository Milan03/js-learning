const cheerio = require('cheerio');

async function resolveSecretMessage(url) {
    // Fetch the published doc HTML
    const res = await fetch(url);
    const html = await res.text();

    // Parse with Cheerio
    const $ = cheerio.load(html);
    var chartData = [];

    // Extract table rows
    $('table tbody tr').each((_, row) => {
        const cells = $(row).find('td');
        if (cells.length >= 3) {
            const xCoordinate = $(cells[0]).text().trim();
            const character = $(cells[1]).text().trim();
            const yCoordinate = $(cells[2]).text().trim();
            chartData.push({ xCoordinate, character, yCoordinate });
        }
    });

    // "Character" header row appearing in output text, remove it
    chartData = chartData.filter(row => row.character !== 'Character');

    // Print or process the parsed data
    printGrid(chartData);
}

function printGrid(chartData) {
    // Initialize a 2D object to represent the grid
    const grid = {};

    // Populate the grid with x/y coordinates and corresponding characters
    chartData.forEach(({ xCoordinate, character, yCoordinate }) => {
        const x = parseInt(xCoordinate, 10);
        const y = parseInt(yCoordinate, 10);
        if (!grid[y]) {
            grid[y] = {};
        }
        grid[y][x] = character;
    });

    // Collect and sort the unique Y and X coordinates
    const yCoordinates = [];
    for (const yStr in grid) {
        yCoordinates.push(parseInt(yStr, 10));
    }
    yCoordinates.sort((a, b) => a - b);

    const xCoordinates = [];
    chartData.forEach(item => {
        const x = parseInt(item.xCoordinate, 10);
        if (!xCoordinates.includes(x)) {
            xCoordinates.push(x);
        }
    });
    xCoordinates.sort((a, b) => a - b);

    // Construct each row by iterating through Y and X, print the row to console
    yCoordinates.forEach(y => {
        let row = '';
        xCoordinates.forEach(x => {
            row += grid[y][x] || ' ';
        });
        console.log(row);
    });
}


module.exports = { resolveSecretMessage, printGrid };

resolveSecretMessage('https://docs.google.com/document/d/e/2PACX-1vShuWova56o7XS1S3LwEIzkYJA8pBQENja01DNnVDorDVXbWakDT4NioAScvP1OCX6eeKSqRyzUW_qJ/pub');
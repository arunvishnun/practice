/**
 * Get movies list in sorted order. 
 * Query has a page param determines which page data is requested. 
 * Generated out put contains all movie names from all the pages in sorted order.
 */

const fetch = require('node-fetch');
const URL = 'https://jsonmock.hackerrank.com/api/movies/search/';
function getAPI(substr, pageNum) {
    return `${URL}?Title=${substr}&page=${pageNum}`;
}

function getTitles(result) {
    let titles = [];
    result.data.forEach( (value, index) => {
        titles.push(value['Title']);
    });
    return titles;
}

function fetchAllPages(substr, pages) {   
    let promises = [];
    
    for(let i=2; i<= pages; i++) {

        let promise = fetch( getAPI(substr, i) ).then( (res) => {
                return res.json();
            })
            .then((data) => {
                return getTitles(data);
            });
        promises.push(promise); 
    } 
    return promises;    
}

function getMovieTitlesPromise() {
    return fetch( getAPI('spiderman', 1) )
            .then( (res) => {
                return res.json();
            })
            .then( (result) => {
                let finalResult = getTitles(result);
                let p = fetchAllPages('spiderman', result.total_pages);
                
                return Promise.all(p).then( (result) => {  
                    finalResult = finalResult.concat(...result);
                    return finalResult.sort();
                });    
            });
}
    
getMovieTitlesPromise().then( res => {
    console.log('================================ Promise Way ===============================');
    console.log(res);
});

/**
 * Async await method.
 */

async function getMovieTitlesAsync() {
    console.log('Callstack: ' + ++counter);

    let response = await fetch( getAPI('spiderman', 1) );
    let json = await response.json();
    console.log('Callstack: ' + ++counter);

    let titles = getTitles(json);

    for(let i = 2; i <= json.total_pages; i++) {
        console.log('Callstack: ' + ++counter);

        response = await fetch( getAPI('spiderman', i) );
        json = await response.json();
        console.log('Callstack: ' + ++counter);
        
        titles = titles.concat(...getTitles(json));
    }

    console.log('Callstack: ' + ++counter);
    
    return await titles.sort();
}

let counter = 0;
getMovieTitlesAsync().then( (titles) => {
    console.log('Callstack: ' + ++counter);
    console.log('================================ Async Way ===============================');
    console.log(titles)
});

console.log('Callstack: ' + ++counter);
console.log('Callstack: ' + ++counter);


/*
Sample output.

var x = { page: '1',
per_page: 10,
total: 13,
total_pages: 2,
data: 
 [ { Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg',
     Title: 'Italian Spiderman',
     Type: 'movie',
     Year: 2007,
     imdbID: 'tt2705436' },
   { Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg',
     Title: 'Superman, Spiderman or Batman',
     Type: 'movie',
     Year: 2011,
     imdbID: 'tt2084949' },
   { Poster: 'N/A',
     Title: 'Spiderman',
     Type: 'movie',
     Year: 1990,
     imdbID: 'tt0100669' },
   { Poster: 'N/A',
     Title: 'Spiderman',
     Type: 'movie',
     Year: 2010,
     imdbID: 'tt1785572' },
   { Poster: 'N/A',
     Title: 'Fighting, Flying and Driving: The Stunts of Spiderman 3',
     Type: 'movie',
     Year: 2007,
     imdbID: 'tt1132238' },
   { Poster: 'http://ia.media-imdb.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg',
     Title: 'Spiderman and Grandma',
     Type: 'movie',
     Year: 2009,
     imdbID: 'tt1433184' },
   { Poster: 'N/A',
     Title: 'The Amazing Spiderman T4 Premiere Special',
     Type: 'movie',
     Year: 2012,
     imdbID: 'tt2233044' },
   { Poster: 'N/A',
     Title: 'Amazing Spiderman Syndrome',
     Type: 'movie',
     Year: 2012,
     imdbID: 'tt2586634' },
   { Poster: 'N/A',
     Title: 'Hollywood\'s Master Storytellers: Spiderman Live',
     Type: 'movie',
     Year: 2006,
     imdbID: 'tt2158533' },
   { Poster: 'N/A',
     Title: 'Spiderman 5',
     Type: 'movie',
     Year: 2008,
     imdbID: 'tt3696826' } ] 
    }
*/
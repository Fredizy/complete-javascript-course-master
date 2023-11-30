'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries'); 

///////////////////////////////////////
const requests = fetch('https://restcountries.eu/rest/v2/name/portugal');
console.log(request);

const getCountryData = function (country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(Response => Response.json())
    .then(data => { 
        renderCountry(data[0]) 
        const neighbour = data[0].borders[0];

        if(!neighbour) return;

      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then(Response => Response.json())
    .then[data => renderCountry(data, 'neighbour')];
};

btn.addEventListener('click', function() {
    getCountryData('portugal');
})

console.log(1);
console.log(2);

setTimeout(() => {
    console.log('callback function fired', 2000);
})
console.log(3);
console.log(4);



const getodos = (resource,callback) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data)
            } else if (request.readyState === 4 ) {
              resolve('error getting resources')
            }
        });
        
        request.open('GET', resource);
        request.send();
    })
};

getodos('todos.json').then(data => {
    console.log('promise resolved:', data);
}
)

fetch('todos.json').then((response) => {
   console.log('resolved', response);
   return response.json
}).then(data => {
    console.log(data);
}).catch((err) => {
   console.log('rejecred', err);
})

const urlString = 'https://mysite.com?p=42&from=home#details';

const url = new URL(urlString);
//Delete a Parameter

const parameter =  'from';
url.searchParams.delete(parameter);

//Edit/Add a Parameter

const newParams = {
    
    p: 42,
    track: 'none',
}

Object.keys(newParams).forEach(key => {
    url.searchParams.set(key, newParams[key]);
});

//Edit the hash Fragment

const newHash = 'overview';
url.hash = newHash;

console.log(`${url}`)
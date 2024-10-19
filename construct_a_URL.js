// const query = "where's waldo" ;
// const locale = "en" ;
// const  campaign = "search" ;

// const url = `https://dev.30secondsofcode.org:8000/c/js?page=2&sort=asc#search?query=${query}&locale=${locale}&campaign=${campaign}` ;

// const query = "Where's Waldø?";
// const locale = "en-US";
// const campaign = "promo_email";

// const url = `https://examp.le
//   ?q=${
//     encodeURIComponent(query)
//   }&lang=${
//     encodeURIComponent(locale)
//   }&from=${
//     encodeURIComponent(campaign)
//   }`;


//   const query = "Where's Waldø?";
// const locale = "en-US";
// const campaign = "promo_email";

// Good
// const url = new URL('https://examp.le');

// url.searchParams.set('q', query);
// url.searchParams.set('lang', locale);
// url.searchParams.set('from', campaign);

// url.toString();


//How do I use JavaScript to get the base URL or the URL parameters?

//You can use the URL constructor to get the base URL and URL parameters. Here's an example:

const getBaseUrl = url => url.replace(/[?#].*$/, '');

const baseURL = getBaseUrl('http://url.com/page?name=Adam&surname=Smith');
console.log(baseURL);

const getURLParameters = url =>
    (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
      (a, v) => (
        (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
      ),
      {}
    );
  
  getURLParameters(location.search);
  // Gets the URL parameters of the current page
  getURLParameters('http://url.com/page?name=Adam&surname=Smith');
  // { name: 'Adam', surname: 'Smith' }
  getURLParameters('google.com');
  // {}
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
//"www.codewars.com?page=1" -->"www.codewars.com?page=1"
// removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com'
// removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
// removeUrlAnchor('www.codewars.com/katas/'),'www.codewars.com/katas/'


function removeUrlAnchor(url){ 
  let lastElm= url.split('').indexOf('#')
  return lastElm==-1? url:url.split('').splice(0,lastElm).join('')



  function removeUrlAnchor(url){
    let x= url.split('#')
    return x[0]
    }

  // ...........YOUR MISSION...........

  // Make me a sandwich.
  
  // 1. Create a Sandwich object.
  // 2. Create 6 keys on the object all defaulted to a value of false
  //    a. pickle: false
  //    b. lettuce: false
  //    c. tomato: false
  //    d. ketchup: false
  //    e. mustard: false
  //    f. mayo: false
  // 3. Create different functions where each one can change the value of only one of the keys on a Sandwich object to "true".
  // 4. Create a function named "makeMeASandwich".
  // 5. That function should take 6 arguments - one for each condiment on the sandwich.
  // 6. If any of those 6 argument values are true, put that condiment on the sandwich.
  // 7. Write to the document something like this...
  //   "My sandwich has pickle, ketchup, mustard on it"

var sandwhich = {	
    pickle: false,
    lettuce: false,
    tomato: false,
    ketchup: false,
    mustard: false,
    mayo: false
  }

var mySandwhich = [];

  function pickle () {
  	mySandwhich.push(" pickle")
  }

  function lettuce () {
  	mySandwhich.push(" lettuce")
  }
  
  function tomato () {
  	mySandwhich.push(" tomato")
  }
  
  function ketchup () {
  	mySandwhich.push(" ketchup")
  }
  
  function mustard () {
  	mySandwhich.push(" mustard")
  }
  
  function mayo () {
  	mySandwhich.push(" mayo")
  }
 
 function makeMeASandwich (p, l, t, k, m, may) {
  if(p === true) {
  	pickle();
  }
  if(l === true){
  	lettuce();
  }
  if(t === true){
  	tomato();
  }
  if(k === true){
  	ketchup();
  }
  if(m === true){
  	mustard();
  }
  if(may === true){
  	mayo();
  }
}




mySandwhich.push(makeMeASandwich(false, false, true));

 document.write("<p>My sandwich has a" + mySandwhich + " on it!</p>");



// var body = document.getElementById("main")
// body.innerHTML += "<p> My sandwich has" + sandwich + " on it</p>";


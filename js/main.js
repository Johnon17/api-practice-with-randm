//On load lets choose our dimension randomly and set it
fetch("https://rickandmortyapi.com/api/location")
  .then(response => response.json())
  .then(data => {
    //console log so I can see what is being returned while working on the page
    console.log(data.results)
    //console log for checking specific attributes
    console.log(data.results[Math.floor(Math.random() * (Math.floor(data.results.length - 1) - Math.ceil(0)) - Math.ceil(0))].residents.length)

    //Setting the current dimension. Randomised on page load
    let randomNumber = Math.floor(Math.random() * (Math.floor(data.results.length - 1) - Math.ceil(0)) - Math.ceil(0))
    let currentDimension = data.results[randomNumber].name
    //Push a welcome to that dimension into the page H1
    document.querySelector("h1").innerText = `Welcome to ${currentDimension}! Enjoy your stay`

    //Provide some info on the locale
    //Number of Residents
    let noOfRes = data.results[randomNumber].residents.length
    document.querySelector("h2").innerText = `We have ${noOfRes} residents`
    //Feelings towards number of people and what we get up to here
    if (noOfRes === 0) {
      document.querySelector("h3").innerText = "I'm all ALONE, there's no-one here besiiiiide me"
    } else if (noOfRes < 4) {
      document.querySelector("h3").innerText = "I Gave up my love of Doubles Tennis to move here"
    } else if (noOfRes >= 4 && noOfRes < 10) {
      document.querySelector("h3").innerText = "We have Tennis Tournies on the weekend"
    } else if (noOfRes >= 10 && noOfRes < 15) {
      document.querySelector("h3").innerText = `We love 5-a-Side soccer here on ${currentDimension}`
    } else {
      document.querySelector("h3").innerText = "Some of Y'all need to LEAVE!"
    }

  })
  .catch(err => {
    console.log(`error ${err}`)
  })
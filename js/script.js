// console.log("hello!");


// window.onload = function() {
//     const buttonJokes = document.getElementById("button-jokes");
    // const buttonTop = document.getElementById("button-top");
    // const buttonSci = document.getElementById("button-sci");
    // const buttonBusiness = document.getElementById("button-business");
    // const buttonTech = document.getElementById("button-tech");




// // CALL TO GET JOKE APIS W/ 50 JOKE LIMIT PER DAY//
//     // const options = {
//     //     method: 'GET',
//     //     headers: {
//     //         'X-RapidAPI-Key': '7429b124f9msh6d7a35f6721364cp1371f4jsn5b99dbfb7337',
//     //         'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
//     //     }
//     // };
    
//     // fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
//     //     .then(response => response.json())
//     //     .then(response => console.log(response))
//     //     .catch(err => console.error(err));


// //CALL TO GET NUMBER OF JOKES WHICH HAS UMLIMITED AMOUNT PER DAY// 
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '7429b124f9msh6d7a35f6721364cp1371f4jsn5b99dbfb7337',
//             'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
//         }
//     };
    
//     fetch('https://dad-jokes.p.rapidapi.com/joke/count', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
//https://github.com/sahithyandev/sv443-joke-api-js-wrapper#readme read me info for the api repository I'm using to fetch the jokes// 
window.onload = function(){
    const buttonJokes2 = document.getElementById("button-jokes2");
    const buttonReveal= document.getElementById('button-reveal')
    // const JokeAPI = require('sv443-joke-api');

    JokeAPI.getJokes()
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
if (buttonJokes2) {
    buttonJokes2.addEventListener("click", function() {
      console.log('howdy')
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart')
        .then(response => response.json())
        .then(data => {
            console.log(data);
                const jokeSetup2 = document.getElementById("setup-jokes2");
                const jokeDelivery2 = document.getElementById("delivery-jokes2");
                // const articleImage = document.getElementById("article-imageart");
          function show() {

            /* Access image by id and change
            the display property to block*/
            document.getElementById('button-jokes2')
                    .style.display = "block";
 
            document.getElementById('button-jokes2')
                      .style.display = "none"}
          if (jokeSetup2 && jokeDelivery2) {
            jokeSetup2.innerHTML = data.setup;
       jokeDelivery2.innerHTML = data.delivery;
    }
});
});
}
}




//     }
// }); 
            // articleImage.src =data.results[0].multimedia[0].url;
// }}}}





















        //   const articleTitle = document.getElementById("article-titleart");
        //   const articleSummary = document.getElementById("article-summaryart");
        //   const articleImage = document.getElementById("article-imageart");
        //   // console.log(multimedia)
        //   function show() {
        // const jokeButton = document.getElementById("joke-button");
        // const jokeContainer = document.createElement("div");
        
        // jokeButton.addEventListener("click", function() {
        //   fetch("https://dad-jokes.p.rapidapi.com/joke/count")
        //     .then(response => response.json())
        //     .then(data => {
        //       jokeContainer.innerHTML = data.value.joke;
        //       document.body.appendChild(jokeContainer);
        //     })
        //     .catch(error => console.error(error));
        // });



        
//put all the code within init since we want to ensure the JS is executed after loading the DOM
const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //How to get the user input; 2 ways

    // console.log(event.target);
    // console.log(event.target.children);
    // console.log(event.target.children[1]);
    // console.log(event.target.children[1].value);
    // OR
    const input = document.querySelector('input#searchByID');
    //console.log(input.value);

    //fetch data based on user input
    fetch(`http://localhost:3000/movies/${input.value}`)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');

            title.innerText = data.title;
            summary.innerText = data.summary;
        });
  });
}

document.addEventListener('DOMContentLoaded', init);
fetch('https://v2.jokeapi.dev/joke/Any')
  .then(response => response.json())
  .then(data => {
    let joke;
    if (data.type === 'single') {
      joke = data.joke;
    } else {
      joke = `${data.setup} <br> <strong>${data.delivery}</strong>`;
    }
    console.log('Joke:', joke);
    const jokeElement = document.getElementById('joke');
    jokeElement.innerHTML = joke;
  })
  .catch(error => console.error('Error fetching joke:', error));

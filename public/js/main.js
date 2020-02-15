const numberInput = document.getElementById('number'), // assigning elements to variables
    textInput = document.getElementById('msg'),
    button = document.getElementById('button'),
    response = document.querySelector('.response');

button.addEventListener('click', send, false);   // false cause no other option

function send() {
    const number = numberInput.value.replace(/\D/g, ''); // making sure there is no non-numeric characters
    const text = textInput.value;

    fetch('/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ number: number, text: text })
    })
        .then(function (res) {
            console.log(res);
        })
        .catch(function (err) {
            console.log(err)
        })
}
//create a mew tag h1
var h1 = document.createElement('h1')
//insert the text into the tag element
h1.innerText = "Type into the input to make this text change"
// Create a input element
var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})
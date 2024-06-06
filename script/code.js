document.querySelector('.Convert').addEventListener('click', () =>{
    let age = +document.querySelector('#age').value
    let output = document.querySelector('#output')

output.innerHTML = (`You are ${age * 365} days old`)
})
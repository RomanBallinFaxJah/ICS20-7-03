document.getElementById('button').addEventListener('click', agecheck)
let age

function agecheck () {
  age = document.getElementById('val1').value

  if (age >= 17) {
    document.getElementById('answer').innerHTML = 'You are able to see an R rated movie'
  } else if (age >= 13) {
    document.getElementById('answer').innerHTML = 'You are able to see a PG-13 rated movie'
  } else if (age >= 5) {
    document.getElementById('answer').innerHTML = 'You are able to see PG and G rated movies'
  } else {
    document.getElementById('answer').innerHTML = 'You are too young for movies'
  }
}

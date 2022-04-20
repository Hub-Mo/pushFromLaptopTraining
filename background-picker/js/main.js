document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('orange').onclick = partyOrange


function partyPurple() {
  document.querySelector('body').style.BackgroundImage = "url(https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fwall-background&psig=AOvVaw1EdI10zCMZoRfRMEe1RU3I&ust=1650375611941000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCOCZzbLenfcCFQAAAAAdAAAAABAE)"
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.BackgroundImage = "url('img/chair.png')";
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function partyOrange() {
  document.querySelector('body').style.backgroundColor = 'orange'
  document.querySelector('body').style.color = 'black'
}

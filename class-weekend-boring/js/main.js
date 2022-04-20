
document.querySelector('#check').addEventListener('click', theDay)

function theDay() {

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === "tuesday" || day === "thursday") {

    document.querySelector('#placeToSee').innerText = "school"

  }
  else if(day === "sunday" || day === "saturday") {
    document.querySelector('#placeToSee').innerText = "yeahh weekend"
  }
  else {
    document.querySelector('#placeToSee').innerText = "boring days"
  }
}











































// ****************************************************

// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value.toLowerCase()

//   // Conditionals go here

//   if(day === "tuesday" || day === "thursday"){
//     document.querySelector('#placeToSee').innerText = "school day"
//   }else if(day === "saturday" || day === "sunday") {
//     document.querySelector('#placeToSee').innerText = "weekeend!!!"
//   }
//   else {
//     document.querySelector('#placeToSee').innerText = "booriinngg"
//   }
// }


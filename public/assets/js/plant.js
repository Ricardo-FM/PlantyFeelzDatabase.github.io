var nameInput = $('#plantName'),
  destinationInput = $('#autocomplete'),
  methodOfTransportInput = $('#methodOfTransport'),
  arrivalDateInput = $('#datepicker')

var url = window.location.search
var plantId
var userId
// Sets a flag for whether or not we're updating a post to be false initially
var updating = false

function submitPlant(plant) {
  $.post('/plants/new', plant, function () {
    window.location.href = '/plants'
  })
}

function updatePlant(plant) {
  $.ajax({
    method: 'PUT',
    url: '/plants',
    data: plant,
  }).done(function () {
    window.location.href = '/plants'
  })
}

function handleFormSubmit(event) {
  event.preventDefault()
  // Wont submit the post if we are missing a body, title, or author
  if (
    !destinationInput.val().trim() ||
    !methodOfTransportInput.val().trim() ||
    !arrivalDateInput.val()
  ) {
    return
  }
  // Constructing a newPost object to hand to the database
  var newPlant = {
    name: nameInput.val().trim(),
    destination: destinationInput.val().trim(),
    methodOfTransport: methodOfTransportInput.val().trim(),
    arrivalDate: arrivalDateInput.val().trim(),
  }

  // If we're updating a post run updatePost to update a post
  // Otherwise run submitPost to create a whole new post
  if (updating) {
    newPlant.id = plantId
    updatePlant(newPlant)
  } else {
    submitPlant(newPlant)
  }
}

$('#plantForm').on('submit', handleFormSubmit)

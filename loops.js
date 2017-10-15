function forLoop(array) {
  
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array[i] = "I am 1 strange loop."
    }
    else {
      array[i] = "I am ${i} strange loops."
    }
  }
  return array
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  }
  return 'done'
}


function doWhileLoop(array) {

  var i = array.length

  do {

    function maybeTrue() {
      return Math.random() >= 0.5
    }

    array.splice(i--)

  } while(array.length > 0 || maybeTrue())

  return array
}

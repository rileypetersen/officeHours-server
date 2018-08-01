function processErrorMessage(err) {
  
    if (err.message) {
      switch (err.message) {
          // thrown errors land here
        default:
          return { status: 500, message: 'An internal server error has occurred.' }
      }
    }
  }
  
  module.exports = processErrorMessage
  
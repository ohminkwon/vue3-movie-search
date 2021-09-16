exports.handler= async function(event, context){
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'OHMIN KWON',
      age: 34,
      email: 'ohminkwon0720@gmail.com'
    })
  }
}
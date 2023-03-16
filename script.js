function getAPOD(data){
    $(document.createElement('img')).attr('src', data.url).appendTo('#img-container');
}


$.ajax({

    url:'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
    method:'get',
    success:getAPOD

});
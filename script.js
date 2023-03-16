function getAPOD(data){
    $(document.createElement('img')).attr('src', data.url).appendTo('#img-container');
    var title=data.title;
    $('#title').text(title);
    var date=data.date;
    $('#datep').text(date);
    $('img').width(700);
    $('#img').height(700);
}


$.ajax({

    url:'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
    method:'get',
    success:getAPOD

});
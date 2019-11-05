(function($){
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
        	Director: this["director"].value,
          Genre: this["genre"].value
        };
        $.ajax({
            url: 'https://localhost:44352/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
                console.log("Success");
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
        e.preventDefault();
    }
    $('#create-form').submit( processForm );
})(jQuery);

function getData( e ){
  $.ajax({
    url: 'https://localhost:44352/api/movie',
    dataType: 'json',
    type: 'get',
    contentType: 'application/json',
    success: function( data, textStatus, jQxhr ){
        console.log(data);
        $("p").append(data);
    },
    error: function( jqXhr, textStatus, errorThrown ){
        console.log("Didnt work" );
    }
  });
}
$("getData").submit( getData );

function getSpecificData( e ){
  var movieId = $("#movieId").val();
  //var movieId = document.getElementById('movieId').value;
  $.ajax({
    url: 'https://localhost:44352/api/movie/'+ movieId,
    dataType: 'json',
    type: 'get',
    contentType: 'application/json',
    success: function( data, textStatus, jQxhr ){
        console.log(data);
    },
    error: function( jqXhr, textStatus, errorThrown ){
        console.log("Didnt work" );
    }
  });
}
$("getSpecificData").submit(getSpecificData);

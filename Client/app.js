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

    $('#allMovies').html('');
    $("#allMovies").append("MovieID |");
    $("#allMovies").append("Title |");
    $("#allMovies").append(" Director |");
    $("#allMovies").append(" Genre");
    $("#allMovies").append("<br />");
    $("#allMovies").append("<br />");
    for(i=0; i<data.length; i++){
      var btn = document.createElement("BUTTON");
      $("#allMovies").append(data[i].MovieId + " | ");
      $("#allMovies").append(data[i].Title + " | ");
      $("#allMovies").append(data[i].Director + " | ");
      $("#allMovies").append(data[i].Genre + " | ");
      //$("#allMovies").append("<button onClick='updateMovie(" + data[i].movieId + ")'>Edit</button>");
      $("#allMovies").append("<br />");
      $("#allMovies").append("<br />");
    }
  },
  error: function( jqXhr, textStatus, errorThrown ){
      console.log("Didnt work" );
  }
});

}
$("getData").submit( getData );

function getSpecificData( e ){
var movieId = $("#movieId").val();
$.ajax({
  url: 'https://localhost:44352/api/movie/'+ movieId,
  dataType: 'json',
  type: 'get',
  contentType: 'application/json',
  success: function( data, textStatus, jQxhr ){
    $("#movie").append(data.Title + " ");
    $("#movie").append(data.Director + " ");
    $("#movie").append(data.Genre);
      console.log(data);
  },
  error: function( jqXhr, textStatus, errorThrown ){
      console.log("Didnt work" );
  }
});
}
$("getSpecificData").submit(getSpecificData);

function updateMovie( ){
var dict = {
  MovieId : document.getElementById("updateId").value,
  Title : document.getElementById("title").value,
  Director : document.getElementById("director").value,
  Genre : document.getElementById("genre").value
};
var movieId = document.getElementById("updateId").value;
$.ajax({
  url: 'https://localhost:44352/api/movie/' + movieId,
  dataType: 'json',
  type: 'put',
  contentType: 'application/json',
  data: JSON.stringify(dict),
  success: function( data, textStatus, jQxhr ){
    console.log("working");

  },
  error: function( jqXhr, textStatus, errorThrown ){
      console.log("Didnt work" );
  }
});
}
$("edit-form").submit(updateMovie);
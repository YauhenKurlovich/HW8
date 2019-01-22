$("#count").click(function(){
    $.ajax({
        url: 'https://services.odata.org/V4/(S(acze1vtlgzqgqwuyfzdby2wy))/TripPinServiceRW/Photos/$count',
        success: function(countPhotos){
          alert(countPhotos + ' photos');
        }
      });
})

$("#selectAll").click(function(){
    $.ajax({
        url: 'https://services.odata.org/V4/(S(acze1vtlgzqgqwuyfzdby2wy))/TripPinServiceRW/Photos',
        success: function(Photos){
             $("#tableBody").empty();
            for (var i = 0; i < Photos.value.length; i++) {
                display(Photos.value[i]);
            }
        }
      });
})

$("#orderASC").click(function(){
    $.ajax({
        url: 'https://services.odata.org/V4/(S(acze1vtlgzqgqwuyfzdby2wy))/TripPinServiceRW/Photos?$orderby=Id',
        success: function(Photos){
             $("#tableBody").empty();
            for (var i = 0; i < Photos.value.length; i++) {
                display(Photos.value[i]);
            }
        }
      });
})

$("#orderDESC").click(function(){
    $.ajax({
        url: 'https://services.odata.org/V4/(S(acze1vtlgzqgqwuyfzdby2wy))/TripPinServiceRW/Photos?$orderby=Id desc',
        success: function(Photos){
             $("#tableBody").empty();
            for (var i = 0; i < Photos.value.length; i++) {
                display(Photos.value[i]);
            }
        }
      });
})

$("#getTop").click(function(){
    $.ajax({
        url: 'https://services.odata.org/V4/(S(acze1vtlgzqgqwuyfzdby2wy))/TripPinServiceRW/Photos?$top='+$("#topCount").val(),
        success: function(Photos){
             $("#tableBody").empty();
            for (var i = 0; i < Photos.value.length; i++) {
                display(Photos.value[i]);
            }
        }
      });
})

$("#getSkip").click(function(){
    $.ajax({
        url: 'https://services.odata.org/V4/(S(acze1vtlgzqgqwuyfzdby2wy))/TripPinServiceRW/Photos?$skip='+$("#skipCount").val(),
        success: function(Photos){
             $("#tableBody").empty();
            for (var i = 0; i < Photos.value.length; i++) {
                display(Photos.value[i]);
            }
        }
      });
})

$("#getSkip").click(function(){
    $.ajax({
        url: 'https://services.odata.org/V4/(S(acze1vtlgzqgqwuyfzdby2wy))/TripPinServiceRW/Photos?$skip='+$("#skipCount").val(),
        success: function(Photos){
             $("#tableBody").empty();
            for (var i = 0; i < Photos.value.length; i++) {
                display(Photos.value[i]);
            }
        }
      });
})

$("#getFilter").click(function(){
    $.ajax({
        url: 'https://services.odata.org/V4/(S(acze1vtlgzqgqwuyfzdby2wy))/TripPinServiceRW/Photos?$filter=Id ge '+$("#gt").val(),
        success: function(Photos){
             $("#tableBody").empty();
            for (var i = 0; i < Photos.value.length; i++) {
                display(Photos.value[i]);
            }
        }
      });
})

$("#Filterx3").click(function(){
    $.ajax({
        url: 'https://services.odata.org/V4/(S(acze1vtlgzqgqwuyfzdby2wy))/TripPinServiceRW/Photos?$filter=Id ge '+$("#ge").val() + ' and Id ne ' +$("#ne").val() + ' and Id le ' + $("#le").val(),
        success: function(Photos){
             $("#tableBody").empty();
            for (var i = 0; i < Photos.value.length; i++) {
                display(Photos.value[i]);
            }
        }
      });
})

$("#Paramsx3").click(function(){
    $.ajax({
        url: 'https://services.odata.org/V4/(S(acze1vtlgzqgqwuyfzdby2wy))/TripPinServiceRW/Photos/?$select=Id,Name&&$filter=Id ge '+$("#f").val() + '&&$skip=' +$("#s").val() + '&&$top=' + $("#t").val(),
        success: function(Photos){
             $("#tableBody").empty();
            for (var i = 0; i < Photos.value.length; i++) {
                display(Photos.value[i]);
            }
        }
      });
})

$("#Search").click(function(){
    $.ajax({
        url: 'https://services.odata.org/V4/(S(acze1vtlgzqgqwuyfzdby2wy))/TripPinServiceRW/Photos?$search=' + $("#nf").val() ,
        success: function(Photos){
             $("#tableBody").empty();
            for (var i = 0; i < Photos.value.length; i++) {
                display(Photos.value[i]);
            }
            alert("Service is BAD (Search for Photos is not work, but work with another entity)");
        }
      });
})

display = function (data) {
    $("#tableBody").append("<tr><td>" + data.Id + "</td><td>" + data.Name + "</td></tr>");
}
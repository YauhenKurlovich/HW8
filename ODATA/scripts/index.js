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

display = function (data) {
    $("#tableBody").append("<tr><td>" + data.Id + "</td><td>" + data.Name + "</td></tr>");
}
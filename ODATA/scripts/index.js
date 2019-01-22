$("#count").click(function(){
    $.ajax({
        url: 'https://services.odata.org/V4/(S(acze1vtlgzqgqwuyfzdby2wy))/TripPinServiceRW/Photos/$count',
        success: function(countPhotos){
          alert(countPhotos + ' photos');
        },
        error: function(){
            alert("Some Error");
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
        },
        error: function(){
            alert("Some Error");
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
        },
        error: function(){
            alert("Some Error");
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
        },
        error: function(){
            alert("Some Error");
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
        },
        error: function(){
            alert("Some Error");
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
        },
        error: function(){
            alert("Some Error");
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
        },
        error: function(){
            alert("Some Error");
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
        },
        error: function(){
            alert("Some Error");
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
        },
        error: function(){
            alert("Some Error");
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

$("#expand").click(function(){
    $.ajax({
        url: 'https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/Photos?$expand=People',
        success: function(Photos){
             $("#tableBody").empty();
        },
        error: function(){
            alert("Service is BAD (Expand for People is not work)");
        }
        
      });
})

display = function (data) {
    $("#tableBody").append("<tr><td>" + data.Id + "</td><td>" + data.Name + "</td></tr>");
}
$(document).ready(function(){
     
    $('#submitWeather').click(function(){
        var city = $("#city").val(); 

        if(city != '')
        {
            $.ajax({

                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" +
                "&APPID=57d2ba81858a9b577750619de29a5bc0",
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    var widget = show(data);
                    $("#show").html(widget);
                    $("#city").val('');
                    
                }  

            });
        }
         
        else
        {
            $("#error").html('** Field cannot be empty'); 
        }


    });
 
    


});

function show(data)
{
    return "<h2 style='font-size:40px; font-weight:bold; font-style:italic;'>Current Weather for " + data.name + "," + data.sys.country + "</h2>" +
           "<h5><strong>Weather</strong>: "+ data.weather[0].main +"</h5>" +
           "<h5><strong>Description</strong>: <img src='http://openweathermap.org/img/wn/"+ data.weather[0].icon  +".png'>" + data.weather[0].description +"</h5>" +
           "<h5><strong>Min_Pressure</strong>: "+ data.main.pressure+"</h5>" +
           "<h5><strong>Humidity</strong>: "+ data.main.humidity+"</h5>" + 
           "<h5><strong>Wind_Speed</strong>: "+ data.wind.speed+"</h5>" +
           "<h5><strong>Wind_Deg</strong>: "+ data.wind.deg+"&deg;hPa</h5>" +
           "<h5><strong>Min_temp</strong>: "+ data.main.temp_min+" &deg;C</h5>" +
           "<h5><strong>Max_temp</strong>: "+ data.main.temp_max+" &deg;C</h5>";
           


}
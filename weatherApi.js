const request = require('request');

var data={};
var weather =(city)=>{
request({
    url:`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d0794a7b530dd0005fda4a8be94dbe2`,
    json:true
},(error, response,body)=>{
    if(error){
        console.log("No Internet");
    }else{
        data={
            long:body.coord.lon,
            lat:body.coord.lat
        }
    }
})

//Dark Sky Api (Forecast.io Api)
request({
    url:`https://api.darksky.net/forecast/5c7fc1f8fe7dfc9211aab2f1426e06d9/${data.lat},${data.long}`,
    json:true
},(error,response,body)=>{
    console.log(JSON.stringify(body,undefined,2));
    return body;
})
};
module.exports={
    weather
}
// temp ,windspeed,cloud-cover,visbility,preasure,humidity,
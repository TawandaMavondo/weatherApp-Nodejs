
var sendAjax = ()=>{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState===4){
            console.log("Tawa");
            console.log(xhr.responseText);
        }
    }
    xhr.open('GET','/data');
    xhr.send();
}
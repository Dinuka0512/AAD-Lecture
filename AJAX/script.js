function btnClick(){
    console.log("Request Stsrted");
    const http = new XMLHttpRequest();
    console.log(http.readyState, "After the XMLHttpRequest object created");

    http.open("GET", "db.txt");
    console.log(http.readyState, "After the XMLHttpRequest Object opened");
    
    http.send();
    console.log(http.readyState, "After the send methord invoked");
    
    http.onreadystatechange = function(){
        console.log(http.readyState, "Inside On ready stage change event");
        console.log(http.responseText);
        document.getElementById("paragraph").innerText = http.responseText;
    }

    console.log("Request Finnished");
}
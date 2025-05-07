function btnClick(){
    console.log("Request Stsrted");
    const http = new XMLHttpRequest();
    console.log(http.readyState, "After the XMLHttpRequest object created");

    http.open("GET", "database.json");
    console.log(http.readyState, "After the XMLHttpRequest Object opened");
    
    http.send();
    console.log(http.readyState, "After the send methord invoked");
    
    http.onreadystatechange = function(){
        console.log(http.readyState, "Inside On ready stage change event");
        console.log(http.responseText);

        if(http.readyState === 4){
            // Assuming http.responseText is your JSON response string
            let response = JSON.parse(http.responseText);

            // document.getElementById("table").innerText = response.frist;
            // // document.getElementById("lname").innerText = response.last;
            // // document.getElementById("age").innerText = response.age;

            let newRow = document.createElement("tr");
            let fname = document.createElement("td");
            fname.innerText = response.frist;

            let lName = document.createElement("td");
            lName.innerText = response.last;

            let age = document.createElement("td");
            age.innerText = response.age;

            newRow.appendChild(fname);
            newRow.appendChild(lName);
            newRow.appendChild(age);

            console.log(fname);
            console.log(lName);
            console.log(age);

            console.log(newRow)

            document.getElementById("tbody").append(newRow);
        }
    }

    console.log("Request Finnished");
}
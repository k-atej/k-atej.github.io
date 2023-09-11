$(document).ready(function(){
    var $red = $("#red");
    var $yellow = $("#yellow");
    var $green = $("#green");

    var $button = $(".button");
    var status = "red";
    change(status);

    $button.click(function() {
        console.log("click");
        console.log(status);
        if (status == "red") {
            status = "yellow";
            change(status);
        }
        else if (status == "yellow") {
            status = "green";
            change(status);
        }
        else if (status == "green") {
            status = "red";
            change(status);
        }
    })

    $red.click(function() {
        status = "red";
        console.log("clicked red!");
        change(status);
    })

    $yellow.click(function() {
        status = "yellow";
        console.log("clicked yellow!");
        change(status);
    })

    $green.click(function() {
        status = "green";
        console.log("clicked green!");
        change(status);
    })

    function change(status) {
        if (status == "red") {
            $red.get(0).style.setProperty("background-color", "red");
            $yellow.get(0).style.setProperty("background-color", "lightgrey");
            $green.get(0).style.setProperty("background-color", "lightgrey");
        }
        else if (status == "yellow") {
            $yellow.get(0).style.setProperty("background-color", "yellow");
            $green.get(0).style.setProperty("background-color", "lightgrey");
            $red.get(0).style.setProperty("background-color", "lightgrey");
        }
        else if (status == "green") {
            $green.get(0).style.setProperty("background-color", "green");
            $yellow.get(0).style.setProperty("background-color", "lightgrey");
            $red.get(0).style.setProperty("background-color", "lightgrey");
        }
    }
    


});
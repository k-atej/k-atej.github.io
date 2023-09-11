
$(document).ready(function(){

    // yes/no api: https://yesno.wtf/api 


    var $yesno = $("#yesno");
    var $button = $("#trivia");
    $yesno.click(function() {

        $.ajax({
            dataType: "json",
            url: "https://yesno.wtf/api",
            success: function(results) {
                var decision = results;
                console.log(decision.answer);
                $("#maybe").text(decision.answer);
                $("#maybe").html('<em><strong>' + $("#maybe").html() + '</strong></em>')

                // if decision is yes...

                if (decision.answer == "yes") {
                    $button.text("Try it!");
                    $("h2").text("Let's Play!");
                    $button.click(function() {
                        console.log("click");


                        // this is the API (below) -- try to avoid "jsonp", instead go for open json
                        $.ajax({
                            dataType: "json",
                            url: "https://opentdb.com/api.php?amount=10&type=multiple",
                            success: function(results) {
                                var allResults = results;

                                console.log("success");
                                console.log(allResults.results.length);
                                console.log(allResults.results[2]);
                                console.log(allResults.results[2].category);

                                $("#1cat").text(allResults.results[0].category);
                                $("#2cat").text(allResults.results[1].category);
                                $("#3cat").text(allResults.results[2].category);
                                $("#4cat").text(allResults.results[3].category);
                                $("#5cat").text(allResults.results[4].category);

                                $("#1q").text(decodeHTML(allResults.results[0].question));
                                $("#2q").text(decodeHTML(allResults.results[1].question));
                                $("#3q").text(decodeHTML(allResults.results[2].question));
                                $("#4q").text(decodeHTML(allResults.results[3].question));
                                $("#5q").text(decodeHTML(allResults.results[4].question));

                                $("#1ans").text(decodeHTML(allResults.results[0].correct_answer));
                                $("#2ans").text(decodeHTML(allResults.results[1].correct_answer));
                                $("#3ans").text(decodeHTML(allResults.results[2].correct_answer));
                                $("#4ans").text(decodeHTML(allResults.results[3].correct_answer));
                                $("#5ans").text(decodeHTML(allResults.results[4].correct_answer));

                            },
                            error: function(xhr,status,error) {
                                console.log(error);
                            }
                        })
                    });

                }
                else if (decision.answer == "no") {
                    $button.text("NO");
                    $("h2").text("Refresh to try again!");

                    $(".table").remove();
                }
    

              },
              error: function(xhr,status,error) {
                console.log(error);
              }
        })
    });
    
});

var decodeHTML = function (html) {
	var txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};
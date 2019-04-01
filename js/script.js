$(document).ready(function(){
    $("#submit").click(function(){

        var answer1 = $("input[name='question1']:checked").val();
        var answer2 = $("input[name='question2']:checked").val();
        var answer3 = $("input[name='question3']:checked").val();
        var answer4 = $("input[name='question4']:checked").val();
        var answer5 = $("input[name='question5']:checked").val();
        var answer6 = $("input[name='question6']:checked").val();
 
        var totalMarks = 0

        if (answer1 == $("#spn").val()) {
            totalMarks++
        };

        if (answer2 == $("#boolean").val()) {
            totalMarks++
        };

        if (answer3 == $("#HTML").val()) {
            totalMarks++
        };

        if (answer4 == $("#content").val()) {
            totalMarks++
        };

        if (answer5 == $("#programming").val()) {
            totalMarks++
        };

        if (answer6 == $("#script").val()) {
            totalMarks++
        };
         var total = (totalMarks/6) *100;
         alert(total);
    })
})
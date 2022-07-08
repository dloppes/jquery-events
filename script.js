$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        //  $(".stream1").hide();
         $(".stream1").toggle("slow");
        // $(".stream1").hide('slow');
        //  $(".stream1").show('slow');
        // $(".stream1").show('medium');
        // $(".stream1").show('fast');
        // $(".stream1").show(1000);
    });
//     $("#stream1_btn").on("click", function() {
//         $(".stream1").removeClass('highlight_stream');
//         $(".stream2").removeClass('highlight_stream');
//         $(".stream3").removeClass('highlight_stream');
//         $(".stream1").addClass('highlight_stream');
//    });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 
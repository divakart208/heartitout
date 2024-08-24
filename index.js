function submit() {
    alert("are you sure to submit?");
}

function slider() {
    alert("moving to the next slide")
}
$('#myButton').bind("click", function() {
    $('#myDiv').toggle("slow")
});

$('#myButton2').bind("click", function() {
    $('#myDiv2').toggle('slow')
});

$('#myButton3').bind("click", function() {
    $('#myDiv3').toggle('slow')
});
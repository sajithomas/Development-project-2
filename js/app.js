function goBack() {
    window.history.back();
}

$(document).ready(function()
{

    $("#btn1").click(function(){
        $(".button").animate({height: "100px"});
    });

    $(".button").click( function()
        {
            alert('button clicked');
        }
    );

});

$(document).ready(function(){
    $(".imagesContainer").click(function(){
        alert("Image Clicked");
    });
});

$(document).ready(function(){
    $("#resume").click(function(){
        $("#marq").toggleClass("main");
    });
});


$('div').each(function (index, value) {
    console.log($(this).attr('id'));
});

$(document).ready(function(){
    $("#resume").hover(function(){
        $("#resume").html("Click here to download Resume");
    })

});

$('button#resume').click(function() {

    document.getElementById(draggable).style.visibility = "visible";
    document.getElementById(droppable).style.visibility = "visible";

});

$( init );
function init() {
    $('#draggable').draggable();
    $('#droppable').droppable( {
        drop: handleDropEvent
    } );
}

function handleDropEvent( event, ui ) {
    var draggable = ui.draggable;

    location.href = './resume.pdf';
    // alert( 'Dropped' );
}

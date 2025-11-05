var makes = [];
var misses = [];
var retVal = -1;
var x = 0
var y = 0

// assign make miss retVals
$(".make, .miss").on("click", function(event) {
    event.stopPropagation(); // prevents the background click from firing
    retVal = $(this).hasClass("make") ? 1 : 0;
    makeOrMiss();
    hide();
});

// showing all shots
$(".map").on("click", function() {
   $(".shot").toggle();
});

function makeOrMiss() {
    if (retVal === 0) {
        var img = $('<img class="shot hide" src="./images/miss.png">');
        img.css({top: (y-15)+"px", left: (x-15)+"px"});
        $(".imgbg").append(img);
    }
    else if (retVal === 1) {
        makes.push([x,y]);
        var img = $('<img class="shot hide" src="./images/make.png">');
        img.css({top: (y-15)+"px", left: (x-15)+"px"});
        $(".imgbg").append(img);
    }
}

function hide() {
    $(".selector").addClass("hide");
}

$(".imgbg").on("click", function(event) {
    var offset = $(this).offset();
    x = event.pageX - offset.left;
    y = event.pageY - offset.top;
    $(".selector").css({top: y+"px", left: x+"px"})
    $(".selector").removeClass("hide");
   
});
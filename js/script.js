$(document).ready(function() {
    $(".designco").click(function() {
        $(".designco").slideDown('1400').hide('1000');
        $(".paragraph1").show('1400');
    });
    $(".paragraph1").click(function() {
        $(".paragraph1").slideUp('1400');
        $(".designco").slideDown('1400');
    });
});

$(document).ready(function() {
    $(".devco").click(function() {
        $(".devco").slideDown('1400').hide('1000');
        $(".paragraph2").show('1400');
    });
    $(".paragraph2").click(function() {
        $(".paragraph2").slideUp('1400');
        $(".devco").slideDown('1400');
    });
});

$(document).ready(function() {
    $(".proco").click(function() {
        $(".proco").slideDown('1400').hide('1000');
        $(".paragraph3").show('1400');
    });
    $(".paragraph3").click(function() {
        $(".paragraph3").slideUp('1400');
        $(".proco").slideDown('1400');
    });
});

$(document).ready(function(){
    $(".asset4").mouseover(function(){
        $(".work4").show();
    }).mouseout(function(){
        $(".work4").hide();
    });
});
$(document).ready(function(){
    $(".asset3").mouseover(function(){
        $(".work3").show();
    }).mouseout(function(){
        $(".work3").hide();
    });
});
$(document).ready(function(){
    $(".asset2").mouseover(function(){
        $(".work2").show();
    }).mouseout(function(){
        $(".work2").hide();
    });
});
$(document).ready(function(){
    $(".asset1").mouseover(function(){
        $(".work1").show();
    }).mouseout(function(){
        $(".work1").hide();
    });
});
$(document).ready(function(){
    $(".asset5").mouseover(function(){
        $(".work5").show();
    }).mouseout(function(){
        $(".work5").hide();
    });
});
$(document).ready(function(){
    $(".asset6").mouseover(function(){
        $(".work6").show();
    }).mouseout(function(){
        $(".work6").hide();
    });
});
$(document).ready(function(){
    $(".asset7").mouseover(function(){
        $(".work7").show();
    }).mouseout(function(){
        $(".work7").hide();
    });
});
$(document).ready(function(){
    $(".asset8").mouseover(function(){
        $(".work8").show();
    }).mouseout(function(){
        $(".work8").hide();
    });
});

function myFunction(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name == "" || email == "" || message == ""){
    alert ("Please enter your name, email and add a commment!");
    }
    else alert( name + " ,thanks for your replying.");
    }

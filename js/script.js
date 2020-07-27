$(document).ready(function() {
    $(".class1").click(function() {
        $(".designco").slideDown('1400').hide('1000');
        $("paragraph1").show('1400');
    });
    $(".paragraph1").click(function() {
        $(".paragraph1").slideUp('1400');
        $(".designco").slideDown('1400');
    });
});

$(document).ready(function() {
    $(".class2").click(function() {
        $(".devco").slideDown('1400').hide('1000');
        $("paragraph2").show('1400');
    });
    $(".paragraph2").click(function() {
        $(".paragraph2").slideUp('1400');
        $(".devco").slideDown('1400');
    });
});

$(document).ready(function() {
    $(".class3").click(function() {
        $(".proco").slideDown('1400').hide('1000');
        $("paragrapg3").show('1400');
    });
    $(".paragraph3").click(function() {
        $(".paragraph3").slideUp('1400');
        $(".proco").slideDown('1400');
    });
});

$(".asset1").hover(
    function () {
        $(".asset1").show("");
    },
    function () {
        $(".asset1").hide("");
    }
);

$(".asset2").hover(
    function () {
        $(".asset2").show("");
    },
    function () {
        $(".asset2").hide("");
    }
);

$(".asset3").hover(
    function () {
        $(".asset3").show("");
    },
    function () {
        $(".asset3").hide("");
    }
);

$(".asset4").hover(
    function () {
        $(".asset4").show("");
    },
    function () {
        $(".asset4").hide("");
    }
);

$(".asset5").hover(
    function () {
        $(".asset5").show("");
    },
    function () {
        $(".asset5").hide("");
    }
);

$(".asset6").hover(
    function () {
        $(".asset6").show("");
    },
    function () {
        $(".asset6").hide("");
    }
);

$(".asset7").hover(
    function () {
        $(".asset7").show("");
    },
    function () {
        $(".asset7").hide("");
    }
);

$(".asset8").hover(
    function () {
        $(".asset8").show("");
    },
    function () {
        $(".asset8").hide("");
    }
);

function myFunction(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name == "" || email == "" || message == ""){
    alert ("Please enter your name, email and add a commment!");
    }
    else alert( name + " ,thanks for your replying.");
    }
    
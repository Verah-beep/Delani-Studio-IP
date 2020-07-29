$(document).ready(function() {
<<<<<<< HEAD
    $(".designco").click(function() {
        $(".designco").slideDown('1400').hide('1000');
        $(".paragraph1").show('1400');
=======
    $(".class1").click(function() {
        $(".designco").slideDown('1400').hide('1000');
        $("paragraph1").show('1400');
>>>>>>> 16792ae08663002d692f2ef21b5bf8bfa0e70ea0
    });
    $(".paragraph1").click(function() {
        $(".paragraph1").slideUp('1400');
        $(".designco").slideDown('1400');
    });
});

$(document).ready(function() {
<<<<<<< HEAD
    $(".devco").click(function() {
        $(".devco").slideDown('1400').hide('1000');
        $(".paragraph2").show('1400');
=======
    $(".class2").click(function() {
        $(".devco").slideDown('1400').hide('1000');
        $("paragraph2").show('1400');
>>>>>>> 16792ae08663002d692f2ef21b5bf8bfa0e70ea0
    });
    $(".paragraph2").click(function() {
        $(".paragraph2").slideUp('1400');
        $(".devco").slideDown('1400');
    });
});

$(document).ready(function() {
<<<<<<< HEAD
    $(".proco").click(function() {
        $(".proco").slideDown('1400').hide('1000');
        $(".paragraph3").show('1400');
=======
    $(".class3").click(function() {
        $(".proco").slideDown('1400').hide('1000');
        $("paragrapg3").show('1400');
>>>>>>> 16792ae08663002d692f2ef21b5bf8bfa0e70ea0
    });
    $(".paragraph3").click(function() {
        $(".paragraph3").slideUp('1400');
        $(".proco").slideDown('1400');
    });
});

<<<<<<< HEAD
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
=======
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
>>>>>>> 16792ae08663002d692f2ef21b5bf8bfa0e70ea0

function myFunction(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name == "" || email == "" || message == ""){
    alert ("Please enter your name, email and add a commment!");
    }
    else alert( name + " ,thanks for your replying.");
    }
<<<<<<< HEAD
    


// $(document).ready(function () {
//     $(".class1").click(function () {
//       $(".delan1").toggle();
//       $(".paragraph1").toggle();
//     });
//     $(".class2").click(function () {
//       $(".delan2").toggle();
//       $(".paragraph2").toggle();
//     });
//     $(".class3").click(function () {
//       $(".delan3").toggle();
//       $(".paragraph3").toggle();
//     });
//     $(".asset1").hover(
//       function () {
//         $(".work1").show("");
//       },
//       function () {
//         $(".work1").hide("");
//       }
//     );
//     $(".asset2").hover(
//       function () {
//         $(".work2").show("");
//       },
//       function () {
//         $(".work2").hide("");
//       }
//     );
//     $(".asset3").hover(
//       function () {
//         $(".work3").show("");
//       },
//       function () {
//         $(".work3").hide("");
//       }
//     );
//     $(".asset4").hover(
//       function () {
//         $(".work4").show("");
//       },
//       function () {
//         $(".work4").hide("");
//       }
//     );
//     $(".asset5").hover(
//       function () {
//         $(".work5").show("");
//       },
//       function () {
//         $(".work5").hide("");
//       }
//     );
//     $(".asset6").hover(
//       function () {
//         $(".work6").show("");
//       },
//       function () {
//         $(".work6").hide("");
//       }
//     );
//     $(".asset7").hover(
//       function () {
//         $(".work7").show("");
//       },
//       function () {
//         $(".work7").hide("");
//       }
//     );
//     $(".asset8").hover(
//       function () {
//         $(".work8").show("");
//       },
//       function () {
//         $(".pt8").hide("");
//       }
//     );
//   });
//   function myFunction(){
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("message").value;
//     if (name == "" || email == "" || message == ""){
//     alert ("Please enter your name, email and add a commment!");
//     }
//     else alert( name + " ,thanks for your message, it is well received.");
//     }
=======
    
>>>>>>> 16792ae08663002d692f2ef21b5bf8bfa0e70ea0

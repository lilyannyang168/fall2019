/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

$(document).ready(function() {
  


$("#a").mouseover('click touchstart', function() {
  $("hr.line1b").animate({
    opacity: 1,
    "margin-top": '-228px',
  }, 1000);
    $(".line1a").animate({
    opacity: 1,
    "top": '34px',
  }, 500);
    $(".line1d").animate({
    opacity: 1,
    "top": '34px',
  }, 500);
    $("hr.line1").animate({
    opacity: 0,
  }, 1000);
}).mouseout('click touchstart', function () {
  $("hr.line1b").animate({
    opacity: 0,
    "margin-top": '-30px',
  }, 10000);
      $(".line1a").animate({
    opacity: 0,

  }, 2000);
    $(".line1d").animate({
    opacity: 0,

  }, 2000);
      $("hr.line1").animate({
    opacity: 1,
  }, 2000);

});
  

  
$("#b").mouseover('click touchstart', function() {
  $("hr.line2b").animate({
    opacity: 1,
    "margin-top": '0px',
  }, 1000);
    $("hr.line2e").animate({
    opacity: 1,
    "margin-top": '212px',
  }, 100);
    $(".line2a").animate({
    opacity: 1,
    "top": '34px',
  }, 500);
    $(".line2d").animate({
    opacity: 1,
    "top": '34px',
  }, 500);
      $("hr.line2").animate({
    opacity: 0,
  }, 1000);
}).mouseout('click touchstart', function () {
  $("hr.line2b").animate({
    opacity: 0,
    "margin-top": '30px',
  }, 6000);
    $(".line2a").animate({
    opacity: 0,

  }, 2000);
    $(".line2d").animate({
    opacity: 0,

  }, 2000);
      $("hr.line2").animate({
    opacity: 1,
  }, 2000);
});

  
  
$("#c").mouseover('click touchstart', function() {
  $("hr.line3b").animate({
    opacity: 1,
    "margin-top": '0px',
  }, 1000);
      $(".line3a").animate({
    opacity: 1,
    "top": '34px',
  }, 500);
        $(".line3c").animate({
    opacity: 1,
    "top": '34px',
  }, 500);
    $(".line3e").animate({
    opacity: 1,
    "top": '216px',
  }, 500);
      $("hr.line3").animate({
    opacity: 0,
  }, 1000);
}).mouseout('click touchstart', function () {
  $("hr.line3b").animate({
    opacity: 0,
    "margin-top": '228px',
  }, 4000);
    $(".line3a").animate({
    opacity: 0,

  }, 2000);
    $(".line3c").animate({
    opacity: 0,

  }, 2000);
      $(".line3e").animate({
    // "margin-top": '432px',
    opacity: 0,
  }, 2000);
      $("hr.line3").animate({
    opacity: 1,
  }, 2000);
});

  

$("#d").mouseover('click touchstart', function() {
  $("hr.line4b").animate({
    opacity: 1,
    "margin-top": '0px',
  }, 1000);
    $("hr.line4d").animate({
    opacity: 1,
    "margin-top": '32px',
  }, 1000);
    $("hr.line4f").animate({
    opacity: 1,
    "margin-top": '180px',
  }, 1000);
        $(".line4a").animate({
    opacity: 1,
    "top": '34px',
  }, 500);
        $(".line4c").animate({
    opacity: 1,
    "top": '34px',
  }, 500);
    $(".line4e").animate({
    opacity: 1,
    "top": '72px',
  }, 500);
      $("hr.line4").animate({
    opacity: 0,
  }, 1000);
}).mouseout('click touchstart', function () {
  $("hr.line4b").animate({
    opacity: 0,
    "margin-top": '228px',
  }, 6000);
    $("hr.line4d").animate({
    opacity: 0,
    "margin-top": '228px',
  }, 6000);
      $(".line4a").animate({
    opacity: 0,

  }, 2000);
    $(".line4c").animate({
    opacity: 0,

  }, 2000);
      $(".line4e").animate({
    // "margin-top": '432px',
    opacity: 0,
  }, 2000);
      $("hr.line4").animate({
    opacity: 1,
  }, 2000);
});
  
  
  
$("#e").mouseover('click touchstart', function() {
  $("hr.line5b").animate({
    opacity: 1,
    "margin-top": '0px',
  }, 1000);
    $("hr.line5c").animate({
    opacity: 1,
    "margin-top": '180px',
  }, 1000);
    $("hr.line5d").animate({
    opacity: 1,
    "margin-top": '28px',
  }, 1000);
      $(".line5a").animate({
    opacity: 1,
    "top": '34px',
  }, 500);
      $("hr.line5").animate({
    opacity: 0,
  }, 1000);
}).mouseout('click touchstart', function () {
  $("hr.line5b").animate({
    opacity: 0,
    "margin-top": '228px',
  }, 10000);
    $("hr.line5c").animate({
    opacity: 0,
    "margin-top": '0px',
  }, 6000);
      $("hr.line5d").animate({
    opacity: 0,
    "margin-top": '0px',
  }, 4000);
        $(".line5a").animate({
    opacity: 0,

  }, 2000);
      $("hr.line5").animate({
    opacity: 1,
  }, 2000);
});
  
  
  
$("#f").mouseover('click touchstart', function() {
  $("hr.line6b").animate({
    opacity: 1,
    "margin-top": '0px',
  }, 1000);
    $("hr.line6c").animate({
    opacity: 1,
    "margin-top": '180px',
  }, 1000);
    $("hr.line6d").animate({
    opacity: 1,
    "margin-top": '28px',
  }, 1000);
        $(".line6a").animate({
    opacity: 1,
    "top": '34px',
  }, 500);
      $("hr.line6").animate({
    opacity: 0,
  }, 1000);
}).mouseout('click touchstart', function () {
  $("hr.line6b").animate({
    opacity: 0,
    "margin-top": '228px',
  }, 10000);
    $("hr.line6c").animate({
    opacity: 0,
    "margin-top": '0px',
  }, 6000);
      $("hr.line6d").animate({
    opacity: 0,
    "margin-top": '0px',
  }, 4000);
          $(".line6a").animate({
    opacity: 0,

  }, 2000);
      $("hr.line6").animate({
    opacity: 1,
  }, 2000);
});
  
  
  
$("#g").mouseover('click touchstart', function() {
  $("hr.line7b").animate({
    opacity: 1,
    "margin-top": '0px',
  }, 1000);
    $("hr.line7f").animate({
    opacity: 1,
    "margin-top": '32px',
  }, 1000);
    $(".line7a").animate({
    opacity: 1,
    "top": '34px',
  }, 500);
      $(".line7e").animate({
    opacity: 1,
    "top": '216px',
  }, 500);
      $("hr.line7").animate({
    opacity: 0,
  }, 1000);
}).mouseout('click touchstart', function () {
  $("hr.line7b").animate({
    opacity: 0,
    "margin-top": '200px',
  }, 14000);
    $("hr.line7d").animate({
    opacity: 0,
    "margin-top": '1px',
  }, 10000);
      $("hr.line7f").animate({
    opacity: 0,
    "margin-top": '50px',
  }, 4000);
    $(".line7a").animate({
    opacity: 0,

  }, 2000);
      $(".line7e").animate({
    opacity: 0,

  }, 2000);
      $("hr.line7").animate({
    opacity: 1,
  }, 2000);
});


  

  


$("#h").mouseover('click touchstart', function() {
  $("hr.line8b").animate({
    opacity: 1,
    "margin-top": '-42px',
  }, 1000);
      $(".line8a").animate({
    opacity: 1,
    "top": '34px',
  }, 500);
      $(".line8c").animate({
    opacity: 1,
    "top": '34px',
  }, 500);
      $("hr.line8").animate({
    opacity: 0,
  }, 1000);
}).mouseout('click touchstart', function () {
  $("hr.line8b").animate({
    opacity: 0,
    "margin-top": 0,
  }, 10000);
      $(".line8a").animate({
    opacity: 0,

  }, 2000);
      $(".line8c").animate({
    opacity: 0,

  }, 2000);
      $("hr.line8").animate({
    opacity: 1,
  }, 2000);
});
  

  
  
  
  
$("#i").mouseover('click touchstart', function() {
  $("hr.line9b").animate({
    opacity: 1,
    "margin-top": '0px',
  }, 1000);
    $(".line9a").animate({
    opacity: 1,
    "top": '34px',
  }, 500);
      $("hr.line9").animate({
    opacity: 0,
  }, 1000);
}).mouseout('click touchstart', function () {
  $("hr.line9b").animate({
    opacity: 0,
    "margin-top": '100px',
  }, 6000);
    $("hr.line9c").animate({
    opacity: 0,
    "margin-top": '50px',
  }, 12000);
        $(".line9a").animate({
    opacity: 0,

  }, 2000);
      $("hr.line9").animate({
    opacity: 1,
  }, 2000);
});  
  
  
  
  
  
$("#j").mouseover('click touchstart', function() {
  $("hr.line10b").animate({
    opacity: 1,
    "margin-top": '32px',
  }, 1000);
    $("hr.line10d").animate({
    opacity: 1,
    "margin-top": '212px',
  }, 1000);
    $(".line10a").animate({
    opacity: 1,
    "top": '216px',
  }, 500);
      $(".line10c").animate({
    opacity: 1,
    "top": '34px',
  }, 500);
      $("hr.line10").animate({
    opacity: 0,
  }, 1000);
}).mouseout('click touchstart', function () {
  $("hr.line10b").animate({
    opacity: 0,
    "margin-top": '232px',
  }, 12000);
    $("hr.line10d").animate({
    opacity: 0,
    "margin-top": '412px',
  }, 12000);
    $(".line10a").animate({
    opacity: 0,

  }, 2000);
    $(".line10c").animate({
    opacity: 0,

  }, 2000);
      $("hr.line10").animate({
    opacity: 1,
  }, 2000);
});  
  
  
  
$("#k").mouseover('click touchstart', function() {
  $("hr.line11b").animate({
    opacity: 1,
    "margin-top": '180px',
  }, 1000);
    $("hr.line11f").animate({
    opacity: 1,
    "margin-top": '32px',
  }, 1000);
    $(".line11a").animate({
    opacity: 1,
    "top": '34px',
  }, 500);
      $(".line11d").animate({
    opacity: 1,
    "top": '34px',
  }, 500);
        $(".line11e").animate({
    opacity: 1,
    "top": '216px',
  }, 500);
      $("hr.line11").animate({
    opacity: 0,
  }, 1000);
}).mouseout('click touchstart', function () {
  $("hr.line11b").animate({
    opacity: 0,
    "margin-top": '220px',
  }, 2000);
    $("hr.line11c").animate({
    opacity: 0,
  }, 4000);
    $("hr.line11f").animate({
    opacity: 0,
    "margin-top": '152px',
  }, 4000);
     $(".line11a").animate({
    opacity: 0,
  }, 2000);
    $(".line11d").animate({
    opacity: 0,

  }, 2000);
    $(".line11e").animate({
    opacity: 0,

  }, 2000);
      $("hr.line11").animate({
    opacity: 1,
  }, 2000);

});  


  
$("#l").mouseover('click touchstart', function() {
  $(".line12a").animate({
    opacity: 1,
    "top": '34px',
  }, 1000);
    $("hr.line12b").animate({
    opacity: 1,
    "margin-top": '216px',
  }, 1000);
    $(".line12e").animate({
    opacity: 1,
    "top": '216px',
  }, 500);
    $("hr.line12f").animate({
    opacity: 1,
    "margin-top": '32px',
  }, 1000);
      $("hr.line12").animate({
    opacity: 0,
  }, 1000);
}).mouseout('click touchstart', function () {
    $(".line12a").animate({
    opacity: 0,
  }, 2000);
    $(".line12b").animate({
    opacity: 0,
    "margin-top": '316px',
  }, 4000);
    $(".line12e").animate({
    opacity: 0,
  }, 2000);
      $(".line12f").animate({
    opacity: 0,
  }, 2000);
      $("hr.line12").animate({
    opacity: 1,
  }, 2000);
  
  });   
  
  
  
$("#m").mouseover('click touchstart', function() {
  $(".line13a").animate({
    opacity: 1,
    "top": '34px',
  }, 1000);
    $(".line13d").animate({
    opacity: 1,
    "top": '34px',
  }, 1000);
      $(".line13c").animate({
    opacity: 1,
    "top": '0px',
  }, 1000);
  $("hr.line13b").animate({
    opacity: 1,
    "margin-top": '-228px',
  }, 1000);
  $("hr.line13e").animate({
    opacity: 1,
    "margin-top": '216px',
  }, 1000);
  $("hr.line13z").animate({
    opacity: 1,
    "margin-top": '216px',
  }, 1000);
      $("hr.line13").animate({
    opacity: 0,
  }, 1000);
  }).mouseout('click touchstart', function () {
  
    $(".line13a").animate({
    opacity: 0,
  }, 2000);
    $(".line13c").animate({
    opacity: 0,
  }, 2000);
    $(".line13d").animate({
    opacity: 0,
  }, 2000);
    $("hr.line13b").animate({
    opacity: 0,
    "margin-top": '-50px',
  }, 4000);
      $("hr.line13e").animate({
    opacity: 0,
            "margin-top": '316px',
  }, 2000);
        $("hr.line13z").animate({
    opacity: 0,
        "margin-top": '316px',
  }, 2000);
      $("hr.line13").animate({
    opacity: 1,
  }, 2000);
  
  
  });    
  
  
  
  $("#n").mouseover('click touchstart', function() {
  $(".line14a").animate({
    opacity: 1,
    "top": '34px',
  }, 1000);
  $("hr.line14b").animate({
    opacity: 1,
    "margin-top": '-228px',
  }, 1000);
      $("hr.line14z").animate({
    opacity: 1,
    "margin-top": '216px',
  }, 1000);
      $("hr.line14e").animate({
    opacity: 1,
    "margin-top": '216px',
  }, 1000);
        $("hr.line14").animate({
    opacity: 0,
  }, 1000);
  }).mouseout('click touchstart', function () {
    $(".line14a").animate({
    opacity: 0,
  }, 2000);  
    $(".line14c").animate({
    opacity: 0,
  }, 2000);
    $(".line14f").animate({
    opacity: 0,
  }, 2000);
    $("hr.line14b").animate({
    opacity: 0,
    "margin-top": '-50px',
  }, 4000);
    $("hr.line14z").animate({
    opacity: 0,
    "margin-top": '316px',
  }, 2000);
   $("hr.line14e").animate({
    opacity: 0,
    "margin-top": '316px',
  }, 2000);
      $("hr.line14").animate({
    opacity: 1,
  }, 2000);
  
  });    
  
  
  
  
  
    $("#o").mouseover('click touchstart', function() {
  $(".line15a").animate({
    opacity: 1,
    "top": '34px',
  }, 1000);
    $(".line15c").animate({
    opacity: 1,
    "top": '34px',
  }, 1000);
  $("hr.line15b").animate({
    opacity: 1,
    "margin-top": '-228px',
  }, 1000);
      $("hr.line15z").animate({
    opacity: 1,
    "margin-top": '216px',
  }, 1000);
      $("hr.line15e").animate({
    opacity: 1,
    "margin-top": '216px',
  }, 1000);
          $("hr.line15").animate({
    opacity: 0,
  }, 1000);
  }).mouseout('click touchstart', function () {
    $(".line15a").animate({
    opacity: 0,
  }, 2000);  
    $(".line15c").animate({
    opacity: 0,
  }, 2000);
    $(".line15f").animate({
    opacity: 0,
  }, 2000);
    $("hr.line15b").animate({
    opacity: 0,
    "margin-top": '-50px',
  }, 6000);
    $("hr.line15z").animate({
    opacity: 0,
    "margin-top": '316px',
  }, 2000);
   $("hr.line15d").animate({
    opacity: 0,
    "margin-top": '316px',
  }, 2000);
          $("hr.line15").animate({
    opacity: 1,
  }, 2000);
  
  });  
  
  
  $("#p").mouseover('click touchstart', function() {
  $(".line16a").animate({
    opacity: 1,
    "top": '34px',
  }, 1000);
    $(".line16c").animate({
    opacity: 1,
    "top": '34px',
  }, 1000);
  $("hr.line16b").animate({
    opacity: 1,
    "margin-top": '-228px',
  }, 1000);
      $("hr.line16z").animate({
    opacity: 1,
    "margin-top": '216px',
  }, 1000);
        $("hr.line16").animate({
    opacity: 0,
  }, 1000);
  }).mouseout('click touchstart', function () {
    $(".line16a").animate({
    opacity: 0,
  }, 2000);  
    $(".line16c").animate({
    opacity: 0,
  }, 2000);
    $("hr.line16b").animate({
    opacity: 0,
    "margin-top": '-50px',
  }, 6000);
    $("hr.line16z").animate({
    opacity: 0,
    "margin-top": '316px',
  }, 10000);
   $("hr.line16d").animate({
    opacity: 0,
    "margin-top": '316px',
  }, 10000);
        $("hr.line16").animate({
    opacity: 1,
  }, 2000);
  
  });  
  
  
  
  
  
  
    $("#q").mouseover('click touchstart', function() {
  $(".line17a").animate({
    opacity: 1,
    "top": '34px',
  }, 1000);
    $(".line17c").animate({
    opacity: 1,
    "top": '34px',
  }, 1000);
  $("hr.line17b").animate({
    opacity: 1,
    "margin-top": '-228px',
  }, 1000);
      $("hr.line17z").animate({
    opacity: 1,
    "margin-top": '216px',
  }, 1000);
     $(".line17e").animate({
    opacity: 1,
       "margin-top": '213px',
  }, 500);
          $("hr.line17").animate({
    opacity: 0,
  }, 1000);
  }).mouseout('click touchstart', function () {
    $(".line17a").animate({
    opacity: 0,
  }, 2000);  
    $(".line17c").animate({
    opacity: 0,
  }, 2000);
    $(".line17f").animate({
    opacity: 0,
  }, 600);
    $("hr.line17b").animate({
    opacity: 0,
    "margin-top": '-50px',
  }, 6000);
    $("hr.line17z").animate({
    opacity: 0,
  }, 2000);
   $("hr.line17d").animate({
    opacity: 0,
    "margin-top": '216px',
  }, 4000);
          $("hr.line17").animate({
    opacity: 1,
  }, 2000);
  
  });  
  
  
  
  
    $("#r").mouseover('click touchstart', function() {
  $(".line18a").animate({
    opacity: 1,
    "top": '34px',
  }, 1000);
    $(".line18d").animate({
    opacity: 1,
    "top": '34px',
  }, 1000);
      $(".line18e").animate({
    opacity: 1,
    "top": '220px',
  }, 1000);
  $("hr.line18f").animate({
    opacity: 1,
    "margin-top": '28px',
  }, 1000);
      $("hr.line18z").animate({
    opacity: 1,
    "margin-top": '215px',
  }, 1000);
          $("hr.line18").animate({
    opacity: 0,
  }, 1000);
  }).mouseout('click touchstart', function () {
    $(".line18a").animate({
    opacity: 0,
    "top": '254px',
  }, 2000);  
    $(".line18d").animate({
    opacity: 0,
    "top": '254px',
  }, 2000);
    $(".line18e").animate({
    opacity: 0,
    "top": '300px',
  }, 2000);
    $("hr.line18f").animate({
    opacity: 0,
    "margin-top": '50px',
  }, 2000);
    $("hr.line18z").animate({
    opacity: 1,
    "margin-top": '315px',
  }, 2000);
          $("hr.line18").animate({
    opacity: 1,
  }, 2000);
  });  
  
  
    
    $("#s").mouseover('click touchstart', function() {
  $(".line19a").animate({
    opacity: 1,
    "top": '34px',
  }, 1000);
    $(".line19c").animate({
    opacity: 1,
    "top": '36px',
  }, 1000);
  $(".line19e").animate({
    opacity: 1,
  }, 100);
    $("hr.line19a").animate({
    opacity: 1,
    "top": '254px',
  }, 1000);
          $("hr.line19").animate({
    opacity: 0,
  }, 1000);
      
  }).mouseout('click touchstart', function () {
    $(".line19a").animate({
    opacity: 0,
  }, 2000);  
    $(".line19c").animate({
    opacity: 0,
    "top": '36px',
  }, 2000);
  $("hr.line19a").animate({
    opacity: 0,
    "top": '354px',
  }, 4000);
    $(".line19e").animate({
    opacity: 0,
  }, 2000);
          $("hr.line19").animate({
    opacity: 1,
  }, 2000);
  });  
  
  
  
  
  $("#t").mouseover('click touchstart', function() {
  $("hr.line20b").animate({
    opacity: 1,
    "margin-top": '0px',
  }, 1000);
    
    $(".line20a").animate({
    opacity: 1,
    "top": '34px',
  }, 500);
        $("hr.line20").animate({
    opacity: 0,
  }, 1000);
}).mouseout('click touchstart', function () {
  $("hr.line20b").animate({
    opacity: 0,
    "margin-top": '100px',
  }, 6000);
    $("hr.line20c").animate({
    opacity: 0,
    "margin-top": '50px',
  }, 12000);
        $(".line20a").animate({
    opacity: 0,

  }, 2000);
        $("hr.line20").animate({
    opacity: 1,
  }, 2000);
});  
  
  
  
  $("#u").mouseover('click touchstart', function() {
  $(".line21b").animate({
    opacity: 1,
    "top": '34px',
  }, 800);
  $(".line21a").animate({
    opacity: 1,
    "top": '34px',
  }, 800);
    $("hr.line21c").animate({
    opacity: 1,
    "margin-top": '216px',
  }, 1000);
        $("hr.line21").animate({
    opacity: 0,
  }, 1000);
}).mouseout('click touchstart', function () {
    $(".line21a").animate({
    opacity: 0,
    "top": '254px',
  }, 2000);
     $(".line21b").animate({
    opacity: 0,
    "top": '254px',
  }, 2000);
        $("hr.line21c").animate({
    opacity: 0,
    "top": '316px',
  }, 1600);
        $("hr.line21").animate({
    opacity: 1,
  }, 2000);
});  
  
  
  
  
 $("#v").mouseover('click touchstart', function() {
  $(".line22a").animate({
    opacity: 1,
    "top": '34px',
  }, 800);
    $(".line22c").animate({
    opacity: 1,
    "margin-top": '-180px',
  }, 1200);
    $(".line22e").animate({
    opacity: 1,
    "top": '216px',
  }, 800);
       $(".line22f").animate({
    opacity: 1,
    "top": '214px',
  }, 800);
        $("hr.line22").animate({
    opacity: 0,
  }, 1000);
  
}).mouseout('click touchstart', function () {
    $(".line22a").animate({
    opacity: 0,
    "top": '254px',
  }, 2000);
       $(".line22f").animate({
    opacity: 0,
    "top": '314px',
  }, 800);
     $(".line22e").animate({
    opacity: 0,
    "top": '314px',
  }, 800);
        $(".line22c").animate({
    opacity: 0,
    "top": '254px',
  }, 1600);
        $(".line22").animate({
    opacity: 1,
  }, 2000);
});  
  
  
  
  
$("#w").mouseover('click touchstart', function() {
  $(".line23a").animate({
    opacity: 1,
    "top": '32px',
  }, 800);
    $(".line23c").animate({
    opacity: 1,
    "top": '216px',
  }, 1200);
    $(".line23e").animate({
    opacity: 1,
    "top": '32px',
  }, 800);
        $("hr.line23").animate({
    opacity: 0,
  }, 1000);
  
}).mouseout('click touchstart', function () {
    $(".line23a").animate({
    opacity: 0,
    "top": '254px',
  }, 3000);
     $(".line23e").animate({
    opacity: 0,
    "top": '254px',
  }, 800);
      $(".line23c").animate({
    opacity: 0,
    "top": '314px',
  }, 1600);
        $(".line23").animate({
    opacity: 1,
  }, 2000);
});  
  
  
$("#x").mouseover('click touchstart', function() {
  $(".line24a").animate({
    opacity: 1,
    "top": '32px',
  }, 800);
    $(".line24c").animate({
    opacity: 1,
    "top": '32px',
  }, 1200);
    $(".line24e").animate({
    opacity: 1,
    "top": '214px',
  }, 800);
       $(".line24d").animate({
    opacity: 1,
    "top": '214px',
  }, 800);
    $("hr.line24").animate({
    opacity: 0,
  }, 1000);
  
  
}).mouseout('click touchstart', function () {
    $(".line24a").animate({
    opacity: 0,
    "top": '254px',
  }, 3000);
       $(".line24d").animate({
    opacity: 0,
    "top": '314px',
  }, 800);
     $(".line24e").animate({
    opacity: 0,
    "top": '254px',
  }, 800);
      $(".line24c").animate({
    opacity: 0,
    "top": '216px',
  }, 1600);
    $("hr.line24").animate({
    opacity: 1,
  }, 2000);
});  

  

  
$("#y").mouseover('click touchstart', function() {
  $(".line25a").animate({
    opacity: 1,
    "top": '32px',
  }, 800);
    $(".line25c").animate({
    opacity: 1,
    "top": '32px',
  }, 1200);
       $(".line25d").animate({
    opacity: 1,
    "top": '214px',
  }, 800);
    $("hr.line25").animate({
    opacity: 0,
  }, 1000);
}).mouseout('click touchstart', function () {
    $(".line25a").animate({
    opacity: 0,
    "top": '254px',
  }, 3000);
       $(".line25d").animate({
    opacity: 0,
    "top": '314px',
  }, 800);
      $(".line25c").animate({
    opacity: 0,
    "top": '216px',
  }, 2600);
    $(".line25").animate({
    opacity: 1,
  }, 2000);
});  


  
  
$("#z").mouseover('click touchstart', function() {
  $(".line26a").animate({
    opacity: 1,
    "top": '216px',
  }, 800);
    $(".line26d").animate({
    opacity: 1,
    "top": '36px',
  }, 1200);
    $("hr.line26").animate({
    opacity: 0,
  }, 1000);
}).mouseout('click touchstart', function () {
    $(".line26a").animate({
    opacity: 0,
    "top": '254px',
  }, 3000);
       $(".line26d").animate({
    opacity: 0,
    "top": '314px',
  }, 1600);
    $("hr.line26").animate({
    opacity: 1,
  }, 2000);
});  
  
  
  
});



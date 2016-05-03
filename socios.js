

$(document).ready(function(){

  $("#tabs").tabs();
  $("#update").hide();

  var partners = new Array();
  var numPartners = 0;

  var myMsgs = new Array();
  var numMsgs = 0;

  var upMsgs = new Array();
  var numUpMsgs = 0;

  $.getJSON("update.json", function(data){

    data.updateMsgs.forEach(function(iterator){
      upMsgs[numUpMsgs] = new Object();
      upMsgs[numUpMsgs] = {author: iterator.author,
                           avatar: iterator.avatar,
                           title: iterator.title,
                           msg: iterator.msg,
                           date: iterator.date};
      numUpMsgs++;
      });
      if (numUpMsgs > 0){
        $("#update").show();
        $("#update").click(function(){
          $("#update").hide();
          for(var it = 0; it < numUpMsgs; it++){
            $("#newMsgs").append("<div id='box'><p><img class='avatar' src='" + upMsgs[it].avatar + "'/> <strong>" +
                                  upMsgs[it].author + "</strong></p>" +
                                  upMsgs[it].date +
                                  "<p><strong>" + upMsgs[it].title +
                                  " <button class='upMsg-title-button' value='" + it + "'>+</button></p>" +
                                  "<div id='upMsg-" + it + "'>" + upMsgs[it].msg + "</div></div>");
                                  $("#upMsg-" + it).hide();
          };
          $(".upMsg-title-button").click(function(){
            $(this).css("background-image", "url('jquery-ui/images/ui-bg_diagonals-small_50_93c3cd_40x40.png')");
            var aux = $(this).attr("value");
            var it = 0;
            while (it < numPartners){
              if(it == aux){
                break;
              }it++;
            }
            var idMsg = "#upMsg-" + aux;
            var selectedEffect = "clip";
            var options = {};
            if ( selectedEffect === "scale" ) {
              options = { percent: 0 };
            } else if ( selectedEffect === "size" ) {
              options = { to: { width: 200, height: 60 } };
            }
            $(idMsg).toggle( selectedEffect, options, 500 );

            $(this).click(function(){
              $(this).css("background-image", "url('jquery-ui/images/ui-bg_diagonals-small_50_ff3853_40x40.png')");
            });
          });
        });
      }

  });

  $.getJSON("timeline.json", function(data){

    data.partners.forEach(function(iterator){
      partners[numPartners] = new Object();
      partners[numPartners] = {author: iterator.author,
                               avatar: iterator.avatar,
                               title: iterator.title,
                               msg: iterator.msg,
                               date: iterator.date};
      numPartners++;
      });

      for(var it = 0; it < numPartners; it++){
        $("#tabs-1").append("<div id='box'><p><img class='avatar' src='" + partners[it].avatar + "'/> <strong>" +
                            partners[it].author + "</strong></p>" +
                            partners[it].date +
                            "<p><strong>" + partners[it].title +
                            " <button class='msg-title-button' value='" + it + "'>+</button></p>" +
                            "<div id='msg-" + it + "'>" + partners[it].msg + "</div></div>");
                            $("#msg-" + it).hide();
      };
      $(".msg-title-button").click(function(){
        $(this).css("background-image", "url('jquery-ui/images/ui-bg_diagonals-small_50_93c3cd_40x40.png')");
          var aux = $(this).attr("value");
          var it = 0;
          while (it < numPartners){
            if(it == aux){
              break;
            }it++;
          }
          var idMsg = "#msg-" + aux;
          var selectedEffect = "clip";
          var options = {};
          if ( selectedEffect === "scale" ) {
            options = { percent: 0 };
          } else if ( selectedEffect === "size" ) {
            options = { to: { width: 200, height: 60 } };
          }
          $(idMsg).toggle( selectedEffect, options, 500 );

        $(this).click(function(){
          $(this).css("background-image", "url('jquery-ui/images/ui-bg_diagonals-small_50_ff3853_40x40.png')");
        });
      });

  });


  $.getJSON("myline.json", function(data){

    data.userMsgs.forEach(function(iterator){
      myMsgs[numMsgs] = new Object();
      myMsgs[numMsgs] = {author: iterator.author,
                               avatar: iterator.avatar,
                               title: iterator.title,
                               msg: iterator.msg,
                               date: iterator.date};
      numMsgs++;
      });

      for(var it = 0; it < numMsgs; it++){
        $("#tabs-2").append("<div id='box'><p><img class='avatar' src='" + myMsgs[it].avatar + "'/> <strong>" +
                            myMsgs[it].author + "</strong></p>" +
                            myMsgs[it].date +
                            "<p><strong>" + myMsgs[it].title +
                            " <button class='myMsg-title-button' value='" + it + "'>+</button></p>" +
                            "<div id='myMsgs-" + it + "'>" + myMsgs[it].msg + "</div></div>");
                            $("#myMsgs-" + it).hide();
      };


      $(".myMsg-title-button").click(function(){
        $(this).css("background-image", "url('jquery-ui/images/ui-bg_diagonals-small_50_93c3cd_40x40.png')");
        var aux = $(this).attr("value");
        var it = 0;
        while (it < numPartners){
          if(it == aux){
            break;
          }it++;
        }
        var idMsg = "#myMsgs-" + aux;
        var selectedEffect = "clip";
        var options = {};
        if ( selectedEffect === "scale" ) {
          options = { percent: 0 };
        } else if ( selectedEffect === "size" ) {
          options = { to: { width: 200, height: 60 } };
        }
        $(idMsg).toggle( selectedEffect, options, 500 );



        $(this).click(function(){
          $(this).css("background-image", "url('jquery-ui/images/ui-bg_diagonals-small_50_ff3853_40x40.png')");
        });
      });

  });
});

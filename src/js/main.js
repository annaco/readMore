$(document).ready(function() {
  var showText = 200;
  var content;
 
  $("section").each(function() {
    var content = $(this).html();
  
     var wholeText = content.slice(0, showText) + "<span class='readMore'>Läs mer</span>" + 
     "<span class='hideText'>" + content.slice(showText, content.length) + "</span>" 
     content.slice(showText, content.length)
    


    if(content.length < showText) {
      $(this).show();
    }
    else {
      $(this).html(wholeText);
      $('.hideText').hide();
      $('.readLess').hide();
     }
    });  

    $('.readLess').click(function() {
      console.log('test')
      $(this).hide();
      $(this).parent().parent().children().show();
      $(this).parent().hide();
    });

    $('.readMore').click(function() {
      $(this).hide();
      $(this).siblings().show();
      $(this).siblings().parent().show();
      $(this).siblings().parent().children().children().show();
     
    });  
   
});  

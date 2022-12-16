var currDate = $('#currentDay');
var description = $(".description");
var hourx = "";
var textBox= "";
var plan = "";
var retrieve="";

currDate.text(new Date());
localStorage.getItem(hourx,plan);
$(function(){
  for (i=9;i<17;i++){
    textBox = localStorage.getItem($(".time-block").attr("id"));
  }
})

$(function (){

  var currentHour = dayjs().hour();
  console.log(currentHour);

  
  $(".time-block").on("click",".saveBtn",function(){
      plan = $(this).prev().val();
     hourx = $(this).parent().attr("id");
    localStorage.setItem(hourx,plan);
  
  });
  
  $(".time-block").find(description).val(textBox);
 

  $(".time-block").each(function(){

    var hour = parseInt($(this).attr("id").split("-")[1]);
    if (hour < currentHour){
      $(this).addClass("past");

      $(".time-block").attr("disabled",true);

    }else if(hour > currentHour){
      $(this).addClass("future");
    }else {
      $(this).addClass("present");
    }
    
  });


});

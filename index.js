$(document).ready(function(){
  
  $('#submit').on(function(event){
    event.preventDefault();

    $('#photo').html($(this).val().replace(/.*(\/|\\)/, ''));
    var filename = $(this).val().replace(/.*(\/|\\)/, '');
    console.log(filename);
    console.log('formdata');
    var formdata={
      name : $('#name').val(),
      phone : $('#phone').val(),
      photo : $('#photo').val(),
      email : $('#email').val(),
    };
      console.log(formdata);
      $.ajax({
        url: "https://freemind-test.netlify.app/.netlify/functions/test",
        type: "POST",
        data: formdata,
        dataType:"json",
        // encode:true,
        success: function (result){
          // $('#hienthi').html('result');
          alert(data);
      }
      })
      
  });
});
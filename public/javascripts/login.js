$(document).ready(function(){
  $('#loginButton').click(function(){
    var id = $('#login_id').val();
    var password = $('#login_password').val();

    if(id == '' || password == ''){
        alert('정보를 입력해주세요');
      }
    else{
    var data= {
      'id' : id,
      'password' : password
    }
    console.log(data);
    $.ajax({
      type : "POST",
      url : "/login/gologin",
      contentType : "application/x-www-form-urlencoded; charset=UTF-8",
      cache: false,
      datatype : "json",
      data : data,
      success : function(result){

      if (result['result']=='success'){
        alert(id+'님 로그인 성공');
        $(window).attr('location','/');
      }
      else if(result['result']=='error'){
        alert('아이디나 비밀번호가 틀렸습니다.');
      }
      },
      error: function(error){
        alert('로그인실패');
        location.reload();
        console.log(results);
        console.log(data);
      }
    })
  }
});


});
$('.loginForm').keypress(function(event){
 if ( event.which == 13 ) {
   console.log('okok');
     $('#loginButton').click();
     return false;
 }
});

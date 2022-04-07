$(document).ready(function(){
	
$(".gnb").css({"right":"-250px"}); //처음위치

	$(".menu_toggle_btn").click(function(){
		$(this).toggleClass("menu-open");

	});

		//전체메뉴 클릭시 오른쪽에서 서브ㅔ뉴 ㄴ나오게 함

	hk=true;

	$(".menu_toggle_btn").click(function(){

		if(hk){
			$(".gnb").stop(true,true).animate({"margin-right":"250px"},500,function(){
				$(".back").stop(true,true).fadeIn();
				hk=false;
			});
				
		}
		else{
			$(".gnb").stop(true,true).animate({"margin-right":"0px"},500,function(){
				$(".back").stop(true,true).fadeOut();
				hk=true;
			});

		}

	});

	$(".panel>li:not(:first)").hide();
	//첫번째를 제외한 나머지 내용 숨기기
	
	$(".tab li a").click(function(){
		$(".tab li a").removeClass("selected");//기존선택된 selected 클래스삭제
		$(this).addClass("selected"); //새로 선택된 selected 클래스 생성
		$(".panel>li").hide();//기존의 보여진 내용 숨기기
		$($(this).attr("href")).show();//새로 선택된 내용 href 연결된내용 보여주기

		return false; //a기능차단
	});

	$(".panel1>li:not(:first)").hide();
	//첫번째를 제외한 나머지 내용 숨기기
	
	$(".tab1 li a").click(function(){
		$(".tab1 li a").removeClass("selected");//기존선택된 selected 클래스삭제
		$(this).addClass("selected"); //새로 선택된 selected 클래스 생성
		$(".panel1>li").hide();//기존의 보여진 내용 숨기기
		$($(this).attr("href")).show();//새로 선택된 내용 href 연결된내용 보여주기

		return false; //a기능차단
	});



});
$(document).ready(function () {
//   var $moreBtn = $('.more-btn');
$('.more-btn').click(function(){
    $(this).toggleClass('active');
    // 모바일 메뉴 닫기버튼, 열기버튼
    $('.gnb').toggleClass('active');
})
});
// 즉시 실행 함수 확인하기

// 페이지 로딩 시 바로 수행됨
(function(){
    const str = "저녁 메뉴 추천!";
    console.log(str);
})();

(function(){
    // 변수명 중복되도 상관 없음. 지역변수 취급
    const str = "아무값이나!";
    console.log(str);
})();

// 실무에서 권고하지는 않음.
//-------------------------------------------------

// 화살표 함수(Arrow Function)

// 1. 기본형태 : ([매개변수]) => {}
document.getElementById("btn1").addEventListener("click", () => {
    alert("화살표 함수 기본 형태 입니다.");
});

// 즉시실행함수 + 화살표함수
(() => {
    console.log("즉시 실행 함수 + 화살표 함수");
})();


// 2. 매개변수 1개 : 매개변수 => {}
document.getElementById("btn2").addEventListener("click", e => {
    
    // 매개변수 e (또는 event) : 이벤트 관련 정보를 모두 가지고 있는 객체
    // console.log(e);

    // **** e.target: 이벤트 발생한 대상(요소)
    // console.log(e.target);

    e.target.style.backgroundColor = "yellow";

    // *************** 화살표 함수 주의사항 *******************
    // -> 화살표 함수를 이벤트 핸들러로 사용할 경우
    // this는 window 객체를 나타내게 된다. (화살표 함수 내부에서 this 사용 불가)
    // --> e.target 으로 대체

});

// 3. {}, return 생략 : () => 값 또는 식
function print(fn) { // fn : 전달받은 함수
    console.log(fn(2));

}

document.getElementById("btn3").addEventListener("click", () => {
    // 익명 함수
    print(function(num) {return num*10});

    // 화살표 함수
    print(num => num*10);

});
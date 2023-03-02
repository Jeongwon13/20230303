/** 
 * 아이디 : 값이 변했을 때
 */

const inputId = document.getElementById("inputId");

inputId.addEventListener("change", function() {
    // 영어 소문자로 시작하고, 
    //영어 대/소문자, 숫자, - , _ 로만 이루어진 6~14 글자 사이 
    const regEx = /^[a-z][\w_-]{5,13}$/;

    // - 형식이 일치할 경우
    // 입력창 배경색 green 로 변경
    if(regEx.test(this.value)) {
        this.style.backgroundColor = 'green';
        this.style.color = "white";
    } else {
        this.style.backgroundColor = 'red';
        this.style.color = "white";
    }
})

/* 비밀번호 확인 : 키보드가 올라올 때 */
const inputPw = document.getElementById("inputPw");
const inputPwConfirm = document.getElementById("inputPwConfirm");

inputPwConfirm.addEventListener("keyup", function() {

    // "비밀번호"를 미입력한 상태에서 "비밀번호확인" 을 작성할 경우
    if(inputPw.value.trim().length == 0) {

        // '비밀번호확인'에 작성된 내용 모두 삭제
        inputPwConfirm.value = "";

        // 비밀번호입력해주세요 라는 경고창 출력
        alert("비밀번호를 입력해주세요");

        // focus 를 '비밀번호' 입력창으로 이동
        inputPw.focus();
    }
})

const pwMessage = document.getElementById("pwMessage");

// * 비밀번호 : 키보드가 올라 올 때
inputPw.addEventListener("keyup", function() {

    // 비밀번호 일치할경우
    // 비밀번호 일치 글자 초록색 으로 출력
    if(inputPw.value == inputPwConfirm.value) {
        pwMessage.innerText = "비밀번호 일치";
        //pwMessage.style.color = "green";
        
        pwMessage.classList.add("confirm");
        pwMessage.classList.remove("error");
    } else {
        // 비밀번호 확인란 비밀번호란이 일치하지 않을 경우
        pwMessage.innerText = "비밀번호 불일치";
        pwMessage.classList.add("error");
        pwMessage.classList.remove("confirm");
    }
})

inputPwConfirm.addEventListener("keyup", function() {
    if(inputPw.value == inputPwConfirm.value) {
        pwMessage.innerText = "비밀번호 일치";
        //pwMessage.style.color = "green";
        
        pwMessage.classList.add("confirm");
        pwMessage.classList.remove("error");
    } else {
        // 비밀번호 확인란 비밀번호란이 일치하지 않을 경우
        pwMessage.innerText = "비밀번호 불일치";
        pwMessage.classList.add("error");
        pwMessage.classList.remove("confirm");
    }
})

// * 이름 : 값이 변했을 때
const inputName = document.getElementById("inputName");
const nameMessage = document.getElementById("nameMessage");

inputName.addEventListener("change", function() {
    //한글 2~5 글자 사이 문자열인지 검사.
    const regEx = /^[가-힣]{2,5}$/;

    // - 형식이 일치할 경우:
	//"이름" 입력창 오른쪽에 "정상입력" 글자를 초록색으로 출력.
    if(regEx.test(this.value)) {
        nameMessage.innerText = "정상입력"
        nameMessage.classList.add("confirm");
        nameMessage.classList.remove("error");
    } else {
        //- 형식이 일치하지 않은 경우:
         //   "이름" 입력창 오른쪽에 "한글만 입력하세요" 글자를 빨간색으로 출력.
         nameMessage.innerText = "한글만 입력하세요"
         nameMessage.classList.add("error");
         nameMessage.classList.remove("confirm");

    }


})


// 회원가입 버튼 클릭시  : validate() 함수를 호출
function validate() {
    // 성별이 선택되지 않은경우
    // '성별을 선택해주세요' 경고창 출력
    // submit 기본 이벤트를 제거해야함.

    // 체크된 라디오 버튼만 얻어오기
    const gender = document.querySelector("input[name='gender']:checked")

    if(gender == null) {
        alert("성별을 선택해주세요");
        return false;
    }

    // 전화번호
    const inputTel = document.getElementById("inputTel");

    const regEx = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

    if(!regEx.test(inputTel.value)) {
        alert("전화번호 형식이 올바르지 않습니다.")
        return false;
    }

    return true;

}
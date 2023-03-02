// Node 확인하기
document.getElementById("btn1").addEventListener("click", function() {
    
    // 부모
    // 요소.parentNode : 요소의 부모 노드를 탐색해서 반환

    // 자식
    // 요소.childNodes : 요소의 자식 노드를 모두 반환(NodeList 형태)
    // 요소.firstChild : 첫 번째 자식 노드를 탐색해서 반환
    // 요소.lastChild : 마지막 자식 노드를 탐색해서 반환
    // 요소.childNodes[인덱스] : 인덱스 번째 자식 노드를 탐색해서 반환
    
    // 형제
    // 요소.previousSibling : 요소의 이전 형제 노드를 반환
    // 요소.nextSilbling : 요소의 다음 형제 노드를 반환

    // #test의 자식 노드를 모두 얻어와 확인
    const testNodeList = document.getElementById("test").childNodes;
    console.log(testNodeList);
    
    const test = document.getElementById("test");

    // 노드 탐색
    const li1 = document.getElementById("li1");
    console.log(li1.parentNode); // 부모 노드 탐색 (ul#test)

    //***실무사용 중요 #li1의 부모의 배경색을 orange로 변경(노드 탐색 활용 방법)
    li1.parentNode.style.backgroundColor = "orange";

    // #li1의 부모노드의 마지막 부분에 "ABCD"라는 text node 추가
    // 요소.append(요소 또는 노드) : 마지막 자식으로 추가(덧붙이다)
    li1.parentNode.append("ABCD");

    // #test의 첫번째 자식 노드 찾기
    console.log(test.firstChild); //#text

    // #test의 마지막 자식 노드 찾기
    console.log(test.lastChild); //"ABCD"

    // #test의 자식 노드 중 5번째 인덱스 노드 찾기
    console.log(test.childNodes[5]); // class=cls 2번

    // #test의 자식 노드 중 5번째 인덱스 노드의 마지막 자식으로 "ZZZ" 추가하기
    test.childNodes[5].append("ZZZ");

    // #test의 자식 노드 중 5번째 인덱스 이전 형제 노드
    console.log(test.childNodes[5].previousSibling); // 4번

    // #test의 자식 노드 중 5번째 인덱스 다음 형제 노드
    console.log(test.childNodes[5].nextSibling); // 6번

    // #test의 자식 노드 중 5번째 인덱스의 이전 형제 노드의 이전 형제 노드
    console.log(test.childNodes[5].previousSibling.previousSibling);

})  

document.getElementById("btn2").addEventListener("click", function() {
    const test = document.getElementById("test"); // 부모 요소
    const li1 = document.getElementById("li1"); // 자식 요소
    const list = test.children;

    // #li1의 부모 요소 탐색   
    console.log(li1.parentNode); // ul

    // #li1의 부모 요소의 부모 요소 탐색
    console.log(li1.parentNode.parentNode); // body

    // #test의 모든 자식 요소 탐색
    console.log(test.children); // HTMLCollection 형태로 반환

    // #test의 첫 번째 자식 요소
    console.log(test.firstElementChild); // #text

    // #test의 마지막 자식 요소
    console.log(test.lastElementChild);

    // #test의 자식 요소 중 2번 인덱스
    console.log(list[2]);

    //----------------------------------------------------
    // #test의 자식 요소 중 2번 인덱스의 이전 형제 요소 클릭시
    list[2].previousSibling.addEventListener("click", function() {
 
    // 작성된 내용을 alert로 출력

    // this == 이벤트가 발생한 요소
    // == #test의 자식 요소 중 2번 인덱스의 이전 형제 요소
    alert(this.innerText);
    
    // 이벤트가 발생한 요소의 다음 다음 형제 요소의 배경색을 red로 변경
    this.nextElementSibling.nextElementSibling.style.backgroundColor = "red";
    //------------------------------------------------------


    })


})

// innerHTML 
// 요소 얻어오기 잘 안씀 createElement 많이 씀
const btn3 = document.getElementById("btn3");
const div3 = document.getElementById("div3");

//
let count3 = 1;

btn3.addEventListener("click", function() {
    if(count3 <= 10) {
        //동적으로 조립함
        const input = "<input type='text'>";
        div3.innerHTML += "<div>" + count3 + input + "</div>";

        count3++;
    }
})


//createElement()

const btn4 = document.getElementById("btn4");
const div4 = document.getElementById("div4");


let count4 = 1;

btn4.addEventListener("click", function() {
    if(count4 <= 10) {
        // document.createElement("태그명")
        // -> 해당 태그 요소를 생성하여 반환
        // -> 요소를 생성할 뿐, 화면에 추가되는 것이 아님!
        const div = document.createElement("div");
        const input = document.createElement("input");

        // 조립하자 이제 
        div.innerText = count4;
        count4++;

        // input을 div의 마지막 자식으로 추가
        // 요소.append(노드 또는 요소)
        // -> 요소의 마지막 자식으로 추가
        div.append(input);

        // #div4의 마지막 자식으로 추가
        div4.append(div);

    }

})


// 휴대폰 포커스 기능
function PhoneFocus1() {
  let phone1 = document.getElementById("id_phone1").value;
  if (phone1.length === 3) {
    document.getElementById("id_phone2").focus();
  }
}

function PhoneFocus2() {
  let phone2 = document.getElementById("id_phone2").value;
  if (phone2.length === 4) {
    document.getElementById("id_phone3").focus();
  }
}

function PhoneFocus3() {
  let phone3 = document.getElementById("id_phone3").value;
  let p1 = document.getElementById("id_phone1").value;
  let p2 = document.getElementById("id_phone2").value;
  let p3 = document.getElementById("id_phone3").value;

  if (p1.length === 3 && p2.length === 4 && p3.length === 4) {
    //인증번호 전송 활성화
    document.getElementById("call__number__button").disabled = false;
    document.getElementById("call__number__button").style =
      "color: #0068FF; background-color: #FFFFFF; cursor: pointer;";
  }
}

// 인증번호 넘버 기능
let isStarted = false;

let CallNumber = () => {
  if (isStarted === false) {
    isStarted = true;
    //인증 확인 활성화
    document.getElementById("time__button").disabled = false;
    document.getElementById("time__button").style =
      "color: #FFFFFF; background: #0068FF; cursor: pointer";

    //인증번호 전송 비활
    document.getElementById("call__number__button").disabled = true;
    document.getElementById("call__number__button").style =
      "color: #d2d2d2; background-color: #FFFFFF;";

    let number = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("call__number__id").innerText = number;
    document.getElementById("call__number__id").style.color = "#" + number;
    getTimer();
  }
};

// 인증 시간 기능
let timer;
function getTimer() {
  let time = 180;
  timer = setInterval(function () {
    if (time >= 0) {
      let min = Math.floor(time / 60);
      let sec = String(time % 60).padStart(2, "0");
      document.getElementById("time__id").innerText = min + ":" + sec;
      time -= 1;
    } else {
      //인증시간 오버시 비활성화
      document.getElementById("call__number__button").disabled = false; //인증번호 전송 활성
      document.getElementById("call__number__button").style =
        "color: #0068FF; background-color: #FFFFFF; cursor: pointer;";
      document.getElementById("time__button").disabled = true; //인증확인 비활성화
      document.getElementById("time__button").style =
        "color: #d2d2d2; background-color: #FFFFFF;";
      document.getElementById("call__number__id").innerText = "000000";
      document.getElementById("time__id").innerText = "3:00";
      isStarted = false;

      clearInterval(timer);
    }
  }, 1000);
}

let Confirm = () => {
  alert("인증이 완료되었습니다");
  clearInterval(timer);
  //가입하기 활성화
  document.getElementById("submit").disabled = false;
  document.getElementById("submit").innerText = "인증완료";
  document.getElementById("submit").style =
    "background: #FFFFFF; color: #0068FF; cursor:pointer; border-color:#0068FF;";
  // 인증확인 비활성화
  document.getElementById("time__button").disabled = true;
  document.getElementById("time__button").style =
    "color: #d2d2d2; background-color: #FFFFFF;";
  //인증번호 비활성화
  document.getElementById("call__number__button").disabled = true;
  document.getElementById("call__number__button").style =
    "color: #d2d2d2; background-color: #FFFFFF;";
};

function submit() {
  const email = document.getElementById("id_email").value;
  const name = document.getElementById("id_name").value;
  const pw1 = document.getElementById("id_pw1").value;
  const pw2 = document.getElementById("id_pw2").value;
  const location = document.getElementById("id_location").value;
  const genderWoman = document.getElementById("woman").checked;
  const genderMan = document.getElementById("man").checked;

  let Check = true;

  if (email.includes("@") === false) {
    document.getElementById("error__email").innerText =
      "이메일이 올바르지 않습니다.";
    Check = false;
  } else {
    document.getElementById("error__email").innerText = "";
  }

  if (name === "") {
    document.getElementById("error__name").innerText =
      "이름이 올바르지 않습니다.";
    Check = false;
  } else {
    document.getElementById("error__name").innerText = "";
  }

  if (pw1 === "") {
    document.getElementById("error__pw1").innerText =
      "비밀번호를 입력해 주세요.";
    Check = false;
  } else {
    document.getElementById("error__pw1").innerText = "";
  }

  if (pw2 === "") {
    document.getElementById("error__pw2").innerText =
      "비밀번호를 입력해 주세요.";
    Check = false;
  } else {
    document.getElementById("error__pw2").innerText = "";
  }

  if (pw1 !== pw2) {
    document.getElementById("error__pw1").innerText =
      "비밀번호가 일치하지 않습니다.";
    document.getElementById("error__pwd2").innerText =
      "비밀번호가 일치하지 않습니다.";
    Check = false;
  }

  if (location !== "서울" && location !== "경기" && location !== "인천") {
    document.getElementById("error__location").innerText =
      "지역을 선택해 주세요.";
    Check = false;
  } else {
    document.getElementById("error__location").innerText = "";
  }

  if (genderWoman === false && genderMan === false) {
    document.getElementById("error__gender").innerText =
      "성별을 선택해 주세요.";
    Check = false;
  } else {
    document.getElementById("error__gender").innerText = "";
  }

  if (Check === true) {
    alert("코드캠프 가입을 축하합니다.");
  }
}

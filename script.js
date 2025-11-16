// EmailJS 초기화
emailjs.init({
        publicKey: "PXy5dWLVSSQbQwKCj",
let currentCode = "";

// 인증 코드 전송
document.getElementById("sendBtn").addEventListener("click", function() {
    const email = document.getElementById("email").value.trim();
    if (!email) {
        alert("이메일을 입력해주세요.");
        return;
    }

    // 6자리 랜덤 인증 코드 생성
    currentCode = Math.floor(100000 + Math.random() * 900000).toString();

    // EmailJS 템플릿 변수
    const templateParams = {
        to_email: email,
        verification_code: currentCode
    };

    emailjs.send('service_y439lcp', 'template_zksqn5c', templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("인증 코드가 발송되었습니다.");
    }, function(error) {
        console.log('FAILED...', error);
        alert("이메일 전송 실패");
    });
});

// 인증 코드 확인
document.getElementById("verifyBtn").addEventListener("click", function() {
    const inputCode = document.getElementById("code").value.trim();
    if (inputCode === currentCode) {
        alert("인증 성공!");
    } else {
        alert("인증 실패. 코드를 확인해주세요.");
    }
});

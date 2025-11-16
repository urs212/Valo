// EmailJS 초기화는 필요없고, send()에 publicKey 사용
let currentCode = "";

// 인증 코드 전송
document.getElementById("sendBtn").addEventListener("click", function() {
    const email = document.getElementById("email").value.trim();
    if (!email) return alert("이메일을 입력해주세요.");

    // 6자리 랜덤 코드
    currentCode = Math.floor(100000 + Math.random() * 900000).toString();

    const templateParams = {
        to_email: email,
        verification_code: currentCode
    };

    emailjs.send('service_y439lcp', 'template_zksqn5c', templateParams, 'PXy5dWLVSSQbQwKCj')
        .then(() => alert("인증 코드가 발송되었습니다."))
        .catch(err => {
            console.log(err);
            alert("이메일 전송 실패");
        });
});

// 인증 코드 확인
document.getElementById("verifyBtn").addEventListener("click", function() {
    const inputCode = document.getElementById("code").value.trim();
    if(inputCode === currentCode) {
        alert("인증 성공!");
    } else {
        alert("인증 실패. 코드를 확인해주세요.");
    }
});

// 최신 EmailJS SDK v4 사용
import emailjs from 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';

let currentCode = "";

// 인증 코드 전송
document.getElementById("sendBtn").addEventListener("click", async function() {
    const email = document.getElementById("email").value.trim();
    if (!email) return alert("이메일을 입력해주세요.");

    // 6자리 랜덤 인증 코드
    currentCode = Math.floor(100000 + Math.random() * 900000).toString();

    const templateParams = {
        to_email: email,
        verification_code: currentCode
    };

    try {
        await emailjs.send('service_y439lcp', 'template_zksqn5c', templateParams, 'uKeshnX1xK0Y0h-sq');
        alert("인증 코드가 발송되었습니다.");
    } catch (err) {
        console.error(err);
        alert("이메일 전송 실패. 콘솔을 확인해주세요.");
    }
});

// 인증 코드 확인
document.getElementById("verifyBtn").addEventListener("click", function() {
    const inputCode = document.getElementById("code").value.trim();
    if (!inputCode) return alert("코드를 입력해주세요.");
    alert(inputCode === currentCode ? "인증 성공!" : "인증 실패");
});

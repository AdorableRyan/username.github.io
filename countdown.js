// 방학식 날짜 설정 (2024년 1월 24일)
const vacationDate = new Date("2024-01-24T00:00:00").getTime();

// 카운트다운 업데이트 함수
function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeLeft = vacationDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        ${days}일 ${hours}시간 ${minutes}분 ${seconds}초
    `;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "방학식이 시작되었습니다!";
    }
}

// 매 초마다 카운트다운 업데이트
setInterval(updateCountdown, 1000);
updateCountdown(); // 초기화


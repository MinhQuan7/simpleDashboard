 function updateClock() {
            const now = new Date();
            const options = {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            };
            
            document.getElementById('clock').textContent = 
                now.toLocaleString('vi-VN', options);
        }

        // Cập nhật đồng hồ mỗi giây
        updateClock();
        setInterval(updateClock, 1000);






const circles = document.querySelectorAll('.circle');
circles.forEach(elem =>{
    var dots = elem.getAttribute('data-dots')
    var marked = elem.getAttribute('data-percent');
    var percent = Math.floor(dots*marked/100);
    var rotate = 360/dots;
    var points = "";
    for (let i = 0; i < dots; i++) {
         points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked')
    }
})
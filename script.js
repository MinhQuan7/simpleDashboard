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
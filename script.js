  // Bài thơ chúc mừng 20/10
        const poemLines = [
            "Hôm nay ngày hai mươi tháng mười",
            "Gửi lời chúc đến những người phụ nữ",
            "Luôn xinh tươi và rạng ngời",
            "Như đóa hoa hồng buổi sớm mai",
            "",
            "Chúc cho em mãi thật duyên",
            "Nụ cười tỏa sáng giữa miền yêu thương",
            "Gặp nhiều may mắn trên đường",
            "Hạnh phúc ngập tràn, vấn vương nghĩa tình",
            "",
            "Chúc chị em thật an bình",
            "Thành công rực rỡ, tâm tình thảnh thơi",
            "Gia đình ấm áp, tiếng cười",
            "Trọn đời hạnh phúc, rạng ngời sắc xuân!"
        ];

        // Tạo hiệu ứng trái tim rơi
        function createHearts() {
            const heartsContainer = document.getElementById('hearts');
            const heartCount = 50;
            
            for (let i = 0; i < heartCount; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.classList.add('heart');
                    heart.innerHTML = '<i class="fas fa-heart"></i>';
                    heart.style.left = Math.random() * 100 + 'vw';
                    heart.style.animationDuration = Math.random() * 3 + 5 + 's';
                    heart.style.fontSize = Math.random() * 10 + 10 + 'px';
                    heartsContainer.appendChild(heart);
                    
                    // Xóa trái tim sau khi animation kết thúc
                    setTimeout(() => {
                        heart.remove();
                    }, 8000);
                }, i * 200);
            }
        }

        // Hiển thị bài thơ với hiệu ứng từng chữ
        function displayPoem() {
            const poemElement = document.getElementById('poem');
            let lineIndex = 0;
            
            function displayNextLine() {
                if (lineIndex >= poemLines.length) return;
                
                const line = poemLines[lineIndex];
                
                if (line === "") {
                    // Thêm dòng trống
                    const emptyLine = document.createElement('div');
                    emptyLine.classList.add('poem-line');
                    emptyLine.style.height = '20px';
                    poemElement.appendChild(emptyLine);
                    lineIndex++;
                    setTimeout(displayNextLine, 500);
                    return;
                }
                
                const lineElement = document.createElement('div');
                lineElement.classList.add('poem-line');
                poemElement.appendChild(lineElement);
                
                let charIndex = 0;
                
                function displayNextChar() {
                    if (charIndex < line.length) {
                        const char = document.createElement('span');
                        char.classList.add('char');
                        char.textContent = line[charIndex];
                        char.style.animationDelay = `${charIndex * 0.05}s`;
                        lineElement.appendChild(char);
                        charIndex++;
                        setTimeout(displayNextChar, 50);
                    } else {
                        // Hoàn thành dòng thơ
                        lineElement.classList.add('active');
                        lineIndex++;
                        setTimeout(displayNextLine, 1000);
                    }
                }
                
                displayNextChar();
            }
            
            displayNextLine();
        }
        
        // Khởi tạo
        document.addEventListener('DOMContentLoaded', function() {
            createHearts();
            displayPoem();
            
            // Lặp lại hiệu ứng trái tim mỗi 10 giây
            setInterval(createHearts, 10000);
        });
// ===== STATE =====
let correctCount = 0;
let wrongCount = 0;
let answered = 0;
const total = quizData.length;

// ===== RENDER QUESTIONS =====
function renderQuiz() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';

    quizData.forEach((q, qIndex) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.style.animationDelay = `${qIndex * 0.08}s`;
        card.id = `question-${q.id}`;

        const letters = ['A', 'B', 'C', 'D'];
        const optionsHTML = q.options.map((opt, i) => `
            <button class="option-btn" id="q${q.id}-opt${i}" onclick="selectAnswer(${q.id}, ${i}, ${q.correct})">
                <span class="option-letter">${letters[i]}</span>
                <span class="option-content">${opt}</span>
            </button>
        `).join('');

        card.innerHTML = `
            <div class="question-number">
                <span class="badge">Câu ${q.id}</span>
                <span class="question-tag">${q.tag}</span>
            </div>
            <div class="question-text">${q.question}</div>
            <div class="options-grid" id="options-${q.id}">
                ${optionsHTML}
            </div>
            <div class="explanation" id="explanation-${q.id}">
                <div class="explanation-title">💡 GIẢI THÍCH</div>
                <div class="explanation-content">${q.explanation}</div>
            </div>
        `;

        container.appendChild(card);
    });

    // Typeset MathJax after rendering
    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise().catch(err => console.log('MathJax error:', err));
    }
}

// ===== SELECT ANSWER =====
function selectAnswer(questionId, selectedIndex, correctIndex) {
    const optionsContainer = document.getElementById(`options-${questionId}`);
    const buttons = optionsContainer.querySelectorAll('.option-btn');

    // Prevent double answer
    if (buttons[0].classList.contains('disabled')) return;

    answered++;

    // Disable all buttons
    buttons.forEach(btn => btn.classList.add('disabled'));

    // Mark correct answer green
    buttons[correctIndex].classList.add('correct');

    if (selectedIndex === correctIndex) {
        // Correct!
        correctCount++;
    } else {
        // Wrong - mark selected red
        wrongCount++;
        buttons[selectedIndex].classList.add('wrong');
    }

    // Show explanation
    const explanation = document.getElementById(`explanation-${questionId}`);
    explanation.classList.add('show');

    // Re-typeset MathJax for the explanation
    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise([explanation]).catch(err => console.log('MathJax error:', err));
    }

    // Update stats
    updateStats();

    // Check if all answered
    if (answered === total) {
        setTimeout(showResult, 800);
    }
}

// ===== UPDATE STATS =====
function updateStats() {
    document.getElementById('score-display').textContent = `Đúng: ${correctCount}`;
    document.getElementById('wrong-display').textContent = `Sai: ${wrongCount}`;
    document.getElementById('remaining-display').textContent = `Còn lại: ${total - answered}`;

    const percent = (answered / total) * 100;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}

// ===== SHOW RESULT =====
function showResult() {
    const panel = document.getElementById('result-panel');
    panel.style.display = 'block';

    const percent = Math.round((correctCount / total) * 100);

    document.getElementById('final-correct').textContent = correctCount;
    document.getElementById('final-wrong').textContent = wrongCount;
    document.getElementById('final-percent').textContent = `${percent}%`;

    let icon, title, text;
    if (percent >= 80) {
        icon = '🏆'; title = 'Xuất sắc!';
        text = 'Bạn nắm vững kiến thức về hàm số. Hãy tiếp tục phát huy!';
    } else if (percent >= 60) {
        icon = '👍'; title = 'Khá tốt!';
        text = 'Bạn đã hiểu phần lớn kiến thức. Hãy ôn lại những câu sai nhé!';
    } else if (percent >= 40) {
        icon = '📚'; title = 'Cần cố gắng thêm!';
        text = 'Hãy ôn tập lại lý thuyết về miền xác định, miền giá trị và tính chẵn lẻ.';
    } else {
        icon = '💪'; title = 'Đừng nản!';
        text = 'Hãy xem lại bài giảng và làm lại đề thi. Kiên trì sẽ thành công!';
    }

    document.getElementById('result-icon').textContent = icon;
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-text').textContent = text;

    // Scroll to result
    panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', renderQuiz);

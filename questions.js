const quizData = [
    // === MIỀN XÁC ĐỊNH (Câu 1-4) ===
    {
        id: 1,
        tag: "Miền xác định",
        question: "Tìm miền xác định của hàm số \\( y = \\dfrac{1}{x - 2} \\).",
        options: [
            "\\( \\mathbb{R} \\)",
            "\\( \\mathbb{R} \\setminus \\{2\\} \\)",
            "\\( \\mathbb{R} \\setminus \\{-2\\} \\)",
            "\\( (2; +\\infty) \\)"
        ],
        correct: 1,
        explanation: "Hàm số \\( y = \\dfrac{1}{x-2} \\) xác định khi mẫu số khác 0, tức là \\( x - 2 \\neq 0 \\Leftrightarrow x \\neq 2 \\). Vậy miền xác định là \\( D = \\mathbb{R} \\setminus \\{2\\} \\)."
    },
    {
        id: 2,
        tag: "Miền xác định",
        question: "Miền xác định của hàm số \\( y = \\sqrt{3 - x} \\) là:",
        options: [
            "\\( (-\\infty; 3] \\)",
            "\\( [3; +\\infty) \\)",
            "\\( (-\\infty; 3) \\)",
            "\\( (3; +\\infty) \\)"
        ],
        correct: 0,
        explanation: "Biểu thức dưới dấu căn phải không âm: \\( 3 - x \\geq 0 \\Leftrightarrow x \\leq 3 \\). Vậy miền xác định là \\( D = (-\\infty; 3] \\)."
    },
    {
        id: 3,
        tag: "Miền xác định",
        question: "Miền xác định của hàm số \\( y = \\dfrac{\\sqrt{x+1}}{x^2 - 4} \\) là:",
        options: [
            "\\( [-1; +\\infty) \\setminus \\{2\\} \\)",
            "\\( [-1; +\\infty) \\)",
            "\\( \\mathbb{R} \\setminus \\{\\pm 2\\} \\)",
            "\\( [-1; +\\infty) \\setminus \\{\\pm 2\\} \\)"
        ],
        correct: 0,
        explanation: "Cần \\( x + 1 \\geq 0 \\Rightarrow x \\geq -1 \\) và \\( x^2 - 4 \\neq 0 \\Rightarrow x \\neq \\pm 2 \\). Kết hợp \\( x \\geq -1 \\) thì \\( x = -2 \\) đã bị loại. Vậy \\( D = [-1; +\\infty) \\setminus \\{2\\} \\)."
    },
    {
        id: 4,
        tag: "Miền xác định",
        question: "Hàm số \\( y = \\dfrac{1}{\\sqrt{x^2 - 1}} \\) có miền xác định là:",
        options: [
            "\\( (-\\infty; -1) \\cup (1; +\\infty) \\)",
            "\\( (-\\infty; -1] \\cup [1; +\\infty) \\)",
            "\\( (-1; 1) \\)",
            "\\( \\mathbb{R} \\setminus \\{\\pm 1\\} \\)"
        ],
        correct: 0,
        explanation: "Cần \\( x^2 - 1 > 0 \\) (lưu ý dấu >, không phải ≥, vì căn ở mẫu). Ta có \\( x^2 > 1 \\Leftrightarrow |x| > 1 \\Leftrightarrow x < -1 \\) hoặc \\( x > 1 \\). Vậy \\( D = (-\\infty; -1) \\cup (1; +\\infty) \\)."
    },

    // === MIỀN GIÁ TRỊ (Câu 5-7) ===
    {
        id: 5,
        tag: "Miền giá trị",
        question: "Miền giá trị của hàm số \\( y = x^2 - 4x + 5 \\) là:",
        options: [
            "\\( [1; +\\infty) \\)",
            "\\( (1; +\\infty) \\)",
            "\\( [5; +\\infty) \\)",
            "\\( \\mathbb{R} \\)"
        ],
        correct: 0,
        explanation: "Ta có \\( y = (x-2)^2 + 1 \\geq 1 \\) với mọi \\( x \\in \\mathbb{R} \\). Dấu bằng xảy ra khi \\( x = 2 \\). Vậy miền giá trị là \\( [1; +\\infty) \\)."
    },
    {
        id: 6,
        tag: "Miền giá trị",
        question: "Miền giá trị của hàm số \\( y = \\sqrt{4 - x^2} \\) là:",
        options: [
            "\\( [-2; 2] \\)",
            "\\( [0; 2] \\)",
            "\\( [0; 4] \\)",
            "\\( (0; 2) \\)"
        ],
        correct: 1,
        explanation: "Miền xác định: \\( 4 - x^2 \\geq 0 \\Rightarrow -2 \\leq x \\leq 2 \\). Ta có \\( 0 \\leq 4 - x^2 \\leq 4 \\), nên \\( 0 \\leq \\sqrt{4 - x^2} \\leq 2 \\). Khi \\( x = \\pm 2 \\), \\( y = 0 \\); khi \\( x = 0 \\), \\( y = 2 \\). Vậy miền giá trị là \\( [0; 2] \\)."
    },
    {
        id: 7,
        tag: "Miền giá trị",
        question: "Miền giá trị của hàm số \\( y = \\dfrac{2x + 1}{x - 1} \\) là:",
        options: [
            "\\( \\mathbb{R} \\)",
            "\\( \\mathbb{R} \\setminus \\{1\\} \\)",
            "\\( \\mathbb{R} \\setminus \\{2\\} \\)",
            "\\( (2; +\\infty) \\)"
        ],
        correct: 2,
        explanation: "Đặt \\( y = \\dfrac{2x+1}{x-1} \\Rightarrow y(x-1) = 2x+1 \\Rightarrow x(y-2) = y+1 \\Rightarrow x = \\dfrac{y+1}{y-2} \\). Phương trình có nghiệm khi \\( y \\neq 2 \\). Vậy miền giá trị là \\( \\mathbb{R} \\setminus \\{2\\} \\)."
    },

    // === HÀM CHẴN / HÀM LẺ (Câu 8-12) ===
    {
        id: 8,
        tag: "Hàm chẵn/lẻ",
        question: "Hàm số nào sau đây là hàm số chẵn?",
        options: [
            "\\( f(x) = x^3 + x \\)",
            "\\( f(x) = x^2 + |x| \\)",
            "\\( f(x) = x^3 - x^2 \\)",
            "\\( f(x) = x + 1 \\)"
        ],
        correct: 1,
        explanation: "Hàm \\( f(x) = x^2 + |x| \\) có miền xác định \\( D = \\mathbb{R} \\) đối xứng qua gốc. Kiểm tra: \\( f(-x) = (-x)^2 + |-x| = x^2 + |x| = f(x) \\). Vậy \\( f \\) là hàm chẵn. Các hàm còn lại đều không thỏa mãn \\( f(-x) = f(x) \\)."
    },
    {
        id: 9,
        tag: "Hàm chẵn/lẻ",
        question: "Hàm số \\( f(x) = x^3 - x \\) là:",
        options: [
            "Hàm chẵn",
            "Hàm lẻ",
            "Không chẵn không lẻ",
            "Vừa chẵn vừa lẻ"
        ],
        correct: 1,
        explanation: "Miền xác định \\( D = \\mathbb{R} \\) đối xứng. Ta có \\( f(-x) = (-x)^3 - (-x) = -x^3 + x = -(x^3 - x) = -f(x) \\). Vậy \\( f \\) là hàm lẻ."
    },
    {
        id: 10,
        tag: "Hàm chẵn/lẻ",
        question: "Hàm số \\( f(x) = x^2 + 2x + 1 \\) là:",
        options: [
            "Hàm chẵn",
            "Hàm lẻ",
            "Không chẵn không lẻ",
            "Vừa chẵn vừa lẻ"
        ],
        correct: 2,
        explanation: "Ta có \\( f(-x) = x^2 - 2x + 1 \\), trong khi \\( f(x) = x^2 + 2x + 1 \\). Vì \\( f(-x) \\neq f(x) \\) và \\( f(-x) \\neq -f(x) \\), nên hàm số không chẵn cũng không lẻ."
    },
    {
        id: 11,
        tag: "Hàm chẵn/lẻ",
        question: "Cho hàm số \\( f(x) = \\dfrac{x}{x^2 + 1} \\). Khẳng định nào đúng?",
        options: [
            "\\( f \\) là hàm chẵn",
            "\\( f \\) là hàm lẻ",
            "\\( f \\) không chẵn không lẻ",
            "\\( f \\) vừa chẵn vừa lẻ"
        ],
        correct: 1,
        explanation: "\\( f(-x) = \\dfrac{-x}{(-x)^2 + 1} = \\dfrac{-x}{x^2 + 1} = -f(x) \\). Miền xác định là \\( \\mathbb{R} \\) (đối xứng). Vậy \\( f \\) là hàm lẻ."
    },
    {
        id: 12,
        tag: "Hàm chẵn/lẻ",
        question: "Đồ thị của hàm số lẻ có tính chất nào sau đây?",
        options: [
            "Đối xứng qua trục \\( Oy \\)",
            "Đối xứng qua trục \\( Ox \\)",
            "Đối xứng qua gốc tọa độ \\( O \\)",
            "Đối xứng qua đường thẳng \\( y = x \\)"
        ],
        correct: 2,
        explanation: "Theo định nghĩa, hàm số lẻ thỏa mãn \\( f(-x) = -f(x) \\). Điều này có nghĩa là nếu điểm \\( (a, b) \\) thuộc đồ thị thì \\( (-a, -b) \\) cũng thuộc đồ thị — tức là đồ thị đối xứng qua gốc tọa độ \\( O \\)."
    },

    // === ĐỒ THỊ HÀM SỐ (Câu 13-15) ===
    {
        id: 13,
        tag: "Đồ thị hàm số",
        question: "Một đường cong trên mặt phẳng tọa độ là đồ thị của một hàm số khi và chỉ khi:",
        options: [
            "Mỗi đường thẳng song song trục \\( Ox \\) cắt đường cong tại nhiều nhất một điểm",
            "Mỗi đường thẳng song song trục \\( Oy \\) cắt đường cong tại nhiều nhất một điểm",
            "Đường cong đi qua gốc tọa độ",
            "Đường cong đối xứng qua trục \\( Oy \\)"
        ],
        correct: 1,
        explanation: "Theo phép thử đường thẳng đứng (Vertical Line Test): một đường cong là đồ thị hàm số khi và chỉ khi mỗi đường thẳng song song trục \\( Oy \\) (đường thẳng đứng \\( x = a \\)) cắt đường cong tại nhiều nhất một điểm. Điều này đảm bảo mỗi giá trị \\( x \\) chỉ ứng với duy nhất một giá trị \\( y \\)."
    },
    {
        id: 14,
        tag: "Đồ thị hàm số",
        question: "Đường tròn \\( x^2 + y^2 = 4 \\) có phải là đồ thị của một hàm số không?",
        options: [
            "Có, vì nó xác định trên \\( [-2; 2] \\)",
            "Có, vì nó đối xứng qua cả hai trục",
            "Không, vì tồn tại giá trị \\( x \\) ứng với hai giá trị \\( y \\)",
            "Không, vì nó không đi qua gốc tọa độ"
        ],
        correct: 2,
        explanation: "Ví dụ với \\( x = 0 \\): \\( y^2 = 4 \\Rightarrow y = \\pm 2 \\). Tức là \\( x = 0 \\) ứng với hai giá trị \\( y = 2 \\) và \\( y = -2 \\). Theo phép thử đường thẳng đứng, đường tròn không phải là đồ thị của hàm số."
    },
    {
        id: 15,
        tag: "Đồ thị hàm số",
        question: "Đường cong nào sau đây là đồ thị của một hàm số?",
        options: [
            "Đường tròn \\( x^2 + y^2 = 1 \\)",
            "Elip \\( \\dfrac{x^2}{4} + \\dfrac{y^2}{9} = 1 \\)",
            "Parabol \\( y = x^2 - 3x + 2 \\)",
            "Đường thẳng \\( x = 5 \\)"
        ],
        correct: 2,
        explanation: "Đường tròn, elip đều có giá trị \\( x \\) ứng với 2 giá trị \\( y \\) → không phải đồ thị hàm số. Đường \\( x = 5 \\) là đường thẳng đứng, ứng với vô số giá trị \\( y \\). Chỉ có parabol \\( y = x^2 - 3x + 2 \\) là hàm số, vì mỗi \\( x \\) cho ra duy nhất một \\( y \\)."
    }
];

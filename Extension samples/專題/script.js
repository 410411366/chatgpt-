

// 創建一個新的按鈕
let translateButton = document.createElement('button');
translateButton.textContent = '翻譯';
translateButton.id = 'translateButton';

// 定義按鈕的點擊事件
translateButton.onclick = function() {
  // 獲取用戶的輸入
  let userText = document.getElementById('userInput').value;

  // 創建一個特定的prompt
  let prompt = '將以下的文字翻譯成英文：' + userText;

  // 將prompt插入到輸入框中
  document.getElementById('userInput').value = prompt;
};

// 將按鈕添加到頁面上
document.body.appendChild(translateButton);

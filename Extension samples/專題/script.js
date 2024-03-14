

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

function showPreview() {
  var previewWindow = document.getElementById('previewWindow');
  // 假設對話記錄存在一個名為 conversations 的數組中
  var conversations = [...]; // 假設這是您的對話記錄
  // 清空預覽視窗
  previewWindow.innerHTML = '';
  // 將最近的對話添加到預覽視窗中
  conversations.forEach(function(conversation) {
      var messageElement = document.createElement('div');
      messageElement.textContent = conversation.message;
      previewWindow.appendChild(messageElement);
  });
}

// 在某個事件觸發時顯示預覽視窗，例如點擊按鈕
document.getElementById('previewButton').addEventListener('click', showPreview);


function showLanguageOptions() {
  // 創建一個包含常見語言選項的下拉menu
  var languageOptions = document.createElement('select');

  // 添加語言選項
  var languages = ['英文', '法文', '德文', '西班牙文', '中文', '日文', '韓文']; // 這是您想提供的語言選項
  languages.forEach(function(language) {
      var option = document.createElement('option');
      option.text = language;
      option.value = language;
      languageOptions.appendChild(option);
  });

  // 添加一個確定按鈕
  var confirmButton = document.createElement('button');
  confirmButton.textContent = '確定';
  confirmButton.onclick = function() {
      var selectedLanguage = languageOptions.value;
      // 在這裡添加將選擇的語言應用於翻譯的代碼
      translateConversation(selectedLanguage);
  };

  // 將下拉菜單和確定按鈕添加到一個容器中
  var languageOptionsContainer = document.createElement('div');
  languageOptionsContainer.appendChild(languageOptions);
  languageOptionsContainer.appendChild(confirmButton);

  // 在某個特定的區域顯示語言選擇界面，這裡假設有一個名為 'languageOptionsPanel' 的元素
  var languageOptionsPanel = document.getElementById('languageOptionsPanel');
  languageOptionsPanel.innerHTML = ''; // 清空容器
  languageOptionsPanel.appendChild(languageOptionsContainer);
}

function translateConversation(language) {
  var chatLog = document.getElementById('chatLog');
  // 獲取對話框內容
  var conversation = chatLog.innerText;
  // 使用翻譯 API 將對話框內容翻譯成選擇的語言
  // 將翻譯後的內容顯示在預覽視窗或者新的對話框中
}


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


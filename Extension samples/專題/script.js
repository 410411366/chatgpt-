function sendMessage() {
  const userInput = document.getElementById('userInput').value;
  displayUserMessage(userInput);
  
  // 向 ChatGPT API 發送用戶輸入的訊息，並獲取回應
  // 這裡需要使用ChatGPT的API，具體代碼取決於API的用法

  // 假設收到ChatGPT回應後的處理
  const chatGPTResponse = "ChatGPT's response."; // 假設回應是這個
  displayChatGPTMessage(chatGPTResponse);
}

function displayUserMessage(message) {
  const chatLog = document.getElementById('chatLog');
  chatLog.innerHTML += <div class="message user-message">${message}</div>;
}

function displayChatGPTMessage(message) {
  const chatLog = document.getElementById('chatLog');
  chatLog.innerHTML += <div class="message chatGPT-message">${message}</div>;
}
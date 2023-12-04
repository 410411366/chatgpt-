// 監聽標籤更新事件
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log('Tab updated:', tabId, changeInfo, tab);
    // 在這裡添加你的邏輯處理
  });
  
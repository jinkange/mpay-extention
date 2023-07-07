console.log("test");
chrome.windows.onCreated.addListener(function (window) {
  setTimeout(function () {
    chrome.tabs.query({ windowId: window.id }, function (tabs) {
      tabs.forEach(function (tab) {
        console.log(tab.url);

        if (tab.url === "https://pay.musinsa.com/certify/req") {
          // 해당 프레임으로 변경
          chrome.tabs.executeScript(tab.id, {
            code: `
            setTimeout(function () {
            
              var iframe = document.querySelector('#__tosspayments_connectpay_iframe__');
              if (iframe) {
                var frameWindow = iframe.contentWindow;
                // 원하는 동작 수행
                console.log("새로운 창의 iframe이 감지됨:", frameWindow);
                // 추가로 수행할 작업을 여기에 작성    
              }
            }, 3000);
            `,
          });
        } else {
          console.log("찾는 창 아님");
        }
      });
    });
  }, 1000);
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === "clickEvent") {
    // 원하는 동작 수행
    var anchorElement = document.querySelector(message.targetElement);
    if (anchorElement) {
      var mouseUpEvent = new MouseEvent("mouseup", {
        bubbles: true,
        cancelable: true,
        view: window,
      });
      anchorElement.dispatchEvent(mouseUpEvent); // mouseup 이벤트 발생
    }
  }
});

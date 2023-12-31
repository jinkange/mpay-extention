chrome.windows.onCreated.addListener(function (window) {
  setTimeout(function () {
    chrome.tabs.query({ windowId: window.id }, function (tabs) {
      tabs.forEach(function (tab) {
        if (tab.url === "https://pay.musinsa.com/certify/req") {
          // 해당 프레임으로 변경
          console.log("찾음 작동 시작");
          chrome.tabs.sendMessage(tabId, {
            from: "background",
            action: "clickButtonInFrame",
          });
          chrome.runtime.sendMessage({ action: "clickElementInFrame" });

          chrome.tabs.executeScript(tab.id, {
            code: `
                  setTimeout(function () {
                    var iframe = document.querySelector('#__tosspayments_connectpay_iframe__');
                    if (iframe) {
                      var frameWindow = iframe.contentWindow;
                      // 원하는 동작 수행
                      console.log("새로운 창의 iframe이 감지됨:", frameWindow);
                      // 추가로 수행할 작업을 여기에 작성
                      var anchorElement = frameWindow.querySelector("#connectpay-portal-container > div > div > a:nth-child(2)");
                      if (anchorElement) {
                        var mouseUpEvent = new MouseEvent("mouseup", {
                          bubbles: true,
                          cancelable: true,
                          view: window,
                      });
                      anchorElement.dispatchEvent(mouseUpEvent); // mouseup 이벤트 발생
                    }
                  }}, 3000);
                  `,
          });
        } else {
          console.log("찾는 창 아님");
        }
      });
    });
  }, 1000);
});

chrome.windows.onCreated.addListener(function (message, sender, sendResponse) {
  console.log(message.type);
  if (message.type === "clickEvent") {
    console.log("메세지 수신 완료");
    console.log("클릭이벤트 동작");
    // 원하는 동작 수행
    var iframe = document.querySelector("#__tosspayments_connectpay_iframe__");
    var anchorElement = iframe.querySelector(message.targetElement);
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

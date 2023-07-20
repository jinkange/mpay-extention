setTimeout(function () {
  document.domain = "naver.com";
  var iframeElement = document.getElementById(
    "__tosspayments_connectpay_iframe__"
  );

  if (iframeElement) {
    // 메시지 전송
    console.log("전송");

    var message = {
      type: "clickEvent",
      selector: "#connectpay-portal-container>div>div>a:nth-child(1)",
    };
    iframeElement.contentWindow.postMessage(message, "*");
  }
  // var anchorElement = document
  //   .getElementById("__tosspayments_connectpay_iframe__")
  //   .contentWindow.document.querySelector(
  //     "#connectpay-portal-container > div > div > a:nth-child(1)"
  //   );
  var anchorElement = document.querySelector(
    "#connectpay-portal-container > div > div > a:nth-child(1)"
  );
  if (anchorElement) {
    var mouseUpEvent = new MouseEvent("mouseup", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    anchorElement.dispatchEvent(mouseUpEvent); // mouseup 이벤트 발생
  }
}, 5000);

// 확장프로그램이 실행되는 페이지에서 메시지를 수신하여 요소 클릭 함수를 호출합니다.
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("메시지 수신 : ");
  if (message.action === "clickElementInFrame") {
    clickElementInFrame();
  }
});

// 해당 프레임 내부의 요소를 클릭하는 함수
function clickElementInFrame() {
  // 프레임 요소를 선택합니다.
  // const iframeElement = document.querySelector('iframe');

  var iframeElement = document.getElementById(
    "__tosspayments_connectpay_iframe__"
  );

  // 프레임이 로드되었는지 확인합니다.
  if (iframeElement.contentWindow) {
    // 프레임의 문서에 접근합니다.
    const frameDocument = iframeElement.contentWindow.document;

    // 프레임 내부의 요소를 선택합니다. (예시로 프레임 내부의 input 요소를 클릭하는 것으로 가정합니다.)
    const elementInFrame = frameDocument.querySelector(
      "#connectpay-portal-container>div>div>a:nth-child(1)"
    );

    // 요소를 클릭합니다.
    if (elementInFrame) {
      var mouseUpEvent = new MouseEvent("mouseup", {
        bubbles: true,
        cancelable: true,
        view: window,
      });
      anchorElement.dispatchEvent(mouseUpEvent); // mouseup 이벤트 발생
    }
  }
}

window.addEventListener("message", function (event) {
  // background.js로부터 온 메시지인지 확인합니다.
  if (
    event.source === window &&
    event.data &&
    event.data.from === "background"
  ) {
    // 받은 메시지를 처리합니다.
    if (event.data.action === "clickButtonInFrame") {
      clickButtonInFrame();
    }
  }
});

// 프레임 안에 있는 버튼을 클릭하는 함수
function clickButtonInFrame() {
  // 프레임 요소를 선택합니다.
  const iframeElement = document.querySelector(
    "#__tosspayments_connectpay_iframe__"
  );

  // 프레임이 로드되었는지 확인합니다.
  if (iframeElement.contentWindow) {
    // 프레임의 문서에 접근합니다.
    const frameDocument = iframeElement.contentWindow.document;

    // 버튼 요소를 선택합니다.
    const buttonInFrame = frameDocument.querySelector(
      "#connectpay-portal-container > div > div > a:nth-child(2)"
    );

    // 버튼을 클릭합니다.
    if (buttonInFrame) {
      buttonInFrame.click();
    }
  }
}

// 확장프로그램이 실행되면 background.js에 메시지를 보내 프레임 내부의 버튼을 클릭하도록 요청합니다.
window.postMessage(
  { from: "content", action: "requestClickButtonInFrame" },
  "*"
);

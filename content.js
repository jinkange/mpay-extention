setTimeout(function () {
  var iframeElement = document.getElementById(
    "__tosspayments_connectpay_iframe__"
  );

  if (iframeElement) {
    // 메시지 전송
    var message = {
      type: "clickEvent",
      selector: "#connectpay-portal-container>div>div>a:nth-child(1)",
    };
    iframeElement.contentWindow.postMessage(message, "*");
    console.log("전송");
  }
  // var anchorElement = document
  //   .getElementById("__tosspayments_connectpay_iframe__")
  //   .contentWindow.document.querySelector(
  //     "#connectpay-portal-container > div > div > a:nth-child(1)"
  //   );
  // // var anchorElement = document.querySelector(
  // //   "#connectpay-portal-container > div > div > a:nth-child(1)"
  // // );
  // console.log(anchorElement);
  // if (anchorElement) {
  //   var mouseUpEvent = new MouseEvent("mouseup", {
  //     bubbles: true,
  //     cancelable: true,
  //     view: window,
  //   });
  //   anchorElement.dispatchEvent(mouseUpEvent); // mouseup 이벤트 발생
  // }
}, 6000);

setTimeout(function () {
  var anchorElement = document
    .getElementById("__tosspayments_connectpay_iframe__")
    .contentWindow.document.querySelector(
      "#connectpay-portal-container > div > div > a:nth-child(1)"
    );

  if (anchorElement) {
    // 메시지 전송
    var message = {
      type: "clickEvent",
      targetElement:
        "#connectpay-portal-container > div > div > a:nth-child(1)",
    };
    window.postMessage(message, "*");
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
}, 7000);

setTimeout(function () {}, 3000);

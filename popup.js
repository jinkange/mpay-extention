document.getElementById("saveButton").addEventListener("click", function () {
  var inputData = document.getElementById("inputData").value;
  chrome.storage.local.set({ data: inputData }, function () {
    console.log("Data saved:", inputData);
  });
});

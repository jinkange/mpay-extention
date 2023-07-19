document.addEventListener("DOMContentLoaded", function () {
  const numberInput = document.getElementById("numberInput");
  const saveButton = document.getElementById("saveButton");
  const message = document.getElementById("message");

  saveButton.addEventListener("click", function () {
    const numberValue = numberInput.value.trim();

    // Check if the input is a 6-digit number
    if (!/^\d{6}$/.test(numberValue)) {
      message.textContent = "Please enter a valid 6-digit number.";
      return;
    }

    // Save the number to storage
    chrome.storage.sync.set({ storedNumber: numberValue }, function () {
      console.log("Number saved successfully:", numberValue);
      message.textContent = "Number saved successfully!";
      setTimeout(function () {
        message.textContent = "";
      }, 2000);
    });
    chrome.storage.sync.get("key", function (data) {
      const storedValue = data.key;
      console.log("Stored Number:", storedValue);
      alert(storedValue);

      // Display the loaded number in the input field
      numberInput.value = storedValue || "";
    });
  });
});

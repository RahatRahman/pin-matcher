/** pin matched & not matched function */
function display(id, show) {
  document.getElementById(id).style.display = show;
}
display("matched", "none");
display("notMatched", "none");

/** Pin Generate Button */
const pinBtn = document.getElementById("pinBtn");
pinBtn.addEventListener("click", function () {
  const pin = Math.floor(Math.random() * (2000 - 1001)) + 1001;
  document.getElementById("pinGenerate").value = pin;
  display("matched", "none");
  display("notMatched", "none");
});

/** Numbers, Buttons, Clear & Backspace function */
function showValue(num) {
  let inputPin = document.getElementById("inputPin");
  switch (num) {
    case "c":
      inputPin.value = "";
      break;
    case "<":
      inputPin.value = inputPin.value.substr(0, inputPin.value.length - 1);
      break;

    default:
      inputPin.value += num;

      break;
  }
}

/** Pin Submit Button portion */
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function () {
  let pinGenerate = document.getElementById("pinGenerate").value;
  let inputPin = document.getElementById("inputPin").value;
  if (pinGenerate == "" || inputPin == "") {
    alert("Input fields can not be empty");
  } else if (pinGenerate == inputPin && pinGenerate.length > 0 && inputPin.length > 0) {
    display("matched", "block");
    display("notMatched", "none");
    document.getElementById("pinGenerate").value = "";
    document.getElementById("inputPin").value = "";
  } else if (pinGenerate != inputPin) {
    display("notMatched", "block");
    display("matched", "none");

    // Try left portion
    let tryLeft = document.getElementById("tryLeft").innerText;
    let tryLeftNumber = parseInt(tryLeft);
    let tryLeftCount = tryLeftNumber - 1;
    document.getElementById("tryLeft").innerText = tryLeftCount;
    if (tryLeftCount == 0) {
      document.getElementById("submitBtn").disabled = true;
      document.getElementById("submitBtn").style.backgroundColor = "cyan";
      document.getElementById("submitBtn").style.color = "black";
    }
  }
});

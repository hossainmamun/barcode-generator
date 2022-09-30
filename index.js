// dom selection
const productName = document.getElementById("name");
const serial = document.getElementById("serial");
const batch = document.getElementById("batch");
const element = document.getElementById("barcode");
const generateForm = document.getElementById("generateBarcode");

generateForm.onsubmit = (e) => {
  e.preventDefault(e);

  const p = document.createElement("p");
  p.innerHTML = productName.value + serial.value + batch.value;

  const result = JSON.stringify(p.innerHTML);

  JsBarcode(element, result, {
    width: 1,
    height: 100,
    font: "monospace",
    displayValue: false,
  });
};

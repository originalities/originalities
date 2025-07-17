// Example product data (you can replace/add more from your JSON)
const productData = [
  {
    scratch: "S0M1-DU2E-8FV0",
    serial: "SN-PLT01-250718-0001",
    model: "Air Max Zoom"
  },
  {
    scratch: "K5Y7-RP7K-0DA0",
    serial: "SN-PLT01-250718-0002",
    model: "Reactor Nova"
  },
  {
    scratch: "D3K9-LQ2Z-9WD8",
    serial: "SN-PLT01-250718-0003",
    model: "Turbo Phantom"
  }
  // Add your full JSON records here
];

function verifyCode() {
  const input = document.getElementById("scratchInput").value.trim().toUpperCase();
  const resultDiv = document.getElementById("result");

  const match = productData.find(item => item.scratch === input);

  if (match) {
    resultDiv.innerHTML = `
      <p class="success">
        ✅ <strong>Authentic Product</strong><br><br>
        <b>Model:</b> ${match.model}<br>
        <b>Serial Number:</b> ${match.serial}
      </p>
    `;
  } else {
    resultDiv.innerHTML = `
      <p class="error">❌ <strong>Invalid or Fake Scratch Code</strong></p>
    `;
  }
}


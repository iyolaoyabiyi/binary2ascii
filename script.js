const convertBtn = document.getElementById("convertBtn");

function binaryToAscii(binaryString) {
  // Remove spaces and validate binary string
  binaryString = binaryString.replace(/\s/g, '');
  if (!/^[01]+$/.test(binaryString)) {
      throw new Error('Input must contain only 0s and 1s');
  }
  if (binaryString.length % 8 !== 0) {
      throw new Error('Binary string length must be a multiple of 8');
  }

  // Convert binary to ASCII
  let asciiText = '';
  for (let i = 0; i < binaryString.length; i += 8) {
      const byte = binaryString.substr(i, 8);
      const charCode = parseInt(byte, 2);
      asciiText += String.fromCharCode(charCode);
  }
  
  return asciiText;
}

function convertToAscii() {
  const binaryInput = document.getElementById('binaryInput').value;
  const errorElement = document.getElementById('errorMessage');
  const outputElement = document.getElementById('asciiOutput');
  
  try {
      const result = binaryToAscii(binaryInput);
      outputElement.value = result;
      errorElement.style.display = 'none';
  } catch (error) {
      errorElement.textContent = error.message;
      errorElement.style.display = 'block';
      outputElement.value = '';
  }
}

// TODO: hexToAscii (hex to binary first, maybe)
// TODO: textToBinary (convert text to binary)

convertBtn.addEventListener("click", convertToAscii);
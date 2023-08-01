let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function calculatePower() {
  displayValue = displayValue.replace("^", "**");
  calculate();
}

function calculateRoot() {
  displayValue = `Math.sqrt(${displayValue})`;
  calculate();
}

function calculateSin() {
  displayValue = `Math.sin(${displayValue})`;
  calculate();
}

function calculateCos() {
  displayValue = `Math.cos(${displayValue})`;
  calculate();
}

function calculateTan() {
  displayValue = `Math.tan(${displayValue})`;
  calculate();
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}





// medidas
function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
  
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
  }
  
  function convertToCelsius() {
    const fahrenheitInput = document.getElementById('fahrenheit');
    const celsiusInput = document.getElementById('celsius');
  
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * 5/9;
    celsiusInput.value = celsius.toFixed(2);
  }
  


  function convertToMillas() {
    const kilometrosInput = document.getElementById('kilometros');
    const millasInput = document.getElementById('millas');
  
    const kilometros = parseFloat(kilometrosInput.value);
    const millas = kilometros * 0.621371;
    millasInput.value = millas.toFixed(2);
  }
  
  function convertToKilometros() {
    const millasInput = document.getElementById('millas');
    const kilometrosInput = document.getElementById('kilometros');
  
    const millas = parseFloat(millasInput.value);
    const kilometros = millas / 0.621371;
    kilometrosInput.value = kilometros.toFixed(2);
  }

  




  function mostrarCampos() {
    const figura = document.getElementById('figura').value;
    const campos = document.querySelectorAll('.campos');
    campos.forEach(campo => campo.style.display = 'none');
  
    if (figura === 'cilindro') {
      document.getElementById('cilindroCampos').style.display = 'block';
    } else if (figura === 'esfera') {
      document.getElementById('esferaCampos').style.display = 'block';
    } else if (figura === 'cubo') {
      document.getElementById('cuboCampos').style.display = 'block';
    }
  }
  
  function calcularVolumen() {
    const figura = document.getElementById('figura').value;
    let volumen = 0;
  
    if (figura === 'cilindro') {
      const radio = parseFloat(document.getElementById('radio').value);
      const altura = parseFloat(document.getElementById('altura').value);
      volumen = Math.PI * Math.pow(radio, 2) * altura;
    } else if (figura === 'esfera') {
      const radioEsfera = parseFloat(document.getElementById('radioEsfera').value);
      volumen = (4 / 3) * Math.PI * Math.pow(radioEsfera, 3);
    } else if (figura === 'cubo') {
      const lado = parseFloat(document.getElementById('lado').value);
      volumen = Math.pow(lado, 3);
    }
  
    document.getElementById('resultado').textContent = `El volumen es: ${volumen.toFixed(2)}`;
  }
  



  function mostrarInformacion() {
    const unidades = document.getElementById('unidades').value;
    const informacionDiv = document.getElementById('informacion');
  
    if (unidades === 'seleccionar') {
      informacionDiv.innerHTML = '';
    } else {
      let informacion = '';
      switch (unidades) {
        case 'byte':
          informacion = '1 byte es la unidad básica de información en computadoras. Equivale a 8 bits.';
          break;
        case 'kilobyte':
          informacion = '1 kilobyte (KB) es igual a 1024 bytes.';
          break;
        case 'megabyte':
          informacion = '1 megabyte (MB) es igual a 1024 kilobytes o 1,048,576 bytes.';
          break;
        case 'gigabyte':
          informacion = '1 gigabyte (GB) es igual a 1024 megabytes o 1,073,741,824 bytes.';
          break;
        // Agrega más casos de unidades aquí
      }
  
      informacionDiv.innerHTML = `<p>${informacion}</p>`;
    }
  }
  
  function convertir() {
    const unidades = document.getElementById('unidades').value;
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    let resultado = 0;
  
    switch (unidades) {
      case 'byte':
        resultado = cantidad;
        break;
      case 'kilobyte':
        resultado = cantidad * 1024;
        break;
      case 'megabyte':
        resultado = cantidad * 1024 * 1024;
        break;
      case 'gigabyte':
        resultado = cantidad * 1024 * 1024 * 1024;
        break;
      // Agrega más casos de unidades aquí
    }
  
    document.getElementById('resultado').value = resultado;
}
  
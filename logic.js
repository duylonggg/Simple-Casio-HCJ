var lastAnswer = 0;
var resultDisplayed = false;

function appendToDisplay(value) {
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }
    document.calculator.display.value += value;
}

function clearDisplay() {
    document.calculator.display.value = '';
}

function deleteLastCharacter() {
    document.calculator.display.value = document.calculator.display.value.slice(0, -1);
}

function calculate() {
    try {
        lastAnswer = eval(document.calculator.display.value);
        document.calculator.display.value = lastAnswer;
        resultDisplayed = true;
    } catch (e) {
        document.calculator.display.value = 'Error';
    }
}

function useLastAnswer() {
    resultDisplayed = true;
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }
    document.calculator.display.value += lastAnswer;
    resultDisplayed = true;
}

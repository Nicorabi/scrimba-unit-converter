const inputEl = document.getElementById('input-el');
const lengthEl = document.getElementById('paragraph-length');
const volumeEl = document.getElementById('paragraph-volume');
const massEl = document.getElementById('paragraph-mass');

function length() {
    let number = inputEl.value || 0;
    let meterToFeet = number * 3.280839895;
    let feetToMeter = number * 0.3048;
    lengthEl.innerHTML = `${number} meters = ${meterToFeet.toFixed(3)} feet | ${number} feet = ${feetToMeter.toFixed(3)} meters`;
}

function volume() {
    let number = inputEl.value || 0;
    let litersToGallons = number * 0.264172;
    let gallonsToLiters = number * 3.785411784;
    volumeEl.innerHTML = `${number} liters = ${litersToGallons.toFixed(3)} gallons | ${number} gallons = ${gallonsToLiters.toFixed(3)} liters`;
}

function mass() {
    let number = inputEl.value || 0;
    let kilosToPounds = number * 2.204623;
    let poundsToKilos = number / 2.204623;
    massEl.innerHTML = `${number} kilos = ${kilosToPounds.toFixed(3)} pounds | ${number} pounds = ${poundsToKilos.toFixed(3)} kilos`;
}

function render() {
    length();
    volume();
    mass();
}

inputEl.addEventListener('input', function () {
    render();
});

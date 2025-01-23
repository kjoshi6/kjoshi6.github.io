// Custom Horoscope Data
const horoscopes = {
    aries: "Don't mumble your grievences to yourself - time to stand Up",
    taurus: "Have one emotion, please...",
    gemini: "Sit your ASS at HOME - nobody wants to play the mind games you started in your own head",
    cancer: "There is no need to manipulate everyone with your tears",
    leo: "You don't need to be asking the tough questions everyday.. the People are tired",
    virgo: "The recieptionist at the dentist didn't smile at you because she hates her job not because she hates you",
    libra: "When are you getting a personality that isn't people pleasing",
    scorpio: "No need to be eyeing everyone like a little slut",
    sagittarius: "You do not need to be terrorizing every room you walk into",
    capricorn: "Enough money talk spend some time with your loved ones please",
    aquarius: "Please face one emotion, emotionally, not logically.. we're all begging",
    pisces: "Everyone wants to come live in lala land with you"
};

// Function to Display Horoscope
function displayHoroscope() {
    const signDropdown = document.getElementById("zodiac-sign");
    const selectedSign = signDropdown.value;
    const resultDiv = document.getElementById("horoscope-result");

    if (selectedSign) {
        resultDiv.innerHTML = `<p>Your horoscope: ${horoscopes[selectedSign]}</p>`;
    } else {
        resultDiv.innerHTML = `<p>Please select a zodiac sign!</p>`;
    }
}

// Event Listener for Button
document.getElementById("get-horoscope").addEventListener("click", displayHoroscope);


// Custom Horoscope Data
const horoscopes = {
    aries: "Don't mumble your grievences to yourself - time to stand Up", "wee wee wah wah no one cares...get over it" 
    taurus: "It's okay to express your emotions, no one is going to get mad at you babe", "how does is it feel to be so funny, pretty, cool, and grounded all the time????" 
    gemini: "Sit your ASS at HOME - nobody wants to play the mind games you started in your own head", "shut up stop talking about the same 2 things on repeat. please..." , "Everyone in your life is blessed to have such an easy going, witty, loyal, smartie pants on their side" , "You are demon wrapped up in clown suit" 
    cancer: "No need to manipulate everyone with your tears honey", 
    leo: "You don't need to be asking the tough questions everyday.. the People are tired", "The world does actually revolve actually does revolve around you...somehow.."
    virgo: "The recieptionist at the dentist didn't smile at you because she hates her job not because she hates you", 
    libra: "When are you getting a personality that isn't people pleasing", "babe I'm looking for your backbone but I can't find it" , 
    scorpio: "I can feel your intensity through the screen right now", "Tell someone a secret today" 
    sagittarius: "You do not need to be terrorizing every room you walk into", 
    capricorn: "Enough money talk spend some time with your loved ones please", "Get messy this weekend, you deserve it, as a little treat" 
    aquarius: "Please face one emotion, emotionally, not logically.. we're all begging", "babe don’t listen to the haters, you are UNIQUE and DIFFERENT" , 
    pisces: "Everyone wants to come live in lala land with you" , "
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


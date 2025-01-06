// Custom Horoscope Data
const horoscopes = {
    aries: "Today, your fiery energy will help you take charge! Don't hold back—trust your instincts and move forward.",
    taurus: "Patience is your virtue today, Taurus. Take a moment to appreciate the beauty around you and avoid unnecessary conflicts.",
    gemini: "Your curiosity will lead you to exciting new opportunities. Embrace them with an open mind!",
    cancer: "It's a day for self-care, Cancer. Prioritize your emotional well-being and connect with loved ones.",
    leo: "Your charisma will be on full display today. Use it to inspire others and bring positivity into their lives.",
    virgo: "Your attention to detail will shine. Take the time to organize and plan—you'll feel more grounded.",
    libra: "Harmony and balance are your focus today. Strengthen your relationships and seek beauty in everything you do.",
    scorpio: "Your intensity will drive you toward success. Use it wisely, but don't forget to take a breather.",
    sagittarius: "Adventure is calling! Step out of your comfort zone and embrace the unknown.",
    capricorn: "Hard work will pay off today, Capricorn. Stay focused on your goals, and you'll see results soon.",
    aquarius: "Your innovative ideas will shine. Share your vision with others and watch the magic unfold.",
    pisces: "Your intuition is your superpower today, Pisces. Trust your gut feelings and let creativity guide you."
};

// Function to Display Horoscope
function displayHoroscope() {
    const signInput = document.getElementById("sign").value.toLowerCase();
    const resultDiv = document.getElementById("horoscope-result");

    if (horoscopes[signInput]) {
        resultDiv.innerHTML = `<p>Your horoscope: ${horoscopes[signInput]}</p>`;
    } else {
        resultDiv.innerHTML = `<p>Sorry, I couldn't find that sign! Please enter a valid zodiac sign.</p>`;
    }
}

// Event Listener for Button
document.getElementById("get-horoscope").addEventListener("click", displayHoroscope);

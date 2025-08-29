// Custom Horoscope Data
const horoscopes = {
    aries: [
        "Don't mumble your grievances to yourself - time to stand up",
        "Wee wee wah wah no one cares...get over it"
    ],
    taurus: [
        "It's okay to express your emotions, no one is going to get mad at you babe",
        "How does it feel to be so funny, pretty, cool, and grounded all the time????"
    ],
    gemini: [
        "Sit your ASS at HOME - nobody wants to play the mind games you started in your own head",
        "Shut up stop talking about the same 2 things on repeat. please...",
        "Everyone in your life is blessed to have such an easy going, witty, loyal, smartie pants on their side",
        "You are a demon wrapped up in a clown suit"
    ],
    cancer: [
        "No need to manipulate everyone with your tears honey"
    ],
    leo: [
        "You don't need to be asking the tough questions everyday.. the People are tired",
        "The world actually does revolve around you... somehow.."
    ],
    virgo: [
        "The receptionist at the dentist didn't smile at you because she hates her job, not because she hates you"
    ],
    libra: [
        "When are you getting a personality that isn't people pleasing?",
        "Babe I'm looking for your backbone but I can't find it"
    ],
    scorpio: [
        "I can feel your intensity through the screen right now",
        "Tell someone a secret today"
        "
    ],
    sagittarius: [
        "You do not need to be terrorizing every room you walk into"
    ],
    capricorn: [
        "Enough money talk, spend some time with your loved ones please",
        "Get messy this weekend, you deserve it, as a little treat"
    ],
    aquarius: [
        "Please face one emotion, emotionally, not logically.. we're all begging",
        "Babe don’t listen to the haters, you are UNIQUE and DIFFERENT"
    ],
    pisces: [
        "Everyone wants to come live in lala land with you"
    ]
};

  const horoscopeList = horoscopes[sign];
  const random = horoscopeList[Math.floor(Math.random() * horoscopeList.length)];

  const result = document.getElementById("horoscope-result");
  result.textContent = random;

  // Reset + replay fade-in animation
  result.classList.remove("fade-in");
  void result.offsetWidth; // trigger reflow
  result.classList.add("fade-in

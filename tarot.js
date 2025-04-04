document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.getElementById("card-container");
    const card = document.createElement("div");
    card.classList.add("card");

      // 1. Create front face (which will be empty or have a fixed image)
    const frontFace = document.createElement("div");
    frontFace.classList.add("front");
    
    // 2. Create back face (which will show the randomized card)
    const backFace = document.createElement("div");
    backFace.classList.add("back");

    // Tarot cards array
    const cards = [
        { name: "The Fool", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MDkvMTIvMzEvcndzLXRhcm90LTAwLWZvb2wtMDAzNzgwLTEwMjQuanBn/240/418/webp", description: "A new journey begins." },
        { name: "The Magician", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MDkvMTIvMzEvcndzLXRhcm90LTAxLW1hZ2ljaWFuLWQ3NjUxZS0xMDI0LmpwZw%3D%3D/240/422/webp", description: "You have the tools to manifest your dreams." },
        { name: "The High Priestess", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MDkvMTIvMzEvcndzLXRhcm90LTAyLWhpZ2gtcHJpZXN0ZXNzLWU4MDliOS0xMDI0LmpwZw%3D%3D/240/416/webp", description: "Trust your intuition." }, 
        { name: "The Empress", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcndzLXRhcm90LTAzLWVtcHJlc3MtOWFmMjE3LTEwMjQuanBn/240/410/webp", description: "Nurture creativity and abundance." },
        { name: "The Emperor", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcndzLXRhcm90LTA0LWVtcGVyb3ItMDc1NmI4LTEwMjQuanBn/240/412/webp", description: "Authority, structure, and stability." },
        { name: "The Hierophant", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcndzLXRhcm90LTA1LWhpZXJvcGhhbnQtNjI3OTZiLTEwMjQuanBn/240/413/webp", description: "Seek wisdom from tradition and spiritual guidance." },
        { name: "The Lovers", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcndzLXRhcm90LTA2LWxvdmVycy1jMThkYjQtMTAyNC5qcGc%3D/240/410/webp", description: "Union, love, and relationships." },
        { name: "The Chariot", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcndzLXRhcm90LTA3LWNoYXJpb3QtOGE5NWQ2LTEwMjQuanBn/240/414/webp", description: "Victory through determination and willpower." },
        { name: "Strength", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcndzLXRhcm90LTA4LXN0cmVuZ3RoLTQ1NjcyNy0xMDI0LmpwZw%3D%3D/240/413/webp", description: "Inner strength and courage in the face of adversity." },
        { name: "The Hermit", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MDkvMTIvMzEvcndzLXRhcm90LTA5LWhlcm1pdC1iZTM2YjUtMTAyNC5qcGc%3D/240/418/webp", description: "Introspection and seeking inner truth." },
        { name: "Wheel of Fortune", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcndzLXRhcm90LTEwLXdoZWVsLW9mLWZvcnR1bmUtZThlYjgwLTEwMjQuanBn/240/417/webp", description: "Cycles of life and destiny." },
        { name: "Justice", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcndzLXRhcm90LTExLWp1c3RpY2UtNzIxZjBjLTEwMjQuanBn/240/413/webp", description: "Fairness, balance, and accountability." },
        { name: "The Hanged Man", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcndzLXRhcm90LTEyLWhhbmdlZC1tYW4tNjI0NTIxLTEwMjQuanBn/240/422/webp", description: "Letting go, surrender, and viewing things from a new perspective." },
        { name: "Death", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcndzLXRhcm90LTEzLWRlYXRoLTc4ZTZhNC0xMDI0LmpwZw%3D%3D/240/414/webp", description: "Transformation and the end of one phase to begin another." },
        { name: "Temperance", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcndzLXRhcm90LTE0LXRlbXBlcmFuY2UtYmYzMDJlLTEwMjQuanBn/240/416/webp", description: "Patience, balance, and moderation." },
        { name: "The Devil", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcndzLXRhcm90LTE3LXN0YXItOTIzNDNiLTEwMjQuanBn/240/413/webp", description: "Temptation, addiction, and self-imposed limitations." },
        { name: "The Tower", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcndzLXRhcm90LTE2LXRvd2VyLWE5NjY1NC0xMDI0LmpwZw%3D%3D/240/415/webp", description: "Sudden upheaval, chaos, and revelation." },
        { name: "The Star", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcndzLXRhcm90LTE3LXN0YXItOTIzNDNiLTEwMjQuanBn/240/413/webp", description: "Hope, inspiration, and divine guidance." },
        { name: "The Moon", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcndzLXRhcm90LTE4LW1vb24tZDE3NjFkLTEwMjQuanBn/240/414/webp", description: "Illusion, intuition, and the unknown." },
        { name: "The Sun", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MDkvMTIvMzEvcndzLXRhcm90LTE5LXN1bi04ZjAwZTgtMTAyNC5qcGc%3D/240/414/webp", description: "Joy, vitality, and success." },
        { name: "Judgement", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcndzLXRhcm90LTIwLWp1ZGdlbWVudC1iYjBhZGYtMTAyNC5qcGc%3D/240/413/webp", description: "Self-reflection, rebirth, and reckoning." },
        { name: "The World", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcndzLXRhcm90LTIxLXdvcmxkLWFjZGFhMy0xMDI0LmpwZw%3D%3D/240/414/webp", description: "Completion, fulfillment, and harmony." },
        
        { name: "Ace of Wands", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvd2FuZHMtMDEtOTYxMTc3LTEwMjQuanBn/240/416/webp", description: "A spark of inspiration and new beginnings." },
        { name: "Two of Wands", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvd2FuZHMtMDItN2IwODkzLTEwMjQuanBn/240/413/webp", description: "Planning, discovery, and making choices." },
        { name: "Three of Wands", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvd2FuZHMtMDMtYWQ3OWE1LTEwMjQuanBn/240/417/webp", description: "Expansion, growth, and opportunity." },
        { name: "Four of Wands", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvd2FuZHMtMDQtNDk1ZDJiLTEwMjQuanBn/240/415/webp", description: "Stability, celebration, and harmony." },
        { name: "Five of Wands", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvd2FuZHMtMDUtZDZkMGUwLTEwMjQuanBn/240/415/webp", description: "Conflict, competition, and challenges." },
        { name: "Six of Wands", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvd2FuZHMtMDYtZGQxMTQzLTEwMjQuanBn/240/412/webp", description: "Victory, recognition, and success." },
        { name: "Seven of Wands", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvd2FuZHMtMDctMGM4YmE4LTEwMjQuanBn/240/415/webp", description: "Perseverance, defense, and standing your ground." },
        { name: "Eight of Wands", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvd2FuZHMtMDgtMGQ0NjY1LTEwMjQuanBn/240/413/webp", description: "Swift action, progress, and movement." },
        { name: "Nine of Wands", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvdGFyb3QtbmluZS1vZi13YW5kcy0wYWQ3MTQtMTAyNC5qcGc%3D/240/413/webp", description: "Resilience, determination, and guarding against adversity." },
        { name: "Ten of Wands", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvd2FuZHMtMTAtMjBjMGI2LTEwMjQuanBn/240/418/webp", description: "Burden, responsibility, and feeling overwhelmed." },
        { name: "Page of Wands", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvd2FuZHMtMTEtZWRlNjY4LTEwMjQuanBn/240/415/webp", description: "Curiosity, enthusiasm, and exploration." },
        { name: "Knight of Wands", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvd2FuZHMtMTItM2Y1Mjg5LTEwMjQuanBn/240/413/webp", description: "Passion, adventure, and bold action." },
        { name: "Queen of Wands", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvd2FuZHMtMTMtZTM0ZjY2LTEwMjQuanBn/240/412/webp", description: "Confidence, creativity, and charisma." },
        { name: "King of Wands", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvd2FuZHMtMTQtMmEyNmFlLTEwMjQuanBn/240/417/webp", description: "Leadership, vision, and inspiring others." },
        
        { name: "Ace of Cups", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvY3Vwcy0wMS0zMGZlMDAtMTAyNC5qcGc%3D/240/414/webp", description: "New emotional beginnings and spiritual renewal." },
        { name: "Two of Cups", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvY3Vwcy0wMi1mMWZjMzYtMTAyNC5qcGc%3D/240/415/webp", description: "Partnership, mutual love, and unity." },
        { name: "Three of Cups", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvY3Vwcy0wMy1hYmExMmYtMTAyNC5qcGc%3D/240/412/webp", description: "Celebration, friendship, and joy." },
        { name: "Four of Cups", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvY3Vwcy0wNC1kOWQ2ZmQtMTAyNC5qcGc%3D/240/412/webp", description: "Boredom, contemplation, and introspection." },
        { name: "Five of Cups", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvY3Vwcy0wNS0xZmEwODktMTAyNC5qcGc%3D/240/410/webp", description: "Loss, regret, and focusing on what is gone." },
        { name: "Six of Cups", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvY3Vwcy0wNi0wNjA5NzktMTAyNC5qcGc%3D/240/413/webp", description: "Nostalgia, memories, and joy from the past." },
        { name: "Seven of Cups", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvY3Vwcy0wNy04YzExZTQtMTAyNC5qcGc%3D/240/415/webp", description: "Choices, illusions, and being overwhelmed by options." },
        { name: "Eight of Cups", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvY3Vwcy0wOC0xZGRhYTEtMTAyNC5qcGc%3D/240/413/webp", description: "Walking away from something unfulfilling." },
        { name: "Nine of Cups", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvY3Vwcy0wOS03ZjZkYTAtMTAyNC5qcGc%3D/240/413/webp", description: "Contentment, emotional fulfillment, and wishes granted." },
        { name: "Ten of Cups", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvY3Vwcy0xMC0wZWI3NGItMTAyNC5qcGc%3D/240/415/webp", description: "Emotional bliss, family harmony, and happiness." },
        { name: "Page of Cups", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvY3Vwcy0xMS1kMmM0ZTMtMTAyNC5qcGc%3D/240/413/webp", description: "Creative inspiration, new emotional experiences, and intuition." },
        { name: "Knight of Cups", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvY3Vwcy0xMi1lNTAzNjMtMTAyNC5qcGc%3D/240/415/webp", description: "Romance, idealism, and following the heart." },
        { name: "Queen of Cups", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzIwMjMvMDgvMTYvcXVlZW4tb2YtY3Vwcy13YWl0ZS1zbWl0aC10YXJvdC1kZWNrLXlhbGUtdW5pdmVyc2l0eS03NWRkODgtMTAyNC5qcGc%3D/240/405/webp", description: "Compassion, nurturing, and emotional intelligence." },
        { name: "King of Cups", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvY3Vwcy0xNC04NDdlNGEtMTAyNC5qcGc%3D/240/410/webp", description: "Emotional balance, maturity, and wisdom." },
        
        { name: "Ace of Swords", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvc3dvcmRzLTAxLWUyM2Y2Ny0xMDI0LmpwZw%3D%3D/240/415/webp", description: "Mental clarity, new ideas, and breakthroughs." },
        { name: "Two of Swords", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvc3dvcmRzLTAyLTVkMTQyMy0xMDI0LmpwZw%3D%3D/240/410/webp", description: "Indecision, choices, and inner conflict." },
        { name: "Three of Swords", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvc3dvcmRzLTAzLWU1MTQ4Yi0xMDI0LmpwZw%3D%3D/240/417/webp", description: "Heartbreak, emotional pain, and sorrow." },
        { name: "Four of Swords", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvc3dvcmRzLTA0LTU0NzYzZi0xMDI0LmpwZw%3D%3D/240/412/webp", description: "Rest, healing, and contemplation." },
        { name: "Five of Swords", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvc3dvcmRzLTA1LTQ3OTYxNy0xMDI0LmpwZw%3D%3D/240/415/webp", description: "Conflict, betrayal, and hollow victory." },
        { name: "Six of Swords", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvc3dvcmRzLTA2LWQ2YmQyOC0xMDI0LmpwZw%3D%3D/240/414/webp", description: "Moving on, transition, and overcoming challenges." },
        { name: "Seven of Swords", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvc3dvcmRzLTA3LTVhM2YzZC0xMDI0LmpwZw%3D%3D/240/413/webp", description: "Deception, stealth, and dishonesty." },
        { name: "Eight of Swords", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvc3dvcmRzLTA4LWM0YmRkYi0xMDI0LmpwZw%3D%3D/240/413/webp", description: "Feeling trapped, restricted, and helpless." },
        { name: "Nine of Swords", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvc3dvcmRzLTA5LTdiZmFlMC0xMDI0LmpwZw%3D%3D/240/413/webp", description: "Anxiety, fear, and sleepless nights." },
        { name: "Ten of Swords", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvc3dvcmRzLTEwLTQyNThhYy0xMDI0LmpwZw%3D%3D/240/416/webp", description: "Betrayal, painful endings, and rock bottom." },
        { name: "Page of Swords", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvc3dvcmRzLTExLWE3NzM1Ni0xMDI0LmpwZw%3D%3D/240/415/webp", description: "Curiosity, observation, and new ideas." },
        { name: "Knight of Swords", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvc3dvcmRzLTEyLTVkZGEwNy0xMDI0LmpwZw%3D%3D/240/414/webp", description: "Action, ambition, and swift decision-making." },
        { name: "Queen of Swords", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvc3dvcmRzLTEzLTJjMjExYy0xMDI0LmpwZw%3D%3D/240/417/webp", description: "Clear thinking, independence, and mental strength." },
        { name: "King of Swords", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvc3dvcmRzLTE0LTdhZTg0ZS0xMDI0LmpwZw%3D%3D/240/412/webp", description: "Intellect, authority, and strategic thinking." },
        
        { name: "Ace of Pentacles", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcGVudHMtMDEtYWVmOTljLTEwMjQuanBn/240/415/webp", description: "New financial opportunities, prosperity, and material gain." },
        { name: "Two of Pentacles", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcGVudHMtMDItNzZiM2QyLTEwMjQuanBn/240/414/webp", description: "Balance, juggling priorities, and adaptability." },
        { name: "Three of Pentacles", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcGVudHMtMDMtZTYzOWUzLTEwMjQuanBn/240/412/webp", description: "Collaboration, teamwork, and building something solid." },
        { name: "Four of Pentacles", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcGVudHMtMDQtOTEwOTAzLTEwMjQuanBn/240/415/webp", description: "Security, control, and holding on to what you have." },
        { name: "Five of Pentacles", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcGVudHMtMDUtYTY1OTY1LTEwMjQuanBn/240/414/webp", description: "Financial loss, hardship, and struggle." },
        { name: "Six of Pentacles", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcGVudHMtMDYtNDYxMzFiLTEwMjQuanBn/240/415/webp", description: "Generosity, balance in giving and receiving." },
        { name: "Seven of Pentacles", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcGVudHMtMDctNDBmZjgyLTEwMjQuanBn/240/413/webp", description: "Patience, assessment, and long-term goals." },
        { name: "Eight of Pentacles", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcGVudHMtMDgtNzIyMjlhLTEwMjQuanBn/240/412/webp", description: "Hard work, dedication, and skill development." },
        { name: "Nine of Pentacles", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcGVudHMtMDktMDQxNjE4LTEwMjQuanBn/240/415/webp", description: "Financial independence, luxury, and self-sufficiency." },
        { name: "Ten of Pentacles", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcGVudHMtMTAtOWJmMzg0LTEwMjQuanBn/240/413/webp", description: "Wealth, family, and long-term success." },
        { name: "Page of Pentacles", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcGVudHMtMTEtM2EzNDc5LTEwMjQuanBn/240/414/webp", description: "Ambition, learning, and new opportunities." },
        { name: "Knight of Pentacles", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcGVudHMtMTItOWMwNDU3LTEwMjQuanBn/240/414/webp", description: "Practicality, diligence, and responsibility." },
        { name: "Queen of Pentacles", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcGVudHMtMTMtN2FmYWU3LTEwMjQuanBn/240/415/webp", description: "Nurturing, practicality, and domestic harmony." },
        { name: "King of Pentacles", image: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzE5MTAvMTIvMzEvcGVudHMtMTQtNzcxZjc1LTEwMjQuanBn/240/416/webp", description: "Success, stability, and financial mastery." }
    ];

    const cardInfo = document.getElementById("card-info");
    const cardName = document.getElementById("card-name");
    const cardDescription = document.getElementById("card-description");

    function getRandomCard() {
        return cards[Math.floor(Math.random() * cards.length)];
    }

    card.addEventListener("click", function () {
        if (!card.classList.contains("flipped")) {
            const randomCard = getRandomCard();
            backFace.style.backgroundImage = `url(${randomCard.image})`;
            frontFace.style.backgroundImage = `url('https://preview.redd.it/look-for-opinions-on-my-2-playing-card-back-designs-look-to-v0-r4rle6ipe3fc1.png?width=640&crop=smart&auto=webp&s=d4f570073deff1e24df650d8369aaaaae3b7ba39')`;
            cardName.textContent = randomCard.name;
            cardDescription.textContent = randomCard.description;
            cardInfo.style.display = "block";
            card.classList.add("flipped");
        } else {
            card.classList.remove("flipped");
            cardInfo.style.display = "none";
        }
    });

    card.appendChild(frontFace);
    card.appendChild(backFace);
    cardContainer.appendChild(card);
});

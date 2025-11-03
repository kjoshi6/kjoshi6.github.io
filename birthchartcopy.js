import { Origin, Horoscope } from "circular-natal-horoscope-js";

//////////
// Origin
//////////
// This class automatically derives the local timezone from latitude/longitude coordinates
// and calculates UTC time with respect to timezone and historical daylight savings time.
// Only works for C.E. date (> 0).
/////////
// * int year: value >= 0 C.E.
// * int month: (0 = january ...11 = december)
// * int date: (1...31)
// * int hours = local time - hours value (0...23)
// * int minute = local time - minute value (0...59)
// * float latitude = latitude in decimal format (-90.00...90.00)
// * float longitude = longitude in decimal format (-180.00...180.00)

// December 1st, 2020 - 430pm
const origin = new Origin({
  year: 2020,
  month: 11, // 0 = January, 11 = December!
  date: 1,
  hour: 16,
  minute: 30,
  latitude: 40.0,
  longitude: -70.0,
});
import { Origin, Horoscope } from "circular-natal-horoscope-js";

//////////
// Horoscope
//////////
// This class contains horoscope chart calculations
/////////
// * Origin origin: instance of the Origin class
// * string houseSystem: one of the following: ['placidus', 'koch', 'campanus', 'whole-sign', 'equal-house', 'regiomontanus', 'topocentric'] - full list validated in self.HouseSystems
// * string zodiac: one of the following: ['sidereal', 'tropical'] - full list validated self.ZodiacSystems
// * array aspectPoints = an array containing all or none of the strings "bodies", "points", or "angles" to determine which starting points will be used in aspect generation
// * array aspectWithPoints = an array containing all or none of the strings "bodies", "points", or "angles" to determine ending points will be used in aspect generation
// * array aspectTypes = an array containing all or none of the following: "major", "minor", "conjunction", "opposition", etc to determine which aspects to calculate.
// * object customOrbs = an object with specific keys set to override the default orbs and set your own for aspect calculation.
// * string language = the language code (en, es, etc) which will return labels and results in a specific language, if configured.
//
// *NOTE: "bodies" = planets, "points" = lunar nodes / lilith, "angles" = ascendant / midheaven
// *NOTE: You can also pass in individual bodies, points, or angles into aspectPoints or aspectWithPoints
// * example: { aspectPoints: ["sun"], aspectWithPoints: ["moon"], aspectTypes: ["major", "quincunx"] }
// * will only calculate sun to moon major or quincunx aspects if they exist
// * All usable keys found in ./src/constant.js under BODIES, POINTS, ANGLES


const horoscope = new Horoscope({
      origin: new Origin({...}),
      houseSystem: "whole-sign",
      zodiac: "tropical",
      aspectPoints: ['bodies', 'points', 'angles'],
      aspectWithPoints: ['bodies', 'points', 'angles'],
      aspectTypes: ["major", "minor"],
      customOrbs: {},
      language: 'en'
    });

import { Origin, Horoscope } from "circular-natal-horoscope-js";


const customOrbs = {
      conjunction: 8,
      opposition: 8,
      trine: 8,
      square: 7,
      sextile: 6,
      quincunx: 5,
      quintile: 1,
      septile: 1,
      "semi-square": 1,
      "semi-sextile": 1,
    };


const horoscope = new Horoscope({
      origin: new Origin({...}),
      houseSystem: "whole-sign",
      zodiac: "tropical",
      aspectPoints: ['bodies', 'points', 'angles'],
      aspectWithPoints: ['bodies', 'points', 'angles'],
      aspectTypes: ["major", "minor"],
      customOrbs: customOrbs,
      language: 'en'
    });


import { Origin, Horoscope } from "circular-natal-horoscope-js";


const horoscope = new Horoscope({...})


// Info for all critical angles
horoscope.Angles = {
  all: [...],
  ascendant: {...},
  midheaven: {...}
}

// The ascendant info
horoscope.Ascendant = {...}

// Aspect results
horoscope.Aspects = {
  all: [...],
  points: {
    // organized by point
    ascendant: [...], // etc
    sun: [...], // etc
    moon: [...], // etc
  },
  types: {
    // organized by type
    conjunction: [...], // etc
    opposition: [...] // etc
  }
}

// Planet / Asteriod results
// sun, moon, mercury, venus, mars, jupiter, saturn, uranus, neptune, pluto, chiron, sirius
horoscope.CelestialBodies = {
  all: [...],
  sun: {...}, // etc
  moon: {...} // etc
}

// lunar results
// northnode, southnode, lilith
horoscope.CelestialPoints = {
  all: [...],
  northnode: {...}, //etc
}

// house cusps
horoscope.Houses = [
  ...12
]

// Midheaven info

horoscope.Midheaven = {
  ...
}

// Info about what zodiac sign the sun is in at a given origin
horoscope.SunSign = {
  ...
}

// Info about the zodiac cusps at the given date/time/location origin
horoscope.ZodiacCusps = [
  ...12
]

const mercury = {
  ...,
  // ChartPosition for a mercury in Libra and conjunct the ascendant.
  ChartPosition: {
    Horizon: { // mercury is on the horizon mercury the ascendant (0 deg horizon)
      ArcDegrees: {degrees: 0, minutes: 0, seconds: 0}
      ArcDegreesFormatted: "0° 0' 0''"
      ArcDegreesFormatted30: "0° 0' 0''"
      DecimalDegrees: 0
    },
    Ecliptic: { // mercury is also at 180 degrees on the ecliptic, so within Libra sign.
      ArcDegrees: {degrees: 180, minutes: 38, seconds: 2}
      ArcDegreesFormatted: "180° 38' 2''"
      ArcDegreesFormatted30: "0° 38' 2''"
      DecimalDegrees: 180.634
    }
  }
}


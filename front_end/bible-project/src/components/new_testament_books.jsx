// new_testament_books.js

export const newTestamentBooks = [
    "Matthew",
    "Mark",
    "Luke",
    "John",
    "Acts",
    "Romans",
    "1 Corinthians",
    "2 Corinthians",
    "Galatians",
    "Ephesians",
    "Philippians",
    "Colossians",
    "1 Thessalonians",
    "2 Thessalonians",
    "1 Timothy",
    "2 Timothy",
    "Titus",
    "Philemon",
    "Hebrews",
    "James",
    "1 Peter",
    "2 Peter",
    "1 John",
    "2 John",
    "3 John",
    "Jude",
    "Revelation"
  ];

  export const bookId = {
    "Matthew": "MAT",
    "Mark": "MRK",
    "Luke": "LUK",
    "John": "JHN",
    "Acts": "ACT",
    "Romans": "ROM",
    "1 Corinthians": "1CO",
    "2 Corinthians": "2CO", 
    "Galatians": "GAL", 
    "Ephesians": "EPH", 
    "Philippians": "PHP", 
    "Colossians": "COL", 
    "1 Thessalonians": "1TH", 
    "2 Thessalonians": "2TH", 
    "1 Timothy": "1TI",
    "2 Timothy": "2TI",
    "Titus": "TIT", 
    "Philemon": "PHM",
    "Hebrews": "HEB",
    "James": "JAS",
    "1 Peter": "1PE",
    "2 Peter": "2PE",
    "1 John": "1JN",
    "2 John": "2JN",
    "3 John": "3JN",
    "Jude": "JUD",
    "Revelation": "REV",
  };

export const reverseBookId = Object.fromEntries(Object.entries(bookId).map(([key, value]) => [value, key]));


export const newTestamentChaptersVerses = {
  'Matthew': {
    chapters: 28,
    verses: {
      1: 25,
      2: 23,
      3: 17,
      4: 25,
      5: 48,
      6: 34,
      7: 29,
      8: 34,
      9: 38,
      10: 42,
      11: 30,
      12: 50,
      13: 58,
      14: 36,
      15: 39,
      16: 28,
      17: 27,
      18: 35,
      19: 30,
      20: 34,
      21: 46,
      22: 46,
      23: 39,
      24: 51,
      25: 46,
      26: 75,
      27: 66,
      28: 20,
    },
  },
  'Mark': {
    chapters: 16,
    verses: {
      1: 45,
      2: 28,
      3: 35,
      4: 41,
      5: 43,
      6: 56,
      7: 37,
      8: 38,
      9: 50,
      10: 52,
      11: 33,
      12: 44,
      13: 37,
      14: 72,
      15: 47,
      16: 20,
    },
  },
  'Luke': {
    chapters: 24,
    verses: {
      1: 80,
      2: 52,
      3: 38,
      4: 44,
      5: 39,
      6: 49,
      7: 50,
      8: 56,
      9: 62,
      10: 42,
      11: 54,
      12: 59,
      13: 35,
      14: 35,
      15: 32,
      16: 31,
      17: 37,
      18: 43,
      19: 48,
      20: 47,
      21: 38,
      22: 71,
      23: 56,
      24: 53
    },
  },
  'John': {
    chapters: 21,
    verses: {
      1: 51,
      2: 25,
      3: 36,
      4: 54,
      5: 47,
      6: 71,
      7: 53,
      8: 59,
      9: 41,
      10: 42,
      11: 57,
      12: 50,
      13: 38,
      14: 31,
      15: 27,
      16: 33,
      17: 26,
      18: 40,
      19: 42,
      20: 31,
      21: 25
    },
  },
  'Acts': {
    chapters: 28,
    verses: {
      1: 26,
      2: 47,
      3: 26,
      4: 37,
      5: 42,
      6: 15,
      7: 60,
      8: 40,
      9: 43,
      10: 48,
      11: 30,
      12: 25,
      13: 52,
      14: 28,
      15: 41,
      16: 40,
      17: 34,
      18: 28,
      19: 41,
      20: 38,
      21: 40,
      22: 30,
      23: 35,
      24: 27,
      25: 27,
      26: 32,
      27: 44,
      28: 31
    },
  },
  'Romans': {
    chapters: 16,
    verses: {
      1: 32,
      2: 29,
      3: 31,
      4: 25,
      5: 21,
      6: 23,
      7: 25,
      8: 39,
      9: 33,
      10: 21,
      11: 36,
      12: 21,
      13: 14,
      14: 23,
      15: 33,
      16: 27
    },
  },
  '1 Corinthians': {
    chapters: 16,
    verses: {
      1: 31,
      2: 16,
      3: 23,
      4: 21,
      5: 13,
      6: 20,
      7: 40,
      8: 13,
      9: 27,
      10: 33,
      11: 34,
      12: 31,
      13: 13,
      14: 40,
      15: 58,
      16: 24,
    },
  },
  '2 Corinthians': {
    chapters: 13,
    verses: {
      1: 24,
      2: 17,
      3: 18,
      4: 18,
      5: 21,
      6: 18,
      7: 16,
      8: 24,
      9: 15,
      10: 18,
      11: 33,
      12: 21,
      13: 14
    },
  },
  'Galatians': {
    chapters: 6,
    verses: {
      1: 24,
      2: 21,
      3: 29,
      4: 31,
      5: 26,
      6: 18
    },
  },
 'Ephesians': {
    chapters: 6,
    verses: {
      1: 23,
      2: 22,
      3: 21,
      4: 32,
      5: 33,
      6: 24
    },
  },
  'Philippians': {
    chapters: 4,
    verses: {
      1: 30,
      2: 30,
      3: 21,
      4: 23
    },
  },
  'Colossians': {
    chapters: 4,
    verses: {
      1: 29,
      2: 23,
      3: 25,
      4: 18
    },
  },
  '1 Thessalonians': {
    chapters: 5,
    verses: {
      1: 10,
      2: 20,
      3: 13,
      4: 18,
      5: 28
    },
  },
 '2 Thessalonians': {
    chapters: 3,
    verses: {
      1: 12,
      2: 17,
      3: 18
    },
  },
  '1 Timothy': {
    chapters: 6,
    verses: {
      1: 20,
      2: 15,
      3: 16,
      4: 16,
      5: 25,
      6: 21
    },
  },
  '2 Timothy': {
    chapters: 4,
    verses: {
      1: 18,
      2: 26,
      3: 17,
      4: 22
    },
  },
  'Titus': {
    chapters: 3,
    verses: {
      1: 16,
      2: 15,
      3: 15,
    },
  },
  'Philemon': {
    chapters: 1,
    verses: {
      1: 25
    },
  },
  'Hebrews': {
    chapters: 8,
    verses: {
      1: 14,
      2: 18,
      3: 19,
      4: 16,
      5: 14,
      6: 20,
      7: 28,
      8: 13,
    },
  },
  'James': {
    chapters: 5,
    verses: {
      1: 27,
      2: 26,
      3: 18,
      4: 17,
      5: 20,
    },
  },
  '1 Peter': {
    chapters: 5,
    verses: {
      1: 25,
      2: 25,
      3: 22,
      4: 19,
      5: 14,
    },
  },
  '2 Peter': {
    chapters: 3,
    verses: {
      1: 21,
      2: 22,
      3: 18,
    },
  },
  '1 John': {
    chapters: 5,
    verses: {
      1: 10,
      2: 29,
      3: 24,
      4: 21,
      5: 21,
    },
  },
  '2 John': {
    chapters: 1,
    verses: {
      1: 13,
    },
  },
  '3 John': {
    chapters: 1,
    verses: {
      1: 15,
    },
  },
  'Jude': {
    chapters: 1,
    verses: {
      1: 25,
    },
  },

  'Revelation': {
    chapters: 22,
    verses: {
      1: 20,
      2: 29,
      3: 22, 
      4: 11,  
      5: 14, 
      6: 17, 
      7: 17, 
      8: 13, 
      9: 21, 
      10: 11, 
      11: 19, 
      12: 17, 
      13: 18, 
      14: 20,
      15: 8, 
      16: 21, 
      17: 18, 
      18: 24, 
      19: 21, 
      20: 15, 
      21: 27, 
      22: 21,
    },
  },
};



 
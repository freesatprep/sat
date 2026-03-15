const questions = [
  {
    question: "1 + 1 = ?",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "1 + 1 = 2. Adding one to one gives you two — the most fundamental addition fact.",
    section: "Math"
  },
  {
    question: "2 + 3 = ?",
    options: ["3", "4", "5", "6"],
    answer: "5",
    explanation: "2 + 3 = 5. Count up 3 from 2: 3, 4, 5.",
    section: "Math"
  },
  {
    question: "5 - 2 = ?",
    options: ["1", "2", "3", "4"],
    answer: "3",
    explanation: "5 - 2 = 3. Subtracting 2 from 5 leaves 3.",
    section: "Math"
  },
  {
    question: "4 x 2 = ?",
    options: ["6", "7", "8", "9"],
    answer: "8",
    explanation: "4 × 2 = 8. Multiplication is repeated addition: 4 + 4 = 8.",
    section: "Math"
  },
  {
    question: "10 ÷ 2 = ?",
    options: ["3", "4", "5", "6"],
    answer: "5",
    explanation: "10 ÷ 2 = 5. Division asks how many groups of 2 fit into 10 — the answer is 5.",
    section: "Math"
  },
  {
    question: "3 + 7 = ?",
    options: ["8", "9", "10", "11"],
    answer: "10",
    explanation: "3 + 7 = 10. These two numbers are a classic pair that sum to 10.",
    section: "Math"
  },
  {
    question: "6 x 3 = ?",
    options: ["15", "16", "17", "18"],
    answer: "18",
    explanation: "6 × 3 = 18. Think of it as 6 + 6 + 6 = 18.",
    section: "Math"
  },
  {
    question: "15 - 6 = ?",
    options: ["7", "8", "9", "10"],
    answer: "9",
    explanation: "15 - 6 = 9. Count back 6 from 15: 14, 13, 12, 11, 10, 9.",
    section: "Math"
  },
  {
    question: "12 ÷ 4 = ?",
    options: ["2", "3", "4", "5"],
    answer: "3",
    explanation: "12 ÷ 4 = 3. Four goes into twelve exactly three times (4 × 3 = 12).",
    section: "Math"
  },
  {
    question: "7 + 8 = ?",
    options: ["13", "14", "15", "16"],
    answer: "15",
    explanation: "7 + 8 = 15. A useful trick: 7 + 8 = 7 + 7 + 1 = 14 + 1 = 15.",
    section: "Math"
  },
  {
    question: "Which word is a noun?",
    options: ["Run", "Happy", "Dog", "Quickly"],
    answer: "Dog",
    explanation: "A noun is a person, place, or thing. 'Dog' is a thing. 'Run' is a verb, 'Happy' is an adjective, and 'Quickly' is an adverb.",
    section: "English"
  },
  {
    question: "Which word is a verb?",
    options: ["Blue", "Jump", "Tall", "Slowly"],
    answer: "Jump",
    explanation: "A verb is an action or state of being. 'Jump' is an action. 'Blue' is an adjective, 'Tall' is an adjective, and 'Slowly' is an adverb.",
    section: "English"
  },
  {
    question: "Which sentence is correct?",
    options: ["She don't like it.", "She doesn't likes it.", "She doesn't like it.", "She not like it."],
    answer: "She doesn't like it.",
    explanation: "With a singular subject like 'she', use 'doesn't' (does + not). The verb after 'doesn't' stays in base form — 'like', not 'likes'.",
    section: "English"
  },
  {
    question: "What is the plural of 'child'?",
    options: ["Childs", "Childes", "Children", "Childrens"],
    answer: "Children",
    explanation: "'Child' is an irregular noun. Its plural is 'children' — you can't just add -s. Other irregular plurals include man/men and mouse/mice.",
    section: "English"
  },
  {
    question: "Which word means the opposite of 'happy'?",
    options: ["Joyful", "Sad", "Excited", "Calm"],
    answer: "Sad",
    explanation: "The antonym (opposite) of 'happy' is 'sad'. Joyful and excited are synonyms of happy. Calm is neutral.",
    section: "English"
  },
  {
    question: "Which punctuation ends a question?",
    options: [".", "!", "?", ","],
    answer: "?",
    explanation: "A question mark (?) ends a sentence that asks something. A period ends a statement, an exclamation mark shows strong emotion, and a comma creates a pause.",
    section: "English"
  },
  {
    question: "Which word is an adjective?",
    options: ["Swim", "Quickly", "Bright", "They"],
    answer: "Bright",
    explanation: "An adjective describes a noun. 'Bright' describes how something looks or feels. 'Swim' is a verb, 'Quickly' is an adverb, and 'They' is a pronoun.",
    section: "English"
  },
  {
    question: "Choose the correct spelling:",
    options: ["Recieve", "Receive", "Receve", "Receieve"],
    answer: "Receive",
    explanation: "Remember the rule: 'i before e, except after c'. Since 'c' comes before, it's 'ei' — so 'receive' is correct.",
    section: "English"
  },
  {
    question: "Which word is a synonym for 'big'?",
    options: ["Tiny", "Small", "Large", "Short"],
    answer: "Large",
    explanation: "A synonym is a word with a similar meaning. 'Large' means the same as 'big'. 'Tiny' and 'Small' are antonyms (opposites), and 'Short' refers to height.",
    section: "English"
  },
  {
    question: "What is the past tense of 'run'?",
    options: ["Runned", "Runs", "Ran", "Running"],
    answer: "Ran",
    explanation: "'Run' is an irregular verb — its past tense is 'ran', not 'runned'. 'Runs' is present tense, and 'Running' is the present participle.",
    section: "English"
  }
];
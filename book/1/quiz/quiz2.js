// book/1/quiz/quiz2.js
// 12 Comprehension Questions for Chapter 2: The Mystery Photo

if (!window.quizzesData) {
  window.quizzesData = {};
}

window.quizzesData[1] = {
  questions: [
    {
      questionNumber: 1,
      question: "What was Mom doing when Zoey burst into her office?",
      answerOptions: [
        { text: "Packing and getting ready for an upcoming trip.", isCorrect: true, rationale: "Mom tells Zoey she is almost finished getting ready for her trip." },
        { text: "Grading science test papers at her desk.", isCorrect: false, rationale: "She was preparing to leave for a week-long conference trip." },
        { text: "Reading a book about magical reptiles.", isCorrect: false, rationale: "She was packing papers and luggage." },
        { text: "Searching for lost Thinking Goggles.", isCorrect: false, rationale: "Zoey already had her goggles; Mom was packing." }
      ]
    },
    {
      questionNumber: 2,
      question: "What did Zoey want her mom to come outside and see?",
      answerOptions: [
        { text: "The bug circus with the roly-poly tightrope.", isCorrect: true, rationale: "Zoey asked Mom to come see the circus she built with a tightrope and hoops." },
        { text: "A magical bird singing in a tree.", isCorrect: false, rationale: "She wanted to show Mom the roly-poly circus." },
        { text: "A strange footprint in the mud.", isCorrect: false, rationale: "She was excited about her bug performers." },
        { text: "Sassafras catching mice by the barn.", isCorrect: false, rationale: "She wanted to share her bug circus creation." }
      ]
    },
    {
      questionNumber: 3,
      question: "How long would Mom be away on her trip?",
      answerOptions: [
        { text: "A whole week.", isCorrect: true, rationale: "Zoey was nervous about not seeing her mother for a whole week." },
        { text: "Just for the weekend.", isCorrect: false, rationale: "The text specifies she will be gone for a whole week." },
        { text: "For one single afternoon.", isCorrect: false, rationale: "It was a week-long conference." },
        { text: "For an entire month.", isCorrect: false, rationale: "She was leaving for one week." }
      ]
    },
    {
      questionNumber: 4,
      question: "What did Mom quickly hide under papers when Zoey entered?",
      answerOptions: [
        { text: "A photograph.", isCorrect: true, rationale: "Mom jumped and quickly hid a photo under a pile of papers." },
        { text: "A birthday present.", isCorrect: false, rationale: "She hid a photo of herself as a child." },
        { text: "A secret map of the forest.", isCorrect: false, rationale: "It was a photograph, not a map." },
        { text: "Her airplane boarding ticket.", isCorrect: false, rationale: "She hid the glowing photo." }
      ]
    },
    {
      questionNumber: 5,
      question: "How did Zoey locate the hidden photo under the pile of papers?",
      answerOptions: [
        { text: "She saw a purple glow coming from beneath the papers.", isCorrect: true, rationale: "Zoey noticed a purple glow shining out from under the papers." },
        { text: "Sassafras pulled the papers away with his teeth.", isCorrect: false, rationale: "Zoey spotted the glowing light herself." },
        { text: "Mom accidentally dropped it on the floor.", isCorrect: false, rationale: "It was hidden under the papers until Zoey moved them." },
        { text: "The photo began buzzing loudly.", isCorrect: false, rationale: "It was glowing quietly with purple light." }
      ]
    },
    {
      questionNumber: 6,
      question: "Who was in the photograph that Zoey found?",
      answerOptions: [
        { text: "Zoey's mom when she was around Zoey's age.", isCorrect: true, rationale: "The text states: 'In the photo was my mom when she was around my age.'" },
        { text: "Zoey's grandmother holding a kitten.", isCorrect: false, rationale: "It was Mom as a young girl." },
        { text: "Zoey's father as a boy.", isCorrect: false, rationale: "It was a photo of her mom." },
        { text: "A famous scientist from a textbook.", isCorrect: false, rationale: "It was Mom when she was around Zoey's age." }
      ]
    },
    {
      questionNumber: 7,
      question: "What two physical details did Zoey notice about Mom in the photo?",
      answerOptions: [
        { text: "She was grinning with two missing teeth.", isCorrect: true, rationale: "Zoey described her mom 'grinning with two missing teeth.'" },
        { text: "She had short blonde hair and glasses.", isCorrect: false, rationale: "The text only mentions her big grin and missing teeth." },
        { text: "She was wearing a winter snow suit.", isCorrect: false, rationale: "No snow suit is mentioned." },
        { text: "She was crying in the woods.", isCorrect: false, rationale: "She was grinning happily." }
      ]
    },
    {
      questionNumber: 8,
      question: "What was sitting on Mom's head in the photo?",
      answerOptions: [
        { text: "A glowing purple frog.", isCorrect: true, rationale: "The text explicitly states: 'With a purple frog on her head. That was glowing.'" },
        { text: "A baby dragon with tiny wings.", isCorrect: false, rationale: "Marshmallow the dragon appears in later chapters; this was a frog." },
        { text: "A furry winged caterpillar.", isCorrect: false, rationale: "It was a purple frog." },
        { text: "Her Thinking Goggles.", isCorrect: false, rationale: "It was a live, glowing purple frog." }
      ]
    },
    {
      questionNumber: 9,
      question: "How did Zoey's hand react as she held out the photo to Mom?",
      answerOptions: [
        { text: "Her hand was trembling with shock.", isCorrect: true, rationale: "Zoey says: 'I held out the photo with a trembling hand.'" },
        { text: "She threw it across the room.", isCorrect: false, rationale: "She held it out carefully, though her hand trembled." },
        { text: "She clapped her hands happily.", isCorrect: false, rationale: "She was stunned and bewildered by the glow." },
        { text: "She tucked it inside her pocket.", isCorrect: false, rationale: "She showed it directly to her mother." }
      ]
    },
    {
      questionNumber: 10,
      question: "What happened when Mom spun around to see what Zoey was holding?",
      answerOptions: [
        { text: "Papers she was holding fell and scattered on the ground.", isCorrect: true, rationale: "Mom spun around so fast that papers fell and scattered across the floor." },
        { text: "She spilled a cup of warm tea.", isCorrect: false, rationale: "She dropped the papers she was holding." },
        { text: "She tripped over Sassafras.", isCorrect: false, rationale: "She dropped her documents in shock." },
        { text: "She slammed her office door shut.", isCorrect: false, rationale: "She simply spun around in surprise." }
      ]
    },
    {
      questionNumber: 11,
      question: "What surprising question did Mom immediately ask Zoey?",
      answerOptions: [
        { text: "\"You see Pip?\"", isCorrect: true, rationale: "Mom spun around and asked in astonishment: 'You see Pip?'" },
        { text: "\"Where did you find my Thinking Goggles?\"", isCorrect: false, rationale: "She asked if Zoey could see Pip." },
        { text: "\"Why did you go into the old barn?\"", isCorrect: false, rationale: "She asked about Pip the frog." },
        { text: "\"Did Sassafras eat another bug?\"", isCorrect: false, rationale: "Her focus was entirely on whether Zoey saw the magical creature." }
      ]
    },
    {
      questionNumber: 12,
      question: "How did Zoey feel after Mom asked her about 'Pip'?",
      answerOptions: [
        { text: "Completely bewildered and wondering what on earth was going on.", isCorrect: true, rationale: "Zoey thought: 'Pip? Who was Pip? What on earth was going on?'" },
        { text: "Angry that Mom had kept a secret.", isCorrect: false, rationale: "She was confused and amazed, not angry." },
        { text: "Confident she knew the whole mystery.", isCorrect: false, rationale: "She had no idea who Pip was yet." },
        { text: "Bored and wanting to go back to the circus.", isCorrect: false, rationale: "She was deeply intrigued by the mystery." }
      ]
    }
  ]
};
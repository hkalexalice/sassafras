// book/1/quiz/quiz1.js
// 12 Comprehension Questions for Chapter 1: Bug Circus

if (!window.quizzesData) {
  window.quizzesData = {};
}

window.quizzesData[0] = {
  questions: [
    {
      questionNumber: 1,
      question: "What was Sassafras trying to do with his paws under the tree?",
      answerOptions: [
        { text: "Flip over a heavy, mossy rock.", isCorrect: true, rationale: "The story begins with Sassafras trying to flip over a heavy, mossy rock with his paws." },
        { text: "Dig a deep hole in the mud.", isCorrect: false, rationale: "He was trying to flip over a rock, not dig a hole." },
        { text: "Catch a butterfly in the grass.", isCorrect: false, rationale: "He was focused on the heavy rock on the ground." },
        { text: "Climb up a tall wooden fence.", isCorrect: false, rationale: "He was on the ground using his paws on a rock." }
      ]
    },
    {
      questionNumber: 2,
      question: "What 'treasure' did Zoey discover under the rock?",
      answerOptions: [
        { text: "About twenty roly-poly bugs.", isCorrect: true, rationale: "Zoey said the rock was hiding a treasure: 'A billion roly-poly bugs! OK... maybe not a billion. But at least twenty.'" },
        { text: "A shiny gold coin.", isCorrect: false, rationale: "The treasure was a colony of roly-poly bugs." },
        { text: "A buried magical key.", isCorrect: false, rationale: "She found roly-polies, not a key." },
        { text: "A sleeping purple frog.", isCorrect: false, rationale: "Pip the frog appears in Chapter 2 and 3, not under this rock." }
      ]
    },
    {
      questionNumber: 3,
      question: "Why do Zoey and Sassafras love bugs for different reasons?",
      answerOptions: [
        { text: "Zoey loves to play with them, but Sassafras loves to eat them.", isCorrect: true, rationale: "Zoey explains: 'I love to play with them. He loves to eat them.'" },
        { text: "Zoey is afraid of them, but Sassafras protects them.", isCorrect: false, rationale: "Zoey is not afraid; she loves playing with them." },
        { text: "Zoey collects them in jars, but Sassafras ignores them.", isCorrect: false, rationale: "Sassafras definitely does not ignore them; he considers them snacks." },
        { text: "Zoey trains them, but Sassafras is scared of them.", isCorrect: false, rationale: "Sassafras wants to eat them, not run away from them." }
      ]
    },
    {
      questionNumber: 4,
      question: "Why does Zoey wear her Thinking Goggles on top of her head instead of over her eyes?",
      answerOptions: [
        { text: "So they are closer to her brain when thinking of brilliant ideas.", isCorrect: true, rationale: "Zoey explains that wearing them on top of her head puts them closer to her brain for brilliant ideas." },
        { text: "Because the glass is too dark to see through.", isCorrect: false, rationale: "She uses them over her eyes for safety, but on her head for thinking." },
        { text: "Because her cat scratched the lenses.", isCorrect: false, rationale: "The goggles are in good condition; she wears them on her head by choice." },
        { text: "Because they are too big for her face.", isCorrect: false, rationale: "It is her scientific thinking ritual." }
      ]
    },
    {
      questionNumber: 5,
      question: "What inspired Zoey to create a 'bug circus'?",
      answerOptions: [
        { text: "A roly-poly walking across her touching pointer fingers like a bridge.", isCorrect: true, rationale: "The roly-poly walked across the bridge made by her pointer fingers, giving her the circus idea." },
        { text: "A poster she saw in her bedroom.", isCorrect: false, rationale: "She was inspired directly by the bug walking on her fingers." },
        { text: "A television show about acrobatics.", isCorrect: false, rationale: "The inspiration came from hands-on observation in her yard." },
        { text: "A suggestion from her mother in the house.", isCorrect: false, rationale: "Her mother was inside packing; Zoey came up with the idea herself." }
      ]
    },
    {
      questionNumber: 6,
      question: "What obstacle did Zoey create using a flat piece of bark and grass?",
      answerOptions: [
        { text: "A swing held low to the ground.", isCorrect: true, rationale: "She tied grass on either end of a flat piece of bark to make a swing." },
        { text: "A water slide for the beetles.", isCorrect: false, rationale: "She made a swing, not a slide." },
        { text: "A tiny wooden house.", isCorrect: false, rationale: "It was an acrobatic swing for the performers." },
        { text: "A catapult for jumping.", isCorrect: false, rationale: "She made a low swing so performers wouldn't get hurt if they fell." }
      ]
    },
    {
      questionNumber: 7,
      question: "What was Zoey's favorite part of the bug circus?",
      answerOptions: [
        { text: "A tightrope made of a long twig balanced between two flat rocks.", isCorrect: true, rationale: "The text states: 'My favorite part was a tightrope I made by balancing a long twig between two flat rocks.'" },
        { text: "The hoop made of bent twigs.", isCorrect: false, rationale: "She had hoops, but the tightrope was her favorite part." },
        { text: "The small round balancing stones.", isCorrect: false, rationale: "Her explicitly stated favorite was the tightrope." },
        { text: "The bark swing.", isCorrect: false, rationale: "The tightrope was her favorite." }
      ]
    },
    {
      questionNumber: 8,
      question: "What happened when the bigger roly-polies tried to cross the tightrope?",
      answerOptions: [
        { text: "They tumbled off into the soft grass.", isCorrect: true, rationale: "The text says: 'He tumbled into the grass. And then another one followed. The bigger roly-polies were having too much trouble.'" },
        { text: "They crossed quickly and safely.", isCorrect: false, rationale: "Only the smallest bug was able to make it across." },
        { text: "They curled into balls and fell asleep on the twig.", isCorrect: false, rationale: "They fell off instead of completing the walk." },
        { text: "They broke the twig in half.", isCorrect: false, rationale: "The twig held; the bugs simply lost their balance." }
      ]
    },
    {
      questionNumber: 9,
      question: "Which roly-poly successfully crossed the tightrope?",
      answerOptions: [
        { text: "The smallest roly-poly that Zoey plucked from the ground.", isCorrect: true, rationale: "Zoey picked the smallest roly-poly, and it made it all the way across while she held her breath." },
        { text: "The biggest roly-poly with shiny shell.", isCorrect: false, rationale: "The biggest bug tumbled off." },
        { text: "A medium-sized spotted roly-poly.", isCorrect: false, rationale: "It was specifically the smallest one." },
        { text: "None of the bugs could do it.", isCorrect: false, rationale: "The smallest bug completed the stunt successfully." }
      ]
    },
    {
      questionNumber: 10,
      question: "Why was Zoey's mom inside the house instead of outside playing?",
      answerOptions: [
        { text: "She was packing her bags for a trip.", isCorrect: true, rationale: "Zoey remembered: 'she was inside packing. I was so used to her being out here with me.'" },
        { text: "She was cooking dinner for the family.", isCorrect: false, rationale: "She was packing for a week-long conference trip." },
        { text: "She was taking a nap in her bedroom.", isCorrect: false, rationale: "She was active in her office getting ready." },
        { text: "She was reading science textbooks.", isCorrect: false, rationale: "She was preparing her luggage for departure." }
      ]
    },
    {
      questionNumber: 11,
      question: "What was Sassafras caught doing while Zoey celebrated?",
      answerOptions: [
        { text: "Creeping toward the circus performers to eat them.", isCorrect: true, rationale: "Zoey glanced over her shoulder just in time to catch Sassafras creeping toward the bugs." },
        { text: "Climbing a tree to catch birds.", isCorrect: false, rationale: "He was stalking the roly-polies." },
        { text: "Running into the forest alone.", isCorrect: false, rationale: "He was trying to get a quick bug snack." },
        { text: "Napping on the Thinking Goggles.", isCorrect: false, rationale: "He was stalking the circus bugs." }
      ]
    },
    {
      questionNumber: 12,
      question: "What was Mom doing when Zoey spotted her in the window?",
      answerOptions: [
        { text: "Holding a photo and looking out at the old barn.", isCorrect: true, rationale: "Zoey saw Mom in the window: 'She was looking at our old barn. And holding a photo.'" },
        { text: "Waving happily back at Zoey and Sassafras.", isCorrect: false, rationale: "Mom was distracted and looking toward the barn." },
        { text: "Talking on the telephone with Dad.", isCorrect: false, rationale: "She was quietly holding a photo." },
        { text: "Zipping up her travel suitcase.", isCorrect: false, rationale: "She was looking out toward the old barn holding a photo." }
      ]
    }
  ]
};
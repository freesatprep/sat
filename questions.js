const questions = [

/* ================= ENGLISH ================= */

{
question: "The periodic table is not a static document; rather, it is a ______ map of human discovery, constantly expanding as scientists synthesize new elements.",
options: ["predictable","dynamic","fragmented","precarious"],
answer: "dynamic",
explanation: "The table is described as constantly expanding, meaning it changes. Dynamic means constantly changing.",
section: "English"
},
{
question: "In many cultures the hummingbird symbolizes endurance despite its tiny size and demanding migrations. What is the main idea?",
options:[
"Hummingbirds are the fastest birds.",
"The physical delicacy of hummingbirds hides their toughness.",
"Migration is the most dangerous event for hummingbirds.",
"People misunderstand hummingbirds."
],
answer:"The physical delicacy of hummingbirds hides their toughness.",
explanation:"The passage highlights the contrast between appearance and endurance.",
section:"English"
},
{
question:"The architect’s latest project involved a unique challenge ______ transforming an abandoned grain silo into apartments.",
options:["challenge:","challenge;","challenge,","challenge"],
answer:"challenge:",
explanation:"A colon introduces an explanation or example.",
section:"English"
},
{
question:"Researchers say lo-fi music may reduce distractions while studying. Which evidence best supports this?",
options:[
"Students listening to metal scored lower.",
"Brain scans showed lower activity in distraction centers.",
"Students enjoyed lo-fi music.",
"The study lasted six months."
],
answer:"Brain scans showed lower activity in distraction centers.",
explanation:"Direct evidence of reduced distraction supports the claim.",
section:"English"
},
{
question:"The company’s revenue increased by 20%. _______, it struggled to retain executives.",
options:["Furthermore","Consequently","Conversely","Similarly"],
answer:"Conversely",
explanation:"Conversely introduces contrast.",
section:"English"
},
{
question:"Though the editor was known for being quite _______, he wrote a three-page praise of the intern’s draft.",
options:["verbose","fastidious","laconic","magnanimous"],
answer:"laconic",
explanation:"Laconic means using few words; the long praise contrasts that trait.",
section:"English"
},
{
question:"Many fungi break down organic matter. _______, they help tree roots absorb water.",
options:["Consequently","Furthermore","However","Nevertheless"],
answer:"Furthermore",
explanation:"The sentence adds another benefit.",
section:"English"
},
{
question:"The group of scientists ______ reviewing the data.",
options:["are","have been","is","were"],
answer:"is",
explanation:"The subject 'group' is singular.",
section:"English"
},
{
question:"The city’s oldest landmark, a bridge built in 1842 ______ remains popular.",
options:["1842,","1842:","1842;","1842"],
answer:"1842,",
explanation:"Comma closes the appositive phrase.",
section:"English"
},
{
question:"Urban parks filter pollutants and reduce heat. What is the purpose of the passage?",
options:[
"Argue for park funding",
"Compare bird species",
"Highlight ecological importance",
"Explain heat island formation"
],
answer:"Highlight ecological importance",
explanation:"The passage lists environmental benefits.",
section:"English"
},
{
question:"The mural used paint designed to wash away quickly. The artist intended it to be ______.",
options:["enduring","ephemeral","vibrant","abstract"],
answer:"ephemeral",
explanation:"Ephemeral means short-lived.",
section:"English"
},
{
question:"Which finding best supports that high-protein diets preserve muscle?",
options:[
"Protein dieters felt fuller.",
"Carb dieters lost more weight.",
"Protein dieters retained more lean muscle.",
"Both lost equal fat."
],
answer:"Protein dieters retained more lean muscle.",
explanation:"Directly supports the claim about muscle retention.",
section:"English"
},
{
question:"The ______ survival depends on camouflage.",
options:["lizards'","lizard's","lizards","lizards's"],
answer:"lizard's",
explanation:"Singular possessive form.",
section:"English"
},
{
question:"Jack Kerouac used spontaneous prose to capture travel energy. What is the sentence's function?",
options:[
"Example supporting a claim",
"Counterargument",
"Scientific summary",
"Definition"
],
answer:"Example supporting a claim",
explanation:"Kerouac exemplifies Beat writers.",
section:"English"
},
{
question:"The internet revolutionized information access. _______, it also spread misinformation.",
options:["In fact","For example","Regardless","On the other hand"],
answer:"On the other hand",
explanation:"Shows contrast.",
section:"English"
},
{
question:"The restoration of the tapestry required extreme care. It was a ______ task.",
options:["meticulous","perfunctory","mundane","resilient"],
answer:"meticulous",
explanation:"Meticulous means extremely careful and detailed.",
section:"English"
},
{
question:"Mary Cassatt differed from other Impressionists because she used ______.",
options:[
"domestic subjects",
"paintings of children",
"bold lines inspired by Japanese prints",
"Impressionist style"
],
answer:"bold lines inspired by Japanese prints",
explanation:"This technique distinguished her work.",
section:"English"
},
{
question:"Astronomers believed the Milky Way was the whole universe. _______, Hubble found other galaxies.",
options:["Specifically","However","For instance","Moreover"],
answer:"However",
explanation:"Contrasts old belief with discovery.",
section:"English"
},
{
question:"Every student must complete ______ senior thesis.",
options:["their","his or her","they’re","its"],
answer:"his or her",
explanation:"Singular pronoun matches singular subject.",
section:"English"
},
{
question:"The printing press made books affordable and spread knowledge. What is the purpose?",
options:[
"Explain how presses work",
"Argue the press had major impact",
"List Renaissance books",
"Explain censorship"
],
answer:"Argue the press had major impact",
explanation:"The passage stresses historical importance.",
section:"English"
},

/* ================= MATH ================= */

{
question:"3x + 7 = 19. What is 6x + 2?",
options:["12","24","26","38"],
answer:"26",
explanation:"x=4 then 6(4)+2=26.",
section:"Math"
},
{
question:"Volume of cylinder r=3 h=10?",
options:["30π","60π","90π","300π"],
answer:"90π",
explanation:"V = πr²h = π(9)(10).",
section:"Math"
},
{
question:"(2x² +3x −5)+(x² −x +8)",
options:["3x²+2x+3","3x²+4x+13","2x²+2x+3","x²+4x−13"],
answer:"3x²+2x+3",
explanation:"Combine like terms.",
section:"Math"
},
{
question:"Bag has 5 red 3 blue 2 green. P(not blue)?",
options:["3/10","1/2","7/10","4/5"],
answer:"7/10",
explanation:"7 non-blue out of 10.",
section:"Math"
},
{
question:"Slope through (0,4) and (2,10)?",
options:["2","3","4","6"],
answer:"3",
explanation:"(10−4)/(2−0)=3.",
section:"Math"
},
{
question:"Solve 2(x−3)+4=14.",
options:["5","8","10","12"],
answer:"8",
explanation:"2x−2=14 → x=8.",
section:"Math"
},
{
question:"Factor of x²−7x+10?",
options:["x−5","x+5","x−7","x+2"],
answer:"x−5",
explanation:"(x−5)(x−2).",
section:"Math"
},
{
question:"Line slope −2 through (3,4). y-intercept?",
options:["2","6","10","14"],
answer:"10",
explanation:"4=−2(3)+b → b=10.",
section:"Math"
},
{
question:"Circle area 16π. Circumference?",
options:["4π","8π","16π","32π"],
answer:"8π",
explanation:"r=4 → C=2πr.",
section:"Math"
},
{
question:"3^(n−1)=27",
options:["2","3","4","5"],
answer:"4",
explanation:"27=3³ so n−1=3.",
section:"Math"
},
{
question:"Set {4,8,8,10,15}. Add 25. Which increases most?",
options:["Mean","Median","Mode","Range"],
answer:"Range",
explanation:"Range increases from 11 to 21.",
section:"Math"
},
{
question:"Solve 3x+5<17",
options:["x<4","x>4","x<7","x>7"],
answer:"x<4",
explanation:"3x<12.",
section:"Math"
},
{
question:"Right triangle hypotenuse 13 leg 5. Other leg?",
options:["8","10","12","15"],
answer:"12",
explanation:"Pythagorean theorem.",
section:"Math"
},
{
question:"f(x)=2x²−3x+1. f(−2)?",
options:["1","3","11","15"],
answer:"15",
explanation:"8+6+1=15.",
section:"Math"
},
{
question:"100 students: 60 pizza 40 burgers 20 both. Neither?",
options:["0","10","20","40"],
answer:"20",
explanation:"80 like at least one → 20 neither.",
section:"Math"
},
{
question:"sin(A)=3/5. cos(A)?",
options:["2/5","3/4","4/5","5/3"],
answer:"4/5",
explanation:"3-4-5 triangle.",
section:"Math"
},
{
question:"Solve system 2x+3y=8 and 4x+6y=16.",
options:["Zero","One","Two","Infinitely many"],
answer:"Infinitely many",
explanation:"Second equation is double the first.",
section:"Math"
},
{
question:"Vertex of y=(x−4)²+7?",
options:["(4,7)","(-4,7)","(4,-7)","(7,4)"],
answer:"(4,7)",
explanation:"Vertex form.",
section:"Math"
},
{
question:"Rental car $40 plus $0.20 per mile total $64 miles?",
options:["80","100","120","140"],
answer:"120",
explanation:"0.20x=24.",
section:"Math"
},
{
question:"Surface area prism 4x3x5?",
options:["47","60","94","120"],
answer:"94",
explanation:"2(lw+lh+wh).",
section:"Math"
}

];

export default questions;
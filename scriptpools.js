let poolLang = "en";

function setPoolLanguage(lang) {
  poolLang = lang;
}

function getPoolText(key) {
  return textPools[poolLang][key];
}

window.scriptPools = {
  setPoolLanguage,
  getPoolText
};

// =======================
// DAILY LESSONS
// =======================
export const LessonsByIndex = {

// --------------------------
// Animal welfare - Omnivore (20 lessons)
// --------------------------

1: {  
  goal: "Protecting animals & animal welfare",  diet: "omnivore",  
  title: {
  en: "Circle of life?",
  es: "¿Círculo de la vida?",
  hu: "Az élet körforgása?",
  },
  lesson: {
  en: "We often say 'the circle of life' to describe nature, thinking that all living beings are part of a balanced system. In natural circumstances, every animal is born with freedom, space, and a chance to live fully, experiencing sunlight and expressing natural behaviors. Industrial farming, however, confines animals to tiny cages, preventing them from living naturally. If they are denied these basic experiences, can we still call it 'natural'? Reflecting on this helps us question our food system and its impact on life.",
  es: "A menudo decimos 'el círculo de la vida' para describir la naturaleza, pensando que todos los seres vivos forman parte de un sistema equilibrado. En condiciones naturales, cada animal nace con libertad, espacio y la oportunidad de vivir plenamente, experimentando la luz del sol y expresando comportamientos naturales. Sin embargo, la ganadería industrial confina a los animales en jaulas diminutas, impidiéndoles vivir de manera natural. Si se les niegan estas experiencias básicas, ¿podemos seguir llamándolo 'natural'? Reflexionar sobre esto nos ayuda a cuestionar nuestro sistema alimentario y su impacto en la vida.",
  hu: "Gyakran mondjuk azt, hogy „az élet köre”, amikor a természetet írjuk le, azt gondolva, hogy minden élőlény része egy kiegyensúlyozott rendszernek. Természetes körülmények között minden állat szabadsággal, térrel és a teljes élet lehetőségével születik, élvezheti a napfényt és kifejezheti természetes viselkedését. Az ipari állattartás azonban az állatokat apró ketrecekbe zárja, megakadályozva, hogy természetesen éljenek. Ha ezektől az alapvető élményektől megfosztjuk őket, vajon még mindig nevezhetjük ezt „természetesnek”? Ennek átgondolása segít megkérdőjelezni az élelmiszer-rendszerünket és annak az életre gyakorolt hatását."
  },
  quiz: {  
    question: {
      en: "What is often denied to farm animals compared to natural life?",
      es: "¿Qué se les niega con frecuencia a los animales de granja en comparación con la vida natural?",
      hu: "Mitől fosztják meg leggyakrabban a haszonállatokat a természetes élethez képest?"
    },  
    options: {
      en: [
        "Freedom and space",
        "Sunlight and natural behaviors",
        "A chance to live fully",
        "All of the above"
      ],
      es: [
        "Libertad y espacio",
        "Luz solar y comportamientos naturales",
        "La oportunidad de vivir plenamente",
        "Todas las anteriores"
      ],
      hu: [
        "Szabadság és tér",
        "Napfény és természetes viselkedés",
        "Teljes élet lehetősége",
        "Mindegyik"
      ]
    },
    answer: 3 
  }
},
2: { 
  goal: "Protecting animals & animal welfare", 
  diet: "omnivore", 
  title: {
  en: "Facing the truth",
  es: "Enfrentar la verdad",
  hu: "Szembenézni a tényekkel",
  },
  lesson: {
    en: "Acknowledging the realities of animals’ lives can feel heavy. Feeling this way actually shows your empathy and compassion—it’s a sign of your humanity, not something to avoid. Ignoring the truth doesn’t help either. Even small, thoughtful actions—like choosing kinder food options or supporting animal welfare—can make a real difference. Reflecting on your choices empowers you to act with care without guilt.",
    es: "Reconocer la realidad de la vida de los animales puede resultar pesado. Sentir esto demuestra tu empatía y compasión: es una señal de tu humanidad, no algo que debas evitar. Ignorar la verdad tampoco ayuda. Incluso pequeñas acciones conscientes, como elegir alimentos más respetuosos o apoyar el bienestar animal, pueden marcar una diferencia real. Reflexionar sobre tus decisiones te permite actuar con cuidado sin culpa.",
    hu: "Az állatok életének valóságának felismerése nehéznek tűnhet. Az, hogy így érzel, az empátiádat és együttérzésedet mutatja—ez az emberiességed jele, nem valami, amit kerülni kellene. Az igazság figyelmen kívül hagyása sem segít. Már a kis, átgondolt cselekedetek—például kedvesebb ételválasztások vagy az állatjólét támogatása—is valódi változást hozhatnak. Az, hogy átgondolod a döntéseidet, lehetővé teszi, hogy felelősségteljesen cselekedj bűntudat nélkül."
  },
  quiz: { 
    question: {
      en: "What does feeling uncomfortable about animal suffering indicate?", 
      es: "¿Qué indica sentirse incómodo ante el sufrimiento animal?", 
      hu: "Mit jelez, ha kényelmetlenül érzed magad az állati szenvedés láttán?"
    },
    options: {
      en: ["It shows our empathy", "It proves we are bad people", "It’s pointless", "We should ignore it"], 
      es: ["Muestra nuestra empatía", "Prueba que somos malas personas", "No tiene sentido", "Debemos ignorarlo"], 
      hu: ["Empátiánkat mutatja", "Bizonyítja, hogy rossz emberek vagyunk", "Értelmetlen", "Figyelmen kívül kell hagynunk"]
    },
    answer: 0
  }
},
3: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  title: {
    en: "Where do we draw the line?",
    es: "¿Dónde trazamos la línea?",
    hu: "Hol húzzuk meg a határt?"
  },
  lesson: {
    en: "We often treat some animals as family members, like dogs or cats, while others—such as pigs, cows, or chickens—are raised for food. Yet many of these animals share similar traits: they feel pain, experience emotions, and have a strong desire to live. This raises an important question: why do we love some animals and eat others? Reflecting on where and why we draw these lines can help us better understand our values and the impact of our everyday choices.",
    es: "A menudo tratamos a algunos animales como miembros de la familia, como perros o gatos, mientras que otros—como cerdos, vacas o gallinas—son criados para la alimentación. Sin embargo, muchos de estos animales comparten características similares: sienten dolor, experimentan emociones y tienen un fuerte deseo de vivir. Esto plantea una pregunta importante: ¿por qué amamos a unos animales y comemos a otros? Reflexionar sobre dónde y por qué trazamos estas líneas puede ayudarnos a comprender mejor nuestros valores y el impacto de nuestras decisiones diarias.",
    hu: "Gyakran egyes állatokat családtagként kezelünk, például a kutyákat vagy macskákat, míg másokat—mint a sertéseket, teheneket vagy csirkéket—élelem céljából nevelünk. Pedig sok közös tulajdonságuk van: éreznek fájdalmat, érzelmeik vannak, és erős bennük az élni akarás. Ez fontos kérdést vet fel: miért szeretünk egyes állatokat, míg másokat megeszünk? Annak átgondolása, hogy hol és miért húzzuk meg ezeket a határokat, segít jobban megérteni az értékeinket és a mindennapi döntéseink hatását."
  },
  quiz: {  
    question: {
      en: "Why do people treat some animals as pets and others as food?",
      es: "¿Por qué las personas tratan a algunos animales como mascotas y a otros como comida?",
      hu: "Miért kezelnek az emberek egyes állatokat házikedvencként, másokat pedig élelmiszerként?"
    },
    options: {
      en: [
        "Cultural traditions",
        "Emotional attachment",
        "Social norms",
        "All of the above"
      ],
      es: [
        "Tradiciones culturales",
        "Vínculo emocional",
        "Normas sociales",
        "Todas las anteriores"
      ],
      hu: [
        "Kulturális hagyományok",
        "Érzelmi kötődés",
        "Társadalmi normák",
        "Mindegyik"
      ]
    },
    answer: 3
  }
},
4: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  title: {
    en: "Our natural empathy",
    es: "Nuestra empatía natural",
    hu: "Természetes empátiánk"
  },
  lesson: {
    en: "Imagine walking through a park and seeing a squirrel, a duck, or a turtle. What do you feel in that moment? Perhaps joy, care, or a desire to help. You might feel upset if someone tried to hurt them. This reaction reveals something important: our natural empathy toward animals is often strong. Yet our daily habits don’t always reflect this empathy. Many of our behaviors are learned and shaped by society. Reflecting on this contrast helps us question how our actions align with our values.",
    es: "Imagina que caminas por un parque y ves una ardilla, un pato o una tortuga. ¿Qué sientes en ese momento? Tal vez alegría, cuidado o el deseo de ayudarlos. Probablemente te molestaría ver a alguien hacerles daño. Esta reacción revela algo importante: nuestra empatía natural hacia los animales suele ser fuerte. Sin embargo, nuestros hábitos diarios no siempre reflejan esa empatía. Muchos comportamientos son aprendidos y moldeados por la sociedad. Reflexionar sobre esta diferencia nos ayuda a cuestionar si nuestras acciones coinciden con nuestros valores.",
    hu: "Képzeld el, hogy sétálsz egy parkban, és meglátsz egy mókust, egy kacsát vagy egy teknőst. Mit érzel abban a pillanatban? Talán örömöt, törődést vagy segíteni akarást. Valószínűleg felháborítana, ha valaki bántaná őket. Ez a reakció fontos dolgot mutat meg: a természetes empátiánk az állatok iránt gyakran erős. Ennek ellenére a mindennapi szokásaink nem mindig tükrözik ezt az empátiát. Sok viselkedés tanult és a társadalom alakítja. Ennek az ellentmondásnak az átgondolása segít megkérdőjelezni, mennyire állnak összhangban a tetteink az értékeinkkel."
  },
  quiz: {  
    question: {
      en: "What does this scenario encourage us to reflect on?",
      es: "¿Sobre qué nos invita a reflexionar esta situación?",
      hu: "Mire ösztönöz ez a helyzet, hogy elgondolkodjunk?"
    },
    options: {
      en: [
        "Our natural empathy versus learned behaviors",
        "That park animals are different from farm animals",
        "That feelings should be ignored",
        "That instincts always control us"
      ],
      es: [
        "Nuestra empatía natural frente a comportamientos aprendidos",
        "Que los animales del parque son diferentes a los de granja",
        "Que debemos ignorar los sentimientos",
        "Que los instintos siempre nos controlan"
      ],
      hu: [
        "A természetes empátiánk és a tanult viselkedések közötti különbség",
        "Hogy a parkban élő állatok különböznek a haszonállatoktól",
        "Hogy figyelmen kívül kell hagyni az érzéseket",
        "Hogy az ösztönök mindig irányítanak minket"
      ]
    },
    answer: 0
  }
},
5: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  title: {
    en: "Instinct or habit?",
    es: "¿Instinto o costumbre?",
    hu: "Ösztön vagy szokás?"
  },
  lesson: {
    en: "Imagine a child who has never been taught to eat meat, placed in a room with a rabbit and an apple. What would she naturally choose—to play with the rabbit and eat the apple, or the other way around? This simple thought experiment invites us to question the idea that harming animals is an instinct. When our basic needs are met, choosing to eat animals is often not about survival, but about habits learned from culture and tradition.",
    es: "Imagina a una niña que nunca ha sido enseñada a comer carne, colocada en una habitación con un conejo y una manzana. ¿Qué elegiría de forma natural: jugar con el conejo y comer la manzana, o lo contrario? Este sencillo experimento mental nos invita a cuestionar la idea de que hacer daño a los animales sea un instinto. Cuando nuestras necesidades básicas están cubiertas, comer animales suele estar más relacionado con hábitos aprendidos que con la supervivencia.",
    hu: "Képzelj el egy gyermeket, akit soha nem tanítottak meg húst enni, és egy szobába helyezik egy nyúllal és egy almával. Mit választana ösztönösen: játszana a nyúllal és megenne egy almát, vagy fordítva? Ez az egyszerű gondolatkísérlet arra hív, hogy megkérdőjelezzük azt az elképzelést, hogy az állatok bántása ösztönös. Amikor az alapvető szükségleteink kielégítettek, az állatok fogyasztása gyakran nem a túlélésről, hanem tanult szokásokról szól."
  },
  quiz: {  
    question: {
      en: "What does this thought experiment suggest about our eating habits?",
      es: "¿Qué sugiere este experimento mental sobre nuestros hábitos alimentarios?",
      hu: "Mit sugall ez a gondolatkísérlet az étkezési szokásainkról?"
    },
    options: {
      en: [
        "Killing animals is an unavoidable instinct",
        "Our eating habits are shaped by learning and culture",
        "Humans naturally prefer meat",
        "Instinct is stronger than choice"
      ],
      es: [
        "Matar animales es un instinto inevitable",
        "Nuestros hábitos alimentarios están influenciados por el aprendizaje y la cultura",
        "Los humanos prefieren naturalmente la carne",
        "El instinto es más fuerte que la elección"
      ],
      hu: [
        "Az állatok megölése elkerülhetetlen ösztön",
        "Az étkezési szokásainkat a tanulás és a kultúra alakítja",
        "Az emberek természetüknél fogva a húst részesítik előnyben",
        "Az ösztön erősebb, mint a választás"
      ]
    },
    answer: 1
  }
},

/*  
6: {  
  goal: "Protecting animals & animal welfare",  diet: "omnivore",  
  lesson: "Would you feel bad seeing an animal suffering? Most of us would. Yet in our society, consuming animals is so normalized that we rarely connect our food with the suffering behind it. The question is: just because it happens out of sight, behind walls in farms or slaughterhouses, does that justify our choice to eat them? Reflecting on this helps us recognize the gap between our empathy and our habits.",
  quiz: {  
    question: "What does this scenario encourage us to question?",  
    options: ["Whether empathy matters", "If suffering out of sight justifies our actions", "Whether animals can feel pain", "If we should ignore feelings"],  
    answer: "If suffering out of sight justifies our actions"  
  }  
},
7: {  
  goal: "Protecting animals & animal welfare",  diet: "omnivore",  
  lesson: "Would you kill an animal yourself? Most of us never have to, because meat is offered to us in a well-processed, hygienic way that hides the reality. This makes it easier to consume without feeling the weight of the act. But is this truly normal, or just a kind of collective illusion that distances us from the consequences of our choices?",
  quiz: {  
    question: "What does the sanitized presentation of meat encourage us to do?",  
    options: ["Reflect deeply on killing", "Ignore the process and consume without thought", "Feel guilty for eating", "Stop eating completely"],  
    answer: "Ignore the process and consume without thought"  
  }  
},
8: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  lesson: "Are you against killing an animal for entertainment or pleasure? Science shows that humans can thrive on a plant-based diet. This raises an important question: if we eat meat simply because we enjoy the taste, are we, in effect, supporting the killing of animals for pleasure? Reflecting on this helps us consider the ethics behind our choices and whether habit or enjoyment justifies harm.",
  quiz: {  
    question: "What ethical question does enjoying the taste of meat raise?",  
    options: ["Eating meat is always necessary", "We may be supporting the killing of animals for pleasure", "Tasting meat has no impact on animals", "Humans cannot live without meat"],  
    answer: "We may be supporting the killing of animals for pleasure"  
  }  
},
9: { goal: "Protecting animals & animal welfare", diet: "omnivore", 
     lesson: "Animals often show signs of awareness and conscience. For example, most animals try to escape when they sense danger, showing they understand their situation and want to protect themselves. The question is: are their feelings in these situations different from ours? Reflecting on this can help us better understand and empathize with them.",
  quiz: { 
      question: "When animals sense danger and try to escape, what does this show?", 
      options: ["They have no feelings", "They have awareness and desire to live", "It’s purely instinct", "They enjoy danger"], 
      answer: "They have awareness and desire to live" 
  }
    },
10: { goal: "Protecting animals & animal welfare", diet: "omnivore", 
     lesson: "Pigs are highly intelligent animals, often outperforming dogs in various cognitive tasks. For instance, in problem-solving scenarios, pigs have demonstrated superior persistence and ability to solve complex tasks independently, whereas dogs tend to seek human assistance more readily. Additionally, pigs have been shown to possess advanced memory capabilities, long-term retention, and the ability to use tools, which are indicators of higher cognitive functions. Recognizing these abilities in pigs challenges us to reconsider our perceptions and treatment of them.",
quiz: {
question: "In problem-solving tasks, how do pigs compare to dogs?",
options: ["Pigs are less persistent", "Dogs solve tasks more independently", "Pigs often outperform dogs", "Dogs have better memory"],
answer: "Pigs often outperform dogs"
} 
    },
11: {  
  goal: "Protecting animals & animal welfare",  diet: "omnivore",  
  lesson: "We often condescend animals, assuming they are less valuable or capable than humans. But observing them closely, we can see their virtues—and even learn from them. Take dogs, for example: they can be happy simply because they have someone to love and the chance to play. Their loyalty, honesty in sharing love, kindness, and protective behavior are remarkable abilities. Reflecting on these traits challenges our sense of superiority and inspires us to consider what we value in ourselves and others.",  
  quiz: {  
    question: "What does observing animals like dogs encourage us to reflect on?",  
    options: ["Our own superiority", "The values and abilities of animals", "How we can learn from them", "All of the above"],  
    answer: "All of the above"  
  }  
},
12: { goal: "Protecting animals & animal welfare", diet: "omnivore", 
     lesson: "Cows are deeply emotional beings, capable of forming strong bonds with their calves. In natural settings, a mother may grieve the loss of her calf for days, staying nearby and showing behaviors like nudging or licking the deceased calf. In industrial farming, however, calves are often separated from their mothers shortly after birth, preventing this natural bond and causing stress for both the cow and her calf. Understanding this reality can help us reflect on the impact of our choices and the treatment of animals in farming practices.",
quiz: {
question: "What impact does separating calves from their mothers in farming have?",
options: ["It causes stress for both mother and calf", "It has no effect", "Cows forget their calves immediately", "It makes cows happier"],
answer: "It causes stress for both mother and calf"
}
    },
13: {  
  goal: "Protecting animals & animal welfare",  diet: "omnivore",  
  lesson: "An interesting question is how we draw the line between farm animals and companion animals. Is it intelligence? Their appearance? With people, we accept differences without feeling superior, so why do we treat animals differently? Reflecting on this can help us understand our biases and the arbitrary ways we value different animals.",  
  quiz: {  
    question: "Which factor most helps explain why society values some animals more than others?",  
    options: ["Cultural norms and habits", "Scientific measures of intelligence", "Random chance", "Their size or appearance"],  
    answer: "Cultural norms and habits"  
  }  
},
14: { goal: "Protecting animals & animal welfare", diet: "omnivore", 
     lesson: "Chickens are much more intelligent and emotional than most people realize. They can recognize over 100 individual faces of other chickens and humans, communicate with dozens of distinct vocalizations, and even plan for the future. Hens show empathy, caring for their chicks and reacting to their distress. Despite being underestimated, chickens have rich social lives and complex minds, reminding us that intelligence and emotion are not limited to mammals.",  
  quiz: {  
    question: "Which of these is true about chickens?",  
    options: ["They have no social awareness", "They can recognize individual faces and communicate", "They act purely on instinct", "They cannot plan ahead"],  
    answer: "They can recognize individual faces and communicate"  
  }  
    },
15: {  
  goal: "Protecting animals & animal welfare",  diet: "omnivore",  
  lesson: "We often think humans are the most intelligent beings on Earth, but nature tells a humbling story. Chimpanzees have better short-term memory than us, crows use tools and plan for the future, and elephants communicate across miles through vibrations. Each species has its own remarkable abilities, reminding us that intelligence takes many forms—and we’re just one piece of a much bigger picture.",  
  quiz: {  
    question: "Which animal is proven to have better short-term memory than humans?",  
    options: ["Crows", "Chimpanzees", "Dogs"],  
    answer: "Chimpanzees"  
  }  
},
16: {  
  goal: "Protecting animals & animal welfare",  diet: "omnivore",  
  lesson: "Are we just one of many species sharing Earth’s resources, or are we the superior species meant to rule over it? Our answer to this question shapes how we treat the world around us. If we see ourselves as part of nature, we seek harmony—finding balance and protecting the right of every species to live freely. But if we see ourselves as above nature, we justify using the Earth and its beings for our own benefit. The question then becomes: what truly defines the 'correct' way to live?",  
  quiz: {  
    question: "What does yesterday's lesson encourage us to reflect on?",  
    options: ["Whether humans should dominate or coexist with nature", "How to extract more resources", "If animals can survive alone", "Whether technology is natural"],  
    answer: "Whether humans should dominate or coexist with nature"  
  }  
},    
17: {  
  goal: "Protecting animals & animal welfare",  diet: "omnivore",  
  lesson: "Animals live with innocence. They don’t harm for pleasure, lie for benefit, or judge others by appearance. Their trust in us is pure—they approach with curiosity, not suspicion. Yet, this very innocence is often exploited in industries that take their lives for profit. Reflecting on this reminds us that innocence deserves protection, not betrayal.",  
  quiz: {  
    question: "What makes animals’ innocence particularly tragic in the context of exploitation?",  
    options: ["They trust us and we use that trust against them", "They are dangerous to humans", "They don’t understand emotions", "They harm others intentionally"],  
    answer: "They trust us and we use that trust against them"  
  }  
},
18: {  
  goal: "Protecting animals & animal welfare",  diet: "omnivore",  
  lesson: "Some people ask if killing plants is the same as killing animals. Science shows that plants don’t have a brain or central nervous system, so they don’t feel pain the way animals do. But there’s another important fact: around 77% of global agricultural land is used for livestock, while farm animals provide only about 18% of the world’s calories and 37% of its protein. This means most of the land and crops are used inefficiently, to feed animals instead of people. By adopting a plant-based diet, we can use far less land and still feed everyone, while sparing both animals and plants. Reflecting on this helps us see how our choices shape the planet and the lives of others.",  
  quiz: {  
    question: "What percentage of global agricultural land is used for livestock?",  
    options: ["36%", "50%", "77%", "90%"],  
    answer: "77%"  
  }  
},
19: {  
  goal: "Protecting animals & animal welfare",  diet: "omnivore",  
  lesson: "When we think of monkeys swinging through trees, sea turtles gliding in the ocean, or dolphins playing freely in the waves, we picture a healthy, thriving planet. But much of the natural world these animals depend on is disappearing — largely because of animal agriculture. About 77% of global agricultural land is used for livestock grazing or feed production, which drives deforestation in rainforests like the Amazon, where countless monkeys and other species lose their homes. Runoff from animal farms pollutes rivers and seas, harming marine life like turtles and dolphins. Every meal we choose has an impact far beyond our plate. We can help protect wild animals and the places they call home.",  
  quiz: {  
    question: "How does animal agriculture harm wild animals like monkeys, turtles, and dolphins?",  
    options: [  
      "By destroying their habitats and polluting ecosystems",  
      "By helping forests grow",  
      "By creating more ocean life",  
      "It has no effect"  
    ],  
    answer: "By destroying their habitats and polluting ecosystems"  
  }  
}, 
20: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  lesson: "Most of us can agree that animals have feelings, unique personalities, and the ability to think and experience joy or fear. They are innocent, vulnerable, and, just like us, they want to live. Knowing this, an important question arises: Do I want to be someone who contributes to the exploitation of weaker, sentient beings — or someone who chooses compassion instead?",  
  quiz: {  
    question: "What does yesterday's lesson encourage us to reflect on?",  
    options: [  
      "Whether our actions align with our compassion",  
      "If animals have no feelings",  
      "How to eat more meat",  
      "Whether guilt is necessary for change"  
    ],  
    answer: "Whether our actions align with our compassion"  
  }  
},
*/
// --------------------------
// Animal welfare - Vegetarian (21–40)
// --------------------------
21: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegetarian",  
  title: {
    en: "Moral dilemmas on the farm",
    es: "Dilemas morales en la granja",
    hu: "Morális dilemmák a farmon"
  },
  lesson: {
    en: "Imagine you run a small chicken farm. A chick hatches — would you raise it if it’s male? Male chicks don’t lay eggs, and in many production systems they are seen as ‘unprofitable’. This situation forces a hard choice: either invest time, space and food in animals that won’t produce returns, or end their lives because of economic logic. Framing the question this way reveals a moral tension between short-term profit and the value of an individual life.",
    es: "Imagina que tienes una pequeña granja de pollos. Nace un pollito: ¿lo criarías si es macho? Los pollitos machos no ponen huevos y, en muchos sistemas de producción, se consideran 'no rentables'. Esta situación obliga a tomar una decisión difícil: invertir tiempo, espacio y comida en animales que no producirán beneficios o terminar con sus vidas por lógica económica. Plantear la pregunta de esta manera revela una tensión moral entre el beneficio a corto plazo y el valor de la vida individual.",
    hu: "Képzeld el, hogy van egy kis csirketanyád. Kikel egy csibe – felnevelnéd, ha hím? A hím csibék nem tojnak tojást, és sok termelési rendszerben „nem nyereségesnek” tartják őket. Ez a helyzet nehéz választás elé állít: vagy időt, teret és ételt fektetsz olyan állatokba, amelyek nem hoznak hasznot, vagy az életüket a gazdasági logika miatt megszünteted. A kérdés így történő felvetése feltárja a rövid távú profit és az egyéni élet értéke közötti erkölcsi feszültséget."
  },
  quiz: {  
    question: {
      en: "What moral tension does the farm-owner scenario highlight?",
      es: "¿Qué tensión moral destaca el escenario del granjero?",
      hu: "Milyen erkölcsi feszültséget mutat a gazda története?"
    },  
    options: {
      en: [
        "Profit vs. the intrinsic value of an individual animal’s life",
        "Whether eggs taste better from certain breeds",
        "How to increase egg production quickly",
        "The best feed to maximize profits"
      ],
      es: [
        "Beneficio frente al valor intrínseco de la vida de un animal individual",
        "Si los huevos saben mejor de ciertas razas",
        "Cómo aumentar rápidamente la producción de huevos",
        "El mejor alimento para maximizar los beneficios"
      ],
      hu: [
        "Profit vs. az egyes állatok életének belső értéke",
        "Hogy bizonyos fajták tojása ízletesebb-e",
        "Hogyan növeljük gyorsan a tojástermelést",
        "A legjobb takarmány a profit maximalizálásához"
      ]
    },
    answer: 0
  }
},
22: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegetarian",  
  title: {
    en: "The hidden cost of animal products",
    es: "El costo oculto de los productos animales",
    hu: "Az állati termékek rejtett ára"
  },
  lesson: {
    en: "In our society, animals are often treated as products rather than living beings. The price of meat, dairy, or eggs reflects only the cost of production, transport, and sale — not the suffering, confinement, or shortened lives of the animals themselves. Their sacrifices — the stress, pain, and loss of freedom — are invisible in monetary terms. By reducing our consumption of animal products or choosing plant-based alternatives, we recognize that animals are sentient beings whose lives have intrinsic value, far beyond any price tag placed on them.",
    es: "En nuestra sociedad, los animales a menudo son tratados como productos en lugar de seres vivos. El precio de la carne, los lácteos o los huevos refleja únicamente el costo de producción, transporte y venta, no el sufrimiento, confinamiento o vidas acortadas de los propios animales. Sus sacrificios —el estrés, el dolor y la pérdida de libertad— son invisibles en términos monetarios. Al reducir nuestro consumo de productos animales o elegir alternativas vegetales, reconocemos que los animales son seres sensibles cuya vida tiene un valor intrínseco, mucho más allá de cualquier precio asignado.",
    hu: "Társadalmunkban az állatokat gyakran termékként kezelik, nem élőlényként. A hús, tejtermék vagy tojás ára csak a termelés, szállítás és értékesítés költségét tükrözi — nem az állatok szenvedését, bezártságát vagy rövidített életét. Az ő áldozataik — a stressz, a fájdalom és a szabadság elvesztése — pénzben kifejezve láthatatlanok. Az állati termékek fogyasztásának csökkentésével vagy növényi alternatívák választásával elismerjük, hogy az állatok érző lények, akiknek élete belső értékkel bír, jóval túlmutat bármilyen árkategórián."
  },
  quiz: {  
    question: {
      en: "What does the price of animal products fail to account for?",
      es: "¿Qué no refleja el precio de los productos animales?",
      hu: "Mit nem tükröz az állati termékek ára?"
    },  
    options: {
      en: [
        "The cost of transporting the products",
        "The suffering and loss of freedom experienced by animals",
        "The packaging and marketing costs",
        "The calories provided by the product"
      ],
      es: [
        "El costo de transporte de los productos",
        "El sufrimiento y la pérdida de libertad que experimentan los animales",
        "Los costos de envasado y marketing",
        "Las calorías proporcionadas por el producto"
      ],
      hu: [
        "A termékek szállítási költsége",
        "Az állatok által átélt szenvedés és szabadságvesztés",
        "A csomagolás és marketing költségei",
        "A termék által biztosított kalóriák"
      ]
    },
    answer: 1
  }
},
23: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegetarian",  
  title: {
    en: "Life in confinement",
    es: "Vida en confinamiento",
    hu: "Élet bezártságban"
  },
  lesson: {
    en: "Many farm animals spend their entire lives in confined spaces. Cows often live indoors on hard floors with limited room to move. Mother pigs on factory farms are kept in gestation crates so small they cannot even turn around. Laying hens are frequently packed into cages where each bird has roughly the space of an A4 sheet of paper. These conditions prevent animals from expressing natural behaviors such as walking freely, nursing their young, or stretching their wings. Reducing our consumption of animal-based products directly reduces the number of animals forced to live in these restrictive environments.",
    es: "Muchos animales de granja pasan toda su vida en espacios confinados. Las vacas suelen vivir en interiores, sobre suelos duros y con poco espacio para moverse. Las cerdas madre en granjas industriales son mantenidas en jaulas de gestación tan pequeñas que ni siquiera pueden darse la vuelta. Las gallinas ponedoras a menudo están hacinadas en jaulas donde cada ave dispone de un espacio similar al de una hoja A4. Estas condiciones les impiden expresar comportamientos naturales como caminar libremente, cuidar de sus crías o estirar las alas. Reducir el consumo de productos de origen animal disminuye directamente el número de animales que viven en estos entornos restrictivos.",
    hu: "Sok haszonállat egész életét szűk, zárt körülmények között tölti. A tehenek gyakran beltérben élnek, kemény padlón, korlátozott mozgástérrel. Az ipari telepeken a kocaanyákat vemhesítési ketrecekben tartják, amelyek olyan kicsik, hogy még megfordulni sem tudnak. A tojótyúkokat gyakran olyan zsúfolt ketrecekbe zárják, ahol egy állatra körülbelül egy A4-es lapnyi hely jut. Ezek a körülmények megakadályozzák a természetes viselkedést, például a szabad mozgást, az utódok gondozását vagy a szárnyak kinyújtását. Az állati eredetű termékek fogyasztásának csökkentése közvetlenül csökkenti az ilyen körülmények között élő állatok számát."
  },
  quiz: {  
    question: {
      en: "How much space does a hen typically have in a battery cage?",
      es: "¿Cuánto espacio tiene normalmente una gallina en una jaula en batería?",
      hu: "Mekkora hely jut általában egy tyúkra egy ketreces tartásban?"
    },
    options: {
      en: [
        "Around the size of an A4 sheet of paper",
        "About 2 square meters",
        "A full open yard",
        "Half a room"
      ],
      es: [
        "Aproximadamente el tamaño de una hoja A4",
        "Unos 2 metros cuadrados",
        "Un patio abierto completo",
        "La mitad de una habitación"
      ],
      hu: [
        "Körülbelül egy A4-es lap mérete",
        "Kb. 2 négyzetméter",
        "Egy teljes nyitott udvar",
        "Egy szoba fele"
      ]
    },
    answer: 0
  }
},
24: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegetarian",  
  title: {
    en: "Bred to grow too fast",
    es: "Criados para crecer demasiado rápido",
    hu: "Túl gyors növekedésre tenyésztve"
  },
  lesson: {
    en: "Modern broiler chickens are selectively bred to grow extremely fast, reaching market weight in just 5–7 weeks. Their wild ancestors grow slowly, live for several years, and remain much lighter. Factory-farmed chickens often weigh four to five times more than wild chickens at a fraction of the age. This unnatural growth places enormous strain on their bodies, leading to heart failure, leg deformities, and organ problems. Breeding animals for rapid growth prioritizes production efficiency over their health and well-being. Understanding this helps us recognize the hidden cost of industrial breeding and the benefits of choosing plant-based alternatives.",
    es: "Los pollos de engorde modernos son criados selectivamente para crecer de forma extremadamente rápida, alcanzando el peso de mercado en solo 5–7 semanas. Sus antepasados salvajes crecen lentamente, viven varios años y pesan mucho menos. Los pollos de granja industrial suelen pesar entre cuatro y cinco veces más que los pollos salvajes a una edad mucho menor. Este crecimiento antinatural ejerce una enorme presión sobre sus cuerpos, provocando fallos cardíacos, deformaciones en las patas y problemas orgánicos. Criar animales para un crecimiento acelerado prioriza la eficiencia productiva sobre su salud y bienestar. Comprender esto nos ayuda a reconocer el costo oculto de la cría industrial y los beneficios de elegir alternativas vegetales.",
    hu: "A modern brojlercsirkéket úgy tenyésztik, hogy rendkívül gyorsan növekedjenek, és már 5–7 hetes korban elérjék a vágósúlyt. Vad őseik ezzel szemben lassan nőnek, több évig élnek, és jóval kisebb testtömegűek. Az ipari körülmények között nevelt csirkék gyakran négyszer-ötször nehezebbek, miközben életkoruk töredéke a vadon élő társaikénak. Ez a természetellenes növekedés súlyos terhelést ró a szervezetükre, szívproblémákat, lábdeformációkat és szervi károsodásokat okozva. A gyors növekedésre való tenyésztés a termelési hatékonyságot helyezi előtérbe az állatok egészségével és jólétével szemben. Ennek megértése segít felismerni az ipari tenyésztés rejtett következményeit és a növényi alapú választások előnyeit."
  },
  quiz: {  
    question: {
      en: "How do factory-farmed chickens differ from their wild relatives?",
      es: "¿En qué se diferencian los pollos de granja industrial de sus parientes salvajes?",
      hu: "Miben különböznek az ipari csirkék a vadon élő rokonaiktól?"
    },
    options: {
      en: [
        "They grow slower and live longer",
        "They have the same growth rate and lifespan",
        "They live longer but weigh less",
        "They grow much faster, weigh more, and live shorter lives"
      ],
      es: [
        "Crecen más lento y viven más",
        "Tienen la misma tasa de crecimiento y esperanza de vida",
        "Viven más pero pesan menos",
        "Crecen mucho más rápido, pesan más y viven menos tiempo"
      ],
      hu: [
        "Lassabban nőnek és tovább élnek",
        "Ugyanolyan a növekedésük és az élettartamuk",
        "Tovább élnek, de kisebbek",
        "Sokkal gyorsabban nőnek, nehezebbek és rövidebb ideig élnek"
      ]
    },
    answer: 3
  }
},
25: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegetarian",  
  title: {
    en: "Length of life or quality of life?",
    es: "¿Duración o calidad de vida?",
    hu: "Élet hossza vagy életminőség?"
  },
  lesson: {
    en: "Would you choose a short life in freedom or a longer life filled with suffering? Many farmed animals face this reality. Some live short lives marked by intense pain due to overcrowding and selective breeding. Others may live longer but endure repeated cycles of confinement and exploitation. This question invites us to reflect on whether life’s value lies solely in its length, or in the quality of experiences it contains. Considering this can help guide more compassionate food choices.",
    es: "¿Preferirías una vida corta en libertad o una vida más larga llena de sufrimiento? Muchos animales de granja viven esta realidad. Algunos tienen vidas breves marcadas por un dolor intenso debido al hacinamiento y la cría selectiva. Otros viven algo más, pero soportan ciclos repetidos de confinamiento y explotación. Esta pregunta nos invita a reflexionar sobre si el valor de la vida está solo en su duración o en la calidad de las experiencias que contiene. Pensarlo puede ayudarnos a tomar decisiones alimentarias más compasivas.",
    hu: "Egy rövid, szabad életet választanál, vagy egy hosszabbat, amely tele van szenvedéssel? Sok haszonállat számára ez a valóság. Egyesek rövid életet élnek, intenzív fájdalommal, zsúfoltság és szelektív tenyésztés miatt. Mások valamivel tovább élnek, de ismétlődő bezártságot és kizsákmányolást szenvednek el. Ez a kérdés arra hív, hogy elgondolkodjunk: az élet értékét a hossza adja, vagy az élmények minősége? Ennek átgondolása segíthet együttérzőbb ételválasztásokban."
  },
  quiz: {  
    question: {
      en: "What dilemma does this lesson highlight?",
      es: "¿Qué dilema destaca esta lección?",
      hu: "Milyen dilemmára világít rá ez a lecke?"
    },
    options: {
      en: [
        "Animals always prefer confinement",
        "The trade-off between lifespan and suffering",
        "Longer life is always better",
        "Suffering has no impact on life value"
      ],
      es: [
        "Los animales siempre prefieren el confinamiento",
        "El conflicto entre la duración de la vida y el sufrimiento",
        "Una vida más larga siempre es mejor",
        "El sufrimiento no influye en el valor de la vida"
      ],
      hu: [
        "Az állatok mindig a bezártságot részesítik előnyben",
        "Az élettartam és a szenvedés közötti ellentét",
        "A hosszabb élet mindig jobb",
        "A szenvedés nem befolyásolja az élet értékét"
      ]
    },
    answer: 1
  }
},
/*  
26: {  
  goal: "Protecting animals & animal welfare", diet: "vegetarian",  
  lesson: "Many of us choose 'free-range' or 'cage-free' products thinking that the animals don’t suffer. It’s a nice thought, but in cities or restaurants, we often can’t be sure of the true origin of these products. Labels can be misleading, and standards vary widely. By being aware of this, we can make more compassionate choices: either seek fully verified sources or opt for plant-based alternatives, reducing the risk of supporting hidden suffering.",  
  quiz: {  
    question: "Why might 'free-range' labels not guarantee that animals lived without suffering?",  
    options: ["All animals live perfectly", "Plant-based products are worse", "Standards vary and labels can be misleading", "Free-range always means happy animals"],  
    answer: "Standards vary and labels can be misleading"  
  }  
},
27: {
goal: "Protecting animals & animal welfare", diet: "vegetarian",
lesson: "Imagine if humans could design animals to produce more eggs, milk, or meat. Would you do it? Genetic manipulation allows us to alter animals’ bodies and lifespans for maximum productivity, but it comes at a cost: increased health problems, stress, and shortened natural lives. By buying products from companies that practice this, we indirectly support these interventions. Understanding how our choices contribute to genetic manipulation helps us consider ethical alternatives and the impact of consumer demand on animal welfare.",
quiz: {
question: "What ethical concern does genetic manipulation in farmed animals raise?",
options: [
"It makes animals happier and healthier",
"It has no impact on animal welfare",
"It prioritizes human profit over animal health and natural life",
"It only affects the taste of products"
],
answer: "It prioritizes human profit over animal health and natural life"
}
},
28: {  
  goal: "Protecting animals & animal welfare", diet: "vegetarian",  
  lesson: "Labels like 'cage-free,' 'range-free,' or 'grass-fed' sound reassuring, but they can be misleading. In many cases, these terms don’t guarantee that animals had space to move freely, experienced natural behaviors, or lived without stress. Standards differ between countries, and enforcement is often limited. Being aware of this helps us make informed choices. If we want to truly reduce animal suffering, we can seek verified sources or consider plant-based alternatives, which avoid supporting hidden exploitation.",  
  quiz: {  
    question: "Why can labels like 'cage-free' or 'grass-fed' be misleading?",  
    options: ["Animals always live happily", "They guarantee no suffering", "Standards vary and enforcement is limited", "They refer only to plant-based products"],  
    answer: "Standards vary and enforcement is limited"  
  }  
},
29: {  
  goal: "Protecting animals & animal welfare", diet: "vegetarian",  
  lesson: "Producing truly free-range animal products presents significant challenges. For instance, free-range egg production requires a minimum of 2.5 acres for every 1,000 hens, equating to about 108 square feet per bird. In contrast, factory-farmed systems can house thousands of hens in a fraction of that space. This expansive land requirement translates to higher operational costs, including land acquisition, maintenance, and rotational grazing practices. Consequently, the price of free-range products is often higher, reflecting these increased costs. While the welfare of animals is a priority in free-range systems, the scalability of such practices is limited by land availability and economic factors.",
  quiz: {
    question: "What is a significant challenge in producing free-range animal products?",
    options: [
      "Lower operational costs",
      "Limited land availability",
      "Higher animal welfare standards",
      "Increased scalability"
    ],
    answer: "Limited land availability"
  }
},
30: {
goal: "Protecting animals & animal welfare", diet: "vegetarian",
lesson: "When thinking about animal suffering, one question often arises: what is worse — killing an animal or forcing it to live its life in extreme confinement and suffering? Many philosophers and animal ethicists argue that while death ends suffering, the prolonged experience of living in harmful conditions, unable to express natural behaviors or enjoy a life worth living, can be far worse. Factory farms often subject animals to this second scenario: they live their entire lives in cramped, stressful environments and endure suffering daily until they are slaughtered.",
quiz: {
question: "Which scenario is often considered worse for an animal?",
options: [
"Being killed immediately",
"Living a life in extreme confinement and suffering",
"Being free in nature",
"Living with human companions who love them"
],
answer: "Living a life in extreme confinement and suffering"
}
},
31: {
goal: "Protecting animals & animal welfare", diet: "vegetarian",
lesson: "Modern egg-laying hens have been selectively bred to produce far more eggs than their wild ancestors. While a wild hen or red junglefowl lays around 10–15 eggs per year, domesticated hens in factory farms can lay over 300 eggs annually. This intense production puts enormous stress on their bodies, often leading to health problems like weakened bones, organ failure, and exhaustion. By understanding how genetic modifications and selective breeding affect animals, we can make more compassionate choices and reduce the demand for products that compromise their well-being.",
quiz: {
question: "How many eggs can a factory-farmed hen lay compared to a wild hen?",
options: [
"50 eggs per year vs. 100 eggs per year",
"100 eggs per year vs. 200 eggs per year",
"10–15 eggs per year vs. over 300 eggs per year",
"Both lay about the same amount"
],
answer: "10–15 eggs per year vs. over 300 eggs per year"
}
},
32: {
goal: "Protecting animals & animal welfare", diet: "vegetarian",
lesson: "Mother cows are highly social and emotional animals, forming strong bonds with their calves. In the dairy industry, these bonds are often cruelly broken: calves are separated from their mothers within hours or days of birth so that humans can take the milk for consumption. This separation causes immense stress and distress for both mother and calf. The mother is repeatedly impregnated to continue milk production, while calves are either raised for veal or dairy replacement.",
quiz: {
question: "Why is the separation of calves from their mothers in the dairy industry harmful?",
options: [
"It increases milk production",
"Cows are highly emotional and form strong bonds with their calves",
"It helps the calf grow faster",
"It is only done in small farms"
],
answer: "Cows are highly emotional and form strong bonds with their calves"
}
},
33: {
goal: "Protecting animals & animal welfare", diet: "vegetarian",
lesson: "In the dairy industry, male calves are considered 'by-products' because they cannot produce milk. Shortly after birth, most are either sold for veal production or raised for beef under harsh conditions. Many are separated from their mothers immediately, confined in small spaces, and often subjected to painful procedures like dehorning or castration without proper pain relief. This highlights that dairy farming not only exploits female cows for milk but also subjects male calves to suffering and early death.",
quiz: {
question: "What usually happens to male calves in the dairy industry?",
options: [
"They become dairy cows later",
"They are kept as pets on the farm",
"They are allowed to live freely on pastures",
"They are sold for veal or beef under harsh conditions"
],
answer: "They are sold for veal or beef under harsh conditions"
}
},
34: {
goal: "Protecting animals & animal welfare", diet: "vegetarian",
lesson: "In the egg industry, male chicks are considered useless because they cannot lay eggs. Within hours of hatching, billions of male chicks worldwide are killed, often through methods like maceration or gassing. This mass culling highlights the industrial view of animals as mere production units rather than sentient beings. Unlike females, they are denied the chance to live even a short life. ",
quiz: {
question: "Why are male chicks in the egg industry killed shortly after hatching?",
options: [
"They cannot lay eggs and are considered unprofitable",
"They grow too slowly for meat",
"They fight with other chickens",
"They are kept for breeding instead"
],
answer: "They cannot lay eggs and are considered unprofitable"
}
},
35: {
goal: "Protecting animals & animal welfare", diet: "vegetarian",
lesson: "Imagine being born into the farming industry — would you rather be male or female? Male animals, like calves or chicks, are often considered 'unnecessary' and may be killed shortly after birth or raised under harsh conditions. Female animals, meanwhile, are forced into cycles of exploitation: repeatedly bred, confined, and separated from their offspring, all while their natural behaviors are restricted until they are eventually slaughtered. This question encourages us to reflect on the limited choices and suffering imposed on farmed animals.",
quiz: {
question: "In the farming industry, what are typical fates of male and female animals?",
options: [
"Males and females both live free lives on pastures",
"Males are often killed or raised for meat; females are repeatedly bred and exploited",
"Males become producers of milk or eggs; females are used for meat",
"All animals are treated equally and released after birth"
],
answer: "Males are often killed or raised for meat; females are repeatedly bred and exploited"
}
},
36: {
goal: "Protecting animals & animal welfare", diet: "vegetarian",
lesson: "If you ran a farm, would you prioritize maximizing output or respecting animals’ natural behaviors? Would you manipulate genetics for profit? Imagine how it would feel if other companies gained advantages by harming animals, forcing you to compete under unethical conditions. This dilemma reflects a broader reality of capitalism: profit often outweighs ethics. As individuals, do you think the best choice we can make is to choose plant-based products?",
quiz: {
question: "What ethical tension does yesterday's lesson explore?",
options: [
"Choosing between profit and respecting animals’ natural behaviors",
"Deciding which breed of chicken tastes best",
"Maximizing milk output without considering ethics",
"Only thinking about competition in farming"
],
answer: "Choosing between profit and respecting animals’ natural behaviors"
}
},
37: {
  goal: "Protecting animals & animal welfare", diet: "vegetarian",
  lesson: "About 2,340 kcal of chicken meat equals the life of one broiler chicken, while roughly 15,750 kcal of eggs equals the life of one hen (including the male chick). These numbers reflect deaths only, not the suffering endured, but they highlight the real impact of our food choices. Which matters more? The number of lives lost, or the suffering experienced? Reflecting on this can help us make more compassionate decisions.",
  quiz: {
    question: "What does yesterday's lesson encourage us to consider?",
    options: [
      "Which animal tastes better",
      "How to cook eggs efficiently",
      "The number of lives lost and the suffering caused by our food choices",
      "Which farm is most efficient"
    ],
    answer: "The number of lives lost and the suffering caused by our food choices"
  }
},
38: {
  goal: "Protecting animals & animal welfare", diet: "vegetarian",
  lesson: "In the egg industry, hens are often subjected to debeaking, where the tip of their beak is removed to prevent pecking in crowded conditions. This is usually done shortly after hatching, often without anesthesia. While it reduces injuries among birds, it causes pain, stress, and limits their ability to peck and eat naturally. Debeaking highlights how industrial practices prioritize efficiency over the well-being and natural behavior of animals.",
  quiz: {
    question: "Why are hens often debeaked in the egg industry?",
    options: [
      "To prevent injuries from pecking in crowded conditions",
      "To make their beaks look nicer",
      "To help them lay more eggs",
      "To make them grow faster"
    ],
    answer: "To prevent injuries from pecking in crowded conditions"
  }
},
39: {
  goal: "Protecting animals & animal welfare", diet: "vegetarian",
  lesson: "Many people oppose wearing fur, yet the use of leather, wool, and down is widely accepted and normalized. Reflecting on how these everyday clothing choices affect sentient beings can help us consider alternatives like plant-based or synthetic materials, reducing harm and aligning our actions with our values.",
  quiz: {
    question: "What ethical consideration does this lesson highlight regarding clothing?",
    options: [
      "The style and fashion trends of animal products",
      "How animals are exploited in the production of leather, wool, and down",
      "Which clothing brand is the cheapest",
      "How to wash clothes more efficiently"
    ],
    answer: "How animals are exploited in the production of leather, wool, and down"
  }
},
40: {
  goal: "Protecting animals & animal welfare", diet: "vegetarian",
  lesson: "Zoos and circuses often present animals as entertainment rather than living beings with needs and feelings. Many are kept in small enclosures, separated from their natural habitats, and trained through stress or punishment. Do you think it is acceptable to use animals for entertainment, or should we seek alternative ways to enjoy ourselves?",
  quiz: {
    question: "What is the ethical concern about zoos and circuses?",
    options: [
      "How to get the best seats for a show",
      "That animals are used for entertainment and profit rather than their well-being",
      "Which animal performs the hardest tricks",
      "How to take selfies with animals"
    ],
    answer: "That animals are used for entertainment and profit rather than their well-being"
  }
},

*/

// --------------------------
// Animal welfare - Vegan (41–100)
// --------------------------

41: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegan",  
  title: {
    en: "The purpose of veganism",
    es: "El propósito del veganismo",
    hu: "A veganizmus célja"
  },
  lesson: {
    en: "Veganism is a lifestyle that seeks to avoid all forms of animal exploitation and cruelty, not just a diet. While a vegan diet excludes meat, dairy, eggs, and other animal products, veganism also means avoiding products like leather, fur, silk, wool, and cosmetics tested on animals. Its main goal is to protect animals and promote their welfare in every aspect of life.",
    es: "El veganismo es un estilo de vida que busca evitar todas las formas de explotación y crueldad hacia los animales, no solo una dieta. Mientras que una dieta vegana excluye carne, lácteos, huevos y otros productos de origen animal, el veganismo también implica evitar productos como cuero, pieles, seda, lana y cosméticos probados en animales. Su objetivo principal es proteger a los animales y promover su bienestar en todos los aspectos de la vida.",
    hu: "A veganizmus egy életmód, amely minden állatkizsákmányolás és kegyetlenség elkerülésére törekszik, nemcsak az étrendre korlátozódik. Míg a vegán étrend kizárja a húst, tejtermékeket, tojást és más állati eredetű termékeket, a veganizmus azt is jelenti, hogy kerüljük a bőrt, szőrmét, selymet, gyapjút és az állatokon tesztelt kozmetikumokat. Fő célja az állatok védelme és jólétük előmozdítása az élet minden területén."
  },
  quiz: {  
    question: {
      en: "What is the main purpose of veganism?",
      es: "¿Cuál es el objetivo principal del veganismo?",
      hu: "Mi a veganizmus fő célja?"
    },  
    options: {
      en: [
        "To eat only plant-based foods",
        "To avoid harming animals and reduce exploitation",
        "To follow a healthy diet plan"
      ],
      es: [
        "Comer solo alimentos de origen vegetal",
        "Evitar dañar a los animales y reducir la explotación",
        "Seguir un plan de dieta saludable"
      ],
      hu: [
        "Csak növényi alapú ételeket enni",
        "Elkerülni az állatok bántalmazását és csökkenteni a kizsákmányolást",
        "Követni egy egészséges étrendet"
      ]
    },
    answer: 1
  }
},

42: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegan",  
  title: {
    en: "Why eating animals isn’t necessary today",
    es: "Por qué comer animales ya no es necesario",
    hu: "Miért nincs szükség ma állatokat enni"
  },
  lesson: {
    en: "Many people believe that eating animals is natural and part of human evolution. Once it was a key survival strategy, but today we can walk into a store and buy almost anything we want. True natural living means animals born into freedom, able to experience life, not genetically modified or confined to tiny cages where they are raised solely for slaughter.",
    es: "Muchas personas creen que comer animales es natural y parte de la evolución humana. En el pasado, era una estrategia clave de supervivencia, pero hoy podemos entrar en una tienda y comprar casi cualquier cosa que queramos. La verdadera vida natural significa animales nacidos en libertad, capaces de experimentar la vida, no modificados genéticamente ni confinados en jaulas diminutas donde se crían únicamente para el sacrificio.",
    hu: "Sokan úgy vélik, hogy az állatok fogyasztása természetes és az emberi evolúció része. Valaha ez kulcsfontosságú túlélési stratégia volt, de ma már bármilyen ételt könnyen beszerezhetünk a boltokból. Az igazi természetes élet azt jelenti, hogy az állatok szabadon születnek, képesek megtapasztalni az életet, nem genetikai módosítással vagy apró ketrecekbe zárva, ahol kizárólag levágásra nevelik őket."
  },
  quiz: {  
    question: {
      en: "Why is eating animals no longer considered necessary for survival today?",
      es: "¿Por qué hoy ya no se considera necesario comer animales para sobrevivir?",
      hu: "Miért nem szükséges ma már állatokat enni a túléléshez?"
    },  
    options: {
      en: [
        "Because humans evolved to eat only plants",
        "Because we can obtain food easily without killing animals",
        "Because animals in the wild no longer exist"
      ],
      es: [
        "Porque los humanos evolucionaron para comer solo plantas",
        "Porque podemos obtener comida fácilmente sin matar animales",
        "Porque los animales salvajes ya no existen"
      ],
      hu: [
        "Mert az emberek csak növényeket esznek az evolúció során",
        "Mert ételt könnyen beszerezhetünk anélkül, hogy állatokat ölnénk",
        "Mert a vadon élő állatok már nem léteznek"
      ]
    },
    answer: 1
  }
},
43: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegan",  
  title: {
    en: "Crop deaths and the bigger picture",
    es: "Muertes de cultivos y la visión completa",
    hu: "Növénytermesztés és az összkép"
  },
  lesson: {
    en: "Some people argue that eating plants also causes animal deaths during farming, so veganism is no better. While it’s true that all food production has some impact, the scale matters. The majority of crop deaths are not caused by eating plants directly, but by growing vast amounts of feed for farmed animals. Around 77% of global agricultural land is used to grow animal feed, yet it provides only about 18% of the world’s calories. This means that producing meat causes significantly more crop-related deaths per calorie than consuming plants directly. Choosing plant-based foods reduces overall harm by minimizing unnecessary inefficiency.",
    es: "Algunas personas argumentan que comer plantas también causa muertes de animales durante la agricultura, por lo que el veganismo no sería mejor. Aunque es cierto que toda producción de alimentos tiene algún impacto, la escala es importante. La mayoría de las muertes asociadas a los cultivos no se deben al consumo directo de plantas, sino al cultivo masivo de alimento para animales de granja. Aproximadamente el 77% de la tierra agrícola mundial se utiliza para producir alimento animal, pero solo aporta alrededor del 18% de las calorías globales. Esto significa que producir carne provoca muchas más muertes relacionadas con cultivos por caloría que consumir plantas directamente. Elegir alimentos vegetales reduce el daño total al disminuir esta ineficiencia innecesaria.",
    hu: "Egyesek azzal érvelnek, hogy a növények fogyasztása is állatok pusztulásával jár a mezőgazdaság során, ezért a veganizmus nem jobb megoldás. Bár igaz, hogy minden élelmiszer-termelésnek van hatása, a mérték számít. A növénytermesztéshez köthető elhullások többsége nem a közvetlen növényfogyasztásból ered, hanem az állatok takarmányozására termesztett hatalmas mennyiségekből. A világ mezőgazdasági területeinek körülbelül 77%-át állati takarmány termesztésére használják, miközben ez csupán a globális kalóriák körülbelül 18%-át biztosítja. Ez azt jelenti, hogy a hús előállítása jóval több növénytermesztéshez kapcsolódó pusztulást okoz kalóriánként, mint a növények közvetlen fogyasztása. A növényi alapú választások összességében kevesebb kárt okoznak azáltal, hogy csökkentik ezt a felesleges pazarlást."
  },
  quiz: {  
    question: {
      en: "Why does eating animals indirectly cause more crop deaths?",
      es: "¿Por qué comer animales causa indirectamente más muertes relacionadas con cultivos?",
      hu: "Miért okoz az állatok fogyasztása közvetve több növénytermesztéshez köthető pusztulást?"
    },
    options: {
      en: [
        "Because animals eat large amounts of crops grown as feed",
        "Because plants are not suitable for human nutrition",
        "Because crops naturally die during harvest"
      ],
      es: [
        "Porque los animales consumen grandes cantidades de cultivos como alimento",
        "Porque las plantas no son adecuadas para la nutrición humana",
        "Porque los cultivos mueren naturalmente durante la cosecha"
      ],
      hu: [
        "Mert az állatok hatalmas mennyiségű növényi takarmányt fogyasztanak",
        "Mert a növények nem alkalmasak emberi táplálkozásra",
        "Mert a növények természetesen elpusztulnak betakarításkor"
      ]
    },
    answer: 0
  }
},
44: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegan",  
  title: {
    en: "Natural suffering vs. human responsibility",
    es: "Sufrimiento natural y responsabilidad humana",
    hu: "Természetes szenvedés és emberi felelősség"
  },
  lesson: {
    en: "Some people argue that animal suffering is unavoidable because it also exists in nature. While it’s true that wild animals experience hardship, the scale and cause of suffering in industrial animal farming are fundamentally different. Human-driven systems intentionally breed, confine, and exploit billions of animals each year. Unlike natural processes, this suffering is planned, systematic, and largely avoidable. As moral agents with the ability to choose, humans have the responsibility to reduce unnecessary harm whenever possible. Choosing plant-based foods is one direct way to do so.",
    es: "Algunas personas sostienen que el sufrimiento animal es inevitable porque también ocurre en la naturaleza. Si bien es cierto que los animales salvajes enfrentan dificultades, la escala y la causa del sufrimiento en la ganadería industrial son fundamentalmente diferentes. Los sistemas creados por los humanos crían, confinan y explotan intencionalmente a miles de millones de animales cada año. A diferencia de los procesos naturales, este sufrimiento es planificado, sistemático y en gran medida evitable. Como agentes morales con capacidad de elección, los humanos tenemos la responsabilidad de reducir el daño innecesario siempre que sea posible. Elegir alimentos vegetales es una forma directa de hacerlo.",
    hu: "Egyesek szerint az állati szenvedés elkerülhetetlen, hiszen a természetben is jelen van. Bár igaz, hogy a vadon élő állatok is szenvednek, az ipari állattartásban tapasztalható szenvedés mértéke és oka alapvetően eltér. Az ember által létrehozott rendszerek tudatosan tenyésztenek, bezárnak és kizsákmányolnak évente több milliárd állatot. A természettel ellentétben ez a szenvedés tervezett, rendszerszintű és nagyrészt elkerülhető. Erkölcsi döntéshozóként felelősségünk csökkenteni a szükségtelen károkat, amikor csak lehetséges. A növényi alapú étrend választása ennek egyik közvetlen módja."
  },
  quiz: {  
    question: {
      en: "Why is human-caused animal suffering considered different from natural suffering?",
      es: "¿Por qué el sufrimiento animal causado por humanos se considera diferente al natural?",
      hu: "Miért különbözik az ember okozta állati szenvedés a természetestől?"
    },
    options: {
      en: [
        "Because animals in nature never suffer",
        "Because it is larger in scale and avoidable",
        "Because humans cannot understand animal pain"
      ],
      es: [
        "Porque los animales en la naturaleza nunca sufren",
        "Porque es mayor en escala y evitable",
        "Porque los humanos no pueden entender el dolor animal"
      ],
      hu: [
        "Mert a természetben élő állatok soha nem szenvednek",
        "Mert nagyobb léptékű és elkerülhető",
        "Mert az emberek nem értik az állatok fájdalmát"
      ]
    },
    answer: 1
  }
},
45: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegan",  
  title: {
    en: "What is truly extreme?",
    es: "¿Qué es realmente extremo?",
    hu: "Mi számít igazán szélsőségesnek?"
  },
  lesson: {
    en: "Some people describe veganism as extreme or inconvenient. Yet when we look at the bigger picture, continuing animal agriculture may be the more extreme choice. Each year, tens of billions of animals are bred, confined, and killed for food, while hundreds of millions of people still face hunger. This system requires enormous resources and causes widespread harm that could largely be avoided. Choosing veganism is not about perfection, but about reducing unnecessary suffering and inefficiency where we reasonably can.",
    es: "Algunas personas describen el veganismo como algo extremo o incómodo. Sin embargo, al observar el panorama completo, continuar con la ganadería animal puede ser la opción más extrema. Cada año, decenas de miles de millones de animales son criados, confinados y sacrificados para la alimentación, mientras cientos de millones de personas siguen pasando hambre. Este sistema consume enormes recursos y genera un daño generalizado que podría evitarse en gran medida. Elegir el veganismo no trata de ser perfecto, sino de reducir el sufrimiento y la ineficiencia innecesarios cuando está en nuestras manos hacerlo.",
    hu: "Egyesek a veganizmust szélsőségesnek vagy kényelmetlennek tartják. Ha azonban a teljes képet nézzük, az állattenyésztés fenntartása tűnhet az igazán szélsőséges választásnak. Évente több tízmilliárd állatot tenyésztenek, zárnak be és ölnek meg élelmiszerként, miközben emberek százmilliói továbbra is éheznek. Ez a rendszer hatalmas erőforrásokat emészt fel, és széles körű károkat okoz, amelyek nagy része elkerülhető lenne. A veganizmus választása nem a tökéletességről szól, hanem arról, hogy csökkentsük a szükségtelen szenvedést és pazarlást ott, ahol ésszerűen megtehetjük."
  },
  quiz: {  
    question: {
      en: "Why might continuing animal agriculture be considered extreme?",
      es: "¿Por qué continuar con la ganadería animal puede considerarse extremo?",
      hu: "Miért tekinthető szélsőségesnek az állattenyésztés fenntartása?"
    },
    options: {
      en: [
        "Because vegan food tastes better",
        "Because it causes large-scale unnecessary harm and inefficiency",
        "Because animals are more popular than plants"
      ],
      es: [
        "Porque la comida vegana sabe mejor",
        "Porque causa un daño e ineficiencia innecesarios a gran escala",
        "Porque los animales son más populares que las plantas"
      ],
      hu: [
        "Mert a vegán ételek finomabbak",
        "Mert nagyléptékű, szükségtelen károkat és pazarlást okoz",
        "Mert az állatok népszerűbbek, mint a növények"
      ]
    },
    answer: 1
  }
},

/*  
46: {
  goal: "Protecting animals & animal welfare", diet: "vegan",
  lesson: "Some people argue that animals aren’t equal to humans. It’s unclear what makes humans inherently superior. We accept differences in intelligence and abilities among people, yet pigs — one of the smartest animals on Earth — are still raised for food. In fact, in all ways that truly matter, humans and animals are the same: we share the same fears, feelings, and capacity to suffer. This is what counts ethically.",
  quiz: {
    question: "Why are humans and animals considered equal in important ways?",
    options: [
      "Because animals are smarter than humans",
      "Because both experience fears, feelings, and suffering",
      "Because humans are naturally stronger"
    ],
    answer: "Because both experience fears, feelings, and suffering"
  }
},
47: {  
  goal: "Protecting animals & animal welfare", diet: "vegan",
  lesson: "Some people claim that plants have feelings. Science shows that plants don’t have a brain or central nervous system, so they don’t feel pain the way animals do.  But there’s another important fact: around 77% of global agricultural land is used for livestock, while farm animals provide only about 18% of the world’s calories and 37% of its protein. This means most of the land and crops are used inefficiently, to feed animals instead of people.",  
  quiz: {  
    question: "What percentage of global agricultural land is used for livestock?",  
    options: ["36%", "50%", "77%", "90%"],  
    answer: "77%"  
  }  
},
48: {  
  goal: "Protecting animals & animal welfare", diet: "vegan",
  lesson: "Some people say, 'A little meat won’t hurt,' thinking that their personal consumption is too small to matter. While one person alone may seem insignificant, collective behavior adds up. If more people reduce or eliminate animal products, the cumulative impact on animal welfare, climate change, and resource use would be enormous. Every choice counts.",
  quiz: {
    question: "Why does even small individual meat consumption matter?",
    options: [
      "Because collective choices add up and create large impact",
      "Because one person cannot survive without meat",
      "Because plants can replace meat immediately without planning"
    ],
    answer: "Because collective choices add up and create large impact"
  }
}, 
49: {
  goal: "Protecting animals & animal welfare", diet: "vegan",
  lesson: "Most mammals on Earth today are not wild animals. When we look at the total biomass of mammals, about 60% are farmed animals like cows and pigs. Humans make up another 36%. That leaves only 4% as truly wild mammals.",
  quiz: {
    question: "What percentage of mammals are truly wild?",
    options: ["4%", "36%", "60%"],
    answer: "4%"
  }
},
50: {
  goal: "Protecting animals & animal welfare", diet: "vegan",
  lesson: "About 25% of mammal species are currently threatened with extinction, according to the IUCN. Species like primates, big cats, and elephants are among the most iconic and widely loved, while less charismatic species, like small rodents or bats, are often overlooked despite being equally important for ecosystems.",
  quiz: {
    question: "What percentage of mammal species are currently threatened with extinction?",
    options: ["10%", "25%", "50%"],
    answer: "25%"
  }
},
51: {
  goal: "Protecting animals & animal welfare", diet: "vegan",
  lesson: "Chickens today grow much faster and larger than their wild ancestors due to selective breeding and genetic modification. While wild chickens laid about 12 eggs per year, modern farmed chickens can lay over 240 eggs annually. This rapid growth impacts their health, mobility, and quality of life.",
  quiz: {
    question: "How many eggs did wild chickens lay annually?",
    options: ["100", "240", "12"],
    answer: "12"
  }
},
52: {
  goal: "Protecting animals & animal welfare", diet: "vegan",
  lesson: "Around 70% of global antibiotic supply is used in livestock farming, not in humans. Antibiotics are given to animals to promote growth and prevent disease in crowded conditions, which contributes to antibiotic resistance—a major public health concern.",
  quiz: {
    question: "What percentage of antibiotics is used in livestock farming?",
    options: ["70%", "30%", "50%"],
    answer: "70%"
  }
},
53: {
  goal: "Protecting animals & animal welfare", diet: "vegan",
  lesson: "Many farmed animals are kept in extremely small cages, often unable to turn around or move freely. This raises ethical questions: is severe confinement worse than the act of slaughter itself?",
  quiz: {
    question: "What ethical issue arises from very small cages?",
    options: ["Animals become smarter", "Severe confinement limits movement", "Cages improve health"],
    answer: "Severe confinement limits movement"
  }
},
54: {
  goal: "Protecting animals & animal welfare", diet: "vegan",
  lesson: "Companies that provide better conditions for animals cannot compete with conventional industrial farms due to higher costs. This raises a philosophical question about the value of life and whether profit should outweigh the well-being of sentient beings.",
  quiz: {
    question: "Why can't companies with better animal conditions compete?",
    options: ["They don't care about animals", "They produce less milk", "Higher costs than industrial farms"],
    answer: "Higher costs than industrial farms"
  }
},
55: {
  goal: "Protecting animals & animal welfare", diet: "vegan",
  lesson: "Debeaking, the removal of parts of chickens' beaks, is common in industrial farms to prevent pecking injuries in crowded conditions. This procedure causes both physical pain and behavioral stress for the birds.",
  quiz: {
    question: "Why is debeaking performed on farmed chickens?",
    options: ["To prevent pecking injuries", "To make them grow faster", "For decoration"],
    answer: "To prevent pecking injuries"
  }
},
56: {
  goal: "Protecting animals & animal welfare", diet: "vegan",
  lesson: "The dairy industry often grinds up male chicks alive and repeatedly artificially inseminates cows, separating mothers from their calves. These practices cause significant suffering and raise questions about the ethics of animal exploitation.",
  quiz: {
    question: "What happens to male chicks in the dairy industry?",
    options: ["They live freely on farms", "They are often ground alive", "They are given special care"],
    answer: "They are often ground alive"
  }
},
57: {
  goal: "Protecting animals & animal welfare", diet: "vegan",
  lesson: "Chickens originally laid about 12 eggs per year in natural conditions. Through selective breeding and genetic modification, modern hens can lay over 240 eggs annually. This demonstrates how human intervention can drastically alter an animal’s biology for production purposes.",
  quiz: {
    question: "How many eggs did chickens originally lay per year?",
    options: ["240", "100", "12"],
    answer: "12"
  }
},
58: {
  goal: "Protecting animals & recognizing hidden suffering in clothing", diet: "vegan",
  lesson: "Many people strongly oppose wearing fur, because it is seen as cruel to kill animals for fashion. However, we often ignore that leather, wool, and down also come from animals who suffer. Leather typically comes from cows raised and killed in the meat and dairy industry, wool often comes from sheep who undergo painful shearing and breeding practices, and down is taken from ducks and geese who are plucked or slaughtered. The main difference is not the animal's experience, but our cultural habits and what we were taught to see as 'normal.'",
  quiz: {
    question: "Which of these clothing materials can involve animal suffering?",
    options: ["Leather", "Wool", "Down", "All of the above"],
    answer: "All of the above"
  }
},
59: {
  goal: "Understanding animal captivity in entertainment", diet: "vegan",
  lesson: "Circuses and many traditional zoos keep animals in environments that cannot meet their physical and emotional needs. Wild animals such as elephants, lions, or dolphins are used to living in large natural spaces, forming social groups, exploring, and making choices. In circuses, they are often trained using fear, punishment, and confinement, spending most of their time in cages or transport trucks. Even when the animals are fed and kept alive, their freedom, autonomy, and social lives are taken away. Choosing not to support these industries encourages the shift toward sanctuaries and conservation efforts that truly protect animals.",
  quiz: {
    question: "Why is it better to avoid supporting circuses and certain zoos?",
    options: [
      "Because animals in these industries are often confined and cannot express natural behaviors",
      "Because animals enjoy performing tricks",
      "Because zoos are always focused on conservation"
    ],
    answer: "Because animals in these industries are often confined and cannot express natural behaviors"
  }
},
60: {
  goal: "Choosing ethical products", diet: "vegan",
  lesson: "A product can be labeled “vegan” and still not be cruelty-free. “Vegan” means it does not contain animal ingredients, but it does not guarantee that the product or its ingredients were not tested on animals. Some brands remove animal products for marketing, while still supporting animal testing through suppliers or distribution in countries that require testing. To avoid this, look for products that are both labeled 'vegan' and 'cruelty-free.' Certifications like the Leaping Bunny, PETA Cruelty-Free, or Vegan Society logo help confirm that no animal ingredients or animal testing were involved.",
  quiz: {
    question: "What is the difference between 'vegan' and 'cruelty-free' on a product label?",
    options: [
      "'Vegan' means no animal ingredients, 'cruelty-free' means no animal testing",
      "They mean the same thing",
      "'Cruelty-free' means no animal ingredients"
    ],
    answer: "'Vegan' means no animal ingredients, 'cruelty-free' means no animal testing"
  }
},

// continue

*/






  // --------------------------
  // Environment - Omnivore (1001–1020)
  // --------------------------
  1001: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "omnivore",  
  title: {
    en: "Pillars of fighting climate change",
    es: "Pilares para luchar contra el cambio climático",
    hu: "A klímaváltozás elleni küzdelem alapjai"
  },
  lesson: {
    en: "Fighting climate change requires global and individual action. The main pillars include switching to renewable energy, protecting forests, reducing waste, using sustainable transport, safeguarding biodiversity, and returning land to nature. Together, these steps cut greenhouse gas emissions and help restore balance to our planet.",
    es: "Luchar contra el cambio climático requiere acción global e individual. Los pilares principales incluyen el cambio a energías renovables, la protección de los bosques, la reducción de residuos, el uso de transporte sostenible, la salvaguardia de la biodiversidad y la devolución de tierras a la naturaleza. Juntos, estos pasos reducen las emisiones de gases de efecto invernadero y ayudan a restaurar el equilibrio de nuestro planeta.",
    hu: "A klímaváltozás elleni küzdelem globális és egyéni cselekvést igényel. A fő pillérek közé tartozik a megújuló energia használata, az erdők védelme, a hulladék csökkentése, fenntartható közlekedés alkalmazása, a biodiverzitás védelme és a föld visszaadása a természetnek. Ezek a lépések együtt csökkentik az üvegházhatású gázok kibocsátását, és segítenek helyreállítani a bolygónk egyensúlyát."
  },
  quiz: {  
    question: {
      en: "Which of the following is NOT one of the main pillars of fighting climate change?",
      es: "¿Cuál de los siguientes NO es uno de los pilares principales para luchar contra el cambio climático?",
      hu: "Melyik NEM a klímaváltozás elleni küzdelem fő pillérei közül?"
    },  
    options: {
      en: [
        "Switching to renewable energy",
        "Protecting forests",
        "Increasing fossil fuel use"
      ],
      es: [
        "Cambiar a energías renovables",
        "Proteger los bosques",
        "El aumento del uso de combustibles fósiles"
      ],
      hu: [
        "Áttérés megújuló energiára",
        "Az erdők védelme",
        "A fosszilis tüzelőanyagok használatának növelése"
      ]
    },
    answer: 2
  }
},
1002: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "omnivore",  
  title: {
    en: "Energy and greenhouse-gas emissions",
    es: "Energía y emisiones de gases de efecto invernadero",
    hu: "Energia és üvegházhatású gázok kibocsátása"
  },
  lesson: {
    en: "The energy industry is the largest driver of global greenhouse-gas emissions. Around 70% of all emissions come from energy-related sources — including electricity and heat generation, transport, manufacturing, construction and fossil fuel extraction. Switching to renewable energy (such as solar, wind, hydro) and improving energy efficiency are therefore central pillars in the fight against climate change. Together they help cut CO₂ and methane emissions and unlock reductions across multiple sectors.",
    es: "La industria energética es la mayor responsable de las emisiones globales de gases de efecto invernadero. Alrededor del 70% de todas las emisiones provienen de fuentes relacionadas con la energía, incluyendo la generación de electricidad y calor, transporte, manufactura, construcción y extracción de combustibles fósiles. Por lo tanto, la transición a energías renovables (como solar, eólica, hidráulica) y la mejora de la eficiencia energética son pilares centrales en la lucha contra el cambio climático. Juntos, ayudan a reducir las emisiones de CO₂ y metano y permiten reducciones en múltiples sectores.",
    hu: "Az energiaipar a globális üvegházhatású gázok kibocsátásának legnagyobb forrása. A kibocsátások körülbelül 70%-a energiaforrásokból származik — beleértve az elektromos- és hőenergia-termelést, közlekedést, gyártást, építkezést és a fosszilis tüzelőanyagok kitermelését. Az áttérés a megújuló energiára (például nap-, szél- és vízenergia) és az energiahatékonyság javítása ezért központi pillérei a klímaváltozás elleni küzdelemnek. Ezek együtt segítenek csökkenteni a CO₂- és metánkibocsátást, és lehetővé teszik a csökkentést több szektorban."
  },
  quiz: {  
    question: {
      en: "Approximately what share of global greenhouse-gas emissions comes from energy-related sources?",
      es: "¿Qué proporción aproximada de las emisiones globales de gases de efecto invernadero proviene de fuentes relacionadas con la energía?",
      hu: "A globális üvegházhatású gázok kibocsátásának körülbelül hány százaléka származik energiaforrásokból?"
    },  
    options: {
      en: [
        "About 25%",
        "About 50%",
        "About 70%"
      ],
      es: [
        "Alrededor del 25%",
        "Alrededor del 50%",
        "Alrededor del 70%"
      ],
      hu: [
        "Körülbelül 25%",
        "Körülbelül 50%",
        "Körülbelül 70%"
      ]
    },
    answer: 2
  }
},
1003: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "omnivore",  
  title: {
    en: "Deforestation and agriculture",
    es: "Deforestación y agricultura",
    hu: "Erdőirtás és mezőgazdaság"
  },
  lesson: {
    en: "Deforestation is one of the most urgent climate challenges. Globally, agricultural expansion drives nearly 90% of tropical forest loss. Within this, activities linked to livestock — especially pasture for cattle and crops grown to feed animals — are major contributors. Protecting forests and restoring land are vital parts of the fight against climate change.",
    es: "La deforestación es uno de los desafíos climáticos más urgentes. A nivel mundial, la expansión agrícola impulsa casi el 90% de la pérdida de bosques tropicales. Dentro de esto, las actividades relacionadas con la ganadería — especialmente los pastos para el ganado y los cultivos destinados a alimentar animales — son contribuyentes importantes. Proteger los bosques y restaurar la tierra son partes esenciales de la lucha contra el cambio climático.",
    hu: "Az erdőirtás az egyik legsürgetőbb klímavédelmi kihívás. Világszerte a mezőgazdasági terjeszkedés felelős a trópusi erdőirtás közel 90%-áért. Ezen belül az állattenyésztéshez kapcsolódó tevékenységek — különösen a legelők és az állati takarmány termesztése — jelentős szerepet játszanak. Az erdők védelme és a területek helyreállítása kulcsfontosságú a klímaváltozás elleni küzdelemben."
  },
  quiz: {  
    question: {
      en: "Approximately what percentage of tropical deforestation is driven by agriculture?",
      es: "¿Qué porcentaje aproximado de la deforestación tropical es impulsado por la agricultura?",
      hu: "A trópusi erdőirtás körülbelül hány százalékáért felelős a mezőgazdaság?"
    },  
    options: {
      en: [
        "About 50%",
        "About 70%",
        "About 90%"
      ],
      es: [
        "Alrededor del 50%",
        "Alrededor del 70%",
        "Alrededor del 90%"
      ],
      hu: [
        "Körülbelül 50%",
        "Körülbelül 70%",
        "Körülbelül 90%"
      ]
    },
    answer: 2
  }
},
1004: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "omnivore",  
  title: {
    en: "Food waste and climate impact",
    es: "Desperdicio de alimentos e impacto climático",
    hu: "Élelmiszer-pazarlás és klímahatás"
  },
  lesson: {
    en: "Around one-third of all food produced globally is wasted each year. This wasted food is responsible for about 8–10% of global greenhouse-gas emissions, as it requires energy, water, and land to produce — and releases methane when it decomposes in landfills. Reducing food waste is one of the most effective ways to fight climate change.",
    es: "Alrededor de un tercio de todos los alimentos producidos en el mundo se desperdicia cada año. Este desperdicio es responsable de aproximadamente el 8–10% de las emisiones globales de gases de efecto invernadero, ya que requiere energía, agua y tierra para producirse — y libera metano al descomponerse en vertederos. Reducir el desperdicio de alimentos es una de las formas más efectivas de luchar contra el cambio climático.",
    hu: "Világszerte az élelmiszerek körülbelül egyharmada évente kárba vész. Ez az elpazarolt étel a globális üvegházhatású gázkibocsátás mintegy 8–10%-áért felelős, mivel az előállítása energiát, vizet és földterületet igényel — majd metánt bocsát ki a hulladéklerakókban történő lebomlás során. Az élelmiszer-pazarlás csökkentése az egyik leghatékonyabb módja a klímaváltozás elleni küzdelemnek."
  },
  quiz: {  
    question: {
      en: "Roughly what percentage of all food produced worldwide is wasted?",
      es: "¿Qué porcentaje aproximado de los alimentos producidos a nivel mundial se desperdicia?",
      hu: "A világszerte megtermelt élelmiszerek körülbelül hány százaléka vész kárba?"
    },  
    options: {
      en: [
        "About 10%",
        "About 33%",
        "About 50%"
      ],
      es: [
        "Alrededor del 10%",
        "Alrededor del 33%",
        "Alrededor del 50%"
      ],
      hu: [
        "Körülbelül 10%",
        "Körülbelül 33%",
        "Körülbelül 50%"
      ]
    },
    answer: 1
  }
},
1005: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "omnivore",  
  title: {
    en: "Transportation and emissions",
    es: "Transporte y emisiones",
    hu: "Közlekedés és kibocsátások"
  },
  lesson: {
    en: "Transportation accounts for about one-quarter of global greenhouse-gas emissions, mostly from cars, trucks, and planes that burn fossil fuels. Choosing sustainable transport — such as walking, cycling, public transport, or electric vehicles — can significantly reduce emissions and improve air quality.",
    es: "El transporte representa aproximadamente una cuarta parte de las emisiones globales de gases de efecto invernadero, principalmente de automóviles, camiones y aviones que queman combustibles fósiles. Elegir transporte sostenible — como caminar, ir en bicicleta, usar transporte público o vehículos eléctricos — puede reducir significativamente las emisiones y mejorar la calidad del aire.",
    hu: "A közlekedés a globális üvegházhatású gázkibocsátás körülbelül egynegyedéért felelős, főként a fosszilis tüzelőanyagokat használó autók, teherautók és repülők miatt. A fenntartható közlekedési formák — például gyaloglás, kerékpározás, tömegközlekedés vagy elektromos járművek — jelentősen csökkenthetik a kibocsátásokat és javíthatják a levegő minőségét."
  },
  quiz: {  
    question: {
      en: "Approximately what share of global greenhouse-gas emissions comes from transportation?",
      es: "¿Qué proporción aproximada de las emisiones globales de gases de efecto invernadero proviene del transporte?",
      hu: "A globális üvegházhatású gázkibocsátás körülbelül mekkora része származik a közlekedésből?"
    },  
    options: {
      en: [
        "About 10%",
        "About 25%",
        "About 50%"
      ],
      es: [
        "Alrededor del 10%",
        "Alrededor del 25%",
        "Alrededor del 50%"
      ],
      hu: [
        "Körülbelül 10%",
        "Körülbelül 25%",
        "Körülbelül 50%"
      ]
    },
    answer: 1
  }
},


/*  
1006: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  lesson: "Biodiversity means the variety of all living organisms on Earth — from tiny insects to large mammals and diverse ecosystems. It keeps our planet healthy by regulating the climate, purifying air and water, pollinating crops, and maintaining soil fertility. Human activities like deforestation, pollution, and overfishing threaten this balance.",
  quiz: {
    question: "Why is biodiversity important in the fight against climate change?",
    options: [
      "It helps ecosystems stay healthy and absorb carbon",
      "It increases pollution levels",
      "It reduces soil fertility"
    ],
    answer: "It helps ecosystems stay healthy and absorb carbon"
  }
},
1007: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  lesson: "Returning land to nature, or rewilding, helps ecosystems recover, stores carbon, and protects biodiversity. Since animal agriculture is the largest global land user, reducing its footprint is one of the most effective ways to free land for nature. Efficient strategies include: restoring forests, grasslands, and wetlands, planting native trees, creating wildlife corridors, and adopting sustainable farming practices.",
  quiz: {
    question: "Which human activity uses the most land globally and affects rewilding efforts?",
    options: [
      "Animal agriculture",
      "Urban development",
      "Renewable energy installations"
    ],
    answer: "Animal agriculture"
  }
},
1008: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  lesson: "Switching to renewable energy is a powerful way to reduce your carbon footprint. Electric vehicles (EVs) are a prime example. In Europe, EVs produce up to 73% fewer greenhouse gas emissions over their lifetime compared to gasoline cars, even when accounting for battery production. This reduction is achieved through higher energy efficiency and the decarbonization of the electricity grid. The climate benefits are even greater when EVs are charged using renewable energy sources like wind or solar power.",
  quiz: {
    question: "By what percentage can electric vehicles reduce lifetime greenhouse gas emissions compared to gasoline cars in Europe?",
    options: ["Up to 50%", "Up to 73%", "Up to 90%"],
    answer: "Up to 73%"
  }
},
1009: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  lesson: "Forests are being lost at an alarming rate — in 2024 alone, the world lost 8.1 million hectares of forest, equivalent to 18 soccer fields every minute. The primary driver of this deforestation is agriculture, particularly beef production, which is responsible for about 41% of tropical deforestation. This includes land cleared for cattle grazing and feed crops like soy. Protecting forests and reducing the demand for land-intensive animal products are crucial steps in combating climate change.",
  quiz: {
    question: "What percentage of tropical deforestation is linked to beef production?",
    options: ["About 20%", "About 41%", "About 60%"],
    answer: "About 41%"
  }
},
1010: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  lesson: "Around one-third of all food produced globally is wasted each year. This means that 33% of agricultural land, water, and energy is used for food that is never eaten, and the greenhouse gases emitted in producing it — including CO₂ and methane — are effectively for nothing. Reducing food waste by planning meals, storing food properly, using leftovers, and composting organic waste can significantly cut emissions, save resources, and help fight climate change.",
  quiz: {
    question: "Approximately what portion of global food production is wasted each year?",
    options: ["About 10%", "About 33%", "About 50%"],
    answer: "About 33%"
  }
},
1011: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  lesson: "Our daily habits can have a significant impact on the environment. For example, reducing food waste by half can lower your carbon footprint by around 16%, while choosing a mostly plant-based diet can reduce it by up to 50%. Supporting sustainable products, conserving water, and protecting natural habitats further help reduce the land and resources we need. Small, consistent changes in our lifestyle collectively make a huge difference for biodiversity and climate.",
  quiz: {
    question: "Approximately how much can reducing food waste by half decrease your carbon footprint?",
    options: ["About 10%", "About 16%", "About 25%"],
    answer: "About 16%"
  }
},
1012: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  lesson: "Adopting a mostly plant-based diet globally could dramatically free up land for nature. Currently, livestock farming occupies about 77% of agricultural land but provides less than 20% of calories. Shifting to plant-based foods could reduce agricultural land use by up to 75%, roughly 3.1 billion hectares, equivalent to the size of North America and Brazil combined. This land could be restored to forests, grasslands, and wetlands, supporting biodiversity, capturing carbon, and creating thriving ecosystems.",
  quiz: {
    question: "Approximately how much agricultural land could be freed if the world shifted to a mostly plant-based diet?",
    options: ["About 1 billion hectares", "About 3 billion hectares", "About 5 billion hectares"],
    answer: "About 3 billion hectares"
  }
},
1013: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  lesson: "The water footprint of our food choices is a critical but often overlooked environmental impact. Animal products, especially beef and dairy, require significantly more water to produce than plant-based foods. For instance, producing 1 kilogram of beef can consume up to 15,000 liters of water, whereas the same amount of tofu requires only about 302 liters.",
  quiz: {
    question: "How does the water needed to produce 1 kg of beef compare to 1 kg of tofu?",
    options: [
      "Beef: 15,000 liters, Tofu: 302 liters",
      "Beef: 5,000 liters, Tofu: 3,000 liters",
      "Beef: 1,500 liters, Tofu: 500 liters"
    ],
    answer: "Beef: 15,000 liters, Tofu: 302 liters"
  }
},
1014: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  lesson: "Soy production has a big environmental impact, but most of it is not used directly for human consumption. Around 77% of global soy is grown to feed livestock like cattle, pigs, and chickens. This demand drives deforestation, especially in the Amazon and Cerrado regions, releases large amounts of CO₂, and threatens biodiversity.",
  quiz: {
    question: "What percentage of global soy production is used to feed farm animals?",
    options: ["About 50%", "About 77%", "About 90%"],
    answer: "About 77%"
  }
},
1015: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  lesson: "In natural ecosystems, a balance between herbivores and carnivores is crucial. Today, human activities have heavily disrupted this balance. The global population of wild herbivores is around 60 million, and wild carnivores number about 3 million. In contrast, the global livestock population exceeds 70 billion, with cattle alone over 1.5 billion. This huge imbalance affects habitats, biodiversity, and the natural functioning of ecosystems.",
  quiz: {
    question: "Approximately how many wild herbivores are there compared to livestock worldwide?",
    options: [
      "Wild herbivores: 60 million, Livestock: 70 billion",
      "Wild herbivores: 600 million, Livestock: 7 billion",
      "Wild herbivores: 6 million, Livestock: 700 million"
    ],
    answer: "Wild herbivores: 60 million, Livestock: 70 billion"
  }
},
1016: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  lesson: "The biomass of large land mammals today is extremely unbalanced. Humans make up about 36% of the total mammalian biomass, livestock accounts for around 60%, and all wild mammals combined represent only about 4%. This shows how human activities, especially industrial agriculture, dominate the planet and leave very little room for wild species. Restoring balance requires reducing livestock demand, rewilding, and supporting sustainable land use.",
  quiz: {
    question: "What percentage of the total mammalian biomass is made up by humans and livestock combined?",
    options: [
      "About 50%",
      "About 96%",
      "About 70%"
    ],
    answer: "About 96%"
  }
},
1017: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  lesson: "Biodiversity has declined dramatically over the past 100 years. Populations of vertebrate species — mammals, birds, amphibians, reptiles, and fish — have dropped by an average of 70% since 1970, and many habitats have been lost or fragmented. Human activities such as deforestation, industrial agriculture, overfishing, and urban expansion are the main drivers. This decline weakens ecosystems, reduces nature's ability to regulate climate, and threatens food security and water quality. Protecting and restoring biodiversity is essential for a resilient planet.",
  quiz: {
    question: "By approximately how much have vertebrate populations declined since 1970?",
    options: ["About 30%", "About 50%", "About 70%"],
    answer: "About 70%"
  }
},
1018: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  lesson: "Since 1970, the Earth's average surface temperature has increased rapidly. By 2024, the global temperature was about 1.46°C higher than the pre-industrial baseline (1850–1900), making it the warmest year on record. If greenhouse gas emissions continue at the current rate, temperatures could rise by 4.5–5°C by 2100, causing severe climate impacts. There is also an 80% chance that at least one year between 2025 and 2029 will exceed 1.5°C above pre-industrial levels, a critical threshold set by the Paris Agreement. This highlights the urgent need for immediate action to reduce emissions and slow global warming.",
  quiz: {
    question: "By approximately how much has the Earth's average surface temperature increased since the pre-industrial era?",
    options: ["About 0.5°C", "About 1.5°C", "About 3°C"],
    answer: "About 1.5°C"
  }
},
1019: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  lesson: "Plastic fishing gear, known as 'ghost gear,' is a major contributor to marine plastic pollution. Every year, at least 640,000 tonnes of fishing gear enter the oceans, representing around 8–10% of all marine plastic pollution. Lost or abandoned gear continues to trap and kill marine life, harming 66% of marine mammal species, 50% of seabird species, and all seven species of sea turtles. Tackling ghost gear requires sustainable fishing practices, better gear management, and global cooperation to protect marine ecosystems.",
  quiz: {
    question: "Approximately what percentage of global marine plastic pollution comes from fishing gear?",
    options: ["About 5%", "About 8–10%", "About 25%"],
    answer: "About 8–10%"
  }
},
1020: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  lesson: "Our daily food choices have a huge impact on the environment. They influence deforestation, greenhouse gas emissions, water use, and ocean health. Choosing more plant-based meals, reducing food waste, and supporting sustainable products are some of the most effective ways to protect the planet. Simply put, the most powerful environmental tool you have is your plate.",
  quiz: {
    question: "What is considered your most powerful tool to protect the environment?",
    options: ["Your plate", "Your phone", "Your car"],
    answer: "Your plate"
  }
},
*/
  // --------------------------
  // Environment - Vegetarian (1021–1040)
  // --------------------------

1021: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "vegetarian",  
  title: {
    en: "The impact of global warming",
    es: "El impacto del calentamiento global",
    hu: "A globális felmelegedés hatása"
  },
  lesson: {
    en: "Global temperatures have already risen by about 1.2°C since pre-industrial times. This small increase has huge effects: glaciers in the Alps have lost over 60% of their ice since 1850, and extreme heat waves now occur five times more often than 50 years ago. If warming reaches 2°C, up to 99% of coral reefs could disappear — destroying vital ecosystems that support a quarter of all marine life.",
    es: "Las temperaturas globales ya han aumentado alrededor de 1,2°C desde la época preindustrial. Este pequeño aumento tiene enormes efectos: los glaciares de los Alpes han perdido más del 60% de su hielo desde 1850, y las olas de calor extremo ocurren ahora cinco veces más que hace 50 años. Si el calentamiento alcanza los 2°C, hasta el 99% de los arrecifes de coral podrían desaparecer, destruyendo ecosistemas vitales que sostienen una cuarta parte de toda la vida marina.",
    hu: "A globális hőmérséklet már körülbelül 1,2°C-kal emelkedett az ipari forradalom előtti időkhöz képest. Ez a kis növekedés hatalmas következményekkel jár: az Alpok gleccserei 1850 óta több mint 60%-át elveszítették a jégüknek, és az extrém hőhullámok most ötször gyakoribbak, mint 50 évvel ezelőtt. Ha a felmelegedés eléri a 2°C-ot, a korallzátonyok akár 99%-a eltűnhet — elpusztítva létfontosságú ökoszisztémákat, amelyek a tengeri élőlények negyedét támogatják."
  },
  quiz: {  
    question: {
      en: "What percentage of coral reefs could vanish if global warming reaches 2°C?",
      es: "¿Qué porcentaje de los arrecifes de coral podría desaparecer si el calentamiento global alcanza los 2°C?",
      hu: "A korallzátonyok hány százaléka tűnhet el, ha a globális felmelegedés eléri a 2°C-ot?"
    },  
    options: {
      en: [
        "25%",
        "60%",
        "Up to 99%"
      ],
      es: [
        "25%",
        "60%",
        "Hasta el 99%"
      ],
      hu: [
        "25%",
        "60%",
        "Akár 99%"
      ]
    },
    answer: 2
  }
},
1022: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "vegetarian",  
  title: {
    en: "Environmental impact of different foods",
    es: "Impacto ambiental de diferentes alimentos",
    hu: "Különböző ételek környezeti hatása"
  },
  lesson: {
    en: "Meat and dairy differ greatly in their environmental impact. Producing 1 kg of beef releases around 60 kg of CO₂, cheese around 23 kg, and milk about 3 kg. In contrast, tofu produces only 3 kg, and lentils less than 1 kg per kg of food. By choosing more plant-based options, you can cut your food-related emissions by up to 75%.",
    es: "La carne y los lácteos difieren mucho en su impacto ambiental. Producir 1 kg de carne de res emite alrededor de 60 kg de CO₂, el queso unos 23 kg y la leche unos 3 kg. En contraste, el tofu produce solo 3 kg y las lentejas menos de 1 kg por kg de alimento. Al elegir más opciones basadas en plantas, puedes reducir hasta un 75% tus emisiones relacionadas con la comida.",
    hu: "A hús és a tejtermékek környezeti hatása jelentősen különbözik. 1 kg marhahús előállítása körülbelül 60 kg CO₂-t bocsát ki, a sajt kb. 23 kg-ot, a tej kb. 3 kg-ot. Ezzel szemben a tofu csak 3 kg-ot, a lencse pedig kevesebb mint 1 kg-ot termel kilogrammonként. Ha több növényi alapú ételt választasz, akár 75%-kal csökkentheted az élelmiszerhez kapcsolódó kibocsátásodat."
  },
  quiz: {  
    question: {
      en: "Which of these foods causes the most CO₂ emissions per kilogram?",
      es: "¿Cuál de estos alimentos causa más emisiones de CO₂ por kilogramo?",
      hu: "Melyik étel okozza a legtöbb CO₂-kibocsátást kilogrammonként?"
    },  
    options: {
      en: [
        "Beef",
        "Cheese",
        "Tofu"
      ],
      es: [
        "Carne de res",
        "Queso",
        "Tofu"
      ],
      hu: [
        "Marhahús",
        "Sajt",
        "Tofu"
      ]
    },
    answer: 0
  }
},
1023: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "vegetarian",  
  title: {
    en: "Wildlife decline and climate change",
    es: "Declive de la vida silvestre y cambio climático",
    hu: "A vadvilág hanyatlása és a klímaváltozás"
  },
  lesson: {
    en: "Globally, the average size of monitored wildlife populations fell by about 73% between 1970 and 2020. In oceans near the United States, more than 70% of marine mammal populations — including whales, dolphins, and seals — are now classified as vulnerable due to warming waters, shrinking ice, and habitat loss. These pressures lead to starvation, longer migration routes, reduced breeding success, and push some species close to collapse.",
    es: "A nivel mundial, el tamaño promedio de las poblaciones de vida silvestre monitoreadas disminuyó alrededor de un 73% entre 1970 y 2020. En los océanos cercanos a Estados Unidos, más del 70% de las poblaciones de mamíferos marinos — como ballenas, delfines y focas — se consideran ahora vulnerables debido al calentamiento del agua, la pérdida de hielo y la destrucción del hábitat. Estas presiones provocan hambre, migraciones más largas, menor éxito reproductivo y acercan a algunas especies al colapso.",
    hu: "Világszerte a megfigyelt vadon élő állatpopulációk átlagos mérete körülbelül 73%-kal csökkent 1970 és 2020 között. Az Egyesült Államok körüli óceánokban a tengeri emlősök — például bálnák, delfinek és fókák — több mint 70%-át ma már sebezhetőnek minősítik a melegedő vizek, az olvadó jég és az élőhelyek elvesztése miatt. Ezek a hatások éhezéshez, hosszabb vándorlási útvonalakhoz, csökkenő szaporodási sikerhez vezetnek, és egyes fajokat az összeomlás szélére sodornak."
  },
  quiz: {  
    question: {
      en: "By roughly what percentage did monitored wildlife populations decline globally from 1970 to 2020?",
      es: "¿En qué porcentaje aproximado disminuyeron las poblaciones de vida silvestre monitoreadas a nivel mundial entre 1970 y 2020?",
      hu: "Körülbelül hány százalékkal csökkentek világszerte a megfigyelt vadon élő állatpopulációk 1970 és 2020 között?"
    },  
    options: {
      en: [
        "About 35%",
        "About 73%",
        "About 90%"
      ],
      es: [
        "Alrededor del 35%",
        "Alrededor del 73%",
        "Alrededor del 90%"
      ],
      hu: [
        "Körülbelül 35%",
        "Körülbelül 73%",
        "Körülbelül 90%"
      ]
    },
    answer: 1
  }
},
1024: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "vegetarian",  
  title: {
    en: "Land use of milk alternatives",
    es: "Uso del suelo de alternativas a la leche",
    hu: "Tejalternatívák földhasználata"
  },
  lesson: {
    en: "Producing cow’s milk requires large amounts of land, mostly to grow animal feed. About 9 square meters of land are needed each year to produce 1 liter of cow’s milk. In comparison, oat milk uses around 0.8 m², soy milk 0.7 m², and almond milk about 0.5 m². Switching to plant-based milk can reduce land use by over 85%, helping protect forests and wildlife habitats.",
    es: "La producción de leche de vaca requiere grandes cantidades de tierra, principalmente para cultivar alimento para los animales. Se necesitan aproximadamente 9 metros cuadrados de tierra al año para producir 1 litro de leche de vaca. En comparación, la leche de avena utiliza unos 0,8 m², la de soja 0,7 m² y la de almendra alrededor de 0,5 m². Cambiar a leches vegetales puede reducir el uso del suelo en más del 85%, ayudando a proteger los bosques y los hábitats naturales.",
    hu: "A tehéntej előállítása nagy mennyiségű földterületet igényel, főként az állati takarmány termesztése miatt. Évente körülbelül 9 négyzetméter föld szükséges 1 liter tehéntej előállításához. Ezzel szemben a zabtej kb. 0,8 m²-t, a szójatej 0,7 m²-t, a mandulatej pedig körülbelül 0,5 m²-t igényel. A növényi alapú tejek választása több mint 85%-kal csökkentheti a földhasználatot, hozzájárulva az erdők és élőhelyek védelméhez."
  },
  quiz: {  
    question: {
      en: "How much land is needed each year to produce 1 liter of cow’s milk?",
      es: "¿Cuánta tierra se necesita cada año para producir 1 litro de leche de vaca?",
      hu: "Mennyi földterület szükséges évente 1 liter tehéntej előállításához?"
    },  
    options: {
      en: [
        "9 m²",
        "2 m²",
        "0.7 m²"
      ],
      es: [
        "9 m²",
        "2 m²",
        "0,7 m²"
      ],
      hu: [
        "9 m²",
        "2 m²",
        "0,7 m²"
      ]
    },
    answer: 0
  }
},
1025: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "vegetarian",  
  title: {
    en: "Heating, energy, and small changes",
    es: "Calefacción, energía y pequeños cambios",
    hu: "Fűtés, energia és apró változtatások"
  },
  lesson: {
    en: "Heating homes consumes a large amount of energy, but even small adjustments make a difference. Lowering your thermostat by just 1°C can reduce heating energy use by about 7% and prevent roughly 300 kg of CO₂ emissions per year for an average household. It’s similar to turning off your heating for two weeks each winter — and you can stay comfortable by wearing warmer clothes.",
    es: "Calentar los hogares consume mucha energía, pero incluso pequeños ajustes marcan la diferencia. Bajar el termostato solo 1°C puede reducir el consumo de energía para calefacción en aproximadamente un 7% y evitar alrededor de 300 kg de emisiones de CO₂ al año en un hogar promedio. Es similar a apagar la calefacción durante dos semanas cada invierno — y puedes mantenerte cómodo usando ropa más abrigada.",
    hu: "Az otthonok fűtése sok energiát igényel, de még az apró változtatások is számítanak. A termosztát mindössze 1°C-kal történő csökkentése körülbelül 7%-kal mérsékelheti a fűtési energiafelhasználást, és évente nagyjából 300 kg CO₂-kibocsátást előzhet meg egy átlagos háztartásban. Ez olyan, mintha minden télen két hétre kikapcsolnád a fűtést — miközben egy melegebb pulóverrel továbbra is komfortos maradhatsz."
  },
  quiz: {  
    question: {
      en: "Lowering the thermostat by 1°C can reduce home heating energy use by roughly:",
      es: "Bajar el termostato 1°C puede reducir el consumo de energía para calefacción en aproximadamente:",
      hu: "A termosztát 1°C-kal való csökkentése körülbelül mennyivel csökkenti a fűtési energiafelhasználást?"
    },  
    options: {
      en: [
        "2%",
        "7%",
        "15%"
      ],
      es: [
        "2%",
        "7%",
        "15%"
      ],
      hu: [
        "2%",
        "7%",
        "15%"
      ]
    },
    answer: 1
  }
},


/*  
1026: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  lesson: "Producing 1 kg of beef emits about 60 kg of CO₂-equivalent and uses around 15,400 liters of water, making it one of the most resource-intensive foods. In comparison, producing 1 kg of eggs emits about 4.2 kg of CO₂-equivalent, uses roughly 3,300 liters of water, and requires about 7.9 m² of land. Meanwhile, lentils are one of the most environmentally efficient protein sources: producing 1 kg of lentils emits only about 0.9 kg of CO₂-equivalent, uses around 1.4 m² of land, and requires approximately 1,250 liters of irrigation water, which is much lower than animal products.",
  quiz: {
    question: "Which food has the lowest environmental impact per kilogram?",
    options: ["Eggs", "Lentils", "Beef"],
    answer: "Lentils"
  }
},
1027: { 
  goal: "Caring for the environment & fighting climate change", 
  diet: "vegetarian",
  lesson: "Transportation is a major source of greenhouse gas emissions. For example, a medium car emits about 120 grams of CO₂ per kilometer. Flying is even worse: a return flight from New York to London produces roughly 1.2 tons of CO₂ per passenger. In contrast, taking the train emits around 14 grams of CO₂ per kilometer. Choosing public transport, biking, walking, or even combining trips can drastically reduce your carbon footprint.",
  quiz: { 
    question: "Which mode of transport emits the least CO₂ per kilometer?", 
    options: ["Car", "Plane", "Train"], 
    answer: "Train" 
  } 
},
1028: { 
  goal: "Caring for the environment & fighting climate change", 
  diet: "vegetarian",
  lesson: "Around 77% of global cropland is used to produce meat and dairy, but it only provides about 18% of our calories. This means producing these foods emits 2–5 times more CO₂ than necessary compared to growing crops directly for humans.",
  quiz: { 
    question: "Producing meat and dairy emits how many times more CO₂ than necessary?", 
    options: ["1x", "2–5x", "10x"], 
    answer: "2–5x" 
  } 
},
1029: { 
  goal: "Caring for the environment & fighting climate change", 
  diet: "vegetarian",
  lesson: "Cheese is one of the most carbon-intensive foods. Producing 1 kilogram of cheese emits about 23 kg of CO₂, while 1 liter of cow’s milk emits only about 3 kg CO₂. This is because it takes around 10 liters of milk to make 1 kilogram of cheese. Compared to plant-based alternatives like tofu or nuts, cheese produces 5–10 times more emissions per kilogram.",
  quiz: { 
    question: "How many kilograms of CO₂ are emitted to produce 1 kg of cheese?", 
    options: ["3 kg", "10 kg", "23 kg"], 
    answer: "23 kg" 
  } 
},
1030: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  lesson: "Free-range and regenerative farming can cut emissions by up to 50% compared to conventional methods. However, these practices need 2–2.5 times more land to produce the same amount of food. Lower emissions come at the cost of higher land use.",
  quiz: {
    question: "Compared to conventional farming, how much more land do free-range products typically need?",
    options: ["1.5x", "2–2.5x", "3x"],
    answer: "2–2.5x"
  }
},
1031: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  lesson: "Producing 1 m² of cowhide leather emits around 65–110 kg of CO₂ and requires about 15,000 liters of water. Synthetic leather (PU) has a much smaller footprint — roughly 15–20 kg of CO₂ and 400–600 liters of water per m². Plant-based leathers made from mushrooms or pineapples are even cleaner, producing only 1–8 kg of CO₂ and using less than 100 liters of water per m². Choosing these materials helps save both water and emissions.",
  quiz: {
    question: "How many kilograms of CO₂ does 1 m² of cowhide leather emit?",
    options: ["10–20 kg", "30–50 kg", "65–110 kg"],
    answer: "65–110 kg"
  }
},
1032: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  lesson: "Producing 1 kg of cheese requires about 5,000 liters of water, mostly to grow the milk needed for production (around 10 liters of milk per kg of cheese). In comparison, 1 kg of lentils only requires 1,250 liters of water.",
  quiz: {
    question: "How much water is needed to produce 1 kg of cheese?",
    options: ["1,250 liters", "3,000 liters", "5,000 liters"],
    answer: "5,000 liters"
  }
},
1033: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  lesson: "Abandoned fishing gear, or 'ghost nets,' can float in the ocean for over 600 years, continuously trapping fish, turtles, seabirds, and other marine life. Each year, hundreds of thousands of tons of this gear enter the oceans, slowly breaking down into microplastics that pollute the food chain. Choosing plant-based foods reduces demand on industrial fishing, helping protect marine ecosystems and prevent plastic pollution at its source.",
  quiz: {
    question: "How long can abandoned fishing nets continue to trap marine animals in the ocean?",
    options: ["10–50 years", "100–200 years", "Over 600 years"],
    answer: "Over 600 years"
  }
},
1034: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  lesson: "Dairy milk is water-intensive: producing 1 liter of cow’s milk requires about 1,000 liters of water. In contrast, plant-based alternatives need far less — oat milk uses around 48 liters per liter, soy milk about 28 liters, and almond milk roughly 371 liter.",
  quiz: {
    question: "Which type of milk uses the most water per liter?",
    options: ["Cow’s milk", "Oat milk", "Soy milk"],
    answer: "Cow’s milk"
  }
},
1035: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  lesson: "Industrial fishing kills around 300,000 whales, dolphins, and porpoises every year through bycatch. Overfishing has caused populations of many large predatory fish, like tuna and sharks, to drop by over 90% in the last 50 years, disrupting the marine food chain. These losses force marine mammals to travel further for food, reduce their breeding success, and threaten entire ocean ecosystems.",
  quiz: {
    question: "Approximately how many large marine mammals are killed by bycatch each year?",
    options: ["50,000", "300,000", "1,000,000"],
    answer: "300,000"
  }
},1036: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  lesson: "Oceans play a crucial role in regulating the climate. They absorb about 25–30% of human CO₂ emissions and store more heat than the atmosphere, slowing global warming. Phytoplankton alone captures roughly 50 billion tons of CO₂ each year through photosynthesis. However, in some regions, phytoplankton populations have declined significantly — for example, in Narragansett Bay, USA, biomass decreased by about 49% between 1968 and 2019—reducing the ocean’s capacity to store carbon.",
  quiz: {
    question: "Approximately what percentage of human CO₂ emissions do oceans absorb?",
    options: ["10–15%", "25–30%", "50–60%"],
    answer: "25–30%"
  }
},
1037: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  lesson: "Producing 1 kg of eggs requires around 3,300 liters of water, mostly to grow the feed for the hens. In comparison, 1 kg of lentils only requires about 1,250 liters of water.",
  quiz: {
    question: "How much water is needed to produce 1 kg of eggs?",
    options: ["1,250 liters", "3,300 liters", "5,000 liters"],
    answer: "3,300 liters"
  }
},
1038: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  lesson: "Bottom trawling is a fishing method where large, heavy nets are dragged along the ocean floor to catch fish and shrimp. These nets scrape and crush everything in their path, including coral reefs, seagrass beds, and slow-growing bottom-dwelling species. About 15% of the world’s continental shelf is affected by bottom trawling. This destruction releases stored carbon from sediments, kills countless marine organisms, and permanently damages habitats, making it one of the most environmentally harmful fishing practices.",
  quiz: {
    question: "Why is bottom trawling considered highly destructive?",
    options: [
      "It selectively catches only large fish",
      "It scrapes the ocean floor, destroying habitats and releasing carbon",
      "It uses too much fuel"
    ],
    answer: "It scrapes the ocean floor, destroying habitats and releasing carbon"
  }
},
1039: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  lesson: "Every year, about 1.3 billion tons of food is wasted globally, producing roughly 8–10% of all human greenhouse gas emissions. That means the water, land, and energy used to grow this food is wasted too. Reducing food waste — by planning meals, storing food properly, and eating leftovers — can significantly cut your environmental impact.",
  quiz: {
    question: "Approximately what percentage of global greenhouse gas emissions comes from food waste?",
    options: ["3–5%", "8–10%", "15–20%"],
    answer: "8–10%"
  }
},
 1040: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  lesson: "Not all plant-based foods are equally sustainable. Highly processed vegetarian foods, like veggie burgers and packaged snacks, can have up to 4 times the CO₂ emissions of fresh vegetables due to production energy, packaging, and transport. Choosing minimally processed plant foods maximizes environmental benefits.",
  quiz: {
    question: "How much higher can emissions be for processed vegetarian foods compared to fresh vegetables?",
    options: ["About the same", "2x higher", "Up to 4x higher"],
    answer: "Up to 4x higher"
  }
},
  */
  // -------------------------------
  // Environment & Climate – Vegan
  // -------------------------------
  1041: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "vegan",  
  title: {
    en: "Water footprint of foods",
    es: "Huella hídrica de los alimentos",
    hu: "Az ételek vízlábnyoma"
  },
  lesson: {
    en: "While all foods require resources to grow, animal-based products—especially beef—are far more water-intensive. Producing just 1 kg of beef can require over 15,000 liters of water, while 1 kg of beans needs around 4,000 liters or less.",
    es: "Aunque todos los alimentos requieren recursos para crecer, los productos de origen animal, especialmente la carne de res, requieren mucho más agua. Producir solo 1 kg de carne de res puede necesitar más de 15.000 litros de agua, mientras que 1 kg de frijoles necesita alrededor de 4.000 litros o menos.",
    hu: "Bár minden étel termesztéséhez erőforrásokra van szükség, az állati eredetű termékek — különösen a marhahús — sokkal több vizet igényelnek. Csak 1 kg marhahús előállítása több mint 15 000 liter vizet igényelhet, míg 1 kg bab körülbelül 4 000 liter vagy kevesebb vizet."
  },
  quiz: {  
    question: {
      en: "Approximately how many liters of water are needed to produce 1 kg of beef?",
      es: "¿Aproximadamente cuántos litros de agua se necesitan para producir 1 kg de carne de res?",
      hu: "Körülbelül hány liter víz szükséges 1 kg marhahús előállításához?"
    },  
    options: {
      en: [
        "1,000 liters",
        "5,000 liters",
        "15,000 liters",
        "30,000 liters"
      ],
      es: [
        "1.000 litros",
        "5.000 litros",
        "15.000 litros",
        "30.000 litros"
      ],
      hu: [
        "1 000 liter",
        "5 000 liter",
        "15 000 liter",
        "30 000 liter"
      ]
    },
    answer: 2
  }
},
1042: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "vegan",  
  title: {
    en: "Veganism and the economy",
    es: "Veganismo y economía",
    hu: "A veganizmus és a gazdaság"
  },
  lesson: {
    en: "Some argue that veganism could hurt farmers’ livelihoods, but a plant-based transition can actually create new jobs in sustainable farming, food innovation, and eco-friendly industries. The wellbeing of people, animals, and the planet is more important than short-term economic concerns. This change won’t happen overnight — it’s a gradual shift that gives everyone time to adapt and build a fairer, more compassionate economy.",
    es: "Algunos argumentan que el veganismo podría afectar los medios de vida de los agricultores, pero una transición hacia lo vegetal puede crear nuevos empleos en agricultura sostenible, innovación alimentaria e industrias ecológicas. El bienestar de las personas, los animales y el planeta es más importante que las preocupaciones económicas a corto plazo. Este cambio no ocurrirá de la noche a la mañana; es un cambio gradual que da tiempo a todos para adaptarse y construir una economía más justa y compasiva.",
    hu: "Egyesek azt állítják, hogy a veganizmus károsíthatja a gazdálkodók megélhetését, de a növényi alapú átállás valójában új munkahelyeket teremthet a fenntartható mezőgazdaságban, élelmiszer-innovációban és környezetbarát iparágakban. Az emberek, az állatok és a bolygó jóléte fontosabb, mint a rövid távú gazdasági aggályok. Ez a változás nem egyik napról a másikra történik — fokozatos átmenet, amely időt ad mindenkinek az alkalmazkodásra és egy igazságosabb, együttérzőbb gazdaság kiépítésére."
  },
  quiz: {  
    question: {
      en: "Why shouldn’t we worry that veganism will suddenly harm the economy?",
      es: "¿Por qué no debemos preocuparnos de que el veganismo dañe repentinamente la economía?",
      hu: "Miért ne aggódjunk amiatt, hogy a veganizmus hirtelen károsítaná a gazdaságot?"
    },  
    options: {
      en: [
        "Because the transition will be slow and allow people to adapt",
        "Because farmers will stop working immediately",
        "Because veganism eliminates all jobs",
        "Because no one needs to eat anymore"
      ],
      es: [
        "Porque la transición será lenta y permitirá que las personas se adapten",
        "Porque los agricultores dejarán de trabajar de inmediato",
        "Porque el veganismo elimina todos los empleos",
        "Porque nadie necesitará comer más"
      ],
      hu: [
        "Mert az átmenet lassú lesz, és lehetőséget ad az alkalmazkodásra",
        "Mert a gazdák azonnal abbahagyják a munkát",
        "Mert a veganizmus megszüntet minden állást",
        "Mert senkinek sem kell többé ennie"
      ]
    },
    answer: 0
  }
},
1043: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "vegan",  
  title: {
    en: "Animal agriculture and climate impact",
    es: "La ganadería y su impacto climático",
    hu: "Az állattenyésztés klímahatása"
  },
  lesson: {
    en: "Many people think that cars and energy production are the main drivers of climate change, but animal agriculture is just as significant. Raising animals for meat and dairy produces around 14.5% of global greenhouse gas emissions — roughly the same amount as all transportation combined. In addition, livestock farming drives deforestation, excessive water use, and large-scale environmental damage.",
    es: "Muchas personas creen que los automóviles y la producción de energía son los principales responsables del cambio climático, pero la ganadería tiene un impacto similar. La cría de animales para carne y lácteos genera alrededor del 14,5% de las emisiones globales de gases de efecto invernadero, aproximadamente lo mismo que todo el sector del transporte combinado. Además, la ganadería impulsa la deforestación, el uso excesivo de agua y graves daños ambientales.",
    hu: "Sokan úgy gondolják, hogy az autók és az energiatermelés a klímaváltozás fő okozói, pedig az állattenyésztés hasonló mértékben járul hozzá. A hús- és tejtermeléshez kapcsolódó állattartás a globális üvegházhatású gázkibocsátás körülbelül 14,5%-áért felelős — nagyjából annyiért, mint az összes közlekedés együttvéve. Emellett az állattenyésztés erdőirtást, túlzott vízhasználatot és jelentős környezeti károkat okoz."
  },
  quiz: {  
    question: {
      en: "Animal agriculture produces roughly the same greenhouse gas emissions as which sector?",
      es: "¿La ganadería produce aproximadamente las mismas emisiones de gases de efecto invernadero que qué sector?",
      hu: "Az állattenyésztés nagyjából melyik szektor kibocsátásával egyezik meg?"
    },  
    options: {
      en: [
        "Industry",
        "Transport",
        "Energy production",
        "Buildings"
      ],
      es: [
        "La industria",
        "El transporte",
        "La producción de energía",
        "Los edificios"
      ],
      hu: [
        "Az ipar",
        "A közlekedés",
        "Az energiatermelés",
        "Az épületek"
      ]
    },
    answer: 1
  }
},
1044: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "vegan",  
  title: {
    en: "Limits of regenerative animal farming",
    es: "Los límites de la ganadería regenerativa",
    hu: "A regeneratív állattartás korlátai"
  },
  lesson: {
    en: "Some people claim that regenerative farming can make meat sustainable by capturing carbon in soils. While these practices may offer local benefits, regenerative animal farming requires far more land than is available if everyone continues to eat a meat-heavy diet. Even if all farms used regenerative methods, there simply wouldn’t be enough land on Earth to feed the global population at current levels of meat consumption.",
    es: "Algunas personas afirman que la ganadería regenerativa puede hacer que la carne sea sostenible al capturar carbono en el suelo. Aunque estas prácticas pueden ofrecer beneficios locales, la ganadería regenerativa requiere mucha más tierra de la que hay disponible si todo el mundo mantiene una dieta rica en carne. Incluso si todas las granjas fueran regenerativas, no habría suficiente tierra en el planeta para alimentar a la población mundial con el consumo actual de carne.",
    hu: "Egyesek szerint a regeneratív gazdálkodás fenntarthatóvá teheti a húsfogyasztást a talaj szénmegkötésével. Bár ezek a módszerek helyi szinten előnyösek lehetnek, a regeneratív állattartás sokkal több földterületet igényel, mint amennyi rendelkezésre állna, ha mindenki továbbra is húsban gazdag étrendet követne. Még ha minden gazdaság regeneratív lenne is, nem lenne elegendő föld a Földön a jelenlegi húsfogyasztási szint fenntartásához."
  },
  quiz: {  
    question: {
      en: "Why can’t regenerative farming fully make meat production sustainable for everyone?",
      es: "¿Por qué la ganadería regenerativa no puede hacer sostenible la producción de carne para todos?",
      hu: "Miért nem teheti a regeneratív gazdálkodás teljes mértékben fenntarthatóvá a húsfogyasztást mindenki számára?"
    },  
    options: {
      en: [
        "Because it doesn’t capture any carbon",
        "Because meat requires far more land than is available for the global diet",
        "Because plants can’t grow on regenerative farms",
        "Because it eliminates agricultural jobs"
      ],
      es: [
        "Porque no captura carbono",
        "Porque la carne requiere mucha más tierra de la disponible para la dieta global",
        "Porque las plantas no pueden crecer en granjas regenerativas",
        "Porque elimina empleos agrícolas"
      ],
      hu: [
        "Mert nem köt meg szenet",
        "Mert a hús jóval több földet igényel, mint amennyi a globális étrendhez rendelkezésre áll",
        "Mert a növények nem tudnak regeneratív gazdaságokban nőni",
        "Mert megszünteti a mezőgazdasági munkahelyeket"
      ]
    },
    answer: 1
  }
},
1045: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "vegan",  
  title: {
    en: "Why biodiversity matters",
    es: "Por qué la biodiversidad es importante",
    hu: "Miért fontos a biodiverzitás"
  },
  lesson: {
    en: "Biodiversity is essential for human survival. Healthy and diverse ecosystems provide food, clean water, fertile soil, pollination, and help regulate the climate. When species disappear, ecosystems become less resilient and the natural services humans depend on for health and survival are weakened.",
    es: "La biodiversidad es esencial para la supervivencia humana. Los ecosistemas sanos y diversos proporcionan alimentos, agua limpia, suelos fértiles, polinización y ayudan a regular el clima. Cuando las especies desaparecen, los ecosistemas se vuelven menos resilientes y los servicios naturales de los que dependen las personas para su salud y supervivencia se debilitan.",
    hu: "A biodiverzitás alapvető fontosságú az emberi túlélés szempontjából. Az egészséges és sokféle ökoszisztémák élelmiszert, tiszta vizet, termékeny talajt, beporzást biztosítanak, és segítenek a klíma szabályozásában. A fajok eltűnésével az ökoszisztémák ellenálló képessége csökken, és meggyengülnek azok a természeti szolgáltatások, amelyekre az emberek az egészségük és túlélésük érdekében támaszkodnak."
  },
  quiz: {  
    question: {
      en: "Why is biodiversity important for humans?",
      es: "¿Por qué es importante la biodiversidad para los seres humanos?",
      hu: "Miért fontos a biodiverzitás az emberek számára?"
    },  
    options: {
      en: [
        "It is just nice to look at",
        "It supports food, water, and climate regulation",
        "It increases traffic"
      ],
      es: [
        "Solo es agradable de ver",
        "Apoya la alimentación, el agua y la regulación del clima",
        "Aumenta el tráfico"
      ],
      hu: [
        "Csak szép látvány",
        "Biztosítja az élelmet, a vizet és a klímaszabályozást",
        "Növeli a forgalmat"
      ]
    },
    answer: 1
  }
},

/*  
1046: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  lesson: "Around 46% of ocean plastic comes from abandoned or lost fishing gear, like nets and lines. These “ghost nets” entangle fish, turtles, and marine mammals, causing injuries and death, and have long-lasting effects on marine ecosystems.",
  quiz: {
    question: "What percentage of ocean plastic comes from fishing gear?",
    options: ["10%", "75%", "Around 46%"],
    answer: "Around 46%"
  }
},
1047: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  lesson: "If humanity shifted to a mostly plant-based diet, we could potentially free up around 70% of agricultural land currently used for livestock and feed crops. Returning this land to nature could restore habitats, greatly increase biodiversity, and allow wild species to recover in numbers and variety.",
  quiz: {
    question: "What percentage of agricultural land could be freed by adopting a plant-based diet?",
    options: ["Around 70%", "10%", "50%"],
    answer: "Around 70%"
  }
},
1048: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  lesson: "Bottom trawling is a fishing method where large, heavy nets are dragged along the ocean floor to catch fish and shrimp. These nets scrape and crush everything in their path, including coral reefs, seagrass beds, and slow-growing bottom-dwelling species. About 15% of the world’s continental shelf is affected by bottom trawling. This destruction releases stored carbon from sediments, kills countless marine organisms, and permanently damages habitats, making it one of the most environmentally harmful fishing practices.",
  quiz: {
    question: "Why is bottom trawling considered highly destructive?",
    options: [
      "It selectively catches only large fish",
      "It scrapes the ocean floor, destroying habitats and releasing carbon",
      "It uses too much fuel"
    ],
    answer: "It scrapes the ocean floor, destroying habitats and releasing carbon"
  }
},
1049: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  lesson: "Oceans act as a major carbon sink, absorbing about 25–30% of human CO₂ emissions. Phytoplankton alone captures roughly 50 billion tons of CO₂ each year through photosynthesis. However, in some regions, phytoplankton populations have declined significantly — for example, in Narragansett Bay, USA, biomass decreased by about 49% between 1968 and 2019 — reducing the ocean’s ability to store carbon and harming marine ecosystems.",
  quiz: {
    question: "How does declining ocean biodiversity affect CO₂ absorption?",
    options: ["Increases carbon storage", "Has no effect","Reduces the ocean's ability to store carbon"],
    answer: "Reduces the ocean's ability to store carbon"
  }
},
1050: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  lesson: "Agriculture is responsible for nearly 25% of global greenhouse gas emissions. Most of these emissions come from livestock, including methane from cows and nitrous oxide from fertilized soils. Reducing animal product consumption directly lowers emissions.",
  quiz: {
    question: "What percentage of global greenhouse gas emissions comes from agriculture?",
    options: ["10%", "25%", "50%"],
    answer: "25%"
  }
},
1051: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  lesson: "Deforestation is largely driven by the need for pasture and feed crops for animals. Each year, millions of hectares of forests are cleared, releasing stored carbon into the atmosphere and accelerating climate change.",
  quiz: {
    question: "What is a primary driver of deforestation?",
    options: ["Urban expansion only", "Natural causes", "Pasture and feed crops for animals"],
    answer: "Pasture and feed crops for animals"
  }
},
1052: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  lesson: "Animal agriculture produces massive amounts of manure, which can run off into rivers and oceans. This nutrient pollution causes algal blooms, oxygen-depleted dead zones, and damages aquatic ecosystems. For example, the Gulf of Mexico dead zone covers up to 22,000 km² in some years due to agricultural runoff.",
  quiz: {
    question: "What is one major effect of manure runoff from livestock?",
    options: ["Increases fish populations", "Causes algal blooms and dead zones", "Purifies rivers"],
    answer: "Causes algal blooms and dead zones"
  }
},
1053: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  lesson: "Producing 1 kg of beef requires about 25 times more land than producing 1 kg of lentils. Animal agriculture uses around 77% of global farmland but provides only 18% of calories, showing extreme land inefficiency. Shifting to a plant-based diet could free up billions of hectares for forests and wildlife.",
  quiz: {
    question: "Why is animal agriculture considered land-inefficient?",
    options: ["It produces fewer calories per hectare than plants", "Animals need no land", "It grows more food than needed"],
    answer: "It produces fewer calories per hectare than plants"
  }
},
1054: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  lesson: "Overfishing and fish farming harm oceans. Wild-caught fish often involve bycatch — accidentally killing turtles, dolphins, and seabirds. Bottom trawling destroys seafloor habitats, while intensive fish farms can pollute water with waste and chemicals. These practices reduce biodiversity and compromise ocean health.",
  quiz: {
    question: "What is a major problem with overfishing and fish farming?",
    options: ["They improve ocean biodiversity", "They cause bycatch and habitat destruction", "They reduce greenhouse gases"],
    answer: "They cause bycatch and habitat destruction"
  }
},
1055: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  lesson: "Greenhouse gas emissions vary greatly between foods. Producing 1 kg of beef emits around 60 kg CO₂-eq, 1 kg of eggs emits ~4.2 kg CO₂-eq, while 1 kg of lentils emits only ~0.9 kg CO₂-eq. Plant-based proteins have a much lower environmental footprint, making diet choices a powerful way to reduce climate impact.",
  quiz: {
    question: "Which food has the lowest greenhouse gas emissions per kilogram?",
    options: ["Beef", "Eggs", "Lentils"],
    answer: "Lentils"
  }
},
1056: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  lesson: "Abandoned or lost fishing gear, also called “ghost gear,” is a major source of ocean plastic. About 46% of ocean plastic comes from fishing nets, lines, and traps. This debris entangles marine life, damages coral reefs, and persists in the environment for decades, harming biodiversity and marine ecosystems.",
  quiz: {
    question: "What percentage of ocean plastic comes from abandoned or lost fishing gear?",
    options: ["10%", "46%", "75%"],
    answer: "46%"
  }
},
1057: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  lesson: "By switching to a vegan diet, your land use can be reduced by about 76% compared to an average omnivorous diet. This is because animal agriculture uses most of the world’s farmland while providing fewer calories. The land you save could be returned to forests and wildlife, restoring ecosystems.",
  quiz: {
    question: "How much can your land use be reduced by going vegan?",
    options: ["10%", "50%", "76%", "90%"],
    answer: "76%"
  }
},
1058: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  lesson: "Adopting a plant-based diet can cut your water footprint by roughly 50% compared to a typical omnivorous diet. Producing plant-based foods requires far less irrigation water than producing meat and dairy, helping protect freshwater resources worldwide.",
  quiz: {
    question: "Approximately how much can your water use decrease by eating a vegan diet?",
    options: ["10%", "25%", "50%", "75%"],
    answer: "50%"
  }
},
1059: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  lesson: "Switching to a vegan diet can lower your diet-related greenhouse gas emissions by around 50–55%. For example, producing 1 kg of beef emits ~60 kg CO₂-eq, while 1 kg of lentils emits only ~0.9 kg. Over a year, this reduction is equivalent to eliminating several long car trips or short flights.",
  quiz: {
    question: "How much can your greenhouse gas emissions be reduced by adopting a vegan diet?",
    options: ["10%", "25%", "50–55%", "80%"],
    answer: "50–55%"
  }
},
1060: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  lesson: "Eating a plant-based diet reduces energy use and pollution from animal farming. Overall, your diet-related energy footprint can drop by roughly 30–40%, because producing plants requires less fuel for feed, transport, and housing animals, and produces less water pollution from manure and fertilizers.",
  quiz: {
    question: "By how much can your diet-related energy footprint decrease by going vegan?",
    options: ["10–15%", "20–25%", "30–40%", "50–60%"],
    answer: "30–40%"
  }
},

// continue

*/






// --------------------------
// Healthy living & wellness – Omnivore
// --------------------------

2001: {  
  goal: "Healthy living & wellness",  
  diet: "omnivore",  
  title: {
    en: "Health without meat or dairy",
    es: "Salud sin carne ni lácteos",
    hu: "Egészség hús és tejtermék nélkül"
  },
  lesson: {
    en: "Is it possible to be healthy without meat or dairy? Absolutely! In fact, plants are naturally rich in essential nutrients, high in fiber, and free from harmful saturated fats found in many animal products. A balanced plant-based diet can support strong muscles, a healthy heart, and long-term wellness.",
    es: "¿Es posible estar saludable sin carne ni lácteos? ¡Absolutamente! De hecho, las plantas son naturalmente ricas en nutrientes esenciales, altas en fibra y libres de las grasas saturadas dañinas que se encuentran en muchos productos animales. Una dieta equilibrada basada en plantas puede apoyar músculos fuertes, un corazón saludable y el bienestar a largo plazo.",
    hu: "Lehetséges egészségesnek lenni hús vagy tejtermék nélkül? Teljes mértékben! A növények természetesen gazdagok alapvető tápanyagokban, magas a rosttartalmuk, és mentesek a sok állati termékben található káros telített zsíroktól. A kiegyensúlyozott növényi alapú étrend erős izmokat, egészséges szívet és hosszú távú jó közérzetet támogathat."
  },
  quiz: {  
    question: {
      en: "Which of the following is a key benefit of plant-based foods?",
      es: "¿Cuál de los siguientes es un beneficio clave de los alimentos de origen vegetal?",
      hu: "Mi a növényi alapú ételek egyik fő előnye?"
    },  
    options: {
      en: [
        "They are high in fiber and rich in nutrients",
        "They contain a lot of cholesterol",
        "They lack vitamins and minerals"
      ],
      es: [
        "Son ricos en fibra y nutrientes",
        "Contienen mucho colesterol",
        "Carecen de vitaminas y minerales"
      ],
      hu: [
        "Magas a rosttartalmuk és gazdagok tápanyagokban",
        "Sok koleszterint tartalmaznak",
        "Hiányoznak belőlük a vitaminok és ásványi anyagok"
      ]
    },
    answer: 0
  }
},

2002: {  
  goal: "Healthy living & wellness",  
  diet: "omnivore",  
  title: {
    en: "Sources of plant-based protein",
    es: "Fuentes de proteína vegetal",
    hu: "A növényi fehérje forrásai"
  },
  lesson: {
    en: "Where do plant-based proteins come from? Protein is found in a wide variety of plant foods! Legumes like lentils, chickpeas, and beans are excellent sources, as well as tofu, tempeh, seitan, quinoa, nuts, and seeds. Combining different plant proteins throughout the day provides all the essential amino acids your body needs for muscle growth and repair.",
    es: "¿De dónde provienen las proteínas vegetales? ¡La proteína se encuentra en una gran variedad de alimentos vegetales! Las legumbres como las lentejas, los garbanzos y los frijoles son excelentes fuentes, así como el tofu, el tempeh, el seitán, la quinoa, los frutos secos y las semillas. Combinar diferentes proteínas vegetales a lo largo del día proporciona todos los aminoácidos esenciales que tu cuerpo necesita para el crecimiento y reparación muscular.",
    hu: "Honnan származnak a növényi fehérjék? A fehérje számos növényi ételben megtalálható! A hüvelyesek, mint a lencse, csicseriborsó és bab, kiváló források, ahogyan a tofu, tempeh, seitan, quinoa, diófélék és magvak is. Ha a nap folyamán különböző növényi fehérjéket kombinálsz, biztosítod az összes esszenciális aminosavat, amelyre a testednek szüksége van az izmok növekedéséhez és regenerációjához."
  },
  quiz: {  
    question: {
      en: "Which of the following foods is rich in plant-based protein?",
      es: "¿Cuál de estos alimentos es rico en proteína vegetal?",
      hu: "Melyik étel gazdag növényi fehérjében?"
    },  
    options: {
      en: [
        "Apples",
        "Lentils",
        "Cucumbers"
      ],
      es: [
        "Manzanas",
        "Lentejas",
        "Pepinos"
      ],
      hu: [
        "Alma",
        "Lencse",
        "Uborka"
      ]
    },
    answer: 1
  }
},
2003: {  
  goal: "Healthy living & wellness",  
  diet: "omnivore",  
  title: {
    en: "Iron from plant foods",
    es: "El hierro en los alimentos vegetales",
    hu: "Vas növényi ételekből"
  },
  lesson: {
    en: "Can you get enough iron from plants? Absolutely! Many plant foods are rich in iron, including lentils, chickpeas, tofu, spinach, kale, pumpkin seeds, and quinoa. To improve iron absorption, it’s helpful to pair these foods with vitamin C sources such as oranges, bell peppers, or strawberries. This combination supports healthy blood flow and keeps energy levels high.",
    es: "¿Se puede obtener suficiente hierro de las plantas? ¡Por supuesto! Muchos alimentos vegetales son ricos en hierro, como las lentejas, los garbanzos, el tofu, la espinaca, la col rizada, las semillas de calabaza y la quinoa. Para mejorar la absorción del hierro, es útil combinar estos alimentos con fuentes de vitamina C como naranjas, pimientos o fresas. Esta combinación apoya una circulación saludable y mantiene altos los niveles de energía.",
    hu: "Lehetséges elegendő vashoz jutni növényi ételekből? Természetesen! Számos növényi étel gazdag vasban, például a lencse, csicseriborsó, tofu, spenót, kelkáposzta, tökmag és a quinoa. A vas felszívódását segíti, ha ezeket C-vitaminban gazdag ételekkel, például narancssal, paprikával vagy eperrel együtt fogyasztjuk. Ez a kombináció támogatja az egészséges vérkeringést és az energiaszintet."
  },
  quiz: {  
    question: {
      en: "What helps your body absorb iron from plant-based foods?",
      es: "¿Qué ayuda a tu cuerpo a absorber el hierro de los alimentos vegetales?",
      hu: "Mi segíti a vas felszívódását a növényi ételekből?"
    },  
    options: {
      en: [
        "Calcium",
        "Fiber",
        "Vitamin C"
      ],
      es: [
        "Calcio",
        "Fibra",
        "Vitamina C"
      ],
      hu: [
        "Kalcium",
        "Rost",
        "C-vitamin"
      ]
    },
    answer: 2
  }
},
2004: {  
  goal: "Healthy living & wellness",  
  diet: "omnivore",  
  title: {
    en: "Cholesterol and plant-based eating",
    es: "El colesterol y la alimentación vegetal",
    hu: "Koleszterin és növényi étrend"
  },
  lesson: {
    en: "A plant-based diet often lowers LDL (‘bad’) cholesterol because plant foods contain no cholesterol and are generally low in saturated fats. At the same time, they are rich in fiber, which helps remove excess cholesterol from the body. Healthy fats from nuts, seeds, and avocados can support HDL (‘good’) cholesterol, contributing to a balanced and heart-friendly cholesterol profile.",
    es: "Una dieta basada en plantas suele reducir el colesterol LDL (‘malo’) porque los alimentos vegetales no contienen colesterol y son bajos en grasas saturadas. Además, son ricos en fibra, lo que ayuda a eliminar el exceso de colesterol del cuerpo. Las grasas saludables de frutos secos, semillas y aguacate pueden apoyar el colesterol HDL (‘bueno’), contribuyendo a un perfil lipídico equilibrado y saludable para el corazón.",
    hu: "A növényi alapú étrend gyakran csökkenti az LDL („rossz”) koleszterinszintet, mivel a növényi ételek nem tartalmaznak koleszterint és általában alacsony a telített zsírtartalmuk. Emellett gazdagok rostban, ami segít eltávolítani a felesleges koleszterint a szervezetből. A diófélékből, magvakból és avokádóból származó egészséges zsírok támogatják a HDL („jó”) koleszterint, elősegítve a szívbarát egyensúlyt."
  },
  quiz: {  
    question: {
      en: "Why does a plant-based diet often lower LDL (‘bad’) cholesterol?",
      es: "¿Por qué una dieta vegetal suele reducir el colesterol LDL (‘malo’)?",
      hu: "Miért csökkenti gyakran a növényi étrend az LDL („rossz”) koleszterint?"
    },  
    options: {
      en: [
        "Plant foods contain no cholesterol and less saturated fat",
        "Plant foods increase cholesterol production",
        "Plant foods are high in trans fats"
      ],
      es: [
        "Los alimentos vegetales no contienen colesterol y tienen menos grasas saturadas",
        "Los alimentos vegetales aumentan la producción de colesterol",
        "Los alimentos vegetales son ricos en grasas trans"
      ],
      hu: [
        "A növényi ételek nem tartalmaznak koleszterint és kevesebb telített zsírt tartalmaznak",
        "A növényi ételek növelik a koleszterintermelést",
        "A növényi ételek sok transzzsírt tartalmaznak"
      ]
    },
    answer: 0
  }
},
2005: {  
  goal: "Healthy living & wellness",  
  diet: "omnivore",  
  title: {
    en: "Chronic diseases and lifestyle choices",
    es: "Enfermedades crónicas y estilo de vida",
    hu: "Krónikus betegségek és életmód"
  },
  lesson: {
    en: "Around 70% of global deaths are caused by chronic diseases such as heart disease, stroke, diabetes, and certain cancers. These conditions are strongly linked to lifestyle factors including diet, physical inactivity, smoking, and stress. The encouraging news is that up to 80% of these cases can be prevented through healthier habits — eating more whole plant foods, staying active, avoiding tobacco, and managing stress. Small daily choices can lead to longer, healthier lives.",
    es: "Alrededor del 70% de las muertes a nivel mundial son causadas por enfermedades crónicas como las enfermedades cardíacas, los accidentes cerebrovasculares, la diabetes y ciertos tipos de cáncer. Estas condiciones están estrechamente relacionadas con factores del estilo de vida como la alimentación, la inactividad física, el tabaquismo y el estrés. La buena noticia es que hasta el 80% de estos casos pueden prevenirse mediante hábitos más saludables — comer más alimentos vegetales integrales, mantenerse activo, evitar el tabaco y gestionar el estrés. Las pequeñas decisiones diarias pueden conducir a una vida más larga y saludable.",
    hu: "A globális halálesetek körülbelül 70%-át krónikus betegségek okozzák, mint a szívbetegségek, a stroke, a cukorbetegség és bizonyos daganatok. Ezek szorosan összefüggnek az életmódbeli tényezőkkel, például az étrenddel, a mozgáshiánnyal, a dohányzással és a stresszel. A biztató hír, hogy ezek akár 80%-a megelőzhető egészségesebb szokásokkal — több teljes értékű növényi étel fogyasztásával, rendszeres mozgással, a dohányzás kerülésével és a stressz kezelésével. A mindennapi apró döntések hosszabb és egészségesebb élethez vezetnek."
  },
  quiz: {  
    question: {
      en: "What percentage of global deaths are caused by chronic diseases?",
      es: "¿Qué porcentaje de las muertes globales son causadas por enfermedades crónicas?",
      hu: "A globális halálesetek hány százalékát okozzák krónikus betegségek?"
    },  
    options: {
      en: [
        "About 70%",
        "About 30%",
        "About 10%"
      ],
      es: [
        "Alrededor del 70%",
        "Alrededor del 30%",
        "Alrededor del 10%"
      ],
      hu: [
        "Körülbelül 70%",
        "Körülbelül 30%",
        "Körülbelül 10%"
      ]
    },
    answer: 0
  }
},


/*  
2006: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  lesson: "Will you gain weight because of carbohydrates or become malnourished from a lack of calories without meat? Neither! Whole plant foods provide balanced energy without the excess calories or unhealthy fats found in many processed animal products. Carbohydrates from fruits, grains, and vegetables fuel your brain and muscles efficiently. When you eat a variety of whole foods, it’s easy to meet your energy needs and maintain a healthy weight.",
  quiz: {
    question: "What do healthy carbohydrates mainly provide for your body?",
    options: ["Excess fat storage", "Energy for the brain and muscles", "No nutritional value"],
    answer: "Energy for the brain and muscles"
  }
},
2007: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  lesson: "How does plant-based protein compare to meat? Let’s compare textured soy (100g dry) to chicken breast (100g raw):\n\n- Calories: Textured soy ~336 kcal | Chicken breast ~165 kcal\n- Protein: Textured soy ~52g | Chicken breast ~31g\n- Calcium: Textured soy ~350mg | Chicken breast ~13mg\n- Iron: Textured soy ~15mg | Chicken breast ~1mg\n- Fat: Textured soy ~0.5g | Chicken breast ~3.6g\n\nTextured soy is very high in protein, rich in calcium and iron, and low in fat. Chicken provides protein with moderate fat but very little calcium or iron.",
  quiz: {
    question: "Which protein source is richer in calcium and iron?",
    options: ["Chicken breast", "Textured soy", "Both are the same"],
    answer: "Textured soy"
  }
},
2008: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  lesson: "What causes plaques and high blood pressure? Plaques form when cholesterol and saturated fats build up inside your arteries, narrowing them and making it harder for blood to flow. This can lead to high blood pressure and heart disease over time. Diets rich in fruits, vegetables, whole grains, and legumes help prevent plaque buildup thanks to their fiber, antioxidants, and lack of cholesterol. A plant-forward diet keeps your arteries flexible and your heart strong.",
  quiz: {
    question: "What mainly causes plaque buildup in the arteries?",
    options: ["Fiber and antioxidants", "Water and vitamins", "Cholesterol and saturated fats"],
    answer: "Cholesterol and saturated fats"
  }
},
2009: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  lesson: "How can you keep your heart healthy? Your heart thrives on movement and nourishment from whole plant foods. Fruits, vegetables, nuts, seeds, and whole grains support strong circulation and reduce inflammation. Fiber helps keep your cholesterol low, while antioxidants protect your arteries from damage. Combined with regular exercise and good sleep, a balanced vegan or plant-forward diet keeps your heart vibrant and resilient.",
  quiz: {
    question: "Which habit best supports a healthy heart?",
    options: [
      "Eating whole plant foods and exercising regularly",
      "Eating processed meats and avoiding physical activity",
      "Consuming more salt and sugar"
    ],
    answer: "Eating whole plant foods and exercising regularly"
  }
},
2010: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  lesson: "How does a plant-based diet affect your digestion and gut health? Plants are full of fiber, which feeds the beneficial bacteria living in your gut — your microbiome. A diverse, fiber-rich diet helps these bacteria thrive, improving digestion, nutrient absorption, and even your mood and immunity. In contrast, diets high in animal products and low in fiber can lead to inflammation and digestive problems.",
  quiz: {
    question: "What helps beneficial gut bacteria thrive?",
    options: [ "High-fat animal products", "Refined sugar", "Fiber from plant foods"],
    answer: "Fiber from plant foods"
  }
},
2011: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  lesson: "Are dairy products actually healthier than meat? Not necessarily. While dairy provides protein and calcium, it also contains saturated fats and cholesterol, similar to many meats. Plant-based alternatives like fortified oat, soy, or almond milk can provide calcium and vitamin D without the harmful saturated fats. Choosing plant-forward options reduces your risk of heart disease and supports overall wellness, while still giving you essential nutrients.",
  quiz: {
    question: "Why might plant-based dairy alternatives be considered healthier than regular dairy?",
    options: [
      "They provide essential nutrients without harmful saturated fats",
      "They contain more cholesterol",
      "They are higher in saturated fat"
    ],
    answer: "They provide essential nutrients without harmful saturated fats"
  }
},
2012: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  lesson: "What are Blue Zones and what can we learn from them? Blue Zones are regions around the world where people live significantly longer and healthier lives, such as Okinawa (Japan), Sardinia (Italy), and Nicoya (Costa Rica). A common factor in these populations is a diet rich in plant foods — beans, vegetables, fruits, whole grains, nuts — with limited meat and dairy. Their eating habits, combined with daily movement, strong social connections, and purposeful living, contribute to their longevity and reduced risk of chronic diseases.",
  quiz: {
    question: "What is a common feature of diets in Blue Zones?",
    options: [
      "High amounts of red meat and processed foods",
      "Mostly plant-based foods with limited meat and dairy",
      "Low in vegetables and fruits"
    ],
    answer: "Mostly plant-based foods with limited meat and dairy"
  }
},
2013: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  lesson: "How can you get enough calcium without dairy? Many plant foods are excellent sources of calcium, including tofu, tempeh, almonds, chia seeds, sesame seeds, broccoli, and leafy greens like kale and bok choy. Fortified plant milks and juices also help meet your daily needs. Eating a variety of these foods, combined with regular exercise like walking or strength training, keeps your bones strong and supports long-term health.",
  quiz: {
    question: "Which of the following plant foods is rich in calcium?",
    options: ["Tofu", "Potato", "Apple"],
    answer: "Tofu"
  }
},
2014: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  lesson: "Why is vitamin B12 important and how can you get it on a plant-forward diet? Vitamin B12 is essential for healthy nerves, red blood cells, and energy levels. It is naturally produced by bacteria, not by plants or animals. In modern farming, animals are often supplemented with B12 because natural bacterial sources are limited, so meat and dairy aren’t guaranteed to provide enough either. Plant-based eaters can reliably get B12 from fortified foods like plant milks, breakfast cereals, nutritional yeast, or supplements, ensuring they stay energized and healthy.",
  quiz: {
    question: "Why do plant-based eaters need fortified foods or supplements for B12?",
    options: ["Plants naturally contain enough B12", "B12 comes from bacteria, not plants", "Animals always provide sufficient B12"],
    answer: "B12 comes from bacteria, not plants"
  }
},
2015: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  lesson: "Why are healthy fats important and where can you get them? Fats are essential for brain function, hormone production, and heart health. Plant-based sources like avocados, nuts, seeds, and olive oil provide beneficial monounsaturated and polyunsaturated fats. Omega-3 fatty acids, important for the heart and brain, can be found in flaxseeds, chia seeds, hemp seeds, and walnuts. Incorporating these fats into your diet supports energy, reduces inflammation, and keeps your heart strong.",
  quiz: {
    question: "Which of the following plant foods is rich in omega-3 fatty acids?",
    options: ["Flaxseeds", "Bananas", "Potatoes"],
    answer: "Flaxseeds"
  }
},
2016: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  lesson: "Does soy affect your hormones? Soy contains compounds called phytoestrogens, which are plant-based molecules that can mimic estrogen in the body, but much more weakly than human estrogen. Research shows that moderate consumption of soy foods like tofu, tempeh, and soy milk is safe for most people and does not negatively affect hormone levels. In fact, soy can be part of a heart-healthy and balanced diet.",
  quiz: {
    question: "What are the plant compounds in soy that can mimic estrogen?",
    options: ["Saturated fats", "Phytoestrogens", "Cholesterol"],
    answer: "Phytoestrogens"
  }
},
2017: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  lesson: "Do our canines prove we are meant to eat meat? Not really. While humans do have small canine teeth, they are nothing like the sharp, long canines of carnivores like lions or wolves, which are designed for tearing flesh. Human teeth are more suited for grinding and chewing a variety of foods, especially plant-based ones. Our digestive system is also much longer than carnivores’, which helps process fiber-rich plants. This suggests humans are naturally adapted to a mixed or plant-forward diet, rather than being strict carnivores.",
  quiz: {
    question: "What do human canines suggest about our natural diet?",
    options: [
      "Humans are strict carnivores",
      "Humans cannot digest plants",
      "Humans are adapted for a mixed or plant-forward diet"
    ],
    answer: "Humans are adapted for a mixed or plant-forward diet"
  }
},
2018: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  lesson: "What does stomach acidity tell us about our diet? Carnivores have very acidic stomachs to break down meat and kill bacteria, while humans have moderately acidic stomachs. This acidity is enough to digest protein efficiently but not as extreme as strict meat-eaters. Our longer intestines are better suited for breaking down fiber from plants. This shows that humans are naturally adapted to a mixed diet with plenty of plant foods, rather than a meat-only diet.",
  quiz: {
    question: "What does human stomach acidity suggest about our natural diet?",
    options: [
      "We are adapted to a mixed diet with plenty of plant foods",
      "We are strict carnivores",
      "We can only digest meat"
    ],
    answer: "We are adapted to a mixed diet with plenty of plant foods"
  }
},
2019: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  lesson: "Are plant-based foods ultra-processed? Not usually. Whole plant foods like fruits, vegetables, beans, nuts, and whole grains are minimally processed and full of nutrients. In contrast, many meat and dairy products we consume today are highly processed, often containing added salt, sugars, preservatives, and unhealthy fats. Eating more whole, plant-based foods and fewer ultra-processed animal products supports better health, more energy, and lower risk of chronic diseases.",
  quiz: {
    question: "Which of the following is usually minimally processed and nutrient-rich?",
    options: [
      "Processed meats and cheeses",
      "Whole plant foods like beans and vegetables",
      "Packaged sugary snacks"
    ],
    answer: "Whole plant foods like beans and vegetables"
  }
},
2020: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  lesson: "The human brain consumes about 120 grams of glucose per day, which is mainly supplied by carbohydrates from fruits, vegetables, grains, and legumes. Meat and dairy are very low in carbs, so if humans were strict carnivores, meeting the brain’s energy needs would be difficult. This suggests that humans are naturally adapted to a mixed or plant-forward diet that includes sufficient carbohydrates to fuel our brains efficiently.",
  quiz: {
    question: "What does our brain’s need for glucose suggest about our natural diet?",
    options: [
      "Humans are strict carnivores",
      "Humans don’t need carbohydrates",
      "Humans are adapted to a mixed or plant-forward diet"
    ],
    answer: "Humans are adapted to a mixed or plant-forward diet"
  }
},
*/
// --------------------------
// Healthy living & wellness – Vegetarian
// --------------------------

2021: {  
  goal: "Healthy living & wellness",  
  diet: "vegetarian",  
  title: {
    en: "Comparing foods for health",
    es: "Comparación de alimentos para la salud",
    hu: "Ételek összehasonlítása egészség szempontjából"
  },
  lesson: {
    en: "How do meat, dairy, and plant foods compare from a health perspective? Meat and dairy both provide protein and essential nutrients — meat is a good source of iron and B vitamins, dairy provides calcium and vitamin B12. However, both can contain saturated fat and, in processed forms, added salt or sugar. Plant foods, like legumes, nuts, seeds, and whole grains, are naturally high in protein, fiber, vitamins, and minerals, while being low in saturated fat.",
    es: "¿Cómo se comparan la carne, los lácteos y los alimentos vegetales desde una perspectiva de salud? Tanto la carne como los lácteos proporcionan proteínas y nutrientes esenciales: la carne es una buena fuente de hierro y vitaminas B, los lácteos proporcionan calcio y vitamina B12. Sin embargo, ambos pueden contener grasas saturadas y, en sus formas procesadas, sal o azúcar añadidos. Los alimentos vegetales, como las legumbres, frutos secos, semillas y cereales integrales, son naturalmente ricos en proteínas, fibra, vitaminas y minerales, y bajos en grasas saturadas.",
    hu: "Hogyan viszonyulnak az egészség szempontjából a hús, tejtermékek és növényi ételek? Mind a hús, mind a tejtermékek fehérjét és alapvető tápanyagokat biztosítanak — a hús jó vas- és B-vitamin forrás, a tejtermékek kalciumot és B12-vitamint biztosítanak. Ugyanakkor mindkettő tartalmazhat telített zsírt, és feldolgozott formában hozzáadott sót vagy cukrot. A növényi ételek, mint a hüvelyesek, diófélék, magvak és teljes kiőrlésű gabonák, természetesen gazdagok fehérjében, rostban, vitaminokban és ásványi anyagokban, miközben alacsony a telített zsírtartalmuk."
  },
  quiz: {  
    question: {
      en: "Which type of food provides protein and essential nutrients but is low in saturated fat?",
      es: "¿Qué tipo de alimento proporciona proteínas y nutrientes esenciales pero es bajo en grasas saturadas?",
      hu: "Melyik étel biztosít fehérjét és alapvető tápanyagokat, de alacsony a telített zsírtartalma?"
    },  
    options: {
      en: [
        "Plant foods like legumes, nuts, and seeds",
        "Meat",
        "Dairy"
      ],
      es: [
        "Alimentos vegetales como legumbres, frutos secos y semillas",
        "Carne",
        "Lácteos"
      ],
      hu: [
        "Növényi ételek, mint a hüvelyesek, diófélék és magvak",
        "Hús",
        "Tejtermékek"
      ]
    },
    answer: 0
  }
},

2022: {  
  goal: "Healthy living & wellness",  
  diet: "vegetarian",  
  title: {
    en: "Myths about plant-based diets",
    es: "Mitos sobre las dietas vegetales",
    hu: "Mítoszok a növényi alapú étrendről"
  },
  lesson: {
    en: "Common myths about going plant-based: Some people worry they won’t get enough protein, calcium, or strong bones without meat or dairy. In reality, plant foods like beans, lentils, tofu, nuts, seeds, whole grains, and leafy greens provide all these nutrients. With a variety of foods and a reliable B12 source, plant-based diets can fully support muscle growth, bone health, and overall wellness. Choosing more plants also brings extra fiber, antioxidants, and healthy fats that boost long-term health.",
    es: "Mitos comunes sobre adoptar una dieta vegetal: Algunas personas se preocupan de no obtener suficiente proteína, calcio o huesos fuertes sin carne ni lácteos. En realidad, los alimentos vegetales como frijoles, lentejas, tofu, frutos secos, semillas, cereales integrales y verduras de hoja proporcionan todos estos nutrientes. Con una variedad de alimentos y una fuente confiable de B12, las dietas vegetales pueden apoyar completamente el crecimiento muscular, la salud ósea y el bienestar general. Elegir más plantas también aporta fibra adicional, antioxidantes y grasas saludables que mejoran la salud a largo plazo.",
    hu: "Gyakori mítoszok a növényi alapú étrendről: Egyesek attól tartanak, hogy nem jutnak elegendő fehérjéhez, kalciumhoz vagy erős csontokhoz hús és tejtermék nélkül. Valójában a növényi ételek, mint a bab, lencse, tofu, diófélék, magvak, teljes kiőrlésű gabonák és leveles zöldségek mindezeket a tápanyagokat biztosítják. A változatos ételek és egy megbízható B12-forrás mellett a növényi alapú étrend teljes mértékben támogatja az izomnövekedést, a csontok egészségét és az általános jóllétet. Több növény választása extra rostot, antioxidánsokat és egészséges zsírokat is biztosít, amelyek hosszú távon javítják az egészséget."
  },
  quiz: {  
    question: {
      en: "Which statement is true about plant-based diets?",
      es: "¿Qué afirmación es cierta sobre las dietas vegetales?",
      hu: "Melyik állítás igaz a növényi alapú étrendekre?"
    },  
    options: {
      en: [
        "They can provide enough protein, calcium, and nutrients",
        "They always lead to weak bones",
        "They cannot support muscle growth"
      ],
      es: [
        "Pueden proporcionar suficiente proteína, calcio y nutrientes",
        "Siempre conducen a huesos débiles",
        "No pueden apoyar el crecimiento muscular"
      ],
      hu: [
        "Biztosítanak elegendő fehérjét, kalciumot és tápanyagokat",
        "Mindig gyenge csontokhoz vezetnek",
        "Nem támogatják az izomnövekedést"
      ]
    },
    answer: 0
  }
},
2023: {  
  goal: "Healthy living & wellness",  
  diet: "vegetarian",  
  title: {
    en: "Boosting the immune system",
    es: "Fortaleciendo el sistema inmunológico",
    hu: "Az immunrendszer erősítése"
  },
  lesson: {
    en: "Your immune system depends on the nutrients you eat every day. A vegetarian diet is naturally rich in vitamins C and E, beta-carotene, zinc, and antioxidants — all essential for defending your body against infections and inflammation. Plants also contain phytonutrients that help regulate immune responses and speed up recovery. Meanwhile, high consumption of animal fats and processed meats has been linked to lower immune resilience and chronic inflammation. By eating a variety of colorful plant foods, you give your immune system the fuel it needs to stay healthy, strong, and energized.",
    es: "Tu sistema inmunológico depende de los nutrientes que consumes cada día. Una dieta vegetariana es naturalmente rica en vitaminas C y E, betacaroteno, zinc y antioxidantes — todos esenciales para defender tu cuerpo contra infecciones e inflamación. Las plantas también contienen fitonutrientes que ayudan a regular las respuestas inmunológicas y acelerar la recuperación. Mientras tanto, el alto consumo de grasas animales y carnes procesadas se ha asociado con una menor resistencia inmunológica e inflamación crónica. Al comer una variedad de alimentos vegetales coloridos, proporcionas a tu sistema inmunológico el combustible que necesita para mantenerse saludable, fuerte y con energía.",
    hu: "Az immunrendszered a napi táplálkozásodtól függ. A vegetáriánus étrend természeténél fogva gazdag C- és E-vitaminban, béta-karotinban, cinkben és antioxidánsokban — ezek mind elengedhetetlenek a fertőzések és a gyulladások elleni védelemhez. A növények fitonutrienseket is tartalmaznak, amelyek segítik az immunválasz szabályozását és a gyorsabb regenerációt. Eközben a magas állati zsír- és feldolgozott húsfogyasztás alacsonyabb immunellenállással és krónikus gyulladással áll összefüggésben. Színes növényi ételek változatos fogyasztásával biztosítod az immunrendszered számára szükséges energiát az egészség, erő és vitalitás fenntartásához."
  },
  quiz: {  
    question: {
      en: "Which vitamin is especially important for boosting the immune system and is abundant in fruits and vegetables?",
      es: "¿Qué vitamina es especialmente importante para fortalecer el sistema inmunológico y abunda en frutas y verduras?",
      hu: "Melyik vitamin különösen fontos az immunrendszer erősítéséhez, és bőségesen megtalálható gyümölcsökben és zöldségekben?"
    },  
    options: {
      en: [
        "Vitamin C",
        "Vitamin D",
        "Vitamin B12"
      ],
      es: [
        "Vitamina C",
        "Vitamina D",
        "Vitamina B12"
      ],
      hu: [
        "C-vitamin",
        "D-vitamin",
        "B12-vitamin"
      ]
    },
    answer: 0
  }
},
2024: {  
  goal: "Healthy living & wellness",  
  diet: "vegetarian",  
  title: {
    en: "Understanding LDL and saturated fat",
    es: "Comprendiendo el LDL y las grasas saturadas",
    hu: "Az LDL és a telített zsírok megértése"
  },
  lesson: {
    en: "LDL (low-density lipoprotein) is often called “bad cholesterol” because high levels can accumulate in arteries and increase heart disease risk. Experts recommend limiting saturated fat to about 20–30 grams per day for an average adult. For context, a single cheeseburger can contain around 15–20 grams of saturated fat — nearly the entire daily limit!",
    es: "El LDL (lipoproteína de baja densidad) se llama a menudo “colesterol malo” porque los niveles altos pueden acumularse en las arterias e incrementar el riesgo de enfermedades cardíacas. Los expertos recomiendan limitar las grasas saturadas a unos 20–30 gramos por día para un adulto promedio. Para ponerlo en perspectiva, una sola hamburguesa con queso puede contener alrededor de 15–20 gramos de grasa saturada — ¡casi todo el límite diario!",
    hu: "Az LDL (alacsony sűrűségű lipoprotein) gyakran „rossz koleszterinnek” nevezik, mert a magas szint felhalmozódhat az artériákban, növelve a szívbetegségek kockázatát. A szakértők azt javasolják, hogy az átlagos felnőtt napi telített zsírbevitele 20–30 gramm legyen. Összehasonlításképp: egyetlen sajtos hamburger körülbelül 15–20 gramm telített zsírt tartalmaz — majdnem az egész napi limitet!"
  },
  quiz: {  
    question: {
      en: "Approximately how much saturated fat does a single cheeseburger contain?",
      es: "¿Cuánta grasa saturada contiene aproximadamente una sola hamburguesa con queso?",
      hu: "Körülbelül mennyi telített zsírt tartalmaz egyetlen sajtos hamburger?"
    },  
    options: {
      en: [
        "5 grams",
        "15–20 grams",
        "30–40 grams"
      ],
      es: [
        "5 gramos",
        "15–20 gramos",
        "30–40 gramos"
      ],
      hu: [
        "5 gramm",
        "15–20 gramm",
        "30–40 gramm"
      ]
    },
    answer: 1
  }
},
2025: {  
  goal: "Healthy living & wellness",  
  diet: "vegetarian",  
  title: {
    en: "Energy from plant-based foods",
    es: "Energía de alimentos vegetales",
    hu: "Energia növényi ételekből"
  },
  lesson: {
    en: "Many wonder if a vegetarian diet provides enough energy for an active lifestyle. Plant-based foods are excellent sources of carbohydrates — the body’s primary energy fuel — along with healthy fats and proteins. Whole grains, legumes, fruits, and vegetables release energy slowly, keeping blood sugar stable and supporting metabolism throughout the day. Compared to animal-based meals, plant-based ones are often lighter, easier to digest, and nutrient-rich, helping your cells produce energy efficiently.",
    es: "Muchos se preguntan si una dieta vegetariana proporciona suficiente energía para un estilo de vida activo. Los alimentos vegetales son excelentes fuentes de carbohidratos — el combustible energético principal del cuerpo — junto con grasas y proteínas saludables. Los cereales integrales, legumbres, frutas y verduras liberan energía lentamente, manteniendo el azúcar en sangre estable y apoyando el metabolismo durante todo el día. En comparación con las comidas de origen animal, las vegetales son a menudo más ligeras, fáciles de digerir y ricas en nutrientes, ayudando a las células a producir energía de manera eficiente.",
    hu: "Sokan azon gondolkodnak, hogy egy vegetáriánus étrend biztosít-e elegendő energiát egy aktív életmódhoz. A növényi ételek kiváló szénhidrátforrások — a test elsődleges energiaforrása — valamint egészséges zsírokat és fehérjéket is tartalmaznak. A teljes kiőrlésű gabonák, hüvelyesek, gyümölcsök és zöldségek lassan adják le az energiát, stabil vércukorszintet biztosítva és támogatva az anyagcserét a nap folyamán. Az állati alapú ételekhez képest a növényi ételek gyakran könnyebbek, könnyebben emészthetők és tápanyagban gazdagok, segítve a sejtek hatékony energia-termelését."
  },
  quiz: {  
    question: {
      en: "What is the body’s main source of energy?",
      es: "¿Cuál es la principal fuente de energía del cuerpo?",
      hu: "Mi a test elsődleges energiaforrása?"
    },  
    options: {
      en: [
        "Carbohydrates",
        "Protein",
        "Fat"
      ],
      es: [
        "Carbohidratos",
        "Proteína",
        "Grasa"
      ],
      hu: [
        "Szénhidrát",
        "Fehérje",
        "Zsír"
      ]
    },
    answer: 0
  }
},

/*  
2026: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  lesson: "Why are plant-based fats good for your heart? Fats from nuts, seeds, avocados, and olive oil are mostly unsaturated, which helps lower LDL (“bad”) cholesterol and increase HDL (“good”) cholesterol. They also contain antioxidants and anti-inflammatory compounds that protect arteries from damage. Including these fats regularly in your diet supports healthy blood flow, reduces the risk of heart disease, and provides lasting energy, all while keeping saturated fat intake in check.",
  quiz: {
    question: "Which type of fat helps lower LDL cholesterol and supports heart health?",
    options: [
      "Saturated fats from butter and cheese",
      "Trans fats from processed foods",
      "Unsaturated fats from plant foods"
    ],
    answer: "Unsaturated fats from plant foods"
  }
},
2027: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  lesson: "Do you need dairy or meat to get complete protein? Not necessarily. A complete protein contains all nine essential amino acids your body cannot produce. Dairy is a complete protein, but so are some plant-based foods like soy, quinoa, buckwheat, and hemp seeds. Most other plant foods may be lower in one or more essential amino acids, but by eating a variety of plant foods throughout the day — for example, beans with grains or nuts with legumes — you can easily obtain all essential amino acids. This shows that well-planned plant-based diets fully support protein needs without dairy.",
  quiz: {
    question: "How can plant-based eaters get all essential amino acids?",
    options: [
      "It’s impossible without dairy",
      "By eating only one type of plant food",
      "By combining different plant foods like beans and grains throughout the day"
    ],
    answer: "By combining different plant foods like beans and grains throughout the day"
  }
},
2028: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  lesson: "Your skin reflects what you eat. A vegetarian diet is packed with antioxidants, vitamins, and healthy fats that protect your skin from damage and premature aging. Vitamin C from fruits helps build collagen, vitamin E from nuts and seeds guards against oxidative stress, and beta-carotene from colorful vegetables supports a natural, healthy glow. Plant-based diets are also lower in compounds that promote inflammation, which means fewer skin breakouts and slower aging. By eating more plants, you’re not only nourishing your body but also giving your skin the nutrients it needs to stay radiant and youthful.",
  quiz: {
    question: "Which nutrient from fruits helps your skin produce collagen and stay firm?",
    options: [
      "Vitamin B12",
      "Vitamin C",
      "Iron"
    ],
    answer: "Vitamin C"
  }
},
2029: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  lesson: "What is inflammation and how does diet affect it? Inflammation is your body’s natural response to injury or infection, but chronic inflammation can contribute to heart disease, diabetes, arthritis, and other health problems. Diet plays a big role: foods high in saturated fat, added sugars, and ultra-processed ingredients can increase inflammation, while plant-based foods rich in antioxidants, fiber, and healthy fats — like fruits, vegetables, whole grains, nuts, seeds, and olive oil — help reduce it. Eating a variety of these foods supports long-term health and can help manage inflammation naturally.",
  quiz: {
    question: "Which type of foods help reduce chronic inflammation?",
    options: [
      "Processed foods high in sugar and saturated fat",
      "Plant-based foods rich in antioxidants and healthy fats",
      "Fried fast foods"
    ],
    answer: "Plant-based foods rich in antioxidants and healthy fats"
  }
},
2030: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  lesson: "Is there something in dairy you can’t get from plants? The main nutrient not naturally found in plants is vitamin B12, which is essential for nerves and red blood cells. Calcium, protein, and other vitamins can be easily obtained from plant foods like tofu, tempeh, leafy greens, nuts, seeds, and fortified plant milks. By including these foods and a reliable B12 source — either fortified foods or supplements — you can meet all your nutritional needs without dairy.",
  quiz: {
    question: "Which nutrient in dairy is not naturally found in plants?",
    options: [
      "Calcium",
      "Protein",
      "Vitamin B12"
    ],
    answer: "Vitamin B12"
  }
},
2031: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  lesson: "Your gut is home to trillions of bacteria that play a key role in digestion, immunity, and even mood. A vegetarian diet naturally supports gut health because it’s rich in fiber, which feeds beneficial gut bacteria and keeps digestion smooth. Fruits, vegetables, legumes, and whole grains create a diverse microbiome, reducing inflammation and improving nutrient absorption. In contrast, animal-based foods contain no fiber and can encourage harmful bacteria linked to bloating or digestive discomfort. By eating more plants, you nurture a balanced gut ecosystem that keeps your body strong from the inside out.",
  quiz: {
    question: "What nutrient in plant foods helps feed beneficial gut bacteria?",
    options: [
      "Cholesterol",
      "Saturated fat",
      "Fiber"
    ],
    answer: "Fiber"
  }
},
2032: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  lesson: "How can you get strong bones without relying on milk? While milk contains calcium, some studies suggest that digesting its animal protein may cause calcium to be excreted in urine, meaning the net benefit for bones can be limited. Bone health depends on a combination of calcium, vitamin D, exercise, and other nutrients. Plant-based foods like leafy greens, tofu, almonds, chia seeds, and fortified plant milks provide calcium without this potential drawback, along with fiber, antioxidants, and other nutrients that support overall health.",
  quiz: {
    question: "Why might milk not always be the most efficient way to strengthen bones?",
    options: [
      "Milk contains no calcium",
      "Digesting milk protein can increase calcium excretion",
      "Milk automatically prevents fractures without exercise"
    ],
    answer: "Digesting milk protein can increase calcium excretion"
  }
},
2033: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  lesson: "Should we be afraid of leaving dairy? Not really. Unlike meat, removing dairy is generally safe and can even be beneficial. Calcium, protein, and other nutrients found in dairy can be easily obtained from plant foods like leafy greens, tofu, almonds, chia seeds, and fortified plant milks. By including a variety of these foods you can maintain bone and overall health without difficulty. With a balanced approach, leaving dairy is safe and often supports heart health, digestion, and reduced saturated fat intake.",
  quiz: {
    question: "Is it safe to remove dairy from your diet when done thoughtfully?",
    options: [
      "No, it always causes nutrient deficiencies",
      "Only if you eat more meat",
      "Yes, with plant-based calcium and protein sources"
    ],
    answer: "Yes, with plant-based calcium and protein sources"
  }
},
2034: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  lesson: "Practical tips for reducing dairy without compromising health: \n\n1. Swap cow’s milk for fortified plant milks like soy, oat, or almond milk. \n2. Replace cheese with tofu-based spreads, nutritional yeast, or cashew cheeses. \n3. Use plant-based yogurt made from soy, coconut, or almond. \n4. Include calcium-rich plants daily — leafy greens, broccoli, almonds, chia, sesame seeds. \n\nWith these simple swaps, you can enjoy the benefits of a plant-forward diet while keeping your bones, muscles, and overall health strong.",
  quiz: {
    question: "Which of the following is a practical way to reduce dairy intake safely?",
    options: [
      "Swap cow’s milk with fortified plant milk",
      "Remove all calcium sources",
      "Eat more butter instead"
    ],
    answer: "Swap cow’s milk with fortified plant milk"
  }
},
2035: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  lesson: "Let’s look at calories and saturated fat in milk: whole cow’s milk typically has about 3.5% fat by weight. In 1 liter (~1000g), that’s roughly 35g of fat. Since fat provides 9 kcal per gram, this amounts to 315 kcal from fat alone. The total caloric content of 1 liter of whole milk is around 640 kcal, so nearly 50% of calories come from fat, mostly saturated fat — much higher than the 3–4% fat number on the label suggests, which is calculated by weight, not calories. This shows how easy it is for dairy to contribute a significant amount of saturated fat and calories to your diet.",
  quiz: {
    question: "Approximately what percentage of calories in whole milk comes from fat?",
    options: [
      "About 3–4%",
      "About 50%",
      "About 10%"
    ],
    answer: "About 50%"
  }
},
2036: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  lesson: "Which foods provide the most protein? Dairy products like milk, yogurt, and cheese do contain protein — for example, 100g of milk has about 3.5g, yogurt around 5g, and cheddar cheese about 25g. However, many plant-based foods are also rich in protein: 100g of cooked lentils has about 9g, tofu around 8g, tempeh 19g, chickpeas 9g, and almonds 21g. By choosing a variety of these foods, vegetarians can easily meet protein needs while also gaining fiber, antioxidants, and lower saturated fat.",
  quiz: {
    question: "Which plant-based food is highest in protein per 100g?",
    options: [
      "Tempeh",
      "Milk",
      "Lettuce"
    ],
    answer: "Tempeh"
  }
},
2037: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  lesson: "How does calcium in dairy compare to plant-based sources? Dairy products like milk, yogurt, and cheese are well-known for calcium — 100g of milk has about 120mg, yogurt around 110mg, and cheddar cheese 720mg. But many plant foods are excellent sources too: 100g of tofu made with calcium sulfate can have 350mg, 100g of kale has about 150mg, almonds 264mg per 100g, chia seeds around 631mg, and sesame seeds 975mg. Plant sources also come with fiber, antioxidants, and less saturated fat, making them very beneficial for bone health.",
  quiz: {
    question: "Which plant-based food provides the most calcium per 100g?",
    options: [
      "Milk",
      "Sesame seeds",
      "Apple"
    ],
    answer: "Sesame seeds"
  }
},
2038: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  lesson: "Where does iron really come from — dairy or plants? Surprisingly, dairy products contain very little iron. For example, 100g of milk has only about 0.03mg of iron, and cheese has nearly none. In contrast, many plant-based foods are rich in iron: lentils provide about 3.3mg per 100g, tofu around 5.4mg, chickpeas 2.9mg, pumpkin seeds 8.8mg, and spinach 2.7mg. While plant-based (non-heme) iron is absorbed slightly less efficiently, vitamin C from fruits and vegetables can significantly boost absorption. This makes a plant-rich diet an excellent and balanced source of iron.",
  quiz: {
    question: "Which of the following is a rich plant-based source of iron?",
    options: [
      "Milk",
      "Cheese",
      "Pumpkin seeds"
    ],
    answer: "Pumpkin seeds"
  }
},
2039: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  lesson: "Are zinc and magnesium only in dairy products? Not at all. Dairy contains small amounts — 100g of milk has about 0.4mg of zinc and 11mg of magnesium. In comparison, plant foods are much richer: pumpkin seeds contain around 7.6mg of zinc and 530mg of magnesium per 100g, cashews have 5.8mg of zinc and 292mg of magnesium, and lentils about 3mg of zinc and 47mg of magnesium. These minerals support immunity, muscle function, and energy production. A balanced plant-based diet easily meets zinc and magnesium needs, often with added fiber and antioxidants.",
  quiz: {
    question: "Which plant-based food is rich in both zinc and magnesium?",
    options: [
      "Pumpkin seeds",
      "Milk",
      "White bread"
    ],
    answer: "Pumpkin seeds"
  }
},
2040: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  lesson: "When we think about vitamins, we often imagine milk for vitamin B2 or meat for B12 — but in reality, the plant kingdom is full of vitamin-rich foods. Fruits and vegetables are the best sources of vitamin C, K, and folate; nuts and seeds are rich in vitamin E; and whole grains and legumes provide B1, B3, and B6. The only vitamin that needs attention in a fully plant-based diet is B12, which even farm animals receive through supplementation today. So, while dairy and meat contain vitamins, plants offer a much wider spectrum — without cholesterol or excess saturated fats.",
  quiz: {
    question: "Which vitamin typically requires supplementation in a plant-based diet?",
    options: [
      "Vitamin C",
      "Vitamin B12",
      "Vitamin E"
    ],
    answer: "Vitamin B12"
  }
},
*/
// --------------------------
// Healthy living & wellness – Vegan
// --------------------------
2041: {  
  goal: "Healthy living & wellness",  
  diet: "vegan",  
  title: {
    en: "Getting protein on a vegan diet",
    es: "Obtener proteínas en una dieta vegana",
    hu: "Fehérje növényi alapú étrenden"
  },
  lesson: {
    en: "Some people think humans need meat for protein, but this isn't true. Proteins are made of amino acids, which are the building blocks our bodies use to repair tissues, build muscles, and produce enzymes and hormones. Plant foods like beans, lentils, tofu, nuts, seeds, and whole grains provide all essential amino acids when eaten in variety, making it easy to get enough protein without animal products.",
    es: "Algunas personas piensan que los humanos necesitan carne para obtener proteínas, pero esto no es cierto. Las proteínas están formadas por aminoácidos, que son los bloques de construcción que nuestro cuerpo utiliza para reparar tejidos, desarrollar músculos y producir enzimas y hormonas. Los alimentos vegetales como frijoles, lentejas, tofu, frutos secos, semillas y cereales integrales proporcionan todos los aminoácidos esenciales cuando se consumen en variedad, lo que facilita obtener suficiente proteína sin productos animales.",
    hu: "Sokan azt hiszik, hogy az embereknek húsra van szükségük a fehérje miatt, de ez nem igaz. A fehérjék aminosavakból állnak, amelyek a testünk építőkövei a szövetek javításához, az izmok felépítéséhez, valamint az enzimek és hormonok előállításához. A növényi ételek, mint a bab, lencse, tofu, diófélék, magvak és teljes kiőrlésű gabonák, ha változatosan fogyasztjuk őket, biztosítják az összes esszenciális aminosavat, így könnyű elegendő fehérjét bevinni állati termékek nélkül."
  },
  quiz: {  
    question: {
      en: "How can humans get all essential amino acids on a vegan diet?",
      es: "¿Cómo pueden los humanos obtener todos los aminoácidos esenciales en una dieta vegana?",
      hu: "Hogyan juthatnak az emberek minden esszenciális aminosavhoz vegán étrenden?"
    },  
    options: {
      en: [
        "Only by eating meat",
        "By eating a variety of plant foods like beans, lentils, tofu, nuts, and grains",
        "By drinking only water"
      ],
      es: [
        "Solo comiendo carne",
        "Comiendo una variedad de alimentos vegetales como frijoles, lentejas, tofu, frutos secos y cereales",
        "Solo bebiendo agua"
      ],
      hu: [
        "Csak hús evésével",
        "Változatos növényi ételek fogyasztásával, mint a bab, lencse, tofu, diófélék és gabonák",
        "Csak víz fogyasztásával"
      ]
    },
    answer: 1
  }
},
2042: {  
  goal: "Healthy living & wellness",  
  diet: "vegan",  
  title: {
    en: "Vitamin B12 and vegan diets",
    es: "Vitamina B12 y dietas veganas",
    hu: "B12-vitamin és a vegán étrend"
  },
  lesson: {
    en: "Some people think vegans can't get enough vitamin B12, but this vitamin actually comes from bacteria, not directly from animals. Animals themselves are often supplemented with B12, which is why we get it from meat and dairy. For humans, B12 supplements or fortified foods can easily meet daily needs. In fact, B12 supplementation is recommended for everyone, not just vegans, to prevent deficiency.",
    es: "Algunas personas piensan que los veganos no pueden obtener suficiente vitamina B12, pero esta vitamina proviene en realidad de bacterias, no directamente de los animales. Los propios animales a menudo reciben suplementos de B12, por eso la obtenemos de la carne y los lácteos. Para los humanos, los suplementos de B12 o los alimentos fortificados pueden cubrir fácilmente las necesidades diarias. De hecho, se recomienda la suplementación de B12 para todos, no solo para veganos, para prevenir deficiencias.",
    hu: "Sokan azt gondolják, hogy a vegánok nem juthatnak elegendő B12-vitaminhoz, de ez a vitamin valójában baktériumokból származik, nem közvetlenül az állatoktól. Maga az állatok is gyakran kapnak B12-kiegészítést, ezért jutunk hozzá a húsból és tejtermékekből. Az emberek számára a B12-kiegészítők vagy a dúsított élelmiszerek könnyen fedezik a napi szükségletet. Valójában a B12-pótlás mindenki számára ajánlott, nem csak a vegánoknak, a hiány megelőzése érdekében."
  },
  quiz: {  
    question: {
      en: "Where does vitamin B12 originally come from?",
      es: "¿De dónde proviene originalmente la vitamina B12?",
      hu: "Honnan származik eredetileg a B12-vitamin?"
    },  
    options: {
      en: [
        "Plants",
        "Bacteria",
        "Sunlight",
        "Only animals"
      ],
      es: [
        "Plantas",
        "Bacterias",
        "Luz solar",
        "Solo animales"
      ],
      hu: [
        "Növények",
        "Baktériumok",
        "Napfény",
        "Csak állatok"
      ]
    },
    answer: 1
  }
},
2043: {  
  goal: "Healthy living & wellness",  
  diet: "vegan",  
  title: {
    en: "Calcium on a vegan diet",
    es: "Calcio en una dieta vegana",
    hu: "Kalcium a vegán étrendben"
  },
  lesson: {
    en: "Some people believe vegans can’t get enough calcium without dairy, but many plant-based foods are rich in calcium. For example, 100g of tofu contains about 350mg of calcium, 100g of kale has 150mg, and 30g of almonds provide around 75mg. By comparison, 100ml of cow’s milk has roughly 120mg of calcium. Fortified plant milks also provide similar amounts to dairy. Eating a variety of these foods easily meets daily calcium needs and supports strong bones.",
    es: "Algunas personas creen que los veganos no pueden obtener suficiente calcio sin lácteos, pero muchos alimentos vegetales son ricos en calcio. Por ejemplo, 100g de tofu contiene alrededor de 350mg de calcio, 100g de kale tiene 150mg y 30g de almendras proporcionan alrededor de 75mg. En comparación, 100ml de leche de vaca tiene aproximadamente 120mg de calcio. Las leches vegetales fortificadas también aportan cantidades similares a los lácteos. Comer una variedad de estos alimentos cubre fácilmente las necesidades diarias de calcio y apoya huesos fuertes.",
    hu: "Sokan azt hiszik, hogy a vegánok nem jutnak elegendő kalciumhoz tejtermék nélkül, de sok növényi étel gazdag kalciumban. Például 100 g tofu kb. 350 mg kalciumot tartalmaz, 100 g kelkáposzta 150 mg-ot, 30 g mandula körülbelül 75 mg-ot. Összehasonlításképp, 100 ml tehéntej körülbelül 120 mg kalciumot tartalmaz. A dúsított növényi tejek is hasonló mennyiséget biztosítanak, mint a tej. Ezek változatos fogyasztásával könnyen fedezhetők a napi kalciumszükségletek, és támogathatók az erős csontok."
  },
  quiz: {  
    question: {
      en: "Which plant-based foods provide calcium comparable to dairy?",
      es: "¿Qué alimentos vegetales proporcionan calcio comparable al de los lácteos?",
      hu: "Mely növényi ételek biztosítanak a tejtermékekhez hasonló mennyiségű kalciumot?"
    },  
    options: {
      en: [
        "Tofu, kale, almonds, fortified plant milks",
        "Potatoes and rice only",
        "Fruit juice"
      ],
      es: [
        "Tofu, kale, almendras, leches vegetales fortificadas",
        "Solo patatas y arroz",
        "Jugo de frutas"
      ],
      hu: [
        "Tofu, kelkáposzta, mandula, dúsított növényi tejek",
        "Csak burgonya és rizs",
        "Gyümölcslé"
      ]
    },
    answer: 0
  }
},
2044: {  
  goal: "Healthy living & wellness",  
  diet: "vegan",  
  title: {
    en: "Iron on a vegan diet",
    es: "Hierro en una dieta vegana",
    hu: "Vas a vegán étrendben"
  },
  lesson: {
    en: "Some people think vegans can't get enough iron because they avoid meat. Iron is essential for transporting oxygen in the blood and supporting energy levels. Plant-based sources like lentils, beans, spinach, pumpkin seeds, and fortified cereals provide plenty of iron. Absorption is improved when these foods are eaten with vitamin C-rich foods like citrus, peppers, or tomatoes. With proper planning, vegans can easily meet daily iron needs.",
    es: "Algunas personas piensan que los veganos no pueden obtener suficiente hierro porque evitan la carne. El hierro es esencial para transportar oxígeno en la sangre y mantener los niveles de energía. Fuentes vegetales como lentejas, frijoles, espinacas, semillas de calabaza y cereales fortificados proporcionan abundante hierro. La absorción mejora cuando se consumen con alimentos ricos en vitamina C, como cítricos, pimientos o tomates. Con una planificación adecuada, los veganos pueden cubrir fácilmente las necesidades diarias de hierro.",
    hu: "Sokan azt hiszik, hogy a vegánok nem jutnak elegendő vashoz, mert kerülik a húst. A vas elengedhetetlen az oxigén szállításához a vérben és az energiaszint fenntartásához. Növényi források, például lencse, bab, spenót, tökmag és dúsított gabonák bőségesen tartalmaznak vasat. A felszívódás javul, ha ezeket a vitamin C-ben gazdag ételekkel, például citrusfélékkel, paprikával vagy paradicsommal fogyasztjuk. Megfelelő tervezéssel a vegánok könnyen fedezhetik a napi vasszükségletet."
  },
  quiz: {  
    question: {
      en: "How can vegans improve iron absorption from plant foods?",
      es: "¿Cómo pueden los veganos mejorar la absorción de hierro de los alimentos vegetales?",
      hu: "Hogyan javíthatják a vegánok a vas felszívódását a növényi ételekből?"
    },  
    options: {
      en: [
        "Eat iron alone",
        "Pair iron-rich foods with vitamin C",
        "Only eat meat occasionally"
      ],
      es: [
        "Comer hierro solo",
        "Combinar alimentos ricos en hierro con vitamina C",
        "Comer carne solo ocasionalmente"
      ],
      hu: [
        "Csak vasat enni",
        "Vasban gazdag ételeket C-vitaminban gazdag ételekkel kombinálni",
        "Csak alkalmanként húst enni"
      ]
    },
    answer: 1
  }
},
2045: {  
  goal: "Healthy living & wellness",  
  diet: "vegan",  
  title: {
    en: "Omega-3 fatty acids for vegans",
    es: "Ácidos grasos omega-3 para veganos",
    hu: "Omega-3 zsírsavak vegánoknak"
  },
  lesson: {
    en: "Omega-3 fatty acids are important for heart, brain, and joint health. Plant-based sources include flaxseeds, chia seeds, walnuts, hemp seeds, and algae oil. These provide ALA, which the body can partially convert into EPA and DHA, the forms found in fish. Including these plant sources ensures adequate omega-3 intake on a vegan diet and supports overall health.",
    es: "Los ácidos grasos omega-3 son importantes para la salud del corazón, el cerebro y las articulaciones. Las fuentes vegetales incluyen semillas de lino, semillas de chía, nueces, semillas de cáñamo y aceite de algas. Estos proporcionan ALA, que el cuerpo puede convertir parcialmente en EPA y DHA, las formas presentes en el pescado. Incluir estas fuentes vegetales asegura una ingesta adecuada de omega-3 en una dieta vegana y apoya la salud general.",
    hu: "Az omega-3 zsírsavak fontosak a szív, az agy és az ízületek egészségéhez. Növényi források a lenmag, chia mag, dió, kendermag és algazsír. Ezek ALA-t biztosítanak, amelyet a test részben EPA- és DHA-formává alakíthat, amelyek a halakban találhatók. Ezeknek a növényi forrásoknak a bevonása biztosítja a megfelelő omega-3 bevitelét vegán étrenden, és támogatja az általános egészséget."
  },
  quiz: {  
    question: {
      en: "Which plant foods provide omega-3 fatty acids?",
      es: "¿Qué alimentos vegetales proporcionan ácidos grasos omega-3?",
      hu: "Mely növényi ételek biztosítanak omega-3 zsírsavakat?"
    },  
    options: {
      en: [
        "Flaxseeds, chia seeds, walnuts, hemp seeds, algae oil",
        "Rice, potatoes, apples",
        "Meat and cheese only"
      ],
      es: [
        "Semillas de lino, semillas de chía, nueces, semillas de cáñamo, aceite de algas",
        "Arroz, patatas, manzanas",
        "Solo carne y queso"
      ],
      hu: [
        "Lenmag, chia mag, dió, kendermag, algazsír",
        "Rizs, burgonya, alma",
        "Csak hús és sajt"
      ]
    },
    answer: 0
  }
},

/* 
2046: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  lesson: "Some people think they 'need meat' because their body is different, but all humans share the same digestive system, teeth, and gut microbiota. We are not naturally carnivores or herbivores — our anatomy is adapted for a mostly plant-based diet. With a variety of plant foods, humans can get all the nutrients they need for strength, energy, and overall health, regardless of individual differences.",
  quiz: {
    question: "Why don’t some humans need meat to get nutrients?",
    options: ["Because our digestive system is the same for all humans and can process plants for all nutrients", "Because some people are natural carnivores", "Because meat is the only source of protein"],
    answer: "Because our digestive system is the same for all humans and can process plants for all nutrients"
  }
},
2047: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  lesson: "Some people think vegans are weak or unhealthy, but this isn’t true. Many athletes, bodybuilders, and high-performance individuals thrive on vegan diets. For example, ultramarathoner Scott Jurek, bodybuilder Torre Washington, and tennis champion Venus Williams all maintain strength, endurance, and energy on plant-based diets. With proper planning, vegan diets can support all activity levels and promote overall health.",
  quiz: {
    question: "Which statement is true about vegan athletes?",
    options: [ "Vegans are always weak", "Vegans can be strong and energetic like Scott Jurek and Venus Williams", "Vegans cannot build muscle"],
    answer: "Vegans can be strong and energetic like Scott Jurek and Venus Williams"
  }
},
2048: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  lesson: "Some people think vegan diets are restrictive and boring, but in reality there is an enormous variety of plant foods to enjoy. There are over 30,000 edible plant species worldwide, including fruits, vegetables, grains, legumes, nuts, and seeds. By comparison, the average person consumes only a few dozen animal species in their lifetime, mainly chicken, beef, pork, and fish. A vegan diet can be far more diverse, colorful, and flavorful than most typical omnivorous diets.",
  quiz: {
    question: "Approximately how many edible plant species exist worldwide?",
    options: ["About 100", "Only 500", "Over 30,000"],
    answer: "Over 30,000"
  }
},
2049: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  lesson: "Some people argue that vegan diets are unnatural because humans evolved eating meat. While humans are biologically omnivores and can digest both plants and animal products, science shows that a predominantly plant-based diet is fully compatible with human health. Research demonstrates that such diets can prevent, and in some cases even reverse, chronic diseases like heart disease, type 2 diabetes, and high blood pressure. Eating plants is not only natural for humans but also highly beneficial for long-term wellness.",
  quiz: {
    question: "What does science say about plant-based diets for humans?",
    options: ["They are unnatural and harmful", "They can prevent or reverse chronic diseases", "They only work for children"],
    answer: "They can prevent or reverse chronic diseases"
  }
},
2050: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  lesson: "Over the last ~60 years, global production of meat has increased by about 403% (from 1961 to 2020), and milk and milk products by about 167%. At the same time, chronic illnesses have surged: the number of adults with diabetes has more than quadrupled since 1980 (from ~108 million to over 537 million). Meanwhile, global obesity prevalence among adults more than doubled between 1990 and 2022 (from ~6%–8% to ~14%–18% in many regions). These parallel trends suggest a strong correlation between rising consumption of meat and dairy and increases in heart disease, type 2 diabetes, and obesity worldwide.",
  quiz: {
    question: "What trend coincided with increased meat and dairy consumption over the last decades?",
    options: ["Rise in chronic diseases like diabetes and heart disease", "Decline in obesity", "Decrease in cancer rates"],
    answer: "Rise in chronic diseases like diabetes and heart disease"
  }
},
2051: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  lesson: "Although milk contains calcium, the digestion of milk protein can cause your body to use more calcium than it provides. This means that high dairy consumption does not necessarily strengthen bones and may even affect bone health negatively.",
  quiz: {
    question: "Does milk always strengthen bones?",
    options: ["Yes, always", "No, it can cause net calcium loss", "Only if drunk with sugar"],
    answer: "No, it can cause net calcium loss"
  }
},
2052: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  lesson: "Humans are biologically closer to frugivores and herbivores like gorillas. Our digestive system, teeth, and gut microbiota are adapted for high-fiber, plant-based foods. While we can digest meat, our anatomy suggests that a mostly plant-based diet is optimal for long-term health.",
  quiz: {
    question: "Humans are most similar in diet to which group?",
    options: ["Carnivores like lions", "Omnivores like pigs", "Frugivores/herbivores like gorillas"],
    answer: "Frugivores/herbivores like gorillas"
  }
},
2053: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  lesson: "Blue Zones — regions where people live exceptionally long lives — primarily eat plant-based diets rich in vegetables, legumes, and whole grains. The arrival of fast, meat-heavy foods has eroded these traditional diets, contributing to rising rates of chronic disease and shorter lifespans.",
  quiz: {
    question: "What type of diet is common in Blue Zones?",
    options: ["Plant-based with vegetables and legumes", "Fast-food and meat-heavy", "High sugar and processed snacks"],
    answer: "Plant-based with vegetables and legumes"
  }
},
2054: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  lesson: "Plant proteins, such as beans, lentils, tofu, and quinoa, provide all the essential amino acids when eaten in variety. Unlike meat, they contain no cholesterol and much less saturated fat. Diets rich in plant protein are linked to lower risk of heart disease and longer lifespan, while high meat protein intake is associated with inflammation and chronic illness.",
  quiz: {
    question: "What is one key difference between plant and meat protein?",
    options: ["Meat proteins are cholesterol-free", "Plant proteins contain no cholesterol", "Plant proteins lack amino acids"],
    answer: "Plant proteins contain no cholesterol"
  }
},
2055: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  lesson: "Heart disease, stroke, diabetes, and certain cancers are among the top causes of death globally. Research shows that diets high in meat and dairy significantly increase the risk of these diseases by raising LDL cholesterol, promoting inflammation, and affecting insulin sensitivity.",
  quiz: {
    question: "Which dietary factor contributes to major global diseases?",
    options: ["Eating more vegetables", "Exercising regularly", "High meat and dairy consumption"],
    answer: "High meat and dairy consumption"
  }
},
2056: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  lesson: "The human body can handle only small amounts of saturated fat and LDL cholesterol. Excess consumption from meat and dairy — like in cheese, which can contain 6–8g of saturated fat per 30g slice — raises blood cholesterol and increases heart disease risk.",
  quiz: {
    question: "Why is high intake of cheese a concern?",
    options: ["It contains high saturated fat, raising LDL cholesterol", "It provides too much fiber", "It reduces energy levels"],
    answer: "It contains high saturated fat, raising LDL cholesterol"
  }
},
2057: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  lesson: "A standard 250ml glass of whole milk contains roughly 8g of fat, of which about 5g is saturated. This can provide a significant percentage of your daily recommended saturated fat intake, often over 20% of calories for an average adult, contributing to heart disease risk if consumed daily.",
  quiz: {
    question: "What percentage of your daily saturated fat can a glass of milk provide?",
    options: ["Less than 5%", "Over 20%", "0%"],
    answer: "Over 20%"
  }
},
2058: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  lesson: "Milk contains hormones like estrogen, progesterone, and IGF-1. These hormones can influence human hormone levels, potentially affecting growth, development, and reproductive health, which is particularly concerning for children consuming large quantities.",
  quiz: {
    question: "What hormones are naturally present in cow's milk?",
    options: ["Adrenaline, testosterone", "Insulin only","Estrogen, progesterone, IGF-1"],
    answer: "Estrogen, progesterone, IGF-1"
  }
},
2059: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  lesson: "Soy contains phytoestrogens, plant compounds that mimic estrogen. However, research shows they do not feminize men when consumed in normal dietary amounts. Instead, they may offer health benefits like lowering cholesterol and supporting heart health.",
  quiz: {
    question: "Does consuming soy make men feminine?",
    options: ["No, normal dietary amounts are safe", "Yes, immediately", "Only if combined with dairy"],
    answer: "No, normal dietary amounts are safe"
  }
},
2060: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  lesson: "Plant-based diets are naturally high in fiber, which helps regulate digestion, stabilize blood sugar, and lower cholesterol levels. Over time, this can reduce the risk of cardiovascular disease and improve gut microbiome diversity.",
  quiz: {
    question: "Why is fiber in plant-based diets beneficial?",
    options: ["Causes constipation", "Regulates digestion, lowers cholesterol, stabilizes blood sugar", "No effect"],
    answer: "Regulates digestion, lowers cholesterol, stabilizes blood sugar"
  }
},

// continue

 */

// --------------------------
// Boosting my performance as an athlete – Omnivore
// --------------------------
3001: {  
  goal: "Boosting my performance as an athlete",  
  diet: "omnivore",  
  title: {
    en: "The myth of needing meat for strength",
    es: "El mito de necesitar carne para ser fuerte",
    hu: "A hús szükségességének mítosza az erőért"
  },
  lesson: {
    en: "The idea that 'we need meat to be strong' is largely a cultural myth rather than a biological fact. Historically, societies valued meat as a symbol of wealth and power, which reinforced the belief that strength depended on animal products. Scientifically, muscle growth and performance depend on total protein intake, calories, and nutrient balance, not the source of protein.",
    es: "La idea de que 'necesitamos carne para ser fuertes' es en gran medida un mito cultural más que un hecho biológico. Históricamente, las sociedades valoraban la carne como un símbolo de riqueza y poder, lo que reforzaba la creencia de que la fuerza dependía de los productos animales. Científicamente, el crecimiento muscular y el rendimiento dependen de la ingesta total de proteínas, calorías y equilibrio de nutrientes, no de la fuente de proteínas.",
    hu: "Az az elképzelés, hogy „húsra van szükségünk az erőhöz”, nagyrészt kulturális mítosz, nem biológiai tény. Történelmileg a társadalmak a húst a gazdagság és hatalom szimbólumának tekintették, ami megerősítette azt a hitet, hogy az erő az állati termékektől függ. Tudományosan az izomnövekedés és a teljesítmény a teljes fehérjebeviteltől, a kalóriától és a tápanyag-egyensúlytól függ, nem a fehérje forrásától."
  },
  quiz: {  
    question: {
      en: "What is the main reason the 'we need meat to be strong' myth exists?",
      es: "¿Cuál es la principal razón por la que existe el mito de 'necesitamos carne para ser fuertes'?",
      hu: "Mi az oka annak, hogy az „erőhöz hús kell” mítosz létezik?"
    },  
    options: {
      en: [
        "Biological necessity",
        "Instant muscle gain",
        "Cultural beliefs linking meat to power"
      ],
      es: [
        "Necesidad biológica",
        "Ganancia muscular instantánea",
        "Creencias culturales que vinculan la carne con el poder"
      ],
      hu: [
        "Biológiai szükségesség",
        "Azonnali izomnövekedés",
        "Kulturális hiedelmek, amelyek a húst a hatalomhoz kötik"
      ]
    },
    answer: 2
  }
},

3002: {  
  goal: "Boosting my performance as an athlete",  
  diet: "omnivore",  
  title: {
    en: "Athletes and protein sources",
    es: "Atletas y fuentes de proteína",
    hu: "Sportolók és a fehérjeforrások"
  },
  lesson: {
    en: "Many people assume professional athletes eat large amounts of meat, but research shows this is not always true. Top athletes focus on meeting protein, calorie, and nutrient needs, which can come from both animal and plant sources. While some include meat, many use eggs, dairy, legumes, tofu, and grains to get enough protein. The key factor for performance is balanced nutrition, not high meat intake.",
    es: "Muchas personas asumen que los atletas profesionales comen grandes cantidades de carne, pero la investigación muestra que esto no siempre es cierto. Los atletas de élite se enfocan en satisfacer las necesidades de proteínas, calorías y nutrientes, que pueden provenir tanto de fuentes animales como vegetales. Mientras algunos incluyen carne, muchos usan huevos, lácteos, legumbres, tofu y cereales para obtener suficiente proteína. El factor clave para el rendimiento es la nutrición equilibrada, no la alta ingesta de carne.",
    hu: "Sokan feltételezik, hogy a profi sportolók nagy mennyiségű húst fogyasztanak, de a kutatások azt mutatják, hogy ez nem mindig igaz. A legjobb sportolók a fehérje-, kalória- és tápanyagszükségletük kielégítésére összpontosítanak, amely származhat állati és növényi forrásokból is. Míg néhányan húst fogyasztanak, sokan tojást, tejtermékeket, hüvelyeseket, tofut és gabonát használnak a megfelelő fehérjebevitelhez. A teljesítmény kulcsa a kiegyensúlyozott táplálkozás, nem a magas húsbevitel."
  },
  quiz: {  
    question: {
      en: "Do professional athletes need a diet rich in meat to perform well?",
      es: "¿Los atletas profesionales necesitan una dieta rica en carne para rendir bien?",
      hu: "A profi sportolóknak húsban gazdag étrendre van szükségük a jó teljesítményhez?"
    },  
    options: {
      en: [
        "No, balanced nutrition is more important",
        "Yes, meat is essential",
        "Only on competition days"
      ],
      es: [
        "No, la nutrición equilibrada es más importante",
        "Sí, la carne es esencial",
        "Solo en los días de competición"
      ],
      hu: [
        "Nem, a kiegyensúlyozott táplálkozás fontosabb",
        "Igen, a hús elengedhetetlen",
        "Csak versenynapokon"
      ]
    },
    answer: 0
  }
},
3003: {  
  goal: "Boosting my performance as an athlete",  
  diet: "omnivore",  
  title: {
    en: "Athletes can perform without meat",
    es: "Los atletas pueden rendir sin carne",
    hu: "A sportolók hús nélkül is teljesíthetnek"
  },
  lesson: {
    en: "Studies show that athletes can maintain or even improve strength and performance without meat if they get enough protein from plant and other non-meat sources. Key findings include:\n- Protein intake: 1.2–2.0 g of protein per kg of body weight per day is sufficient for muscle maintenance.\n- Recovery times: Athletes on well-planned plant-based diets report 10–20% faster muscle recovery due to lower inflammation.\n- Endurance performance: VO₂ max and stamina measures show no significant difference after 4–12 weeks.\n- Body composition: Lean muscle mass can be maintained or increased if total calories and protein needs are met.",
    es: "Los estudios muestran que los atletas pueden mantener o incluso mejorar la fuerza y el rendimiento sin carne si obtienen suficiente proteína de fuentes vegetales y otras fuentes no cárnicas. Hallazgos clave:\n- Ingesta de proteínas: 1.2–2.0 g de proteína por kg de peso corporal por día es suficiente.\n- Tiempos de recuperación: Los atletas con dietas vegetales bien planificadas reportan una recuperación muscular 10–20% más rápida debido a menor inflamación.\n- Rendimiento de resistencia: VO₂ máx y resistencia muestran diferencias insignificantes después de 4–12 semanas.\n- Composición corporal: La masa muscular magra puede mantenerse o aumentarse si se cumplen las necesidades calóricas y proteicas.",
    hu: "Tanulmányok kimutatták, hogy a sportolók hús nélkül is fenntarthatják vagy akár javíthatják az erőt és a teljesítményt, ha elegendő fehérjét fogyasztanak növényi és más nem húsforrásokból. Főbb megállapítások:\n- Fehérjebevitel: napi 1,2–2,0 g fehérje testsúlykilogrammonként elegendő az izomtömeg fenntartásához.\n- Regenerációs idő: a jól megtervezett növényi étrenden lévő sportolók 10–20%-kal gyorsabb izomregenerációról számolnak be, az alacsonyabb gyulladás miatt.\n- Állóképesség: a VO₂ max és a kitartás 4–12 hét után nem mutat jelentős különbséget.\n- Testösszetétel: a sovány izomtömeg fenntartható vagy növelhető, ha a teljes kalória- és fehérjeszükséglet teljesül."
  },
  quiz: {  
    question: {
      en: "What protein intake range supports muscle maintenance for athletes?",
      es: "¿Qué rango de ingesta de proteína mantiene la masa muscular en atletas?",
      hu: "Milyen fehérjebevitel támogatja az izomfenntartást sportolóknál?"
    },  
    options: {
      en: [
        "1.2–2.0 g/kg/day",
        "0.5–1.0 g/kg/day",
        "2.5–3.0 g/kg/day"
      ],
      es: [
        "1.2–2.0 g/kg/día",
        "0.5–1.0 g/kg/día",
        "2.5–3.0 g/kg/día"
      ],
      hu: [
        "1,2–2,0 g/testsúlykg/nap",
        "0,5–1,0 g/testsúlykg/nap",
        "2,5–3,0 g/testsúlykg/nap"
      ]
    },
    answer: 0
  }
},
3004: {  
  goal: "Boosting my performance as an athlete",  
  diet: "omnivore",  
  title: {
    en: "Digestion and energy for athletes",
    es: "Digestión y energía para atletas",
    hu: "Emésztés és energia sportolóknak"
  },
  lesson: {
    en: "Plant-based foods are generally easier to digest than large amounts of meat. They are rich in fiber and water, which support gut health and smooth digestion. When the body spends less energy on breaking down heavy animal products, more energy is available for training and performance. This can lead to better stamina, quicker recovery, and more consistent energy levels during workouts.",
    es: "Los alimentos vegetales son generalmente más fáciles de digerir que grandes cantidades de carne. Son ricos en fibra y agua, lo que apoya la salud intestinal y la digestión. Cuando el cuerpo gasta menos energía en descomponer productos animales pesados, hay más energía disponible para el entrenamiento y el rendimiento. Esto puede conducir a mejor resistencia, recuperación más rápida y niveles de energía más consistentes durante los entrenamientos.",
    hu: "A növényi ételek általában könnyebben emészthetők, mint a nagy mennyiségű hús. Gazdagok rostban és vízben, ami támogatja a bél egészségét és a sima emésztést. Ha a test kevesebb energiát használ fel a nehéz állati termékek lebontására, több energia áll rendelkezésre az edzéshez és a teljesítményhez. Ez jobb állóképességhez, gyorsabb regenerációhoz és egyenletesebb energiaszinthez vezethet az edzések alatt."
  },
  quiz: {  
    question: {
      en: "Why can plant-based foods provide more energy for sports?",
      es: "¿Por qué los alimentos vegetales proporcionan más energía para el deporte?",
      hu: "Miért biztosíthatnak a növényi ételek több energiát a sporthoz?"
    },  
    options: {
      en: [
        "They instantly increase muscle size",
        "They are easier to digest, so the body uses less energy on digestion",
        "They replace the need for carbohydrates"
      ],
      es: [
        "Aumentan instantáneamente el tamaño muscular",
        "Son más fáciles de digerir, por lo que el cuerpo usa menos energía en la digestión",
        "Sustituyen la necesidad de carbohidratos"
      ],
      hu: [
        "Azonnal növelik az izomtömeget",
        "Könnyebben emészthetők, így a test kevesebb energiát használ az emésztésre",
        "Helyettesítik a szénhidrát szükségletet"
      ]
    },
    answer: 1
  }
},
3005: {  
  goal: "Boosting my performance as an athlete",  
  diet: "omnivore",  
  title: {
    en: "Blood flow and athletic performance",
    es: "Flujo sanguíneo y rendimiento atlético",
    hu: "A véráramlás és a sportteljesítmény"
  },
  lesson: {
    en: "A plant-based diet can improve athletic performance by keeping veins and arteries healthier. Less saturated fat and more antioxidants reduce plaque buildup, allowing blood to flow freely. This ensures muscles get more oxygen, supporting endurance, stamina, and overall performance.",
    es: "Una dieta basada en plantas puede mejorar el rendimiento atlético al mantener las venas y arterias más saludables. Menos grasas saturadas y más antioxidantes reducen la acumulación de placa, permitiendo que la sangre fluya libremente. Esto asegura que los músculos reciban más oxígeno, apoyando la resistencia, la fuerza y el rendimiento general.",
    hu: "A növényi alapú étrend javíthatja a sportteljesítményt azáltal, hogy az ereket és artériákat egészségesebbé teszi. Kevesebb telített zsír és több antioxidáns csökkenti a plakk képződését, így a vér szabadon áramolhat. Ez biztosítja, hogy az izmok több oxigént kapjanak, támogatva az állóképességet, a kitartást és az általános teljesítményt."
  },
  quiz: {  
    question: {
      en: "How does a plant-based diet help muscles get more oxygen?",
      es: "¿Cómo ayuda una dieta vegetal a que los músculos reciban más oxígeno?",
      hu: "Hogyan segít a növényi alapú étrend az izmoknak több oxigénhez jutni?"
    },  
    options: {
      en: [
        "By instantly increasing muscle size",
        "By keeping veins healthier",
        "By lowering heart rate permanently"
      ],
      es: [
        "Aumentando instantáneamente el tamaño muscular",
        "Manteniendo las venas más saludables",
        "Reduciendo permanentemente la frecuencia cardíaca"
      ],
      hu: [
        "Azonnal növelve az izomtömeget",
        "Az erek egészségének megőrzésével",
        "Az állandó pulzusszám csökkentésével"
      ]
    },
    answer: 1
  }
},


/*  
3006: { 
  goal: "Boosting my performance as an athlete", 
  diet: "omnivore",
  lesson: "Professional athletes who went vegan often share very specific experiences. For example: \n\n- Venus Williams switched to a plant-based diet to manage an autoimmune disease. She noticed reduced inflammation, faster recovery after matches, and more consistent energy levels.\n\n- Nimai Delgado, a professional bodybuilder, reports that a vegan diet allowed him to maintain and even build muscle while feeling lighter and more energetic. He emphasizes planning meals with high-protein plant foods like lentils, beans, tofu, and seitan.\n\n- Scott Jurek, ultramarathoner, credits his vegan diet for improved endurance, faster recovery between runs, and fewer digestive issues on long races.\n\n- Lewis Hamilton, Formula 1 driver, says going vegan helped him feel more focused, recover quicker, and maintain a leaner physique.\n\nThese athletes highlight that the benefits are not just theoretical: increased stamina, faster recovery, less inflammation, and mental clarity are commonly reported.",
  quiz: { 
    question: "What is a common benefit professional athletes notice after going vegan?", 
    options: ["Faster recovery", "Reduced focus", "Decreased endurance"], 
    answer: "Faster recovery" 
  } 
},
3007: { 
  goal: "Boosting my performance as an athlete", 
  diet: "omnivore",
  lesson: "Many athletes notice changes in performance within a few days to weeks of switching to a plant-based diet, depending on what they were eating before and how well they plan their meals. \n\n- Immediate (3–7 days): Some report feeling lighter, less bloated, and more energetic during training sessions.\n- Short-term (2–4 weeks): Improved recovery, less muscle soreness, and better digestion are often noticed.\n- Medium-term (1–3 months): Enhanced stamina, faster endurance, and sometimes better sleep quality appear. \n\nAthletes who plan their plant-based diet carefully with sufficient protein, complex carbs, and healthy fats tend to see positive changes faster. Tracking workouts and recovery helps identify improvements objectively.",
  quiz: { 
    question: "When do many athletes notice initial changes after switching to a plant-based diet?", 
    options: ["6 months", "3–7 days", "1 year"], 
    answer: "3–7 days" 
  } 
},
3008: { 
  goal: "Boosting my performance as an athlete", 
  diet: "omnivore",
  lesson: "At age 37, Novak Djokovic, a committed vegan, became the oldest Olympic men's singles tennis champion at the Paris 2024 Games. Just weeks before the Olympics, he underwent knee surgery to repair a torn meniscus. Despite this challenge, Djokovic returned to the court and won gold by defeating Carlos Alcaraz. His plant-based diet, rich in fruits, vegetables, nuts, and legumes, helped support faster recovery and peak performance, showing that strength and endurance can be maintained even after surgery and at an older age.",
  quiz: { 
    question: "What makes Novak Djokovic's Olympic gold in Paris 2024 remarkable?", 
    options: ["Youngest singles champion", "First Grand Slam win", "Oldest singles champion, knee surgery, vegan diet"], 
    answer: "Oldest singles champion, knee surgery, vegan diet" 
  } 
},
3009: { 
  goal: "Boosting my performance as an athlete", 
  diet: "omnivore",
  lesson: "Patrick Baboumian, a professional strongman and world record holder, proves that a plant-based diet can support extreme strength. He holds multiple records, including lifting over 500 kg in the yoke walk. He says: 'The world's strongest animals are plant eaters. Gorillas, buffaloes, elephants and me.'",
  quiz: { 
    question: "What key idea does Patrick Baboumian emphasize about strength?", 
    options: ["The strongest animals on earth are plant eaters", "Meat is essential for strength", "Only supplements build strength"], 
    answer: "The strongest animals on earth are plant eaters" 
  } 
},
3010: { 
  goal: "Boosting my performance as an athlete", 
  diet: "omnivore",
  lesson: "If you’re curious about plant-based eating, you can try an immediate test by eating mostly plant-based foods for just a few days. Many athletes report feeling lighter, more energetic, and less bloated within 3–7 days. Recovery after workouts can feel faster, and digestion often improves. Tracking how your body responds helps you see the benefits of plant-based choices firsthand.",
  quiz: { 
    question: "How soon do many people notice benefits when trying a mostly plant-based diet?", 
    options: ["1 month", "3–7 days", "6 months"], 
    answer: "3–7 days" 
  } 
},
*/
// --------------------------
// Boosting my performance as an athlete – Vegetarian
// --------------------------

3011: {  
  goal: "Boosting my performance as an athlete",  
  diet: "vegetarian",  
  title: {
    en: "Vegetarian athletes and protein",
    es: "Atletas vegetarianos y proteína",
    hu: "A vegetáriánus sportolók és a fehérje"
  },
  lesson: {
    en: "Most high-performance athletes are either omnivores or vegans, and surprisingly, vegetarian athletes are rarely mentioned. This is because vegetarians often rely heavily on dairy and eggs for protein, which can be limiting in quantity and variety compared to plant-based diets. Vegan athletes, on the other hand, carefully plan their nutrition to meet all protein and nutrient needs from plants, and they often report faster recovery, less inflammation, and more consistent energy. This gap shows that a fully plant-based approach can be more effective for peak athletic performance.",
    es: "La mayoría de los atletas de alto rendimiento son omnívoros o veganos, y sorprendentemente, los atletas vegetarianos rara vez se mencionan. Esto se debe a que los vegetarianos a menudo dependen en gran medida de los lácteos y los huevos para obtener proteínas, lo que puede limitar la cantidad y variedad en comparación con las dietas basadas en plantas. Los atletas veganos, en cambio, planifican cuidadosamente su nutrición para cubrir todas las necesidades de proteínas y nutrientes a partir de plantas, y a menudo reportan una recuperación más rápida, menos inflamación y energía más constante. Esta diferencia muestra que un enfoque completamente basado en plantas puede ser más efectivo para un rendimiento atlético máximo.",
    hu: "A legtöbb csúcsportoló vagy mindenevő, vagy vegán, és meglepő módon a vegetáriánus sportolókról ritkán esik szó. Ennek oka, hogy a vegetáriánusok gyakran nagy mértékben támaszkodnak a tejtermékekre és tojásra a fehérje miatt, ami korlátozhatja a mennyiséget és a változatosságot a növényi alapú étrendekhez képest. A vegán sportolók ezzel szemben gondosan tervezik táplálkozásukat, hogy minden fehérje- és tápanyagszükségletüket növényekből fedezzék, és gyakran számolnak be gyorsabb regenerációról, kevesebb gyulladásról és kiegyensúlyozottabb energiáról. Ez a különbség azt mutatja, hogy a teljesen növényi alapú megközelítés hatékonyabb lehet a csúcs atlétikai teljesítmény eléréséhez."
  },
  quiz: {  
    question: {
      en: "Why are vegetarian athletes less discussed than vegan or omnivore athletes?",
      es: "¿Por qué se habla menos de los atletas vegetarianos que de los veganos o los omnívoros?",
      hu: "Miért beszélnek kevesebbet a vegetáriánus sportolókról, mint a vegán vagy mindenevő sportolókról?"
    },  
    options: {
      en: [
        "They rely mainly on dairy and eggs, which can limit protein variety",
        "Vegetarians cannot build muscle",
        "They are the majority of elite athletes"
      ],
      es: [
        "Dependen principalmente de lácteos y huevos, lo que puede limitar la variedad de proteínas",
        "Los vegetarianos no pueden desarrollar músculo",
        "Son la mayoría de los atletas de élite"
      ],
      hu: [
        "Főként tejtermékekre és tojásra támaszkodnak, ami korlátozhatja a fehérjefajták változatosságát",
        "A vegetáriánusok nem tudnak izmot építeni",
        "Ők alkotják az elit sportolók többségét"
      ]
    },
    answer: 0
  }
},

3012: {  
  goal: "Boosting my performance as an athlete",  
  diet: "vegetarian",  
  title: {
    en: "Dairy and athletic performance",
    es: "Lácteos y rendimiento atlético",
    hu: "Tejtermékek és atlétikai teljesítmény"
  },
  lesson: {
    en: "Many vegetarian athletes rely heavily on dairy products for protein, but dairy is high in saturated fats. Saturated fats can raise LDL cholesterol, which contributes to the formation of plaques in arteries. This can lead to cardiovascular issues over time, even in physically active individuals. Because vegetarian diets often depend on dairy rather than varied plant proteins, some athletes may not reach their peak performance or long-term health potential. This partly explains why vegetarian athletes are less discussed than their vegan or omnivore counterparts.",
    es: "Muchos atletas vegetarianos dependen en gran medida de los productos lácteos para obtener proteínas, pero los lácteos son altos en grasas saturadas. Las grasas saturadas pueden aumentar el colesterol LDL, lo que contribuye a la formación de placas en las arterias. Esto puede conducir a problemas cardiovasculares con el tiempo, incluso en personas físicamente activas. Debido a que las dietas vegetarianas a menudo dependen de los lácteos en lugar de proteínas vegetales variadas, algunos atletas pueden no alcanzar su máximo rendimiento o su potencial de salud a largo plazo. Esto explica en parte por qué se habla menos de los atletas vegetarianos que de sus homólogos veganos o omnívoros.",
    hu: "Sok vegetáriánus sportoló nagy mértékben a tejtermékekre támaszkodik a fehérje miatt, de a tejtermékek magas telített zsírtartalmúak. A telített zsírok növelhetik az LDL-koleszterint, ami hozzájárul az érelmeszesedés kialakulásához. Ez idővel kardiovaszkuláris problémákhoz vezethet, még fizikailag aktív egyének esetén is. Mivel a vegetáriánus étrendek gyakran a tejtermékekre támaszkodnak a változatos növényi fehérjék helyett, néhány sportoló nem éri el csúcs teljesítményét vagy hosszú távú egészségi potenciálját. Ez részben magyarázza, miért beszélnek kevesebbet a vegetáriánus sportolókról, mint a vegán vagy mindenevő társaikról."
  },
  quiz: {  
    question: {
      en: "Why might heavy reliance on dairy limit the performance and visibility of vegetarian athletes?",
      es: "¿Por qué la dependencia excesiva de los lácteos puede limitar el rendimiento y la visibilidad de los atletas vegetarianos?",
      hu: "Miért korlátozhatja a teljesítményt és a láthatóságot a vegetáriánus sportolóknál a tejtermékekre való nagy mértékű támaszkodás?"
    },  
    options: {
      en: [
        "Dairy contains no protein",
        "Dairy increases LDL cholesterol and plaque formation",
        "Vegetarian athletes never exercise"
      ],
      es: [
        "Los lácteos no contienen proteínas",
        "Los lácteos aumentan el colesterol LDL y la formación de placas",
        "Los atletas vegetarianos nunca hacen ejercicio"
      ],
      hu: [
        "A tejtermékek nem tartalmaznak fehérjét",
        "A tejtermékek növelik az LDL-koleszterint és a plakk képződést",
        "A vegetáriánus sportolók sosem edzenek"
      ]
    },
    answer: 1
  }
},
3013: {  
  goal: "Boosting my performance as an athlete",  
  diet: "vegetarian",  
  title: {
    en: "Matt Frazier: from vegetarian to vegan athlete",
    es: "Matt Frazier: de atleta vegetariano a vegano",
    hu: "Matt Frazier: vegetáriánusból vegán sportoló"
  },
  lesson: {
    en: "Matt Frazier, founder of No Meat Athlete, started as a vegetarian runner. Initially, he worried that cutting out animal products might reduce his performance, but he soon qualified for the Boston Marathon and progressed to ultrarunning. Inspired by these results, he transitioned fully to a vegan diet. He reported improved endurance, faster recovery, and consistent energy during long runs. Matt’s journey shows that carefully planned plant-based nutrition can support high-level athletic performance, often better than a diet reliant on dairy and eggs alone.",
    es: "Matt Frazier, fundador de No Meat Athlete, comenzó como corredor vegetariano. Inicialmente, le preocupaba que eliminar los productos animales redujera su rendimiento, pero pronto se clasificó para el Maratón de Boston y avanzó hacia ultramaratones. Inspirado por estos resultados, pasó completamente a una dieta vegana. Informó de mayor resistencia, recuperación más rápida y energía constante durante las carreras largas. El camino de Matt demuestra que una nutrición basada en plantas cuidadosamente planificada puede apoyar el rendimiento atlético de alto nivel, a menudo mejor que una dieta basada únicamente en lácteos y huevos.",
    hu: "Matt Frazier, a No Meat Athlete alapítója vegetáriánus futóként kezdte pályafutását. Eleinte aggódott, hogy az állati termékek elhagyása csökkentheti teljesítményét, de hamarosan kvalifikált a Boston Maratonra, majd ultrafutásra váltott. Eredményei inspirálták, hogy teljesen vegán étrendre álljon át. Jelentette, hogy javult az állóképessége, gyorsabb a regenerációja és következetesebb az energiaszintje hosszú futások során. Matt példája azt mutatja, hogy a gondosan megtervezett növényi alapú táplálkozás képes támogatni a magas szintű atlétikai teljesítményt, gyakran jobban, mint a csak tejre és tojásra alapozott étrend."
  },
  quiz: {  
    question: {
      en: "What did Matt Frazier notice after transitioning from vegetarian to vegan?",
      es: "¿Qué notó Matt Frazier después de pasar de vegetariano a vegano?",
      hu: "Mit vett észre Matt Frazier, miután vegetáriánusból vegánná vált?"
    },  
    options: {
      en: [
        "He could no longer run long distances",
        "Improved endurance and recovery",
        "He lost all his muscle mass"
      ],
      es: [
        "Ya no podía correr largas distancias",
        "Mejor resistencia y recuperación",
        "Perdió toda su masa muscular"
      ],
      hu: [
        "Már nem tudott hosszú távokat futni",
        "Javult az állóképessége és a regenerációja",
        "Elveszítette az összes izomtömegét"
      ]
    },
    answer: 1
  }
},
3014: {  
  goal: "Boosting my performance as an athlete",  
  diet: "vegetarian",  
  title: {
    en: "Key micronutrients for vegetarian athletes",
    es: "Micronutrientes clave para atletas vegetarianos",
    hu: "Fontos mikrotápanyagok vegetáriánus sportolóknak"
  },
  lesson: {
    en: "Vegetarian athletes need to pay attention to certain micronutrients that can be harder to get from a diet based mainly on plants and dairy. Iron, vitamin B12, zinc, and omega-3 fatty acids are essential for energy, endurance, and recovery. Low levels can lead to fatigue, slower recovery, and decreased performance. Plant-based sources, fortified foods, and careful planning can help meet these needs and keep athletes performing at their best.",
    es: "Los atletas vegetarianos deben prestar atención a ciertos micronutrientes que pueden ser más difíciles de obtener en una dieta basada principalmente en plantas y lácteos. El hierro, la vitamina B12, el zinc y los ácidos grasos omega-3 son esenciales para la energía, la resistencia y la recuperación. Los niveles bajos pueden causar fatiga, recuperación más lenta y disminución del rendimiento. Las fuentes vegetales, los alimentos fortificados y una planificación cuidadosa pueden ayudar a cubrir estas necesidades y mantener a los atletas en su mejor rendimiento.",
    hu: "A vegetáriánus sportolóknak figyelniük kell bizonyos mikrotápanyagokra, amelyek nehezebben szerezhetők be főként növényekből és tejtermékekből álló étrendből. A vas, a B12-vitamin, a cink és az omega-3 zsírsavak elengedhetetlenek az energiához, állóképességhez és regenerációhoz. Az alacsony szint fáradtsághoz, lassabb regenerációhoz és csökkent teljesítményhez vezethet. A növényi források, dúsított élelmiszerek és gondos tervezés segíthet ezeknek a szükségleteknek a kielégítésében és a sportolók legjobb teljesítményének fenntartásában."
  },
  quiz: {  
    question: {
      en: "Which micronutrient is commonly limited in vegetarian diets and affects energy and recovery?",
      es: "¿Qué micronutriente suele estar limitado en las dietas vegetarianas y afecta la energía y la recuperación?",
      hu: "Melyik mikrotápanyag gyakran korlátozott a vegetáriánus étrendekben, és befolyásolja az energiát és a regenerációt?"
    },  
    options: {
      en: [
        "Vitamin C",
        "Calcium",
        "Vitamin B12"
      ],
      es: [
        "Vitamina C",
        "Calcio",
        "Vitamina B12"
      ],
      hu: [
        "C-vitamin",
        "Kalcium",
        "B12-vitamin"
      ]
    },
    answer: 2
  }
},
3015: {  
  goal: "Boosting my performance as an athlete",  
  diet: "vegetarian",  
  title: {
    en: "Ensuring protein variety",
    es: "Asegurando variedad de proteínas",
    hu: "A fehérjefajták változatosságának biztosítása"
  },
  lesson: {
    en: "Protein variety is important for athletes. While eggs and dairy provide complete protein, relying mostly on them may limit the variety of nutrients and amino acids you get. By combining legumes, grains, nuts, and seeds, vegetarian athletes can ensure a diverse intake of amino acids, supporting muscle repair, growth, and peak performance. A varied plant-based approach can complement dairy and eggs or even replace them for those seeking more nutrient diversity.",
    es: "La variedad de proteínas es importante para los atletas. Aunque los huevos y los lácteos proporcionan proteínas completas, depender principalmente de ellos puede limitar la variedad de nutrientes y aminoácidos que se obtiene. Combinando legumbres, cereales, frutos secos y semillas, los atletas vegetarianos pueden asegurar una ingesta diversa de aminoácidos, apoyando la reparación muscular, el crecimiento y el máximo rendimiento. Un enfoque variado basado en plantas puede complementar los lácteos y los huevos o incluso reemplazarlos para quienes buscan más diversidad de nutrientes.",
    hu: "A fehérje változatossága fontos a sportolóknak. Bár a tojás és a tejtermékek teljes fehérjét biztosítanak, ha túlnyomórészt ezekre támaszkodunk, korlátozhatja a tápanyagok és aminosavak változatosságát. Hüvelyesek, gabonák, diófélék és magvak kombinálásával a vegetáriánus sportolók biztosíthatják az aminosavak változatos bevitelét, támogatva az izomregenerációt, növekedést és a csúcsteljesítményt. A változatos növényi alapú megközelítés kiegészítheti vagy akár helyettesítheti a tejtermékeket és tojást azok számára, akik több tápanyagot szeretnének."
  },
  quiz: {  
    question: {
      en: "How can vegetarian athletes ensure they get a wide range of amino acids?",
      es: "¿Cómo pueden los atletas vegetarianos asegurarse de obtener una amplia gama de aminoácidos?",
      hu: "Hogyan biztosíthatják a vegetáriánus sportolók a különféle aminosavak bevitelét?"
    },  
    options: {
      en: [
        "Combine legumes, grains, nuts, and seeds",
        "Eat only dairy and eggs",
        "Avoid protein entirely"
      ],
      es: [
        "Combinar legumbres, cereales, frutos secos y semillas",
        "Comer solo lácteos y huevos",
        "Evitar la proteína por completo"
      ],
      hu: [
        "Hüvelyesek, gabonák, diófélék és magvak kombinálása",
        "Csak tejtermékek és tojás fogyasztása",
        "Teljesen elkerülni a fehérjét"
      ]
    },
    answer: 0
  }
},

// --------------------------
// Boosting my performance as an athlete – Vegan
// --------------------------
3016: {  
  goal: "Boosting my performance as an athlete",  
  diet: "vegan",  
  title: {
    en: "Glycogen and high-intensity performance",
    es: "Glucógeno y rendimiento de alta intensidad",
    hu: "Glikogén és nagy intenzitású teljesítmény"
  },
  lesson: {
    en: "During high-intensity exercise, your muscles rely on glycogen—stored carbohydrates—for energy. If glycogen runs low, fatigue hits quickly. Vegan diets are naturally rich in carbohydrate-dense foods like oats, rice, potatoes, bananas, and dates. Most athletes benefit from 4–7 g of carbohydrates per kg of body weight per day. This keeps glycogen stores full so you can train harder and bounce back faster.",
    es: "Durante el ejercicio de alta intensidad, tus músculos dependen del glucógeno — carbohidratos almacenados — para obtener energía. Si el glucógeno se agota, la fatiga aparece rápidamente. Las dietas veganas son naturalmente ricas en alimentos densos en carbohidratos como avena, arroz, patatas, plátanos y dátiles. La mayoría de los atletas se benefician de 4–7 g de carbohidratos por kg de peso corporal al día. Esto mantiene llenos los depósitos de glucógeno para que puedas entrenar más duro y recuperarte más rápido.",
    hu: "Magas intenzitású edzés során az izmaid glikogénre — tárolt szénhidrátokra — támaszkodnak energiaként. Ha a glikogén kimerül, gyorsan jelentkezik a fáradtság. A vegán étrend természetesen gazdag szénhidrátban sűrű ételekben, mint a zab, rizs, burgonya, banán és datolya. A legtöbb sportoló számára napi 4–7 g szénhidrát testsúlykilogrammonként előnyös. Ez megtölti a glikogénraktárakat, így keményebben edzhetsz és gyorsabban regenerálódsz."
  },
  quiz: {  
    question: {
      en: "What fuel does your body rely on most during high-intensity exercise?",
      es: "¿De qué combustible depende más tu cuerpo durante el ejercicio de alta intensidad?",
      hu: "Milyen energiaforrásra támaszkodik leginkább a tested nagy intenzitású edzés során?"
    },  
    options: {
      en: [
        "Glycogen (stored carbohydrates)",
        "Protein",
        "Water"
      ],
      es: [
        "Glucógeno (carbohidratos almacenados)",
        "Proteína",
        "Agua"
      ],
      hu: [
        "Glikogén (tárolt szénhidrát)",
        "Fehérje",
        "Víz"
      ]
    },
    answer: 0
  }
},
3017: {  
  goal: "Boosting my performance as an athlete",  
  diet: "vegan",  
  title: {
    en: "Antioxidants and recovery",
    es: "Antioxidantes y recuperación",
    hu: "Antioxidánsok és regeneráció"
  },
  lesson: {
    en: "Recovery is faster on a plant-based diet because plant foods are rich in antioxidants like vitamin C, vitamin E, and polyphenols. These compounds reduce exercise-induced inflammation, leading to less soreness and quicker muscle repair. Studies show plant-based athletes have up to 30% lower inflammation markers compared to omnivores. This means more consistent training and fewer ‘off’ days.",
    es: "La recuperación es más rápida con una dieta basada en plantas porque los alimentos vegetales son ricos en antioxidantes como la vitamina C, la vitamina E y los polifenoles. Estos compuestos reducen la inflamación inducida por el ejercicio, lo que provoca menos dolor muscular y una reparación más rápida. Los estudios muestran que los atletas basados en plantas tienen hasta un 30% menos de marcadores de inflamación en comparación con los omnívoros. Esto significa entrenamientos más consistentes y menos días de descanso involuntarios.",
    hu: "A regeneráció gyorsabb növényi alapú étrenden, mert a növényi ételek gazdagok antioxidánsokban, mint a C-vitamin, E-vitamin és polifenolok. Ezek a vegyületek csökkentik a mozgás okozta gyulladást, ami kevesebb izomfájdalmat és gyorsabb izomjavítást eredményez. Tanulmányok szerint a növényi alapú sportolóknál akár 30%-kal alacsonyabbak a gyulladásos markerek a mindenevőkhöz képest. Ez következetesebb edzéseket és kevesebb „kihagyott” napot jelent."
  },
  quiz: {  
    question: {
      en: "Why do antioxidants help athletes recover faster?",
      es: "¿Por qué los antioxidantes ayudan a los atletas a recuperarse más rápido?",
      hu: "Miért segítenek az antioxidánsok a sportolóknak gyorsabban regenerálódni?"
    },  
    options: {
      en: [
        "They increase soreness",
        "They block muscle growth",
        "They reduce inflammation from exercise"
      ],
      es: [
        "Aumentan el dolor muscular",
        "Bloquean el crecimiento muscular",
        "Reducen la inflamación causada por el ejercicio"
      ],
      hu: [
        "Növelik az izomfájdalmat",
        "Blokkolják az izomnövekedést",
        "Csökkentik az edzés okozta gyulladást"
      ]
    },
    answer: 2
  }
},
3018: {  
  goal: "Boosting my performance as an athlete",  
  diet: "vegan",  
  title: {
    en: "Protein needs for vegan athletes",
    es: "Necesidades de proteína para atletas veganos",
    hu: "Fehérjeszükséglet vegán sportolóknál"
  },
  lesson: {
    en: "Athletes need around 1.4–2.0 g of protein per kg of body weight daily for muscle repair. Lentils, tofu, seitan, beans, soy milk, tempeh, and quinoa provide high-quality protein. When eaten throughout the day, plant proteins supply all essential amino acids. Many athletes spread protein across meals (~20–30g per meal) for best recovery.",
    es: "Los atletas necesitan alrededor de 1,4–2,0 g de proteína por kg de peso corporal al día para reparar músculos. Las lentejas, el tofu, el seitán, los frijoles, la leche de soja, el tempeh y la quinoa proporcionan proteínas de alta calidad. Cuando se consumen a lo largo del día, las proteínas vegetales suministran todos los aminoácidos esenciales. Muchos atletas distribuyen la proteína en las comidas (~20–30 g por comida) para una mejor recuperación.",
    hu: "A sportolóknak napi 1,4–2,0 g fehérjére van szükségük testsúlykilogrammonként az izmok regenerációjához. A lencse, tofu, szejtán, bab, szójaital, tempeh és quinoa magas minőségű fehérjét biztosít. Ha ezeket a nap folyamán fogyasztjuk, a növényi fehérjék biztosítják az összes esszenciális aminosavat. Sok sportoló a fehérjét az étkezések között osztja el (~20–30 g étkezésenként) a legjobb regeneráció érdekében."
  },
  quiz: {  
    question: {
      en: "How much protein do most athletes need per day?",
      es: "¿Cuánta proteína necesitan la mayoría de los atletas al día?",
      hu: "Mennyi fehérjére van szüksége a legtöbb sportolónak naponta?"
    },  
    options: {
      en: [
        "1.4–2.0 g per kg body weight",
        "0.5 g per kg body weight",
        "4 g per kg body weight"
      ],
      es: [
        "1,4–2,0 g por kg de peso corporal",
        "0,5 g por kg de peso corporal",
        "4 g por kg de peso corporal"
      ],
      hu: [
        "1,4–2,0 g testsúlykilogrammonként",
        "0,5 g testsúlykilogrammonként",
        "4 g testsúlykilogrammonként"
      ]
    },
    answer: 0
  }
},
3019: {  
  goal: "Boosting my performance as an athlete",  
  diet: "vegan",  
  title: {
    en: "Iron for vegan athletes",
    es: "Hierro para atletas veganos",
    hu: "Vas a vegán sportolóknál"
  },
  lesson: {
    en: "Iron transports oxygen to your muscles. Low iron can cause fatigue, breathlessness, and weaker performance. Lentils, beans, tofu, spinach, and pumpkin seeds are strong plant sources. Pairing iron-rich foods with vitamin C (e.g., citrus, bell peppers, strawberries) can increase absorption by up to 3x.",
    es: "El hierro transporta oxígeno a tus músculos. La falta de hierro puede causar fatiga, falta de aire y menor rendimiento. Las lentejas, los frijoles, el tofu, la espinaca y las semillas de calabaza son buenas fuentes vegetales. Combinar alimentos ricos en hierro con vitamina C (por ejemplo, cítricos, pimientos, fresas) puede aumentar la absorción hasta 3 veces.",
    hu: "A vas az oxigént szállítja az izmaidhoz. Az alacsony vasfogyasztás fáradtsághoz, légszomjhoz és gyengébb teljesítményhez vezethet. A lencse, bab, tofu, spenót és tökmag erős növényi források. A vasban gazdag ételek C-vitaminnal való párosítása (pl. citrusfélék, paprika, eper) akár 3-szorosra növelheti a felszívódást."
  },
  quiz: {  
    question: {
      en: "How can plant-based athletes improve iron absorption?",
      es: "¿Cómo pueden los atletas veganos mejorar la absorción de hierro?",
      hu: "Hogyan javíthatják a növényi alapú sportolók a vas felszívódását?"
    },  
    options: {
      en: [
        "Eat iron alone",
        "Pair iron-rich foods with vitamin C",
        "Avoid greens"
      ],
      es: [
        "Comer hierro solo",
        "Combinar alimentos ricos en hierro con vitamina C",
        "Evitar las verduras"
      ],
      hu: [
        "Csak vas fogyasztása",
        "Vasban gazdag ételek C-vitaminnal való párosítása",
        "Kerülni a zöldségeket"
      ]
    },
    answer: 1
  }
},
3020: {  
  goal: "Boosting my performance as an athlete",  
  diet: "vegan",  
  title: {
    en: "Omega-3 for vegan athletes",
    es: "Omega-3 para atletas veganos",
    hu: "Omega-3 vegán sportolóknak"
  },
  lesson: {
    en: "Omega-3 fatty acids help reduce inflammation and support joint and heart health. Plant-based omega-3s are found in flaxseeds, chia seeds, walnuts, hemp seeds, and algae oil. Algae oil is especially useful for athletes, since it contains DHA and EPA—the same heart-protective fats found in fish, but without the toxins or microplastics.",
    es: "Los ácidos grasos omega-3 ayudan a reducir la inflamación y apoyan la salud de las articulaciones y el corazón. Los omega-3 de origen vegetal se encuentran en semillas de lino, chía, nueces, semillas de cáñamo y aceite de algas. El aceite de algas es especialmente útil para los atletas, ya que contiene DHA y EPA, las mismas grasas protectoras del corazón que se encuentran en el pescado, pero sin toxinas ni microplásticos.",
    hu: "Az omega-3 zsírsavak segítenek csökkenteni a gyulladást, és támogatják az ízületek és a szív egészségét. A növényi omega-3-források közé tartozik a lenmag, chia mag, dió, kendermag és az algazsír. Az algazsír különösen hasznos a sportolóknak, mivel tartalmazza a DHA- és EPA-zsírsavakat — ugyanazokat a szívvédő zsírokat, amelyek a halban találhatók, de toxikus anyagok és mikroműanyagok nélkül."
  },
  quiz: {  
    question: {
      en: "Which plant-based omega-3 source contains DHA/EPA?",
      es: "¿Qué fuente de omega-3 de origen vegetal contiene DHA/EPA?",
      hu: "Melyik növényi omega-3-forrás tartalmaz DHA/EPA-t?"
    },  
    options: {
      en: [
        "Algae oil",
        "Olive oil",
        "Corn oil"
      ],
      es: [
        "Aceite de algas",
        "Aceite de oliva",
        "Aceite de maíz"
      ],
      hu: [
        "Algazsír",
        "Olívaolaj",
        "Kukoricaolaj"
      ]
    },
    answer: 0
  }
},

/*  
3021: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  lesson: "Calcium and vitamin D support bone strength and injury prevention. Fortified plant milks, tofu, almonds, sesame seeds, and leafy greens provide calcium. Vitamin D comes from sunlight or supplements. Many plant-based athletes aim for 600–1000mg calcium and 800–2000 IU vitamin D per day, especially during intense training phases.",
  quiz: {
    question: "What do calcium and vitamin D help prevent?",
    options: ["Muscle cramps only", "Bone injuries and stress fractures", "Dehydration"],
    answer: "Bone injuries and stress fractures"
  }
},

3022: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  lesson: "Beetroot is naturally high in nitrates, which increase nitric oxide production. This widens blood vessels, improving oxygen delivery to muscles. Studies show beet juice can boost endurance by 15–20%. A glass of beet juice 2–3 hours before training can improve stamina.",
  quiz: {
    question: "How does beetroot improve athletic performance?",
    options: ["Enhances oxygen delivery to muscles", "Reduces blood flow", "Has no effect"],
    answer: "Enhances oxygen delivery to muscles"
  }
},

3023: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  lesson: "Hydration affects strength, speed, and focus. Fruits and vegetables like oranges, cucumbers, watermelon, and leafy greens provide water and natural electrolytes. Coconut water can also help replace electrolytes after sweating. For long sessions, combine water + carbs + salt to keep energy stable.",
  quiz: {
    question: "Why are plant foods useful for hydration?",
    options: ["They remove minerals", "They cause dehydration", "They contain water and electrolytes",],
    answer: "They contain water and electrolytes"
  }
},

3024: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  lesson: "A healthy gut improves digestion, nutrient absorption, mood, immune strength, and energy levels. Plant-based diets are naturally rich in prebiotic fibers that support a diverse gut microbiome. This helps athletes recover better, feel lighter, and perform with more consistency.",
  quiz: {
    question: "What does prebiotic fiber help support?",
    options: ["Muscle dehydration", "A healthy gut microbiome", "Increased inflammation"],
    answer: "A healthy gut microbiome"
  }
},

3025: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  lesson: "Many elite athletes thrive on plant-based diets: ultramarathoner Scott Jurek, bodybuilder Nimai Delgado, tennis champion Novak Djokovic, and sprinter Carl Lewis. They report faster recovery, improved endurance, and clearer mental focus. Their success proves performance does not depend on animal products.",
  quiz: {
    question: "What benefit do many plant-based athletes report?",
    options: ["Faster recovery and improved endurance", "Lower performance", "No advantage"],
    answer: "Faster recovery and improved endurance"
  }
},

3026: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  lesson: "Because plant-based diets are naturally lower in saturated fat and higher in fiber, many athletes find it easier to maintain a lean body mass. Less excess weight means less stress on joints, faster speed, and improved agility.",
  quiz: {
    question: "How can a vegan diet benefit body composition?",
    options: ["Causes rapid weight gain", "Helps maintain lean mass and reduce joint stress", "Leads to muscle loss"],
    answer: "Helps maintain lean mass and reduce joint stress"
  }
},

3027: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  lesson: "During long workouts, fiber-rich foods release energy slowly and steadily. This prevents blood sugar crashes and keeps endurance stable. Examples of good pre-training slow-release carbs include oats, whole grain pasta, sweet potatoes, bananas, and dates.",
  quiz: {
    question: "How does fiber support endurance?",
    options: ["Causes quick exhaustion", "Blocks energy", "Stabilizes blood sugar and provides steady energy",],
    answer: "Stabilizes blood sugar and provides steady energy"
  }
},

3028: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  lesson: "Chronic inflammation slows recovery and increases injury risk. A plant-based diet lowers inflammation markers like CRP (C-reactive protein). Studies show plant-eaters often have 20–30% lower CRP levels than meat-eaters. This means quicker recovery and more training days per week.",
  quiz: {
    question: "What does lower inflammation help athletes do?",
    options: ["Recover faster and train more consistently", "Recover slower", "Stop training"],
    answer: "Recover faster and train more consistently"
  }
},

3029: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  lesson: "Cardiovascular endurance depends heavily on blood vessel health. Diets high in saturated fat can stiffen arteries and reduce blood flow. Plant-based diets help keep arteries flexible and clear, improving oxygen delivery to muscles.",
  quiz: {
    question: "How does a plant-based diet support cardiovascular endurance?",
    options: ["Keeps arteries flexible and improves blood flow", "Reduces oxygen delivery", "Increases stiffness in arteries"],
    answer: "Keeps arteries flexible and improves blood flow"
  }
},

3030: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  lesson: "Some athletes think they need meat for strength. But muscle growth depends on training intensity, total protein, and calorie intake — not protein source. Vegan bodybuilders like Patrik Baboumian and Torre Washington have built elite-level strength fully powered by plants.",
  quiz: {
    question: "What truly determines muscle growth?",
    options: ["Eating meat specifically", "Training + protein + calories", "Low carb intake"],
    answer: "Training + protein + calories"
  }
},

3031: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  lesson: "Post-workout meals should include protein (20–30g) plus carbohydrates to refill glycogen. Great options: tofu stir-fry with rice, lentil pasta with veggies, or a smoothie with soy milk + oats + berries + chia seeds. This combo accelerates recovery and muscle repair.",
  quiz: {
    question: "What should a good post-workout meal include?",
    options: ["Protein only", "Carbohydrates + protein", "Only fats"],
    answer: "Carbohydrates + protein"
  }
},

3032: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  lesson: "Sleep is one of the biggest performance boosters. Plant-based diets can improve sleep quality because they're rich in magnesium and tryptophan, nutrients that calm the nervous system. Better sleep = stronger training days.",
  quiz: {
    question: "How can plant foods support sleep and recovery?",
    options: ["They prevent sleep", "They are rich in calming minerals", "They increase stress hormones"],
    answer: "They are rich in calming minerals"
  }
},

3033: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  lesson: "Plant proteins are often easier to digest than heavy animal proteins, meaning less bloating during training. Smooth digestion leads to better comfort and better athletic performance — especially for runners, cyclists, and fighters.",
  quiz: {
    question: "Why might plant proteins support better training comfort?",
    options: ["They are easier to digest", "They cause bloating", "They slow metabolism"],
    answer: "They are easier to digest"
  }
},

3034: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  lesson: "Training consistency is one of the biggest predictors of performance. Because plant-based diets support faster recovery, lower inflammation, and better energy stability, athletes can train more days per week — leading to steady, long-term improvement.",
  quiz: {
    question: "What is one major advantage of faster recovery?",
    options: ["More injuries", "Less training", "More consistent training"],
    answer: "More consistent training"
  }
},

3035: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  lesson: "Athletic success is not built in one day — it’s built across thousands of small choices. Eating plants supports your body every single day: better recovery, cleaner fuel, steadier energy, and clearer focus. Over time, these benefits add up into real performance gains.",
  quiz: {
    question: "What drives long-term athletic improvement?",
    options: ["Healthy daily habits over time", "Occasional intense workouts", "One special supplement"],
    answer: "Healthy daily habits over time"
  }
}
*/
// continue

};

/*  */
// =======================
// LEARN PATH
// =======================
export const extralessonsData = {
  animals: [
    {
    title: {
      en: "Instinct or Habit?",
      es: "¿Instinto o hábito?",
      hu: "Ösztön vagy szokás?"
    },
    content: {
      en: "Imagine a small child who has never been taught to eat meat, placed in a room with a rabbit and an apple. What would she do? Most likely, she would play with the rabbit and eat the apple. This simple thought experiment helps us reflect on where our eating habits come from. It suggests that our tendency to eat animals is not an inborn instinct, but rather something shaped by culture, habit, and what we learn from others as we grow up. When our basic needs are met, harming animals for food isn’t a natural necessity—it’s a learned behavior.",
      es: "Imagina a una niña pequeña que nunca ha aprendido a comer carne, colocada en una habitación con un conejo y una manzana. ¿Qué haría? Lo más probable es que jugara con el conejo y se comiera la manzana. Este sencillo experimento mental nos ayuda a reflexionar sobre el origen de nuestros hábitos alimentarios. Sugiere que nuestra tendencia a comer animales no es un instinto innato, sino algo moldeado por la cultura, la costumbre y lo que aprendemos al crecer. Cuando nuestras necesidades básicas están cubiertas, dañar a los animales para alimentarnos no es una necesidad natural, sino un comportamiento aprendido.",
      hu: "Képzelj el egy kisgyermeket, akit soha nem tanítottak húsevésre, és egy szobába helyeznek egy nyúllal és egy almával. Mit tenne? Valószínűleg játszana a nyúllal, és megenni az almát. Ez az egyszerű gondolatkísérlet segít elgondolkodni azon, honnan származnak étkezési szokásaink. Arra utal, hogy az állatok fogyasztása nem velünk született ösztön, hanem a kultúra, a megszokás és a tanulás eredménye. Amikor alapvető szükségleteink kielégítettek, az állatok bántalmazása étel céljából nem természetes szükségszerűség, hanem tanult viselkedés."
    },
    question: {
      text: {
        en: "What does this thought experiment suggest about our eating habits?",
        es: "¿Qué sugiere este experimento mental sobre nuestros hábitos alimentarios?",
        hu: "Mit sugall ez a gondolatkísérlet az étkezési szokásainkról?"
      },
      options: {
        en: [
          "Killing animals is an unavoidable instinct",
          "Our carnivore behavior is influenced by learning and culture",
          "Humans always choose to eat meat",
          "Instinct is stronger than choice"
        ],
        es: [
          "Matar animales es un instinto inevitable",
          "Nuestro comportamiento carnívoro está influenciado por el aprendizaje y la cultura",
          "Los humanos siempre eligen comer carne",
          "El instinto es más fuerte que la elección"
        ],
        hu: [
          "Az állatok megölése elkerülhetetlen ösztön",
          "A húsevő viselkedés tanult és kulturálisan befolyásolt",
          "Az emberek mindig a húst választják",
          "Az ösztön erősebb, mint a döntés"
        ]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Out of Sight, Out of Mind?",
      es: "¿Ojos que no ven, corazón que no siente?",
      hu: "Amit nem látunk, az nem fáj?"
    },
    content: {
      en: "Most people would feel upset if they saw an animal suffering. Yet in modern society, eating animals has become so normalized that we rarely think about the pain behind our meals. Because most animal suffering happens behind closed doors — in farms and slaughterhouses — it’s easy to disconnect from it. But just because we don’t see it, does that make it acceptable?",
      es: "La mayoría de las personas se sentirían mal si vieran a un animal sufrir. Sin embargo, en la sociedad moderna, comer animales se ha normalizado tanto que rara vez pensamos en el dolor detrás de nuestras comidas. Como la mayor parte del sufrimiento animal ocurre a puertas cerradas —en granjas y mataderos—, es fácil desconectarse de ello. Pero, ¿el hecho de no verlo lo hace aceptable?",
      hu: "A legtöbb ember rosszul érezné magát, ha állati szenvedést látna. A modern társadalomban azonban az állatok fogyasztása annyira megszokottá vált, hogy ritkán gondolunk bele az ételeink mögötti fájdalomba. Mivel az állatok szenvedése többnyire zárt ajtók mögött történik — farmokon és vágóhidakon —, könnyű eltávolodni tőle. De attól, hogy nem látjuk, valóban elfogadhatóvá válik?"
    },
    question: {
      text: {
        en: "What does this lesson encourage us to question?",
        es: "¿Qué nos invita a cuestionar esta lección?",
        hu: "Mire ösztönöz bennünket ez a lecke?"
      },
      options: {
        en: [
          "Whether empathy matters",
          "If suffering out of sight justifies our actions",
          "Whether animals can feel pain",
          "If we should ignore feelings"
        ],
        es: [
          "Si la empatía importa",
          "Si el sufrimiento invisible justifica nuestras acciones",
          "Si los animales pueden sentir dolor",
          "Si debemos ignorar los sentimientos"
        ],
        hu: [
          "Számít-e az empátia",
          "Igazolható-e a szenvedés, ha nem látjuk",
          "Éreznek-e fájdalmat az állatok",
          "Figyelmen kívül kell-e hagynunk az érzéseket"
        ]
      },
      correctIndex: 1
    }
  },

  {
    title: {
      en: "Hidden Reality",
      es: "La realidad oculta",
      hu: "A rejtett valóság"
    },
    content: {
      en: "Would you kill an animal yourself? Most people never have to face that question, because meat is presented to us in clean packaging — neatly cut, labeled, and far removed from the living being it once was. This polished presentation makes it easier to eat meat without thinking about what truly happens behind the scenes. But is this comfort a sign of normality, or a shared illusion that keeps us disconnected from the real consequences of our choices?",
      es: "¿Matarías a un animal tú mismo? La mayoría de las personas nunca tienen que enfrentarse a esta pregunta, porque la carne se nos presenta en envases limpios, cuidadosamente cortada y etiquetada, muy alejada del ser vivo que una vez fue. Esta presentación pulida facilita consumir carne sin pensar en lo que realmente ocurre detrás de escena. Pero, ¿es esta comodidad una señal de normalidad o una ilusión compartida que nos desconecta de las verdaderas consecuencias de nuestras elecciones?",
      hu: "Megölnél egy állatot saját kezűleg? A legtöbb embernek soha nem kell szembenéznie ezzel a kérdéssel, mert a hús tiszta csomagolásban, feldarabolva és felcímkézve kerül eléjük, teljesen elszakítva attól az élőlénytől, ami egykor volt. Ez a kifinomult megjelenés megkönnyíti a fogyasztást anélkül, hogy belegondolnánk a háttérben zajló folyamatokba. De vajon ez a kényelem a normalitás jele, vagy egy közös illúzió, amely eltávolít bennünket döntéseink valódi következményeitől?"
    },
    question: {
      text: {
        en: "What does the sanitized presentation of meat encourage us to do?",
        es: "¿Qué nos lleva a hacer la presentación higienizada de la carne?",
        hu: "Mire ösztönöz bennünket a hús steril bemutatása?"
      },
      options: {
        en: [
          "Reflect deeply on killing",
          "Ignore the process and consume without thought",
          "Feel guilty for eating",
          "Stop eating completely"
        ],
        es: [
          "Reflexionar profundamente sobre matar",
          "Ignorar el proceso y consumir sin pensar",
          "Sentir culpa al comer",
          "Dejar de comer por completo"
        ],
        hu: [
          "Mélyen elgondolkodni az ölésen",
          "Figyelmen kívül hagyni a folyamatot és gondolkodás nélkül fogyasztani",
          "Bűntudatot érezni evés közben",
          "Teljesen abbahagyni az evést"
        ]
      },
      correctIndex: 1
    }
  },

  {
    title: {
      en: "Killing for Pleasure?",
      es: "¿Matar por placer?",
      hu: "Ölés az élvezetért?"
    },
    content: {
      en: "Most people would say they are against killing animals for entertainment or pleasure. Yet science shows that humans can live healthy and full lives on a plant-based diet. This raises an important ethical question: if we eat meat mainly for taste or habit, are we supporting the killing of animals for pleasure?",
      es: "La mayoría de las personas dirían que están en contra de matar animales por entretenimiento o placer. Sin embargo, la ciencia demuestra que los seres humanos pueden vivir vidas sanas y plenas con una alimentación basada en plantas. Esto plantea una pregunta ética importante: si comemos carne principalmente por gusto o costumbre, ¿estamos apoyando la muerte de animales por placer?",
      hu: "A legtöbb ember azt mondaná, hogy ellenzi az állatok megölését szórakozásból vagy élvezetből. A tudomány azonban azt mutatja, hogy az emberek egészséges és teljes életet élhetnek növényi alapú étrenden is. Ez fontos etikai kérdést vet fel: ha főként íz vagy megszokás miatt eszünk húst, vajon nem az állatok élvezetből történő megölését támogatjuk?"
    },
    question: {
      text: {
        en: "What ethical question does enjoying the taste of meat raise?",
        es: "¿Qué pregunta ética plantea disfrutar del sabor de la carne?",
        hu: "Milyen etikai kérdést vet fel a hús ízének élvezete?"
      },
      options: {
        en: [
          "Eating meat is always necessary",
          "We may be supporting the killing of animals for pleasure",
          "Tasting meat has no impact on animals",
          "Humans cannot live without meat"
        ],
        es: [
          "Comer carne siempre es necesario",
          "Podríamos estar apoyando la muerte de animales por placer",
          "El sabor de la carne no afecta a los animales",
          "Los humanos no pueden vivir sin carne"
        ],
        hu: [
          "A húsevés mindig szükséges",
          "Lehet, hogy az állatok élvezetből történő megölését támogatjuk",
          "A hús íze nincs hatással az állatokra",
          "Az emberek nem élhetnek hús nélkül"
        ]
      },
      correctIndex: 1
    }
  },

  {
    title: {
      en: "The Circle of Life",
      es: "El círculo de la vida",
      hu: "Az élet körforgása"
    },
    content: {
      en: "We often hear the phrase 'the circle of life' to describe how all living beings are connected in nature. In a truly natural environment, animals are born free and have the space to move, explore, and express their natural behaviors. They feel sunlight, fresh air, and live according to the rhythms of nature. Industrial farming, however, takes this away — confining animals in cages or crowded barns where they can’t move freely or experience the world around them. When animals are denied these natural experiences, it challenges the idea that our current food system is truly part of the 'circle of life.'",
      es: "A menudo escuchamos la expresión 'el círculo de la vida' para describir cómo todos los seres vivos están conectados en la naturaleza. En un entorno verdaderamente natural, los animales nacen libres y tienen espacio para moverse, explorar y expresar sus comportamientos naturales. Sienten la luz del sol, el aire fresco y viven según los ritmos de la naturaleza. Sin embargo, la ganadería industrial les arrebata esto, confinándolos en jaulas o establos abarrotados donde no pueden moverse libremente ni experimentar el mundo que los rodea. Cuando se les niegan estas experiencias naturales, se pone en duda la idea de que nuestro sistema alimentario actual forme parte del 'círculo de la vida'.",
      hu: "Gyakran halljuk az „élet körforgása” kifejezést arra, hogy leírjuk, hogyan kapcsolódnak egymáshoz az élőlények a természetben. Egy valóban természetes környezetben az állatok szabadon születnek, van terük mozogni, felfedezni és kifejezni természetes viselkedésüket. Érzik a napfényt, a friss levegőt, és a természet ritmusa szerint élnek. Az ipari állattartás azonban megfosztja őket ettől: ketrecekbe vagy zsúfolt istállókba zárja őket, ahol nem mozoghatnak szabadon, és nem tapasztalhatják meg a körülöttük lévő világot. Amikor az állatoktól megvonják ezeket az alapvető élményeket, megkérdőjeleződik, hogy jelenlegi élelmiszer-rendszerünk valóban az „élet körforgásának” része-e."
    },
    question: {
      text: {
        en: "What are farm animals often denied compared to natural life?",
        es: "¿De qué se les priva con frecuencia a los animales de granja en comparación con la vida natural?",
        hu: "Mitől fosztják meg gyakran a haszonállatokat a természetes élethez képest?"
      },
      options: {
        en: [
          "Freedom and space",
          "Sunlight and natural behaviors",
          "A chance to live fully",
          "All of the above"
        ],
        es: [
          "Libertad y espacio",
          "Luz solar y comportamientos naturales",
          "La oportunidad de vivir plenamente",
          "Todas las anteriores"
        ],
        hu: [
          "Szabadság és tér",
          "Napfény és természetes viselkedés",
          "A teljes élet lehetősége",
          "Mindegyik"
        ]
      },
      correctIndex: 3
    }
  },
  {
    title: {
      en: "Awareness in Animals",
      es: "Conciencia en los animales",
      hu: "Az állatok tudatossága"
    },
    content: {
      en: "Many animals clearly show signs of awareness and self-preservation. For instance, when they sense danger, they often try to escape or protect themselves — behavior that reflects understanding and a desire to live. These reactions reveal that animals experience fear and awareness in ways not so different from our own.",
      es: "Muchos animales muestran claramente signos de conciencia y autopreservación. Por ejemplo, cuando perciben peligro, a menudo intentan escapar o protegerse, un comportamiento que refleja comprensión y deseo de vivir. Estas reacciones revelan que los animales experimentan miedo y conciencia de maneras no muy diferentes a las nuestras.",
      hu: "Sok állat egyértelműen jelez tudatosságot és önfenntartási ösztönt. Például, amikor veszélyt éreznek, gyakran megpróbálnak elmenekülni vagy megvédeni magukat — ez a viselkedés az értésről és az élet iránti vágyról tanúskodik. Ezek a reakciók azt mutatják, hogy az állatok félelmet és tudatosságot élnek meg, nem sokban különbözően a miénktől."
    },
    question: {
      text: {
        en: "When animals sense danger and try to escape, what does this show?",
        es: "Cuando los animales perciben peligro y tratan de escapar, ¿qué muestra esto?",
        hu: "Amikor az állatok veszélyt éreznek és megpróbálnak elmenekülni, mit mutat ez?"
      },
      options: {
        en: [
          "They have no feelings",
          "They have awareness and desire to live",
          "It’s purely instinct",
          "They enjoy danger"
        ],
        es: [
          "No tienen sentimientos",
          "Tienen conciencia y deseo de vivir",
          "Es puramente instinto",
          "Disfrutan del peligro"
        ],
        hu: [
          "Nincsenek érzéseik",
          "Tudatosságot és életvágyat mutatnak",
          "Csak ösztönből cselekednek",
          "Élvezik a veszélyt"
        ]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Empathy and Action",
      es: "Empatía y acción",
      hu: "Empátia és cselekvés"
    },
    content: {
      en: "Acknowledging the harsh realities of animals’ lives can feel heavy, but this discomfort actually reflects your empathy and compassion — something to value, not avoid. Ignoring the truth doesn’t help anyone. Even small, thoughtful actions can make a meaningful difference, showing that kindness and awareness go hand in hand without needing to feel guilt.",
      es: "Reconocer las duras realidades de la vida de los animales puede resultar pesado, pero esta incomodidad refleja tu empatía y compasión, algo que valorar y no evitar. Ignorar la verdad no ayuda a nadie. Incluso pequeñas acciones reflexivas pueden marcar una diferencia significativa, mostrando que la amabilidad y la conciencia van de la mano sin necesidad de sentir culpa.",
      hu: "Az állatok életének kemény valóságát felismerni nehéz lehet, de ez a kényelmetlenség valójában az empátiádat és együttérzésedet tükrözi — olyasmi, amit értékelni kell, nem elkerülni. Az igazság figyelmen kívül hagyása senkinek sem segít. Még a kis, átgondolt cselekedetek is jelentős változást hozhatnak, megmutatva, hogy a kedvesség és a tudatosság kéz a kézben jár, bűntudat érzése nélkül."
    },
    question: {
      text: {
        en: "What does feeling uncomfortable about animal suffering indicate?",
        es: "¿Qué indica sentirse incómodo ante el sufrimiento animal?",
        hu: "Mit jelez, ha kényelmetlenül érezzük magunkat az állati szenvedés láttán?"
      },
      options: {
        en: [
          "It shows our empathy",
          "It proves we are bad people",
          "It’s pointless",
          "We should ignore it"
        ],
        es: [
          "Muestra nuestra empatía",
          "Prueba que somos malas personas",
          "No tiene sentido",
          "Debemos ignorarlo"
        ],
        hu: [
          "Az empátiánkat mutatja",
          "Bizonyítja, hogy rossz emberek vagyunk",
          "Értelmetlen",
          "Figyelmen kívül kell hagynunk"
        ]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Pets vs. Food",
      es: "Mascotas vs. comida",
      hu: "Háziállatok vs. élelem"
    },
    content: {
      en: "We often treat some animals, like dogs and cats, as family, while others, such as pigs, cows, and chickens, are raised for food. Most of us recognize that all these animals are innocent, feel pain, and have a desire to live. This raises an important question: why do we draw a line between animals we love and animals we eat? Reflecting on the reasons behind these boundaries — cultural traditions, perceived intelligence, and emotional attachment — helps us understand our values and the impact of our choices.",
      es: "A menudo tratamos a algunos animales, como perros y gatos, como familia, mientras que otros, como cerdos, vacas y pollos, se crían para la alimentación. La mayoría de nosotros reconoce que todos estos animales son inocentes, sienten dolor y tienen deseo de vivir. Esto plantea una pregunta importante: ¿por qué trazamos una línea entre los animales que amamos y los que comemos? Reflexionar sobre las razones detrás de estas fronteras —tradiciones culturales, inteligencia percibida y apego emocional— nos ayuda a comprender nuestros valores y el impacto de nuestras decisiones.",
      hu: "Gyakran úgy kezelünk bizonyos állatokat, mint a kutyákat és macskákat, mintha családtagok lennének, míg másokat, mint a disznókat, teheneket és csirkéket, élelemnek nevelünk. A legtöbben elismerjük, hogy minden állat ártatlan, érez fájdalmat és vágyik az életre. Ez felvet egy fontos kérdést: miért húzunk vonalat a szeretett állatok és az elfogyasztott állatok között? Az e határok mögött rejlő okok — kulturális hagyományok, észlelt intelligencia és érzelmi kötődés — megértése segít felismerni értékeinket és döntéseink hatását."
    },
    question: {
      text: {
        en: "Why do people treat some animals as pets and others as food?",
        es: "¿Por qué la gente trata a algunos animales como mascotas y a otros como comida?",
        hu: "Miért kezelik az emberek egyes állatokat házikedvencként, másokat pedig élelmeként?"
      },
      options: {
        en: [
          "Cultural traditions",
          "Perceived intelligence",
          "Emotional attachment",
          "All of the above"
        ],
        es: [
          "Tradiciones culturales",
          "Inteligencia percibida",
          "Vínculo emocional",
          "Todas las anteriores"
        ],
        hu: [
          "Kulturális hagyományok",
          "Észlelt intelligencia",
          "Érzelmi kötődés",
          "Mindegyik"
        ]
      },
      correctIndex: 3
    }
  },
  {
    title: {
      en: "Natural Empathy",
      es: "Empatía natural",
      hu: "Természetes empátia"
    },
    content: {
      en: "Imagine walking in a park and seeing a squirrel, a duck, or a turtle. How do you feel? Do you want to help them, offer food or water, or simply enjoy their presence? Would you judge someone who harms them in that moment? These reactions show that our natural empathy is often strong, even if our daily habits don’t always reflect it. Many of our behaviors are shaped by society and learned patterns.",
      es: "Imagina caminar por un parque y ver una ardilla, un pato o una tortuga. ¿Cómo te sientes? ¿Quieres ayudarlos, ofrecerles comida o agua, o simplemente disfrutar de su presencia? ¿Juzgarías a alguien que los lastima en ese momento? Estas reacciones muestran que nuestra empatía natural suele ser fuerte, incluso si nuestros hábitos diarios no siempre lo reflejan. Muchos de nuestros comportamientos están moldeados por la sociedad y patrones aprendidos.",
      hu: "Képzeld el, hogy sétálsz egy parkban, és látsz egy mókust, kacsát vagy teknőst. Mit érzel? Segíteni akarsz nekik, ételt vagy vizet adni, vagy egyszerűen élvezni a jelenlétüket? Megítélnéd valakit, aki bántja őket abban a pillanatban? Ezek a reakciók azt mutatják, hogy a természetes empátiánk gyakran erős, még ha a napi szokásaink ezt nem is tükrözik. Sok viselkedésünket a társadalom és a tanult minták alakítják."
    },
    question: {
      text: {
        en: "What does this scenario encourage us to reflect on?",
        es: "¿Sobre qué nos invita a reflexionar este escenario?",
        hu: "Mire késztet minket ez a helyzet a reflektálásra?"
      },
      options: {
        en: [
          "Our natural empathy versus learned behaviors",
          "That animals in parks are different from farm animals",
          "That we should ignore feelings",
          "That instincts always control us"
        ],
        es: [
          "Nuestra empatía natural frente a comportamientos aprendidos",
          "Que los animales en los parques son diferentes de los de granja",
          "Que deberíamos ignorar los sentimientos",
          "Que los instintos siempre nos controlan"
        ],
        hu: [
          "Természetes empátia vs. tanult viselkedés",
          "Hogy a parkok állatai különböznek a haszonállatoktól",
          "Hogy figyelmen kívül kell hagynunk az érzéseket",
          "Hogy az ösztön mindig irányít minket"
        ]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Pigs' Intelligence",
      es: "Inteligencia de los cerdos",
      hu: "A disznók intelligenciája"
    },
    content: {
      en: "Pigs are highly intelligent animals and often outperform dogs in various cognitive tasks. In problem-solving situations, pigs show persistence and the ability to work independently, while dogs tend to rely more on human guidance. Pigs also demonstrate advanced memory, long-term retention, and even the ability to use simple tools — all signs of complex thinking.",
      es: "Los cerdos son animales muy inteligentes y a menudo superan a los perros en diversas tareas cognitivas. En situaciones de resolución de problemas, los cerdos muestran persistencia y capacidad para trabajar de forma independiente, mientras que los perros tienden a depender más de la guía humana. Los cerdos también demuestran memoria avanzada, retención a largo plazo e incluso la capacidad de usar herramientas simples, todos signos de pensamiento complejo.",
      hu: "A disznók rendkívül intelligens állatok, és gyakran felülmúlják a kutyákat különböző kognitív feladatokban. Problémamegoldó helyzetekben a disznók kitartást és önálló munkavégzési képességet mutatnak, míg a kutyák inkább az emberi útmutatásra támaszkodnak. A disznók fejlett memóriát, hosszú távú emlékezést és akár egyszerű eszközök használatának képességét is mutatják — mind a komplex gondolkodás jelei."
    },
    question: {
      text: {
        en: "In problem-solving tasks, how do pigs compare to dogs?",
        es: "En tareas de resolución de problemas, ¿cómo se comparan los cerdos con los perros?",
        hu: "Problémamegoldó feladatokban hogyan teljesítenek a disznók a kutyákhoz képest?"
      },
      options: {
        en: [
          "Pigs are less persistent",
          "Dogs solve tasks more independently",
          "Pigs often outperform dogs",
          "Dogs have better memory"
        ],
        es: [
          "Los cerdos son menos persistentes",
          "Los perros resuelven tareas más independientemente",
          "Los cerdos a menudo superan a los perros",
          "Los perros tienen mejor memoria"
        ],
        hu: [
          "A disznók kevésbé kitartóak",
          "A kutyák önállóbban oldják meg a feladatokat",
          "A disznók gyakran felülmúlják a kutyákat",
          "A kutyáknak jobb a memóriájuk"
        ]
      },
      correctIndex: 2
    }
  },
{
    title: {
      en: "Humans and Nature",
      es: "Humanos y la naturaleza",
      hu: "Emberek és a természet"
    },
    content: {
      en: "Are we just one of many species sharing Earth’s resources, or are we the superior species meant to rule over it? How we answer this question shapes the way we treat the world around us. Seeing ourselves as part of nature encourages harmony and respect, protecting the right of every species to live freely. Seeing ourselves as above nature often justifies exploiting the Earth and its beings for our own benefit.",
      es: "¿Somos solo una de las muchas especies que comparten los recursos de la Tierra, o somos la especie superior destinada a gobernarla? Cómo respondamos a esta pregunta da forma a la manera en que tratamos el mundo que nos rodea. Vernos como parte de la naturaleza fomenta la armonía y el respeto, protegiendo el derecho de cada especie a vivir libremente. Considerarnos por encima de la naturaleza a menudo justifica la explotación de la Tierra y sus seres para nuestro propio beneficio.",
      hu: "Csak egy vagyunk a Föld erőforrásait megosztó sok faj közül, vagy mi vagyunk a felsőbbrendű faj, aki uralkodni hivatott? A kérdésre adott válaszunk alakítja, hogyan bánunk a körülöttünk lévő világgal. Ha magunkat a természet részeként látjuk, az harmóniára és tiszteletre ösztönöz, védve minden faj jogát a szabad élethez. Ha magunkat a természet fölé helyezzük, az gyakran igazolja a Föld és lényei kizsákmányolását saját hasznunkra."
    },
    question: {
      text: {
        en: "What does this lesson encourage us to reflect on?",
        es: "¿Sobre qué nos invita a reflexionar esta lección?",
        hu: "Mire késztet minket ez a lecke a reflektálásra?"
      },
      options: {
        en: [
          "Whether humans should dominate or coexist with nature",
          "How to extract more resources",
          "If animals can survive alone",
          "Whether technology is natural"
        ],
        es: [
          "Si los humanos deben dominar o coexistir con la naturaleza",
          "Cómo extraer más recursos",
          "Si los animales pueden sobrevivir solos",
          "Si la tecnología es natural"
        ],
        hu: [
          "Hogy az emberek uralkodjanak vagy együttéljenek a természettel",
          "Hogyan nyerjünk ki több erőforrást",
          "Hogy az állatok egyedül is életben maradnak-e",
          "Hogy a technológia természetes-e"
        ]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Learning from Animals",
      es: "Aprendiendo de los animales",
      hu: "Tanulás az állatoktól"
    },
    content: {
      en: "We often assume animals are less capable or valuable than humans. But watching them closely reveals their virtues — and even lessons for us. Take dogs, for example: they find joy simply in love and play, showing loyalty, kindness, and protective behavior. Reflecting on these traits challenges our sense of superiority and invites us to consider what we value in ourselves and in others.",
      es: "A menudo asumimos que los animales son menos capaces o valiosos que los humanos. Pero observarlos de cerca revela sus virtudes e incluso lecciones para nosotros. Tomemos a los perros, por ejemplo: encuentran alegría simplemente en el amor y el juego, mostrando lealtad, amabilidad y comportamiento protector. Reflexionar sobre estas características desafía nuestro sentido de superioridad e invita a considerar qué valoramos en nosotros mismos y en los demás.",
      hu: "Gyakran feltételezzük, hogy az állatok kevésbé képesek vagy értékesek, mint az emberek. De ha közelről figyeljük őket, felfedezhetjük erényeiket — és akár tanulságokat is meríthetünk belőlük. Vegyük például a kutyákat: az örömöt egyszerűen a szeretetben és játékban találják, hűséget, kedvességet és védelmező magatartást mutatva. Ezeknek a tulajdonságoknak a megfigyelése kihívást jelent a felsőbbrendűség érzésünkre, és arra ösztönöz, hogy fontoljuk meg, mit értékelünk magunkban és másokban."
    },
    question: {
      text: {
        en: "What does observing animals like dogs encourage us to reflect on?",
        es: "¿Qué nos anima a reflexionar la observación de animales como los perros?",
        hu: "Mit késztet minket megfigyelni az állatokat, például a kutyákat?"
      },
      options: {
        en: [
          "Our own superiority",
          "The values and abilities of animals",
          "How we can learn from them",
          "All of the above"
        ],
        es: [
          "Nuestra propia superioridad",
          "Los valores y habilidades de los animales",
          "Cómo podemos aprender de ellos",
          "Todas las anteriores"
        ],
        hu: [
          "A saját felsőbbrendűségünket",
          "Az állatok értékeit és képességeit",
          "Hogyan tanulhatunk tőlük",
          "Mindegyik"
        ]
      },
      correctIndex: 3
    }
  },
  {
    title: {
      en: "Innocence Exploited",
      es: "Inocencia explotada",
      hu: "Ártatlanság kihasználva"
    },
    content: {
      en: "Animals live with pure innocence. They don’t harm for pleasure, lie for gain, or judge others by appearance. Their trust in humans is genuine — they approach with curiosity, not suspicion. Yet, this very innocence is often taken advantage of in industries that profit from their lives. Reflecting on this helps us recognize that their innocence deserves protection, not betrayal.",
      es: "Los animales viven con pura inocencia. No dañan por placer, no mienten por beneficio ni juzgan a otros por su apariencia. Su confianza en los humanos es genuina: se acercan con curiosidad, no con sospecha. Sin embargo, esta misma inocencia a menudo se aprovecha en industrias que se benefician de sus vidas. Reflexionar sobre esto nos ayuda a reconocer que su inocencia merece protección, no traición.",
      hu: "Az állatok tiszta ártatlansággal élnek. Nem ártanak örömből, nem hazudnak haszonért, és nem ítélkeznek a többiek kinézete alapján. Az ember iránti bizalmuk őszinte — kíváncsian közelítenek, nem gyanakvással. Ennek az ártatlanságnak a kihasználása azonban gyakori azokon az iparágakon belül, amelyek hasznot húznak az életükből. Ezen való reflektálás segít felismerni, hogy az ártatlanságuk védelmet érdemel, nem árulást."
    },
    question: {
      text: {
        en: "What makes animals’ innocence particularly tragic in the context of exploitation?",
        es: "¿Qué hace que la inocencia de los animales sea particularmente trágica en el contexto de la explotación?",
        hu: "Mi teszi az állatok ártatlanságát különösen tragikussá a kizsákmányolás kontextusában?"
      },
      options: {
        en: [
          "They trust us and we use that trust against them",
          "They are dangerous to humans",
          "They don’t understand emotions",
          "They harm others intentionally"
        ],
        es: [
          "Confían en nosotros y usamos esa confianza en su contra",
          "Son peligrosos para los humanos",
          "No entienden las emociones",
          "Hacen daño intencionalmente a otros"
        ],
        hu: [
          "Bíznak bennünk, és ezt a bizalmat ellenük használjuk",
          "Veszélyesek az emberekre",
          "Nem értik az érzelmeket",
          "Szándékosan ártanak másoknak"
        ]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Cows and Calves",
      es: "Vacas y terneros",
      hu: "Tehenek és borjak"
    },
    content: {
      en: "Cows are deeply emotional animals, capable of forming strong bonds with their calves. In natural settings, a mother may grieve the loss of her calf for days, staying nearby and showing nurturing behaviors like nudging or licking the deceased calf. In industrial farming, calves are often separated from their mothers shortly after birth, breaking this natural bond and causing stress for both mother and calf. Understanding this reality encourages reflection on the impact of our choices and how animals are treated in farming.",
      es: "Las vacas son animales profundamente emocionales, capaces de formar fuertes vínculos con sus terneros. En entornos naturales, una madre puede llorar la pérdida de su ternero durante días, permaneciendo cerca y mostrando comportamientos de cuidado como empujar o lamer al ternero fallecido. En la ganadería industrial, los terneros a menudo se separan de sus madres poco después del nacimiento, rompiendo este vínculo natural y causando estrés tanto a la madre como al ternero. Comprender esta realidad fomenta la reflexión sobre el impacto de nuestras elecciones y cómo se trata a los animales en la agricultura.",
      hu: "A tehenek mélyen érzelmes állatok, képesek erős kötelékeket kialakítani borjaikkal. Természetes környezetben az anya napokig gyászolhatja a borjának elvesztését, a közelben maradva, és gondoskodó viselkedést mutatva, mint a borjú meglökése vagy nyalogatása. Az ipari állattartásban a borjakat gyakran a születés után röviddel elválasztják anyjuktól, megtörve ezt a természetes köteléket, és stresszt okozva mind az anyának, mind a borjúnak. Ennek a valóságnak a megértése ösztönöz a döntéseink hatásain való reflexióra és az állatok tartásának megértésére a gazdaságban."
    },
    question: {
      text: {
        en: "What impact does separating calves from their mothers in farming have?",
        es: "¿Qué impacto tiene separar a los terneros de sus madres en la ganadería?",
        hu: "Milyen hatással van a borjak anyjuktól való elválasztása a gazdaságban?"
      },
      options: {
        en: [
          "It causes stress for both mother and calf",
          "It has no effect",
          "Cows forget their calves immediately",
          "It makes cows happier"
        ],
        es: [
          "Causa estrés tanto en la madre como en el ternero",
          "No tiene efecto",
          "Las vacas olvidan a sus terneros de inmediato",
          "Hace a las vacas más felices"
        ],
        hu: [
          "Stresszt okoz mind az anyának, mind a borjúnak",
          "Nincs hatása",
          "A tehenek azonnal elfelejtik a borjaikat",
          "Boldogabbá teszi a teheneket"
        ]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Valuing Animals",
      es: "Valorando a los animales",
      hu: "Az állatok értékelése"
    },
    content: {
      en: "It’s interesting to consider why we treat some animals, like pets, differently from farm animals. Is it based on intelligence, appearance, or something else? With humans, we accept differences without feeling superior, so why do we value animals in such arbitrary ways? Reflecting on this helps us understand our biases and the cultural norms that shape how we treat different species.",
      es: "Es interesante considerar por qué tratamos a algunos animales, como mascotas, de manera diferente a los animales de granja. ¿Se basa en la inteligencia, la apariencia o en otra cosa? Con los humanos, aceptamos las diferencias sin sentirnos superiores, entonces ¿por qué valoramos a los animales de manera tan arbitraria? Reflexionar sobre esto nos ayuda a comprender nuestros prejuicios y las normas culturales que moldean cómo tratamos a las diferentes especies.",
      hu: "Érdekes megfontolni, miért kezelünk bizonyos állatokat, például házikedvenceket, másként, mint a haszonállatokat. Alapul ez intelligencián, kinézeten, vagy valami máson? Az embereknél elfogadjuk a különbségeket anélkül, hogy felsőbbrendűnek éreznénk magunkat, akkor miért értékeljük az állatokat ilyen önkényesen? Ezen való reflexió segít megérteni az előítéleteinket és a kulturális normákat, amelyek meghatározzák, hogyan bánunk a különböző fajokkal."
    },
    question: {
      text: {
        en: "Which factor most helps explain why society values some animals more than others?",
        es: "¿Qué factor ayuda más a explicar por qué la sociedad valora más a algunos animales que a otros?",
        hu: "Mely tényező segít leginkább megmagyarázni, miért értékelik a társadalomban egyes állatokat jobban, mint másokat?"
      },
      options: {
        en: [
          "Cultural norms and habits",
          "Scientific measures of intelligence",
          "Random chance",
          "Their size or appearance"
        ],
        es: [
          "Normas y hábitos culturales",
          "Medidas científicas de inteligencia",
          "Azar",
          "Su tamaño o apariencia"
        ],
        hu: [
          "Kulturális normák és szokások",
          "Tudományos intelligenciamérések",
          "Véletlen",
          "Méretük vagy kinézetük"
        ]
      },
      correctIndex: 0
    }
  },
{
    title: {
      en: "Land and Livestock",
      es: "Tierra y ganado",
      hu: "Föld és állattartás"
    },
    content: {
      en: "Some people wonder if killing plants is the same as killing animals. Science shows that plants don’t have a brain or central nervous system, so they don’t experience pain like animals do. Another important fact is that around 77% of global agricultural land is used to raise livestock, even though farm animals provide only about 18% of the world’s calories and 37% of its protein. This means most plants are used inefficiently to feed animals instead of people.",
      es: "Algunas personas se preguntan si matar plantas es lo mismo que matar animales. La ciencia demuestra que las plantas no tienen cerebro ni sistema nervioso central, por lo que no sienten dolor como los animales. Otro hecho importante es que alrededor del 77% de la tierra agrícola mundial se utiliza para criar ganado, aunque los animales de granja solo proporcionan aproximadamente el 18% de las calorías y el 37% de la proteína mundial. Esto significa que la mayoría de las plantas se usan de manera ineficiente para alimentar animales en lugar de personas.",
      hu: "Néhányan azt kérdezik, hogy a növények elpusztítása ugyanaz-e, mint az állatoké. A tudomány szerint a növényeknek nincs agyuk vagy központi idegrendszerük, így nem éreznek fájdalmat, mint az állatok. Egy másik fontos tény, hogy a globális mezőgazdasági terület körülbelül 77%-át állattenyésztésre használják, bár a haszonállatok csak a világ kalóriáinak kb. 18%-át és fehérjéjének 37%-át biztosítják. Ez azt jelenti, hogy a legtöbb növényt hatékonytalanul használják az állatok etetésére az emberek helyett."
    },
    question: {
      text: {
        en: "What percentage of global agricultural land is used for livestock?",
        es: "¿Qué porcentaje de la tierra agrícola mundial se utiliza para el ganado?",
        hu: "A globális mezőgazdasági terület hány százalékát használják állattenyésztésre?"
      },
      options: {
        en: [
          "36%",
          "50%",
          "77%",
          "90%"
        ],
        es: [
          "36%",
          "50%",
          "77%",
          "90%"
        ],
        hu: [
          "36%",
          "50%",
          "77%",
          "90%"
        ]
      },
      correctIndex: 2
    }
  },
  {
    title: {
      en: "Chickens’ Minds",
      es: "La mente de las gallinas",
      hu: "A csirkék elméje"
    },
    content: {
      en: "Chickens are far more intelligent and emotional than many people realize. They can recognize over 100 individual faces, both of other chickens and humans, communicate using dozens of distinct vocalizations, and even plan for the future. Hens show empathy by caring for their chicks and responding to their distress. Despite being underestimated, chickens have rich social lives and complex minds, reminding us that intelligence and emotion are not limited to mammals.",
      es: "Las gallinas son mucho más inteligentes y emocionales de lo que muchos piensan. Pueden reconocer más de 100 caras individuales, tanto de otras gallinas como de humanos, comunicarse mediante decenas de vocalizaciones distintas e incluso planificar para el futuro. Las gallinas muestran empatía cuidando a sus polluelos y respondiendo a su angustia. A pesar de ser subestimadas, las gallinas tienen vidas sociales ricas y mentes complejas, recordándonos que la inteligencia y la emoción no se limitan a los mamíferos.",
      hu: "A csirkék sokkal intelligensebbek és érzelmesebbek, mint azt sokan gondolják. Több mint 100 egyedi arcot ismernek fel, más csirkákét és emberekét egyaránt, több tucat különböző hangadással kommunikálnak, és még a jövőre is terveznek. A tyúkok empátiát mutatnak, amikor gondoskodnak a csibéikről és reagálnak azok distresszére. A csirkéket alábecsülik, de gazdag társas életük és összetett elméjük van, emlékeztetve minket arra, hogy az intelligencia és az érzelem nem korlátozódik az emlősökre."
    },
    question: {
      text: {
        en: "Which of these is true about chickens?",
        es: "¿Cuál de estas afirmaciones es cierta sobre las gallinas?",
        hu: "Melyik állítás igaz a csirkékre?"
      },
      options: {
        en: [
          "They have no social awareness",
          "They can recognize individual faces and communicate",
          "They act purely on instinct",
          "They cannot plan ahead"
        ],
        es: [
          "No tienen conciencia social",
          "Pueden reconocer caras individuales y comunicarse",
          "Actúan puramente por instinto",
          "No pueden planificar el futuro"
        ],
        hu: [
          "Nincs társas tudatosságuk",
          "Fel tudják ismerni az egyedi arcokat és kommunikálni tudnak",
          "Csak ösztönösen cselekednek",
          "Nem tudnak előre tervezni"
        ]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Impact on Wildlife",
      es: "Impacto sobre la fauna silvestre",
      hu: "Hatás a vadon élő állatokra"
    },
    content: {
      en: "When we imagine monkeys swinging through trees, sea turtles gliding in the ocean, or dolphins playing in waves, we picture a healthy planet. Yet much of the natural world these animals rely on is disappearing, largely due to animal agriculture. Around 77% of global agricultural land is used for livestock grazing or feed production, driving deforestation in rainforests like the Amazon and displacing countless monkeys and other species. Runoff from animal farms pollutes rivers and oceans, harming marine life such as turtles and dolphins.",
      es: "Cuando imaginamos monos balanceándose entre los árboles, tortugas marinas deslizándose en el océano o delfines jugando en las olas, imaginamos un planeta saludable. Sin embargo, gran parte del mundo natural del que dependen estos animales está desapareciendo, en gran parte debido a la agricultura animal. Alrededor del 77% de la tierra agrícola mundial se utiliza para pastoreo o producción de alimento para el ganado, provocando la deforestación de selvas como el Amazonas y desplazando a innumerables monos y otras especies. El escurrimiento de las granjas de animales contamina ríos y océanos, dañando la vida marina como tortugas y delfines.",
      hu: "Amikor majmokat képzelünk el, ahogy fákról hintáznak, tengeri teknősöket, ahogy az óceánban siklanak, vagy delfineket, ahogy a hullámokban játszanak, egészséges bolygót látunk. Azonban az a természetes világ, amire ezek az állatok támaszkodnak, nagyrészt eltűnik, főként az állattenyésztés miatt. A globális mezőgazdasági terület körülbelül 77%-át legeltetésre vagy takarmánytermelésre használják, ami erdőirtást okoz olyan esőerdőkben, mint az Amazonas, és elűz számtalan majmot és más fajokat. Az állatfarmokból származó vízszennyezés folyókat és óceánokat szennyez, károsítva a tengeri életet, például teknősöket és delfineket."
    },
    question: {
      text: {
        en: "How does animal agriculture harm wild animals like monkeys, turtles, and dolphins?",
        es: "¿Cómo daña la agricultura animal a los animales salvajes como monos, tortugas y delfines?",
        hu: "Hogyan károsítja az állattenyésztés a vadon élő állatokat, például majmokat, teknősöket és delfineket?"
      },
      options: {
        en: [
          "By destroying their habitats and polluting ecosystems",
          "By helping forests grow",
          "By creating more ocean life",
          "It has no effect"
        ],
        es: [
          "Destruyendo sus hábitats y contaminando los ecosistemas",
          "Ayudando a que crezcan los bosques",
          "Creando más vida oceánica",
          "No tiene efecto"
        ],
        hu: [
          "Az élőhelyük elpusztításával és az ökoszisztémák szennyezésével",
          "Az erdők növekedésének elősegítésével",
          "Több óceáni élet létrehozásával",
          "Nincs hatása"
        ]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Nature’s Intelligence",
      es: "La inteligencia de la naturaleza",
      hu: "A természet intelligenciája"
    },
    content: {
      en: "We often think humans are the smartest beings on Earth, but nature tells a humbling story. Chimpanzees have been shown to have better short-term memory than humans, crows use tools and plan for the future, and elephants communicate across miles through vibrations. Each species demonstrates unique and remarkable abilities, reminding us that intelligence comes in many forms — and humans are just one part of a much bigger picture.",
      es: "A menudo pensamos que los humanos son los seres más inteligentes de la Tierra, pero la naturaleza cuenta una historia humilde. Se ha demostrado que los chimpancés tienen mejor memoria a corto plazo que los humanos, los cuervos usan herramientas y planifican para el futuro, y los elefantes se comunican a kilómetros de distancia mediante vibraciones. Cada especie demuestra habilidades únicas y notables, recordándonos que la inteligencia viene en muchas formas —y los humanos son solo una parte de un panorama mucho más grande.",
      hu: "Gyakran azt gondoljuk, hogy az emberek a legokosabb lények a Földön, de a természet egy alázatos történetet mesél. Bizonyított, hogy a csimpánzok rövid távú memóriája jobb, mint az embereké, a varjak eszközöket használnak és a jövőre terveznek, az elefántok pedig mérföldekre kommunikálnak rezgésekkel. Minden faj egyedi és figyelemre méltó képességeket mutat, emlékeztetve minket arra, hogy az intelligencia sok formában jelenik meg — az emberek csupán egy része a sokkal nagyobb képnek."
    },
    question: {
      text: {
        en: "Which animal is proven to have better short-term memory than humans?",
        es: "¿Qué animal ha demostrado tener mejor memoria a corto plazo que los humanos?",
        hu: "Melyik állatnak bizonyítottan jobb a rövid távú memóriája, mint az embernek?"
      },
      options: {
        en: [
          "Crows",
          "Chimpanzees",
          "Dogs"
        ],
        es: [
          "Cuervos",
          "Chimpancés",
          "Perros"
        ],
        hu: [
          "Varjak",
          "Csimpánzok",
          "Kutyák"
        ]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Choosing Compassion",
      es: "Eligiendo la compasión",
      hu: "Az együttérzés választása"
    },
    content: {
      en: "Most of us recognize that animals have feelings, unique personalities, and the ability to experience joy or fear. They are innocent, vulnerable, and, like us, they want to live. Knowing this raises an important question: do we want to contribute to the exploitation of sentient beings, or choose actions rooted in compassion instead?",
      es: "La mayoría de nosotros reconocemos que los animales tienen sentimientos, personalidades únicas y la capacidad de experimentar alegría o miedo. Son inocentes, vulnerables y, al igual que nosotros, quieren vivir. Saber esto plantea una pregunta importante: ¿queremos contribuir a la explotación de seres sensibles o elegir acciones basadas en la compasión?",
      hu: "A legtöbben elismerjük, hogy az állatoknak vannak érzéseik, egyedi személyiségük, és képesek örömöt vagy félelmet átélni. Ártatlanok, sebezhetőek, és, mint mi, élni akarnak. Ennek ismerete felvet egy fontos kérdést: szeretnénk hozzájárulni az érző lények kizsákmányolásához, vagy inkább az együttérzésen alapuló cselekedeteket választani?"
    },
    question: {
      text: {
        en: "What does this lesson encourage us to reflect on?",
        es: "¿Sobre qué nos invita a reflexionar esta lección?",
        hu: "Mire késztet minket ez a lecke a reflektálásra?"
      },
      options: {
        en: [
          "Whether our actions align with our compassion",
          "If animals have no feelings",
          "How to eat more meat",
          "Whether guilt is necessary for change"
        ],
        es: [
          "Si nuestras acciones están alineadas con nuestra compasión",
          "Si los animales no tienen sentimientos",
          "Cómo comer más carne",
          "Si la culpa es necesaria para el cambio"
        ],
        hu: [
          "Hogy a cselekedeteink összhangban vannak-e az együttérzésünkkel",
          "Hogy az állatoknak nincs érzése",
          "Hogyan együnk több húst",
          "Hogy a bűntudat szükséges-e a változáshoz"
        ]
      },
      correctIndex: 0
    }
  },
{
    title: {
      en: "Profit vs Life",
      es: "Beneficio vs Vida",
      hu: "Profit vs Élet"
    },
    content: {
      en: "Imagine running a small chicken farm. A chick hatches — would you raise it if it’s male? Male chicks don’t lay eggs and are often seen as ‘unprofitable.’ This scenario creates a moral tension: either invest resources in animals that won’t generate returns or end their lives for economic reasons. Reflecting on this helps us weigh profit against the intrinsic value of an individual life.",
      es: "Imagina que diriges una pequeña granja de pollos. Nace un pollito: ¿lo criarías si es macho? Los pollitos machos no ponen huevos y a menudo se consideran 'no rentables'. Este escenario crea una tensión moral: invertir recursos en animales que no generarán beneficios o acabar con sus vidas por razones económicas. Reflexionar sobre esto nos ayuda a sopesar el beneficio económico frente al valor intrínseco de la vida de un individuo.",
      hu: "Képzeld el, hogy egy kis csirkefarmot vezetsz. Kikel egy csibe — felnevelnéd, ha hím? A hím csibék nem tojnak tojást, ezért gyakran „nem nyereségesnek” tekintik őket. Ez a helyzet morális feszültséget teremt: vagy erőforrást fektetsz olyan állatokba, amelyek nem hoznak hasznot, vagy gazdasági okokból életed végére juttatod őket. A reflexió segít mérlegelni a profitot az egyes állatok belső értékével szemben."
    },
    question: {
      text: {
        en: "What moral tension does the farm-owner scenario highlight?",
        es: "¿Qué tensión moral destaca el escenario del granjero?",
        hu: "Milyen morális feszültséget emel ki a gazda helyzete?"
      },
      options: {
        en: [
          "Profit vs. the intrinsic value of an individual animal’s life",
          "Whether eggs taste better from certain breeds",
          "How to increase egg production quickly",
          "The best feed to maximize profits"
        ],
        es: [
          "Beneficio vs. el valor intrínseco de la vida de un animal individual",
          "Si los huevos saben mejor de ciertas razas",
          "Cómo aumentar la producción de huevos rápidamente",
          "El mejor alimento para maximizar beneficios"
        ],
        hu: [
          "Profit vs. az egyes állatok belső értéke",
          "Hogy bizonyos fajták tojása ízletesebb-e",
          "Hogyan növeljük gyorsan a tojástermelést",
          "A legjobb takarmány a profit maximalizálásához"
        ]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Invisible Suffering",
      es: "Sufrimiento invisible",
      hu: "Láthatatlan szenvedés"
    },
    content: {
      en: "In our society, animals are often treated as products rather than sentient beings. The price of meat, dairy, or eggs reflects only production, transport, and sale costs — it ignores suffering, confinement, and shortened lives. By reducing animal-based consumption or choosing plant-based alternatives, we acknowledge the intrinsic value of animals beyond any price tag.",
      es: "En nuestra sociedad, los animales a menudo se tratan como productos en lugar de seres sensibles. El precio de la carne, los lácteos o los huevos refleja solo los costos de producción, transporte y venta — ignora el sufrimiento, el confinamiento y la vida acortada. Al reducir el consumo de productos animales o elegir alternativas vegetales, reconocemos el valor intrínseco de los animales más allá de cualquier precio.",
      hu: "Társadalmunkban az állatokat gyakran termékként kezelik, nem érző lényekként. A hús, tejtermék vagy tojás ára csak a termelés, szállítás és eladás költségeit tükrözi — figyelmen kívül hagyja a szenvedést, a bezártságot és a rövidített életet. Ha csökkentjük az állati eredetű termékek fogyasztását vagy növényi alternatívákat választunk, elismerjük az állatok belső értékét a pénzértéken túl."
    },
    question: {
      text: {
        en: "What does the price of animal products fail to account for?",
        es: "¿Qué no refleja el precio de los productos animales?",
        hu: "Mit nem vesz figyelembe az állati termékek ára?"
      },
      options: {
        en: [
          "The cost of transporting the products",
          "The suffering and loss of freedom experienced by animals",
          "The packaging and marketing costs",
          "The calories provided by the product"
        ],
        es: [
          "El costo de transporte de los productos",
          "El sufrimiento y la pérdida de libertad que experimentan los animales",
          "Los costos de embalaje y marketing",
          "Las calorías proporcionadas por el producto"
        ],
        hu: [
          "A termékek szállítási költségét",
          "Az állatok által elszenvedett szenvedést és szabadságvesztést",
          "A csomagolás és marketing költségeit",
          "A termék által biztosított kalóriákat"
        ]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Cramped Lives",
      es: "Vidas hacinadas",
      hu: "Zsúfolt élet"
    },
    content: {
      en: "Many farm animals spend their entire lives confined. Cows often stand on hard floors with limited movement; mother pigs are kept in tiny gestation crates; hens may have space smaller than an A4 sheet. These conditions prevent natural behaviors like walking, nursing, or stretching.",
      es: "Muchos animales de granja pasan toda su vida confinados. Las vacas a menudo están de pie en suelos duros con movimiento limitado; las cerdas madre se mantienen en pequeñas jaulas de gestación; las gallinas pueden tener un espacio más pequeño que una hoja A4. Estas condiciones impiden comportamientos naturales como caminar, amamantar o estirarse.",
      hu: "Sok haszonállat egész életét bezárva tölti. A tehenek gyakran kemény padlón állnak korlátozott mozgással; a kocák apró vemhességi ketrecekben vannak; a tyúkoknak lehet kisebb helyük, mint egy A4-es lap. Ezek a körülmények megakadályozzák a természetes viselkedéseket, mint a járás, szoptatás vagy nyújtózkodás."
    },
    question: {
      text: {
        en: "How much space does a hen typically have in a battery cage?",
        es: "¿Cuánto espacio tiene típicamente una gallina en una jaula en batería?",
        hu: "Mekkora helye van egy tyúknak tipikusan egy ketrecben?"
      },
      options: {
        en: [
          "Around the size of an A4 sheet of paper",
          "About 2 square meters",
          "A full open yard",
          "Half a room"
        ],
        es: [
          "Alrededor del tamaño de una hoja A4",
          "Unos 2 metros cuadrados",
          "Un patio completo",
          "Medio cuarto"
        ],
        hu: [
          "Kb. egy A4-es lap méretű",
          "Kb. 2 négyzetméter",
          "Egy teljes udvar",
          "Fél szoba"
        ]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Rapid Growth",
      es: "Crecimiento rápido",
      hu: "Gyors növekedés"
    },
    content: {
      en: "Modern broiler chickens grow extremely fast, reaching market weight in just 5–7 weeks. Their wild ancestors grow naturally, live 5–10 years, and weigh much less. This rapid growth causes heart failure, leg deformities, and organ issues, highlighting how industrial breeding prioritizes human consumption over natural animal welfare.",
      es: "Los pollos de engorde modernos crecen extremadamente rápido, alcanzando el peso de mercado en solo 5–7 semanas. Sus antepasados salvajes crecen de manera natural, viven de 5 a 10 años y pesan mucho menos. Este crecimiento rápido provoca insuficiencia cardíaca, deformidades en las patas y problemas de órganos, destacando cómo la cría industrial prioriza el consumo humano sobre el bienestar animal natural.",
      hu: "A modern broilerek rendkívül gyorsan nőnek, mindössze 5–7 hét alatt elérik a piaci súlyt. Vad őseik természetesen nőnek, 5–10 évig élnek és sokkal kevesebbet nyomnak. Ez a gyors növekedés szívproblémákat, lábdeformitásokat és szervi problémákat okoz, kiemelve, hogy az ipari tenyésztés az emberi fogyasztást helyezi előtérbe a természetes állatjólét helyett."
    },
    question: {
      text: {
        en: "How does the lifespan and weight of factory-farmed chickens compare to their wild relatives?",
        es: "¿Cómo se compara la vida útil y el peso de los pollos de granja con sus parientes salvajes?",
        hu: "Hogyan viszonyul a tenyésztett csirkék élettartama és súlya a vad rokonaikhoz képest?"
      },
      options: {
        en: [
          "They grow slower and live longer than wild chickens",
          "They have the same growth rate and lifespan as wild chickens",
          "They live longer but weigh less than wild chickens",
          "They grow much faster, weigh 4–5 times more, and have shorter lifespans"
        ],
        es: [
          "Crecen más lento y viven más que los pollos salvajes",
          "Tienen la misma tasa de crecimiento y esperanza de vida que los pollos salvajes",
          "Viven más pero pesan menos que los pollos salvajes",
          "Crecen mucho más rápido, pesan 4–5 veces más y tienen vidas más cortas"
        ],
        hu: [
          "Lassabban nőnek és tovább élnek, mint a vad csirkék",
          "Ugyanolyan növekedési ütemük és élettartamuk van, mint a vad csirkéknek",
          "Hosszabb életűek, de könnyebbek, mint a vad csirkék",
          "Sokkal gyorsabban nőnek, 4–5-ször többet nyomnak, és rövidebb élettartamúak"
        ]
      },
      correctIndex: 3
    }
  },
  {
    title: {
      en: "Life vs Suffering",
      es: "Vida vs Sufrimiento",
      hu: "Élet vs Szenvedés"
    },
    content: {
      en: "Would you prefer a short life in freedom or a longer life filled with suffering? Many farmed animals endure intense pain from overcrowding, selective breeding, and confinement. This question helps us consider whether a longer life is truly valuable if it comes with suffering.",
      es: "¿Preferirías una vida corta en libertad o una vida más larga llena de sufrimiento? Muchos animales de granja soportan un dolor intenso debido al hacinamiento, la cría selectiva y el confinamiento. Esta pregunta nos ayuda a considerar si una vida más larga realmente vale la pena si viene acompañada de sufrimiento.",
      hu: "Egy rövid, szabad életet választanál, vagy egy hosszabb, szenvedéssel teli életet? Sok haszonállat intenzív fájdalmat él át a túlzsúfoltság, a szelektív tenyésztés és a bezártság miatt. Ez a kérdés segít megfontolni, hogy valóban értékes-e egy hosszabb élet, ha szenvedéssel jár."
    },
    question: {
      text: {
        en: "What dilemma does this lesson highlight?",
        es: "¿Qué dilema destaca esta lección?",
        hu: "Milyen dilemmát emel ki ez a lecke?"
      },
      options: {
        en: [
          "Animals always prefer being confined",
          "The trade-off between a short life in freedom and a longer life in suffering",
          "Longer life is always better, regardless of conditions",
          "Suffering has no impact on life value"
        ],
        es: [
          "Los animales siempre prefieren estar confinados",
          "El dilema entre una vida corta en libertad y una vida más larga con sufrimiento",
          "La vida más larga siempre es mejor, independientemente de las condiciones",
          "El sufrimiento no afecta el valor de la vida"
        ],
        hu: [
          "Az állatok mindig a bezártságot választják",
          "A rövid, szabad élet és a hosszabb, szenvedéssel teli élet közötti kompromisszum",
          "A hosszabb élet mindig jobb, függetlenül a körülményektől",
          "A szenvedésnek nincs hatása az élet értékére"
        ]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Labels Can Mislead",
      es: "Las etiquetas pueden engañar",
      hu: "A címkék megtéveszthetnek"
    },
    content: {
      en: "Many people choose 'free-range' or 'cage-free' products thinking animals don’t suffer. Yet labels can be misleading, and standards vary widely. Being aware of this allows us to make more compassionate choices, either by verifying sources or opting for plant-based alternatives.",
      es: "Muchas personas eligen productos 'de corral' o 'libres de jaula' pensando que los animales no sufren. Sin embargo, las etiquetas pueden ser engañosas y los estándares varían ampliamente. Ser conscientes de esto nos permite tomar decisiones más compasivas, ya sea verificando las fuentes o eligiendo alternativas vegetales.",
      hu: "Sokan a „szabadon tartott” vagy „ketrecmentes” termékeket választják, azt gondolva, hogy az állatok nem szenvednek. Azonban a címkék megtévesztőek lehetnek, és a szabványok széles körben eltérnek. Ennek ismerete lehetővé teszi, hogy együttérzőbb döntéseket hozzunk, akár a források ellenőrzésével, akár növényi alternatívák választásával."
    },
    question: {
      text: {
        en: "Why might 'free-range' labels not guarantee that animals lived without suffering?",
        es: "¿Por qué las etiquetas 'de corral' podrían no garantizar que los animales vivieron sin sufrir?",
        hu: "Miért nem garantálhatják a „szabadon tartott” címkék, hogy az állatok szenvedés nélkül éltek?"
      },
      options: {
        en: [
          "All animals live perfectly",
          "Plant-based products are worse",
          "Standards vary and labels can be misleading",
          "Free-range always means happy animals"
        ],
        es: [
          "Todos los animales viven perfectamente",
          "Los productos vegetales son peores",
          "Los estándares varían y las etiquetas pueden ser engañosas",
          "De corral siempre significa animales felices"
        ],
        hu: [
          "Minden állat tökéletesen él",
          "A növényi termékek rosszabbak",
          "A szabványok változnak, és a címkék megtévesztőek lehetnek",
          "A szabadon tartott mindig boldog állatot jelent"
        ]
      },
      correctIndex: 2
    }
  },
  {
    title: {
      en: "Genetic Manipulation",
      es: "Manipulación genética",
      hu: "Genetikai manipuláció"
    },
    content: {
      en: "If humans could design animals to produce more eggs, milk, or meat, we might do it for profit. Genetic manipulation can increase stress, health problems, and shorten natural lifespans. Buying such products indirectly supports these interventions.",
      es: "Si los humanos pudieran diseñar animales para producir más huevos, leche o carne, podríamos hacerlo por lucro. La manipulación genética puede aumentar el estrés, los problemas de salud y acortar la vida natural. Comprar estos productos apoya indirectamente estas intervenciones.",
      hu: "Ha az emberek úgy tudnák tervezni az állatokat, hogy több tojást, tejet vagy húst termeljenek, talán a profit érdekében tennék. A genetikai manipuláció növelheti a stresszt, az egészségügyi problémákat és lerövidítheti a természetes élettartamot. Az ilyen termékek vásárlása közvetve támogatja ezeket a beavatkozásokat."
    },
    question: {
      text: {
        en: "What ethical concern does genetic manipulation in farmed animals raise?",
        es: "¿Qué preocupación ética plantea la manipulación genética en los animales de granja?",
        hu: "Milyen etikai aggályt vet fel a genetikai manipuláció a haszonállatoknál?"
      },
      options: {
        en: [
          "It makes animals happier and healthier",
          "It has no impact on animal welfare",
          "It prioritizes human profit over animal health and natural life",
          "It only affects the taste of products"
        ],
        es: [
          "Hace que los animales sean más felices y saludables",
          "No tiene impacto en el bienestar animal",
          "Prioriza el beneficio humano sobre la salud y la vida natural de los animales",
          "Solo afecta al sabor de los productos"
        ],
        hu: [
          "Boldogabbá és egészségesebbé teszi az állatokat",
          "Nincs hatással az állatjólétre",
          "Az emberi profitot helyezi előtérbe az állatok egészsége és természetes élete felett",
          "Csak a termék ízét befolyásolja"
        ]
      },
      correctIndex: 2
    }
  },
  {
    title: {
      en: "Free-Range Challenges",
      es: "Desafíos de los productos de corral",
      hu: "Szabadon tartott termékek kihívásai"
    },
    content: {
      en: "Producing truly free-range animal products requires significant land. For example, 1,000 hens need 2.5 acres (about 108 sq ft per bird). Factory farms can house thousands in a fraction of that space. While free-range prioritizes welfare, land limitations and costs make scaling difficult.",
      es: "Producir productos animales realmente de corral requiere una cantidad significativa de tierra. Por ejemplo, 1.000 gallinas necesitan 2,5 acres (aproximadamente 108 pies cuadrados por ave). Las granjas industriales pueden alojar a miles en una fracción de ese espacio. Si bien el corral prioriza el bienestar, las limitaciones de tierra y los costos dificultan la ampliación.",
      hu: "A valóban szabadon tartott állati termékek előállítása jelentős földterületet igényel. Például 1000 tyúkhoz 2,5 hektár kell (kb. 108 négyzetláb/tyúk). Az ipari farmok ezreket tudnak elhelyezni ennek a töredékén. Bár a szabad tartás előtérbe helyezi a jólétet, a föld korlátozottsága és a költségek megnehezítik a skálázást."
    },
    question: {
      text: {
        en: "What is a significant challenge in producing free-range animal products?",
        es: "¿Cuál es un desafío importante al producir productos animales de corral?",
        hu: "Mi a jelentős kihívás a szabadon tartott állati termékek előállításában?"
      },
      options: {
        en: [
          "Lower operational costs",
          "Limited land availability",
          "Higher animal welfare standards",
          "Increased scalability"
        ],
        es: [
          "Menores costos operativos",
          "Disponibilidad limitada de tierra",
          "Estándares más altos de bienestar animal",
          "Mayor escalabilidad"
        ],
        hu: [
          "Alacsonyabb működési költségek",
          "Korlátozott földterület",
          "Magasabb állatjóléti szabványok",
          "Növelt skálázhatóság"
        ]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Suffering vs Death",
      es: "Sufrimiento vs Muerte",
      hu: "Szenvedés vs Halál"
    },
    content: {
      en: "Is it worse to kill an animal immediately or force it to live in extreme confinement and suffering? Philosophers argue that prolonged suffering, inability to express natural behaviors, and stressful conditions can be far worse than death. Factory farms often place animals in this second scenario.",
      es: "¿Es peor matar a un animal de inmediato o obligarlo a vivir en confinamiento extremo y sufrimiento? Los filósofos argumentan que el sufrimiento prolongado, la incapacidad de expresar comportamientos naturales y las condiciones estresantes pueden ser mucho peores que la muerte. Las granjas industriales a menudo colocan a los animales en este segundo escenario.",
      hu: "Rosszabb-e az állatot azonnal megölni, vagy arra kényszeríteni, hogy extrém bezártságban és szenvedésben éljen? A filozófusok szerint a hosszan tartó szenvedés, a természetes viselkedés kifejezésének képtelensége és a stresszes körülmények sokkal rosszabbak lehetnek a halálnál. Az ipari farmok gyakran ebbe a második helyzetbe helyezik az állatokat."
    },
    question: {
      text: {
        en: "Which scenario is often considered worse for an animal?",
        es: "¿Qué escenario se considera a menudo peor para un animal?",
        hu: "Melyik helyzetet tartják gyakran rosszabbnak az állat számára?"
      },
      options: {
        en: [
          "Being killed immediately",
          "Living a life in extreme confinement and suffering",
          "Being free in nature",
          "Living with human companions who love them"
        ],
        es: [
          "Ser matado inmediatamente",
          "Vivir una vida en confinamiento extremo y sufrimiento",
          "Ser libre en la naturaleza",
          "Vivir con humanos que los aman"
        ],
        hu: [
          "Azonnal megölve lenni",
          "Extrém bezártságban és szenvedésben élni",
          "Szabadon élni a természetben",
          "Emberek társaságában élni, akik szeretik őket"
        ]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Egg Overproduction",
      es: "Sobreproducción de huevos",
      hu: "Tojás túltermelés"
    },
    content: {
      en: "Modern egg-laying hens are bred to produce hundreds of eggs per year — over 300 compared to 10–15 for wild hens. This intense production causes stress, weakened bones, organ failure, and exhaustion. Understanding this highlights the ethical impact of selective breeding.",
      es: "Las gallinas ponedoras modernas se crían para producir cientos de huevos al año: más de 300 frente a 10–15 para las gallinas salvajes. Esta producción intensa causa estrés, huesos debilitados, fallas de órganos y agotamiento. Entender esto destaca el impacto ético de la cría selectiva.",
      hu: "A modern tojótyúkokat úgy tenyésztik, hogy évente több száz tojást hozzanak — több mint 300-at a vad tyúkok 10–15 tojásához képest. Ez az intenzív termelés stresszt, gyengült csontokat, szervi problémákat és kimerültséget okoz. Ennek megértése kiemeli a szelektív tenyésztés etikai hatását."
    },
    question: {
      text: {
        en: "How many eggs can a factory-farmed hen lay compared to a wild hen?",
        es: "¿Cuántos huevos puede poner una gallina de granja en comparación con una gallina salvaje?",
        hu: "Hány tojást tud tojni egy tenyésztett tyúk a vad tyúkhoz képest?"
      },
      options: {
        en: [
          "50 eggs per year vs. 100 eggs per year",
          "100 eggs per year vs. 200 eggs per year",
          "10–15 eggs per year vs. over 300 eggs per year",
          "Both lay about the same amount"
        ],
        es: [
          "50 huevos al año vs. 100 huevos al año",
          "100 huevos al año vs. 200 huevos al año",
          "10–15 huevos al año vs. más de 300 huevos al año",
          "Ambas ponen aproximadamente la misma cantidad"
        ],
        hu: [
          "Évente 50 tojás vs. évente 100 tojás",
          "Évente 100 tojás vs. évente 200 tojás",
          "Évente 10–15 tojás vs. évente több mint 300 tojás",
          "Mindkettő körülbelül ugyanannyit toj"
        ]
      },
      correctIndex: 2
    }
  },
  {
    title: {
      en: "Dairy Separation",
      es: "Separación en la leche",
      hu: "Tejipari elkülönítés"
    },
    content: {
      en: "Mother cows are social and form strong bonds with their calves. In the dairy industry, calves are often separated within hours or days to collect milk for humans. This causes immense stress for both mother and calf. Repeated impregnation ensures continuous milk production, while calves may be raised for veal or dairy replacement.",
      es: "Las vacas madres son sociales y forman fuertes vínculos con sus terneros. En la industria láctea, los terneros suelen separarse a las pocas horas o días para recolectar leche para los humanos. Esto causa un estrés inmenso tanto para la madre como para el ternero. La inseminación repetida asegura una producción continua de leche, mientras que los terneros pueden criarse para ternera o reemplazo lácteo.",
      hu: "Az anyatehenek társas lények és erős kötelékeket alakítanak ki borjaikkal. A tejiparban a borjakat gyakran órákon vagy napokon belül elválasztják, hogy az emberek számára tejet gyűjtsenek. Ez hatalmas stresszt okoz mind az anyának, mind a borjának. Az ismételt vemhesség folyamatos tejtermelést biztosít, miközben a borjakat borjúhúsra vagy tejpótlásra nevelhetik."
    },
    question: {
      text: {
        en: "Why is the separation of calves from their mothers in the dairy industry harmful?",
        es: "¿Por qué es perjudicial la separación de los terneros de sus madres en la industria láctea?",
        hu: "Miért káros a borjak elválasztása az anyjuktól a tejiparban?"
      },
      options: {
        en: [
          "It increases milk production",
          "Cows are highly emotional and form strong bonds with their calves",
          "It helps the calf grow faster",
          "It is only done in small farms"
        ],
        es: [
          "Aumenta la producción de leche",
          "Las vacas son muy emocionales y forman fuertes vínculos con sus terneros",
          "Ayuda a que el ternero crezca más rápido",
          "Solo se hace en granjas pequeñas"
        ],
        hu: [
          "Növeli a tejtermelést",
          "A tehenek nagyon érzelmesek és erős kötelékeket alakítanak ki borjaikkal",
          "Segíti a borjú gyorsabb növekedését",
          "Csak kis farmokon történik"
        ]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Male Calf Fate",
      es: "Destino del ternero macho",
      hu: "A hím borjak sorsa"
    },
    content: {
      en: "In dairy farming, male calves are considered 'by-products' because they cannot produce milk. They are sold for veal or beef under harsh conditions, often separated from their mothers and subjected to painful procedures. This shows that exploitation in dairy affects both females and males.",
      es: "En la ganadería lechera, los terneros machos se consideran 'subproductos' porque no pueden producir leche. Se venden para carne de ternera o vacuno en condiciones duras, a menudo separados de sus madres y sometidos a procedimientos dolorosos. Esto muestra que la explotación en la leche afecta tanto a hembras como a machos.",
      hu: "A tejtermelő farmokon a hím borjakat „mellékterméknek” tekintik, mert nem tudnak tejet adni. Kemény körülmények között adják el borjú- vagy marhahúsnak, gyakran elválasztják őket anyjuktól és fájdalmas eljárásoknak vetik alá. Ez mutatja, hogy a tejipari kizsákmányolás mindkét nemet érinti."
    },
    question: {
      text: {
        en: "What usually happens to male calves in the dairy industry?",
        es: "¿Qué suele suceder con los terneros machos en la industria láctea?",
        hu: "Mi történik általában a hím borjakkal a tejiparban?"
      },
      options: {
        en: [
          "They become dairy cows later",
          "They are kept as pets on the farm",
          "They are allowed to live freely on pastures",
          "They are sold for veal or beef under harsh conditions"
        ],
        es: [
          "Más tarde se convierten en vacas lecheras",
          "Se mantienen como mascotas en la granja",
          "Se les permite vivir libremente en los pastos",
          "Se venden para ternera o carne bajo condiciones duras"
        ],
        hu: [
          "Később tejtehenekké válnak",
          "Háziállatként tartják a farmon",
          "Szabadon élhetnek a legelőkön",
          "Kemény körülmények között borjú- vagy marhahúsnak adják el őket"
        ]
      },
      correctIndex: 3
    }
  },
  {
    title: {
      en: "Male Chicks",
      es: "Pollitos machos",
      hu: "Hím csibék"
    },
    content: {
      en: "Male chicks in the egg industry are killed shortly after hatching because they cannot lay eggs and are considered unprofitable. Methods include maceration or gassing. This mass culling highlights how animals are viewed as production units rather than sentient beings.",
      es: "Los pollitos machos en la industria del huevo son asesinados poco después de la eclosión porque no pueden poner huevos y se consideran no rentables. Los métodos incluyen maceración o gaseado. Esta matanza masiva destaca cómo se considera a los animales unidades de producción y no seres sintientes.",
      hu: "A tojásiparban a hím csibéket a kikelés után röviddel elpusztítják, mert nem tudnak tojni és nem nyereségesek. Módszerek közé tartozik a darabolás vagy gázosítás. Ez a tömeges leölés kiemeli, hogy az állatokat termelési egységként tekintik, nem érző lényként."
    },
    question: {
      text: {
        en: "Why are male chicks in the egg industry killed shortly after hatching?",
        es: "¿Por qué se matan los pollitos machos en la industria del huevo poco después de nacer?",
        hu: "Miért ölik meg a hím csibéket a tojásiparban a kikelés után röviddel?"
      },
      options: {
        en: [
          "They cannot lay eggs and are considered unprofitable",
          "They grow too slowly for meat",
          "They fight with other chickens",
          "They are kept for breeding instead"
        ],
        es: [
          "No pueden poner huevos y se consideran no rentables",
          "Crecen demasiado despacio para carne",
          "Pelean con otros pollos",
          "Se mantienen para reproducción"
        ],
        hu: [
          "Nem tudnak tojni és nem nyereségesek",
          "Túl lassan nőnek húsnak",
          "Harcolnak más csibékkel",
          "Helyette tenyésztésre tartják őket"
        ]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Male vs Female",
      es: "Machos vs Hembras",
      hu: "Hím vs Nőstény"
    },
    content: {
      en: "Imagine being born into farming — male animals are often killed or raised under harsh conditions, while females are repeatedly bred, confined, and separated from offspring until slaughter. This scenario highlights the limited choices and suffering imposed on farmed animals.",
      es: "Imagina nacer en la agricultura: los animales machos a menudo son asesinados o criados en condiciones duras, mientras que las hembras se reproducen repetidamente, se confinan y se separan de sus crías hasta el sacrificio. Este escenario destaca las opciones limitadas y el sufrimiento impuesto a los animales de granja.",
      hu: "Képzeld el, hogy farmon születsz — a hím állatokat gyakran megölik vagy kemény körülmények között nevelik, míg a nőstényeket ismételten tenyésztik, korlátozzák, és elválasztják utódaiktól a vágásig. Ez a helyzet kiemeli a haszonállatokra kényszerített korlátozott választásokat és szenvedést."
    },
    question: {
      text: {
        en: "In the farming industry, what are typical fates of male and female animals?",
        es: "En la industria agrícola, ¿cuáles son los destinos típicos de los animales machos y hembras?",
        hu: "A farmiparban mik a tipikus sorsok a hím és nőstény állatok számára?"
      },
      options: {
        en: [
          "Males and females both live free lives on pastures",
          "Males are often killed or raised for meat; females are repeatedly bred and exploited",
          "Males become producers of milk or eggs; females are used for meat",
          "All animals are treated equally and released after birth"
        ],
        es: [
          "Machos y hembras viven libres en los pastos",
          "Los machos a menudo son sacrificados o criados para carne; las hembras se reproducen y explotan repetidamente",
          "Los machos producen leche o huevos; las hembras se usan para carne",
          "Todos los animales son tratados por igual y liberados después del nacimiento"
        ],
        hu: [
          "A hímek és a nőstények szabadon élnek a legelőkön",
          "A hímeket gyakran megölik vagy húsra nevelik; a nőstényeket ismételten tenyésztik és kizsákmányolják",
          "A hímek tejet vagy tojást termelnek; a nőstényeket húsra használják",
          "Minden állatot egyenlően kezelnek és születés után szabadon engednek"
        ]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Ethics vs Profit",
      es: "Ética vs Beneficio",
      hu: "Etika vs Profit"
    },
    content: {
      en: "If you ran a farm, would you prioritize maximizing output or respecting natural behaviors? Competition and profit often push farmers toward unethical practices. This dilemma reflects capitalism’s tension between profit and ethics.",
      es: "Si dirigieras una granja, ¿priorizarías maximizar la producción o respetar los comportamientos naturales? La competencia y el beneficio a menudo empujan a los agricultores hacia prácticas poco éticas. Este dilema refleja la tensión del capitalismo entre beneficio y ética.",
      hu: "Ha egy farmot vezetnél, a termelés maximalizálását vagy a természetes viselkedések tiszteletben tartását helyeznéd előtérbe? A verseny és a profit gyakran az etikus gyakorlatoktól eltérő cselekvésre készteti a gazdákat. Ez a dilemma a kapitalizmus profit és etika közötti feszültségét tükrözi."
    },
    question: {
      text: {
        en: "What ethical tension does this lesson explore?",
        es: "¿Qué tensión ética explora esta lección?",
        hu: "Milyen etikai feszültséget vizsgál ez a lecke?"
      },
      options: {
        en: [
          "Choosing between profit and respecting animals’ natural behaviors",
          "Deciding which breed of chicken tastes best",
          "Maximizing milk output without considering ethics",
          "Only thinking about competition in farming"
        ],
        es: [
          "Elegir entre el beneficio y respetar los comportamientos naturales de los animales",
          "Decidir qué raza de pollo sabe mejor",
          "Maximizar la producción de leche sin considerar la ética",
          "Solo pensar en la competencia en la agricultura"
        ],
        hu: [
          "A profit és az állatok természetes viselkedésének tiszteletben tartása közötti választás",
          "Dönteni, melyik csirke fajta ízlik a legjobban",
          "A tejtermelés maximalizálása etika figyelembevétele nélkül",
          "Csak a versenyre gondolni a farmon"
        ]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Lives and Suffering",
      es: "Vidas y Sufrimiento",
      hu: "Életek és szenvedés"
    },
    content: {
      en: "Roughly 2,340 kcal of chicken meat represents one broiler chicken’s life, and about 15,750 kcal of eggs equals one hen’s life (including the male chick). These numbers reflect deaths only, not suffering, yet they highlight the real impact of our choices. Reflecting on lives lost versus suffering helps us make compassionate decisions.",
      es: "Aproximadamente 2.340 kcal de carne de pollo representan la vida de un pollo de engorde, y alrededor de 15.750 kcal de huevos equivalen a la vida de una gallina (incluido el pollito macho). Estos números reflejan solo muertes, no sufrimiento, pero destacan el impacto real de nuestras decisiones. Reflexionar sobre vidas perdidas frente a sufrimiento nos ayuda a tomar decisiones compasivas.",
      hu: "Körülbelül 2 340 kcal csirkehús egy broiler csirke életét jelenti, és kb. 15 750 kcal tojás egy tyúk életét (beleértve a hím csibét is). Ezek a számok csak a halált tükrözik, nem a szenvedést, de kiemelik döntéseink valódi hatását. Az elveszett életek és a szenvedés mérlegelése segít együttérző döntéseket hozni."
    },
    question: {
      text: {
        en: "What does this lesson encourage us to consider?",
        es: "¿Qué nos anima a considerar esta lección?",
        hu: "Mit mérlegelésére ösztönöz ez a lecke?"
      },
      options: {
        en: [
          "Which animal tastes better",
          "How to cook eggs efficiently",
          "The number of lives lost and the suffering caused by our food choices",
          "Which farm is most efficient"
        ],
        es: [
          "Qué animal sabe mejor",
          "Cómo cocinar huevos eficientemente",
          "El número de vidas perdidas y el sufrimiento causado por nuestras elecciones alimentarias",
          "Qué granja es la más eficiente"
        ],
        hu: [
          "Melyik állat ízlik jobban",
          "Hogyan főzzük a tojásokat hatékonyan",
          "Az elveszett életek száma és az élelmiszer-választásaink okozta szenvedés",
          "Melyik farm a leghatékonyabb"
        ]
      },
      correctIndex: 2
    }
  },
  {
    title: {
      en: "Debeaking",
      es: "Recorte de pico",
      hu: "Csőrmegvágás"
    },
    content: {
      en: "Hens in the egg industry are often debeaked — the tip of their beak is removed to prevent pecking in crowded conditions. This is usually done shortly after hatching and often without anesthesia. While it reduces injuries, it causes pain, stress, and limits natural behaviors like pecking and eating.",
      es: "Las gallinas en la industria del huevo a menudo tienen recortado el pico: se les quita la punta del pico para prevenir picoteos en condiciones de hacinamiento. Esto generalmente se realiza poco después de la eclosión y a menudo sin anestesia. Aunque reduce lesiones, causa dolor, estrés y limita comportamientos naturales como picotear y comer.",
      hu: "A tojásiparban a tyúkok csőrét gyakran levágják — a csőr hegyét eltávolítják, hogy megakadályozzák a csipkedést zsúfolt körülmények között. Ezt általában a kikelés után végzik, gyakran érzéstelenítés nélkül. Bár csökkenti a sérüléseket, fájdalmat és stresszt okoz, valamint korlátozza a természetes viselkedéseket, például a csipkedést és az evést."
    },
    question: {
      text: {
        en: "Why are hens often debeaked in the egg industry?",
        es: "¿Por qué a menudo se les recorta el pico a las gallinas en la industria del huevo?",
        hu: "Miért vágják le gyakran a tyúkok csőrét a tojásiparban?"
      },
      options: {
        en: [
          "To prevent injuries from pecking in crowded conditions",
          "To make their beaks look nicer",
          "To help them lay more eggs",
          "To make them grow faster"
        ],
        es: [
          "Para prevenir lesiones por picoteo en condiciones de hacinamiento",
          "Para que sus picos se vean mejor",
          "Para ayudarlas a poner más huevos",
          "Para que crezcan más rápido"
        ],
        hu: [
          "A sérülések megelőzésére zsúfolt körülmények között",
          "Hogy csőrük szebb legyen",
          "Hogy több tojást rakjanak",
          "Hogy gyorsabban nőjenek"
        ]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Clothing Choices",
      es: "Elecciones de ropa",
      hu: "Ruhaválasztás"
    },
    content: {
      en: "Many people reject fur, yet leather, wool, and down are widely accepted. Considering the impact of these choices on sentient beings encourages alternatives like plant-based or synthetic materials, aligning our actions with compassion and reducing harm.",
      es: "Muchas personas rechazan la piel, pero el cuero, la lana y el plumón son ampliamente aceptados. Considerar el impacto de estas elecciones sobre seres sintientes fomenta alternativas como materiales vegetales o sintéticos, alineando nuestras acciones con la compasión y reduciendo el daño.",
      hu: "Sokan elutasítják a szőrmét, de a bőrt, gyapjút és pehelyt széles körben elfogadják. Ha mérlegeljük ezen választások hatását az érző lényekre, ösztönzi a növényi vagy szintetikus anyagok használatát, összehangolva tetteinket az együttérzéssel és csökkentve a kárt."
    },
    question: {
      text: {
        en: "What ethical consideration does this lesson highlight regarding clothing?",
        es: "¿Qué consideración ética destaca esta lección respecto a la ropa?",
        hu: "Milyen etikai szempontot emel ki ez a lecke a ruházattal kapcsolatban?"
      },
      options: {
        en: [
          "The style and fashion trends of animal products",
          "How animals are exploited in the production of leather, wool, and down",
          "Which clothing brand is the cheapest",
          "How to wash clothes more efficiently"
        ],
        es: [
          "El estilo y las tendencias de moda de los productos animales",
          "Cómo se explotan los animales en la producción de cuero, lana y plumón",
          "Qué marca de ropa es la más barata",
          "Cómo lavar la ropa más eficientemente"
        ],
        hu: [
          "Az állati termékek stílusa és divatja",
          "Hogyan használják ki az állatokat a bőr, gyapjú és pehely előállításához",
          "Melyik ruhamárka a legolcsóbb",
          "Hogyan mossuk a ruhákat hatékonyabban"
        ]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Animals as Entertainment",
      es: "Animales como entretenimiento",
      hu: "Állatok szórakoztatásra"
    },
    content: {
      en: "Zoos and circuses often use animals for entertainment rather than recognizing their needs and feelings. Animals may be kept in small enclosures, separated from their habitats, or trained through stress. Reflecting on this encourages seeking alternatives that respect animal welfare.",
      es: "Los zoológicos y circos a menudo usan animales para entretenimiento en lugar de reconocer sus necesidades y sentimientos. Los animales pueden estar en recintos pequeños, separados de sus hábitats o entrenados mediante estrés. Reflexionar sobre esto fomenta la búsqueda de alternativas que respeten el bienestar animal.",
      hu: "Az állatkertek és cirkuszok gyakran az állatokat szórakoztatásra használják, ahelyett hogy figyelembe vennék szükségleteiket és érzéseiket. Az állatokat kis kifutókban tarthatják, elválaszthatják élőhelyüktől, vagy stressz révén képezhetik. Ennek mérlegelése ösztönöz alternatívák keresésére, amelyek tiszteletben tartják az állatok jólétét."
    },
    question: {
      text: {
        en: "What is the ethical concern about zoos and circuses?",
        es: "¿Cuál es la preocupación ética sobre los zoológicos y circos?",
        hu: "Mi az etikai aggály az állatkertek és cirkuszok esetében?"
      },
      options: {
        en: [
          "How to get the best seats for a show",
          "That animals are used for entertainment and profit rather than their well-being",
          "Which animal performs the hardest tricks",
          "How to take selfies with animals"
        ],
        es: [
          "Cómo conseguir los mejores asientos para un espectáculo",
          "Que los animales se usan para entretenimiento y beneficio en lugar de su bienestar",
          "Qué animal realiza los trucos más difíciles",
          "Cómo tomarse selfies con animales"
        ],
        hu: [
          "Hogyan lehet a legjobb helyeket szerezni egy előadáshoz",
          "Az állatokat szórakoztatásra és profitra használják, nem a jólétük érdekében",
          "Melyik állat végzi a legnehezebb trükköket",
          "Hogyan készítsünk szelfit az állatokkal"
        ]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Veganism: Beyond Diet",
      es: "Veganismo: Más allá de la dieta",
      hu: "Vegán életmód: Több mint étrend"
    },
    content: {
      en: "Veganism seeks to avoid all forms of animal exploitation and cruelty, not just dietary choices. It excludes meat, dairy, eggs, leather, fur, silk, wool, and cosmetics tested on animals. The main goal is to protect animals and promote their welfare in every aspect of life.",
      es: "El veganismo busca evitar todas las formas de explotación y crueldad hacia los animales, no solo las decisiones dietéticas. Excluye carne, lácteos, huevos, cuero, piel, seda, lana y cosméticos probados en animales. El objetivo principal es proteger a los animales y promover su bienestar en todos los aspectos de la vida.",
      hu: "A vegánság célja minden állatkizsákmányolás és kegyetlenség elkerülése, nem csak az étrendi választások. Kizárja a húst, tejtermékeket, tojást, bőrt, szőrmét, selymet, gyapjút és az állatokon tesztelt kozmetikumokat. Fő célja az állatok védelme és jólétük előmozdítása az élet minden területén."
    },
    question: {
      text: {
        en: "What is the main purpose of veganism?",
        es: "¿Cuál es el objetivo principal del veganismo?",
        hu: "Mi a vegánság fő célja?"
      },
      options: {
        en: [
          "To eat only plant-based foods",
          "To avoid harming animals and reduce exploitation",
          "To follow a healthy diet plan"
        ],
        es: [
          "Comer solo alimentos de origen vegetal",
          "Evitar dañar a los animales y reducir la explotación",
          "Seguir un plan de dieta saludable"
        ],
        hu: [
          "Csak növényi alapú ételek fogyasztása",
          "Az állatok bántásának elkerülése és a kizsákmányolás csökkentése",
          "Egészséges étrend követése"
        ]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Modern Survival vs Tradition",
      es: "Supervivencia moderna vs tradición",
      hu: "Modern túlélés vs hagyomány"
    },
    content: {
      en: "While humans historically ate animals to survive, today we can easily obtain food without killing animals. True natural living means allowing animals to live freely, rather than confining them in cages or genetically modifying them for consumption.",
      es: "Aunque históricamente los humanos comían animales para sobrevivir, hoy podemos obtener alimentos fácilmente sin matar animales. Vivir de manera verdaderamente natural significa permitir que los animales vivan libres, en lugar de confinarlos en jaulas o modificarlos genéticamente para su consumo.",
      hu: "Bár az emberek történelmileg állatokat ettek a túlélésért, ma már könnyen hozzájuthatunk élelemhez állatok megölése nélkül. Az igazi természetes élet azt jelenti, hogy az állatok szabadon élhetnek, nem pedig hogy ketrecbe zárjuk vagy genetikai módosítással készítsük őket fogyasztásra."
    },
    question: {
      text: {
        en: "Why is eating animals no longer considered necessary for survival today?",
        es: "¿Por qué ya no se considera necesario comer animales para sobrevivir hoy?",
        hu: "Miért nem szükséges ma már állatokat enni a túléléshez?"
      },
      options: {
        en: [
          "Because humans evolved to eat only plants",
          "Because we can obtain food easily without killing animals",
          "Because animals in the wild no longer exist"
        ],
        es: [
          "Porque los humanos evolucionaron para comer solo plantas",
          "Porque podemos obtener alimentos fácilmente sin matar animales",
          "Porque los animales en la naturaleza ya no existen"
        ],
        hu: [
          "Mert az emberek kizárólag növényeket esznek evolúciósan",
          "Mert könnyen hozzájuthatunk ételhez állatok megölése nélkül",
          "Mert a vadon élő állatok már nem léteznek"
        ]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Plant Death vs Animal Death",
      es: "Muerte de plantas vs muerte de animales",
      hu: "Növényhalál vs állathalál"
    },
    content: {
      en: "Some argue eating plants causes crop deaths, so veganism isn’t better. In reality, feeding animals requires far more crops than eating plants directly. About 77% of agricultural land grows animal feed, providing only 18% of global calories. Producing meat causes roughly 4.3 times more crop deaths per calorie than consuming plants directly.",
      es: "Algunos argumentan que comer plantas causa muertes de cultivos, por lo que el veganismo no es mejor. En realidad, alimentar animales requiere muchos más cultivos que comer plantas directamente. Alrededor del 77% de la tierra agrícola produce alimento para animales, proporcionando solo el 18% de las calorías globales. Producir carne causa aproximadamente 4,3 veces más muertes de cultivos por caloría que consumir plantas directamente.",
      hu: "Néhányan azt állítják, hogy a növények fogyasztása termésveszteséget okoz, ezért a vegánság nem jobb. Valójában az állatok etetése sokkal több növényt igényel, mint a növények közvetlen fogyasztása. A mezőgazdasági terület körülbelül 77%-án állati takarmányt termelnek, amely csupán a világ kalóriáinak 18%-át biztosítja. A hús előállítása kalóriánként kb. 4,3-szor több növényhalált okoz, mint a növények közvetlen fogyasztása."
    },
    question: {
      text: {
        en: "Why does eating animals indirectly cause more crop deaths?",
        es: "¿Por qué comer animales causa indirectamente más muertes de cultivos?",
        hu: "Miért okoz az állatok fogyasztása közvetve több növényhalált?"
      },
      options: {
        en: [
          "Because animals eat large amounts of feed that could be eaten directly by humans",
          "Because plants are not nutritious enough for humans",
          "Because crops naturally die when humans harvest them"
        ],
        es: [
          "Porque los animales comen grandes cantidades de alimento que podrían ser consumidas directamente por los humanos",
          "Porque las plantas no son lo suficientemente nutritivas para los humanos",
          "Porque los cultivos mueren naturalmente cuando los humanos los cosechan"
        ],
        hu: [
          "Mert az állatok nagy mennyiségű takarmányt esznek, amit az emberek közvetlenül fogyaszthatnának",
          "Mert a növények nem elég táplálóak az emberek számára",
          "Mert a termények természetesen elpusztulnak a betakarításkor"
        ]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Avoidable Suffering",
      es: "Sufrimiento evitable",
      hu: "Elkerülhető szenvedés"
    },
    content: {
      en: "Some say animal suffering is natural, so human intervention doesn’t matter. While wild animals experience suffering, industrial farming causes far more intense and avoidable suffering. Humans have an ethical responsibility to reduce unnecessary harm.",
      es: "Algunos dicen que el sufrimiento animal es natural, por lo que la intervención humana no importa. Aunque los animales salvajes experimentan sufrimiento, la ganadería industrial causa un sufrimiento mucho más intenso y evitable. Los humanos tienen la responsabilidad ética de reducir el daño innecesario.",
      hu: "Sokan azt mondják, hogy az állatok szenvedése természetes, így az emberi beavatkozás nem számít. Bár a vadon élő állatok szenvednek, az ipari állattartás sokkal intenzívebb és elkerülhető szenvedést okoz. Az embereknek etikai felelősségük csökkenteni a szükségtelen kárt."
    },
    question: {
      text: {
        en: "Why is human-caused animal suffering considered different from natural suffering?",
        es: "¿Por qué se considera diferente el sufrimiento animal causado por humanos al sufrimiento natural?",
        hu: "Miért tekintjük másnak az ember által okozott állati szenvedést a természetes szenvedésnél?"
      },
      options: {
        en: [
          "Because animals in nature never suffer",
          "Because it is larger in scale and avoidable",
          "Because humans cannot understand animal pain"
        ],
        es: [
          "Porque los animales en la naturaleza nunca sufren",
          "Porque es de mayor escala y evitable",
          "Porque los humanos no pueden entender el dolor animal"
        ],
        hu: [
          "Mert a természetes állatok soha nem szenvednek",
          "Mert nagyobb léptékű és elkerülhető",
          "Mert az emberek nem értik az állati fájdalmat"
        ]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Extreme Choices",
      es: "Opciones extremas",
      hu: "Extrém választások"
    },
    content: {
      en: "Veganism may seem inconvenient, but continuing animal agriculture causes immense harm. We feed 70 billion animals yearly while nearly 800 million people go hungry. Continuing to consume animals may actually be the more extreme approach due to inefficiency and unnecessary suffering.",
      es: "El veganismo puede parecer inconveniente, pero continuar con la ganadería causa un daño inmenso. Alimentamos a 70 mil millones de animales al año mientras casi 800 millones de personas pasan hambre. Continuar consumiendo animales puede ser en realidad el enfoque más extremo debido a la ineficiencia y el sufrimiento innecesario.",
      hu: "A vegánság kényelmetlennek tűnhet, de az állattartás folytatása hatalmas kárt okoz. Évente 70 milliárd állatot etetünk, miközben közel 800 millió ember éhezik. Az állatok fogyasztásának folytatása valójában extrémebb megközelítés lehet a hatékonyság hiánya és a szükségtelen szenvedés miatt."
    },
    question: {
      text: {
        en: "Why might continuing to eat animals be considered more extreme than going vegan?",
        es: "¿Por qué continuar comiendo animales podría considerarse más extremo que volverse vegano?",
        hu: "Miért tekinthető az állatok fogyasztásának folytatása extrémebbnek, mint a vegán életmód?"
      },
      options: {
        en: [
          "Because vegan food is tastier",
          "Because people like animals more than plants",
          "Because it causes more unnecessary harm and inefficiency"
        ],
        es: [
          "Porque la comida vegana es más sabrosa",
          "Porque a la gente le gustan más los animales que las plantas",
          "Porque causa más daño innecesario e ineficiencia"
        ],
        hu: [
          "Mert a vegán étel ízletesebb",
          "Mert az emberek jobban szeretik az állatokat, mint a növényeket",
          "Mert több szükségtelen kárt és hatékonysági hiányt okoz"
        ]
      },
      correctIndex: 2
    }
  },
  {
    title: {
      en: "Ethical Equality",
      es: "Igualdad ética",
      hu: "Etikai egyenlőség"
    },
    content: {
      en: "Some argue animals aren’t equal to humans. However, humans accept differences in abilities among people, yet pigs — highly intelligent animals — are still raised for food. Ethically, humans and animals are the same in what matters: both experience fears, feelings, and suffering.",
      es: "Algunos argumentan que los animales no son iguales a los humanos. Sin embargo, los humanos aceptan diferencias en habilidades entre personas, y aun así los cerdos — animales altamente inteligentes — siguen siendo criados para alimento. Éticamente, humanos y animales son iguales en lo que importa: ambos experimentan miedos, sentimientos y sufrimiento.",
      hu: "Néhányan azt állítják, hogy az állatok nem egyenlők az emberekkel. Az emberek azonban elfogadják a képességek közötti különbségeket az emberek között, mégis a disznókat — rendkívül intelligens állatokat — továbbra is élelem céljából tenyésztik. Etikailag az emberek és az állatok ugyanazok abban, ami számít: mindkettő félelmet, érzéseket és szenvedést él át."
    },
    question: {
      text: {
        en: "Why are humans and animals considered equal in important ways?",
        es: "¿Por qué se consideran iguales los humanos y los animales en aspectos importantes?",
        hu: "Miért tekinthetők az emberek és az állatok egyenlőnek fontos szempontból?"
      },
      options: {
        en: [
          "Because animals are smarter than humans",
          "Because both experience fears, feelings, and suffering",
          "Because humans are naturally stronger"
        ],
        es: [
          "Porque los animales son más inteligentes que los humanos",
          "Porque ambos experimentan miedos, sentimientos y sufrimiento",
          "Porque los humanos son naturalmente más fuertes"
        ],
        hu: [
          "Mert az állatok okosabbak, mint az emberek",
          "Mert mindketten félelmet, érzéseket és szenvedést élnek át",
          "Mert az emberek természetesen erősebbek"
        ]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Individual Impact",
      es: "Impacto individual",
      hu: "Egyéni hatás"
    },
    content: {
      en: "Some think 'a little meat won’t hurt.' While one person seems insignificant, collective behavior has enormous effects. Reducing or eliminating animal products collectively can drastically improve animal welfare, climate impact, and resource use. Every choice matters.",
      es: "Algunos piensan 'un poco de carne no hará daño.' Aunque una persona parezca insignificante, el comportamiento colectivo tiene enormes efectos. Reducir o eliminar productos animales colectivamente puede mejorar drásticamente el bienestar animal, el impacto climático y el uso de recursos. Cada elección importa.",
      hu: "Sokan azt gondolják: „egy kis hús nem árt.” Bár egy ember jelentéktelennek tűnik, a közös cselekvés hatalmas következményekkel jár. Az állati termékek csökkentése vagy elhagyása közösen drasztikusan javíthatja az állatok jólétét, a klímahatást és az erőforrás-használatot. Minden döntés számít."
    },
    question: {
      text: {
        en: "Why does even small individual meat consumption matter?",
        es: "¿Por qué importa incluso un pequeño consumo individual de carne?",
        hu: "Miért számít még a kis egyéni húsfogyasztás is?"
      },
      options: {
        en: [
          "Because collective choices add up and create large impact",
          "Because one person cannot survive without meat",
          "Because plants can replace meat immediately without planning"
        ],
        es: [
          "Porque las decisiones colectivas se suman y generan un gran impacto",
          "Porque una persona no puede sobrevivir sin carne",
          "Porque las plantas pueden reemplazar la carne inmediatamente sin planificación"
        ],
        hu: [
          "Mert a közös döntések összeadódnak és nagy hatást gyakorolnak",
          "Mert egy ember nem élhet hús nélkül",
          "Mert a növények azonnal helyettesíthetik a húst terv nélkül"
        ]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Human Dominance",
      es: "Dominio humano",
      hu: "Emberi dominancia"
    },
    content: {
      en: "Humans dominate 36% of all mammals on Earth, including livestock, pets, and urban-adapted species. Farm animals make up 60%, and only 4% are truly wild. This shows how human activity has reshaped mammal populations and left little space for wildlife.",
      es: "Los humanos dominan el 36% de todos los mamíferos en la Tierra, incluyendo ganado, mascotas y especies adaptadas a la ciudad. Los animales de granja representan el 60%, y solo el 4% son verdaderamente salvajes. Esto muestra cómo la actividad humana ha remodelado las poblaciones de mamíferos y dejado poco espacio para la vida silvestre.",
      hu: "Az emberek az összes emlős 36%-át uralják a Földön, beleértve a háziállatokat, házikedvenceket és városhoz alkalmazkodott fajokat. Az állatok 60%-a háziállat, és csak 4% valóban vad. Ez mutatja, hogyan alakította át az emberi tevékenység az emlőspopulációkat, és hagyott kevés teret a vadon élő állatoknak."
    },
    question: {
      text: {
        en: "What percentage of mammals are truly wild?",
        es: "¿Qué porcentaje de mamíferos son verdaderamente salvajes?",
        hu: "Az emlősök hány százaléka valóban vad?"
      },
      options: {
        en: ["4%", "36%", "60%"],
        es: ["4%", "36%", "60%"],
        hu: ["4%", "36%", "60%"]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Mammal Extinction",
      es: "Extinción de mamíferos",
      hu: "Emlősök kihalása"
    },
    content: {
      en: "About 25% of mammal species are currently threatened with extinction, according to the IUCN. Iconic species like primates, big cats, and elephants get attention, but small rodents and bats are equally important for ecosystems. Protecting all mammals matters.",
      es: "Según la UICN, aproximadamente el 25% de las especies de mamíferos están actualmente amenazadas de extinción. Especies icónicas como primates, grandes felinos y elefantes reciben atención, pero pequeños roedores y murciélagos son igualmente importantes para los ecosistemas. Proteger a todos los mamíferos importa.",
      hu: "A becslések szerint az emlősfajok körülbelül 25%-a veszélyeztetett a kihalással. Az ikonikus fajok, mint a főemlősök, a nagymacskák és az elefántok nagy figyelmet kapnak, de a kis rágcsálók és denevérek ugyanolyan fontosak az ökoszisztémák számára. Minden emlős védelme számít."
    },
    question: {
      text: {
        en: "What percentage of mammal species are currently threatened with extinction?",
        es: "¿Qué porcentaje de especies de mamíferos está actualmente en peligro de extinción?",
        hu: "Az emlősfajok hány százaléka van jelenleg a kihalás veszélyében?"
      },
      options: {
        en: ["10%", "25%", "50%"],
        es: ["10%", "25%", "50%"],
        hu: ["10%", "25%", "50%"]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Antibiotics in Farming",
      es: "Antibióticos en la agricultura",
      hu: "Antibiotikumok az állattartásban"
    },
    content: {
      en: "Around 70% of global antibiotic supply is used in livestock farming, not in humans. Antibiotics promote growth and prevent disease in crowded conditions, but this contributes to antibiotic resistance—a major public health issue.",
      es: "Alrededor del 70% del suministro mundial de antibióticos se utiliza en la ganadería, no en humanos. Los antibióticos promueven el crecimiento y previenen enfermedades en condiciones de hacinamiento, pero esto contribuye a la resistencia a los antibióticos, un problema importante de salud pública.",
      hu: "A globális antibiotikum-készlet kb. 70%-át állattartásban használják, nem emberekben. Az antibiotikumok elősegítik a növekedést és megelőzik a betegségeket zsúfolt körülmények között, de ez hozzájárul az antibiotikum-rezisztenciához – egy súlyos közegészségügyi problémához."
    },
    question: {
      text: {
        en: "What percentage of antibiotics is used in livestock farming?",
        es: "¿Qué porcentaje de antibióticos se utiliza en la ganadería?",
        hu: "Az antibiotikumok hány százalékát használják az állattartásban?"
      },
      options: {
        en: ["70%", "30%", "50%"],
        es: ["70%", "30%", "50%"],
        hu: ["70%", "30%", "50%"]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Cage Confinement",
      es: "Confinamiento en jaulas",
      hu: "Ketrecbe zárás"
    },
    content: {
      en: "Many farmed animals are kept in extremely small cages, unable to turn around or move freely. This raises ethical questions about whether severe confinement is worse than slaughter itself.",
      es: "Muchos animales de granja se mantienen en jaulas extremadamente pequeñas, incapaces de girar o moverse libremente. Esto plantea preguntas éticas sobre si el confinamiento severo es peor que el sacrificio en sí.",
      hu: "Sok haszonállatot rendkívül kicsi ketrecekben tartanak, nem tudnak megfordulni vagy szabadon mozogni. Ez etikai kérdéseket vet fel arról, hogy a szigorú bezártság rosszabb-e, mint maga a leölés."
    },
    question: {
      text: {
        en: "What ethical issue arises from very small cages?",
        es: "¿Qué problema ético surge de las jaulas muy pequeñas?",
        hu: "Milyen etikai kérdés merül fel a nagyon kicsi ketrecek kapcsán?"
      },
      options: {
        en: [
          "Animals become smarter",
          "Severe confinement limits movement",
          "Cages improve health"
        ],
        es: [
          "Los animales se vuelven más inteligentes",
          "El confinamiento severo limita el movimiento",
          "Las jaulas mejoran la salud"
        ],
        hu: [
          "Az állatok okosabbak lesznek",
          "A szigorú bezártság korlátozza a mozgást",
          "A ketrecek javítják az egészséget"
        ]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Higher Cost Ethics",
      es: "Ética de mayor costo",
      hu: "Magasabb költség etikai kérdése"
    },
    content: {
      en: "Companies that provide better animal conditions cannot compete with conventional farms due to higher costs. This highlights the ethical question: should profit outweigh the well-being of sentient beings?",
      es: "Las empresas que proporcionan mejores condiciones para los animales no pueden competir con las granjas convencionales debido a los mayores costos. Esto destaca la pregunta ética: ¿debería la ganancia prevalecer sobre el bienestar de los seres sensibles?",
      hu: "Azok a cégek, amelyek jobb állati körülményeket biztosítanak, nem versenyezhetnek a hagyományos gazdaságokkal a magasabb költségek miatt. Ez kiemeli az etikai kérdést: vajon a profit felülírhatja-e az érző lények jólétét?"
    },
    question: {
      text: {
        en: "Why can't companies with better animal conditions compete?",
        es: "¿Por qué no pueden competir las empresas con mejores condiciones para los animales?",
        hu: "Miért nem versenyezhetnek a jobb állati körülményeket biztosító cégek?"
      },
      options: {
        en: [
          "They don't care about animals",
          "They produce less milk",
          "Higher costs than industrial farms"
        ],
        es: [
          "No se preocupan por los animales",
          "Producen menos leche",
          "Costos más altos que las granjas industriales"
        ],
        hu: [
          "Nem törődnek az állatokkal",
          "Kevesebb tejet termelnek",
          "Magasabb költségek, mint az ipari gazdaságoknál"
        ]
      },
      correctIndex: 2
    }
  },
//More Lessons here
{
  title: {
    en: "🔄 Review a Lesson",
    es: "🔄 Repasar una lección",
    hu: "🔄 Egy lecke átismétlése"
  },
  type: "review",
  content: {
    en: "Review a previous lesson and earn extra XP!",
    es: "¡Repasa una lección anterior y gana XP extra!",
    hu: "Ismételj át egy korábbi leckét, és szerezz extra XP-t!"
  }
}
],

  earth: [
  {
    title: {
      en: "Global Temperature Rise",
      es: "Aumento de la temperatura global",
      hu: "A globális hőmérséklet emelkedése"
    },
    content: {
      en: "Since 1970, the Earth's average surface temperature has risen rapidly. By 2024, it was about 1.46°C above pre-industrial levels, making it the warmest year on record. Without action, temperatures could rise 4.5–5°C by 2100, causing severe climate impacts. Immediate reductions in greenhouse gas emissions are critical.",
      es: "Desde 1970, la temperatura media de la superficie terrestre ha aumentado rápidamente. En 2024, se situó aproximadamente 1,46 °C por encima de los niveles preindustriales, convirtiéndose en el año más cálido registrado. Sin medidas, la temperatura podría aumentar entre 4,5 y 5 °C para 2100, provocando graves impactos climáticos. Reducir de inmediato las emisiones de gases de efecto invernadero es crucial.",
      hu: "1970 óta a Föld átlagos felszíni hőmérséklete gyorsan emelkedik. 2024-re körülbelül 1,46 °C-kal haladta meg az iparosodás előtti szintet, ezzel ez lett a valaha mért legmelegebb év. Beavatkozás nélkül a hőmérséklet 2100-ra 4,5–5 °C-kal is emelkedhet, súlyos éghajlati következményeket okozva. Az üvegházhatású gázok kibocsátásának azonnali csökkentése kulcsfontosságú."
    },
    question: {
      text: {
        en: "By approximately how much has the Earth's average surface temperature increased since the pre-industrial era?",
        es: "¿En cuánto ha aumentado aproximadamente la temperatura media de la superficie terrestre desde la era preindustrial?",
        hu: "Körülbelül mennyivel nőtt a Föld átlagos felszíni hőmérséklete az iparosodás előtti korszak óta?"
      },
      options: {
        en: ["About 0.5°C", "About 1.5°C", "About 3°C"],
        es: ["Aproximadamente 0,5 °C", "Aproximadamente 1,5 °C", "Aproximadamente 3 °C"],
        hu: ["Körülbelül 0,5 °C", "Körülbelül 1,5 °C", "Körülbelül 3 °C"]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Energy and Emissions",
      es: "Energía y emisiones",
      hu: "Energia és kibocsátások"
    },
    content: {
      en: "The energy industry is the largest contributor to global greenhouse-gas emissions, responsible for around 70% through electricity, heat, transport, and fossil fuel extraction. Switching to renewable energy like solar, wind, and hydro, and improving efficiency are central to reducing emissions across multiple sectors.",
      es: "La industria energética es la mayor fuente de emisiones globales de gases de efecto invernadero, responsable de alrededor del 70 % a través de la electricidad, el calor, el transporte y la extracción de combustibles fósiles. La transición a energías renovables como la solar, eólica e hidroeléctrica, junto con una mayor eficiencia, es clave para reducir las emisiones.",
      hu: "Az energiaipar a globális üvegházhatású gázkibocsátás legnagyobb forrása, mintegy 70 %-ért felelős az áramtermelés, fűtés, közlekedés és fosszilis tüzelőanyag-kitermelés révén. A megújuló energiákra – például nap-, szél- és vízenergiára – való átállás és a hatékonyság javítása alapvető a kibocsátások csökkentéséhez."
    },
    question: {
      text: {
        en: "Approximately what share of global greenhouse-gas emissions comes from energy-related sources?",
        es: "¿Qué porcentaje aproximado de las emisiones globales de gases de efecto invernadero proviene de fuentes energéticas?",
        hu: "A globális üvegházhatású gázkibocsátás körülbelül mekkora része származik az energiafelhasználásból?"
      },
      options: {
        en: ["About 25%", "About 50%", "About 70%"],
        es: ["Aproximadamente 25 %", "Aproximadamente 50 %", "Aproximadamente 70 %"],
        hu: ["Körülbelül 25 %", "Körülbelül 50 %", "Körülbelül 70 %"]
      },
      correctIndex: 2
    }
  },

  {
    title: {
      en: "Forests and Agriculture",
      es: "Bosques y agricultura",
      hu: "Erdők és mezőgazdaság"
    },
    content: {
      en: "Deforestation is a major climate challenge. Agriculture drives nearly 90% of tropical forest loss, with livestock – especially pasture and feed crops – being major contributors. Protecting forests and restoring land are essential strategies to combat climate change.",
      es: "La deforestación es uno de los principales desafíos climáticos. La agricultura impulsa casi el 90 % de la pérdida de bosques tropicales, siendo la ganadería —especialmente los pastos y cultivos para pienso— uno de los principales responsables. Proteger los bosques y restaurar la tierra es fundamental para combatir el cambio climático.",
      hu: "Az erdőirtás az egyik legnagyobb éghajlati kihívás. A mezőgazdaság felelős a trópusi erdőpusztulás közel 90 %-áért, különösen az állattartás – legelők és takarmánynövények révén. Az erdők védelme és a területek helyreállítása kulcsfontosságú az éghajlatváltozás elleni küzdelemben."
    },
    question: {
      text: {
        en: "What percent of tropical deforestation is driven by agriculture?",
        es: "¿Qué porcentaje de la deforestación tropical es causada por la agricultura?",
        hu: "A trópusi erdőirtás hány százalékát okozza a mezőgazdaság?"
      },
      options: {
        en: ["About 50%", "About 70%", "About 90%"],
        es: ["Aproximadamente 50 %", "Aproximadamente 70 %", "Aproximadamente 90 %"],
        hu: ["Körülbelül 50 %", "Körülbelül 70 %", "Körülbelül 90 %"]
      },
      correctIndex: 2
    }
  },

  {
    title: {
      en: "Beef and Deforestation",
      es: "Carne de res y deforestación",
      hu: "Marhahús és erdőirtás"
    },
    content: {
      en: "Beef production is responsible for about 41% of tropical deforestation. Land is cleared for grazing and feed crops like soy. Reducing demand for land-intensive animal products is crucial to protecting forests and fighting climate change.",
      es: "La producción de carne de res es responsable de aproximadamente el 41 % de la deforestación tropical. Se talan tierras para el pastoreo y cultivos de alimento como la soja. Reducir la demanda de productos animales que requieren mucha tierra es clave para proteger los bosques.",
      hu: "A marhahús-termelés felelős a trópusi erdőirtás körülbelül 41 %-áért. Földeket tisztítanak meg legeltetéshez és takarmánynövények, például szója termesztéséhez. A nagy területigényű állati termékek iránti kereslet csökkentése elengedhetetlen az erdők védelméhez."
    },
    question: {
      text: {
        en: "What percentage of tropical deforestation is linked to beef production?",
        es: "¿Qué porcentaje de la deforestación tropical está relacionado con la producción de carne de res?",
        hu: "A trópusi erdőirtás hány százaléka köthető a marhahús-termeléshez?"
      },
      options: {
        en: ["About 20%", "About 41%", "About 60%"],
        es: ["Aproximadamente 20 %", "Aproximadamente 41 %", "Aproximadamente 60 %"],
        hu: ["Körülbelül 20 %", "Körülbelül 41 %", "Körülbelül 60 %"]
      },
      correctIndex: 1
    }
  },

  {
    title: {
      en: "Water Footprint of Food",
      es: "Huella hídrica de los alimentos",
      hu: "Az élelmiszerek vízlábnyoma"
    },
    content: {
      en: "Animal products require significantly more water than plant-based foods. For example, producing 1 kg of beef uses up to 15,000 liters of water, whereas 1 kg of tofu uses about 302 liters. Choosing plant-based foods can dramatically reduce water use.",
      es: "Los productos de origen animal requieren mucha más agua que los alimentos de origen vegetal. Por ejemplo, producir 1 kg de carne de res puede utilizar hasta 15 000 litros de agua, mientras que 1 kg de tofu necesita alrededor de 302 litros. Elegir alimentos vegetales puede reducir drásticamente el consumo de agua.",
      hu: "Az állati eredetű termékek előállítása lényegesen több vizet igényel, mint a növényi alapú élelmiszereké. Például 1 kg marhahús előállításához akár 15 000 liter víz is szükséges, míg 1 kg tofuhoz körülbelül 302 liter. A növényi étrend jelentősen csökkentheti a vízfelhasználást."
    },
    question: {
      text: {
        en: "How does the water needed to produce 1 kg of beef compare to 1 kg of tofu?",
        es: "¿Cómo se compara el agua necesaria para producir 1 kg de carne de res con 1 kg de tofu?",
        hu: "Hogyan viszonyul az 1 kg marhahús és az 1 kg tofu vízigénye?"
      },
      options: {
        en: [
          "Beef: 15,000 liters, Tofu: 302 liters",
          "Beef: 5,000 liters, Tofu: 3,000 liters",
          "Beef: 1,500 liters, Tofu: 500 liters"
        ],
        es: [
          "Carne de res: 15 000 litros, Tofu: 302 litros",
          "Carne de res: 5 000 litros, Tofu: 3 000 litros",
          "Carne de res: 1 500 litros, Tofu: 500 litros"
        ],
        hu: [
          "Marhahús: 15 000 liter, Tofu: 302 liter",
          "Marhahús: 5 000 liter, Tofu: 3 000 liter",
          "Marhahús: 1 500 liter, Tofu: 500 liter"
        ]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Reducing Food Waste",
      es: "Reduciendo el desperdicio de alimentos",
      hu: "Élelmiszerpazarlás csökkentése"
    },
    content: {
      en: "Around one-third of all food produced globally is wasted each year, accounting for 8–10% of greenhouse gas emissions. Reducing food waste by buying only what you need, storing food properly, using leftovers, and composting can save resources and fight climate change.",
      es: "Alrededor de un tercio de todos los alimentos producidos a nivel mundial se desperdicia cada año, representando el 8–10% de las emisiones de gases de efecto invernadero. Reducir el desperdicio de alimentos comprando solo lo necesario, almacenando correctamente, usando sobras y compostando puede ahorrar recursos y combatir el cambio climático.",
      hu: "A világon előállított élelmiszer körülbelül egyharmadát évente pazarolják el, ami az üvegházhatású gázok 8–10%-át teszi ki. Az élelmiszerpazarlás csökkentése azzal, hogy csak a szükségeset vásároljuk, megfelelően tároljuk, felhasználjuk a maradékokat és komposztálunk, erőforrásokat takarít meg és segít a klímavédelemben."
    },
    question: {
      text: {
        en: "Roughly what percentage of all food produced worldwide is wasted?",
        es: "¿Qué porcentaje aproximadamente de los alimentos producidos en todo el mundo se desperdicia?",
        hu: "Körülbelül az előállított élelmiszer hány százalékát pazarolják el világszerte?"
      },
      options: {
        en: ["About one-tenth", "About one-third", "About half"],
        es: ["Aproximadamente una décima parte", "Aproximadamente un tercio", "Aproximadamente la mitad"],
        hu: ["Körülbelül egytized", "Körülbelül egyharmad", "Körülbelül a fele"]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Impact of Reducing Food Waste",
      es: "Impacto de reducir el desperdicio de alimentos",
      hu: "Az élelmiszerpazarlás csökkentésének hatása"
    },
    content: {
      en: "Reducing food waste by half can lower your carbon footprint by around 16%. Combined with a mostly plant-based diet, water conservation, and sustainable products, small lifestyle changes collectively make a big difference for biodiversity and climate.",
      es: "Reducir a la mitad el desperdicio de alimentos puede reducir tu huella de carbono en alrededor del 16%. Combinado con una dieta mayormente basada en plantas, la conservación del agua y productos sostenibles, pequeños cambios de estilo de vida hacen una gran diferencia para la biodiversidad y el clima.",
      hu: "Az élelmiszerpazarlás felére csökkentése körülbelül 16%-kal csökkentheti a karbonlábnyomot. Egy főleg növényi alapú étrenddel, a víz megtakarításával és fenntartható termékek használatával a kis életmódbeli változtatások összességében nagy hatással lehetnek a biodiverzitásra és a klímára."
    },
    question: {
      text: {
        en: "Approximately how much can reducing food waste by half decrease your carbon footprint?",
        es: "¿Aproximadamente cuánto puede reducirse tu huella de carbono al reducir a la mitad el desperdicio de alimentos?",
        hu: "Körülbelül mennyivel csökkentheti a karbonlábnyomot az élelmiszerpazarlás felére csökkentése?"
      },
      options: {
        en: ["About 10%", "About 16%", "About 25%"],
        es: ["Aproximadamente 10%", "Aproximadamente 16%", "Aproximadamente 25%"],
        hu: ["Körülbelül 10%", "Körülbelül 16%", "Körülbelül 25%"]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Renewable Energy Benefits",
      es: "Beneficios de la energía renovable",
      hu: "Megújuló energia előnyei"
    },
    content: {
      en: "Switching to renewable energy reduces carbon footprints significantly. Electric vehicles in Europe, for example, produce up to 73% fewer greenhouse gas emissions over their lifetime than gasoline cars. Using renewable energy to charge EVs further increases climate benefits.",
      es: "Cambiar a energía renovable reduce significativamente la huella de carbono. Los vehículos eléctricos en Europa, por ejemplo, producen hasta un 73% menos de emisiones de gases de efecto invernadero durante su vida útil que los coches de gasolina. Usar energía renovable para cargar vehículos eléctricos aumenta aún más los beneficios climáticos.",
      hu: "A megújuló energiára való áttérés jelentősen csökkenti a karbonlábnyomot. Például Európában az elektromos járművek élettartamuk alatt akár 73%-kal kevesebb üvegházhatású gázt bocsátanak ki, mint a benzinüzemű autók. Ha megújuló energiával töltjük az EV-ket, a klímaelőnyök tovább növekednek."
    },
    question: {
      text: {
        en: "By what percentage can electric vehicles reduce lifetime greenhouse gas emissions compared to gasoline cars in Europe?",
        es: "¿En qué porcentaje pueden los vehículos eléctricos reducir las emisiones de gases de efecto invernadero durante su vida útil en comparación con los coches de gasolina en Europa?",
        hu: "Milyen százalékkal csökkenthetik az elektromos járművek az élettartamuk alatt az üvegházhatású gázkibocsátást a benzinüzemű autókhoz képest Európában?"
      },
      options: {
        en: ["Up to 50%", "Up to 73%", "Up to 90%"],
        es: ["Hasta un 50%", "Hasta un 73%", "Hasta un 90%"],
        hu: ["Akár 50%", "Akár 73%", "Akár 90%"]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Returning Land to Nature",
      es: "Devolver tierras a la naturaleza",
      hu: "A föld visszaadása a természetnek"
    },
    content: {
      en: "Rewilding, or returning land to nature, helps ecosystems recover, stores carbon, and protects biodiversity. Reducing livestock farming could free up around 3.1 billion hectares (about 75% of agricultural land), allowing restoration of forests, grasslands, and wetlands. Planting native trees, creating wildlife corridors, and adopting sustainable practices support this goal.",
      es: "La reforestación y la devolución de tierras a la naturaleza ayuda a que los ecosistemas se recuperen, almacena carbono y protege la biodiversidad. Reducir la ganadería podría liberar alrededor de 3,1 mil millones de hectáreas (aproximadamente el 75% de la tierra agrícola), permitiendo la restauración de bosques, praderas y humedales. Plantar árboles nativos, crear corredores para la vida silvestre y adoptar prácticas sostenibles apoyan este objetivo.",
      hu: "A rewilding, vagyis a föld visszaadása a természetnek segít az ökoszisztémák helyreállításában, a szén tárolásában és a biodiverzitás védelmében. Az állattartás csökkentése körülbelül 3,1 milliárd hektárt szabadíthat fel (az összes mezőgazdasági terület ~75%-a), lehetővé téve erdők, füves területek és vizes élőhelyek helyreállítását. A hazai fafajták ültetése, vadon élő állatok számára folyosók létrehozása és fenntartható gyakorlatok támogatják ezt a célt."
    },
    question: {
      text: {
        en: "Which human activity uses the most land globally and affects rewilding efforts?",
        es: "¿Qué actividad humana utiliza más tierra a nivel mundial y afecta los esfuerzos de rewilding?",
        hu: "Mely emberi tevékenység használja a legtöbb földet a világon, és befolyásolja a rewilding erőfeszítéseket?"
      },
      options: {
        en: ["Animal agriculture", "Urban development", "Renewable energy installations"],
        es: ["Agricultura animal", "Desarrollo urbano", "Instalaciones de energía renovable"],
        hu: ["Állattenyésztés", "Városiasodás", "Megújuló energia létesítmények"]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Mammalian Biomass Imbalance",
      es: "Desequilibrio de biomasa de mamíferos",
      hu: "Emlős biomassza egyensúlytalanság"
    },
    content: {
      en: "Large land mammal biomass is dominated by humans (36%) and livestock (60%), leaving wild mammals with only 4%. Industrial agriculture heavily shapes the planet and reduces space for wild species, highlighting the need for rewilding and sustainable land use.",
      es: "La biomasa de grandes mamíferos terrestres está dominada por humanos (36%) y ganado (60%), dejando a los mamíferos salvajes solo con un 4%. La agricultura industrial da forma al planeta y reduce el espacio para especies salvajes, destacando la necesidad de rewilding y uso sostenible de la tierra.",
      hu: "A nagytestű szárazföldi emlősök biomasszáját az emberek (36%) és a háziállatok (60%) uralják, így a vad emlősöknek csak 4% jut. Az ipari mezőgazdaság jelentősen alakítja a bolygót, és csökkenti a vadon élő fajok helyét, kiemelve a rewilding és a fenntartható földhasználat szükségességét."
    },
    question: {
      text: {
        en: "What percentage of the total mammalian biomass is made up by humans and livestock combined?",
        es: "¿Qué porcentaje de la biomasa total de mamíferos está compuesto por humanos y ganado juntos?",
        hu: "A teljes emlős biomassza hány százalékát teszik ki az emberek és a háziállatok együtt?"
      },
      options: {
        en: ["About 50%", "About 96%", "About 70%"],
        es: ["Aproximadamente 50%", "Aproximadamente 96%", "Aproximadamente 70%"],
        hu: ["Körülbelül 50%", "Körülbelül 96%", "Körülbelül 70%"]
      },
      correctIndex: 1
    }
  },
{
    title: {
      en: "Biodiversity Decline",
      es: "Declive de la biodiversidad",
      hu: "A biodiverzitás csökkenése"
    },
    content: {
      en: "Vertebrate populations — mammals, birds, amphibians, reptiles, and fish — have declined by around 70% since 1970 due to deforestation, industrial agriculture, overfishing, and urban expansion. Protecting and restoring biodiversity strengthens ecosystems, regulates climate, and supports food and water security.",
      es: "Las poblaciones de vertebrados — mamíferos, aves, anfibios, reptiles y peces — han disminuido alrededor del 70% desde 1970 debido a la deforestación, la agricultura industrial, la sobrepesca y la expansión urbana. Proteger y restaurar la biodiversidad fortalece los ecosistemas, regula el clima y apoya la seguridad alimentaria y del agua.",
      hu: "A gerinces populációk — emlősök, madarak, kétéltűek, hüllők és halak — körülbelül 70%-kal csökkentek 1970 óta az erdőirtás, az ipari mezőgazdaság, a túlhalászás és a városiasodás miatt. A biodiverzitás védelme és helyreállítása erősíti az ökoszisztémákat, szabályozza az éghajlatot és támogatja az élelmiszer- és vízbiztonságot."
    },
    question: {
      text: {
        en: "By approximately how much have vertebrate populations declined since 1970?",
        es: "¿En qué porcentaje aproximadamente han disminuido las poblaciones de vertebrados desde 1970?",
        hu: "Körülbelül mennyivel csökkentek a gerinces populációk 1970 óta?"
      },
      options: {
        en: ["About 30%", "About 50%", "About 70%"],
        es: ["Aproximadamente 30%", "Aproximadamente 50%", "Aproximadamente 70%"],
        hu: ["Körülbelül 30%", "Körülbelül 50%", "Körülbelül 70%"]
      },
      correctIndex: 2
    }
  },
  {
    title: {
      en: "Biodiversity Importance",
      es: "Importancia de la biodiversidad",
      hu: "A biodiverzitás fontossága"
    },
    content: {
      en: "Biodiversity includes all living organisms on Earth. Healthy ecosystems regulate climate, purify air and water, pollinate crops, and maintain soil fertility. Human activities like deforestation, pollution, and overfishing threaten biodiversity, making its protection crucial in fighting climate change.",
      es: "La biodiversidad incluye todos los organismos vivos en la Tierra. Los ecosistemas saludables regulan el clima, purifican el aire y el agua, polinizan los cultivos y mantienen la fertilidad del suelo. Actividades humanas como la deforestación, la contaminación y la sobrepesca amenazan la biodiversidad, haciendo crucial su protección para combatir el cambio climático.",
      hu: "A biodiverzitás magában foglal minden élőlényt a Földön. Az egészséges ökoszisztémák szabályozzák az éghajlatot, tisztítják a levegőt és a vizet, beporozzák a növényeket és fenntartják a talaj termékenységét. Az emberi tevékenységek, mint az erdőirtás, a szennyezés és a túlhalászás, veszélyeztetik a biodiverzitást, ezért annak védelme kulcsfontosságú a klímaváltozás elleni küzdelemben."
    },
    question: {
      text: {
        en: "Why is biodiversity important in the fight against climate change?",
        es: "¿Por qué es importante la biodiversidad en la lucha contra el cambio climático?",
        hu: "Miért fontos a biodiverzitás a klímaváltozás elleni küzdelemben?"
      },
      options: {
        en: ["It helps ecosystems stay healthy and absorb carbon", "It increases pollution levels", "It reduces soil fertility"],
        es: ["Ayuda a los ecosistemas a mantenerse saludables y absorber carbono", "Aumenta los niveles de contaminación", "Reduce la fertilidad del suelo"],
        hu: ["Segíti az ökoszisztémák egészségét és elnyeli a szenet", "Növeli a szennyezést", "Csökkenti a talaj termékenységét"]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Ghost Nets in the Ocean",
      es: "Redes fantasma en el océano",
      hu: "Szellemhálók az óceánban"
    },
    content: {
      en: "A huge part of the ocean’s plastic problem comes from abandoned fishing nets, known as ghost nets. In the Great Pacific Garbage Patch — the world’s largest floating collection of trash — almost 46% of the plastic by weight is made up of these fishing nets. These nets can drift for decades, trapping fish, dolphins, turtles, and other animals. Reducing seafood consumption helps reduce the demand for industrial fishing, which is the source of most ghost nets.",
      es: "Gran parte del problema del plástico en los océanos proviene de redes de pesca abandonadas, conocidas como redes fantasma. En el Gran Parche de Basura del Pacífico — la mayor colección flotante de basura del mundo — casi el 46% del plástico por peso está compuesto por estas redes de pesca. Estas redes pueden flotar durante décadas, atrapando peces, delfines, tortugas y otros animales. Reducir el consumo de mariscos ayuda a disminuir la demanda de pesca industrial, que es la fuente de la mayoría de las redes fantasma.",
      hu: "Az óceánok műanyagszennyezésének nagy része az elhagyott halászhálók, az úgynevezett szellemhálók miatt van. A Nagy Csendes-óceáni Szemétfoltban — a világ legnagyobb úszó hulladékgyűjteményében — a műanyag súlyának majdnem 46%-át ezek a hálók teszik ki. Ezek a hálók évtizedekig sodródhatnak, csapdába ejtve halakat, delfineket, teknősöket és más állatokat. A tengeri ételek fogyasztásának csökkentése segít a halászat iránti kereslet mérséklésében, ami a legtöbb szellemháló forrása."
    },
    question: {
      text: {
        en: "In the Great Pacific Garbage Patch, what percentage of plastic (by weight) comes from abandoned fishing nets?",
        es: "En el Gran Parche de Basura del Pacífico, ¿qué porcentaje del plástico (por peso) proviene de redes de pesca abandonadas?",
        hu: "A Nagy Csendes-óceáni Szemétfoltban a műanyag súlyának hány százaléka származik elhagyott halászhálókból?"
      },
      options: {
        en: ["About 5%", "About 20%", "Almost 46%"],
        es: ["Alrededor del 5%", "Alrededor del 20%", "Casi 46%"],
        hu: ["Körülbelül 5%", "Körülbelül 20%", "Majdnem 46%"]
      },
      correctIndex: 2
    }
  },
  {
    title: {
      en: "Soy Production Impact",
      es: "Impacto de la producción de soja",
      hu: "A szója termesztésének hatása"
    },
    content: {
      en: "Most soy (77%) is grown to feed livestock, not humans. This demand drives deforestation, releases CO₂, and threatens biodiversity. Shifting to plant-based consumption can reduce environmental impacts significantly.",
      es: "La mayor parte de la soja (77%) se cultiva para alimentar al ganado, no a los humanos. Esta demanda impulsa la deforestación, libera CO₂ y amenaza la biodiversidad. Pasarse a un consumo basado en plantas puede reducir significativamente los impactos ambientales.",
      hu: "A szója nagy részét (77%) állatok etetésére termesztik, nem embereknek. Ez a kereslet erdőirtást okoz, CO₂-t bocsát ki, és veszélyezteti a biodiverzitást. A növényi alapú fogyasztásra való áttérés jelentősen csökkentheti a környezeti hatásokat."
    },
    question: {
      text: {
        en: "What percentage of global soy production is used to feed farm animals?",
        es: "¿Qué porcentaje de la producción mundial de soja se utiliza para alimentar al ganado?",
        hu: "A globális szója-termelés hány százalékát használják állatok etetésére?"
      },
      options: {
        en: ["About 50%", "About 77%", "About 90%"],
        es: ["Alrededor del 50%", "Alrededor del 77%", "Alrededor del 90%"],
        hu: ["Körülbelül 50%", "Körülbelül 77%", "Körülbelül 90%"]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Transportation Emissions",
      es: "Emisiones del transporte",
      hu: "A közlekedés kibocsátása"
    },
    content: {
      en: "Transportation contributes about 25% of global greenhouse gas emissions, mainly from cars, trucks, and planes. Sustainable alternatives like walking, cycling, public transport, or electric vehicles can reduce your carbon footprint, improve air quality, and lower emissions.",
      es: "El transporte contribuye con aproximadamente el 25% de las emisiones globales de gases de efecto invernadero, principalmente de coches, camiones y aviones. Alternativas sostenibles como caminar, ir en bicicleta, usar transporte público o vehículos eléctricos pueden reducir tu huella de carbono, mejorar la calidad del aire y disminuir las emisiones.",
      hu: "A közlekedés körülbelül 25%-át adja a globális üvegházhatású gázkibocsátásnak, főként autók, teherautók és repülőgépek révén. Fenntartható alternatívák, mint a gyaloglás, kerékpározás, tömegközlekedés vagy elektromos járművek csökkenthetik a karbonlábnyomot, javíthatják a levegő minőségét és mérsékelhetik a kibocsátást."
    },
    question: {
      text: {
        en: "Roughly what share of global greenhouse gas emissions comes from transportation?",
        es: "¿Aproximadamente qué parte de las emisiones globales de gases de efecto invernadero proviene del transporte?",
        hu: "Körülbelül a globális üvegházhatású gázkibocsátás hány százaléka származik a közlekedésből?"
      },
      options: {
        en: ["About 10%", "About 25%", "About 50%"],
        es: ["Alrededor del 10%", "Alrededor del 25%", "Alrededor del 50%"],
        hu: ["Körülbelül 10%", "Körülbelül 25%", "Körülbelül 50%"]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Fighting Climate Change",
      es: "Luchando contra el cambio climático",
      hu: "A klímaváltozás elleni küzdelem"
    },
    content: {
      en: "Key pillars in fighting climate change include switching to renewable energy, protecting forests, reducing waste, sustainable transport, safeguarding biodiversity, and returning land to nature. These steps cut greenhouse gas emissions and help restore the planet's balance.",
      es: "Los pilares clave para combatir el cambio climático incluyen cambiar a energía renovable, proteger los bosques, reducir residuos, transporte sostenible, proteger la biodiversidad y devolver la tierra a la naturaleza. Estos pasos reducen las emisiones de gases de efecto invernadero y ayudan a restaurar el equilibrio del planeta.",
      hu: "A klímaváltozás elleni küzdelem fő pillérei közé tartozik a megújuló energia használata, az erdők védelme, a hulladék csökkentése, a fenntartható közlekedés, a biodiverzitás megőrzése és a föld visszaadása a természetnek. Ezek a lépések csökkentik az üvegházhatású gázkibocsátást és segítenek helyreállítani a bolygó egyensúlyát."
    },
    question: {
      text: {
        en: "Which of the following is NOT one of the main pillars of fighting climate change?",
        es: "¿Cuál de los siguientes NO es uno de los pilares principales para combatir el cambio climático?",
        hu: "Melyik NEM a klímaváltozás elleni küzdelem fő pillérei közül?"
      },
      options: {
        en: ["Switching to renewable energy", "Protecting forests", "Increasing fossil fuel use"],
        es: ["Cambiar a energía renovable", "Proteger los bosques", "Aumentar el uso de combustibles fósiles"],
        hu: ["Megújuló energiára váltás", "Az erdők védelme", "A fosszilis üzemanyagok növelése"]
      },
      correctIndex: 2
    }
  },
  {
    title: {
      en: "Daily Food Choices Matter",
      es: "Las elecciones alimentarias diarias importan",
      hu: "A napi étkezési döntések számítanak"
    },
    content: {
      en: "Our daily food choices greatly impact the environment, affecting deforestation, greenhouse gas emissions, water use, and ocean health. Choosing more plant-based meals, reducing food waste, and supporting sustainable products are highly effective ways to protect the planet. Your plate is your most powerful environmental tool.",
      es: "Nuestras elecciones alimentarias diarias impactan mucho en el medio ambiente, afectando la deforestación, las emisiones de gases de efecto invernadero, el uso del agua y la salud de los océanos. Elegir comidas más basadas en plantas, reducir el desperdicio de alimentos y apoyar productos sostenibles son formas muy efectivas de proteger el planeta. Tu plato es tu herramienta ambiental más poderosa.",
      hu: "A napi étkezési döntéseink nagy hatással vannak a környezetre, befolyásolják az erdőirtást, az üvegházhatású gázok kibocsátását, a vízfelhasználást és az óceánok egészségét. A növényi alapú ételek választása, az élelmiszerpazarlás csökkentése és a fenntartható termékek támogatása rendkívül hatékony módja a bolygó védelmének. A tányérod a legerősebb környezeti eszközöd."
    },
    question: {
      text: {
        en: "What is considered your most powerful tool to protect the environment?",
        es: "¿Cuál se considera tu herramienta más poderosa para proteger el medio ambiente?",
        hu: "Mi számít a legerősebb eszközödnek a környezet védelmében?"
      },
      options: {
        en: ["Your plate", "Your phone", "Your car"],
        es: ["Tu plato", "Tu teléfono", "Tu coche"],
        hu: ["A tányérod", "A telefonod", "Az autód"]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Heating Your Home Efficiently",
      es: "Calentar tu hogar de manera eficiente",
      hu: "Otthonod fűtése hatékonyan"
    },
    content: {
      en: "Heating our homes takes a lot of energy — and even one degree makes a difference. Lowering your thermostat by just 1°C can cut your heating energy use by about 7% and prevent roughly 300 kg of CO₂ emissions per year for an average household. Just put on a cozy sweater instead!",
      es: "Calentar nuestros hogares requiere mucha energía, y incluso un grado marca la diferencia. Bajar el termostato solo 1°C puede reducir el uso de energía en calefacción en aproximadamente un 7% y evitar alrededor de 300 kg de emisiones de CO₂ por año en un hogar promedio. ¡Solo ponte un suéter acogedor!",
      hu: "Otthonaink fűtése sok energiát igényel — és már egy fok is számít. A termosztát 1°C-kal történő csökkentése körülbelül 7%-kal csökkentheti a fűtési energiafelhasználást, és évente kb. 300 kg CO₂-kibocsátást spórolhat egy átlagos háztartásban. Csak vegyél fel egy meleg pulóvert!"
    },
    question: {
      text: {
        en: "Lowering the thermostat by 1°C can reduce home heating energy use by roughly:",
        es: "Bajar el termostato 1°C puede reducir el uso de energía para calefacción aproximadamente en:",
        hu: "A termosztát 1°C-kal történő csökkentése körülbelül mennyivel csökkenti a fűtési energiafelhasználást?"
      },
      options: {
        en: ["2%", "7%", "15%"],
        es: ["2%", "7%", "15%"],
        hu: ["2%", "7%", "15%"]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Impact of Abandoned Fishing Gear",
      es: "Impacto del equipo de pesca abandonado",
      hu: "Az elhagyott halászeszközök hatása"
    },
    content: {
      en: "Abandoned fishing gear, or 'ghost nets,' can float in the ocean for over 600 years, continuously trapping marine life. Choosing plant-based foods reduces demand on industrial fishing, helping protect marine ecosystems and prevent plastic pollution at its source.",
      es: "El equipo de pesca abandonado, o 'redes fantasma', puede flotar en el océano durante más de 600 años, atrapando continuamente vida marina. Elegir alimentos de origen vegetal reduce la demanda de pesca industrial, ayudando a proteger los ecosistemas marinos y prevenir la contaminación plástica desde la fuente.",
      hu: "Az elhagyott halászhálók, vagyis a 'szellemhálók', több mint 600 évig sodródhatnak az óceánban, folyamatosan csapdába ejtve a tengeri élőlényeket. A növényi alapú ételek választása csökkenti az ipari halászat iránti keresletet, segítve a tengeri ökoszisztémák védelmét és a műanyagszennyezés megelőzését már a forrásnál."
    },
    question: {
      text: {
        en: "How long can abandoned fishing nets continue to trap marine animals in the ocean?",
        es: "¿Durante cuánto tiempo pueden las redes de pesca abandonadas seguir atrapando animales marinos en el océano?",
        hu: "Meddig csapdázhatják tovább az elhagyott halászhálók a tengeri állatokat az óceánban?"
      },
      options: {
        en: ["10–50 years", "100–200 years", "Over 600 years"],
        es: ["10–50 años", "100–200 años", "Más de 600 años"],
        hu: ["10–50 év", "100–200 év", "Több mint 600 év"]
      },
      correctIndex: 2
    }
  },
  {
    title: {
      en: "Global Temperature Rise",
      es: "Aumento de la temperatura global",
      hu: "A globális hőmérséklet emelkedése"
    },
    content: {
      en: "Global temperatures have already risen by about 1.2°C since pre-industrial times. If warming reaches 2°C, up to 99% of coral reefs could disappear, destroying ecosystems that support a quarter of all marine life.",
      es: "Las temperaturas globales ya han aumentado alrededor de 1,2°C desde la época preindustrial. Si el calentamiento alcanza los 2°C, hasta el 99% de los arrecifes de coral podrían desaparecer, destruyendo ecosistemas que sostienen una cuarta parte de toda la vida marina.",
      hu: "A globális hőmérséklet már kb. 1,2°C-kal emelkedett az ipari forradalom előtti időkhöz képest. Ha a felmelegedés eléri a 2°C-ot, a korallzátonyok akár 99%-a eltűnhet, elpusztítva az ökoszisztémákat, amelyek a tengeri élőlények negyedét támogatják."
    },
    question: {
      text: {
        en: "What percentage of coral reefs could vanish if global warming reaches 2°C?",
        es: "¿Qué porcentaje de los arrecifes de coral podría desaparecer si el calentamiento global alcanza los 2°C?",
        hu: "A korallzátonyok hány százaléka tűnhet el, ha a globális felmelegedés eléri a 2°C-ot?"
      },
      options: {
        en: ["25%", "60%", "Up to 99%"],
        es: ["25%", "60%", "Hasta el 99%"],
        hu: ["25%", "60%", "Akár 99%"]
      },
      correctIndex: 2
    }
  },
{
    title: {
      en: "Oceans as Carbon Sinks",
      es: "Los océanos como sumideros de carbono",
      hu: "Az óceánok mint szénelnyelők"
    },
    content: {
      en: "Oceans absorb about 25–30% of human CO₂ emissions and store more heat than the atmosphere. Phytoplankton alone captures roughly 50 billion tons of CO₂ each year. Protecting marine ecosystems maintains this natural CO₂ sink.",
      es: "Los océanos absorben aproximadamente el 25-30% de las emisiones humanas de CO₂ y almacenan más calor que la atmósfera. Solo el fitoplancton captura alrededor de 50 mil millones de toneladas de CO₂ cada año. Proteger los ecosistemas marinos mantiene este sumidero natural de CO₂.",
      hu: "Az óceánok az emberi CO₂-kibocsátás körülbelül 25–30%-át elnyelik, és több hőt tárolnak, mint a légkör. Maga a fitoplankton évente kb. 50 milliárd tonna CO₂-t köt meg. A tengeri ökoszisztémák védelme fenntartja ezt a természetes szénelnyelőt."
    },
    question: {
      text: {
        en: "Approximately what percentage of human CO₂ emissions do oceans absorb?",
        es: "¿Qué porcentaje aproximado de las emisiones humanas de CO₂ absorben los océanos?",
        hu: "Körülbelül a hány százalékát nyelik el az óceánok az emberi CO₂-kibocsátásnak?"
      },
      options: {
        en: ["10–15%", "25–30%", "50–60%"],
        es: ["10–15%", "25–30%", "50–60%"],
        hu: ["10–15%", "25–30%", "50–60%"]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "CO₂ Emissions from Animal vs Plant Foods",
      es: "Emisiones de CO₂ de alimentos animales vs vegetales",
      hu: "CO₂-kibocsátás állati és növényi élelmiszerekből"
    },
    content: {
      en: "Producing 1 kg of beef releases ~60 kg of CO₂, cheese ~23 kg, and milk ~3 kg. In contrast, tofu produces 3 kg, and lentils less than 1 kg. Choosing more plant-based options can cut food-related emissions by up to 75%.",
      es: "Producir 1 kg de carne de res libera ~60 kg de CO₂, queso ~23 kg y leche ~3 kg. En contraste, el tofu produce 3 kg y las lentejas menos de 1 kg. Elegir más opciones vegetales puede reducir las emisiones relacionadas con los alimentos hasta en un 75%.",
      hu: "1 kg marhahús előállítása kb. 60 kg CO₂-t bocsát ki, a sajt ~23 kg-ot, a tej ~3 kg-ot. Ezzel szemben a tofu 3 kg, a lencse kevesebb, mint 1 kg CO₂-t termel. Több növényi alapú étel választása akár 75%-kal csökkentheti az élelmiszerhez kapcsolódó kibocsátást."
    },
    question: {
      text: {
        en: "Which of these foods causes the most CO₂ emissions per kilogram?",
        es: "¿Cuál de estos alimentos causa más emisiones de CO₂ por kilogramo?",
        hu: "Melyik étel bocsát ki a legtöbb CO₂-t kilogrammonként?"
      },
      options: {
        en: ["Beef", "Cheese", "Tofu"],
        es: ["Carne de res", "Queso", "Tofu"],
        hu: ["Marhahús", "Sajt", "Tofu"]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Water Use in Milk Production",
      es: "Uso de agua en la producción de leche",
      hu: "A vízhasználat a tejtermelésben"
    },
    content: {
      en: "Dairy milk is water-intensive: producing 1 liter requires about 1,000 liters of water. Plant-based alternatives need far less — oat milk ~48 liters, soy milk ~28 liters, almond milk ~371 liters.",
      es: "La leche de vaca requiere mucha agua: producir 1 litro necesita aproximadamente 1.000 litros de agua. Las alternativas vegetales necesitan mucho menos: leche de avena ~48 litros, leche de soja ~28 litros, leche de almendra ~371 litros.",
      hu: "A tehéntej vízigényes: 1 liter előállításához kb. 1000 liter víz szükséges. A növényi alternatívák sokkal kevesebbet igényelnek — zabtej ~48 liter, szója tej ~28 liter, mandulatej ~371 liter."
    },
    question: {
      text: {
        en: "Which type of milk uses the most water per liter?",
        es: "¿Qué tipo de leche utiliza más agua por litro?",
        hu: "Melyik tejfajta használja a legtöbb vizet literenként?"
      },
      options: {
        en: ["Cow’s milk", "Oat milk", "Soy milk"],
        es: ["Leche de vaca", "Leche de avena", "Leche de soja"],
        hu: ["Tehéntej", "Zabtej", "Szója tej"]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Land Use for Milk Production",
      es: "Uso de tierra para la producción de leche",
      hu: "Földhasználat a tejtermeléshez"
    },
    content: {
      en: "To produce 1 liter of cow’s milk, farmers need about 9 m² of land per year — mostly for feed. Oat milk needs 0.8 m², soy milk 0.7 m², almond milk 0.5 m². Switching to plant-based milk reduces land use by over 85%.",
      es: "Para producir 1 litro de leche de vaca, los agricultores necesitan aproximadamente 9 m² de tierra al año, principalmente para el alimento. La leche de avena necesita 0,8 m², la de soja 0,7 m² y la de almendra 0,5 m². Cambiar a leche vegetal reduce el uso de tierra en más del 85%.",
      hu: "1 liter tehéntej előállításához a gazdáknak évente kb. 9 m² földre van szükségük — főként takarmányhoz. A zabtej 0,8 m²-t, a szója tej 0,7 m²-t, a mandulatej 0,5 m²-t igényel. A növényi alapú tejekre váltás több mint 85%-kal csökkenti a földhasználatot."
    },
    question: {
      text: {
        en: "How much land is needed each year to produce 1 liter of cow’s milk?",
        es: "¿Cuánta tierra se necesita cada año para producir 1 litro de leche de vaca?",
        hu: "Mennyi földre van szükség évente 1 liter tehéntej előállításához?"
      },
      options: {
        en: ["9 m²", "2 m²", "0.7 m²"],
        es: ["9 m²", "2 m²", "0,7 m²"],
        hu: ["9 m²", "2 m²", "0,7 m²"]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Free-range and Regenerative Farming",
      es: "Agricultura libre y regenerativa",
      hu: "Szabad tartású és regeneratív gazdálkodás"
    },
    content: {
      en: "Free-range and regenerative farming can cut emissions by up to 50% compared to conventional methods, but require 2–2.5 times more land to produce the same amount of food.",
      es: "La agricultura libre y regenerativa puede reducir las emisiones hasta en un 50% en comparación con los métodos convencionales, pero requiere 2-2,5 veces más tierra para producir la misma cantidad de alimentos.",
      hu: "A szabad tartású és regeneratív gazdálkodás akár 50%-kal csökkentheti a kibocsátást a hagyományos módszerekhez képest, de ugyanannyi élelmiszer előállításához 2–2,5-szer több földre van szükség."
    },
    question: {
      text: {
        en: "Compared to conventional farming, how much more land do free-range products typically need?",
        es: "En comparación con la agricultura convencional, ¿cuánta más tierra necesitan típicamente los productos de libre crianza?",
        hu: "A hagyományos gazdálkodáshoz képest mennyivel több földre van szükség a szabad tartású termékek előállításához?"
      },
      options: {
        en: ["1.5x", "2–2.5x", "3x"],
        es: ["1,5x", "2–2,5x", "3x"],
        hu: ["1,5x", "2–2,5x", "3x"]
      },
      correctIndex: 1
    }
  },
{
    title: {
      en: "Low-Carbon Transportation",
      es: "Transporte de bajo carbono",
      hu: "Alacsony szén-dioxid-kibocsátású közlekedés"
    },
    content: {
      en: "A medium car emits ~120 g CO₂/km, a return flight NY-London ~1.2 tons per passenger, and the train ~14 g CO₂/km. Choosing trains, biking, walking, or combining trips drastically reduces your carbon footprint.",
      es: "Un coche medio emite ~120 g CO₂/km, un vuelo de ida y vuelta NY-Londres ~1,2 toneladas por pasajero, y el tren ~14 g CO₂/km. Elegir trenes, bicicletas, caminar o combinar viajes reduce drásticamente tu huella de carbono.",
      hu: "Egy közepes autó kb. 120 g CO₂/km-t bocsát ki, egy New York–London oda-vissza járat ~1,2 tonna/passzager, míg a vonat ~14 g CO₂/km-t. A vonat, kerékpár, gyaloglás vagy utak kombinálása drasztikusan csökkenti a szénlábnyomot."
    },
    question: {
      text: {
        en: "Which mode of transport emits the least CO₂ per kilometer?",
        es: "¿Qué medio de transporte emite menos CO₂ por kilómetro?",
        hu: "Melyik közlekedési mód bocsátja ki a legkevesebb CO₂-t kilométerenként?"
      },
      options: {
        en: ["Car", "Plane", "Train"],
        es: ["Coche", "Avión", "Tren"],
        hu: ["Autó", "Repülő", "Vonat"]
      },
      correctIndex: 2
    }
  },
  {
    title: {
      en: "Leather and Environmental Impact",
      es: "Cuero e impacto ambiental",
      hu: "Bőr és környezeti hatás"
    },
    content: {
      en: "Producing 1 m² of cowhide leather emits 65–110 kg of CO₂ and requires ~15,000 liters of water. Plant-based leathers produce only 1–8 kg of CO₂ and use less than 100 liters of water.",
      es: "Producir 1 m² de cuero de vaca emite 65–110 kg de CO₂ y requiere ~15,000 litros de agua. Los cueros vegetales producen solo 1–8 kg de CO₂ y usan menos de 100 litros de agua.",
      hu: "1 m² marhabőr előállítása 65–110 kg CO₂-t bocsát ki és kb. 15 000 liter vizet igényel. A növényi alapú bőrök mindössze 1–8 kg CO₂-t termelnek és kevesebb mint 100 liter vizet használnak."
    },
    question: {
      text: {
        en: "How many kilograms of CO₂ does 1 m² of cowhide leather emit?",
        es: "¿Cuántos kilogramos de CO₂ emite 1 m² de cuero de vaca?",
        hu: "Hány kg CO₂-t bocsát ki 1 m² marhabőr?"
      },
      options: {
        en: ["10–20 kg", "30–50 kg", "65–110 kg"],
        es: ["10–20 kg", "30–50 kg", "65–110 kg"],
        hu: ["10–20 kg", "30–50 kg", "65–110 kg"]
      },
      correctIndex: 2
    }
  },
  {
    title: {
      en: "Cropland for Meat and Dairy",
      es: "Tierras agrícolas para carne y lácteos",
      hu: "Mezőgazdasági föld hús és tejtermékek számára"
    },
    content: {
      en: "77% of global cropland produces meat and dairy, providing only ~18% of calories. Producing these foods emits 2–5 times more CO₂ than necessary compared to growing crops directly for humans.",
      es: "El 77% de la tierra cultivable mundial produce carne y lácteos, proporcionando solo ~18% de las calorías. Producir estos alimentos emite 2–5 veces más CO₂ de lo necesario en comparación con cultivar directamente para humanos.",
      hu: "A világ mezőgazdasági földjeinek 77%-án húst és tejterméket termelnek, amelyek csak kb. 18%-át adják a kalóriáknak. Ezek előállítása 2–5-ször több CO₂-t bocsát ki, mintha a növényeket közvetlenül embereknek termelnénk."
    },
    question: {
      text: {
        en: "Producing meat and dairy emits how many times more CO₂ than necessary?",
        es: "¿Cuántas veces más CO₂ se emite al producir carne y lácteos de lo necesario?",
        hu: "Hányszor több CO₂-t bocsátanak ki a hús- és tejtermékek előállítása során, mint amennyi szükséges lenne?"
      },
      options: {
        en: ["1x", "2–5x", "10x"],
        es: ["1x", "2–5x", "10x"],
        hu: ["1x", "2–5x", "10x"]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Water for Egg Production",
      es: "Agua para la producción de huevos",
      hu: "Víz a tojástermeléshez"
    },
    content: {
      en: "Producing 1 kg of eggs requires ~3,300 liters of water, mostly to grow feed for hens. 1 kg of lentils needs only ~1,250 liters.",
      es: "Producir 1 kg de huevos requiere ~3,300 litros de agua, principalmente para cultivar alimento para las gallinas. 1 kg de lentejas necesita solo ~1,250 litros.",
      hu: "1 kg tojás előállításához kb. 3 300 liter víz szükséges, főként a tyúkok takarmányához. 1 kg lencse csak kb. 1 250 liter vizet igényel."
    },
    question: {
      text: {
        en: "How much water is needed to produce 1 kg of eggs?",
        es: "¿Cuánta agua se necesita para producir 1 kg de huevos?",
        hu: "Mennyi vízre van szükség 1 kg tojás előállításához?"
      },
      options: {
        en: ["1,250 liters", "3,300 liters", "5,000 liters"],
        es: ["1,250 litros", "3,300 litros", "5,000 litros"],
        hu: ["1 250 liter", "3 300 liter", "5 000 liter"]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Global Wildlife Decline",
      es: "Declive de la fauna mundial",
      hu: "Globális vadon élő állatok állománycsökkenése"
    },
    content: {
      en: "Globally, monitored wildlife populations fell by 73% between 1970–2020. Many marine mammal stocks are now vulnerable to warming waters and habitat loss, with some species near collapse.",
      es: "A nivel mundial, las poblaciones de fauna monitoreadas cayeron un 73% entre 1970 y 2020. Muchas poblaciones de mamíferos marinos ahora son vulnerables al calentamiento de las aguas y la pérdida de hábitat, y algunas especies están cerca del colapso.",
      hu: "Világszerte a monitorozott vadvilág-populációk 73%-kal csökkentek 1970–2020 között. Sok tengeri emlősállomány most a vízhőmérséklet emelkedése és az élőhelyvesztés miatt sebezhető, egyes fajok közel állnak a kipusztuláshoz."
    },
    question: {
      text: {
        en: "By roughly what percentage did monitored wildlife populations decline globally from 1970 to 2020?",
        es: "¿En qué porcentaje aproximadamente disminuyeron las poblaciones de fauna monitoreadas a nivel mundial entre 1970 y 2020?",
        hu: "Körülbelül hány százalékkal csökkentek a monitorozott vadvilág-populációk 1970 és 2020 között világszerte?"
      },
      options: {
        en: ["35%", "73%", "90%"],
        es: ["35%", "73%", "90%"],
        hu: ["35%", "73%", "90%"]
      },
      correctIndex: 1
    }
  },
{
    title: {
      en: "Environmental Impact of Eggs",
      es: "Impacto ambiental de los huevos",
      hu: "A tojások környezeti hatása"
    },
    content: {
      en: "Producing 1 kg of eggs emits about 2.7 kg of CO₂, requires roughly 3,300 liters of water, and about 36 m² of land. In comparison, 1 kg of lentils emits around 0.9 kg of CO₂, uses 1,250 liters of water, and 2–3 m² of land. Tofu is similar, with ~3 kg CO₂, 302 liters of water, and 2–3 m² of land per kilogram.",
      es: "Producir 1 kg de huevos emite aproximadamente 2,7 kg de CO₂, requiere alrededor de 3.300 litros de agua y unos 36 m² de tierra. En comparación, 1 kg de lentejas emite alrededor de 0,9 kg de CO₂, usa 1.250 litros de agua y 2–3 m² de tierra. El tofu es similar, con ~3 kg de CO₂, 302 litros de agua y 2–3 m² de tierra por kilogramo.",
      hu: "1 kg tojás előállítása kb. 2,7 kg CO₂-t bocsát ki, kb. 3 300 liter vizet és kb. 36 m² földet igényel. Összehasonlításként 1 kg lencse kb. 0,9 kg CO₂-t termel, 1 250 liter vizet használ és 2–3 m² földet igényel. A tofu hasonló, kb. 3 kg CO₂, 302 liter víz és 2–3 m² föld kilogrammonként."
    },
    question: {
      text: {
        en: "Which has a lower environmental impact per kilogram?",
        es: "¿Cuál tiene un menor impacto ambiental por kilogramo?",
        hu: "Mi rendelkezik alacsonyabb környezeti hatással kilogrammonként?"
      },
      options: {
        en: ["Eggs", "Lentils", "Beef"],
        es: ["Huevos", "Lentejas", "Carne de res"],
        hu: ["Tojás", "Lencse", "Marhahús"]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Water for Cheese Production",
      es: "Agua para producir queso",
      hu: "Víz a sajt előállításához"
    },
    content: {
      en: "Producing 1 kg of cheese requires ~5,000 liters of water, mostly to grow the milk. 1 kg of lentils only requires ~1,250 liters.",
      es: "Producir 1 kg de queso requiere ~5.000 litros de agua, principalmente para la leche. 1 kg de lentejas solo necesita ~1.250 litros.",
      hu: "1 kg sajt előállításához kb. 5 000 liter víz szükséges, főleg a tej előállításához. 1 kg lencse csak kb. 1 250 liter vizet igényel."
    },
    question: {
      text: {
        en: "How much water is needed to produce 1 kg of cheese?",
        es: "¿Cuánta agua se necesita para producir 1 kg de queso?",
        hu: "Mennyi víz szükséges 1 kg sajt előállításához?"
      },
      options: {
        en: ["1,250 liters", "3,000 liters", "5,000 liters"],
        es: ["1.250 litros", "3.000 litros", "5.000 litros"],
        hu: ["1 250 liter", "3 000 liter", "5 000 liter"]
      },
      correctIndex: 2
    }
  },
  {
    title: {
      en: "Carbon Footprint of Cheese",
      es: "Huella de carbono del queso",
      hu: "A sajt szénlábnyoma"
    },
    content: {
      en: "1 kg of cheese emits ~23 kg of CO₂, while 1 liter of cow’s milk emits ~3 kg CO₂. Cheese produces 5–10 times more emissions per kilogram than plant-based alternatives.",
      es: "1 kg de queso emite ~23 kg de CO₂, mientras que 1 litro de leche de vaca emite ~3 kg CO₂. El queso produce 5–10 veces más emisiones por kilogramo que las alternativas vegetales.",
      hu: "1 kg sajt kb. 23 kg CO₂-t bocsát ki, míg 1 liter tehéntej kb. 3 kg CO₂-t termel. A sajt 5–10-szer több kibocsátást okoz kilogrammonként, mint a növényi alternatívák."
    },
    question: {
      text: {
        en: "How many kilograms of CO₂ are emitted to produce 1 kg of cheese?",
        es: "¿Cuántos kilogramos de CO₂ se emiten al producir 1 kg de queso?",
        hu: "Hány kg CO₂-t bocsátanak ki 1 kg sajt előállításához?"
      },
      options: {
        en: ["3 kg", "10 kg", "23 kg"],
        es: ["3 kg", "10 kg", "23 kg"],
        hu: ["3 kg", "10 kg", "23 kg"]
      },
      correctIndex: 2
    }
  },
  {
    title: {
      en: "Impact of Industrial Fishing",
      es: "Impacto de la pesca industrial",
      hu: "Az ipari halászat hatása"
    },
    content: {
      en: "Industrial fishing kills ~300,000 whales, dolphins, and porpoises each year via bycatch. Overfishing has caused predator fish populations to drop by over 90% in 50 years.",
      es: "La pesca industrial mata a ~300.000 ballenas, delfines y marsopas cada año por captura incidental. La sobrepesca ha hecho que las poblaciones de peces depredadores caigan más del 90% en 50 años.",
      hu: "Az ipari halászat évente kb. 300 000 bálnát, delfint és csőröscápát öl meg mellékfogásként. Az túlhalászás miatt a ragadozó halpopulációk az elmúlt 50 évben több mint 90%-kal csökkentek."
    },
    question: {
      text: {
        en: "Approximately how many large marine mammals are killed by bycatch each year?",
        es: "¿Aproximadamente cuántos mamíferos marinos grandes mueren cada año por captura incidental?",
        hu: "Körülbelül hány nagy tengeri emlőst ölnek meg mellékfogásként évente?"
      },
      options: {
        en: ["50,000", "300,000", "1,000,000"],
        es: ["50.000", "300.000", "1.000.000"],
        hu: ["50 000", "300 000", "1 000 000"]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Sustainability of Plant-based Foods",
      es: "Sostenibilidad de los alimentos vegetales",
      hu: "Növényi alapú élelmiszerek fenntarthatósága"
    },
    content: {
      en: "Highly processed vegetarian foods can have up to 4 times the CO₂ emissions of fresh vegetables due to production energy, packaging, and transport. Minimally processed plant foods maximize environmental benefits.",
      es: "Los alimentos vegetarianos altamente procesados pueden tener hasta 4 veces las emisiones de CO₂ de los vegetales frescos debido a la energía de producción, el empaquetado y el transporte. Los alimentos vegetales mínimamente procesados maximizan los beneficios ambientales.",
      hu: "A nagyon feldolgozott vegetáriánus élelmiszerek akár 4-szer több CO₂-t termelhetnek, mint a friss zöldségek a gyártási energia, csomagolás és szállítás miatt. A minimálisan feldolgozott növényi élelmiszerek maximalizálják a környezeti előnyöket."
    },
    question: {
      text: {
        en: "How much higher can emissions be for processed vegetarian foods compared to fresh vegetables?",
        es: "¿Cuánto más altas pueden ser las emisiones de los alimentos vegetarianos procesados en comparación con los vegetales frescos?",
        hu: "Mennyivel lehet magasabb a kibocsátás a feldolgozott vegetáriánus ételek esetén a friss zöldségekhez képest?"
      },
      options: {
        en: ["About the same", "2x higher", "Up to 4x higher"],
        es: ["Más o menos igual", "2x más", "Hasta 4x más"],
        hu: ["Körülbelül ugyanannyi", "2x magasabb", "Akár 4x magasabb"]
      },
      correctIndex: 2
    }
  },
{
    title: {
      en: "Bottom Trawling Damage",
      es: "Daños de la pesca de arrastre de fondo",
      hu: "Az aljzathúzó halászat káros hatásai"
    },
    content: {
      en: "Bottom trawling drags heavy nets along the ocean floor, destroying habitats and releasing stored carbon. About 15% of the world’s continental shelf is affected, making it one of the most destructive fishing practices.",
      es: "La pesca de arrastre de fondo arrastra redes pesadas por el fondo del océano, destruyendo hábitats y liberando carbono almacenado. Aproximadamente el 15% de la plataforma continental mundial se ve afectada, siendo una de las prácticas de pesca más destructivas.",
      hu: "Az aljzathúzó halászat nehéz hálókat húz az óceán fenekén, elpusztítva az élőhelyeket és kibocsátva a felhalmozódott szén-dioxidot. A világ kontinentális talapzatának kb. 15%-át érinti, ez az egyik legpusztítóbb halászati módszer."
    },
    question: {
      text: {
        en: "Why is bottom trawling considered highly destructive?",
        es: "¿Por qué se considera muy destructiva la pesca de arrastre de fondo?",
        hu: "Miért tekinthető az aljzathúzó halászat rendkívül károsnak?"
      },
      options: {
        en: [
          "It selectively catches only large fish",
          "It scrapes the ocean floor, destroying habitats and releasing carbon",
          "It uses too much fuel"
        ],
        es: [
          "Solo captura selectivamente peces grandes",
          "Raspa el fondo del océano, destruyendo hábitats y liberando carbono",
          "Consume demasiado combustible"
        ],
        hu: [
          "Csak a nagy halakat fogja ki szelektíven",
          "Lekaparja az óceánfeneket, elpusztítva az élőhelyeket és kibocsátva a szén-dioxidot",
          "Túl sok üzemanyagot használ"
        ]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Water Footprint of Animal vs Plant Foods",
      es: "Huella hídrica de alimentos animales vs vegetales",
      hu: "Vízfelhasználás állati és növényi ételeknél"
    },
    content: {
      en: "Producing 1 kg of beef requires over 15,000 liters of water, whereas 1 kg of beans needs around 4,000 liters. This huge difference shows why plant-based diets are far less water-intensive.",
      es: "Producir 1 kg de carne de res requiere más de 15.000 litros de agua, mientras que 1 kg de frijoles necesita alrededor de 4.000 litros. Esta gran diferencia muestra por qué las dietas basadas en plantas consumen mucha menos agua.",
      hu: "1 kg marhahús előállítása több mint 15 000 liter vizet igényel, míg 1 kg bab körülbelül 4 000 litert. Ez a nagy különbség megmutatja, miért kevésbé vízigényes a növényi alapú étrend."
    },
    question: {
      text: {
        en: "Approximately how many liters of water are needed to produce 1 kg of beef?",
        es: "¿Aproximadamente cuántos litros de agua se necesitan para producir 1 kg de carne de res?",
        hu: "Körülbelül hány liter víz szükséges 1 kg marhahús előállításához?"
      },
      options: {
        en: ["1,000 liters", "5,000 liters", "15,000 liters", "30,000 liters"],
        es: ["1.000 litros", "5.000 litros", "15.000 litros", "30.000 litros"],
        hu: ["1 000 liter", "5 000 liter", "15 000 liter", "30 000 liter"]
      },
      correctIndex: 2
    }
  },
  {
    title: {
      en: "Veganism and Economic Transition",
      es: "Veganismo y transición económica",
      hu: "A veganizmus és a gazdasági átmenet"
    },
    content: {
      en: "A shift to a plant-based diet can create new jobs in sustainable farming, food innovation, and eco-friendly industries. The transition is gradual, allowing farmers and communities time to adapt while protecting people, animals, and the planet.",
      es: "Un cambio hacia una dieta basada en plantas puede crear nuevos empleos en agricultura sostenible, innovación alimentaria e industrias ecológicas. La transición es gradual, permitiendo que los agricultores y comunidades se adapten mientras se protege a las personas, animales y al planeta.",
      hu: "A növényi alapú étrendre való áttérés új munkahelyeket teremthet a fenntartható mezőgazdaságban, élelmiszer-innovációban és környezetbarát iparágakban. Az átmenet fokozatos, lehetőséget adva a gazdáknak és közösségeknek az alkalmazkodásra, miközben védi az embereket, az állatokat és a bolygót."
    },
    question: {
      text: {
        en: "Why shouldn’t we worry that veganism will suddenly harm the economy?",
        es: "¿Por qué no debemos preocuparnos de que el veganismo dañe repentinamente la economía?",
        hu: "Miért nem kell aggódnunk amiatt, hogy a veganizmus hirtelen kárt okozna a gazdaságnak?"
      },
      options: {
        en: [
          "Because the transition will be slow and allow people to adapt",
          "Because farmers will stop working immediately",
          "Because veganism eliminates all jobs",
          "Because no one needs to eat anymore"
        ],
        es: [
          "Porque la transición será lenta y permitirá que la gente se adapte",
          "Porque los agricultores dejarán de trabajar inmediatamente",
          "Porque el veganismo elimina todos los empleos",
          "Porque nadie necesita comer más"
        ],
        hu: [
          "Mert az átmenet lassú lesz, és lehetővé teszi az emberek számára az alkalmazkodást",
          "Mert a gazdák azonnal abbahagyják a munkát",
          "Mert a veganizmus megszünteti az összes munkahelyet",
          "Mert senkinek sem kell többé ennie"
        ]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Climate Impact of Animal Agriculture",
      es: "Impacto climático de la agricultura animal",
      hu: "Az állattenyésztés klímahatása"
    },
    content: {
      en: "Raising animals for meat and dairy produces about 14.5% of global greenhouse gas emissions — roughly the same as all transport combined. It also drives deforestation, water overuse, and other environmental damage.",
      es: "La cría de animales para carne y lácteos produce aproximadamente el 14,5% de las emisiones globales de gases de efecto invernadero, aproximadamente lo mismo que todo el transporte combinado. También impulsa la deforestación, el uso excesivo de agua y otros daños ambientales.",
      hu: "Az állatok hús- és tejtermelésre történő tenyésztése a globális üvegházhatású gázok kb. 14,5%-át termeli — nagyjából ugyanannyit, mint az összes közlekedés együttvéve. Emellett erdőirtást, víztúlfelhasználást és más környezeti károkat okoz."
    },
    question: {
      text: {
        en: "Animal agriculture produces roughly the same greenhouse gas emissions as which sector?",
        es: "La agricultura animal produce aproximadamente las mismas emisiones de gases de efecto invernadero que qué sector?",
        hu: "Az állattenyésztés nagyjából ugyanannyi üvegházhatású gázt bocsát ki, mint melyik szektor?"
      },
      options: {
        en: ["Industry", "Transport", "Energy production", "Buildings"],
        es: ["Industria", "Transporte", "Producción de energía", "Edificios"],
        hu: ["Ipar", "Közlekedés", "Energia előállítás", "Épületek"]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Limits of Regenerative Farming",
      es: "Límites de la agricultura regenerativa",
      hu: "A regeneratív gazdálkodás korlátai"
    },
    content: {
      en: "Even regenerative animal farming cannot sustainably feed the global population with a meat-heavy diet. The land required exceeds what is available on Earth, despite some carbon capture benefits.",
      es: "Incluso la agricultura animal regenerativa no puede alimentar de manera sostenible a la población mundial con una dieta rica en carne. La tierra requerida supera la disponible en la Tierra, a pesar de algunos beneficios de captura de carbono.",
      hu: "Még a regeneratív állattartás sem képes fenntarthatóan ellátni a világ népességét húsban gazdag étrenddel. A szükséges földterület meghaladja a Földön rendelkezésre állót, némi szénelnyelési előny ellenére."
    },
    question: {
      text: {
        en: "Why can’t regenerative farming fully make meat production sustainable for everyone?",
        es: "¿Por qué la agricultura regenerativa no puede hacer que la producción de carne sea completamente sostenible para todos?",
        hu: "Miért nem tudja a regeneratív gazdálkodás mindenki számára fenntarthatóvá tenni a hús előállítását?"
      },
      options: {
        en: [
          "Because it doesn’t capture any carbon",
          "Because meat requires far more land than is available for the current global diet",
          "Because plants can’t grow on regenerative farms",
          "Because it eliminates jobs in agriculture"
        ],
        es: [
          "Porque no captura carbono",
          "Porque la carne requiere mucha más tierra de la disponible para la dieta global actual",
          "Porque las plantas no pueden crecer en granjas regenerativas",
          "Porque elimina empleos en agricultura"
        ],
        hu: [
          "Mert nem nyel el szén-dioxidot",
          "Mert a hús sokkal több földet igényel, mint ami a jelenlegi globális étrendhez rendelkezésre áll",
          "Mert a növények nem nőhetnek regeneratív gazdaságokban",
          "Mert megszünteti a mezőgazdasági munkahelyeket"
        ]
      },
      correctIndex: 1
    }
  },
{
    title: {
      en: "Importance of Biodiversity",
      es: "Importancia de la biodiversidad",
      hu: "A biodiverzitás jelentősége"
    },
    content: {
      en: "Biodiversity provides food, clean water, fertile soils, and helps regulate the climate. Losing species reduces ecosystem resilience and weakens the services humans rely on for survival.",
      es: "La biodiversidad proporciona alimentos, agua limpia, suelos fértiles y ayuda a regular el clima. La pérdida de especies reduce la resiliencia de los ecosistemas y debilita los servicios de los que dependen los humanos para sobrevivir.",
      hu: "A biodiverzitás élelmet, tiszta vizet, termékeny talajt biztosít, és segít a klíma szabályozásában. A fajok elvesztése csökkenti az ökoszisztémák ellenálló képességét és gyengíti azokat a szolgáltatásokat, amelyekre az emberek támaszkodnak a túléléshez."
    },
    question: {
      text: {
        en: "Why is biodiversity important for humans?",
        es: "¿Por qué es importante la biodiversidad para los humanos?",
        hu: "Miért fontos a biodiverzitás az emberek számára?"
      },
      options: {
        en: ["It is just nice to look at", "It supports food, water, and climate regulation", "It increases traffic"],
        es: ["Solo es agradable de ver", "Apoya alimentos, agua y regulación del clima", "Aumenta el tráfico"],
        hu: ["Csak szép nézni", "Támogatja az élelmet, vizet és a klíma szabályozását", "Növeli a forgalmat"]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Land Freed by Plant-Based Diets",
      es: "Tierras liberadas por dietas basadas en plantas",
      hu: "A növényi alapú étrendek által felszabadított földterület"
    },
    content: {
      en: "Shifting to a mostly plant-based diet could free up around 70% of agricultural land currently used for livestock and feed crops. Returning this land to nature could restore habitats, boost biodiversity, and allow wildlife to recover.",
      es: "Pasarse a una dieta mayormente basada en plantas podría liberar alrededor del 70% de la tierra agrícola actualmente utilizada para ganado y cultivos de alimento. Devolver esta tierra a la naturaleza podría restaurar hábitats, aumentar la biodiversidad y permitir que la vida silvestre se recupere.",
      hu: "Az áttérés túlnyomórészt növényi alapú étrendre a mezőgazdasági földek kb. 70%-át szabadíthatja fel, amelyet jelenleg állatok és takarmánynövények termelésére használnak. Ennek a földnek a természetnek való visszaadása helyreállíthatja az élőhelyeket, növelheti a biodiverzitást és lehetővé teheti a vadon élő állatok regenerálódását."
    },
    question: {
      text: {
        en: "What percentage of agricultural land could be freed by adopting a plant-based diet?",
        es: "¿Qué porcentaje de la tierra agrícola podría liberarse al adoptar una dieta basada en plantas?",
        hu: "A mezőgazdasági földek hány százaléka szabadítható fel növényi alapú étrend alkalmazásával?"
      },
      options: {
        en: ["Around 70%", "10%", "50%"],
        es: ["Alrededor del 70%", "10%", "50%"],
        hu: ["Kb. 70%", "10%", "50%"]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Destructive Fishing Practices",
      es: "Prácticas de pesca destructivas",
      hu: "Destruktív halászati módszerek"
    },
    content: {
      en: "Bottom trawling and other destructive fishing methods destroy ocean habitats, reduce biodiversity, and destabilize marine ecosystems, making it harder for oceans to recover.",
      es: "El arrastre de fondo y otros métodos de pesca destructivos destruyen los hábitats oceánicos, reducen la biodiversidad y desestabilizan los ecosistemas marinos, dificultando la recuperación de los océanos.",
      hu: "Az aljzathúzó halászat és más destruktív halászati módszerek elpusztítják az óceán élőhelyeit, csökkentik a biodiverzitást és destabilizálják a tengeri ökoszisztémákat, megnehezítve az óceánok regenerálódását."
    },
    question: {
      text: {
        en: "Which effect do destructive fishing methods like bottom trawling have?",
        es: "¿Qué efecto tienen los métodos de pesca destructivos como el arrastre de fondo?",
        hu: "Milyen hatása van az aljzathúzó halászathoz hasonló destruktív módszereknek?"
      },
      options: {
        en: ["Increase fish populations","Destroy habitats and reduce biodiversity", "Help coral growth"],
        es: ["Aumentar la población de peces", "Destruir hábitats y reducir la biodiversidad", "Ayudar al crecimiento de los corales"],
        hu: ["Növeli a halpopulációkat", "Elpusztítja az élőhelyeket és csökkenti a biodiverzitást", "Segíti a korallnövekedést"]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Oceans as Carbon Sinks",
      es: "Océanos como sumideros de carbono",
      hu: "Óceánok, mint szénelnyelők"
    },
    content: {
      en: "Oceans absorb about 30% of human CO₂ emissions. Declining biodiversity reduces this capacity, accelerating climate change and weakening marine ecosystem health.",
      es: "Los océanos absorben alrededor del 30% de las emisiones de CO₂ humanas. La disminución de la biodiversidad reduce esta capacidad, acelerando el cambio climático y debilitando la salud de los ecosistemas marinos.",
      hu: "Az óceánok az emberi CO₂-kibocsátás kb. 30%-át elnyelik. A biodiverzitás csökkenése csökkenti ezt a képességet, felgyorsítva a klímaváltozást és gyengítve a tengeri ökoszisztémák egészségét."
    },
    question: {
      text: {
        en: "How does declining ocean biodiversity affect CO₂ absorption?",
        es: "¿Cómo afecta la disminución de la biodiversidad oceánica a la absorción de CO₂?",
        hu: "Hogyan befolyásolja a tengeri biodiverzitás csökkenése a CO₂ elnyelését?"
      },
      options: {
        en: ["Increases carbon storage", "Has no effect","Reduces the ocean's ability to store carbon"],
        es: ["Aumenta el almacenamiento de carbono", "No tiene efecto", "Reduce la capacidad del océano para almacenar carbono"],
        hu: ["Növeli a szénelnyelést", "Nincs hatása", "Csökkenti az óceán szénelnyelő képességét"]
      },
      correctIndex: 2
    }
  },
  {
    title: {
      en: "Agriculture and Greenhouse Gas Emissions",
      es: "Agricultura y emisiones de gases de efecto invernadero",
      hu: "Mezőgazdaság és üvegházhatású gázok kibocsátása"
    },
    content: {
      en: "Agriculture contributes nearly 25% of global greenhouse gas emissions, mostly from livestock. Reducing animal product consumption directly lowers emissions from methane, nitrous oxide, and CO₂.",
      es: "La agricultura contribuye con casi el 25% de las emisiones globales de gases de efecto invernadero, principalmente del ganado. Reducir el consumo de productos animales reduce directamente las emisiones de metano, óxido nitroso y CO₂.",
      hu: "A mezőgazdaság a globális üvegházhatású gázok közel 25%-áért felelős, főként az állattenyésztésből. Az állati termékek fogyasztásának csökkentése közvetlenül csökkenti a metán, a dinitrogén-oxid és a CO₂ kibocsátását."
    },
    question: {
      text: {
        en: "What percentage of global greenhouse gas emissions comes from agriculture?",
        es: "¿Qué porcentaje de las emisiones globales de gases de efecto invernadero proviene de la agricultura?",
        hu: "A globális üvegházhatású gázok hány százaléka származik a mezőgazdaságból?"
      },
      options: {
        en: ["10%", "25%", "50%"],
        es: ["10%", "25%", "50%"],
        hu: ["10%", "25%", "50%"]
      },
      correctIndex: 1
    }
  },
{
  title: {
    en: "Deforestation and Livestock",
    es: "Deforestación y ganadería",
    hu: "Erdőirtás és állattenyésztés"
  },
  content: {
    en: "Deforestation is largely driven by pasture and feed crops for animals. Millions of hectares of forests are cleared annually, releasing stored carbon and worsening climate change.",
    es: "La deforestación se debe en gran parte a pastos y cultivos para alimentar animales. Millones de hectáreas de bosques se talan cada año, liberando carbono almacenado y empeorando el cambio climático.",
    hu: "Az erdőirtást nagyrészt legelők és takarmánynövények termesztése okozza az állatok számára. Évente millió hektár erdőt vágnak ki, felszabadítva a tárolt szenet és súlyosbítva a klímaváltozást."
  },
  question: {
    text: {
      en: "What is a primary driver of deforestation?",
      es: "¿Cuál es el principal impulsor de la deforestación?",
      hu: "Mi az erdőirtás fő oka?"
    },
    options: {
      en: ["Urban expansion only", "Natural causes", "Pasture and feed crops for animals"],
      es: ["Solo expansión urbana", "Causas naturales", "Pastos y cultivos para alimentar animales"],
      hu: ["Csak városi terjeszkedés", "Természetes okok", "Legelők és takarmánynövények az állatok számára"]
    },
    correctIndex: 2
  }
},
// more lessons here

{
  title: {
    en: "🔄 Review a Lesson",
    es: "🔄 Repasar una lección",
    hu: "🔄 Egy lecke átismétlése"
  },
  type: "review",
  content: {
    en: "Review a previous lesson and earn extra XP!",
    es: "¡Repasa una lección anterior y gana XP extra!",
    hu: "Ismételj át egy korábbi leckét, és szerezz extra XP-t!"
  }
}
],

 health: [
  {
    title: {
      en: "Plant-Based Diets and Heart Health",
      es: "Dietas basadas en plantas y salud del corazón",
      hu: "Növényi alapú étrend és szív-egészség"
    },
    content: {
      en: "A plant-based diet can naturally lower LDL cholesterol — often called 'bad' cholesterol — because plant foods contain no dietary cholesterol and are usually low in saturated fats. High LDL levels can lead to plaque buildup in the arteries, narrowing them over time. Plant foods are also rich in soluble fiber, which helps remove excess LDL cholesterol from the bloodstream. By eating more fruits, vegetables, whole grains, legumes, nuts, and seeds, you support smoother blood flow, healthier arteries, and better long-term heart health.",
      es: "Una dieta basada en plantas puede reducir de forma natural el colesterol LDL — conocido como colesterol \"malo\" — porque los alimentos vegetales no contienen colesterol dietético y suelen ser bajos en grasas saturadas. Los niveles altos de LDL pueden provocar la acumulación de placas en las arterias, estrechándolas con el tiempo. Además, los alimentos vegetales son ricos en fibra soluble, que ayuda a eliminar el exceso de LDL del torrente sanguíneo. Al consumir más frutas, verduras, cereales integrales, legumbres, frutos secos y semillas, favoreces un flujo sanguíneo más saludable y una mejor salud cardiovascular a largo plazo.",
      hu: "A növényi alapú étrend természetes módon csökkentheti az LDL-koleszterinszintet — amelyet gyakran „rossz” koleszterinnek neveznek — mivel a növényi élelmiszerek nem tartalmaznak étrendi koleszterint, és általában alacsony a telítettzsír-tartalmuk. A magas LDL-szint az artériák beszűküléséhez vezethet a lerakódások miatt. A növényi ételek emellett gazdagok oldható rostokban, amelyek segítenek eltávolítani a felesleges LDL-koleszterint a vérből. Több gyümölcs, zöldség, teljes értékű gabona, hüvelyes, dióféle és mag fogyasztásával támogathatod az egészséges véráramlást és a szív hosszú távú egészségét."
    },
    question: {
      text: {
        en: "Why does a plant-based diet often lower LDL ('bad') cholesterol?",
        es: "¿Por qué una dieta basada en plantas suele reducir el colesterol LDL?",
        hu: "Miért csökkenti gyakran az LDL („rossz”) koleszterinszintet a növényi alapú étrend?"
      },
      options: {
        en: [
          "Plant foods contain no dietary cholesterol and are lower in saturated fats",
          "Plant foods increase cholesterol production",
          "Plant foods are high in trans fats"
        ],
        es: [
          "Los alimentos vegetales no contienen colesterol y tienen menos grasas saturadas",
          "Los alimentos vegetales aumentan la producción de colesterol",
          "Los alimentos vegetales tienen muchas grasas trans"
        ],
        hu: [
          "A növényi ételek nem tartalmaznak koleszterint és kevesebb telített zsírt tartalmaznak",
          "A növényi ételek növelik a koleszterintermelést",
          "A növényi ételek sok transzzsírt tartalmaznak"
        ]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Protein from Plants vs Meat",
      es: "Proteína vegetal frente a carne",
      hu: "Növényi fehérje vs. hús"
    },
    content: {
      en: "Plant-based proteins come from a wide variety of foods, including legumes (lentils, chickpeas, beans), tofu, tempeh, seitan, quinoa, nuts, and seeds. These provide all essential amino acids when eaten in varied combinations throughout the day. Compared to meat, many plant proteins are lower in fat and contain additional nutrients like fiber, calcium, and iron. For example, 100 g of textured soy contains around 52 g of protein, 15 mg of iron, 350 mg of calcium, and only 0.5 g of fat, while 100 g of chicken breast contains about 31 g of protein, 1 mg of iron, 13 mg of calcium, and 3.6 g of fat. This shows that plant foods can match or even surpass meat nutritionally while supporting heart health.",
      es: "Las proteínas vegetales provienen de una gran variedad de alimentos, como legumbres (lentejas, garbanzos, alubias), tofu, tempeh, seitán, quinoa, frutos secos y semillas. Consumidas en combinaciones variadas a lo largo del día, aportan todos los aminoácidos esenciales. En comparación con la carne, muchas proteínas vegetales contienen menos grasa y aportan nutrientes adicionales como fibra, calcio y hierro. Por ejemplo, 100 g de soja texturizada contienen aproximadamente 52 g de proteína, 15 mg de hierro, 350 mg de calcio y solo 0,5 g de grasa, mientras que 100 g de pechuga de pollo aportan unos 31 g de proteína, 1 mg de hierro, 13 mg de calcio y 3,6 g de grasa. Esto demuestra que los alimentos vegetales pueden igualar o superar nutricionalmente a la carne.",
      hu: "A növényi fehérjék sokféle élelmiszerből származnak, például hüvelyesekből (lencse, csicseriborsó, bab), tofuból, tempehből, szejtánból, quinoából, diófélékből és magvakból. Változatos kombinációkban fogyasztva a nap folyamán minden esszenciális aminosavat biztosítanak. A húshoz képest sok növényi fehérje kevesebb zsírt tartalmaz, és további tápanyagokban — például rostban, kalciumban és vasban — gazdag. Például 100 g texturált szója körülbelül 52 g fehérjét, 15 mg vasat, 350 mg kalciumot és mindössze 0,5 g zsírt tartalmaz, míg 100 g csirkemell 31 g fehérjét, 1 mg vasat, 13 mg kalciumot és 3,6 g zsírt. Ez jól mutatja, hogy a növényi ételek táplálkozási szempontból is versenyképesek."
    },
    question: {
      text: {
        en: "Which protein source is richer in calcium and iron?",
        es: "¿Qué fuente de proteína es más rica en calcio y hierro?",
        hu: "Melyik fehérjeforrás gazdagabb kalciumban és vasban?"
      },
      options: {
        en: ["Chicken breast", "Textured soy", "Both are the same"],
        es: ["Pechuga de pollo", "Soja texturizada", "Ambas son iguales"],
        hu: ["Csirkemell", "Texturált szója", "Mindkettő ugyanaz"]
      },
      correctIndex: 1
    }
  },

  {
    title: {
      en: "Iron Absorption from Plant Foods",
      es: "Absorción del hierro vegetal",
      hu: "A növényi vas felszívódása"
    },
    content: {
      en: "Many plant foods are excellent sources of iron, including lentils, chickpeas, tofu, spinach, kale, pumpkin seeds, and quinoa. However, plant iron (non-heme iron) is absorbed less efficiently than iron from animal sources. Pairing iron-rich plant foods with vitamin C–rich foods like oranges, bell peppers, or strawberries greatly improves absorption. This simple combination helps maintain energy levels, supports red blood cell production, and prevents fatigue.",
      es: "Muchos alimentos vegetales son excelentes fuentes de hierro, como las lentejas, los garbanzos, el tofu, la espinaca, la col rizada, las semillas de calabaza y la quinoa. Sin embargo, el hierro vegetal (hierro no hemo) se absorbe con menor eficiencia que el hierro de origen animal. Combinar alimentos ricos en hierro con alimentos ricos en vitamina C —como naranjas, pimientos o fresas— mejora significativamente su absorción y ayuda a mantener la energía y prevenir la fatiga.",
      hu: "Számos növényi élelmiszer kiváló vasforrás, például a lencse, csicseriborsó, tofu, spenót, kelkáposzta, tökmag és quinoa. A növényi vas (nem-hem vas) azonban kevésbé hatékonyan szívódik fel, mint az állati eredetű vas. A vasban gazdag növényi ételek C-vitaminban gazdag élelmiszerekkel — például narancs, paprika vagy eper — való párosítása jelentősen javítja a felszívódást, segít fenntartani az energiaszintet és megelőzni a fáradtságot."
    },
    question: {
      text: {
        en: "What helps your body absorb iron from plant-based foods?",
        es: "¿Qué ayuda al cuerpo a absorber el hierro de los alimentos vegetales?",
        hu: "Mi segíti a növényi eredetű vas felszívódását?"
      },
      options: {
        en: ["Calcium", "Fiber", "Vitamin C"],
        es: ["Calcio", "Fibra", "Vitamina C"],
        hu: ["Kalcium", "Rost", "C-vitamin"]
      },
      correctIndex: 2
    }
  },

  {
    title: {
      en: "Healthy Carbohydrates for Energy",
      es: "Carbohidratos saludables para la energía",
      hu: "Egészséges szénhidrátok az energiához"
    },
    content: {
      en: "Whole plant foods provide carbohydrates that efficiently fuel the brain and muscles. Unlike refined carbohydrates or high-fat animal products, these foods deliver steady energy without promoting excess fat storage. Fruits, vegetables, grains, and legumes supply the glucose needed for focus, stamina, and metabolic health, making plant-based diets a sustainable source of energy.",
      es: "Los alimentos vegetales integrales aportan carbohidratos que alimentan eficazmente el cerebro y los músculos. A diferencia de los carbohidratos refinados o los productos animales ricos en grasa, proporcionan energía estable sin favorecer el almacenamiento excesivo de grasa. Frutas, verduras, cereales y legumbres suministran la glucosa necesaria para la concentración, la resistencia y la salud metabólica.",
      hu: "A teljes értékű növényi élelmiszerek olyan szénhidrátokat biztosítanak, amelyek hatékonyan látják el energiával az agyat és az izmokat. A finomított szénhidrátokkal vagy zsírdús állati termékekkel ellentétben ezek kiegyensúlyozott energiát adnak, anélkül hogy elősegítenék a túlzott zsírraktározást. A gyümölcsök, zöldségek, gabonák és hüvelyesek támogatják a koncentrációt, az állóképességet és az anyagcserét."
    },
    question: {
      text: {
        en: "What do healthy carbohydrates mainly provide for your body?",
        es: "¿Qué aportan principalmente los carbohidratos saludables al cuerpo?",
        hu: "Mit biztosítanak elsősorban az egészséges szénhidrátok a szervezet számára?"
      },
      options: {
        en: ["Excess fat storage", "Energy for the brain and muscles", "No nutritional value"],
        es: ["Almacenamiento excesivo de grasa", "Energía para el cerebro y los músculos", "Ningún valor nutricional"],
        hu: ["Túlzott zsírraktározás", "Energia az agy és az izmok számára", "Nincs tápértékük"]
      },
      correctIndex: 1
    }
  },

  {
    title: {
      en: "Heart Disease and Chronic Illness Prevention",
      es: "Prevención de enfermedades cardíacas y crónicas",
      hu: "Szívbetegségek és krónikus betegségek megelőzése"
    },
    content: {
      en: "Around 70% of global deaths are linked to chronic diseases such as heart disease, stroke, diabetes, and certain cancers. Many of these conditions are strongly associated with lifestyle factors, including diet, physical activity, smoking, and stress. Adopting a plant-forward diet, staying active, avoiding tobacco, and managing stress could prevent up to 80% of these deaths. Each positive choice supports long-term health and well-being.",
      es: "Aproximadamente el 70 % de las muertes a nivel mundial están relacionadas con enfermedades crónicas como las cardiopatías, los accidentes cerebrovasculares, la diabetes y algunos tipos de cáncer. Muchas de estas enfermedades están fuertemente asociadas con el estilo de vida, incluyendo la alimentación, la actividad física, el tabaquismo y el estrés. Adoptar una dieta basada en plantas, mantenerse activo y gestionar el estrés puede prevenir hasta el 80 % de estas muertes.",
      hu: "A globális halálozások körülbelül 70 %-a krónikus betegségekhez köthető, mint például a szívbetegségek, a stroke, a cukorbetegség és egyes daganatok. Ezek közül sok szorosan összefügg az életmóddal, beleértve az étrendet, a mozgást, a dohányzást és a stresszt. A növényi alapú étrend, az aktív életmód és a stresszkezelés akár az esetek 80 %-ában is megelőzheti ezeket a betegségeket."
    },
    question: {
      text: {
        en: "What percentage of global deaths are caused by chronic diseases?",
        es: "¿Qué porcentaje de las muertes globales son causadas por enfermedades crónicas?",
        hu: "A globális halálesetek hány százalékát okozzák krónikus betegségek?"
      },
      options: {
        en: ["About 70%", "About 30%", "About 10%"],
        es: ["Aproximadamente 70 %", "Aproximadamente 30 %", "Aproximadamente 10 %"],
        hu: ["Körülbelül 70 %", "Körülbelül 30 %", "Körülbelül 10 %"]
      },
      correctIndex: 0
    }
  },
{
  title: {
    en: "Plant-Based Foods and Gut Health",
    es: "Alimentos vegetales y salud intestinal",
    hu: "Növényi ételek és bélflóra egészsége"
  },
  content: {
    en: "Fiber-rich plant foods feed beneficial gut bacteria, which improve digestion, nutrient absorption, immunity, and even mental health. A diverse microbiome helps protect against inflammation and chronic diseases. In contrast, diets high in animal products and low in fiber can disrupt the microbiome, leading to digestive issues and increased disease risk. Eating a variety of fruits, vegetables, whole grains, nuts, and legumes supports a healthy gut ecosystem and overall wellbeing.",
    es: "Los alimentos vegetales ricos en fibra alimentan bacterias intestinales beneficiosas, mejorando la digestión, la absorción de nutrientes, la inmunidad e incluso la salud mental. Una microbiota diversa ayuda a proteger contra la inflamación y enfermedades crónicas. En contraste, las dietas altas en productos animales y bajas en fibra pueden alterar la microbiota, provocando problemas digestivos y aumentando el riesgo de enfermedades. Consumir una variedad de frutas, verduras, cereales integrales, frutos secos y legumbres favorece un ecosistema intestinal saludable y el bienestar general.",
    hu: "A rostban gazdag növényi ételek táplálják a jótékony bélbaktériumokat, amelyek javítják az emésztést, a tápanyagfelszívódást, az immunitást és még a mentális egészséget is. A sokszínű mikrobiom segít a gyulladások és krónikus betegségek elleni védelemben. Ezzel szemben a magas állati termék- és alacsony rosttartalmú étrend felboríthatja a mikrobiomot, emésztési problémákhoz és fokozott betegségek kockázatához vezetve. A gyümölcsök, zöldségek, teljes kiőrlésű gabonák, magvak és hüvelyesek változatos fogyasztása támogatja a bélflóra egészségét és az általános jólétet."
  },
  question: {
    text: {
      en: "What helps beneficial gut bacteria thrive?",
      es: "¿Qué ayuda a que las bacterias intestinales beneficiosas prosperen?",
      hu: "Mi segíti a jótékony bélbaktériumok fejlődését?"
    },
    options: {
      en: ["High-fat animal products", "Refined sugar", "Fiber from plant foods"],
      es: ["Productos animales ricos en grasa", "Azúcar refinada", "Fibra de alimentos vegetales"],
      hu: ["Magas zsírtartalmú állati termékek", "Finomított cukor", "Rost a növényi ételekből"]
    },
    correctIndex: 2
  }
},
{
  title: {
    en: "Calcium Without Dairy",
    es: "Calcio sin lácteos",
    hu: "Kalcium tejtermék nélkül"
  },
  content: {
    en: "Calcium is vital for strong bones and teeth. Many plant foods provide ample calcium, including tofu, tempeh, almonds, chia seeds, sesame seeds, broccoli, kale, and bok choy. Fortified plant milks and juices also help meet daily needs. Combined with regular weight-bearing exercise, a plant-based diet can maintain bone density and prevent osteoporosis without relying on dairy products.",
    es: "El calcio es vital para huesos y dientes fuertes. Muchos alimentos vegetales proporcionan calcio suficiente, incluidos el tofu, tempeh, almendras, semillas de chía, semillas de sésamo, brócoli, kale y bok choy. Las leches y jugos vegetales fortificados también ayudan a cubrir las necesidades diarias. Combinado con ejercicio de carga regular, una dieta basada en plantas puede mantener la densidad ósea y prevenir la osteoporosis sin depender de lácteos.",
    hu: "A kalcium elengedhetetlen az erős csontokhoz és fogakhoz. Sok növényi étel bőséges kalciumforrás, például a tofu, tempeh, mandula, chia mag, szezámmag, brokkoli, kelkáposzta és pak choi. A dúsított növényi tejek és gyümölcslevek szintén segítenek a napi szükséglet kielégítésében. Rendszeres testsúlyt viselő gyakorlatokkal kombinálva a növényi alapú étrend megőrizheti a csontsűrűséget és megelőzheti a csontritkulást anélkül, hogy tejtermékekre lenne szükség."
  },
  question: {
    text: {
      en: "Which of the following plant foods is rich in calcium?",
      es: "¿Cuál de los siguientes alimentos vegetales es rico en calcio?",
      hu: "Melyik növényi étel gazdag kalciumban?"
    },
    options: {
      en: ["Tofu", "Potato", "Apple"],
      es: ["Tofu", "Patata", "Manzana"],
      hu: ["Tofu", "Burgonya", "Alma"]
    },
    correctIndex: 0
  }
},
{
  title: {
    en: "Vitamin B12 on a Plant-Based Diet",
    es: "Vitamina B12 en una dieta vegetal",
    hu: "B12-vitamin növényi étrenden"
  },
  content: {
    en: "Vitamin B12 is essential for nerve health, red blood cell formation, and energy. It is produced naturally by bacteria, not by plants. While some animal products contain B12, modern industrial farming is inconsistent, so vegans should rely on fortified foods like plant milks, cereals, nutritional yeast, or supplements. Regular intake ensures adequate B12 levels, supporting energy, neurological function, and long-term health.",
    es: "La vitamina B12 es esencial para la salud nerviosa, la formación de glóbulos rojos y la energía. Se produce naturalmente por bacterias, no por plantas. Aunque algunos productos animales contienen B12, la agricultura industrial moderna es inconsistente, por lo que los veganos deben recurrir a alimentos fortificados como leches vegetales, cereales, levadura nutricional o suplementos. La ingesta regular asegura niveles adecuados de B12, apoyando la energía, la función neurológica y la salud a largo plazo.",
    hu: "A B12-vitamin létfontosságú az idegek egészségéhez, a vörösvértestek képződéséhez és az energiaszinthez. Természetesen baktériumok állítják elő, nem a növények. Bár néhány állati termék tartalmaz B12-t, a modern ipari gazdálkodás kiszámíthatatlan, ezért a vegánoknak dúsított ételekre, például növényi tejekre, gabonafélékre, tápélesztőre vagy kiegészítőkre kell támaszkodniuk. A rendszeres bevitel biztosítja a megfelelő B12-szintet, támogatva az energiát, az idegrendszeri működést és a hosszú távú egészséget."
  },
  question: {
    text: {
      en: "Why do plant-based eaters need fortified foods or supplements for B12?",
      es: "¿Por qué las personas que siguen una dieta vegetal necesitan alimentos fortificados o suplementos de B12?",
      hu: "Miért van szükségük B12-dúsított ételekre vagy kiegészítőkre a növényi étrendet követőknek?"
    },
    options: {
      en: ["Plants naturally contain enough B12", "B12 comes from bacteria, not plants", "Animals always provide sufficient B12"],
      es: ["Las plantas contienen suficiente B12", "La B12 proviene de bacterias, no de plantas", "Los animales siempre proporcionan suficiente B12"],
      hu: ["A növények természetesen elegendő B12-t tartalmaznak", "A B12 baktériumokból származik, nem a növényekből", "Az állatok mindig biztosítanak elegendő B12-t"]
    },
    correctIndex: 1
  }
},
{
  title: {
    en: "Healthy Fats from Plant Sources",
    es: "Grasas saludables de fuentes vegetales",
    hu: "Egészséges zsírok növényi forrásokból"
  },
  content: {
    en: "Fats are essential for brain function, hormone production, and heart health. Beneficial plant-based fats come from avocados, nuts, seeds, and olive oil. Omega-3 fatty acids, important for cardiovascular and cognitive health, are found in flaxseeds, chia seeds, hemp seeds, and walnuts. Including these fats in the diet supports energy, reduces inflammation, and promotes long-term heart and brain health.",
    es: "Las grasas son esenciales para la función cerebral, la producción hormonal y la salud del corazón. Las grasas vegetales beneficiosas provienen de aguacates, frutos secos, semillas y aceite de oliva. Los ácidos grasos omega-3, importantes para la salud cardiovascular y cognitiva, se encuentran en semillas de lino, chía, cáñamo y nueces. Incluir estas grasas en la dieta apoya la energía, reduce la inflamación y promueve la salud a largo plazo del corazón y el cerebro.",
    hu: "A zsírok elengedhetetlenek az agyműködéshez, a hormontermeléshez és a szív egészségéhez. A jótékony növényi zsírok forrásai az avokádó, diófélék, magvak és olívaolaj. Az omega-3 zsírsavak, amelyek fontosak a szív- és érrendszeri, valamint a kognitív egészséghez, megtalálhatók a lenmagban, chia magban, kendermagban és dióban. Ezeknek a zsíroknak a étrendbe való beépítése támogatja az energiát, csökkenti a gyulladást és elősegíti a hosszú távú szív- és agyegészséget."
  },
  question: {
    text: {
      en: "Which of the following plant foods is rich in omega-3 fatty acids?",
      es: "¿Cuál de los siguientes alimentos vegetales es rico en ácidos grasos omega-3?",
      hu: "Melyik növényi étel gazdag omega-3 zsírsavakban?"
    },
    options: {
      en: ["Flaxseeds", "Bananas", "Potatoes"],
      es: ["Semillas de lino", "Plátanos", "Patatas"],
      hu: ["Lenmag", "Banán", "Burgonya"]
    },
    correctIndex: 0
  }
},
{
  title: {
    en: "Soy and Hormonal Health",
    es: "Soja y salud hormonal",
    hu: "Szója és hormonális egészség"
  },
  content: {
    en: "Soy contains phytoestrogens, plant compounds that weakly mimic estrogen. Moderate consumption of soy foods like tofu, tempeh, and soy milk is safe for most people and does not negatively affect hormone levels. In fact, soy can be part of a heart-healthy, balanced diet and provide high-quality protein, calcium, and iron without excess fat.",
    es: "La soja contiene fitoestrógenos, compuestos vegetales que imitan débilmente el estrógeno. El consumo moderado de alimentos de soja como tofu, tempeh y leche de soja es seguro para la mayoría de las personas y no afecta negativamente los niveles hormonales. De hecho, la soja puede formar parte de una dieta equilibrada y saludable para el corazón, proporcionando proteínas de alta calidad, calcio y hierro sin exceso de grasa.",
    hu: "A szója fitoösztrogéneket tartalmaz, növényi vegyületeket, amelyek gyengén utánozzák az ösztrogént. A szójaételek, például a tofu, tempeh és szója tej mérsékelt fogyasztása biztonságos a legtöbb ember számára, és nem befolyásolja negatívan a hormonszintet. Valójában a szója része lehet egy szívbarát, kiegyensúlyozott étrendnek, biztosítva a magas minőségű fehérjét, kalciumot és vasat felesleges zsír nélkül."
  },
  question: {
    text: {
      en: "What are the plant compounds in soy that can mimic estrogen?",
      es: "¿Cuáles son los compuestos vegetales en la soja que pueden imitar el estrógeno?",
      hu: "Melyek azok a növényi vegyületek a szójában, amelyek utánozhatják az ösztrogént?"
    },
    options: {
      en: ["Saturated fats", "Phytoestrogens", "Cholesterol"],
      es: ["Grasas saturadas", "Fitoestrógenos", "Colesterol"],
      hu: ["Telített zsírok", "Fitoösztrogének", "Koleszterin"]
    },
    correctIndex: 1
  }
},
{
  title: {
    en: "Human Teeth and Natural Diet",
    es: "Dientes humanos y dieta natural",
    hu: "Az emberi fogak és a természetes étrend"
  },
  content: {
    en: "Humans have small canines, unlike carnivores such as lions or wolves. Our teeth are adapted for grinding and chewing a variety of foods, particularly plants. Our long intestines are suited to digesting fiber-rich foods. This suggests that humans are naturally adapted to a mixed or plant-forward diet rather than being strict carnivores.",
    es: "Los humanos tienen caninos pequeños, a diferencia de los carnívoros como leones o lobos. Nuestros dientes están adaptados para triturar y masticar una variedad de alimentos, particularmente plantas. Nuestros intestinos largos son adecuados para digerir alimentos ricos en fibra. Esto sugiere que los humanos están naturalmente adaptados a una dieta mixta o principalmente vegetal en lugar de ser carnívoros estrictos.",
    hu: "Az embereknek kicsi szemfogai vannak, ellentétben a ragadozókkal, mint az oroszlán vagy a farkas. Fogaink alkalmasak különféle ételek, különösen növények őrlésére és rágására. Hosszú beleink a rostban gazdag ételek emésztésére alkalmasak. Ez azt sugallja, hogy az emberek természetüknél fogva vegyes vagy növénycentrikus étrendre vannak adaptálva, nem szigorúan ragadozó étrendre."
  },
  question: {
    text: {
      en: "What do human canines suggest about our natural diet?",
      es: "¿Qué sugieren los caninos humanos sobre nuestra dieta natural?",
      hu: "Mit sugallnak az emberi szemfogak a természetes étrendről?"
    },
    options: {
      en: [
        "Humans are strict carnivores",
        "Humans cannot digest plants",
        "Humans are adapted for a mixed or plant-forward diet"
      ],
      es: [
        "Los humanos son carnívoros estrictos",
        "Los humanos no pueden digerir plantas",
        "Los humanos están adaptados a una dieta mixta o principalmente vegetal"
      ],
      hu: [
        "Az emberek szigorúan húsevők",
        "Az emberek nem tudnak növényeket emészteni",
        "Az emberek vegyes vagy növénycentrikus étrendre vannak adaptálva"
      ]
    },
    correctIndex: 2
  }
},
{
  title: {
    en: "Stomach Acidity and Diet",
    es: "Acidez estomacal y dieta",
    hu: "Gyomorsav és étrend"
  },
  content: {
    en: "Carnivores have highly acidic stomachs to break down meat and kill bacteria. Humans have moderately acidic stomachs, which are sufficient for digesting protein but also allow for efficient breakdown of fiber from plants. Our digestive system is longer than that of strict carnivores, supporting a mixed or plant-forward diet rather than a meat-only diet.",
    es: "Los carnívoros tienen estómagos muy ácidos para descomponer la carne y matar bacterias. Los humanos tienen estómagos moderadamente ácidos, suficientes para digerir proteínas pero también para descomponer eficientemente la fibra de las plantas. Nuestro sistema digestivo es más largo que el de los carnívoros estrictos, lo que favorece una dieta mixta o principalmente vegetal en lugar de solo carne.",
    hu: "A ragadozóknak nagyon savas a gyomruk a hús lebontására és a baktériumok elpusztítására. Az emberek gyomra mérsékelten savas, ami elegendő a fehérje emésztéséhez, de lehetővé teszi a növényi rostok hatékony lebontását is. Az emésztőrendszerünk hosszabb, mint a szigorú ragadozóké, ami vegyes vagy növénycentrikus étrendet támogat a csak hús helyett."
  },
  question: {
    text: {
      en: "What does human stomach acidity suggest about our natural diet?",
      es: "¿Qué sugiere la acidez del estómago humano sobre nuestra dieta natural?",
      hu: "Mit sugall az emberi gyomorsav a természetes étrendről?"
    },
    options: {
      en: ["We are adapted to a mixed diet with plenty of plant foods", "We are strict carnivores", "We can only digest meat"],
      es: ["Estamos adaptados a una dieta mixta con muchas plantas", "Somos carnívoros estrictos", "Solo podemos digerir carne"],
      hu: ["Vegyes étrendre vagyunk adaptálódva, sok növénnyel", "Szigorú ragadozók vagyunk", "Csak húst tudunk emészteni"]
    },
    correctIndex: 0
  }
},
{
  title: {
    en: "Minimally Processed Plant Foods",
    es: "Alimentos vegetales mínimamente procesados",
    hu: "Minimálisan feldolgozott növényi ételek"
  },
  content: {
    en: "Whole plant foods like fruits, vegetables, beans, nuts, and whole grains are minimally processed and nutrient-rich. In contrast, many modern meat and dairy products are highly processed with added salt, sugars, preservatives, and unhealthy fats. Eating more whole plant foods supports better health, higher energy levels, and reduced risk of chronic diseases.",
    es: "Los alimentos vegetales integrales como frutas, verduras, legumbres, frutos secos y cereales integrales son mínimamente procesados y ricos en nutrientes. En contraste, muchos productos modernos de carne y lácteos están altamente procesados con sal, azúcares, conservantes y grasas poco saludables añadidas. Consumir más alimentos vegetales enteros favorece mejor salud, más energía y menor riesgo de enfermedades crónicas.",
    hu: "Az egész növényi ételek, mint a gyümölcsök, zöldségek, bab, diófélék és teljes kiőrlésű gabonák minimálisan feldolgozottak és tápanyagban gazdagok. Ezzel szemben sok modern hús- és tejtermék erősen feldolgozott, hozzáadott sóval, cukorral, tartósítószerekkel és egészségtelen zsírokkal. Több egész növényi étel fogyasztása támogatja az egészséget, növeli az energiaszintet és csökkenti a krónikus betegségek kockázatát."
  },
  question: {
    text: {
      en: "Which of the following is usually minimally processed and nutrient-rich?",
      es: "¿Cuál de los siguientes alimentos suele ser mínimamente procesado y rico en nutrientes?",
      hu: "Melyik az alábbiak közül minimálisan feldolgozott és tápanyagban gazdag?"
    },
    options: {
      en: ["Processed meats and cheeses", "Whole plant foods like beans and vegetables", "Packaged sugary snacks"],
      es: ["Carnes y quesos procesados", "Alimentos vegetales enteros como legumbres y verduras", "Snacks azucarados envasados"],
      hu: ["Feldolgozott húsok és sajtok", "Egész növényi ételek, pl. bab és zöldség", "Csomagolt cukros nassolnivalók"]
    },
    correctIndex: 1
  }
},
{
  title: {
    en: "Brain Glucose Needs and Diet",
    es: "Necesidades de glucosa cerebral y dieta",
    hu: "Agy glükózigénye és étrend"
  },
  content: {
    en: "The human brain consumes about 120 grams of glucose daily. Carbohydrates from fruits, vegetables, grains, and legumes efficiently supply this energy. Meat and dairy are very low in carbs, meaning a strictly carnivorous diet would struggle to meet the brain’s energy demands. This suggests humans are adapted to a mixed or plant-forward diet that ensures sufficient glucose for optimal brain function.",
    es: "El cerebro humano consume unos 120 gramos de glucosa al día. Los carbohidratos de frutas, verduras, cereales y legumbres proporcionan esta energía de manera eficiente. La carne y los lácteos son muy bajos en carbohidratos, lo que significa que una dieta estrictamente carnívora tendría dificultades para cubrir las necesidades energéticas del cerebro. Esto sugiere que los humanos están adaptados a una dieta mixta o principalmente vegetal que asegura glucosa suficiente para la función cerebral óptima.",
    hu: "Az emberi agy napi kb. 120 g glükózt fogyaszt. A gyümölcsökből, zöldségekből, gabonákból és hüvelyesekből származó szénhidrátok hatékonyan biztosítják ezt az energiát. A hús és tej nagyon kevés szénhidrátot tartalmaz, így a szigorúan húsevő étrend nehezen fedezné az agy energiaszükségletét. Ez azt sugallja, hogy az emberek vegyes vagy növénycentrikus étrendre adaptálódtak, amely biztosítja az elegendő glükózt az optimális agyműködéshez."
  },
  question: {
    text: {
      en: "What does our brain’s need for glucose suggest about our natural diet?",
      es: "¿Qué sugiere la necesidad de glucosa de nuestro cerebro sobre nuestra dieta natural?",
      hu: "Mit sugall az agyunk glükózigénye a természetes étrendről?"
    },
    options: {
      en: ["Humans are strict carnivores", "Humans don’t need carbohydrates", "Humans are adapted to a mixed or plant-forward diet"],
      es: ["Los humanos son carnívoros estrictos", "Los humanos no necesitan carbohidratos", "Los humanos están adaptados a una dieta mixta o principalmente vegetal"],
      hu: ["Az emberek szigorú húsevők", "Az embereknek nincs szükségük szénhidrátra", "Az emberek vegyes vagy növénycentrikus étrendre adaptálódtak"]
    },
    correctIndex: 2
  }
},
{
  title: {
    en: "Preventing Artery Plaques",
    es: "Prevención de placas arteriales",
    hu: "Érplakkok megelőzése"
  },
  content: {
    en: "Plaques form when cholesterol and saturated fats accumulate inside arteries, narrowing them and increasing the risk of high blood pressure and heart disease. Diets rich in fiber, antioxidants, and low in cholesterol — especially plant-forward diets — prevent plaque buildup and keep arteries flexible, supporting long-term cardiovascular health.",
    es: "Las placas se forman cuando el colesterol y las grasas saturadas se acumulan dentro de las arterias, estrechándolas y aumentando el riesgo de hipertensión y enfermedades cardíacas. Las dietas ricas en fibra, antioxidantes y bajas en colesterol —especialmente dietas vegetales— previenen la acumulación de placas y mantienen las arterias flexibles, apoyando la salud cardiovascular a largo plazo.",
    hu: "A plakkok akkor alakulnak ki, amikor a koleszterin és telített zsírok felhalmozódnak az artériákban, szűkítve azokat és növelve a magas vérnyomás és szívbetegségek kockázatát. A rostban, antioxidánsokban gazdag és alacsony koleszterintartalmú étrend — különösen a növénycentrikus étrend — megakadályozza a plakkok kialakulását és rugalmasan tartja az ereket, támogatva a hosszú távú szív- és érrendszeri egészséget."
  },
  question: {
    text: {
      en: "What mainly causes plaque buildup in the arteries?",
      es: "¿Qué causa principalmente la acumulación de placas en las arterias?",
      hu: "Mi okozza elsősorban az érplakkok kialakulását?"
    },
    options: {
      en: ["Fiber and antioxidants", "Water and vitamins", "Cholesterol and saturated fats"],
      es: ["Fibra y antioxidantes", "Agua y vitaminas", "Colesterol y grasas saturadas"],
      hu: ["Rost és antioxidánsok", "Víz és vitaminok", "Koleszterin és telített zsírok"]
    },
    correctIndex: 2
  }
},
{
  title: {
    en: "Maintaining Heart Health",
    es: "Mantener la salud del corazón",
    hu: "A szív egészségének megőrzése"
  },
  content: {
    en: "A healthy heart relies on both diet and lifestyle. Whole plant foods provide fiber to keep cholesterol low, antioxidants to protect arteries, and essential nutrients for circulation. Regular exercise and good sleep further support cardiovascular health. Combining these habits keeps the heart strong, resilient, and better protected against chronic diseases.",
    es: "Un corazón saludable depende tanto de la dieta como del estilo de vida. Los alimentos vegetales integrales proporcionan fibra para mantener el colesterol bajo, antioxidantes para proteger las arterias y nutrientes esenciales para la circulación. El ejercicio regular y un buen sueño apoyan aún más la salud cardiovascular. Combinar estos hábitos mantiene el corazón fuerte, resistente y mejor protegido contra enfermedades crónicas.",
    hu: "Az egészséges szív mind az étrenden, mind az életmódon múlik. Az egész növényi ételek rostot biztosítanak a koleszterin alacsonyan tartásához, antioxidánsokat az erek védelmére és létfontosságú tápanyagokat a keringéshez. A rendszeres testmozgás és a jó alvás tovább támogatja a szív- és érrendszeri egészséget. E szokások kombinálása erős, ellenálló szívet biztosít, jobban védve a krónikus betegségek ellen."
  },
  question: {
    text: {
      en: "Which habit best supports a healthy heart?",
      es: "¿Qué hábito apoya mejor un corazón saludable?",
      hu: "Melyik szokás támogatja legjobban az egészséges szívet?"
    },
    options: {
      en: ["Eating whole plant foods and exercising regularly", "Eating processed meats and avoiding physical activity", "Consuming more salt and sugar"],
      es: ["Comer alimentos vegetales enteros y hacer ejercicio regularmente", "Comer carnes procesadas y evitar la actividad física", "Consumir más sal y azúcar"],
      hu: ["Egész növényi ételek fogyasztása és rendszeres mozgás", "Feldolgozott húsok fogyasztása és mozgás kerülése", "Több só és cukor fogyasztása"]
    },
    correctIndex: 0
  }
},
{
  title: {
    en: "Essential Benefits of Plant-Based Foods",
    es: "Beneficios esenciales de los alimentos vegetales",
    hu: "A növényi ételek alapvető előnyei"
  },
  content: {
    en: "Plants are naturally rich in essential nutrients, high in fiber, and free from harmful saturated fats present in many animal products. A balanced plant-based diet supports strong muscles, cardiovascular health, stable energy levels, and long-term wellness. It is possible to be completely healthy without meat or dairy while enjoying a variety of whole, nutrient-rich foods.",
    es: "Las plantas son naturalmente ricas en nutrientes esenciales, altas en fibra y libres de grasas saturadas dañinas presentes en muchos productos animales. Una dieta equilibrada basada en plantas apoya músculos fuertes, salud cardiovascular, niveles de energía estables y bienestar a largo plazo. Es posible estar completamente sano sin carne ni lácteos disfrutando de una variedad de alimentos enteros y ricos en nutrientes.",
    hu: "A növények természetüknél fogva gazdagok létfontosságú tápanyagokban, magas a rosttartalmuk, és mentesek a sok állati termékben jelen lévő káros telített zsíroktól. A kiegyensúlyozott növényi alapú étrend támogatja az erős izmokat, a szív- és érrendszer egészségét, az állandó energiaszintet és a hosszú távú jólétet. Teljesen egészséges lehet valaki hús vagy tejtermék nélkül, miközben változatos, tápanyagban gazdag ételeket fogyaszt."
  },
  question: {
    text: {
      en: "Which of the following is a key benefit of plant-based foods?",
      es: "¿Cuál de los siguientes es un beneficio clave de los alimentos vegetales?",
      hu: "Mi a növényi ételek egyik fő előnye?"
    },
    options: {
      en: ["They are high in fiber and rich in nutrients", "They contain a lot of cholesterol", "They lack vitamins and minerals"],
      es: ["Son ricos en fibra y nutrientes", "Contienen mucho colesterol", "Carecen de vitaminas y minerales"],
      hu: ["Magas a rosttartalmuk és tápanyagban gazdagok", "Sok koleszterint tartalmaznak", "Hiányoznak belőlük vitaminok és ásványi anyagok"]
    },
    correctIndex: 0
  }
},
{
  title: {
    en: "Sources of Plant-Based Protein",
    es: "Fuentes de proteína vegetal",
    hu: "Növényi fehérjeforrások"
  },
  content: {
    en: "Plant foods provide a wide range of proteins suitable for muscle growth and repair. Excellent sources include lentils, chickpeas, beans, tofu, tempeh, seitan, quinoa, nuts, and seeds. By combining these foods throughout the day, you can meet all essential amino acid requirements without relying on animal products, supporting a balanced and heart-healthy diet.",
    es: "Los alimentos vegetales proporcionan una amplia gama de proteínas adecuadas para el crecimiento y la reparación muscular. Las fuentes excelentes incluyen lentejas, garbanzos, frijoles, tofu, tempeh, seitán, quinoa, nueces y semillas. Combinando estos alimentos durante el día, puedes cubrir todos los aminoácidos esenciales sin depender de productos animales, apoyando una dieta equilibrada y saludable para el corazón.",
    hu: "A növényi ételek széles fehérjespektrumot biztosítanak, ami alkalmas az izomnövekedésre és a regenerációra. Kiváló források: lencse, csicseriborsó, bab, tofu, tempeh, seitan, quinoa, diófélék és magvak. Ezek kombinálásával a nap folyamán minden esszenciális aminosav fedezhető állati termékek nélkül, támogatva az egyensúlyban lévő, szívbarát étrendet."
  },
  question: {
    text: {
      en: "Which of the following foods is rich in plant-based protein?",
      es: "¿Cuál de los siguientes alimentos es rico en proteína vegetal?",
      hu: "Melyik az alábbi ételek közül gazdag növényi fehérjében?"
    },
    options: {
      en: ["Apples", "Lentils", "Cucumbers"],
      es: ["Manzanas", "Lentejas", "Pepinos"],
      hu: ["Alma", "Lencse", "Uborka"]
    },
    correctIndex: 1
  }
},
{
  title: {
    en: "Plant Foods vs Meat and Dairy",
    es: "Alimentos vegetales vs carne y lácteos",
    hu: "Növényi ételek vs hús és tejtermékek"
  },
  content: {
    en: "Meat and dairy both provide protein and essential nutrients — meat is rich in iron and B vitamins, while dairy offers calcium and B12. However, both can contain saturated fat and, especially in processed forms, added salt or sugar. Plant foods, like legumes, nuts, seeds, and whole grains, are naturally high in protein, fiber, vitamins, and minerals, while being low in saturated fat. Balancing animal foods with a variety of plant-based foods supports heart health, digestion, and overall wellness.",
    es: "La carne y los lácteos proporcionan proteínas y nutrientes esenciales: la carne es rica en hierro y vitaminas B, mientras que los lácteos ofrecen calcio y B12. Sin embargo, ambos pueden contener grasas saturadas y, especialmente en formas procesadas, sal o azúcar añadidos. Los alimentos vegetales, como legumbres, nueces, semillas y cereales integrales, son naturalmente ricos en proteínas, fibra, vitaminas y minerales, y bajos en grasas saturadas. Equilibrar los alimentos animales con una variedad de alimentos vegetales apoya la salud del corazón, la digestión y el bienestar general.",
    hu: "A hús és a tejtermékek mind fehérjét és esszenciális tápanyagokat biztosítanak — a hús gazdag vasban és B-vitaminokban, a tejtermékek pedig kalciumot és B12-vitamint tartalmaznak. Mindkettő tartalmazhat telített zsírt, és különösen feldolgozott formában hozzáadott sót vagy cukrot. A növényi ételek, mint a hüvelyesek, diófélék, magvak és teljes kiőrlésű gabonák, természetüknél fogva gazdagok fehérjében, rostban, vitaminokban és ásványi anyagokban, miközben alacsony a telített zsírtartalmuk. Az állati ételek és a változatos növényi ételek kombinálása támogatja a szív egészségét, az emésztést és az általános jóllétet."
  },
  question: {
    text: {
      en: "Which type of food provides protein and essential nutrients but is low in saturated fat?",
      es: "¿Qué tipo de alimento proporciona proteínas y nutrientes esenciales pero es bajo en grasas saturadas?",
      hu: "Melyik élelmiszercsoport biztosít fehérjét és esszenciális tápanyagokat, de alacsony a telített zsírtartalma?"
    },
    options: {
      en: ["Plant foods like legumes, nuts, and seeds", "Meat", "Dairy"],
      es: ["Alimentos vegetales como legumbres, nueces y semillas", "Carne", "Lácteos"],
      hu: ["Növényi ételek, pl. hüvelyesek, diófélék és magvak", "Hús", "Tejtermékek"]
    },
    correctIndex: 0
  }
},
{
  title: {
    en: "Plant-Based Diet Myths",
    es: "Mitos sobre la dieta vegetal",
    hu: "Növényi étrend mítoszai"
  },
  content: {
    en: "Many people believe they cannot get enough protein, calcium, or maintain strong bones without meat or dairy. In reality, plant foods like beans, lentils, tofu, nuts, seeds, whole grains, and leafy greens provide these nutrients abundantly. With a variety of foods and a reliable B12 source, plant-based diets fully support muscle growth, bone health, and overall wellness. Additionally, plants provide extra fiber, antioxidants, and healthy fats that boost long-term health.",
    es: "Mucha gente cree que no puede obtener suficiente proteína, calcio o mantener huesos fuertes sin carne o lácteos. En realidad, alimentos vegetales como frijoles, lentejas, tofu, nueces, semillas, cereales integrales y verduras de hoja proporcionan estos nutrientes abundantemente. Con una variedad de alimentos y una fuente confiable de B12, las dietas basadas en plantas apoyan completamente el crecimiento muscular, la salud ósea y el bienestar general. Además, las plantas proporcionan fibra, antioxidantes y grasas saludables que mejoran la salud a largo plazo.",
    hu: "Sokan hiszik, hogy nem tudnak elegendő fehérjét, kalciumot szerezni vagy erős csontokat fenntartani hús vagy tejtermékek nélkül. Valójában a növényi ételek, mint a bab, lencse, tofu, diófélék, magvak, teljes kiőrlésű gabonák és leveles zöldségek bőségesen biztosítják ezeket a tápanyagokat. A változatos étrend és megbízható B12-forrás mellett a növényi étrend teljes mértékben támogatja az izomnövekedést, a csontok egészségét és az általános jólétet. Emellett a növények extra rostot, antioxidánsokat és egészséges zsírokat biztosítanak, amelyek fokozzák a hosszú távú egészséget."
  },
  question: {
    text: {
      en: "Which statement is true about plant-based diets?",
      es: "¿Cuál afirmación es verdadera sobre las dietas basadas en plantas?",
      hu: "Melyik állítás igaz a növényi étrendre?"
    },
    options: {
      en: ["They can provide enough protein, calcium, and nutrients", "They always lead to weak bones", "They cannot support muscle growth"],
      es: ["Pueden proporcionar suficiente proteína, calcio y nutrientes", "Siempre conducen a huesos débiles", "No pueden apoyar el crecimiento muscular"],
      hu: ["Elég fehérjét, kalciumot és tápanyagot biztosíthatnak", "Mindig gyenge csontokhoz vezetnek", "Nem támogathatják az izomnövekedést"]
    },
    correctIndex: 0
  }
},
{
  title: {
    en: "Vegetarian Diet and Immunity",
    es: "Dieta vegetariana e inmunidad",
    hu: "Vegetáriánus étrend és immunrendszer"
  },
  content: {
    en: "Your immune system relies on the nutrients you consume daily. Vegetarian diets are naturally rich in vitamin C, vitamin E, beta-carotene, zinc, and antioxidants, which defend against infections and inflammation. Phytonutrients in plants help regulate immune responses and speed up recovery. High consumption of animal fats and processed meats, on the other hand, is linked to lower immune resilience. By eating a variety of colorful plant foods, you provide your immune system with the essential fuel it needs to stay strong, healthy, and energized.",
    es: "Tu sistema inmunológico depende de los nutrientes que consumes diariamente. Las dietas vegetarianas son naturalmente ricas en vitamina C, vitamina E, betacaroteno, zinc y antioxidantes, que defienden contra infecciones e inflamación. Los fitonutrientes en las plantas ayudan a regular las respuestas inmunológicas y acelerar la recuperación. Por otro lado, un alto consumo de grasas animales y carnes procesadas se relaciona con menor resiliencia inmune. Al comer una variedad de alimentos vegetales coloridos, proporcionas a tu sistema inmunológico el combustible esencial que necesita para mantenerse fuerte, sano y con energía.",
    hu: "Az immunrendszer a napi tápanyagbeviteltől függ. A vegetáriánus étrend természeténél fogva gazdag C-vitaminban, E-vitaminban, béta-karotinban, cinkben és antioxidánsokban, amelyek védik a szervezetet a fertőzésektől és a gyulladásoktól. A növények fitotápanyagai segítenek szabályozni az immunválaszt és gyorsítani a regenerációt. Az állati zsírok és feldolgozott húsok nagy mennyiségű fogyasztása alacsonyabb immunrezilienciával jár. Színes növényi ételek változatos fogyasztásával biztosítod az immunrendszerednek a szükséges energiát az erő, egészség és vitalitás fenntartásához."
  },
  question: {
    text: {
      en: "Which vitamin is especially important for boosting the immune system and is abundant in fruits and vegetables?",
      es: "¿Qué vitamina es especialmente importante para fortalecer el sistema inmunológico y abunda en frutas y verduras?",
      hu: "Melyik vitamin különösen fontos az immunrendszer erősítéséhez és bőségesen található gyümölcsökben és zöldségekben?"
    },
    options: {
      en: ["Vitamin C", "Vitamin D", "Vitamin B12"],
      es: ["Vitamina C", "Vitamina D", "Vitamina B12"],
      hu: ["C-vitamin", "D-vitamin", "B12-vitamin"]
    },
    correctIndex: 0
  }
},
{
  title: {
    en: "Understanding LDL and Saturated Fat",
    es: "Comprendiendo el LDL y las grasas saturadas",
    hu: "Az LDL és a telített zsír megértése"
  },
  content: {
    en: "LDL, or low-density lipoprotein, is often called 'bad cholesterol' because high levels can accumulate in arteries, increasing heart disease risk. Experts recommend limiting saturated fat to 20–30 grams per day for an average adult. To put this in perspective, a single cheeseburger can contain 15–20 grams of saturated fat — nearly an entire day’s limit! Reducing saturated fat intake through plant-based foods can help maintain healthy cholesterol levels and support heart health.",
    es: "LDL, o lipoproteína de baja densidad, se llama a menudo 'colesterol malo' porque niveles altos pueden acumularse en las arterias, aumentando el riesgo de enfermedades cardíacas. Los expertos recomiendan limitar las grasas saturadas a 20–30 gramos por día para un adulto promedio. Para ponerlo en perspectiva, una sola hamburguesa con queso puede contener 15–20 gramos de grasa saturada, ¡casi el límite diario completo! Reducir la ingesta de grasas saturadas mediante alimentos vegetales puede ayudar a mantener niveles saludables de colesterol y apoyar la salud del corazón.",
    hu: "Az LDL vagy alacsony sűrűségű lipoprotein gyakran 'rossz koleszterin'-ként ismert, mert a magas szint felhalmozódhat az artériákban, növelve a szívbetegségek kockázatát. A szakértők napi 20–30 gramm telített zsír fogyasztását javasolják egy átlagos felnőtt számára. Összehasonlításképp, egy sajtos hamburger 15–20 gramm telített zsírt tartalmazhat — majdnem a teljes napi limitet! A telített zsír csökkentése növényi ételeken keresztül segíthet az egészséges koleszterinszint fenntartásában és a szív egészségének támogatásában."
  },
  question: {
    text: {
      en: "Approximately how much saturated fat does a single cheeseburger contain?",
      es: "¿Cuánta grasa saturada contiene aproximadamente una hamburguesa con queso?",
      hu: "Körülbelül mennyi telített zsírt tartalmaz egy sajtos hamburger?"
    },
    options: {
      en: ["5 grams", "15–20 grams", "30–40 grams"],
      es: ["5 gramos", "15–20 gramos", "30–40 gramos"],
      hu: ["5 gramm", "15–20 gramm", "30–40 gramm"]
    },
    correctIndex: 1
  }
},
{
  title: {
    en: "Energy from Plant Foods",
    es: "Energía de los alimentos vegetales",
    hu: "Energia növényi ételekből"
  },
  content: {
    en: "Many wonder if a vegetarian diet provides enough energy for an active lifestyle. Plant-based foods are excellent sources of carbohydrates, the body's primary energy source, along with healthy fats and proteins. Whole grains, legumes, fruits, and vegetables provide slow-releasing energy that keeps blood sugar stable and supports metabolism throughout the day. Compared to heavy animal-based meals, plant-based meals are lighter, easier to digest, and packed with nutrients that help your cells produce energy efficiently.",
    es: "Muchos se preguntan si una dieta vegetariana proporciona suficiente energía para un estilo de vida activo. Los alimentos vegetales son excelentes fuentes de carbohidratos, la principal fuente de energía del cuerpo, junto con grasas saludables y proteínas. Los granos enteros, legumbres, frutas y verduras proporcionan energía de liberación lenta que mantiene estable el azúcar en sangre y apoya el metabolismo durante todo el día. En comparación con comidas pesadas de origen animal, las comidas vegetales son más ligeras, fáciles de digerir y ricas en nutrientes que ayudan a las células a producir energía de manera eficiente.",
    hu: "Sokan kíváncsiak, hogy egy vegetáriánus étrend elegendő energiát biztosít-e egy aktív életmódhoz. A növényi ételek kiváló szénhidrátforrások, a test elsődleges energiaforrása, emellett egészséges zsírokat és fehérjéket is biztosítanak. A teljes kiőrlésű gabonák, hüvelyesek, gyümölcsök és zöldségek lassan felszabaduló energiát biztosítanak, ami stabil vércukorszintet tart fenn és támogatja az anyagcserét a nap folyamán. A nehéz állati alapú ételekkel összehasonlítva a növényi alapú ételek könnyebbek, könnyebben emészthetők és tápanyagokban gazdagok, amelyek segítik a sejtek hatékony energiaelőállítását."
  },
  question: {
    text: {
      en: "What is the body’s main source of energy?",
      es: "¿Cuál es la principal fuente de energía del cuerpo?",
      hu: "Mi a test elsődleges energiaforrása?"
    },
    options: {
      en: ["Carbohydrates", "Protein", "Fat"],
      es: ["Carbohidratos", "Proteínas", "Grasas"],
      hu: ["Szénhidrátok", "Fehérje", "Zsír"]
    },
    correctIndex: 0
  }
},
{
  title: {
    en: "Heart-Healthy Plant Fats",
    es: "Grasas vegetales saludables para el corazón",
    hu: "Szívbarát növényi zsírok"
  },
  content: {
    en: "Fats from nuts, seeds, avocados, and olive oil are primarily unsaturated, which helps lower LDL ('bad') cholesterol and increase HDL ('good') cholesterol. They also contain antioxidants and anti-inflammatory compounds that protect arteries from damage. Regularly including these fats in your diet supports healthy blood flow, reduces heart disease risk, and provides sustained energy, all while keeping saturated fat intake in check.",
    es: "Las grasas de nueces, semillas, aguacates y aceite de oliva son principalmente insaturadas, lo que ayuda a reducir el colesterol LDL ('malo') y aumentar el HDL ('bueno'). También contienen antioxidantes y compuestos antiinflamatorios que protegen las arterias del daño. Incluir regularmente estas grasas en la dieta favorece un flujo sanguíneo saludable, reduce el riesgo de enfermedades cardíacas y proporciona energía sostenida, manteniendo bajo control la ingesta de grasas saturadas.",
    hu: "A diófélékből, magvakból, avokádóból és olívaolajból származó zsírok főként telítetlenek, ami segít csökkenteni az LDL („rossz”) koleszterint és növelni a HDL („jó”) koleszterint. Antioxidánsokat és gyulladáscsökkentő vegyületeket is tartalmaznak, amelyek védik az artériákat a károsodástól. Ezeknek a zsíroknak a rendszeres fogyasztása támogatja az egészséges véráramlást, csökkenti a szívbetegségek kockázatát és fenntartható energiát biztosít, miközben kordában tartja a telített zsírfogyasztást."
  },
  question: {
    text: {
      en: "Which type of fat helps lower LDL cholesterol and supports heart health?",
      es: "¿Qué tipo de grasa ayuda a reducir el colesterol LDL y apoya la salud del corazón?",
      hu: "Melyik zsírtípus segít csökkenteni az LDL koleszterint és támogatja a szív egészségét?"
    },
    options: {
      en: ["Saturated fats from butter and cheese", "Trans fats from processed foods", "Unsaturated fats from plant foods"],
      es: ["Grasas saturadas de mantequilla y queso", "Grasas trans de alimentos procesados", "Grasas insaturadas de alimentos vegetales"],
      hu: ["Telített zsírok vajból és sajtból", "Transzzsírok feldolgozott ételekből", "Telítetlen zsírok növényi ételekből"]
    },
    correctIndex: 2
  }
},
{
  title: {
    en: "Getting Complete Protein Without Dairy",
    es: "Obtener proteína completa sin lácteos",
    hu: "Teljes fehérje bevitel tejtermék nélkül"
  },
  content: {
    en: "Complete protein contains all nine essential amino acids. While dairy is complete, some plant-based foods like soy, quinoa, buckwheat, and hemp seeds are also complete. Most other plant foods may lack one or more amino acids, but by combining different plant foods throughout the day — for example, beans with grains or nuts with legumes — you can easily meet all protein requirements. Well-planned plant-based diets fully support protein needs without relying on dairy.",
    es: "La proteína completa contiene los nueve aminoácidos esenciales. Aunque los lácteos son completos, algunos alimentos vegetales como la soja, la quinoa, el trigo sarraceno y las semillas de cáñamo también lo son. La mayoría de los demás alimentos vegetales pueden carecer de uno o más aminoácidos, pero combinando diferentes alimentos vegetales durante el día —por ejemplo, legumbres con cereales o nueces con legumbres— puedes cubrir fácilmente todos los requerimientos de proteínas. Una dieta vegetal bien planificada satisface completamente las necesidades de proteína sin depender de lácteos.",
    hu: "A teljes értékű fehérje tartalmazza a kilenc esszenciális aminosavat. Bár a tejtermékek teljes értékűek, egyes növényi ételek, például a szója, quinoa, hajdina és kendermagok szintén teljesek. A legtöbb más növényi étel egy vagy több aminosavat hiányolhat, de a különböző növényi ételek kombinálásával a nap folyamán — például bab gabonákkal vagy dió hüvelyesekkel — könnyen fedezhetők a fehérjeszükségletek. A jól megtervezett növényi étrend teljes mértékben támogatja a fehérjeszükségletet tejtermékek nélkül."
  },
  question: {
    text: {
      en: "How can plant-based eaters get all essential amino acids?",
      es: "¿Cómo pueden los consumidores de plantas obtener todos los aminoácidos esenciales?",
      hu: "Hogyan szerezhetnek a növényi étrendet követők minden esszenciális aminosavat?"
    },
    options: {
      en: ["It’s impossible without dairy", "By eating only one type of plant food", "By combining different plant foods like beans and grains throughout the day"],
      es: ["Es imposible sin lácteos", "Comiendo solo un tipo de alimento vegetal", "Combinando diferentes alimentos vegetales como legumbres y cereales a lo largo del día"],
      hu: ["Tejtermékek nélkül lehetetlen", "Csak egy típusú növényi étel fogyasztásával", "Különböző növényi ételek kombinálásával, pl. bab és gabona a nap folyamán"]
    },
    correctIndex: 2
  }
},
{
  title: {
    en: "Vegetarian Diet and Skin Health",
    es: "Dieta vegetariana y salud de la piel",
    hu: "Vegetáriánus étrend és bőr egészsége"
  },
  content: {
    en: "Skin health reflects what you eat. A vegetarian diet is rich in antioxidants, vitamins, and healthy fats that protect skin from damage and premature aging. Vitamin C from fruits aids collagen formation, vitamin E from nuts and seeds protects against oxidative stress, and beta-carotene from colorful vegetables promotes a natural glow. Plant-based diets are also lower in inflammatory compounds, reducing skin breakouts and slowing aging. Eating more plants nourishes both body and skin.",
    es: "La salud de la piel refleja lo que comes. Una dieta vegetariana es rica en antioxidantes, vitaminas y grasas saludables que protegen la piel del daño y del envejecimiento prematuro. La vitamina C de las frutas ayuda a la formación de colágeno, la vitamina E de nueces y semillas protege contra el estrés oxidativo, y el betacaroteno de verduras coloridas promueve un brillo natural. Las dietas vegetales también tienen menos compuestos inflamatorios, reduciendo los brotes y ralentizando el envejecimiento. Comer más plantas nutre tanto el cuerpo como la piel.",
    hu: "A bőr egészsége tükrözi, mit eszel. A vegetáriánus étrend gazdag antioxidánsokban, vitaminokban és egészséges zsírokban, amelyek védik a bőrt a károsodástól és az idő előtti öregedéstől. A gyümölcsök C-vitaminja segíti a kollagén képződését, a diófélék és magvak E-vitaminja védi az oxidatív stressztől, a színes zöldségek béta-karotinja pedig természetes ragyogást biztosít. A növényi étrend alacsonyabb a gyulladást okozó vegyületekben, csökkenti a bőrproblémákat és lassítja az öregedést. Több növény fogyasztása táplálja a testet és a bőrt is."
  },
  question: {
    text: {
      en: "Which nutrient from fruits helps your skin produce collagen and stay firm?",
      es: "¿Qué nutriente de las frutas ayuda a la piel a producir colágeno y mantenerse firme?",
      hu: "Melyik tápanyag segíti a bőr kollagéntermelését és feszességét?"
    },
    options: {
      en: ["Vitamin B12", "Vitamin C", "Iron"],
      es: ["Vitamina B12", "Vitamina C", "Hierro"],
      hu: ["B12-vitamin", "C-vitamin", "Vas"]
    },
    correctIndex: 1
  }
},
{
  title: {
    en: "Diet and Chronic Inflammation",
    es: "Dieta e inflamación crónica",
    hu: "Étrend és krónikus gyulladás"
  },
  content: {
    en: "Inflammation is a natural response to injury or infection, but chronic inflammation contributes to heart disease, diabetes, arthritis, and other issues. Diet is key: foods high in saturated fat, sugar, and ultra-processed ingredients can increase inflammation, while plant-based foods rich in antioxidants, fiber, and healthy fats — such as fruits, vegetables, whole grains, nuts, seeds, and olive oil — help reduce it. Eating a variety of these foods supports long-term health and naturally manages inflammation.",
    es: "La inflamación es una respuesta natural a lesiones o infecciones, pero la inflamación crónica contribuye a enfermedades cardíacas, diabetes, artritis y otros problemas. La dieta es clave: los alimentos altos en grasas saturadas, azúcar e ingredientes ultraprocesados pueden aumentar la inflamación, mientras que los alimentos vegetales ricos en antioxidantes, fibra y grasas saludables —como frutas, verduras, cereales integrales, nueces, semillas y aceite de oliva— ayudan a reducirla. Comer una variedad de estos alimentos apoya la salud a largo plazo y controla naturalmente la inflamación.",
    hu: "A gyulladás természetes reakció sérülésre vagy fertőzésre, de a krónikus gyulladás hozzájárul a szívbetegségekhez, cukorbetegséghez, ízületi problémákhoz és más gondokhoz. Az étrend kulcsfontosságú: a telített zsírokban, cukorban és ultra-feldolgozott összetevőkben gazdag ételek növelhetik a gyulladást, míg a növényi ételek, gazdag antioxidánsokban, rostban és egészséges zsírokban — például gyümölcsök, zöldségek, teljes kiőrlésű gabonák, diófélék, magvak és olívaolaj — csökkentik azt. Ezek változatos fogyasztása támogatja a hosszú távú egészséget és természetesen szabályozza a gyulladást."
  },
  question: {
    text: {
      en: "Which type of foods help reduce chronic inflammation?",
      es: "¿Qué tipo de alimentos ayudan a reducir la inflamación crónica?",
      hu: "Milyen típusú ételek segítenek csökkenteni a krónikus gyulladást?"
    },
    options: {
      en: ["Processed foods high in sugar and saturated fat", "Plant-based foods rich in antioxidants and healthy fats", "Fried fast foods"],
      es: ["Alimentos procesados altos en azúcar y grasas saturadas", "Alimentos vegetales ricos en antioxidantes y grasas saludables", "Comida rápida frita"],
      hu: ["Cukorban és telített zsírban gazdag feldolgozott ételek", "Antioxidánsokban és egészséges zsírokban gazdag növényi ételek", "Sült gyorsételek"]
    },
    correctIndex: 1
  }
},
{
  title: {
    en: "Vitamin B12 and Vegetarian Diets",
    es: "Vitamina B12 y dietas vegetarianas",
    hu: "B12-vitamin és vegetáriánus étrend"
  },
  content: {
    en: "The main nutrient not naturally found in plants is vitamin B12, which is essential for nerve function and red blood cells. Calcium, protein, and other vitamins can be obtained from plant foods like tofu, tempeh, leafy greens, nuts, seeds, and fortified plant milks. Including a reliable B12 source — through fortified foods or supplements — ensures all nutritional needs are met without dairy.",
    es: "El principal nutriente que no se encuentra naturalmente en las plantas es la vitamina B12, esencial para la función nerviosa y los glóbulos rojos. El calcio, la proteína y otras vitaminas se pueden obtener de alimentos vegetales como tofu, tempeh, verduras de hoja, nueces, semillas y leches vegetales fortificadas. Incluir una fuente confiable de B12 — mediante alimentos fortificados o suplementos — asegura que todas las necesidades nutricionales se cubran sin lácteos.",
    hu: "A fő tápanyag, amely természetes módon nem található a növényekben, a B12-vitamin, amely elengedhetetlen az idegrendszer működéséhez és a vörösvérsejtekhez. Kalcium, fehérje és más vitaminok beszerezhetők növényi ételekből, mint a tofu, tempeh, leveles zöldségek, diófélék, magvak és dúsított növényi tejek. Megbízható B12-forrás — dúsított ételek vagy kiegészítők formájában — biztosítja, hogy minden táplálkozási szükséglet teljesüljön tejtermék nélkül."
  },
  question: {
    text: {
      en: "Which nutrient in dairy is not naturally found in plants?",
      es: "¿Qué nutriente de los lácteos no se encuentra naturalmente en las plantas?",
      hu: "Melyik tápanyag nincs természetes módon jelen a növényekben, amit a tej tartalmaz?"
    },
    options: {
      en: ["Calcium", "Protein", "Vitamin B12"],
      es: ["Calcio", "Proteína", "Vitamina B12"],
      hu: ["Kalcium", "Fehérje", "B12-vitamin"]
    },
    correctIndex: 2
  }
},
{
  title: {
    en: "Fiber and Gut Health",
    es: "Fibra y salud intestinal",
    hu: "Rost és bél egészség"
  },
  content: {
    en: "Your gut hosts trillions of bacteria critical for digestion, immunity, and mood. A vegetarian diet naturally supports gut health because it is high in fiber, which feeds beneficial bacteria and promotes smooth digestion. Fruits, vegetables, legumes, and whole grains create a diverse microbiome, reducing inflammation and improving nutrient absorption. Animal-based foods contain no fiber and can encourage harmful bacteria, so a plant-rich diet nurtures a balanced gut ecosystem from the inside out.",
    es: "Tu intestino alberga trillones de bacterias críticas para la digestión, la inmunidad y el estado de ánimo. Una dieta vegetariana apoya naturalmente la salud intestinal porque es alta en fibra, que alimenta las bacterias beneficiosas y promueve una digestión fluida. Frutas, verduras, legumbres y cereales integrales crean un microbioma diverso, reduciendo la inflamación y mejorando la absorción de nutrientes. Los alimentos de origen animal no contienen fibra y pueden favorecer bacterias dañinas, por lo que una dieta rica en plantas nutre un ecosistema intestinal equilibrado desde adentro.",
    hu: "A bélrendszered trillió számú baktériumnak ad otthont, amelyek kritikusak az emésztéshez, az immunitáshoz és a hangulathoz. A vegetáriánus étrend természeténél fogva támogatja a bél egészségét, mert magas a rosttartalma, ami táplálja a jótékony baktériumokat és elősegíti a zavartalan emésztést. A gyümölcsök, zöldségek, hüvelyesek és teljes kiőrlésű gabonák változatos mikrobiomot hoznak létre, csökkentve a gyulladást és javítva a tápanyagok felszívódását. Az állati eredetű ételek nem tartalmaznak rostot, és elősegíthetik a káros baktériumok elszaporodását, így a növényekben gazdag étrend belülről táplálja a kiegyensúlyozott bélökológiát."
  },
  question: {
    text: {
      en: "What nutrient in plant foods helps feed beneficial gut bacteria?",
      es: "¿Qué nutriente en los alimentos vegetales ayuda a alimentar las bacterias beneficiosas del intestino?",
      hu: "Melyik tápanyag a növényi ételekben táplálja a jótékony bélbaktériumokat?"
    },
    options: {
      en: ["Cholesterol", "Saturated fat", "Fiber"],
      es: ["Colesterol", "Grasa saturada", "Fibra"],
      hu: ["Koleszterin", "Telített zsír", "Rost"]
    },
    correctIndex: 2
  }
},
{
  title: {
    en: "Building Strong Bones Without Milk",
    es: "Fortalecer los huesos sin leche",
    hu: "Erős csontok tej nélkül"
  },
  content: {
    en: "While milk contains calcium, digesting its animal protein can increase calcium excretion, limiting net benefits for bones. Bone health relies on calcium, vitamin D, exercise, and other nutrients. Plant-based foods like leafy greens, tofu, almonds, chia seeds, and fortified plant milks provide calcium without this drawback, along with fiber, antioxidants, and nutrients that support overall health.",
    es: "Aunque la leche contiene calcio, digerir su proteína animal puede aumentar la excreción de calcio, limitando los beneficios netos para los huesos. La salud ósea depende de calcio, vitamina D, ejercicio y otros nutrientes. Los alimentos vegetales como verduras de hoja, tofu, almendras, semillas de chía y leches vegetales fortificadas proporcionan calcio sin esta desventaja, junto con fibra, antioxidantes y nutrientes que apoyan la salud general.",
    hu: "Bár a tej tartalmaz kalciumot, az állati fehérje emésztése növelheti a kalcium kiválasztódását, korlátozva a csontokra gyakorolt nettó előnyöket. A csontok egészsége a kalciumon, D-vitaminon, mozgáson és más tápanyagokon múlik. Növényi ételek, mint a leveles zöldségek, tofu, mandula, chia mag és dúsított növényi tejek kalciumot biztosítanak ezen hátrány nélkül, valamint rostot, antioxidánsokat és az egészséget támogató tápanyagokat."
  },
  question: {
    text: {
      en: "Why might milk not always be the most efficient way to strengthen bones?",
      es: "¿Por qué la leche puede no ser siempre la forma más eficiente de fortalecer los huesos?",
      hu: "Miért nem mindig a tej a leghatékonyabb módja a csontok erősítésének?"
    },
    options: {
      en: ["Milk contains no calcium", "Digesting milk protein can increase calcium excretion", "Milk automatically prevents fractures without exercise"],
      es: ["La leche no contiene calcio", "Digerir la proteína de la leche puede aumentar la excreción de calcio", "La leche previene automáticamente las fracturas sin ejercicio"],
      hu: ["A tej nem tartalmaz kalciumot", "A tej fehérjéjének emésztése növelheti a kalcium kiválasztódását", "A tej automatikusan megakadályozza a töréseket mozgás nélkül"]
    },
    correctIndex: 1
  }
},
{
  title: {
    en: "Safely Removing Dairy",
    es: "Eliminar lácteos de manera segura",
    hu: "Tejtermékek biztonságos elhagyása"
  },
  content: {
    en: "Removing dairy is generally safe and can even be beneficial. Calcium, protein, and other nutrients in dairy can be obtained from plant foods like leafy greens, tofu, almonds, chia seeds, and fortified plant milks. Including a variety of these foods maintains bone and overall health without difficulty. Thoughtful removal of dairy often supports heart health, digestion, and reduced saturated fat intake.",
    es: "Eliminar los lácteos generalmente es seguro e incluso puede ser beneficioso. El calcio, la proteína y otros nutrientes presentes en los lácteos se pueden obtener de alimentos vegetales como verduras de hoja, tofu, almendras, semillas de chía y leches vegetales fortificadas. Incluir una variedad de estos alimentos mantiene la salud ósea y general sin dificultad. La eliminación cuidadosa de lácteos suele apoyar la salud del corazón, la digestión y la reducción de grasas saturadas.",
    hu: "A tejtermékek elhagyása általában biztonságos, sőt előnyös is lehet. A tejben található kalcium, fehérje és más tápanyagok növényi ételekből, mint a leveles zöldségek, tofu, mandula, chia mag és dúsított növényi tejek, beszerezhetők. Ezek változatos fogyasztása biztosítja a csontok és az általános egészség fenntartását nehézség nélkül. A gondos tejelhagyás gyakran támogatja a szív egészségét, az emésztést és a telített zsír bevitel csökkentését."
  },
  question: {
    text: {
      en: "Is it safe to remove dairy from your diet when done thoughtfully?",
      es: "¿Es seguro eliminar los lácteos de tu dieta cuando se hace de manera consciente?",
      hu: "Biztonságos a tejtermékek eltávolítása az étrendből, ha megfontoltan történik?"
    },
    options: {
      en: ["No, it always causes nutrient deficiencies", "Only if you eat more meat", "Yes, with plant-based calcium and protein sources"],
      es: ["No, siempre causa deficiencias nutricionales", "Solo si comes más carne", "Sí, con fuentes vegetales de calcio y proteína"],
      hu: ["Nem, mindig tápanyaghiányt okoz", "Csak ha több húst eszel", "Igen, növényi alapú kalcium- és fehérjeforrásokkal"]
    },
    correctIndex: 2
  }
},
{
  title: {
    en: "Practical Dairy Alternatives",
    es: "Alternativas prácticas a los lácteos",
    hu: "Gyakorlati tejhelyettesítők"
  },
  content: {
    en: "Practical ways to reduce dairy without compromising health include:\n1. Swap cow’s milk for fortified plant milks (soy, oat, almond).\n2. Replace cheese with tofu spreads, cashew cheeses, or nutritional yeast.\n3. Use plant-based yogurts made from soy, coconut, or almond.\n4. Include calcium-rich plants daily: leafy greens, broccoli, almonds, chia, sesame seeds. \nThese swaps allow a plant-forward diet while keeping bones, muscles, and overall health strong.",
    es: "Formas prácticas de reducir los lácteos sin comprometer la salud incluyen:\n1. Cambiar la leche de vaca por leches vegetales fortificadas (soja, avena, almendra).\n2. Sustituir el queso por cremas de tofu, quesos de anacardo o levadura nutricional.\n3. Usar yogures vegetales de soja, coco o almendra.\n4. Incluir plantas ricas en calcio a diario: verduras de hoja, brócoli, almendras, chía, semillas de sésamo.\nEstos cambios permiten una dieta basada en plantas manteniendo fuertes huesos, músculos y salud general.",
    hu: "Gyakorlati módok a tejtermékek csökkentésére az egészség kompromisszumos veszélye nélkül:\n1. Cseréld a tehéntejet dúsított növényi tejekre (szója, zab, mandula).\n2. Cseréld a sajtot tofukrémekre, kesudió sajtokra vagy táplálékkiegészítő élesztőre.\n3. Használj növényi joghurtokat szója-, kókusz- vagy mandulatejből.\n4. Napi szinten fogyassz kalciumban gazdag növényeket: leveles zöldségek, brokkoli, mandula, chia, szezámmag.\nEzek a cserék lehetővé teszik a növényekre épülő étrendet, miközben erős csontokat, izmokat és általános egészséget biztosítanak."
  },
  question: {
    text: {
      en: "Which of the following is a practical way to reduce dairy intake safely?",
      es: "¿Cuál de las siguientes es una forma práctica de reducir la ingesta de lácteos de manera segura?",
      hu: "Melyik a következőkből a gyakorlati módja a tejtermékek biztonságos csökkentésének?"
    },
    options: {
      en: ["Swap cow’s milk with fortified plant milk", "Remove all calcium sources", "Eat more butter instead"],
      es: ["Cambiar la leche de vaca por leche vegetal fortificada", "Eliminar todas las fuentes de calcio", "Consumir más mantequilla en su lugar"],
      hu: ["Cseréld a tehéntejet dúsított növényi tejre", "Távolíts el minden kalciumforrást", "Ehelyett egyél több vajat"]
    },
    correctIndex: 0
  }
},
{
  title: {
    en: "Complete Protein on a Vegan Diet",
    es: "Proteína completa en una dieta vegana",
    hu: "Teljes értékű fehérje vegán étrenden"
  },
  content: {
    en: "Proteins are made of amino acids, which are the building blocks our bodies use to repair tissues, build muscles, and produce enzymes and hormones. Plant foods like beans, lentils, tofu, nuts, seeds, and whole grains provide all essential amino acids when eaten in variety, making it easy to get enough protein without animal products.",
    es: "Las proteínas están formadas por aminoácidos, que son los bloques de construcción que nuestro cuerpo utiliza para reparar tejidos, desarrollar músculos y producir enzimas y hormonas. Los alimentos vegetales como frijoles, lentejas, tofu, nueces, semillas y granos integrales proporcionan todos los aminoácidos esenciales cuando se consumen en variedad, facilitando obtener suficiente proteína sin productos animales.",
    hu: "A fehérjék aminosavakból állnak, amelyek az építőelemei a testünknek a szövetek javításához, izmok építéséhez és enzimek, hormonok előállításához. A növényi ételek, mint a bab, lencse, tofu, diófélék, magvak és teljes kiőrlésű gabonák, megfelelő kombinációban fogyasztva biztosítják az összes esszenciális aminosavat, így könnyen fedezhető a fehérjeszükséglet állati termékek nélkül."
  },
  question: {
    text: {
      en: "How can humans get all essential amino acids on a vegan diet?",
      es: "¿Cómo pueden los humanos obtener todos los aminoácidos esenciales en una dieta vegana?",
      hu: "Hogyan juthat minden esszenciális aminosavhoz az ember vegán étrenden?"
    },
    options: {
      en: ["Only by eating meat", "By eating a variety of plant foods like beans, lentils, tofu, nuts, and grains", "By drinking only water"],
      es: ["Solo comiendo carne", "Comiendo una variedad de alimentos vegetales como frijoles, lentejas, tofu, nueces y granos", "Bebiendo solo agua"],
      hu: ["Csak hús fogyasztásával", "Különböző növényi ételek fogyasztásával, mint bab, lencse, tofu, dió és gabona", "Csak víz fogyasztásával"]
    },
    correctIndex: 1
  }
},
{
  title: {
    en: "Vitamin B12 Source",
    es: "Fuente de vitamina B12",
    hu: "B12-vitamin forrása"
  },
  content: {
    en: "Vitamin B12 actually comes from bacteria, not directly from animals. Animals are often supplemented with B12, which is why humans get it from meat and dairy. For humans, B12 supplements or fortified foods can easily meet daily needs. In fact, B12 supplementation is recommended for everyone, not just vegans, to prevent deficiency.",
    es: "La vitamina B12 en realidad proviene de bacterias, no directamente de los animales. Los animales a menudo reciben B12 suplementaria, por eso los humanos la obtienen de la carne y los lácteos. Para los humanos, los suplementos de B12 o alimentos fortificados pueden cubrir fácilmente las necesidades diarias. De hecho, se recomienda la suplementación de B12 para todos, no solo para veganos, para prevenir la deficiencia.",
    hu: "A B12-vitamin valójában baktériumokból származik, nem közvetlenül az állatokból. Az állatokat gyakran B12-vitaminnal egészítik ki, ezért a humán étrendből hús és tej révén jutunk hozzá. Emberek számára a B12-kiegészítők vagy dúsított élelmiszerek könnyen fedezik a napi szükségletet. Valójában mindenki számára javasolt a B12-pótlás, nem csak a vegánoknak, a hiány megelőzésére."
  },
  question: {
    text: {
      en: "Where does vitamin B12 originally come from?",
      es: "¿De dónde proviene originalmente la vitamina B12?",
      hu: "Honnan származik eredetileg a B12-vitamin?"
    },
    options: {
      en: ["Plants", "Bacteria", "Sunlight", "Only animals"],
      es: ["Plantas", "Bacterias", "Luz solar", "Solo animales"],
      hu: ["Növények", "Baktériumok", "Napfény", "Csak állatok"]
    },
    correctIndex: 1
  }
},
{
  title: {
    en: "Calcium from Plant Foods",
    es: "Calcio de los alimentos vegetales",
    hu: "Kalcium növényi ételekből"
  },
  content: {
    en: "Many plant-based foods are rich in calcium. For example, 100g of tofu contains about 350mg of calcium, 100g of kale has 150mg, and 30g of almonds provide around 75mg. Fortified plant milks also provide amounts comparable to dairy. Eating a variety of these foods easily meets daily calcium needs and supports strong bones.",
    es: "Muchos alimentos vegetales son ricos en calcio. Por ejemplo, 100g de tofu contiene unos 350mg de calcio, 100g de col rizada tiene 150mg y 30g de almendras aportan alrededor de 75mg. Las leches vegetales fortificadas también proporcionan cantidades comparables a los lácteos. Consumir una variedad de estos alimentos satisface fácilmente las necesidades diarias de calcio y mantiene los huesos fuertes.",
    hu: "Sok növényi étel gazdag kalciumban. Például 100 g tofu körülbelül 350 mg kalciumot tartalmaz, 100 g kelkáposzta 150 mg-ot, 30 g mandula körülbelül 75 mg-ot biztosít. A dúsított növényi tejek mennyisége is összehasonlítható a tejével. Ezek változatos fogyasztása könnyen fedezi a napi kalciumszükségletet és erős csontokat biztosít."
  },
  question: {
    text: {
      en: "Which plant-based foods provide calcium comparable to dairy?",
      es: "¿Qué alimentos vegetales proporcionan calcio comparable al de los lácteos?",
      hu: "Mely növényi ételek biztosítanak a tejhez hasonló kalciumot?"
    },
    options: {
      en: ["Tofu, kale, almonds, fortified plant milks", "Potatoes and rice only", "Fruit juice"],
      es: ["Tofu, col rizada, almendras, leches vegetales fortificadas", "Solo papas y arroz", "Jugo de frutas"],
      hu: ["Tofu, kelkáposzta, mandula, dúsított növényi tejek", "Csak burgonya és rizs", "Gyümölcslé"]
    },
    correctIndex: 0
  }
},
{
  title: {
    en: "Iron in a Vegan Diet",
    es: "Hierro en una dieta vegana",
    hu: "Vas a vegán étrendben"
  },
  content: {
    en: "Iron is essential for transporting oxygen in the blood and supporting energy levels. Plant-based sources like lentils, beans, spinach, pumpkin seeds, and fortified cereals provide plenty of iron. Absorption is improved when these foods are eaten with vitamin C-rich foods such as citrus, peppers, or tomatoes. With proper planning, vegans can easily meet daily iron needs.",
    es: "El hierro es esencial para transportar oxígeno en la sangre y mantener los niveles de energía. Fuentes vegetales como lentejas, frijoles, espinacas, semillas de calabaza y cereales fortificados proporcionan mucho hierro. La absorción mejora cuando estos alimentos se consumen con alimentos ricos en vitamina C, como cítricos, pimientos o tomates. Con una planificación adecuada, los veganos pueden cubrir fácilmente sus necesidades diarias de hierro.",
    hu: "A vas létfontosságú az oxigén szállításához a vérben és az energiaszint fenntartásához. Növényi források, mint a lencse, bab, spenót, tökmag és dúsított gabonafélék bőséges vasat biztosítanak. A felszívódás javul, ha ezeket a ételeket C-vitaminban gazdag ételekkel, például citrusfélékkel, paprikával vagy paradicsommal fogyasztjuk. Megfelelő tervezéssel a vegánok könnyen fedezhetik a napi vasszükségletet."
  },
  question: {
    text: {
      en: "How can vegans improve iron absorption from plant foods?",
      es: "¿Cómo pueden los veganos mejorar la absorción de hierro de los alimentos vegetales?",
      hu: "Hogyan javíthatják a vegánok a vas felszívódását a növényi ételekből?"
    },
    options: {
      en: ["Eat iron alone", "Pair iron-rich foods with vitamin C", "Only eat meat occasionally"],
      es: ["Consumir hierro solo", "Combinar alimentos ricos en hierro con vitamina C", "Comer carne ocasionalmente"],
      hu: ["Vastartalmú ételek önmagukban", "Vasban gazdag ételek fogyasztása C-vitaminos ételekkel", "Csak alkalmanként enni húst"]
    },
    correctIndex: 1
  }
},
{
  title: {
    en: "Omega-3 Fatty Acids for Vegans",
    es: "Ácidos grasos omega-3 para veganos",
    hu: "Omega-3 zsírsavak vegánoknak"
  },
  content: {
    en: "Omega-3 fatty acids are important for heart, brain, and joint health. Plant-based sources include flaxseeds, chia seeds, walnuts, hemp seeds, and algae oil. These provide ALA, which the body can partially convert into EPA and DHA, the forms found in fish. Including these plant sources ensures adequate omega-3 intake on a vegan diet and supports overall health.",
    es: "Los ácidos grasos omega-3 son importantes para la salud del corazón, cerebro y articulaciones. Fuentes vegetales incluyen semillas de lino, chía, nueces, semillas de cáñamo y aceite de algas. Estas proporcionan ALA, que el cuerpo puede convertir parcialmente en EPA y DHA, las formas presentes en el pescado. Incluir estas fuentes vegetales asegura una ingesta adecuada de omega-3 en una dieta vegana y apoya la salud general.",
    hu: "Az omega-3 zsírsavak fontosak a szív, az agy és az ízületek egészségéhez. Növényi források közé tartozik a lenmag, chia mag, dió, kendermag és algazsír. Ezek ALA-t biztosítanak, amelyet a szervezet részben EPA- és DHA-vá alakíthat, amelyek a halban található formák. Ezeknek a növényi forrásoknak a fogyasztása biztosítja az omega-3 megfelelő bevitelét vegán étrenden, és támogatja az általános egészséget."
  },
  question: {
    text: {
      en: "Which plant foods provide omega-3 fatty acids?",
      es: "¿Qué alimentos vegetales proporcionan ácidos grasos omega-3?",
      hu: "Mely növényi ételek biztosítanak omega-3 zsírsavakat?"
    },
    options: {
      en: ["Flaxseeds, chia seeds, walnuts, hemp seeds, algae oil", "Rice, potatoes, apples", "Meat and cheese only"],
      es: ["Semillas de lino, chía, nueces, semillas de cáñamo, aceite de algas", "Arroz, patatas, manzanas", "Solo carne y queso"],
      hu: ["Lenmag, chia mag, dió, kendermag, algazsír", "Rizs, burgonya, alma", "Csak hús és sajt"]
    },
    correctIndex: 0
  }
},
{
  title: {
    en: "Humans Don’t Need Meat",
    es: "Los humanos no necesitan carne",
    hu: "Az embernek nem kell hús"
  },
  content: {
    en: "All humans share the same digestive system, teeth, and gut microbiota. We are not naturally carnivores or herbivores — our anatomy is adapted for a mostly plant-based diet. With a variety of plant foods, humans can get all the nutrients they need for strength, energy, and overall health, regardless of individual differences.",
    es: "Todos los humanos comparten el mismo sistema digestivo, dientes y microbiota intestinal. No somos carnívoros ni herbívoros por naturaleza; nuestra anatomía está adaptada a una dieta mayormente vegetal. Con una variedad de alimentos vegetales, los humanos pueden obtener todos los nutrientes necesarios para fuerza, energía y salud general, independientemente de las diferencias individuales.",
    hu: "Minden ember ugyanazzal az emésztőrendszerrel, fogakkal és bélmikrobiotával rendelkezik. Nem vagyunk természetes húsevők vagy növényevők – az anatómiánk nagyrészt növényi étrendre van adaptálva. A különféle növényi ételek biztosítják a szükséges tápanyagokat az erőhöz, energiához és az általános egészséghez, egyéni különbségektől függetlenül."
  },
  question: {
    text: {
      en: "Why don’t some humans need meat to get nutrients?",
      es: "¿Por qué algunos humanos no necesitan carne para obtener nutrientes?",
      hu: "Miért nincs szükségük egyes embereknek húsra a tápanyagokhoz?"
    },
    options: {
      en: ["Because our digestive system is the same for all humans and can process plants for all nutrients", "Because some people are natural carnivores", "Because meat is the only source of protein"],
      es: ["Porque nuestro sistema digestivo es igual para todos y puede procesar plantas para todos los nutrientes", "Porque algunas personas son carnívoras por naturaleza", "Porque la carne es la única fuente de proteína"],
      hu: ["Mert az emésztőrendszerünk minden embernél ugyanaz és képes a növények feldolgozására az összes tápanyaghoz", "Mert néhány ember természetes húsevő", "Mert a hús az egyetlen fehérjeforrás"]
    },
    correctIndex: 0
  }
},
{
  title: {
    en: "Vegan Athletes Are Strong",
    es: "Los atletas veganos son fuertes",
    hu: "A vegán sportolók erősek"
  },
  content: {
    en: "Many athletes, bodybuilders, and high-performance individuals thrive on vegan diets. For example, ultramarathoner Scott Jurek, bodybuilder Torre Washington, and tennis champion Venus Williams all maintain strength, endurance, and energy on plant-based diets. With proper planning, vegan diets can support all activity levels and promote overall health.",
    es: "Muchos atletas, culturistas y personas de alto rendimiento prosperan con dietas veganas. Por ejemplo, el ultramaratonista Scott Jurek, el culturista Torre Washington y la campeona de tenis Venus Williams mantienen fuerza, resistencia y energía con dietas basadas en plantas. Con una planificación adecuada, las dietas veganas pueden apoyar todos los niveles de actividad y promover la salud general.",
    hu: "Sok sportoló, testépítő és nagy teljesítményű egyén jól teljesít vegán étrenden. Például Scott Jurek ultramaratonista, Torre Washington testépítő és Venus Williams teniszbajnok mind erőt, állóképességet és energiát tartanak fenn növényi alapú étrenden. Megfelelő tervezéssel a vegán étrend minden aktivitási szintet támogathat és elősegíti az általános egészséget."
  },
  question: {
    text: {
      en: "Which statement is true about vegan athletes?",
      es: "¿Qué afirmación es verdadera sobre los atletas veganos?",
      hu: "Melyik állítás igaz a vegán sportolókról?"
    },
    options: {
      en: ["Vegans are always weak", "Vegans can be strong and energetic like Scott Jurek and Venus Williams", "Vegans cannot build muscle"],
      es: ["Los veganos siempre son débiles", "Los veganos pueden ser fuertes y enérgicos como Scott Jurek y Venus Williams", "Los veganos no pueden desarrollar músculo"],
      hu: ["A vegánok mindig gyengék", "A vegánok erősek és energikusak lehetnek, mint Scott Jurek és Venus Williams", "A vegánok nem tudnak izmot építeni"]
    },
    correctIndex: 1
  }
},
{
  title: {
    en: "Vegan Diet Diversity",
    es: "Diversidad en la dieta vegana",
    hu: "A vegán étrend változatossága"
  },
  content: {
    en: "Vegan diets offer enormous variety. There are over 30,000 edible plant species worldwide, including fruits, vegetables, grains, legumes, nuts, and seeds. By comparison, most people consume only a few dozen animal species in their lifetime. A vegan diet can be far more diverse, colorful, and flavorful than most typical omnivorous diets.",
    es: "Las dietas veganas ofrecen una enorme variedad. Hay más de 30,000 especies vegetales comestibles en todo el mundo, incluyendo frutas, verduras, granos, legumbres, nueces y semillas. En comparación, la mayoría de las personas consumen solo unas pocas docenas de especies animales en su vida. Una dieta vegana puede ser mucho más diversa, colorida y sabrosa que la mayoría de las dietas omnívoras típicas.",
    hu: "A vegán étrend hatalmas változatosságot kínál. Világszerte több mint 30 000 ehető növényfaj létezik, köztük gyümölcsök, zöldségek, gabonák, hüvelyesek, diófélék és magvak. Ehhez képest a legtöbb ember életében csak néhány tucat állatfajt fogyaszt. A vegán étrend sokkal változatosabb, színesebb és ízletesebb lehet, mint a tipikus mindenevő étrend."
  },
  question: {
    text: {
      en: "Approximately how many edible plant species exist worldwide?",
      es: "¿Aproximadamente cuántas especies vegetales comestibles existen en todo el mundo?",
      hu: "Körülbelül hány ehető növényfaj létezik világszerte?"
    },
    options: {
      en: ["About 100", "Only 500", "Over 30,000"],
      es: ["Alrededor de 100", "Solo 500", "Más de 30,000"],
      hu: ["Kb. 100", "Csak 500", "Több mint 30 000"]
    },
    correctIndex: 2
  }
},
{
  title: {
    en: "Plant-Based Diets and Chronic Disease",
    es: "Dietas vegetales y enfermedades crónicas",
    hu: "Növényi étrendek és krónikus betegségek"
  },
  content: {
    en: "Although humans evolved as omnivores, a predominantly plant-based diet is fully compatible with health. Research shows these diets can prevent, and sometimes reverse, chronic diseases like heart disease, type 2 diabetes, and high blood pressure. Eating plants is both natural and highly beneficial for long-term wellness.",
    es: "Aunque los humanos evolucionaron como omnívoros, una dieta predominantemente vegetal es totalmente compatible con la salud. La investigación muestra que estas dietas pueden prevenir y, a veces, revertir enfermedades crónicas como enfermedades cardíacas, diabetes tipo 2 y presión arterial alta. Comer plantas es natural y altamente beneficioso para el bienestar a largo plazo.",
    hu: "Bár az emberek mindenevőként fejlődtek ki, a főleg növényi alapú étrend teljes mértékben kompatibilis az egészséggel. A kutatások azt mutatják, hogy ezek az étrendek megelőzhetik, és néha visszafordíthatják a krónikus betegségeket, például a szívbetegséget, a 2-es típusú cukorbetegséget és a magas vérnyomást. A növények fogyasztása természetes és rendkívül előnyös a hosszú távú egészség szempontjából."
  },
  question: {
    text: {
      en: "What does science say about plant-based diets for humans?",
      es: "¿Qué dice la ciencia sobre las dietas basadas en plantas para los humanos?",
      hu: "Mit mond a tudomány az emberek növényi étrendjéről?"
    },
    options: {
      en: ["They are unnatural and harmful", "They can prevent or reverse chronic diseases", "They only work for children"],
      es: ["Son antinaturales y dañinas", "Pueden prevenir o revertir enfermedades crónicas", "Solo funcionan para niños"],
      hu: ["Természetellenesek és károsak", "Megelőzhetik vagy visszafordíthatják a krónikus betegségeket", "Csak gyermekeknél működnek"]
    },
    correctIndex: 1
  }
},
{
  title: {
    en: "Meat, Dairy, and Chronic Disease",
    es: "Carne, lácteos y enfermedades crónicas",
    hu: "Hús, tejtermékek és krónikus betegségek"
  },
  content: {
    en: "Global meat consumption has more than doubled in the last 50 years — from about 23 kg per person per year in 1961 to over 45 kg today. Dairy production has also increased by more than 50% over the same period. During this time, global obesity rates have nearly tripled (since 1975), and type 2 diabetes prevalence has doubled (from around 4.7% in 1980 to about 9.3% today). Heart disease remains the leading cause of death worldwide, linked closely to high intake of saturated fats and processed meats. These trends show a clear connection between rising meat and dairy consumption and the increase in modern chronic diseases.",
    es: "El consumo global de carne se ha más que duplicado en los últimos 50 años — de unos 23 kg por persona al año en 1961 a más de 45 kg hoy. La producción de lácteos también ha aumentado más del 50% en el mismo período. Durante este tiempo, las tasas de obesidad global casi se han triplicado (desde 1975) y la prevalencia de diabetes tipo 2 se ha duplicado (de alrededor del 4,7% en 1980 a aproximadamente el 9,3% hoy). Las enfermedades cardíacas siguen siendo la principal causa de muerte en todo el mundo, estrechamente vinculadas a la alta ingesta de grasas saturadas y carnes procesadas. Estas tendencias muestran una clara relación entre el aumento del consumo de carne y lácteos y el incremento de las enfermedades crónicas modernas.",
    hu: "Az elmúlt 50 évben a globális húsfogyasztás több mint megduplázódott — 1961-ben személyenként évente kb. 23 kg-ról mára több mint 45 kg-ra nőtt. A tejtermékek előállítása is több mint 50%-kal nőtt ugyanebben az időszakban. Eközben a globális elhízási arány majdnem háromszorosára nőtt (1975 óta), és a 2-es típusú cukorbetegség előfordulása megduplázódott (1980 körül 4,7%-ról kb. 9,3%-ra ma). A szívbetegségek továbbra is a vezető halálokok világszerte, szoros kapcsolatban a magas telítettzsír- és feldolgozott húsfogyasztással. Ezek a trendek világos kapcsolatot mutatnak a hús- és tejfogyasztás növekedése és a modern krónikus betegségek terjedése között."
  },
  question: {
    text: {
      en: "What trend coincided with the rise in global meat and dairy consumption?",
      es: "¿Qué tendencia coincidió con el aumento del consumo global de carne y lácteos?",
      hu: "Mely trend következett be a globális hús- és tejfogyasztás növekedésével egy időben?"
    },
    options: {
      en: ["Increase in chronic diseases like obesity, diabetes, and heart disease", "Decline in obesity rates", "Decrease in global diabetes rates"],
      es: ["Aumento de enfermedades crónicas como obesidad, diabetes y enfermedades cardíacas", "Disminución de la obesidad", "Reducción de la diabetes global"],
      hu: ["A krónikus betegségek, például elhízás, cukorbetegség és szívbetegségek növekedése", "Az elhízás csökkenése", "A globális cukorbetegség csökkenése"]
    },
    correctIndex: 0
  }
},
{
  title: {
    en: "Humans Are Frugivore-Like",
    es: "Los humanos son similares a frugívoros",
    hu: "Az emberek gyümölcsevőhöz hasonlóak"
  },
  content: {
    en: "Humans are biologically closer to frugivores and herbivores like gorillas. Our digestive system, teeth, and gut microbiota are adapted for high-fiber, plant-based foods. While we can digest meat, our anatomy suggests that a mostly plant-based diet is optimal for long-term health.",
    es: "Los humanos son biológicamente más cercanos a frugívoros y herbívoros como los gorilas. Nuestro sistema digestivo, dientes y microbiota intestinal están adaptados a alimentos vegetales ricos en fibra. Aunque podemos digerir carne, nuestra anatomía sugiere que una dieta mayormente vegetal es óptima para la salud a largo plazo.",
    hu: "Az emberek biológiailag közelebb állnak a gyümölcsevőkhöz és növényevőkhoz, például a gorillákhoz. Emésztőrendszerünk, fogaink és bélmikrobiotánk a magas rosttartalmú, növényi ételekhez alkalmazkodott. Bár képesek vagyunk húst emészteni, anatómiánk azt sugallja, hogy a nagyrészt növényi étrend optimális a hosszú távú egészséghez."
  },
  question: {
    text: {
      en: "Humans are most similar in diet to which group?",
      es: "¿A qué grupo son más similares los humanos en cuanto a dieta?",
      hu: "Mely csoport étrendjéhez hasonlít leginkább az ember?"
    },
    options: {
      en: ["Carnivores like lions", "Omnivores like pigs", "Frugivores/herbivores like gorillas"],
      es: ["Carnívoros como leones", "Omnívoros como cerdos", "Frugívoros/herbívoros como gorilas"],
      hu: ["Húsevők, például oroszlánok", "Mindenevők, például sertések", "Gyümölcsevők/növényevők, például gorillák"]
    },
    correctIndex: 2
  }
},
{
  title: {
    en: "Blue Zones and Plant-Based Diets",
    es: "Zonas azules y dietas basadas en plantas",
    hu: "Kék zónák és növényi étrendek"
  },
  content: {
    en: "Blue Zones—regions where people live exceptionally long lives—primarily eat plant-based diets rich in vegetables, legumes, and whole grains. The arrival of fast, meat-heavy foods has eroded these traditional diets, contributing to rising rates of chronic disease and shorter lifespans.",
    es: "Zonas Azules — regiones donde las personas viven vidas excepcionalmente largas — consumen principalmente dietas basadas en plantas ricas en verduras, legumbres y granos enteros. La llegada de alimentos rápidos y ricos en carne ha erosionado estas dietas tradicionales, contribuyendo al aumento de enfermedades crónicas y vidas más cortas.",
    hu: "Kék Zónák – olyan régiók, ahol az emberek rendkívül hosszú életet élnek – elsősorban növényi étrendet fogyasztanak, gazdag zöldségekben, hüvelyesekben és teljes kiőrlésű gabonákban. A gyorsételek és húsban gazdag ételek megjelenése lerombolta ezeket a hagyományos étrendeket, hozzájárulva a krónikus betegségek növekedéséhez és a rövidebb élettartamhoz."
  },
  question: {
    text: {
      en: "What type of diet is common in Blue Zones?",
      es: "¿Qué tipo de dieta es común en las Zonas Azules?",
      hu: "Milyen típusú étrend a jellemző a Kék Zónákban?"
    },
    options: {
      en: ["Plant-based with vegetables and legumes", "Fast-food and meat-heavy", "High sugar and processed snacks"],
      es: ["Basada en plantas con verduras y legumbres", "Comida rápida y rica en carne", "Alto contenido de azúcar y snacks procesados"],
      hu: ["Növényi alapú, zöldségekkel és hüvelyesekkel", "Gyorsétel és húsban gazdag", "Magas cukor- és feldolgozott snack tartalom"]
    },
    correctIndex: 0
  }
},
{
  title: {
    en: "Plant vs Meat Protein",
    es: "Proteínas vegetales vs carne",
    hu: "Növényi fehérje vs hús"
  },
  content: {
    en: "Plant proteins, such as beans, lentils, tofu, and quinoa, provide all essential amino acids when eaten in variety. Unlike meat, they contain no cholesterol and much less saturated fat. Diets rich in plant protein are linked to lower risk of heart disease and longer lifespan, while high meat protein intake is associated with inflammation and chronic illness.",
    es: "Las proteínas vegetales, como frijoles, lentejas, tofu y quinoa, proporcionan todos los aminoácidos esenciales cuando se consumen en variedad. A diferencia de la carne, no contienen colesterol y tienen mucha menos grasa saturada. Las dietas ricas en proteínas vegetales se asocian con menor riesgo de enfermedades cardíacas y mayor longevidad, mientras que una alta ingesta de proteínas de carne se relaciona con inflamación y enfermedades crónicas.",
    hu: "A növényi fehérjék, mint a bab, lencse, tofu és quinoa, az összes esszenciális aminosavat biztosítják, ha változatosan fogyasztjuk őket. A hússal ellentétben nem tartalmaznak koleszterint és sokkal kevesebb telített zsírt. A növényi fehérjében gazdag étrend alacsonyabb szívbetegség-kockázattal és hosszabb élettartammal jár, míg a magas húsfehérje-fogyasztás gyulladással és krónikus betegségekkel társul."
  },
  question: {
    text: {
      en: "What is one key difference between plant and meat protein?",
      es: "¿Cuál es una diferencia clave entre la proteína vegetal y la carne?",
      hu: "Mi az egyik fő különbség a növényi és a húsfehérje között?"
    },
    options: {
      en: ["Meat proteins are cholesterol-free", "Plant proteins contain no cholesterol", "Plant proteins lack amino acids"],
      es: ["Las proteínas de la carne no tienen colesterol", "Las proteínas vegetales no contienen colesterol", "Las proteínas vegetales carecen de aminoácidos"],
      hu: ["A húsfehérjék koleszterinmentesek", "A növényi fehérjék nem tartalmaznak koleszterint", "A növényi fehérjék hiányosak aminosavakban"]
    },
    correctIndex: 1
  }
},
{
  title: {
    en: "Milk and Saturated Fat",
    es: "Leche y grasa saturada",
    hu: "Tej és telített zsír"
  },
  content: {
    en: "A standard 250ml glass of whole milk contains roughly 8g of fat, of which about 5g is saturated. This can provide a significant percentage of your daily recommended saturated fat intake, often over 20% of calories for an average adult, contributing to heart disease risk if consumed daily.",
    es: "Un vaso estándar de 250 ml de leche entera contiene aproximadamente 8 g de grasa, de los cuales unos 5 g son saturados. Esto puede proporcionar un porcentaje significativo de la ingesta diaria recomendada de grasas saturadas, a menudo más del 20% de las calorías para un adulto promedio, contribuyendo al riesgo de enfermedad cardíaca si se consume a diario.",
    hu: "Egy standard 250 ml-es pohár teljes tej körülbelül 8 g zsírt tartalmaz, amelyből kb. 5 g telített zsír. Ez jelentős százalékát adhatja a napi ajánlott telített zsírbevitelnek, gyakran az átlagos felnőtt napi kalóriájának több mint 20%-át, hozzájárulva a szívbetegség kockázatához, ha naponta fogyasztjuk."
  },
  question: {
    text: {
      en: "What percentage of your daily saturated fat can a glass of milk provide?",
      es: "¿Qué porcentaje de su grasa saturada diaria puede proporcionar un vaso de leche?",
      hu: "A napi telített zsírbevitel hány százalékát fedezheti egy pohár tej?"
    },
    options: {
      en: ["Less than 5%", "Over 20%", "0%"],
      es: ["Menos del 5%", "Más del 20%", "0%"],
      hu: ["Kevesebb mint 5%", "Több mint 20%", "0%"]
    },
    correctIndex: 1
  }
},
{
  title: {
    en: "Hormones in Milk",
    es: "Hormonas en la leche",
    hu: "Hormonnok a tejben"
  },
  content: {
    en: "Milk contains hormones like estrogen, progesterone, and IGF-1. These hormones can influence human hormone levels, potentially affecting growth, development, and reproductive health, which is particularly concerning for children consuming large quantities.",
    es: "La leche contiene hormonas como estrógeno, progesterona e IGF-1. Estas hormonas pueden influir en los niveles hormonales humanos, afectando potencialmente el crecimiento, desarrollo y la salud reproductiva, lo cual es especialmente preocupante en niños que consumen grandes cantidades.",
    hu: "A tej olyan hormonokat tartalmaz, mint az ösztrogén, progeszteron és IGF-1. Ezek a hormonok befolyásolhatják az emberi hormon szinteket, potenciálisan hatva a növekedésre, fejlődésre és reprodukciós egészségre, ami különösen aggasztó gyermekek nagyfokú fogyasztásakor."
  },
  question: {
    text: {
      en: "What hormones are naturally present in cow's milk?",
      es: "¿Qué hormonas están presentes naturalmente en la leche de vaca?",
      hu: "Milyen hormonok találhatók természetesen a tehéntejben?"
    },
    options: {
      en: ["Adrenaline, testosterone", "Insulin only", "Estrogen, progesterone, IGF-1"],
      es: ["Adrenalina, testosterona", "Solo insulina", "Estrógeno, progesterona, IGF-1"],
      hu: ["Adrenalin, tesztoszteron", "Csak inzulin", "Ösztrogén, progeszteron, IGF-1"]
    },
    correctIndex: 2
  }
},
{
  title: {
    en: "Soy and Male Hormones",
    es: "Soja y hormonas masculinas",
    hu: "Szója és a férfi hormonok"
  },
  content: {
    en: "Soy contains phytoestrogens, plant compounds that mimic estrogen. Research shows they do not feminize men when consumed in normal dietary amounts. Instead, they may offer health benefits like lowering cholesterol and supporting heart health.",
    es: "La soja contiene fitoestrógenos, compuestos vegetales que imitan el estrógeno. La investigación muestra que no feminiza a los hombres cuando se consume en cantidades dietéticas normales. En cambio, puede ofrecer beneficios para la salud como reducir el colesterol y apoyar la salud del corazón.",
    hu: "A szója fitoösztrogéneket tartalmaz, növényi vegyületeket, amelyek az ösztrogént utánozzák. A kutatások szerint nem feminizálja a férfiakat normális étrendi mennyiségben történő fogyasztás esetén. Ehelyett egészségügyi előnyökkel járhat, például csökkentheti a koleszterint és támogathatja a szív egészségét."
  },
  question: {
    text: {
      en: "Does consuming soy make men feminine?",
      es: "¿El consumo de soja hace que los hombres se feminicen?",
      hu: "A szója fogyasztása feminissé teszi a férfiakat?"
    },
    options: {
      en: ["No, normal dietary amounts are safe", "Yes, immediately", "Only if combined with dairy"],
      es: ["No, las cantidades dietéticas normales son seguras", "Sí, inmediatamente", "Solo si se combina con lácteos"],
      hu: ["Nem, a normál étrendi mennyiségek biztonságosak", "Igen, azonnal", "Csak tejtermékkel kombinálva"]
    },
    correctIndex: 0
  }
},
{
  title: {
    en: "Fiber Benefits on a Vegan Diet",
    es: "Beneficios de la fibra en una dieta vegana",
    hu: "A rost előnyei a vegán étrendben"
  },
  content: {
    en: "Plant-based diets are naturally high in fiber, which helps regulate digestion, stabilize blood sugar, and lower cholesterol levels. Over time, this can reduce the risk of cardiovascular disease and improve gut microbiome diversity.",
    es: "Las dietas basadas en plantas son naturalmente ricas en fibra, lo que ayuda a regular la digestión, estabilizar el azúcar en sangre y reducir los niveles de colesterol. Con el tiempo, esto puede reducir el riesgo de enfermedades cardiovasculares y mejorar la diversidad del microbioma intestinal.",
    hu: "A növényi alapú étrendek természetüknél fogva magas rosttartalmúak, ami segít szabályozni az emésztést, stabilizálni a vércukorszintet és csökkenteni a koleszterinszintet. Idővel ez csökkentheti a szív- és érrendszeri betegségek kockázatát, és javíthatja a bélmikrobiom sokféleségét."
  },
  question: {
    text: {
      en: "Why is fiber in plant-based diets beneficial?",
      es: "¿Por qué es beneficiosa la fibra en las dietas basadas en plantas?",
      hu: "Miért előnyös a rost a növényi étrendben?"
    },
    options: {
      en: ["Causes constipation", "Regulates digestion, lowers cholesterol, stabilizes blood sugar", "No effect"],
      es: ["Causa estreñimiento", "Regula la digestión, reduce el colesterol, estabiliza el azúcar en sangre", "Sin efecto"],
      hu: ["Székrekedést okoz", "Szabályozza az emésztést, csökkenti a koleszterint, stabilizálja a vércukrot", "Nincs hatása"]
    },
    correctIndex: 1
  }
},
//more lessons


{
  title: {
    en: "🔄 Review a Lesson",
    es: "🔄 Repasar una lección",
    hu: "🔄 Egy lecke átismétlése"
  },
  type: "review",
  content: {
    en: "Review a previous lesson and earn extra XP!",
    es: "¡Repasa una lección anterior y gana XP extra!",
    hu: "Ismételj át egy korábbi leckét, és szerezz extra XP-t!"
  }
}
]
};

// ---------------------------
// TIPS
// ---------------------------
const characterTips = {

  pet: {
    en: [
      "Be kind to every kind — and don’t forget to be kind to yourself too!",
      "Love grows when shared 💚",
      "Every small act of care shapes who you are.",
      "Happiness multiplies when you give it away.",
      "Patience is love in action.",
      "A gentle word can change someone’s entire day.",
      "Sharing love is never wasted — it always returns.",
      "Small acts of care create big ripples in the world.",
      "Compassion starts with noticing someone’s needs.",
      "Your warmth makes others feel safe and valued.",
      "Encouragement can blossom where criticism would wither.",
      "Every smile you share brightens someone’s path.",
      "Kindness costs nothing but creates priceless moments.",
      "You are wiser when you seek understanding before judgment.",
      "Helping others grow is a reflection of your own strength.",
      "Love yourself as fiercely as you love others.",
      "Quiet support is often more powerful than loud words.",
      "Your patience today teaches others how to be gentle tomorrow.",
      "Sharing your knowledge softly guides hearts, not forces them.",
      "Happiness blooms when you care without expecting in return.",
      "Every gentle touch leaves a mark of love.",
      "Encouragement turns mistakes into lessons, not failures.",
      "You are strongest when you act with empathy.",
      "A kind action can be louder than a thousand words.",
      "Your warmth has the power to heal invisible wounds.",
      "Sharing joy multiplies it for everyone involved. 🌟",
      "Teach by example — hearts learn faster than ears.",
      "Every act of love is a building block for a better world.",

    `Replacing meat with <span class="ingredient-link" onclick="openIngredient('tofu')">Tofu</span> saves massive water resources.`,
    `<span class="ingredient-link" onclick="openIngredient('seitan')">Seitan</span> uses only a fraction of the land needed for beef.`,
    `A meal with <span class="ingredient-link" onclick="openIngredient('lentils')">Lentils</span> has a much lower carbon footprint.`,
    `<span class="ingredient-link" onclick="openIngredient('beans')">Beans</span> nourish the soil instead of depleting it.`,
    `<span class="ingredient-link" onclick="openIngredient('tempeh')">Tempeh</span> promotes gut biodiversity.`,
    `<span class="ingredient-link" onclick="openIngredient('chickpeas')">Chickpeas</span> naturally enrich farmland.`,
    `<span class="ingredient-link" onclick="openIngredient('peaProtein')">Pea Protein</span> has a lower CO₂ impact than whey.`,
    `<span class="ingredient-link" onclick="openIngredient('soyMilk')">Soy Milk</span> requires far less land and water than dairy.`,
    `<span class="ingredient-link" onclick="openIngredient('texturizedSoy')">Texturized Soy</span> avoids the emissions of chicken farming.`,
    `Swap some meat for <span class="ingredient-link" onclick="openIngredient('broccoli')">Broccoli</span> — nutrient-rich and eco-friendly! 🌱`
  
      ],
    es: [
      "Sé amable con todos los seres — y no olvides ser amable contigo también.",
      "El amor crece cuando se comparte 💚",
      "Cada pequeño acto de cuidado moldea quién eres.",
      "La felicidad se multiplica cuando la compartes.",
      "La paciencia es amor en acción.",
      "Una palabra amable puede cambiar todo el día de alguien.",
      "Compartir amor nunca se desperdicia — siempre vuelve.",
      "Los pequeños actos de cuidado crean grandes ondas en el mundo.",
      "La compasión empieza al notar las necesidades de los demás.",
      "Tu calidez hace que otros se sientan seguros y valorados.",
      "El ánimo florece donde la crítica se marchita.",
      "Cada sonrisa que compartes ilumina el camino de alguien.",
      "La bondad no cuesta nada y crea momentos invaluables.",
      "Eres más sabio cuando buscas comprender antes de juzgar.",
      "Ayudar a otros a crecer refleja tu propia fuerza.",
      "Ámate con la misma intensidad con la que amas a otros.",
      "El apoyo silencioso suele ser más poderoso que las palabras fuertes.",
      "Tu paciencia hoy enseña gentileza mañana.",
      "Compartir conocimiento suavemente guía corazones.",
      "La felicidad florece cuando das sin esperar nada.",
      "Cada gesto suave deja una huella de amor.",
      "El ánimo convierte errores en lecciones.",
      "Eres más fuerte cuando actúas con empatía.",
      "Un acto amable puede hablar más que mil palabras.",
      "Tu calidez puede sanar heridas invisibles.",
      "Compartir alegría la multiplica para todos. 🌟",
      "Enseña con el ejemplo — el corazón aprende más rápido.",
      "Cada acto de amor construye un mundo mejor.",

      `Sustituir la carne por <span class="ingredient-link" onclick="openIngredient('tofu')">tofu</span> ahorra enormes recursos de agua.`,
      `<span class="ingredient-link" onclick="openIngredient('seitan')">Seitan</span> usa solo una fracción de la tierra necesaria para la carne.`,
      `Una comida con <span class="ingredient-link" onclick="openIngredient('lentils')">lentejas</span> tiene una huella de carbono mucho menor.`,
      `<span class="ingredient-link" onclick="openIngredient('beans')">Las legumbres</span> nutren el suelo.`,
      `<span class="ingredient-link" onclick="openIngredient('tempeh')">Tempeh</span> favorece la biodiversidad intestinal.`,
      `<span class="ingredient-link" onclick="openIngredient('chickpeas')">Garbanzos</span> enriquecen naturalmente la tierra.`,
      `<span class="ingredient-link" onclick="openIngredient('peaProtein')">Proteína de guisante</span> tiene menor impacto de CO₂.`,
      `<span class="ingredient-link" onclick="openIngredient('soyMilk')">Leche de soja</span> requiere menos tierra y agua.`,
      `<span class="ingredient-link" onclick="openIngredient('texturizedSoy')">Soja texturizada</span> evita emisiones de la ganadería.`,
      `Cambia algo de carne por <span class="ingredient-link" onclick="openIngredient('broccoli')">brócoli</span> 🌱`
    ],

    hu: [
      "Légy kedves minden lényhez — és magadhoz se felejts el az lenni.",
      "A szeretet akkor nő, ha megosztják 💚",
      "Minden apró gondoskodás formálja azt, aki vagy.",
      "A boldogság megsokszorozódik, ha továbbadod.",
      "A türelem a szeretet cselekvésben.",
      "Egy kedves szó megváltoztathatja valaki egész napját.",
      "A megosztott szeretet sosem vész el — mindig visszatér.",
      "Az apró törődés nagy hullámokat kelt.",
      "Az együttérzés a figyelemmel kezdődik.",
      "A melegség biztonságot és értéket ad másoknak.",
      "A bátorítás ott virágzik, ahol a kritika elsorvad.",
      "Minden mosoly fényt ad valaki útjára.",
      "A kedvesség semmibe sem kerül, mégis felbecsülhetetlen.",
      "Bölcsebb vagy, ha megértést keresel ítélkezés előtt.",
      "Mások segítése a saját erőd tükre.",
      "Szeresd magad olyan erősen, ahogy másokat.",
      "A csendes támogatás gyakran a legerősebb.",
      "A mai türelmed holnap gyengédséget tanít.",
      "A tudás finom megosztása szíveket vezet.",
      "A boldogság akkor virágzik, ha nem vársz viszonzást.",
      "Minden gyengéd érintés nyomot hagy.",
      "A bátorítás tanulsággá alakítja a hibákat.",
      "Az empátia az igazi erő.",
      "Egy kedves tett hangosabb ezer szónál.",
      "A melegség láthatatlan sebeket gyógyít.",
      "Az öröm megosztva megsokszorozódik. 🌟",
      "Mutass példát — a szív gyorsabban tanul.",
      "Minden szeretetteljes tett egy jobb világ alapja.",

      `A hús helyettesítése <span class="ingredient-link" onclick="openIngredient('tofu')">tofúval</span> rengeteg vizet takarít meg.`,
      `<span class="ingredient-link" onclick="openIngredient('seitan')">A szejtán</span> töredéknyi földet igényel.`,
      `A <span class="ingredient-link" onclick="openIngredient('lentils')">lencsével</span> készült étel kisebb karbonlábnyomú.`,
      `<span class="ingredient-link" onclick="openIngredient('beans')">A bab</span> táplálja a talajt.`,
      `<span class="ingredient-link" onclick="openIngredient('tempeh')">A tempeh</span> támogatja a bélflórát.`,
      `<span class="ingredient-link" onclick="openIngredient('chickpeas')">A csicseriborsó</span> gazdagítja a földet.`,
      `<span class="ingredient-link" onclick="openIngredient('peaProtein')">Borsófehérje</span> kevesebb CO₂-t termel.`,
      `<span class="ingredient-link" onclick="openIngredient('soyMilk')">Szójatej</span> kevesebb földet és vizet igényel.`,
      `<span class="ingredient-link" onclick="openIngredient('texturizedSoy')">Texturált szója</span> csökkenti a kibocsátást.`,
      `Cserélj le egy kis húst <span class="ingredient-link" onclick="openIngredient('broccoli')">brokkolira</span> 🌱`
    ]
  },
celebrity: [
  {
    name: {
      en: "Natalie Portman",
      es: "Natalie Portman",
      hu: "Natalie Portman"
    },
    title: {
      en: "Actress & Activist",
      es: "Actriz y activista",
      hu: "Színésznő és aktivista"
    },
    quote: {
      en: "Three times a day, I remind myself that I value life and do not want to cause pain to or kill other living beings. That is why I eat the way I do.",
      es: "Tres veces al día me recuerdo que valoro la vida y que no quiero causar dolor ni matar a otros seres vivos. Por eso como como lo hago.",
      hu: "Naponta háromszor emlékeztetem magam arra, hogy értékelem az életet, és nem akarok fájdalmat okozni vagy megölni más élőlényeket. Ezért eszem így."
    },
    avatar: "images/natalie.jpg"
  },

  {
    name: {
      en: "Albert Einstein",
      es: "Albert Einstein",
      hu: "Einstein Albert"
    },
    title: {
      en: "Theoretical Physicist",
      es: "Físico teórico",
      hu: "Elméleti fizikus"
    },
    quote: {
      en: "Nothing will benefit health or increase chances of survival on Earth as much as the evolution to a vegetarian diet.",
      es: "Nada beneficiará tanto la salud ni aumentará las posibilidades de supervivencia en la Tierra como la evolución hacia una dieta vegetariana.",
      hu: "Semmi sem szolgálja jobban az egészséget vagy növeli a túlélés esélyét a Földön, mint a vegetáriánus étrend felé való fejlődés."
    },
    avatar: "images/einstein.jpg"
  },

  {
    name: {
      en: "Patrik Baboumian",
      es: "Patrik Baboumian",
      hu: "Patrik Baboumian"
    },
    title: {
      en: "Strongman & Vegan Activist",
      es: "Strongman y activista vegano",
      hu: "Erősember és vegán aktivista"
    },
    quote: {
      en: "Someone once asked me, 'How can you get as strong as an ox without eating any meat?' My answer was, 'Have you ever seen an ox eating meat?'",
      es: "Alguien me preguntó una vez: «¿Cómo puedes ser tan fuerte como un buey sin comer carne?» Mi respuesta fue: «¿Has visto alguna vez a un buey comiendo carne?»",
      hu: "Egyszer megkérdezték tőlem: „Hogyan lehetsz olyan erős, mint egy ökör hús nélkül?” A válaszom az volt: „Láttál már ökröt húst enni?”"
    },
    avatar: "images/patrik.jpg"
  },

  {
    name: {
      en: "Abraham Lincoln",
      es: "Abraham Lincoln",
      hu: "Abraham Lincoln"
    },
    title: {
      en: "16th U.S. President",
      es: "16.º presidente de los Estados Unidos",
      hu: "Az Egyesült Államok 16. elnöke"
    },
    quote: {
      en: "I am in favor of animal rights as well as human rights. That is the way of a whole human being.",
      es: "Estoy a favor de los derechos de los animales así como de los derechos humanos. Ese es el camino de un ser humano completo.",
      hu: "Az állatok jogai mellett ugyanúgy kiállok, mint az emberi jogok mellett. Ez a teljes ember útja."
    },
    avatar: "images/lincoln.jpg"
  },

  {
    name: {
      en: "Leonardo da Vinci",
      es: "Leonardo da Vinci",
      hu: "Leonardo da Vinci"
    },
    title: {
      en: "Renaissance Polymath",
      es: "Polímata del Renacimiento",
      hu: "Reneszánsz polihisztor"
    },
    quote: {
      en: "I have from an early age abjured the use of meat.",
      es: "Desde muy joven he rechazado el consumo de carne.",
      hu: "Fiatal koromtól kezdve elutasítottam a hús fogyasztását."
    },
    avatar: "images/davinci.jpg"
  },

  {
    name: {
      en: "Pythagoras",
      es: "Pitágoras",
      hu: "Püthagorasz"
    },
    title: {
      en: "Philosopher & Mathematician",
      es: "Filósofo y matemático",
      hu: "Filozófus és matematikus"
    },
    quote: {
      en: "As long as man continues to be the ruthless destroyer of lower living beings, he will never know health or peace.",
      es: "Mientras el hombre siga siendo el destructor despiadado de los seres vivos inferiores, nunca conocerá la salud ni la paz.",
      hu: "Amíg az ember könyörtelen pusztítója marad az alacsonyabb rendű élőlényeknek, soha nem fogja megismerni az egészséget vagy a békét."
    },
    avatar: "images/pythagoras.jpg"
  },

  {
    name: {
      en: "Lewis Hamilton",
      es: "Lewis Hamilton",
      hu: "Lewis Hamilton"
    },
    title: {
      en: "Formula 1 World Champion",
      es: "Campeón del mundo de Fórmula 1",
      hu: "Forma–1 világbajnok"
    },
    quote: {
      en: "We all have choices to make. I choose to love, to be conscious of what I’m supporting and I refuse to support the companies killing and torturing animals.",
      es: "Todos tenemos elecciones que hacer. Yo elijo amar, ser consciente de lo que apoyo y me niego a apoyar a empresas que matan y torturan animales.",
      hu: "Mindannyiunknak vannak döntései. Én a szeretetet választom, tudatos vagyok abban, mit támogatok, és nem támogatom az állatokat megölő és kínzó vállalatokat."
    },
    avatar: "images/hamilton.jpg"
  },

  {
    name: {
      en: "Mahatma Gandhi",
      es: "Mahatma Gandhi",
      hu: "Mahatma Gandhi"
    },
    title: {
      en: "Indian Leader & Activist",
      es: "Líder y activista indio",
      hu: "Indiai vezető és aktivista"
    },
    quote: {
      en: "The greatness of a nation can be judged by the way its animals are treated.",
      es: "La grandeza de una nación se puede juzgar por la forma en que trata a sus animales.",
      hu: "Egy nemzet nagysága megítélhető abból, ahogyan az állataival bánik."
    },
    avatar: "images/gandhi.jpg"
  },

  {
    name: {
      en: "Leo Tolstoy",
      es: "León Tolstói",
      hu: "Lev Tolsztoj"
    },
    title: {
      en: "Author & Philosopher",
      es: "Escritor y filósofo",
      hu: "Író és filozófus"
    },
    quote: {
      en: "As long as there are slaughterhouses, there will be battlefields.",
      es: "Mientras existan los mataderos, habrá campos de batalla.",
      hu: "Amíg léteznek vágóhidak, addig lesznek csataterek."
    },
    avatar: "images/tolstoy.jpg"
  },

  {
    name: {
      en: "John Stuart Mill",
      es: "John Stuart Mill",
      hu: "John Stuart Mill"
    },
    title: {
      en: "Philosopher & Economist",
      es: "Filósofo y economista",
      hu: "Filozófus és közgazdász"
    },
    quote: {
      en: "The worth of a civilization is measured by the compassion it shows toward those who cannot defend themselves.",
      es: "El valor de una civilización se mide por la compasión que muestra hacia quienes no pueden defenderse.",
      hu: "Egy civilizáció értékét az mutatja meg, mennyi együttérzést tanúsít azokkal szemben, akik nem tudják megvédeni magukat."
    },
    avatar: "images/stuart.jpg"
  },

  {
    name: {
      en: "Buddha",
      es: "Buda",
      hu: "Buddha"
    },
    title: {
      en: "Spiritual Leader",
      es: "Líder espiritual",
      hu: "Spirituális tanító"
    },
    quote: {
      en: "All beings tremble before violence. All fear death. When a man considers this, he does not kill or cause to kill.",
      es: "Todos los seres tiemblan ante la violencia. Todos temen la muerte. Cuando alguien reflexiona sobre esto, no mata ni hace que otros maten.",
      hu: "Minden lény retteg az erőszaktól. Mindenki fél a haláltól. Aki ezt megérti, nem öl, és nem is késztet másokat ölésre."
    },
    avatar: "images/buddha.jpg"
  }
]
};

//#region Functions
/*
Ariana Grande – Singer and Actress
“I’m a firm believer in eating a full plant-based, whole food diet that can expand your life length and make you an all-around happier person.” 

Alicia Silverstone – Actress and Activist
“Being vegan helped me realize I can say and do what I believe is right. That's powerful.” 

Jermaine Dupri – Musician and Producer
“I’ve been vegan for over a decade, and for me, there’s nothing better for feeling your best and knowing you’re helping the planet and animals.” 

Mayim Bialik – Actress and Neuroscientist
“Even as a child, I felt very guilty about eating animals and never knew that there was something to do about it. And as I got older, it became clearer that there are things that I can do and choices I can make.” 

Tara McDonald – Singer and Activist
“The vegan lifestyle has made me feel so good that it's only natural that I want to share it with people.” 

Kristen Bell – Actress
“I have always been an animal lover. I had a hard time disassociating the animals I cuddled with—dogs and cats, for example—from the animals on my plate.” 

Genesis Butler – Activist
“I chose to go vegan because I want to be part of the solution, not the problem.” 


🏅 Athletes

Novak Djokovic – Tennis Champion
“Food is the fuel that determines how I play, how I recover, and how alert I am on the court. I attribute a great deal of my professional success to my diet.” 

Brendan Brazier – Former Endurance Athlete and Author
“Being vegan doesn’t make you a stronger, better athlete. But it allows you to make yourself a stronger, better athlete.” 

Chloe Arthur – Scottish Footballer
“Whatever you have I will probably eat the same, I just replace the meat with a different protein. Why slaughter animals when you can get all the nutritious meals without having to do that?” 

Alex Morgan – Soccer Player
“I never thought it was possible I could be playing at an elite level as a professional athlete with a plant-based diet. Then I realized it wasn’t detrimental at all.” 

Zac Efron – Actor and Athlete
“That’s [veganism] completely changed the way that my body works, and the way that I metabolize food, the way it turns into energy, the way that I sleep. It’s been brilliant. It’s been great for my exercise, and great for my routine.” 

Mathieu Flamini – Former Footballer and Environmental Entrepreneur
“Football needs to stand up for climate change.


🌟 Famous Scientists & Philosophers

Voltaire – Philosopher
“It is forbidden to kill; therefore all murderers are punished unless they kill in large numbers and to the sound of trumpets.”

Isaac Bashevis Singer – Writer & Philosopher
“The animals of the world exist for their own reasons. They were not made for humans any more than black people were made for whites or women created for men.”

Henry Salt – Writer & Social Reformer
“The question is not, Can they reason? nor, Can they talk? but, Can they suffer?”


🌟 Famous Leaders & Reformers

Mahatma Gandhi – Indian Leader & Activist
“I hold that, the more helpless a creature, the more entitled it is to protection by man from the cruelty of man.”

Thomas Jefferson – 3rd U.S. President
“Nothing is more honorable than a gentle, humane treatment of animals.”


St. Francis of Assisi
“If you have men who will exclude any of God’s creatures from the shelter of compassion and pity, you will have men who will deal likewise with their fellow men.”

Albert Schweitzer – Theologian & Philosopher
“The ethical treatment of animals is the most humane and noble test of civilization.”
*/
//--------------------------
// Ingredient Modal
//--------------------------
function openIngredient(key) {
  const item = ingredientInfo[key];
  if (!item) return;

  document.getElementById("ingredientName").textContent = item.name[poolLang] || item.name.en;
  document.getElementById("ingredientDescription").innerHTML = item.description[poolLang] || item.description.en;
  document.getElementById("ingredientNutrition").innerHTML = item.nutrition[poolLang] || item.nutrition.en;

  document.getElementById("ingredientModal").classList.add("active");
}

document.getElementById("closeIngredientModal").onclick = () => {
  document.getElementById("ingredientModal").classList.remove("active");
};

// Track last shown timestamp (single for all characters)
let lastShown = parseInt(localStorage.getItem("lastShownTime"), 10) || 0; // timestamp of last tip shown

// Save helper
function saveLastShown(ts) {
  lastShown = ts;
  localStorage.setItem("lastShownTime", ts);
}

// Define spawn zones for each character
function getRandomPositionForChar(char, wrapperWidth, wrapperHeight) {
  const vw = Math.max(document.documentElement.clientWidth, window.innerWidth);
  const vh = Math.max(document.documentElement.clientHeight, window.innerHeight);

  const leftEdge = 0.15 * vw;
  const rightEdge = 0.85 * vw - wrapperWidth;
  let bottomLimit = 0.55 * vh; // max Y (40% from bottom)
  const topLimit = 0.10 * vh;

  let minX, maxX;

  switch (char) {
    /* fill viewport height 
    case "eluna":
      minX = leftEdge;
      maxX = 0.4 * vw - wrapperWidth; // left side
      break;
    case "elune":
      minX = 0.3 * vw;
      maxX = 0.7 * vw - wrapperWidth; // middle
      break;
     */ 
    case "pet":
      minX = 0.6 * vw;
      maxX = rightEdge; // right side
      break;
    case "celebrity":
      minX = leftEdge;
      maxX = 0.3 * vw - wrapperWidth;
      // Appear higher → smaller bottom limit
      bottomLimit = 0.35 * vh;  // limit the vertical range to upper area
    break;
    default:
      minX = leftEdge;
      maxX = rightEdge;
  }

  const minY = topLimit;
  const maxY = bottomLimit - wrapperHeight;

  const x = minX + Math.random() * (maxX - minX);
  const y = minY + Math.random() * (maxY - minY);

  return { x, y };
}

function showRandomAvatar() {

  const now = Date.now();
  const cooldown = 60 * 60 * 1000; // 1 hour
  if (now - lastShown < cooldown) return;

  // 🎯 Weighted probability setup
  const weightedChars = [
    { char: "celebrity", weight: 50 },
    /* 
    { char: "elune", weight: 25 },
    { char: "eluna", weight: 25 },
    */
    { char: "pet", weight: 50 }
  ];

  const totalWeight = weightedChars.reduce((sum, c) => sum + c.weight, 0);
  const randomNum = Math.random() * totalWeight;
  let cumulative = 0;
  let char = weightedChars[0].char;

  for (const c of weightedChars) {
    cumulative += c.weight;
    if (randomNum <= cumulative) {
      char = c.char;
      break;
    }
  }

  const originalWrapper = document.getElementById(char + "Wrapper");
  if (!originalWrapper) return;

  const wrapper = originalWrapper.cloneNode(true);
  wrapper.id = char + "_floating";
  wrapper.style.position = "fixed";
  wrapper.style.zIndex = "1000";
  wrapper.style.display = "block";

  // ✅ Call position function correctly
  let pos = getRandomPositionForChar(
    char,
    wrapper.offsetWidth,
    wrapper.offsetHeight
  );
  wrapper.style.left = `${pos.x}px`;
  wrapper.style.top = `${pos.y}px`;

  document.querySelector("#home").appendChild(wrapper);
  saveLastShown(now);

  const bubble = wrapper.querySelector(".thought-bubble");
  const tipBox = wrapper.querySelector(".lesson-box");

  // 🎭 Special logic for celebrities
  if (char === "celebrity") {
    const celeb =
      characterTips.celebrity[
        Math.floor(Math.random() * characterTips.celebrity.length)
      ];

    tipBox.innerHTML = `
      <div class="celeb-quote">
        <p class="quote">“${celeb.quote[poolLang] || celeb.quote.en}”</p>
        <p class="celeb-name"><strong>${celeb.name[poolLang] || celeb.name.en}</strong></p>
        <p class="celeb-title"><em>${celeb.title[poolLang] || celeb.title.en}</em></p>
      </div>
    `;

    const avatarImg = wrapper.querySelector("#celebrityAvatar");
    avatarImg.src = celeb.avatar;
  } else {
  // Pick language-specific tips, fallback to EN
  const tips =
    characterTips[char][poolLang] || characterTips[char].en;

  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  tipBox.innerHTML = randomTip;

  // 🔹 Make ingredient links clickable
  tipBox.querySelectorAll(".ingredient-link").forEach(link => {
    link.onclick = (e) => {
      e.stopPropagation();

      // Extract ingredient key from inline onclick
      const keyMatch = link
        .getAttribute("onclick")
        ?.match(/'(\w+)'/);

      if (keyMatch) {
        openIngredient(keyMatch[1]);
      }

      bubble.classList.remove("visible");
      wrapper.remove();
    };
  });
  }

  const avatars = wrapper.querySelectorAll(
    ".avatar, #petAvatar, .thought-toggle"
  );
  avatars.forEach((av) => {
    av.onclick = (e) => {
      e.stopPropagation();
      bubble.classList.add("visible");
    };
  });

  const closeBtn = bubble.querySelector(".close-thought");
  closeBtn.onclick = (e) => {
    e.stopPropagation();
    bubble.classList.remove("visible");
    wrapper.remove();
  };
}

// ---------------------------
// Schedule check every minute
// ---------------------------
setInterval(showRandomAvatar, 60 * 1000);
window.addEventListener("load", () => setTimeout(showRandomAvatar, 8000)); // first tip after 6s
window.addEventListener("load", () => {
  setTimeout(() => showRandomAvatar(), 8000);
});

//#endregion 



// =======================
// HEALTH ISSUE LESSONS
// =======================
export const HealthIssuesPool = {
  health: [

   // HEART DISEASE 
  {
  issue: "Heart disease",
  title: {
    en: "Heart disease: What Causes Heart Disease?",
    es: "Enfermedad cardíaca: ¿Qué causa la enfermedad cardíaca?",
    hu: "Szívbetegség: Mi okozza a szívbetegséget?"
  },
  content: {
    en: `
Heart disease starts when arteries that carry blood to your heart get damaged, often due to high LDL cholesterol, inflammation, or high blood pressure. LDL, or “bad cholesterol,” carries cholesterol to your arteries, where it can stick to walls and form plaque, narrowing blood flow. Don’t worry — these processes can be managed with simple lifestyle changes like plant-based eating, exercise, and stress reduction.
    `,
    es: `
La enfermedad cardíaca comienza cuando las arterias que llevan sangre al corazón se dañan, a menudo debido a niveles altos de colesterol LDL, inflamación o presión arterial elevada. El LDL, conocido como “colesterol malo”, transporta colesterol a las arterias, donde puede adherirse a sus paredes y formar placas, estrechando el flujo sanguíneo. No te preocupes — estos procesos pueden controlarse con cambios simples en el estilo de vida, como una alimentación basada en plantas, ejercicio y reducción del estrés.
    `,
    hu: `
A szívbetegség akkor kezdődik, amikor a szívhez vért szállító artériák károsodnak, gyakran magas LDL-koleszterinszint, gyulladás vagy magas vérnyomás miatt. Az LDL, vagyis a „rossz koleszterin”, koleszterint szállít az artériákba, ahol az lerakódhat az érfalakon, plakkot képezve és beszűkítve a véráramlást. Ne aggódj — ezek a folyamatok egyszerű életmódbeli változtatásokkal, például növényi alapú étrenddel, mozgással és stresszcsökkentéssel jól kezelhetők.
    `
  },
  quiz: {
    question: {
      en: "What does LDL cholesterol do in the body?",
      es: "¿Qué hace el colesterol LDL en el cuerpo?",
      hu: "Mit tesz az LDL-koleszterin a szervezetben?"
    },
    options: {
      en: [
        "Helps remove excess fat from arteries",
        "Carries cholesterol that can build up and narrow arteries",
        "Lowers blood pressure",
        "Has no role in heart health"
      ],
      es: [
        "Ayuda a eliminar el exceso de grasa de las arterias",
        "Transporta colesterol que puede acumularse y estrechar las arterias",
        "Reduce la presión arterial",
        "No tiene ningún papel en la salud del corazón"
      ],
      hu: [
        "Segít eltávolítani a felesleges zsírt az artériákból",
        "Olyan koleszterint szállít, amely felhalmozódhat és beszűkítheti az artériákat",
        "Csökkenti a vérnyomást",
        "Nincs szerepe a szív egészségében"
      ]
    },
    answer: 1
  }
},
  
  /*  

  {
    issue: "Heart disease",
    title: "Heart disease: Understanding LDL Cholesterol",
    content: `
LDL cholesterol is often called “bad” cholesterol because it can build up in your arteries, but don’t worry — there’s a lot you can do to manage it! By choosing plant-based foods and cutting back on saturated fats from meat, cheese, and eggs, you can help your body remove excess cholesterol and keep your blood vessels clear.
    `,
    quiz: {
      question: "What does LDL cholesterol do in the body?",
      options: [
        "Helps remove excess fat from arteries",
        "Carries cholesterol that can build up and narrow arteries",
        "Lowers blood pressure",
        "Has no role in heart health"
      ],
      answer: 1
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: HDL and Cholesterol Balance",
    content: `
HDL, the “good” cholesterol, is your ally — it helps sweep LDL away from your arteries and send it to the liver for safe disposal. The good news? Regular exercise and a diet rich in plants boost HDL naturally, giving your heart extra protection without any complicated routines.
    `,
    quiz: {
      question: "Which cholesterol helps remove LDL from the body?",
      options: [
        "HDL",
        "LDL",
        "Triglycerides",
        "None"
      ],
      answer: 0
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Inflammation in Arteries",
    content: `
Heart attacks aren’t caused by cholesterol alone — inflammation in your arteries plays a big role. The great news? Simple choices like eating more fruits, vegetables, nuts, and whole grains while reducing processed foods can calm inflammation and help your arteries stay healthy.
    `,
    quiz: {
      question: "What causes inflammation in the arteries?",
      options: [
        "High intake of animal fats and processed foods",
        "Low LDL levels",
        "Antioxidants from fruits",
        "Regular exercise"
      ],
      answer: 0
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Nitric Oxide and Artery Health",
    content: `
Your arteries produce nitric oxide (NO), a natural molecule that relaxes blood vessels and improves blood flow — and you can help boost it! Eating leafy greens like spinach and kale is an easy, delicious way to support NO production and give your heart a gentle boost every day.
    `,
    quiz: {
      question: "What does nitric oxide do for your arteries?",
      options: [
        "Narrows arteries and increases pressure",
        "Raises cholesterol levels",
        "Causes inflammation",
        "Helps arteries relax and improve blood flow"
      ],
      answer: 3
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Blood Pressure and Plant Foods",
    content: `
High blood pressure can stress your heart, but there’s a simple, tasty solution — plant foods! Fruits, vegetables, whole grains, and legumes are packed with potassium and nitrates that naturally lower blood pressure and support your arteries, making healthy living both easy and enjoyable.
    `,
    quiz: {
      question: "How can plant foods help blood pressure?",
      options: [
        "Increase stress",
        "Provide potassium and nitrates to lower it",
        "Raise LDL cholesterol"
      ],
      answer: 1
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Exercise and Heart Strength",
    content: `
Even gentle movement like walking, yoga, or cycling strengthens your heart and keeps blood flowing smoothly. The best part? Just 30 minutes a day can increase HDL and help remove LDL, making it simple to give your heart a boost without feeling overwhelmed.
    `,
    quiz: {
      question: "How does regular exercise help your heart?",
      options: [
        "Strengthens the heart and improves circulation",
        "Raises LDL cholesterol",
        "Decreases HDL cholesterol",
        "Increases inflammation"
      ],
      answer: 0
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Stress, Sleep, and Recovery",
    content: `
Chronic stress and poor sleep raise blood pressure and inflammation, but don’t worry — small changes can make a big difference. Meditation, deep breathing, and 7–9 hours of quality sleep give your heart time to recover and thrive every day.
    `,
    quiz: {
      question: "How do stress and sleep affect heart health?",
      options: [
        "No effect",
        "Raise blood pressure and inflammation",
        "Directly lower LDL only"
      ],
      answer: 1
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Monitoring Progress",
    content: `
Tracking your LDL, HDL, and blood pressure helps you see the benefits of your lifestyle choices — and it’s easier than you think. With regular check-ups, you’ll be able to celebrate progress and adjust habits to give your heart the best care possible.
    `,
    quiz: {
      question: "Why should you monitor cholesterol and blood pressure?",
      options: [
        "To know how diet and exercise affect heart health",
        "To ignore heart disease",
        "To increase LDL"
      ],
      answer: 0
    }
  },
{
    issue: "Heart disease",
    title: "Heart disease: Case Example — Linda’s Recovery",
    content: `
Linda, 62, lowered her cholesterol from 250 to 170 and improved blood flow within six months on a plant-based diet. Her story shows that consistent lifestyle and dietary changes can produce real, measurable improvements. Don’t worry — small, daily steps can make a big difference for anyone!
    `,
    quiz: {
      question: "What happened to Linda after switching to a plant-based diet?",
      options: [
        "Her cholesterol increased",
        "Her heart disease worsened",
        "Her arteries began to heal and symptoms improved",
        "She required more medication"
      ],
      answer: 2
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: 7-Day Heart Healing Plan",
    content: `
Start simple: eat plants for breakfast, add salads for lunch, replace meat with beans for dinner, move your body, and reflect daily. Tiny, consistent actions over time lead to heart healing, improved energy, and a happier, healthier life. Don’t worry — you don’t need to change everything at once!
    `,
    quiz: {
      question: "What is the main message of this 7-day plan?",
      options: [
        "Change everything at once",
        "Small, consistent actions lead to healing",
        "Exercise is more important than food",
        "Only medication can reverse heart disease"
      ],
      answer: 1
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Omega-3 Fatty Acids for Heart Protection",
    content: `
Omega-3 fatty acids reduce inflammation, lower triglycerides, and support healthy blood vessels. Plant sources like flaxseeds, chia seeds, walnuts, and algae oil provide these essential fats safely. Adding just a few servings a week is easy and can make your heart stronger and happier.
    `,
    quiz: {
      question: "Which plant foods provide heart-healthy omega-3s?",
      options: [
        "Flaxseeds, chia seeds, walnuts, algae oil",
        "Potatoes and rice",
        "Meat and cheese"
      ],
      answer: 0
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Plant Sterols and Cholesterol Control",
    content: `
Plant sterols and stanols naturally block cholesterol absorption in your gut. Nuts, seeds, legumes, and fortified plant spreads help lower LDL and protect your arteries. Simple swaps can make a huge difference — you have the power to improve your heart health naturally!
    `,
    quiz: {
      question: "What do plant sterols and stanols do?",
      options: [
        "Increase cholesterol absorption",
        "Block cholesterol absorption and lower LDL",
        "Raise blood pressure"
      ],
      answer: 1
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Polyphenols and Antioxidants",
    content: `
Polyphenols in berries, cocoa, coffee, tea, and spices like turmeric reduce oxidative stress and inflammation in arteries. These antioxidants help keep blood vessels elastic and healthy. Adding a few colorful foods to your plate each day is simple, delicious, and powerful for your heart.
    `,
    quiz: {
      question: "Which foods are rich in polyphenols and antioxidants?",
      options: [
        "Berries, cocoa, tea, coffee, turmeric",
        "White bread and pasta",
        "Red meat and butter"
      ],
      answer: 0
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Weight Management and Insulin Sensitivity",
    content: `
Maintaining a healthy weight reduces strain on your heart, lowers blood pressure, and improves insulin sensitivity. A plant-based diet rich in whole grains, vegetables, and legumes supports steady blood sugar and long-term metabolic health. Don’t worry — small changes every day lead to lasting results!
    `,
    quiz: {
      question: "How does a healthy weight affect heart health?",
      options: [
        "Reduces strain on the heart and improves insulin sensitivity",
        "Increases LDL cholesterol",
        "Has no effect"
      ],
      answer: 0
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Avoiding Smoking and Limiting Alcohol",
    content: `
Smoking damages blood vessels and increases heart disease risk, while excessive alcohol raises blood pressure and triglycerides. Eliminating tobacco and drinking moderately or not at all strengthens your heart and arteries. Remember, every positive change counts, and it’s never too late to start!
    `,
    quiz: {
      question: "Which habits harm heart health?",
      options: [
        "Smoking and excessive alcohol",
        "Eating fruits and vegetables",
        "Walking daily"
      ],
      answer: 0
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Mindful Eating and Long-Term Habits",
    content: `
Mindful eating — paying attention to hunger, portion size, and food quality — prevents overeating and supports healthy cholesterol levels. Building consistent plant-based habits ensures lasting heart protection and overall wellness. Tiny, daily choices are powerful, so start today and enjoy the journey!
    `,
    quiz: {
      question: "Why is mindful eating important for the heart?",
      options: [
        "Increases LDL cholesterol",
        "Prevents overeating and supports cholesterol control",
        "Has no effect"
      ],
      answer: 1
    }
  },

  

  */

// HIGH CHOLESTEROL
{
  issue: "High cholesterol",
  title: {
    en: "High cholesterol: What Causes High Cholesterol?",
    es: "Colesterol alto: ¿Qué causa el colesterol alto?",
    hu: "Magas koleszterinszint: Mi okozza a magas koleszterint?"
  },
  content: {
    en: `
High cholesterol happens when LDL, the 'bad' cholesterol, accumulates in your arteries, forming plaque that narrows blood vessels and increases heart disease risk. Factors like diets high in saturated and trans fats, processed foods, lack of exercise, genetics, stress, and poor sleep all contribute. Don’t worry — there are simple steps you can take to reduce your risk and improve your heart health!
    `,
    es: `
El colesterol alto ocurre cuando el LDL, el “colesterol malo”, se acumula en las arterias, formando placas que estrechan los vasos sanguíneos y aumentan el riesgo de enfermedades cardíacas. Factores como dietas altas en grasas saturadas y trans, alimentos procesados, falta de ejercicio, genética, estrés y sueño deficiente contribuyen. ¡No te preocupes — hay pasos simples que puedes seguir para reducir tu riesgo y mejorar la salud de tu corazón!
    `,
    hu: `
A magas koleszterinszint akkor alakul ki, amikor az LDL, az úgynevezett „rossz koleszterin”, felhalmozódik az artériákban, plakkot képezve, ami beszűkíti az ereket és növeli a szívbetegségek kockázatát. Ehhez hozzájárulhat a telített és transzzsírokban gazdag étrend, a feldolgozott élelmiszerek, a mozgáshiány, a genetika, a stressz és a rossz alvás. Ne aggódj — egyszerű lépésekkel csökkentheted a kockázatot és javíthatod a szív egészségét!
    `
  },
  quiz: {
    question: {
      en: "What contributes to high cholesterol?",
      es: "¿Qué contribuye al colesterol alto?",
      hu: "Mi járul hozzá a magas koleszterinszinthez?"
    },
    options: {
      en: [
        "Excess LDL and poor lifestyle habits",
        "Only exercise",
        "Eating fruits and vegetables",
        "Drinking water"
      ],
      es: [
        "Exceso de LDL y malos hábitos de vida",
        "Solo hacer ejercicio",
        "Comer frutas y verduras",
        "Beber agua"
      ],
      hu: [
        "Túl sok LDL és rossz életmódbeli szokások",
        "Csak a mozgás",
        "Gyümölcsök és zöldségek fogyasztása",
        "Vízivás"
      ]
    },
    answer: 0
  }
},

 /*  
  {
    issue: "High cholesterol",
    title: "High cholesterol: Understanding Cholesterol — The Good, the Bad, and the Balance",
    content: "Cholesterol is essential for your body to build cells and hormones, but excess LDL can accumulate in arteries and trigger heart disease. Not all LDL is the same — small, dense LDL particles are more harmful, while HDL helps remove cholesterol from the bloodstream effectively. Don’t worry — by making small changes to your diet and lifestyle, you can help your body find balance naturally!"
    ,
    quiz: {
      question: "Which type of cholesterol can build up in arteries and cause blockages?",
      options: [
        "HDL cholesterol",
        "Dietary cholesterol from plants",
        "No cholesterol at all",
        "LDL cholesterol"
      ],
      answer: 3
    }
  },
  {
    issue: "High cholesterol",
    title: "High cholesterol: How Animal Products Affect Cholesterol Levels",
    content: "Saturated fats and dietary cholesterol from meat, eggs, and dairy increase LDL and can promote arterial plaque formation. Genetics also play a role, as some people are more sensitive to dietary cholesterol. Don’t worry — by choosing plant-based foods and monitoring your levels, you can protect your heart and improve your health!"
    ,
    quiz: {
      question: "Why do animal products raise cholesterol?",
      options: [
        "They are rich in fiber and antioxidants",
        "They contain saturated fats and dietary cholesterol",
        "They reduce LDL production in the liver",
        "They help arteries stay flexible"
      ],
      answer: 1
    }
  },
  {
    issue: "High cholesterol",
    title: "High cholesterol: The Power of Soluble Fiber",
    content: "Soluble fiber acts like a sponge for LDL cholesterol, binding it in the intestines and helping remove it before it reaches your bloodstream. It also supports gut health and steady blood sugar. Don’t worry — adding just a few servings of oats, beans, or fruits each day can significantly lower your cholesterol naturally!"
    ,
    quiz: {
      question: "How does soluble fiber help reduce cholesterol?",
      options: [
        "It increases cholesterol production",
        "It adds more LDL to the bloodstream",
        "It binds to cholesterol and removes it through digestion",
        "It stops the liver from working"
      ],
      answer: 2
    }
  },
  {
    issue: "High cholesterol",
    title: "High cholesterol: Replace Animal Fats with Plant Power",
    content: "Swapping saturated animal fats for unsaturated plant fats like avocado, nuts, and olive oil reduces LDL and may raise HDL, while also decreasing arterial inflammation. Omega-3 fatty acids from plants keep your vessels flexible. Don’t worry — simple swaps in your meals can have a powerful impact on your heart health!"
    ,
    quiz: {
      question: "Which of these is a healthy replacement for animal fats?",
      options: [
        "Avocado and olive oil",
        "Butter and cream",
        "Processed cheese",
        "Fried meat"
      ],
      answer: 0
    }
  },
  {
    issue: "High cholesterol",
    title: "High cholesterol: The Role of Exercise and Lifestyle",
    content: "Regular activity increases HDL and helps clear LDL from your bloodstream. Managing stress and getting enough sleep reduce cortisol and triglycerides, supporting cardiovascular health. Don’t worry — even small lifestyle adjustments, combined with a heart-friendly diet, create powerful benefits!"
    ,
    quiz: {
      question: "What effect does regular exercise have on cholesterol levels?",
      options: [
        "It raises LDL cholesterol",
        "It increases HDL and helps clear LDL",
        "It has no effect",
        "It raises triglycerides"
      ],
      answer: 1
    }
  },
  {
    issue: "High cholesterol",
    title: "High cholesterol: Real-Life Transformations and What’s Possible",
    content: "Research like Dr. Dean Ornish’s shows that a low-fat, plant-based diet can lower LDL dramatically and even reverse heart disease in some patients. Everyone’s results vary depending on genetics, risk factors, and adherence, but even small, consistent changes can improve heart health. Don’t worry — you can start today and see positive changes over time!"
    ,
    quiz: {
      question: "What did Dr. Ornish’s study reveal about plant-based diets?",
      options: [
        "They can lower LDL cholesterol and even reverse heart disease",
        "They make cholesterol worse",
        "They have no measurable impact",
        "They require medication to work"
      ],
      answer: 0
    }
  },


   */

   /*  
// === HIGH BLOOD PRESSURE ===
  {
    issue: "High blood pressure",
    title: "High blood pressure: What Causes High Blood Pressure?",
    content: "High blood pressure, or hypertension, occurs when your arteries experience too much force from circulating blood. Factors like excess sodium, saturated fats, stress, poor sleep, and lack of exercise all contribute. Don’t worry — understanding the causes is the first step toward controlling it and protecting your heart!"
    ,
    quiz: {
      question: "Which factors contribute to high blood pressure?",
      options: [
        "Excess sodium, stress, poor sleep, and lack of exercise",
        "Eating fruits and vegetables",
        "Drinking water",
        "Daily walking"
      ],
      answer: 0
    }
  },
  {
    issue: "High blood pressure",
    title: "High blood pressure: Understanding Blood Pressure Numbers",
    content: "Blood pressure measures the force of blood against your artery walls. Systolic (top number) is the pressure when your heart beats, and diastolic (bottom number) is the pressure when your heart rests. Knowing these numbers helps you track your heart health and see improvements from lifestyle changes!"
    ,
    quiz: {
      question: "What does the systolic number in blood pressure represent?",
      options: [
        "Pressure when the heart beats",
        "Pressure when the heart rests",
        "Cholesterol level",
        "Heart rate"
      ],
      answer: 0
    }
  },
  {
    issue: "High blood pressure",
    title: "High blood pressure: How Diet Affects Blood Pressure",
    content: "High sodium and saturated fat intake stress arteries and raise blood pressure over time. Processed foods, cheese, cured meats, and fried meals are common culprits. Don’t worry — swapping just a few of these items for fresh plant-based foods can make a real difference!"
    ,
    quiz: {
      question: "Which foods commonly raise blood pressure?",
      options: [
        "Fresh fruits and vegetables",
        "Processed foods, cheese, and cured meats",
        "Beans and legumes",
        "Leafy greens"
      ],
      answer: 1
    }
  },
  {
    issue: "High blood pressure",
    title: "High blood pressure: Sodium — The Hidden Trigger",
    content: "Most people consume far more sodium than needed, often without noticing. Excess sodium makes your body retain water, increasing blood volume and pressure on arteries. Don’t worry — reducing sodium is easier than you think with herbs, garlic, lemon, and home-cooked meals!"
    ,
    quiz: {
      question: "How does excess sodium affect blood pressure?",
      options: [
        "Lowers blood pressure",
        "Increases blood pressure by retaining water",
        "Has no effect",
        "Strengthens arteries"
      ],
      answer: 1
    }
  },
  {
    issue: "High blood pressure",
    title: "High blood pressure: Tips for Reducing Sodium",
    content: "Switching to fresh, whole plant foods dramatically cuts sodium intake. Use flavorful alternatives like herbs, garlic, lemon, and choose unsalted nuts and seeds. Even reducing 1,500–2,000 mg of sodium daily can lower your systolic pressure by 5–10 mmHg within weeks!"
    ,
    quiz: {
      question: "Which tip helps reduce sodium intake?",
      options: [
        "Add more processed snacks",
        "Use herbs, garlic, and lemon instead of salt",
        "Drink soda daily",
        "Add cheese to meals"
      ],
      answer: 1
    }
  },
  {
    issue: "High blood pressure",
    title: "High blood pressure: Potassium — Your Natural Regulator",
    content: "Potassium helps balance sodium and relax artery walls, keeping blood pressure in check. Bananas, spinach, sweet potatoes, beans, and avocado are all excellent sources. Don’t worry — adding these foods to your meals is an easy way to support your heart naturally!"
    ,
    quiz: {
      question: "Which mineral helps relax arteries and control blood pressure?",
      options: [
        "Iron",
        "Zinc",
        "Potassium",
        "Calcium"
      ],
      answer: 2
    }
  },
  {
    issue: "High blood pressure",
    title: "High blood pressure: Potassium in Everyday Foods",
    content: "Top plant sources of potassium include bananas, sweet potatoes, spinach, kale, beans, lentils, avocado, and pumpkin seeds. Even small swaps like a salty sandwich for lentil soup with leafy greens help your body lower blood pressure naturally. Don’t worry — these changes are easy to fit into your daily routine!"
    ,
    quiz: {
      question: "Which foods are rich in potassium?",
      options: [
        "Chips and soda",
        "Bananas and spinach",
        "Cheese and bacon",
        "White bread"
      ],
      answer: 1
    }
  },
  {
    issue: "High blood pressure",
    title: "High blood pressure: Plant-Based Diets and Blood Pressure",
    content: "Whole-food, plant-based diets are naturally low in sodium, high in potassium, magnesium, fiber, and antioxidants. Studies show people with mild hypertension can see systolic pressure drop by 10 mmHg and diastolic by 8 mmHg in just 12 weeks. Don’t worry — every plant-powered meal moves you closer to a healthier heart!"
    ,
    quiz: {
      question: "Why do plant-based diets help lower blood pressure?",
      options: [
        "They increase sodium",
        "They are high in potassium and fiber",
        "They reduce potassium",
        "They increase saturated fat"
      ],
      answer: 1
    }
  },
  {
    issue: "High blood pressure",
    title: "High blood pressure: Exercise, Sleep, and Stress",
    content: "Daily movement strengthens the heart, improves circulation, and helps regulate blood pressure. Meditation, deep breathing, journaling, and connecting with supportive friends reduce stress and cortisol. And 7–9 hours of quality sleep help your body recover and maintain healthy arteries. Don’t worry — even small lifestyle changes amplify the benefits of a plant-based diet!"
    ,
    quiz: {
      question: "Which lifestyle factor does NOT help lower blood pressure?",
      options: [
        "Exercise",
        "Stress management",
        "Adequate sleep",
        "Chronic stress"
      ],
      answer: 3
    }
  },
  {
    issue: "High blood pressure",
    title: "High blood pressure: Small Steps, Big Impact — 7-Day Action Plan",
    content: "Start simple with a 7-day plan: swap processed snacks for fruits and veggies, add high-potassium foods, replace meat and dairy with plants, reduce salt with herbs and lemon, move your body, and reflect daily. Even one week of consistent effort can produce noticeable changes. Don’t worry — each small choice is a step toward a stronger, healthier heart!"
    ,
    quiz: {
      question: "What is the main idea of the 7-day action plan?",
      options: [
        "Change everything at once",
        "Small, consistent plant-based and lifestyle actions reduce blood pressure",
        "Exercise alone is enough",
        "Medication is the only solution"
      ],
      answer: 1
    }
  },

  */

   
// === TYPE 2 DIABETES ===
{
  issue: "Type 2 diabetes",
  title: {
    en: "Type 2 diabetes: What Causes Type 2 Diabetes?",
    es: "Diabetes tipo 2: ¿Qué causa la diabetes tipo 2?",
    hu: "2-es típusú cukorbetegség: Mi okozza a 2-es típusú cukorbetegséget?"
  },
  content: {
    en: `
Type 2 diabetes happens when your body becomes resistant to insulin, the hormone that moves sugar from blood into your cells. Excess sugar, refined carbs, processed foods, and animal products spike glucose and promote insulin resistance. Don’t worry — understanding these causes is the first step toward stabilizing blood sugar and protecting your health!
    `,
    es: `
La diabetes tipo 2 ocurre cuando tu cuerpo se vuelve resistente a la insulina, la hormona que transporta el azúcar de la sangre a las células. El exceso de azúcar, los carbohidratos refinados, los alimentos procesados y los productos animales elevan la glucosa y fomentan la resistencia a la insulina. ¡No te preocupes — entender estas causas es el primer paso para estabilizar el azúcar en sangre y proteger tu salud!
    `,
    hu: `
A 2-es típusú cukorbetegség akkor alakul ki, amikor a szervezet ellenállóvá válik az inzulinnal szemben, azzal a hormonnal, amely a cukrot a vérből a sejtekbe szállítja. A túl sok cukor, a finomított szénhidrátok, a feldolgozott ételek és az állati termékek megemelik a vércukorszintet és elősegítik az inzulinrezisztenciát. Ne aggódj — ezek megértése az első lépés a vércukorszint stabilizálása és az egészség védelme felé!
    `
  },
  quiz: {
    question: {
      en: "What contributes to type 2 diabetes?",
      es: "¿Qué contribuye a la diabetes tipo 2?",
      hu: "Mi járul hozzá a 2-es típusú cukorbetegség kialakulásához?"
    },
    options: {
      en: [
        "Leafy greens and legumes",
        "Water and unsweetened tea",
        "High sugar, refined carbs, processed foods, and animal products",
        "Regular exercise"
      ],
      es: [
        "Verduras de hoja y legumbres",
        "Agua y té sin azúcar",
        "Exceso de azúcar, carbohidratos refinados, alimentos procesados y productos animales",
        "Ejercicio regular"
      ],
      hu: [
        "Leveles zöldségek és hüvelyesek",
        "Víz és cukormentes tea",
        "Túl sok cukor, finomított szénhidrátok, feldolgozott ételek és állati termékek",
        "Rendszeres testmozgás"
      ]
    },
    answer: 2
  }
},

   /*  
  {
    issue: "Type 2 diabetes",
    title: "Type 2 diabetes: How Blood Sugar Works",
    content: "When insulin doesn’t work efficiently, sugar builds up in the blood, causing fatigue, weight gain, and long-term risks to your heart, kidneys, and nerves. Plant-based meals with whole grains, legumes, fruits, and vegetables release sugar slowly, keeping energy steady and insulin working better. Even small swaps like replacing sugary drinks with water can improve blood sugar quickly!"
    ,
    quiz: {
      question: "What happens when insulin is not effective?",
      options: [
        "Blood sugar drops too low",
        "Blood sugar rises, causing fatigue and other risks",
        "Insulin works faster",
        "Nothing changes"
      ],
      answer: 1
    }
  },
  {
    issue: "Type 2 diabetes",
    title: "Type 2 diabetes: Low-Glycemic Plant Foods",
    content: "Not all carbs affect blood sugar the same way. Low-glycemic foods release glucose slowly, preventing spikes and supporting insulin function. Key foods include beans, lentils, chickpeas, quinoa, steel-cut oats, brown rice, and non-starchy vegetables like leafy greens and peppers."
    ,
    quiz: {
      question: "Which foods are low-glycemic and help stabilize blood sugar?",
      options: [
        "Candy and soda",
        "White bread and pastries",
        "Processed meats",
        "Whole grains, legumes, and vegetables"
      ],
      answer: 3
    }
  },
  {
    issue: "Type 2 diabetes",
    title: "Type 2 diabetes: Smart Swaps for Low-Glycemic Meals",
    content: "Replace white rice with lentils or quinoa, choose a bean salad over potato chips, and snack on fruits instead of candy. Each swap trains your body to handle glucose better. Small, consistent changes lead to measurable improvements over time!"
    ,
    quiz: {
      question: "What is a simple way to lower blood sugar with diet?",
      options: [
        "Swap white rice for lentils or quinoa",
        "Add more sugary drinks",
        "Eat more processed snacks",
        "Skip meals"
      ],
      answer: 0
    }
  },
  {
    issue: "Type 2 diabetes",
    title: "Type 2 diabetes: The Sugar Trap — Drinks to Watch",
    content: "Sugary drinks, including fruit juices, flood your bloodstream with glucose, forcing your pancreas to overproduce insulin. Over time, this contributes to insulin resistance. Switching to water, sparkling water, or unsweetened plant milk gives your pancreas a break and reduces spikes!"
    ,
    quiz: {
      question: "What should sugary drinks be replaced with?",
      options: [
        "Water or unsweetened plant milk",
        "Energy drinks",
        "Beer",
        "Milkshakes"
      ],
      answer: 0
    }
  },
  {
    issue: "Type 2 diabetes",
    title: "Type 2 diabetes: Flavoring Water for Health",
    content: "Add lemon, cucumber, or mint to water for a refreshing, sugar-free drink. Keep fruit handy as a natural sweet alternative and pair carbs with fiber-rich foods, like fruit with nuts, to slow sugar absorption. Even small adjustments like these make a big difference!"
    ,
    quiz: {
      question: "Which tip helps reduce sugar spikes?",
      options: [
        "Drink soda instead of water",
        "Skip meals",
        "Flavor water with lemon or mint",
        "Eat candy with every snack"
      ],
      answer: 2
    }
  },
  {
    issue: "Type 2 diabetes",
    title: "Type 2 diabetes: Fiber — Your Secret Weapon",
    content: "Fiber slows digestion, stabilizes blood sugar, and nourishes your gut microbiome, all helping prevent insulin spikes. Beans, lentils, oats, barley, vegetables like carrots and broccoli, and fruits such as berries and apples are excellent sources."
    ,
    quiz: {
      question: "Why is fiber important for type 2 diabetes?",
      options: [
        "It slows digestion and stabilizes blood sugar",
        "It spikes blood sugar",
        "It increases insulin resistance",
        "It has no effect"
      ],
      answer: 0
    }
  },
  {
    issue: "Type 2 diabetes",
    title: "Type 2 diabetes: How Fiber Helps Every Day",
    content: "Gradually increasing fiber prevents digestive discomfort while improving blood sugar. Add beans to salads, start mornings with oatmeal, and snack on fruit. Each choice strengthens your body’s ability to manage glucose naturally!"
    ,
    quiz: {
      question: "How can you safely increase fiber intake?",
      options: [
        "All at once, large amounts",
        "Gradually, with beans, oats, and fruit",
        "By eating only meat",
        "Skipping meals"
      ],
      answer: 1
    }
  },
  {
    issue: "Type 2 diabetes",
    title: "Type 2 diabetes: Weight Management and Plant-Based Nutrition",
    content: "Maintaining a healthy weight improves insulin sensitivity and helps prevent diabetes complications. Plant-based diets are high in fiber and lower in calories, naturally controlling appetite and body fat. Even modest 5–10% weight reduction has significant benefits!"
    ,
    quiz: {
      question: "How does weight management help type 2 diabetes?",
      options: [
        "Increases blood sugar",
        "Has no effect",
        "Raises insulin resistance",
        "Improves insulin sensitivity and lowers blood sugar"
      ],
      answer: 3
    }
  },
  {
    issue: "Type 2 diabetes",
    title: "Type 2 diabetes: Lifestyle Support for Blood Sugar",
    content: "Combine plant-based meals with daily movement — walking, yoga, or cycling — to improve insulin function. Balanced meals with beans, lentils, or tofu, and limiting animal fats and processed foods, strengthen blood sugar control. Each healthy habit supports energy, mood, and long-term health!"
    ,
    quiz: {
      question: "Which lifestyle habit supports better blood sugar control?",
      options: [
        "Daily movement and balanced plant-based meals",
        "Sugary drinks and processed snacks",
        "Skipping breakfast",
        "Eating more saturated fat"
      ],
      answer: 0
    }
  },
  {
    issue: "Type 2 diabetes",
    title: "Type 2 diabetes: Real-Life Transformations",
    content: "Studies show that switching to a low-fat, plant-based diet can reverse type 2 diabetes and sometimes eliminate medications. One participant replaced meat with beans, cut sugary drinks, and walked 30 minutes daily, lowering fasting glucose from 160 mg/dL to 110 mg/dL in 3 months. Don’t worry — small, consistent changes really do work!"
    ,
    quiz: {
      question: "What is possible with a low-fat, plant-based diet?",
      options: [
        "Reversing diabetes and reducing medications",
        "Worsening blood sugar control",
        "No measurable effect",
        "Requiring more insulin"
      ],
      answer: 0
    }
  },

   */

// === OBESITY ===
{
  issue: "Obesity",
  title: {
    en: "Obesity: What Causes Obesity?",
    es: "Obesidad: ¿Qué causa la obesidad?",
    hu: "Elhízás: Mi okozza az elhízást?"
  },
  content: {
    en: `
Obesity is more than just extra weight — it’s a condition that increases the risk of diabetes, heart disease, joint problems, and even mental health challenges. Major contributors include calorie-dense, nutrient-poor foods high in sugar and saturated fat, sedentary lifestyle, and sometimes genetics. Don’t worry — understanding the causes is the first step toward taking control and improving your health!
    `,
    es: `
La obesidad es más que solo peso extra: es una condición que aumenta el riesgo de diabetes, enfermedades cardíacas, problemas articulares e incluso desafíos de salud mental. Los principales factores incluyen alimentos con muchas calorías pero pocos nutrientes, ricos en azúcar y grasas saturadas, un estilo de vida sedentario y, a veces, la genética. ¡No te preocupes — entender las causas es el primer paso para tomar el control y mejorar tu salud!
    `,
    hu: `
Az elhízás több, mint csak súlytöbblet — ez egy állapot, amely növeli a cukorbetegség, szívbetegségek, ízületi problémák és akár a mentális egészség kockázatát. A fő hozzájáruló tényezők közé tartoznak a magas kalóriatartalmú, tápanyagszegény ételek, amelyek sok cukrot és telített zsírt tartalmaznak, az ülő életmód, és néha a genetika. Ne aggódj — az okok megértése az első lépés az egészséged feletti kontroll visszanyeréséhez és javításához!
    `
  },
  quiz: {
    question: {
      en: "What contributes most to obesity?",
      es: "¿Qué contribuye más a la obesidad?",
      hu: "Mi járul leginkább hozzá az elhízáshoz?"
    },
    options: {
      en: [
        "Excess calories from nutrient-poor foods",
        "Drinking water",
        "Eating vegetables",
        "Genetics only"
      ],
      es: [
        "Calorías excesivas de alimentos pobres en nutrientes",
        "Beber agua",
        "Comer verduras",
        "Solo genética"
      ],
      hu: [
        "Tápanyagszegény ételekből származó túlzott kalóriabevitel",
        "Vízivás",
        "Zöldségevés",
        "Csak genetika"
      ]
    },
    answer: 0
  }
},

 /* 
  {
    issue: "Obesity",
    title: "Obesity: Understanding the Role of Diet",
    content: "Plant-based diets provide high-volume, low-calorie foods that fill your stomach without overloading your body with fat and sugar. Vegetables, fruits, whole grains, and legumes reduce calorie intake naturally while supplying fiber, antioxidants, and essential nutrients. Even small, consistent dietary changes can produce measurable weight loss and improve overall health!"
    ,
    quiz: {
      question: "How do plant-based diets help with obesity?",
      options: [
        "Increase saturated fat intake",
        "Reduce calorie intake while supplying nutrients",
        "Provide empty calories",
        "Have no effect"
      ],
      answer: 1
    }
  },
  {
    issue: "Obesity",
    title: "Obesity: Portion Control and Mindful Eating",
    content: "Portion control is a simple yet powerful tool in weight management. Even healthy foods can lead to weight gain if eaten in excess, so pay attention to hunger cues, serve smaller portions, eat slowly, and stop when satisfied. Mindful eating helps you enjoy food, feel full, and naturally control calories."
    ,
    quiz: {
      question: "What is an effective strategy to prevent overeating?",
      options: [
        "Eating as fast as possible",
        "Skipping meals",
        "Mindful eating and portion control",
        "Drinking only juice"
      ],
      answer: 2
    }
  },
  {
    issue: "Obesity",
    title: "Obesity: Practical Tips for Mindful Eating",
    content: "Use smaller plates, chew slowly, and savor each bite to reinforce fullness signals. Pair meals with water or herbal teas and avoid distractions like screens. These small habits make weight management easier and more enjoyable over time!"
    ,
    quiz: {
      question: "Which tip supports mindful eating?",
      options: [
        "Use smaller plates and eat slowly",
        "Eat quickly while watching TV",
        "Skip meals frequently",
        "Only drink sugary drinks"
      ],
      answer: 0
    }
  },
  {
    issue: "Obesity",
    title: "Obesity: Exercise — Your Weight Management Ally",
    content: "Physical activity is key for long-term weight control and overall health. Even walking, cycling, dancing, or stretching at home burns calories, improves metabolism, preserves muscle, and boosts mood. Combined with a plant-based diet, exercise accelerates fat loss and improves energy."
    ,
    quiz: {
      question: "How does exercise support weight management?",
      options: [
        "Increases fat storage",
        "Is unnecessary if you eat vegetables",
        "Reduces metabolism",
        "Burns calories, improves metabolism, and preserves muscle"
      ],
      answer: 3
    }
  },
  {
    issue: "Obesity",
    title: "Obesity: Reducing Processed Foods and Animal Products",
    content: "Processed foods and animal products are high in saturated fat, cholesterol, and empty calories, often leading to overeating. Replacing them with whole plant foods reduces calorie intake naturally, increases fiber, improves gut health, and lowers inflammation. Small swaps, like burgers for bean patties or cheese for avocado, can have a big impact!"
    ,
    quiz: {
      question: "Why replace animal products with plant foods?",
      options: [
        "Plant foods reduce calories, increase fiber, and promote satiety",
        "They are calorie-dense and cause weight gain",
        "They contain no nutrients",
        "They increase saturated fat intake"
      ],
      answer: 0
    }
  },
  {
    issue: "Obesity",
    title: "Obesity: Practical Plant-Based Swaps",
    content: "Swap burgers with bean patties, replace cheese with hummus or avocado, and snack on fruits instead of chips. These small, daily changes reduce calories and improve health markers like blood pressure, cholesterol, and blood sugar. Consistency is more important than perfection!"
    ,
    quiz: {
      question: "Which swap helps reduce calories and improve health?",
      options: [
        "Replace burgers with bean patties",
        "Add more processed cheese",
        "Snack on chips",
        "Drink soda"
      ],
      answer: 0
    }
  },
  {
    issue: "Obesity",
    title: "Obesity: Building Sustainable Habits",
    content: "Sustainable weight loss comes from small, long-term habit changes rather than extreme diets. Eat more vegetables, drink water, move daily, and cook at home when possible. Over time, these actions become automatic, making healthy weight maintenance effortless!"
    ,
    quiz: {
      question: "What is the key to sustainable weight loss?",
      options: [
        "Extreme diets",
        "Consistent healthy habits",
        "Skipping meals",
        "Eating only fruit for weeks"
      ],
      answer: 1
    }
  },
  {
    issue: "Obesity",
    title: "Obesity: Real-Life Success Stories",
    content: "Many people have transformed their lives through plant-based diets and lifestyle changes. One participant lost 12 kg in 12 weeks, improved blood sugar, increased energy, and maintained weight loss. These examples show that gradual, consistent changes are effective and sustainable!"
    ,
    quiz: {
      question: "What do success stories show about plant-based weight management?",
      options: [
        "Gradual, consistent plant-based choices lead to sustainable weight loss",
        "Extreme diets are the only way",
        "Weight cannot be reduced without surgery",
        "It’s impossible without medication"
      ],
      answer: 0
    }
  },

 */

// === DIGESTIVE ISSUES ===
{
  issue: "Digestive issues",
  title: {
    en: "Digestive issues: What Causes Digestive Problems?",
    es: "Problemas digestivos: ¿Qué causa problemas digestivos?",
    hu: "Emésztési problémák: Mi okozza az emésztési gondokat?"
  },
  content: {
    en: `
Digestive issues often arise from low-fiber diets, excess animal products, processed foods, and sedentary lifestyles. Meat and dairy can be harder to digest, slowing transit time and promoting inflammation. The good news: your gut responds quickly to plant-based changes and lifestyle improvements!
    `,
    es: `
Los problemas digestivos suelen surgir de dietas bajas en fibra, exceso de productos animales, alimentos procesados y un estilo de vida sedentario. La carne y los lácteos pueden ser más difíciles de digerir, ralentizando el tránsito intestinal y promoviendo la inflamación. ¡La buena noticia: tu intestino responde rápidamente a los cambios hacia alimentos de origen vegetal y mejoras en el estilo de vida!
    `,
    hu: `
Az emésztési problémák gyakran alacsony rosttartalmú étrendből, túl sok állati termékből, feldolgozott ételekből és ülő életmódból erednek. A hús és a tejtermékek nehezebben emészthetők, lassítják az emésztést és gyulladást okozhatnak. A jó hír: a bélrendszer gyorsan reagál a növényi alapú étrendre és az életmódbeli változtatásokra!
    `
  },
  quiz: {
    question: {
      en: "What is a common cause of digestive problems?",
      es: "¿Cuál es una causa común de problemas digestivos?",
      hu: "Mi az emésztési problémák gyakori oka?"
    },
    options: {
      en: [
        "Low-fiber diet and excess animal products",
        "Eating vegetables",
        "Drinking water",
        "Regular exercise"
      ],
      es: [
        "Dieta baja en fibra y exceso de productos animales",
        "Comer verduras",
        "Beber agua",
        "Hacer ejercicio regularmente"
      ],
      hu: [
        "Alacsony rosttartalmú étrend és túl sok állati termék",
        "Zöldségevés",
        "Vízivás",
        "Rendszeres testmozgás"
      ]
    },
    answer: 0
  }
},

 /*  
  {
    issue: "Digestive issues",
    title: "Digestive issues: Why a Plant-Based Diet Helps",
    content: "Plant-based diets are naturally high in fiber, water, and micronutrients, which support smooth digestion and feed beneficial gut bacteria. They reduce inflammation and help food move efficiently through your digestive tract. Even small swaps, like replacing meat with beans, can make a noticeable difference within days!"
    ,
    quiz: {
      question: "How do plant-based diets support digestion?",
      options: [
        "Increase inflammation",
        "High in fiber and micronutrients to support digestion",
        "Slow digestion",
        "Reduce nutrient absorption"
      ],
      answer: 1
    }
  },
  {
    issue: "Digestive issues",
    title: "Digestive issues: Fiber — Your Digestive Hero",
    content: "Fiber adds bulk to stool, promotes regular bowel movements, and feeds beneficial gut bacteria. Soluble fiber slows digestion and balances blood sugar, while insoluble fiber adds bulk and prevents constipation. Gradually increasing fiber intake and drinking plenty of water keeps your gut happy and avoids discomfort!"
    ,
    quiz: {
      question: "What is one benefit of fiber for digestion?",
      options: [
        "It spikes blood sugar",
        "It decreases gut bacteria",
        "It adds bulk to stool and promotes regular bowel movements",
        "It causes constipation"
      ],
      answer: 2
    }
  },
  {
    issue: "Digestive issues",
    title: "Digestive issues: Gradually Boost Your Fiber Intake",
    content: "Most people get far less than the recommended 25–30 grams of fiber per day. Add fiber slowly to avoid bloating — start with beans in salads, oats for breakfast, or fruit as a snack. Your gut microbiome will thank you, and digestion will improve naturally!"
    ,
    quiz: {
      question: "Why should fiber be increased gradually?",
      options: [
        "To reduce nutrient absorption",
        "To slow digestion",
        "It doesn’t matter how fast you increase fiber",
        "To prevent digestive discomfort and bloating"
      ],
      answer: 3
    }
  },
  {
    issue: "Digestive issues",
    title: "Digestive issues: Probiotics — Feeding Your Microbiome",
    content: "Probiotics are beneficial bacteria that support digestion, immune function, and reduce inflammation. Plant-based sources include sauerkraut, kimchi, miso, tempeh, and plant-based yogurts with live cultures. Just a small serving daily can help your gut thrive!"
    ,
    quiz: {
      question: "Which foods are good sources of probiotics?",
      options: [
        "Sauerkraut, kimchi, and plant yogurt",
        "Processed meats",
        "Chips and fries",
        "Fried chicken"
      ],
      answer: 0
    }
  },
  {
    issue: "Digestive issues",
    title: "Digestive issues: Avoiding Gut Irritants",
    content: "Certain foods can worsen bloating, gas, and inflammation. Excess meat, dairy, highly processed foods, refined sugar, and fried foods are common culprits. Swapping them for whole plant foods improves gut motility, reduces inflammation, and creates a friendly environment for beneficial bacteria."
    ,
    quiz: {
      question: "Which foods should be reduced to improve digestion?",
      options: [
        "Vegetables and fruits",
        "Excess meat, dairy, and processed foods",
        "Whole grains and legumes",
        "Water and herbal teas"
      ],
      answer: 1
    }
  },
  {
    issue: "Digestive issues",
    title: "Digestive issues: Hydration and Movement",
    content: "Water helps fiber move through the gut, supports nutrient absorption, and prevents constipation. Physical activity, like walking after meals, yoga, or stretching, stimulates digestion and reduces bloating. Pair hydration and movement with a plant-based diet for maximum gut benefits!"
    ,
    quiz: {
      question: "How do hydration and movement support digestive health?",
      options: [
        "They slow digestion and increase bloating",
        "They help fiber move through the gut and stimulate digestion",
        "They increase LDL cholesterol",
        "They are unrelated to gut health"
      ],
      answer: 1
    }
  },
  {
    issue: "Digestive issues",
    title: "Digestive issues: Small Changes, Big Improvements",
    content: "Even a few meals per week free from animal products and processed foods can reduce discomfort and improve energy. Add fermented foods, plenty of fiber, and drink water consistently. Your gut responds quickly, and small changes add up to big results!"
    ,
    quiz: {
      question: "What small changes can improve gut health?",
      options: [
        "Eating more processed foods",
        "Drinking sugary beverages",
        "Adding fiber, fermented foods, and water",
        "Increasing fried foods"
      ],
      answer: 2
    }
  },
  {
    issue: "Digestive issues",
    title: "Digestive issues: Real-Life Gut Transformations",
    content: "Many people notice dramatic improvements after switching to a plant-focused diet. Within weeks, bloating decreases, stool becomes regular, and energy improves. Every plant-based meal, glass of water, and gentle walk supports your gut’s healing and overall well-being!"
    ,
    quiz: {
      question: "What happens after switching to a plant-based diet?",
      options: [
        "Improved digestion and less bloating",
        "Worse digestion",
        "No change",
        "Increased bloating"
      ],
      answer: 0
    }
  },


*/


// === INFLAMMATION OR SWELLING ===

  {
  issue: "Inflammation or swelling",
  title: {
    en: "Inflammation: What Causes Chronic Inflammation?",
    es: "Inflamación: ¿Qué causa la inflamación crónica?",
    hu: "Gyulladás: Mi okozza a krónikus gyulladást?"
  },
  content: {
    en: `
Chronic inflammation happens when your body’s immune response stays active for too long. Major triggers include excess saturated fat from meat and dairy, processed foods, and refined sugar. The good news: your body can calm inflammation with simple, plant-based changes!
    `,
    es: `
La inflamación crónica ocurre cuando la respuesta inmune de tu cuerpo permanece activa durante demasiado tiempo. Los principales desencadenantes incluyen el exceso de grasas saturadas de la carne y los lácteos, alimentos procesados y azúcar refinada. ¡La buena noticia: tu cuerpo puede reducir la inflamación con cambios simples basados en plantas!
    `,
    hu: `
A krónikus gyulladás akkor alakul ki, amikor a szervezet immunválasza túl hosszú ideig aktív marad. A fő kiváltó okok közé tartozik a húsból és tejtermékből származó túlzott telített zsír, a feldolgozott ételek és a finomított cukor. A jó hír: a szervezet egyszerű, növényi alapú változtatásokkal képes csökkenteni a gyulladást!
    `
  },
  quiz: {
    question: {
      en: "What commonly triggers chronic inflammation?",
      es: "¿Qué desencadena comúnmente la inflamación crónica?",
      hu: "Mi váltja ki gyakran a krónikus gyulladást?"
    },
    options: {
      en: [
        "Excess saturated fat, processed foods, and sugar",
        "Eating leafy greens",
        "Drinking water",
        "Daily exercise"
      ],
      es: [
        "Exceso de grasas saturadas, alimentos procesados y azúcar",
        "Comer verduras de hoja verde",
        "Beber agua",
        "Hacer ejercicio diario"
      ],
      hu: [
        "Túlzott telített zsír, feldolgozott ételek és cukor",
        "Zöld leveles zöldségek fogyasztása",
        "Vízivás",
        "Napi testmozgás"
      ]
    },
    answer: 0
  }
},

 /*  
  {
    issue: "Inflammation or swelling",
    title: "Inflammation: Plant-Based Foods to Calm the Fire",
    content: "Plant foods are rich in antioxidants and phytonutrients that reduce inflammation naturally. Berries, leafy greens, nuts, seeds, and colorful vegetables help protect tissues, calm your immune system, and reduce swelling. Even small swaps, like adding turmeric to meals, make a measurable difference over time!"
    ,
    quiz: {
      question: "Which foods help reduce inflammation?",
      options: [
        "Processed sugar and fried food",
        "Red meat and sausages",
        "Berries, leafy greens, and nuts",
        "Cheese and butter"
      ],
      answer: 2
    }
  },
  {
    issue: "Inflammation or swelling",
    title: "Inflammation: Avoiding Pro-Inflammatory Foods",
    content: "Certain foods trigger inflammation and oxidative stress. Processed foods, fried meals, red and processed meats, sugary drinks, and refined carbs are common culprits. Replacing them with whole plant foods reduces systemic inflammation and protects organs from long-term damage."
    ,
    quiz: {
      question: "Which foods should be reduced to prevent inflammation?",
      options: [
        "Leafy greens and berries",
        "Whole grains",
        "Legumes and nuts",
        "Processed foods, sugar, and refined carbs"
      ],
      answer: 3
    }
  },
  {
    issue: "Inflammation or swelling",
    title: "Inflammation: Easy Swaps for a Calmer Body",
    content: "You don’t have to overhaul your diet overnight. Swap fried chicken with roasted chickpeas or tofu, soda with sparkling water or herbal tea, and processed meats with lentils, beans, or mushrooms. Even small, gradual changes improve inflammation markers within weeks!"
    ,
    quiz: {
      question: "What small dietary swaps can help reduce inflammation?",
      options: [
        "Replace fried and processed foods with plant-based options",
        "Eat more processed snacks",
        "Drink more soda",
        "Increase fried foods"
      ],
      answer: 0
    }
  },
  {
    issue: "Inflammation or swelling",
    title: "Inflammation: Omega-3s — Your Plant-Based Anti-Inflammatory Fats",
    content: "Omega-3 fatty acids help reduce swelling, support heart health, and improve joint function. Plant sources include flaxseeds, chia seeds, walnuts, hemp seeds, and algal oil. Sprinkle them on meals or enjoy as snacks to calm inflammation and balance your body naturally!"
    ,
    quiz: {
      question: "Which plant foods are good sources of anti-inflammatory omega-3s?",
      options: [
        "Cheese, butter, and red meat",
        "Chips and soda",
        "Flaxseeds, chia seeds, walnuts",
        "White bread and pastries"
      ],
      answer: 2
    }
  },
  {
    issue: "Inflammation or swelling",
    title: "Inflammation: Lifestyle Habits That Make a Difference",
    content: "Diet alone isn’t enough — lifestyle choices greatly influence inflammation. Moderate exercise, stress management, and quality sleep all help. Walking, yoga, meditation, and journaling lower inflammatory markers and support a calmer, healthier body."
    ,
    quiz: {
      question: "Which lifestyle factor increases inflammation?",
      options: [
        "Chronic stress",
        "Exercise",
        "Adequate sleep",
        "Eating berries and greens"
      ],
      answer: 0
    }
  },
  {
    issue: "Inflammation or swelling",
    title: "Inflammation: Daily Habits to Keep Your Body Calm",
    content: "Small, consistent habits amplify the anti-inflammatory effect. Add colorful vegetables to meals, snack on nuts, drink plenty of water, and move your body daily. These small steps work together to reduce chronic swelling and pain over time."
    ,
    quiz: {
      question: "What daily habits support anti-inflammatory effects?",
      options: [
        "Drinking soda daily",
        "Eating colorful vegetables, nuts, hydrating, and moving",
        "Skipping vegetables",
        "Sleeping less than 5 hours"
      ],
      answer: 1
    }
  },
  {
    issue: "Inflammation or swelling",
    title: "Inflammation: Real-Life Anti-Inflammatory Success",
    content: "Many people notice dramatic reductions in joint pain and swelling after switching to plant-based anti-inflammatory foods. Within weeks, energy and mobility improve, showing that even chronic inflammation can be calmed naturally. Each plant-powered meal and mindful habit contributes to a healthier, calmer body!"
    ,
    quiz: {
      question: "What did the participant experience after switching to an anti-inflammatory plant-based diet?",
      options: [
        "Increased inflammation",
        "No change",
        "Reduced joint pain and swelling",
        "Worse mobility"
      ],
      answer: 2
    }
  },

*/



// === FATIGUE ===
{
  issue: "Fatigue",
  title: {
    en: "Fatigue: Why You Feel Tired — The Hidden Causes",
    es: "Fatiga: Por qué te sientes cansado — Las causas ocultas",
    hu: "Fáradtság: Miért érzed magad kimerültnek — A rejtett okok"
  },
  content: {
    en: `
Feeling tired all the time? Fatigue can come from poor nutrition, stress, or lack of key nutrients. Diets high in meat, dairy, and processed foods often miss fiber, vitamins, and antioxidants, leaving your body low on real fuel. But good news — your energy can bounce back with smart changes!
    `,
    es: `
¿Te sientes cansado todo el tiempo? La fatiga puede deberse a una mala alimentación, al estrés o a la falta de nutrientes clave. Las dietas altas en carne, lácteos y alimentos procesados suelen carecer de fibra, vitaminas y antioxidantes, dejando a tu cuerpo con poca energía real. ¡Pero buenas noticias: tu energía puede recuperarse con cambios inteligentes!
    `,
    hu: `
Állandóan fáradtnak érzed magad? A fáradtság rossz táplálkozásból, stresszből vagy fontos tápanyagok hiányából adódhat. A húsban, tejtermékekben és feldolgozott ételekben gazdag étrend gyakran hiányos rostban, vitaminokban és antioxidánsokban, így a szervezet kevés valódi üzemanyagot kap. A jó hír: okos változtatásokkal visszanyerheted az energiádat!
    `
  },
  quiz: {
    question: {
      en: "What can cause persistent fatigue?",
      es: "¿Qué puede causar fatiga persistente?",
      hu: "Mi okozhat tartós fáradtságot?"
    },
    options: {
      en: [
        "Drinking water and resting",
        "Nutrient deficiencies and processed foods",
        "Eating fruits and vegetables",
        "Meditation and yoga"
      ],
      es: [
        "Beber agua y descansar",
        "Deficiencias de nutrientes y alimentos procesados",
        "Comer frutas y verduras",
        "Meditación y yoga"
      ],
      hu: [
        "Vízivás és pihenés",
        "Tápanyaghiány és feldolgozott ételek",
        "Gyümölcs- és zöldségfogyasztás",
        "Meditáció és jóga"
      ]
    },
    answer: 1
  }
},

 /*  
  {
    issue: "Fatigue",
    title: "Fatigue: Power Up with Plant Energy",
    content: "Plant-based foods deliver clean, steady energy! Complex carbs from whole grains fuel you gradually, while iron, magnesium, and B vitamins help your cells create energy. Every colorful meal gives your body the boost it’s been asking for.",
    quiz: {
      question: "Which nutrients support steady energy levels?",
      options: [
        "Sugar and saturated fat",
        "Salt and cholesterol",
        "Iron, magnesium, and B vitamins",
        "Caffeine and soda"
      ],
      answer: 2
    }
  },
  {
    issue: "Fatigue",
    title: "Fatigue: Nutrient-Dense Superstars",
    content: "Spinach, lentils, chickpeas, nuts, and seeds — these are your energy champions! They pack iron for oxygen flow, magnesium for muscle function, and B12 (from fortified foods or supplements) for brain power. Within 1–2 weeks of switching, people often feel lighter, sharper, and more alive.",
    quiz: {
      question: "Which plant foods help boost energy?",
      options: [
        "Lentils, spinach, and nuts",
        "White bread and cheese",
        "Bacon and eggs",
        "Pastries and soda"
      ],
      answer: 0
    }
  },
  {
    issue: "Fatigue",
    title: "Fatigue: Hydration — The Simplest Energy Trick",
    content: "Sometimes fatigue is just dehydration in disguise! Water helps deliver nutrients to your cells and keeps your mind alert. Eat juicy fruits, sip water throughout the day, and limit coffee or sugary drinks that sneakily dehydrate you.",
    quiz: {
      question: "How does staying hydrated help energy?",
      options: [
        "It increases dehydration",
        "It lowers focus",
        "It causes sugar crashes",
        "It supports nutrient transport and prevents tiredness"
      ],
      answer: 3
    }
  },
  {
    issue: "Fatigue",
    title: "Fatigue: Slow and Steady Carbs Win the Race",
    content: "Refined carbs give you a quick energy spike — then a crash! Whole grains, beans, and sweet potatoes release energy slowly and keep your blood sugar steady. Combine them with veggies and healthy fats for all-day balance.",
    quiz: {
      question: "Which foods help maintain steady energy?",
      options: [
        "Whole grains, legumes, and sweet potatoes",
        "Candy and pastries",
        "Processed meats",
        "White bread and butter"
      ],
      answer: 0
    }
  },
  {
    issue: "Fatigue",
    title: "Fatigue: The Caffeine Balance — Use It, Don’t Depend on It",
    content: "A coffee boost is fine, but too much caffeine can mess with sleep and energy rhythm. Try swapping an afternoon coffee for green tea or herbal infusions. Your body loves stable energy — not rollercoaster highs and lows!",
    quiz: {
      question: "What’s a healthy way to handle caffeine?",
      options: [
        "Drink as much coffee as possible",
        "Skip water completely",
        "Drink moderate amounts and avoid dependence",
        "Only rely on energy drinks"
      ],
      answer: 2
    }
  },
  {
    issue: "Fatigue",
    title: "Fatigue: Sleep and Recovery — Your Natural Recharge",
    content: "No diet can fix tiredness if you don’t rest! Sleep rebuilds your energy systems and balances hormones. Aim for 7–9 hours nightly and stick to a sleep routine — your body will thank you every morning.",
    quiz: {
      question: "Why is sleep vital for energy?",
      options: [
        "It increases fatigue",
        "It helps your body recover and balance hormones",
        "It burns all your nutrients",
        "It has no effect on energy"
      ],
      answer: 1
    }
  },
  {
    issue: "Fatigue",
    title: "Fatigue: Stress and Movement — The Energy Duo",
    content: "Stress burns through your energy reserves fast! Try walking, yoga, or meditation to recharge your mind. Regular movement boosts circulation and helps you feel awake without relying on sugar or caffeine.",
    quiz: {
      question: "What helps reduce fatigue from stress?",
      options: [
        "Movement, yoga, and relaxation",
        "More caffeine",
        "Skipping breakfast",
        "Less sleep"
      ],
      answer: 0
    }
  },
  {
    issue: "Fatigue",
    title: "Fatigue: Morning Routine Reset",
    content: "Start your day with a tall glass of water, a stretch, and a wholesome breakfast — like oats with fruits and nuts. You’ll stabilize your energy early and skip the mid-morning crash. Mornings can set the tone for your entire day!",
    quiz: {
      question: "What helps prevent morning fatigue?",
      options: [
        "Skipping breakfast",
        "Drinking only coffee",
        "Sleeping all morning",
        "A balanced breakfast, hydration, and light movement"
      ],
      answer: 3
    }
  },
  {
    issue: "Fatigue",
    title: "Fatigue: Real-Life Energy Transformation",
    content: "One participant swapped meat-heavy meals for beans, veggies, and grains, drank more water, and walked daily. Within 3 weeks, afternoon crashes disappeared, mood lifted, and energy soared! With small, consistent steps, you can feel it too — energized, clear, and ready for anything.",
    quiz: {
      question: "What was the main result of a plant-based lifestyle change?",
      options: [
        "Energy increased and mood improved",
        "Fatigue worsened",
        "No change occurred",
        "Energy decreased"
      ],
      answer: 0
    }
  },

*/

// === CANCER RISK ===
{
  issue: "Cancer risk",
  title: {
    en: "Cancer risk: What Causes Cancer — The Basics",
    es: "Riesgo de cáncer: Qué causa el cáncer — Lo básico",
    hu: "Rák kockázata: Mi okozza a rákot — Alapok"
  },
  content: {
    en: `
Cancer develops when cells grow uncontrollably and stop following the body’s normal rules.  
While genetics play a part, most cancer risk comes from lifestyle and environment — what we eat, breathe, and do every day.  
The good news? We have power! By making small, smart changes, we can lower our risk and strengthen our body’s natural defenses.
    `,
    es: `
El cáncer se desarrolla cuando las células crecen sin control y dejan de seguir las reglas normales del cuerpo.  
Aunque la genética influye, la mayor parte del riesgo de cáncer proviene del estilo de vida y el entorno: lo que comemos, respiramos y hacemos cada día.  
¿La buena noticia? ¡Tenemos poder! Con pequeños cambios inteligentes, podemos reducir nuestro riesgo y fortalecer las defensas naturales de nuestro cuerpo.
    `,
    hu: `
A rák akkor alakul ki, amikor a sejtek ellenőrizetlenül nőnek és nem követik a szervezet normális szabályait.  
Bár a genetika szerepet játszik, a rák kockázatának nagy része az életmódtól és a környezettől függ — attól, mit eszünk, lélegzünk és teszünk nap mint nap.  
A jó hír? Van hatalmunk! Apró, okos változtatásokkal csökkenthetjük a kockázatot és erősíthetjük a testünk természetes védelmi rendszerét.
    `
  },
  quiz: {
    question: {
      en: "What mainly influences cancer risk besides genetics?",
      es: "¿Qué influye principalmente en el riesgo de cáncer además de la genética?",
      hu: "Mi befolyásolja leginkább a rák kockázatát a genetika mellett?"
    },
    options: {
      en: ["Lifestyle and environment", "Random chance only", "Age alone", "None of the above"],
      es: ["Estilo de vida y entorno", "Solo el azar", "Solo la edad", "Ninguna de las anteriores"],
      hu: ["Életmód és környezet", "Csak a véletlen", "Csak az életkor", "Egyik sem"]
    },
    answer: 0
  }
},

 /*  

{
  issue: "Cancer risk",
  title: "Cancer risk: The Role of Diet — Fuel or Fire?",
  content: `
Our diet can either protect us or raise our risk.  
Eating lots of red and processed meat, dairy, fried foods, and sugar adds stress and inflammation to the body.  
Meanwhile, plant-based foods rich in fiber, vitamins, and antioxidants act like a built-in cleaning and repair system — protecting cells and lowering cancer risk.
  `,
  quiz: {
    question: "Which foods increase cancer risk?",
    options: [
      "Red and processed meats, fried foods, and sugar",
      "Whole grains and vegetables",
      "Berries and legumes",
      "Nuts and seeds"
    ],
    answer: 0
  }
},
{
  issue: "Cancer risk",
  title: "Cancer risk: Antioxidants — Your Cell’s Superheroes",
  content: `
Antioxidants defend your body from free radicals — tiny unstable molecules that damage DNA.  
Foods like berries, leafy greens, broccoli, and bell peppers are full of these protective compounds.  
Adding colorful veggies and fruits to every meal keeps your cells safe and your energy up — think of it as daily armor for your body.
  `,
  quiz: {
    question: "What do antioxidants do?",
    options: [
      "Increase inflammation",
      "Protect cells from DNA damage",
      "Raise blood sugar levels",
      "Cause fatigue"
    ],
    answer: 1
  }
},
{
  issue: "Cancer risk",
  title: "Cancer risk: Fiber — Nature’s Detox Power",
  content: `
Fiber keeps your digestion smooth and helps remove toxins from your body.  
It also feeds friendly gut bacteria that fight inflammation and protect the colon.  
Whole grains, beans, fruits, and veggies are your best allies — and the more variety, the better your gut and immune system work!
  `,
  quiz: {
    question: "How does fiber reduce cancer risk?",
    options: [
      "It slows down digestion completely",
      "It increases blood sugar",
      "It removes toxins and supports gut bacteria",
      "It has no effect"
    ],
    answer: 2
  }
},
{
  issue: "Cancer risk",
  title: "Cancer risk: The Meat Connection — Why Cutting Back Helps",
  content: `
Processed and red meats contain compounds that can damage DNA when cooked or preserved.  
Even small swaps — like trading sausages for lentils or tofu — make a difference.  
Think of every plant-based meal as a little act of prevention (and kindness to your body).
  `,
  quiz: {
    question: "Why should we limit red and processed meat?",
    options: [
      "It lacks flavor",
      "It damages DNA and increases cancer risk",
      "It contains antioxidants",
      "It improves gut bacteria"
    ],
    answer: 1
  }
},
{
  issue: "Cancer risk",
  title: "Cancer risk: Sugar, Alcohol, and Inflammation",
  content: `
Excess sugar and alcohol fuel inflammation and can raise hormone levels that encourage cancer cell growth.  
Drinking water, herbal teas, and eating fruit for sweetness are easy swaps that make your body happier.  
Balance is key — your body thrives when it’s fueled with natural, nourishing foods.
  `,
  quiz: {
    question: "What effect do excess sugar and alcohol have on cancer risk?",
    options: [
      "They lower inflammation",
      "They have no impact",
      "They provide antioxidants",
      "They fuel inflammation and cell growth"
    ],
    answer: 3
  }
},
{
  issue: "Cancer risk",
  title: "Cancer risk: The Power of Plants — Everyday Protection",
  content: `
Plant foods aren’t just nutritious — they’re powerful protectors!  
Phytonutrients in vegetables, fruits, nuts, and legumes help neutralize harmful compounds before they can cause trouble.  
Fill your plate with color — the more variety, the more your body thanks you.
  `,
  quiz: {
    question: "What do phytonutrients from plants do?",
    options: [
      "Cause DNA mutations",
      "Protect cells from damage and disease",
      "Add empty calories",
      "Reduce fiber absorption"
    ],
    answer: 1
  }
},
{
  issue: "Cancer risk",
  title: "Cancer risk: Movement, Sleep, and Stress — The Hidden Trio",
  content: `
Healthy habits go beyond food!  
Regular exercise, enough sleep, and stress reduction boost your immune system and lower inflammation.  
Just a brisk walk, deep breathing, or a good night’s sleep can make your body more resilient against chronic diseases like cancer.
  `,
  quiz: {
    question: "How do lifestyle habits like sleep and exercise affect cancer risk?",
    options: [
      "They strengthen the immune system and reduce inflammation",
      "They weaken the immune system",
      "They have no connection",
      "They increase DNA damage"
    ],
    answer: 0
  }
},
{
  issue: "Cancer risk",
  title: "Cancer risk: Real-Life Stories — Change That Inspires",
  content: `
People who adopt more plant-based meals often see big benefits: better energy, improved digestion, and lower inflammation.  
One person swapped 3 meat-heavy dinners for veggie bowls weekly — within months, their energy soared and inflammation dropped.  
Small steps lead to real transformation — and your future self will thank you for it!
  `,
  quiz: {
    question: "What’s the key lesson from real-life success stories?",
    options: [
      "Only strict diets work",
      "Small, consistent plant-based changes reduce cancer risk",
      "Cancer risk never changes",
      "Supplements are the only answer"
    ],
    answer: 1
  }
},
{
  issue: "Cancer risk",
  title: "Cancer risk: You’re in Control — Protect Your Future",
  content: `
You don’t need perfection — just progress.  
Every time you choose plants over processed food, your body gets stronger and your cells thank you.  
Prevention is powerful, and your daily choices truly matter. Let’s make each meal a step toward long, vibrant health!
  `,
  quiz: {
    question: "What’s the most powerful step in lowering cancer risk?",
    options: [
      "Relying on luck",
      "Avoiding all food groups",
      "Making daily healthy, plant-based choices",
      "Only using supplements"
    ],
    answer: 2
  }
}
  
*/

]
};

// =======================
// INGREDIENTS
// =======================
const ingredientInfo = {
  tofu: {
    name: {
      en: "Tofu",
      es: "Tofu",
      hu: "Tofu"
    },
    description: {
      en: "Tofu is perfect to replace eggs in many dishes. Mild in flavor, it absorbs spices well, making it very versatile.",
      es: "El tofu es perfecto para sustituir los huevos en muchos platos. Su sabor suave absorbe bien las especias.",
      hu: "A tofu kiváló tojáshelyettesítő sok ételben. Semleges ízű, jól felszívja a fűszereket."
    },
    nutrition: {
      en: `
        <table>
          <tr><th>Nutrient</th><th>Tofu</th><th>Egg</th></tr>
          <tr><td>Calories</td><td>76 kcal / 100g</td><td>155 kcal / 100g</td></tr>
          <tr><td>Protein</td><td>8 g</td><td>13 g</td></tr>
          <tr><td>Cholesterol</td><td>0 mg</td><td>373 mg</td></tr>
          <tr><td>Calcium</td><td>350 mg</td><td>56 mg</td></tr>
          <tr><td>Fat</td><td>4 g</td><td>11 g</td></tr>
        </table>
      `,
      es: `
        <table>
          <tr><th>Nutriente</th><th>Tofu</th><th>Huevo</th></tr>
          <tr><td>Calorías</td><td>76 kcal / 100g</td><td>155 kcal / 100g</td></tr>
          <tr><td>Proteína</td><td>8 g</td><td>13 g</td></tr>
          <tr><td>Colesterol</td><td>0 mg</td><td>373 mg</td></tr>
          <tr><td>Calcio</td><td>350 mg</td><td>56 mg</td></tr>
          <tr><td>Grasa</td><td>4 g</td><td>11 g</td></tr>
        </table>
      `,
      hu: `
        <table>
          <tr><th>Tápanyag</th><th>Tofu</th><th>Tojás</th></tr>
          <tr><td>Kalória</td><td>76 kcal / 100g</td><td>155 kcal / 100g</td></tr>
          <tr><td>Fehérje</td><td>8 g</td><td>13 g</td></tr>
          <tr><td>Koleszterin</td><td>0 mg</td><td>373 mg</td></tr>
          <tr><td>Kalcium</td><td>350 mg</td><td>56 mg</td></tr>
          <tr><td>Zsír</td><td>4 g</td><td>11 g</td></tr>
        </table>
      `
    }
  },

  seitan: {
    name: {
      en: "Seitan",
      es: "Seitán",
      hu: "Szejtán"
    },
    description: {
      en: "Seitan is a chewy, meat-like wheat protein perfect to replace chicken or beef in recipes.",
      es: "El seitán es una proteína de trigo con textura carnosa, ideal para sustituir pollo o ternera.",
      hu: "A szejtán búzafehérjéből készült, húsos állagú alapanyag, kiváló húshelyettesítő."
    },
    nutrition: {
      en: `
        <table>
          <tr><th>Nutrient</th><th>Seitan</th><th>Chicken Breast</th></tr>
          <tr><td>Calories</td><td>120 kcal</td><td>165 kcal</td></tr>
          <tr><td>Protein</td><td>25 g</td><td>31 g</td></tr>
          <tr><td>Cholesterol</td><td>0 mg</td><td>85 mg</td></tr>
          <tr><td>Iron</td><td>4 mg</td><td>1 mg</td></tr>
        </table>
      `,
      es: `
        <table>
          <tr><th>Nutriente</th><th>Seitán</th><th>Pechuga de pollo</th></tr>
          <tr><td>Calorías</td><td>120 kcal</td><td>165 kcal</td></tr>
          <tr><td>Proteína</td><td>25 g</td><td>31 g</td></tr>
          <tr><td>Colesterol</td><td>0 mg</td><td>85 mg</td></tr>
          <tr><td>Hierro</td><td>4 mg</td><td>1 mg</td></tr>
        </table>
      `,
      hu: `
        <table>
          <tr><th>Tápanyag</th><th>Szejtán</th><th>Csirkemell</th></tr>
          <tr><td>Kalória</td><td>120 kcal</td><td>165 kcal</td></tr>
          <tr><td>Fehérje</td><td>25 g</td><td>31 g</td></tr>
          <tr><td>Koleszterin</td><td>0 mg</td><td>85 mg</td></tr>
          <tr><td>Vas</td><td>4 mg</td><td>1 mg</td></tr>
        </table>
      `
    }
  },
  lentils: {
    name: { en: "Lentils", es: "Lentejas", hu: "Lencse" },
    description: {
      en: "Lentils are a protein-packed legume, perfect to replace ground beef in stews, chili, and other hearty dishes.",
      es: "Las lentejas son una legumbre rica en proteínas, perfectas para sustituir carne picada en guisos y chili.",
      hu: "A lencse fehérjében gazdag hüvelyes, kiváló darált hús helyettesítésére pörköltekben, chili-ben és más ételekben."
    },
    nutrition: {
      en: `
        <table>
          <tr><th>Nutrient</th><th>Lentils (dry)</th><th>Ground Beef</th></tr>
          <tr><td>Calories</td><td>353 kcal / 100g dry</td><td>250 kcal / 100g</td></tr>
          <tr><td>Protein</td><td>25 g</td><td>26 g</td></tr>
          <tr><td>Cholesterol</td><td>0 mg</td><td>89 mg</td></tr>
          <tr><td>Fiber</td><td>11 g</td><td>0 g</td></tr>
          <tr><td>Iron</td><td>7.5 mg</td><td>2.6 mg</td></tr>
        </table>
        <p><em>Note: Protein and calories reduce after cooking due to water absorption, but lentils remain a hearty plant-based option.</em></p>
      `,
      es: `
        <table>
          <tr><th>Nutriente</th><th>Lentejas (seco)</th><th>Carne molida</th></tr>
          <tr><td>Calorías</td><td>353 kcal / 100g seco</td><td>250 kcal / 100g</td></tr>
          <tr><td>Proteína</td><td>25 g</td><td>26 g</td></tr>
          <tr><td>Colesterol</td><td>0 mg</td><td>89 mg</td></tr>
          <tr><td>Fibra</td><td>11 g</td><td>0 g</td></tr>
          <tr><td>Hierro</td><td>7.5 mg</td><td>2.6 mg</td></tr>
        </table>
        <p><em>Nota: La proteína y las calorías disminuyen tras cocinar, pero las lentejas siguen siendo una opción abundante basada en plantas.</em></p>
      `,
      hu: `
        <table>
          <tr><th>Tápanyag</th><th>Lencse (száraz)</th><th>Darált marhahús</th></tr>
          <tr><td>Kalória</td><td>353 kcal / 100g száraz</td><td>250 kcal / 100g</td></tr>
          <tr><td>Fehérje</td><td>25 g</td><td>26 g</td></tr>
          <tr><td>Koleszterin</td><td>0 mg</td><td>89 mg</td></tr>
          <tr><td>Rost</td><td>11 g</td><td>0 g</td></tr>
          <tr><td>Vas</td><td>7.5 mg</td><td>2.6 mg</td></tr>
        </table>
        <p><em>Megjegyzés: A főzés során a fehérje és kalória csökken a vízfelvétel miatt, de a lencse továbbra is tápláló növényi alapú lehetőség.</em></p>
      `
    }
  },

  beans: {
    name: { en: "Beans", es: "Frijoles", hu: "Bab" },
    description: {
      en: "Beans are incredibly high in protein, perfect to replace beef in meals like chili or stir-fries.",
      es: "Los frijoles son muy ricos en proteínas, perfectos para reemplazar carne en chili o salteados.",
      hu: "A bab rendkívül fehérjedús, kiváló marhahús helyettesítésére chili-ben vagy wokételekben."
    },
    nutrition: {
      en: `
        <table>
          <tr><th>Nutrient</th><th>Beans</th><th>Beef</th></tr>
          <tr><td>Calories</td><td>446 kcal / 100g dry</td><td>250 kcal / 100g</td></tr>
          <tr><td>Protein</td><td>36 g</td><td>26 g</td></tr>
          <tr><td>Cholesterol</td><td>0 mg</td><td>89 mg</td></tr>
          <tr><td>Fiber</td><td>9 g</td><td>0 g</td></tr>
          <tr><td>Iron</td><td>15.7 mg</td><td>2.6 mg</td></tr>
        </table>
      `,
      es: `
        <table>
          <tr><th>Nutriente</th><th>Frijoles</th><th>Carne</th></tr>
          <tr><td>Calorías</td><td>446 kcal / 100g seco</td><td>250 kcal / 100g</td></tr>
          <tr><td>Proteína</td><td>36 g</td><td>26 g</td></tr>
          <tr><td>Colesterol</td><td>0 mg</td><td>89 mg</td></tr>
          <tr><td>Fibra</td><td>9 g</td><td>0 g</td></tr>
          <tr><td>Hierro</td><td>15.7 mg</td><td>2.6 mg</td></tr>
        </table>
      `,
      hu: `
        <table>
          <tr><th>Tápanyag</th><th>Bab</th><th>Marhahús</th></tr>
          <tr><td>Kalória</td><td>446 kcal / 100g száraz</td><td>250 kcal / 100g</td></tr>
          <tr><td>Fehérje</td><td>36 g</td><td>26 g</td></tr>
          <tr><td>Koleszterin</td><td>0 mg</td><td>89 mg</td></tr>
          <tr><td>Rost</td><td>9 g</td><td>0 g</td></tr>
          <tr><td>Vas</td><td>15.7 mg</td><td>2.6 mg</td></tr>
        </table>
      `
    }
  },

  tempeh: {
    name: { en: "Tempeh", es: "Tempeh", hu: "Tempeh" },
    description: {
      en: "Tempeh is fermented soy, perfect to replace bacon or other processed meats with extra gut benefits.",
      es: "El tempeh es soja fermentada, ideal para reemplazar tocino u otras carnes procesadas, con beneficios para el intestino.",
      hu: "A tempeh fermentált szója, tökéletes szalonna vagy feldolgozott húsok helyettesítésére, extra bélflóra előnyökkel."
    },
    nutrition: {
      en: `
        <table>
          <tr><th>Nutrient</th><th>Tempeh (per 200 kcal)</th><th>Bacon (per 200 kcal)</th></tr>
          <tr><td>Protein</td><td>19 g</td><td>13.6 g</td></tr>
          <tr><td>Cholesterol</td><td>0 mg</td><td>33 mg</td></tr>
          <tr><td>Fat</td><td>11 g</td><td>15.5 g</td></tr>
          <tr><td>Fiber</td><td>1.5 g</td><td>0 g</td></tr>
        </table>
        <p><em>Comparison based on equal caloric intake (200 kcal) for a fairer nutritional perspective.</em></p>
      `,
      es: `
        <table>
          <tr><th>Nutriente</th><th>Tempeh (por 200 kcal)</th><th>Tocino (por 200 kcal)</th></tr>
          <tr><td>Proteína</td><td>19 g</td><td>13.6 g</td></tr>
          <tr><td>Colesterol</td><td>0 mg</td><td>33 mg</td></tr>
          <tr><td>Grasa</td><td>11 g</td><td>15.5 g</td></tr>
          <tr><td>Fibra</td><td>1.5 g</td><td>0 g</td></tr>
        </table>
        <p><em>Comparación basada en igual aporte calórico (200 kcal) para una perspectiva más justa.</em></p>
      `,
      hu: `
        <table>
          <tr><th>Tápanyag</th><th>Tempeh (200 kcal)</th><th>Szalonna (200 kcal)</th></tr>
          <tr><td>Fehérje</td><td>19 g</td><td>13.6 g</td></tr>
          <tr><td>Koleszterin</td><td>0 mg</td><td>33 mg</td></tr>
          <tr><td>Zsír</td><td>11 g</td><td>15.5 g</td></tr>
          <tr><td>Rost</td><td>1.5 g</td><td>0 g</td></tr>
        </table>
        <p><em>Összehasonlítás azonos kalóriabevitel (200 kcal) alapján a fairabb nézőpontért.</em></p>
      `
    }
  },
  chickpeas: {
    name: { en: "Chickpeas", es: "Garbanzos", hu: "Csicseriborsó" },
    description: {
      en: "Chickpeas are ideal for replacing chicken or tuna in salads and stews, with plant-based protein and fiber.",
      es: "Los garbanzos son ideales para reemplazar pollo o atún en ensaladas y guisos, aportando proteína y fibra vegetal.",
      hu: "A csicseriborsó tökéletes csirke vagy tonhal helyettesítésére salátákban és pörköltekben, növényi fehérjével és rosttal."
    },
    nutrition: {
      en: `
        <table>
          <tr><th>Nutrient</th><th>Chickpeas</th><th>Chicken</th></tr>
          <tr><td>Calories</td><td>164 kcal / 100g cooked</td><td>165 kcal / 100g</td></tr>
          <tr><td>Protein</td><td>7 g</td><td>31 g</td></tr>
          <tr><td>Cholesterol</td><td>0 mg</td><td>85 mg</td></tr>
          <tr><td>Fiber</td><td>7.6 g</td><td>0 g</td></tr>
          <tr><td>Iron</td><td>2.9 mg</td><td>1 mg</td></tr>
        </table>
      `,
      es: `
        <table>
          <tr><th>Nutriente</th><th>Garbanzos</th><th>Pollo</th></tr>
          <tr><td>Calorías</td><td>164 kcal / 100g cocido</td><td>165 kcal / 100g</td></tr>
          <tr><td>Proteína</td><td>7 g</td><td>31 g</td></tr>
          <tr><td>Colesterol</td><td>0 mg</td><td>85 mg</td></tr>
          <tr><td>Fibra</td><td>7.6 g</td><td>0 g</td></tr>
          <tr><td>Hierro</td><td>2.9 mg</td><td>1 mg</td></tr>
        </table>
      `,
      hu: `
        <table>
          <tr><th>Tápanyag</th><th>Csicseriborsó</th><th>Csirke</th></tr>
          <tr><td>Kalória</td><td>164 kcal / 100g főtt</td><td>165 kcal / 100g</td></tr>
          <tr><td>Fehérje</td><td>7 g</td><td>31 g</td></tr>
          <tr><td>Koleszterin</td><td>0 mg</td><td>85 mg</td></tr>
          <tr><td>Rost</td><td>7.6 g</td><td>0 g</td></tr>
          <tr><td>Vas</td><td>2.9 mg</td><td>1 mg</td></tr>
        </table>
      `
    }
  },

  peaProtein: {
    name: { en: "Pea Protein", es: "Proteína de guisante", hu: "Borsófehérje" },
    description: {
      en: "Pea protein is a great alternative to whey or eggs for shakes and recipes, complete in essential amino acids.",
      es: "La proteína de guisante es una gran alternativa al suero o los huevos en batidos y recetas, completa en aminoácidos esenciales.",
      hu: "A borsófehérje kiváló alternatíva a tejsavó vagy tojás helyett turmixokban és receptekben, teljes esszenciális aminosavakban."
    },
    nutrition: {
      en: `
        <table>
          <tr><th>Nutrient</th><th>Pea Protein (30g scoop)</th><th>Egg (1 large)</th></tr>
          <tr><td>Calories</td><td>120 kcal</td><td>70 kcal</td></tr>
          <tr><td>Protein</td><td>20–25 g</td><td>6 g</td></tr>
          <tr><td>Cholesterol</td><td>0 mg</td><td>186 mg</td></tr>
          <tr><td>Calcium</td><td>50 mg</td><td>28 mg</td></tr>
          <tr><td>Fat</td><td>1 g</td><td>5 g</td></tr>
        </table>
      `,
      es: `
        <table>
          <tr><th>Nutriente</th><th>Proteína de guisante (30g)</th><th>Huevo (1 grande)</th></tr>
          <tr><td>Calorías</td><td>120 kcal</td><td>70 kcal</td></tr>
          <tr><td>Proteína</td><td>20–25 g</td><td>6 g</td></tr>
          <tr><td>Colesterol</td><td>0 mg</td><td>186 mg</td></tr>
          <tr><td>Calcio</td><td>50 mg</td><td>28 mg</td></tr>
          <tr><td>Grasa</td><td>1 g</td><td>5 g</td></tr>
        </table>
      `,
      hu: `
        <table>
          <tr><th>Tápanyag</th><th>Borsófehérje (30g)</th><th>Tojás (1 db)</th></tr>
          <tr><td>Kalória</td><td>120 kcal</td><td>70 kcal</td></tr>
          <tr><td>Fehérje</td><td>20–25 g</td><td>6 g</td></tr>
          <tr><td>Koleszterin</td><td>0 mg</td><td>186 mg</td></tr>
          <tr><td>Kalcium</td><td>50 mg</td><td>28 mg</td></tr>
          <tr><td>Zsír</td><td>1 g</td><td>5 g</td></tr>
        </table>
      `
    }
  },
  soyMilk: {
    name: { en: "Soy Milk", es: "Leche de soja", hu: "Szójatej" },
    description: {
      en: "Soy milk is a perfect dairy alternative, ideal to replace cow's milk in drinks and cereals.",
      es: "La leche de soja es una alternativa perfecta a la leche, ideal para reemplazar leche de vaca en bebidas y cereales.",
      hu: "A szójatej tökéletes tejhelyettesítő, ideális italokban és gabonapelyhekben a tehéntej helyett."
    },
    nutrition: {
      en: `
        <table>
          <tr><th>Nutrient</th><th>Soy Milk</th><th>Cow Milk</th></tr>
          <tr><td>Calories</td><td>33 kcal / 100ml</td><td>64 kcal / 100ml</td></tr>
          <tr><td>Protein</td><td>3 g</td><td>3.5 g</td></tr>
          <tr><td>Cholesterol</td><td>0 mg</td><td>14 mg</td></tr>
          <tr><td>Calcium</td><td>120 mg</td><td>120 mg</td></tr>
          <tr><td>Fat</td><td>1.5 g</td><td>3.6 g</td></tr>
        </table>
      `,
      es: `
        <table>
          <tr><th>Nutriente</th><th>Leche de soja</th><th>Leche de vaca</th></tr>
          <tr><td>Calorías</td><td>33 kcal / 100ml</td><td>64 kcal / 100ml</td></tr>
          <tr><td>Proteína</td><td>3 g</td><td>3.5 g</td></tr>
          <tr><td>Colesterol</td><td>0 mg</td><td>14 mg</td></tr>
          <tr><td>Calcio</td><td>120 mg</td><td>120 mg</td></tr>
          <tr><td>Grasa</td><td>1.5 g</td><td>3.6 g</td></tr>
        </table>
      `,
      hu: `
        <table>
          <tr><th>Tápanyag</th><th>Szójatej</th><th>Tehéntej</th></tr>
          <tr><td>Kalória</td><td>33 kcal / 100ml</td><td>64 kcal / 100ml</td></tr>
          <tr><td>Fehérje</td><td>3 g</td><td>3.5 g</td></tr>
          <tr><td>Koleszterin</td><td>0 mg</td><td>14 mg</td></tr>
          <tr><td>Kalcium</td><td>120 mg</td><td>120 mg</td></tr>
          <tr><td>Zsír</td><td>1.5 g</td><td>3.6 g</td></tr>
        </table>
      `
    }
  },

  texturizedSoy: {
    name: { en: "Texturized Soy", es: "Soja texturizada", hu: "Texturált szója" },
    description: {
      en: "TVP is a high-protein meat replacement, perfect for ground beef in burgers, tacos, or chili.",
      es: "La soja texturizada es un reemplazo de carne rico en proteínas, ideal para carne molida en hamburguesas, tacos o chili.",
      hu: "A texturált szója magas fehérjetartalmú húshelyettesítő, kiváló darált hús helyettesítésére hamburgerben, tacóban vagy chili-ben."
    },
    nutrition: {
      en: `
        <table>
          <tr><th>Nutrient</th><th>Texturized Soy</th><th>Beef</th></tr>
          <tr><td>Calories</td><td>200 kcal / 100g dry</td><td>250 kcal / 100g</td></tr>
          <tr><td>Protein</td><td>50 g</td><td>26 g</td></tr>
          <tr><td>Cholesterol</td><td>0 mg</td><td>89 mg</td></tr>
          <tr><td>Iron</td><td>9 mg</td><td>2.6 mg</td></tr>
          <tr><td>Fat</td><td>1 g</td><td>15 g</td></tr>
        </table>
      `,
      es: `
        <table>
          <tr><th>Nutriente</th><th>Soja texturizada</th><th>Carne</th></tr>
          <tr><td>Calorías</td><td>200 kcal / 100g seco</td><td>250 kcal / 100g</td></tr>
          <tr><td>Proteína</td><td>50 g</td><td>26 g</td></tr>
          <tr><td>Colesterol</td><td>0 mg</td><td>89 mg</td></tr>
          <tr><td>Hierro</td><td>9 mg</td><td>2.6 mg</td></tr>
          <tr><td>Grasa</td><td>1 g</td><td>15 g</td></tr>
        </table>
      `,
      hu: `
        <table>
          <tr><th>Tápanyag</th><th>Texturált szója</th><th>Marhahús</th></tr>
          <tr><td>Kalória</td><td>200 kcal / 100g száraz</td><td>250 kcal / 100g</td></tr>
          <tr><td>Fehérje</td><td>50 g</td><td>26 g</td></tr>
          <tr><td>Koleszterin</td><td>0 mg</td><td>89 mg</td></tr>
          <tr><td>Vas</td><td>9 mg</td><td>2.6 mg</td></tr>
          <tr><td>Zsír</td><td>1 g</td><td>15 g</td></tr>
        </table>
      `
    }
  },

  broccoli: {
    name: { en: "Broccoli", es: "Brócoli", hu: "Brokkoli" },
    description: {
      en: "Broccoli is a super nutrient-rich vegetable, packed with vitamins and minerals, perfect to add to any meal.",
      es: "El brócoli es un vegetal muy rico en nutrientes, lleno de vitaminas y minerales, perfecto para cualquier plato.",
      hu: "A brokkoli tápanyagokban gazdag zöldség, vitaminokkal és ásványi anyagokkal, tökéletes minden ételhez."
    },
    nutrition: {
      en: `
        <table>
          <tr><th>Nutrient</th><th>Broccoli (~150 kcal)</th><th>Beef (~150 kcal)</th></tr>
          <tr><td>Protein</td><td>12 g</td><td>13 g</td></tr>
          <tr><td>Fiber</td><td>20 g</td><td>0 g</td></tr>
          <tr><td>Vitamin C</td><td>810 mg</td><td>0 mg</td></tr>
          <tr><td>Calcium</td><td>150 mg</td><td>18 mg</td></tr>
          <tr><td>Iron</td><td>5 mg</td><td>6 mg</td></tr>
        </table>
      `,
      es: `
        <table>
          <tr><th>Nutriente</th><th>Brócoli (~150 kcal)</th><th>Carne (~150 kcal)</th></tr>
          <tr><td>Proteína</td><td>12 g</td><td>13 g</td></tr>
          <tr><td>Fibra</td><td>20 g</td><td>0 g</td></tr>
          <tr><td>Vitamina C</td><td>810 mg</td><td>0 mg</td></tr>
          <tr><td>Calcio</td><td>150 mg</td><td>18 mg</td></tr>
          <tr><td>Hierro</td><td>5 mg</td><td>6 mg</td></tr>
        </table>
      `,
      hu: `
        <table>
          <tr><th>Tápanyag</th><th>Brokkoli (~150 kcal)</th><th>Marhahús (~150 kcal)</th></tr>
          <tr><td>Fehérje</td><td>12 g</td><td>13 g</td></tr>
          <tr><td>Rost</td><td>20 g</td><td>0 g</td></tr>
          <tr><td>C-vitamin</td><td>810 mg</td><td>0 mg</td></tr>
          <tr><td>Kalcium</td><td>150 mg</td><td>18 mg</td></tr>
          <tr><td>Vas</td><td>5 mg</td><td>6 mg</td></tr>
        </table>
      `
    }
  }
};
// ====== DailyCheckIn ======
// ====== DailyCheckIn ======
// ====== DailyCheckIn ======
// ====== DailyCheckIn ======
// ====== DailyCheckIn ======

// 1️⃣ Define lessons for each survey answer
export const DailyCheckInPool = {
  goals: {
    "Protecting animals & animal welfare": [
      {
        lesson: `
        Humans dominate 36% of all mammals on Earth. This includes livestock, pets, and urban-adapted species. 
        The remaining mammals are mostly farm animals (60%) and only 4% are truly wild. This shows how little 
        space is left for wildlife and how human activity has reshaped mammal populations globally.
        `,
        quiz: {
          question: "What percentage of mammals are truly wild?",
          options: ["4%", "36%", "60%"],
          answer: "4%"
        }
      },
      {
  lesson: `About 25% of mammal species are currently threatened with extinction, according to the IUCN. 
  Species like primates, big cats, and elephants are among the most iconic and widely loved, while less charismatic species, 
  like small rodents or bats, are often overlooked despite being equally important for ecosystems.`,
  quiz: {
    question: "What percentage of mammal species are currently threatened with extinction?",
    options: ["25%", "10%", "50%"],
    answer: "25%"
  }
},
      {
  lesson: `Chickens today grow much faster and larger than their wild ancestors due to selective breeding and genetic modification.
   While wild chickens laid about 12 eggs per year, modern farmed chickens can lay over 240 eggs annually. 
   This rapid growth impacts their health, mobility, and quality of life.`,
  quiz: {
    question: "How many eggs did wild chickens lay annually?",
    options: ["12", "240", "100"],
    answer: "12"
  }
},
{
  lesson: `Around 70% of global antibiotic supply is used in livestock farming, not in humans. Antibiotics are given to animals to 
  promote growth and prevent disease in crowded conditions, which contributes to antibiotic resistance—a major public health concern.`,
  quiz: {
    question: "What percentage of antibiotics is used in livestock farming?",
    options: ["70%", "30%", "50%"],
    answer: "70%"
  }
},
{
  lesson: `Many farmed animals are kept in extremely small cages, often unable to turn around or move freely. 
  This raises ethical questions: is severe confinement worse than the act of slaughter itself?`,
  quiz: {
    question: "What ethical issue arises from very small cages?",
    options: ["Severe confinement limits movement", "Animals become smarter", "Cages improve health"],
    answer: "Severe confinement limits movement"
  }
},
{
  lesson: `Companies that provide better conditions for animals cannot compete with conventional industrial farms due to higher costs. 
  This raises a philosophical question about the value of life and whether profit should outweigh the well-being of sentient beings.`,
  quiz: {
    question: "Why can't companies with better animal conditions compete?",
    options: ["Higher costs than industrial farms", "They don't care about animals", "They produce less milk"],
    answer: "Higher costs than industrial farms"
  }
},
{
  lesson: `Debeaking, the removal of parts of chickens' beaks, is common in industrial farms to prevent pecking injuries in crowded conditions.
   This procedure causes both physical pain and behavioral stress for the birds.`,
  quiz: {
    question: "Why is debeaking performed on farmed chickens?",
    options: ["To prevent pecking injuries", "To make them grow faster", "For decoration"],
    answer: "To prevent pecking injuries"
  }
},
{
  lesson: `The dairy industry often grinds up male chicks alive and repeatedly artificially inseminates cows, separating mothers from their 
  calves. These practices cause significant suffering and raise questions about the ethics of animal exploitation.`,
  quiz: {
    question: "What happens to male chicks in the dairy industry?",
    options: ["They are often ground alive", "They live freely on farms", "They are given special care"],
    answer: "They are often ground alive"
  }
},
      {
        lesson: `
        Chickens originally laid about 12 eggs per year in natural conditions. Through selective breeding and 
        genetic modification, modern hens can lay over 240 eggs annually. This demonstrates how human intervention 
        can drastically alter an animal’s biology for production purposes.
        `,
        quiz: {
          question: "How many eggs did chickens originally lay per year?",
          options: ["12", "240", "100"],
          answer: "12"
        }
      },
      {
        lesson: `
        Many pigs and cows are highly intelligent and social. Pigs can solve puzzles, have excellent long-term 
        memory, and form strong bonds with other pigs. Cows have complex social structures and can remember faces 
        of other cows and humans. Recognizing these traits changes how we think about their treatment.
        `,
        quiz: {
          question: "Which statement is true about pigs?",
          options: [
            "They are intelligent, social, and can solve puzzles",
            "They only eat and sleep",
            "They do not interact with other pigs"
          ],
          answer: "They are intelligent, social, and can solve puzzles"
        }
      },
      {
        lesson: `
        Farmed animals experience emotions like fear, joy, and grief. For example, cows can show stress when 
        separated from their herd, and pigs can enjoy playing with toys. Understanding this helps us see that 
        suffering in factory farms is not abstract—it’s experienced every day by sentient beings.
        `,
        quiz: {
          question: "Which emotions can farmed animals experience?",
          options: ["Fear, joy, and grief", "Only fear", "No emotions"],
          answer: "Fear, joy, and grief"
        }
      },
      {
        lesson: `
        Factory farming often restricts natural behaviors. Chickens may never leave cages, pigs cannot root 
        or explore, and cows may never graze freely. These constraints are linked to physical and psychological suffering, 
        highlighting why reducing demand for animal products has a direct impact on welfare.
        `,
        quiz: {
          question: "Why do factory-farmed animals suffer?",
          options: [
            "They cannot express natural behaviors",
            "They are always outdoors",
            "They have unlimited space"
          ],
          answer: "They cannot express natural behaviors"
        }
      },
      {
        lesson: `
        Adopting animals from shelters reduces overpopulation and prevents suffering. Every pet adopted frees 
        resources for another animal and avoids the cycle of breeding for profit. Adoption is a direct, measurable 
        way to improve animal welfare in your community.
        `,
        quiz: {
          question: "What is a major benefit of adopting animals from shelters?",
          options: [
            "Reduces overpopulation and prevents suffering",
            "Increases the number of homeless pets",
            "Supports pet factories"
          ],
          answer: "Reduces overpopulation and prevents suffering"
        }
      },
      {
        lesson: `
        Volunteering at animal sanctuaries provides critical care and emotional enrichment for rescued animals. 
        Even a few hours a week can make a difference, helping staff feed, clean, and socialize animals, improving 
        their recovery and quality of life.
        `,
        quiz: {
          question: "How does volunteering at sanctuaries help animals?",
          options: [
            "Provides care and enrichment for rescued animals",
            "Harms the animals",
            "Has no impact"
          ],
          answer: "Provides care and enrichment for rescued animals"
        }
      },
      {
        lesson: `
        Animals have personalities. Pigs can be shy or bold, cows can be playful or calm, and chickens can be 
        curious or cautious. Recognizing individuality encourages respect and motivates actions that improve 
        their welfare.
        `,
        quiz: {
          question: "What does recognizing animal personalities help with?",
          options: [
            "Encourages respect and better welfare",
            "Has no practical effect",
            "Only applies to pets"
          ],
          answer: "Encourages respect and better welfare"
        }
      },
      {
        lesson: `
        Supporting cruelty-free products and plant-based meals creates economic incentives for companies to 
        adopt humane practices. When consumers prioritize compassion, it drives change in markets and reduces 
        the suffering of billions of animals worldwide.
        `,
        quiz: {
          question: "How does choosing cruelty-free products help animals?",
          options: [
            "Encourages companies to adopt humane practices",
            "Increases animal exploitation",
            "Has no effect"
          ],
          answer: "Encourages companies to adopt humane practices"
        }
      },
      {
        lesson: `
        Over 70 billion land animals are raised for food every year. This massive number highlights how human 
        consumption patterns directly determine the scale of animal suffering globally, from chickens to pigs to cows.
        `,
        quiz: {
          question: "Approximately how many land animals are raised for food each year?",
          options: ["70 billion", "10 million", "500 million"],
          answer: "70 billion"
        }
      },
      {
        lesson: `
        Male chicks are commonly culled in the egg industry because they cannot lay eggs and are not bred for meat. 
        Each year, billions of male chicks are killed shortly after hatching. This practice exemplifies the hidden suffering 
        behind common food products.
        `,
        quiz: {
          question: "Why are male chicks culled in the egg industry?",
          options: [
            "They cannot lay eggs and are not used for meat",
            "They are more valuable than hens",
            "They are released into the wild"
          ],
          answer: "They cannot lay eggs and are not used for meat"
        }
      },
      {
        lesson: `
        Dairy cows are repeatedly impregnated to produce milk. Once their milk production declines, they are sent 
        to slaughter, often at 4–6 years old instead of their natural lifespan of 20 years. This cycle is invisible 
        to most consumers but causes immense suffering.
        `,
        quiz: {
          question: "Why are dairy cows sent to slaughter?",
          options: [
            "Their milk production declines",
            "They have lived a full natural lifespan",
            "They choose to leave"
          ],
          answer: "Their milk production declines"
        }
      },
      {
        lesson: `
        Pigs are capable of using mirrors to explore hidden objects, demonstrating self-awareness. Self-awareness 
        is a trait previously thought to be unique to humans and some primates. Recognizing it in pigs challenges 
        assumptions about their mental capacities and ethical treatment.
        `,
        quiz: {
          question: "What does using mirrors to explore hidden objects demonstrate in pigs?",
          options: ["Self-awareness", "Lack of intelligence", "No learning ability"],
          answer: "Self-awareness"
        }
      },
      {
        lesson: `
        Chickens can communicate with more than 30 distinct vocalizations, each signaling different threats, desires, 
        or social cues. They are not silent or unintelligent; they live complex social lives that are often ignored in 
        commercial farming.
        `,
        quiz: {
          question: "How many distinct vocalizations can chickens use?",
          options: ["Over 30", "5", "10"],
          answer: "Over 30"
        }
      },
      {
        lesson: `
        Farmed animals can experience chronic stress, which affects their health, immune system, and behavior. 
        Stress arises from confinement, noise, overcrowding, and handling methods. Reducing the demand for animal products 
        directly decreases the number of animals exposed to these stressors.
        `,
        quiz: {
          question: "What causes chronic stress in farmed animals?",
          options: [
            "Confinement, noise, and overcrowding",
            "Freedom to roam outdoors",
            "Proper nutrition and care"
          ],
          answer: "Confinement, noise, and overcrowding"
        }
      },
      {
        lesson: `
        Cows have been observed forming lifelong friendships and showing signs of grief when separated from a bonded 
        partner. Understanding their social bonds illustrates that farmed animals experience emotional depth, contrary 
        to the perception of them as mere production units.
        `,
        quiz: {
          question: "What emotional behavior do cows exhibit?",
          options: [
            "Form lifelong friendships and show grief",
            "Ignore other cows entirely",
            "React only to food"
          ],
          answer: "Form lifelong friendships and show grief"
        }
      },
      {
        lesson: `
        Transporting animals to slaughterhouses is highly stressful. Animals may be crowded, deprived of food or water, 
        and subjected to unfamiliar environments. Each transport event amplifies suffering, which could be reduced 
        by lowering the number of animals raised for food.
        `,
        quiz: {
          question: "Why is transport to slaughterhouses stressful for animals?",
          options: [
            "Crowding, deprivation, and unfamiliar environments",
            "It is a calming experience",
            "Animals enjoy traveling"
          ],
          answer: "Crowding, deprivation, and unfamiliar environments"
        }
      },
      {
        lesson: `
        Many fish are capable of feeling pain and stress. Fish subjected to industrial fishing practices can experience 
        suffocation, bruising, and fear, contradicting the outdated belief that fish are insentient. Ethical considerations 
        should extend to aquatic life as well.
        `,
        quiz: {
          question: "Can fish experience pain and stress?",
          options: ["Yes", "No", "Only some types of fish"],
          answer: "Yes"
        }
      },
      {
        lesson: `
        Broiler chickens are genetically modified to grow extremely fast, reaching slaughter weight in just 6–7 weeks, 
        compared to their natural growth of several months. This rapid growth often causes skeletal deformities, 
        organ failure, and chronic pain.
        `,
        quiz: {
          question: "What is a consequence of genetically modified rapid growth in broiler chickens?",
          options: [
            "Skeletal deformities, organ failure, and chronic pain",
            "Stronger and healthier bones",
            "No negative effects"
          ],
          answer: "Skeletal deformities, organ failure, and chronic pain"
        }
      },
      {
        lesson: `
        Factory-farmed animals often live in barren environments with no enrichment. Pigs cannot root, chickens cannot 
        scratch in soil, and cows are confined to concrete floors. Lack of stimulation causes behavioral issues such as 
        pacing, feather pecking, and aggression.
        `,
        quiz: {
          question: "What behavioral issues arise from barren factory-farm environments?",
          options: [
            "Pacing, feather pecking, aggression",
            "Calmness and contentment",
            "Enhanced intelligence"
          ],
          answer: "Pacing, feather pecking, aggression"
        }
      },
      {
        lesson: `
        Wild animals are indirectly affected by factory farming through deforestation and habitat destruction. Forests 
        are cleared to grow feed crops or pasture livestock, reducing biodiversity and displacing countless species.
        `,
        quiz: {
          question: "How does factory farming affect wild animals?",
          options: [
            "Habitat loss through deforestation",
            "Provides more natural habitats",
            "No effect"
          ],
          answer: "Habitat loss through deforestation"
        }
      },
      {
        lesson: `
        Over 80% of marine biodiversity decline is linked to industrial fishing and habitat destruction. Unsustainable 
        practices harm ecosystems, showing that consumer choices on seafood can have global ecological consequences.
        `,
        quiz: {
          question: "What percentage of marine biodiversity decline is linked to industrial fishing?",
          options: ["Over 80%", "50%", "10%"],
          answer: "Over 80%"
        }
      },
      {
        lesson: `
        Animal intelligence is often underestimated. Octopuses can use tools, solve mazes, and remember solutions. 
        This highlights that sentience and cognitive abilities extend far beyond mammals, expanding our ethical responsibility 
        to multiple species.
        `,
        quiz: {
          question: "What is true about octopuses?",
          options: [
            "They can use tools and solve mazes",
            "They have no cognitive abilities",
            "They cannot learn"
          ],
          answer: "They can use tools and solve mazes"
        }
      },
      {
        lesson: `
        Farmed rabbits are highly social and communicate through body language, scent, and vocalizations. They form 
        bonds, experience fear, and show joy when playing. Understanding this complexity urges us to improve their welfare.
        `,
        quiz: {
          question: "How do farmed rabbits communicate?",
          options: ["Body language, scent, and vocalizations", "Only hopping", "They do not communicate"],
          answer: "Body language, scent, and vocalizations"
        }
      },
      {
        lesson: `
        Animals experience cumulative suffering. A single stressful event may be recoverable, but repetitive 
        confinement, mutilation, and transport compound over time, resulting in chronic distress and weakened health.
        `,
        quiz: {
          question: "What does cumulative suffering in animals lead to?",
          options: ["Chronic distress and weakened health", "Improved resilience", "No impact"],
          answer: "Chronic distress and weakened health"
        }
      },
      {
        lesson: `
        Compassionate consumer choices can save billions of animal lives annually. Reducing meat, dairy, and egg consumption 
        decreases the number of animals raised under intensive conditions and shifts markets toward more humane practices.
        `,
        quiz: {
          question: "How can consumers save billions of animal lives annually?",
          options: [
            "By reducing meat, dairy, and egg consumption",
            "By eating more animal products",
            "By ignoring animal welfare"
          ],
          answer: "By reducing meat, dairy, and egg consumption"
        }
      },
      {
        lesson: `
        Animal sanctuaries provide safe, lifelong homes for rescued animals. Supporting these sanctuaries ensures that 
        animals experience comfort, care, and enrichment, demonstrating a practical solution to widespread suffering.
        `,
        quiz: {
          question: "What do animal sanctuaries provide?",
          options: [
            "Safe, lifelong homes for rescued animals",
            "Temporary confinement",
            "Factories for production"
          ],
          answer: "Safe, lifelong homes for rescued animals"
        }
      },
      {
        lesson: `
        Educating others about animal sentience and welfare creates systemic change. Sharing facts about intelligence, 
        emotion, and suffering empowers communities to make compassionate decisions that collectively reduce harm.
        `,
        quiz: {
          question: "How does educating others about animal welfare help?",
          options: [
            "Empowers communities to reduce harm",
            "Increases factory farming",
            "Has no effect"
          ],
          answer: "Empowers communities to reduce harm"
       }
      }
      // ✅ More lessons can continue here 
    ],

    "Caring for the environment & fighting climate change": [
        
      {
        lesson: `
        Livestock farming uses 77% of agricultural land to produce just 12% of global calories. 
        This shows that animal-based diets are extremely land-inefficient, and shifting to plants can free up vast areas 
        for rewilding and carbon sequestration.
        `,
        quiz: {
          question: "How much agricultural land do livestock use relative to calories produced?",
          options: ["77% of land for 12% of calories", "50% of land for 50% of calories", "20% of land for 80% of calories"],
          answer: "77% of land for 12% of calories"
        }
      },
{
  lesson: `Biodiversity is crucial for human survival. Diverse ecosystems provide food, clean water, fertile soils, and help regulate 
  the climate. Losing species reduces ecosystem resilience and the services we rely on for our own health and survival.`,
  quiz: {
    question: "Why is biodiversity important for humans?",
    options: ["It supports food, water, and climate regulation", "It is just nice to look at", "It increases traffic"],
    answer: "It supports food, water, and climate regulation"
  }
},
{
  lesson: `Around 46% of ocean plastic comes from abandoned or lost fishing gear, like nets and lines. These “ghost nets” entangle fish, 
  turtles, and marine mammals, causing injuries and death, and have long-lasting effects on marine ecosystems.`,
  quiz: {
    question: "What percentage of ocean plastic comes from fishing gear?",
    options: ["Around 46%", "10%", "75%"],
    answer: "Around 46%"
  }
},{
  lesson: `If humanity shifted to a mostly plant-based diet, we could potentially free up around 70% of agricultural land currently used 
  for livestock and feed crops. Returning this land to nature could restore habitats, greatly increase biodiversity, and allow wild 
  species to recover in numbers and variety.`,
  quiz: {
    question: "What percentage of agricultural land could be freed by adopting a plant-based diet?",
    options: ["Around 70%", "10%", "50%"],
    answer: "Around 70%"
  }
},
{
  lesson: `Bottom trawling and other destructive fishing methods damage the ocean floor, destroy habitats, and wipe out slow-growing species. 
  These practices reduce biodiversity and destabilize marine ecosystems, making it harder for oceans to recover.`,
  quiz: {
    question: "Which effect do destructive fishing methods like bottom trawling have?",
    options: ["Destroy habitats and reduce biodiversity", "Increase fish populations", "Help coral growth"],
    answer: "Destroy habitats and reduce biodiversity"
  }
},
{
  lesson: `Oceans act as a major carbon sink, absorbing about 30% of CO₂ emissions. When biodiversity declines, the ability of oceans to 
  store carbon effectively decreases, accelerating climate change and reducing the health of marine ecosystems.`,
  quiz: {
    question: "How does declining ocean biodiversity affect CO₂ absorption?",
    options: ["Reduces the ocean's ability to store carbon", "Increases carbon storage", "Has no effect"],
    answer: "Reduces the ocean's ability to store carbon"
  }
},
      {
        lesson: `
        Eating plant-based reduces water use dramatically. For example, producing 1 kg of beef requires around 15,000 liters of water, 
        while 1 kg of wheat requires only about 1,300 liters. Choosing plants over meat has an immediate impact on freshwater conservation.
        `,
        quiz: {
          question: "Approximately how much water is needed to produce 1 kg of beef?",
          options: ["15,000 liters", "1,500 liters", "500 liters"],
          answer: "15,000 liters"
        }
      },
      {
        lesson: `
        Agriculture is responsible for nearly 25% of global greenhouse gas emissions. Most of these emissions come from livestock, 
        including methane from cows and nitrous oxide from fertilized soils. Reducing animal product consumption directly lowers emissions.
        `,
        quiz: {
          question: "What percentage of global greenhouse gas emissions comes from agriculture?",
          options: ["25%", "10%", "50%"],
          answer: "25%"
        }
      },
      {
        lesson: `
        Deforestation is largely driven by the need for pasture and feed crops for animals. Each year, millions of hectares of forests 
        are cleared, releasing stored carbon into the atmosphere and accelerating climate change.
        `,
        quiz: {
          question: "What is a primary driver of deforestation?",
          options: ["Pasture and feed crops for animals", "Urban expansion only", "Natural causes"],
          answer: "Pasture and feed crops for animals"
        }
      },
      {
        lesson: `
        Livestock produce more greenhouse gases than the entire transportation sector combined. Methane from ruminants is 
        over 25 times more potent than CO₂ over a 100-year period, making livestock a critical focus for climate mitigation.
        `,
        quiz: {
          question: "Compared to CO₂, how potent is methane over 100 years?",
          options: ["Over 25 times more potent", "Equally potent", "Less potent"],
          answer: "Over 25 times more potent"
        }
      },
      {
        lesson: `
        Animal agriculture contributes heavily to ocean dead zones. Runoff from fertilizers used to grow animal feed 
        fuels algae blooms, depleting oxygen in coastal waters and killing marine life.
        `,
        quiz: {
          question: "What causes ocean dead zones linked to agriculture?",
          options: ["Fertilizer runoff", "Plastic waste", "Tourism"],
          answer: "Fertilizer runoff"
        }
      },
      {
        lesson: `
        Over 80% of global deforestation occurs in tropical regions to make way for livestock grazing or feed crops. 
        Protecting these forests preserves carbon sinks and biodiversity while mitigating climate change.
        `,
        quiz: {
          question: "Where does most global deforestation occur?",
          options: ["Tropical regions", "Temperate forests", "Polar regions"],
          answer: "Tropical regions"
        }
      },
      {
        lesson: `
        Shifting 20% of the global population to a plant-based diet could reduce global agricultural land use by about 10 million km², 
        roughly the size of the Amazon rainforest, creating opportunities for ecosystem restoration.
        `,
        quiz: {
          question: "What could reducing animal product consumption by 20% globally achieve?",
          options: ["Free about 10 million km² of land", "No significant change", "Increase deforestation"],
          answer: "Free about 10 million km² of land"
        }
      },
      {
        lesson: `
        Methane emissions from cows are a major contributor to short-term climate warming. Unlike CO₂, methane remains in the atmosphere 
        for about 12 years but traps heat 80 times more efficiently than CO₂ over that period.
        `,
        quiz: {
          question: "How long does methane from cows stay in the atmosphere?",
          options: ["About 12 years", "100 years", "1 year"],
          answer: "About 12 years"
        }
      },
      {
        lesson: `
        Global biodiversity has declined by approximately 80% over the last 50 years, largely due to habitat destruction 
        and intensive agriculture. Every meal choice has the potential to either exacerbate or alleviate this crisis.
        `,
        quiz: {
          question: "By what percentage has global biodiversity declined in the last 50 years?",
          options: ["80%", "50%", "20%"],
          answer: "80%"
        }
      },
      {
        lesson: `
        Overfishing removes key species from marine ecosystems, destabilizing the food chain. Reducing consumption of farmed 
        and wild-caught seafood can protect ocean biodiversity and help restore natural balances.
        `,
        quiz: {
          question: "What is a major effect of overfishing?",
          options: ["Destabilizes marine food chains", "Improves ecosystem balance", "Has no impact"],
          answer: "Destabilizes marine food chains"
        }
      },
      {
        lesson: `
        Livestock manure is a major source of nitrous oxide, a greenhouse gas roughly 300 times more potent than CO₂ over a century. 
        Managing or reducing animal numbers can significantly lower this impact.
        `,
        quiz: {
          question: "Nitrous oxide from livestock is how many times more potent than CO₂?",
          options: ["300 times", "25 times", "100 times"],
          answer: "300 times"
        }
      },
      {
        lesson: `
        Producing 1 kg of cheese can require up to 5,000 liters of water, illustrating how dairy is among the most resource-intensive foods. 
        Plant-based alternatives reduce this water footprint dramatically.
        `,
        quiz: {
          question: "How much water is needed to produce 1 kg of cheese?",
          options: ["5,000 liters", "1,000 liters", "500 liters"],
          answer: "5,000 liters"
        }
      },
      {
        lesson: `
        Ruminant animals, such as cows and sheep, produce methane through enteric fermentation, a digestive process. 
        This natural digestive activity accounts for a significant portion of agricultural greenhouse gases.
        `,
        quiz: {
          question: "Which animals produce methane through enteric fermentation?",
          options: ["Cows and sheep", "Pigs and chickens", "Fish"],
          answer: "Cows and sheep"
        }
      },
      {
        lesson: `
        Meat and dairy production drives soil degradation. Intensive grazing compacts soil, reduces fertility, and 
        increases erosion, limiting the land's ability to store carbon.
        `,
        quiz: {
          question: "What effect does meat and dairy production have on soil?",
          options: ["Degradation, compaction, reduced fertility", "Enhances fertility", "No effect"],
          answer: "Degradation, compaction, reduced fertility"
        }
      },
      {
        lesson: `
        Global livestock generates more CO₂ equivalents than all cars, trucks, planes, and ships combined. 
        Reducing consumption is therefore one of the fastest ways to cut carbon emissions.
        `,
        quiz: {
          question: "Which generates more CO₂ equivalents than global transportation?",
          options: ["Livestock", "Cars only", "Airplanes only"],
          answer: "Livestock"
        }
      },
      {
        lesson: `
        Rice paddies produce methane, contributing significantly to agricultural greenhouse gases. Adopting 
        plant-based diets with reduced rice and meat intake can mitigate these emissions simultaneously.
        `,
        quiz: {
          question: "Which agricultural practice contributes significantly to methane emissions?",
          options: ["Rice paddies", "Wheat farming", "Carrot farming"],
          answer: "Rice paddies"
        }
      },
      {
        lesson: `
        Eating locally and seasonally reduces transport emissions. While diet shifts have the largest impact, 
        sourcing foods closer to home further lowers the carbon footprint of our meals.
        `,
        quiz: {
          question: "How does eating locally affect emissions?",
          options: ["Reduces transport emissions", "Increases emissions", "No effect"],
          answer: "Reduces transport emissions"
        }
      },
      {
        lesson: `
        Plant-based agriculture allows for reforestation opportunities. Land freed from livestock feed production 
        can be returned to forests, which absorb CO₂ and help reverse climate change.
        `,
        quiz: {
          question: "What does freeing land from livestock feed production enable?",
          options: ["Reforestation", "Urban development", "More livestock"],
          answer: "Reforestation"
        }
      },
      {
        lesson: `
        Reducing meat and dairy consumption also lowers energy use. Less feed production, animal housing, and transport 
        reduce fossil fuel consumption throughout the food system.
        `,
        quiz: {
          question: "How does reducing meat and dairy consumption affect energy use?",
          options: ["Lowers fossil fuel use", "Increases fossil fuel use", "No effect"],
          answer: "Lowers fossil fuel use"
        }
      },
      {
        lesson: `
        Agriculture contributes to 70% of freshwater withdrawals globally. Plant-based diets dramatically reduce water 
        stress by relying on crops that need less water per calorie than animal products.
        `,
        quiz: {
          question: "What percentage of freshwater withdrawals is used by agriculture?",
          options: ["70%", "30%", "50%"],
          answer: "70%"
        }
      },
      {
        lesson: `
        Livestock feed production contributes to pesticide use, which harms insects, birds, and aquatic life. 
        Reducing meat intake decreases chemical usage and protects ecosystems.
        `,
        quiz: {
          question: "How does livestock feed production affect wildlife?",
          options: ["Increases pesticide exposure", "Reduces chemical use", "No effect"],
          answer: "Increases pesticide exposure"
        }
      },
      {
        lesson: `
        Soil carbon loss is accelerated by tilling and overgrazing for livestock feed. Plant-based cropping systems 
        often preserve or enhance soil carbon, mitigating climate change.
        `,
        quiz: {
          question: "How do plant-based cropping systems affect soil carbon?",
          options: ["Preserve or enhance it", "Reduce it", "No effect"],
          answer: "Preserve or enhance it"
        }
      },
      {
        lesson: `
        Shifting global diets could reduce agricultural greenhouse gases by up to 50% by 2050, showing the power of 
        personal and collective choices in combating climate change.
        `,
        quiz: {
          question: "By how much could greenhouse gases be reduced through global diet shifts?",
          options: ["Up to 50%", "10%", "No significant reduction"],
          answer: "Up to 50%"
        }
      },
      {
        lesson: `
        Livestock manure contributes to water pollution through nitrogen and phosphorus runoff, causing eutrophication. 
        Plant-based diets reduce manure volumes and protect rivers and lakes.
        `,
        quiz: {
          question: "What water problem is caused by livestock manure runoff?",
          options: ["Eutrophication", "Oxygenation", "Purification"],
          answer: "Eutrophication"
        }
      },
      {
        lesson: `
        Reducing meat consumption also reduces energy-intensive fertilizer use. Fertilizers for animal feed require 
        fossil fuels to produce, so plant-based diets help lower fossil fuel demand.
        `,
        quiz: {
          question: "How does reducing meat consumption affect fertilizer use?",
          options: ["Reduces energy-intensive fertilizer use", "Increases it", "No effect"],
          answer: "Reduces energy-intensive fertilizer use"
        }
      },
      {
        lesson: `
        Greenhouse gas emissions from beef are roughly 20 times higher per kilogram of protein than legumes. 
        Choosing legumes over beef for protein can drastically cut your carbon footprint.
        `,
        quiz: {
          question: "How much higher are beef emissions compared to legumes per kg of protein?",
          options: ["About 20 times higher", "Same", "10 times lower"],
          answer: "About 20 times higher"
        }
      },
      {
        lesson: `
        Methane emissions from livestock can be reduced indirectly by lowering demand. Consumer choices shape 
        production practices and market supply, showing that eating fewer animal products is a climate action.
        `,
        quiz: {
          question: "How can methane emissions from livestock be reduced?",
          options: ["By lowering consumer demand for animal products", "By eating more meat", "No effect"],
          answer: "By lowering consumer demand for animal products"
        }
      },
      {
        lesson: `
        Plant-based diets help preserve pollinator populations. Less land for feed crops means more natural habitats 
        for bees, butterflies, and other vital pollinators, supporting global food security.
        `,
        quiz: {
          question: "How do plant-based diets help pollinators?",
          options: ["Preserve natural habitats", "Reduce pollination", "No effect"],
          answer: "Preserve natural habitats"
        }
      },
      {
        lesson: `
        Every meal is an opportunity for climate action. By choosing plants, we reduce land degradation, water use, 
        emissions, and pollution, collectively creating a measurable positive impact on our planet.
        `,
        quiz: {
          question: "How does choosing plant-based meals impact the planet?",
          options: ["Reduces land use, water use, emissions, and pollution", "No impact", "Increases emissions"],
          answer: "Reduces land use, water use, emissions, and pollution"
        }
      }
// ✅ Add more lessons here in the future
  ],

    "Healthy living & wellness": [
      {
  lesson: `Over the last 50 years, global consumption of meat and dairy has increased dramatically. Coinciding with this rise, rates of heart disease, type 2 diabetes, and obesity have surged worldwide, suggesting a strong correlation between diet and modern chronic illnesses.`,
  quiz: {
    question: "What trend coincided with increased meat and dairy consumption over the last 50 years?",
    options: ["Rise in chronic diseases like diabetes and heart disease", "Decline in obesity", "Decrease in cancer rates"],
    answer: "Rise in chronic diseases like diabetes and heart disease"
  }
},
{
  lesson: `Although milk contains calcium, the digestion of milk protein can cause your body to use more calcium than it provides. This means that high dairy consumption does not necessarily strengthen bones and may even affect bone health negatively.`,
  quiz: {
    question: "Does milk always strengthen bones?",
    options: ["No, it can cause net calcium loss", "Yes, always", "Only if drunk with sugar"],
    answer: "No, it can cause net calcium loss"
  }
},
{
  lesson: `Humans are biologically closer to frugivores and herbivores like gorillas. Our digestive system, teeth, and gut microbiota 
  are adapted for high-fiber, plant-based foods. While we can digest meat, our anatomy suggests that a mostly plant-based diet is optimal 
  for long-term health.`,
  quiz: {
    question: "Humans are most similar in diet to which group?",
    options: ["Frugivores/herbivores like gorillas", "Carnivores like lions", "Omnivores like pigs"],
    answer: "Frugivores/herbivores like gorillas"
  }
},
{
  lesson: `Blue Zones—regions where people live exceptionally long lives—primarily eat plant-based diets rich in vegetables, legumes, 
  and whole grains. The arrival of fast, meat-heavy foods has eroded these traditional diets, contributing to rising rates of chronic 
  disease and shorter lifespans.`,
  quiz: {
    question: "What type of diet is common in Blue Zones?",
    options: ["Plant-based with vegetables and legumes", "Fast-food and meat-heavy", "High sugar and processed snacks"],
    answer: "Plant-based with vegetables and legumes"
  }
},
{
  lesson: `Plant proteins, such as beans, lentils, tofu, and quinoa, provide all the essential amino acids when eaten in variety. 
  Unlike meat, they contain no cholesterol and much less saturated fat. Diets rich in plant protein are linked to lower risk of 
  heart disease and longer lifespan, while high meat protein intake is associated with inflammation and chronic illness.`,
  quiz: {
    question: "What is one key difference between plant and meat protein?",
    options: ["Plant proteins contain no cholesterol", "Meat proteins are cholesterol-free", "Plant proteins lack amino acids"],
    answer: "Plant proteins contain no cholesterol"
  }
},
{
  lesson: `Heart disease, stroke, diabetes, and certain cancers are among the top causes of death globally. Research shows that diets 
  high in meat and dairy significantly increase the risk of these diseases by raising LDL cholesterol, promoting inflammation, 
  and affecting insulin sensitivity.`,
  quiz: {
    question: "Which dietary factor contributes to major global diseases?",
    options: ["High meat and dairy consumption", "Eating more vegetables", "Exercising regularly"],
    answer: "High meat and dairy consumption"
  }
},
{
  lesson: `The human body can handle only small amounts of saturated fat and LDL cholesterol. Excess consumption from meat and 
  dairy—like in cheese, which can contain 6–8g of saturated fat per 30g slice—raises blood cholesterol and increases heart disease risk.`,
  quiz: {
    question: "Why is high intake of cheese a concern?",
    options: ["It contains high saturated fat, raising LDL cholesterol", "It provides too much fiber", "It reduces energy levels"],
    answer: "It contains high saturated fat, raising LDL cholesterol"
  }
},
{
  lesson: `A standard 250ml glass of whole milk contains roughly 8g of fat, of which about 5g is saturated. This can provide a significant percentage of your daily recommended saturated fat intake, often over 20% of calories for an average adult, contributing to heart disease risk if consumed daily.`,
  quiz: {
    question: "What percentage of your daily saturated fat can a glass of milk provide?",
    options: ["Over 20%", "Less than 5%", "0%"],
    answer: "Over 20%"
  }
},
{
  lesson: `Milk contains hormones like estrogen, progesterone, and IGF-1. These hormones can influence human hormone levels, potentially affecting growth, development, and reproductive health, which is particularly concerning for children consuming large quantities.`,
  quiz: {
    question: "What hormones are naturally present in cow's milk?",
    options: ["Estrogen, progesterone, IGF-1", "Adrenaline, testosterone", "Insulin only"],
    answer: "Estrogen, progesterone, IGF-1"
  }
},
{
  lesson: `Soy contains phytoestrogens, plant compounds that mimic estrogen. However, research shows they do not feminize men when consumed in normal dietary amounts. Instead, they may offer health benefits like lowering cholesterol and supporting heart health.`,
  quiz: {
    question: "Does consuming soy make men feminine?",
    options: ["No, normal dietary amounts are safe", "Yes, immediately", "Only if combined with dairy"],
    answer: "No, normal dietary amounts are safe"
  }
},
      {
        lesson: `
        Plant-based diets are naturally high in fiber, which helps regulate digestion, stabilize blood sugar, 
        and lower cholesterol levels. Over time, this can reduce the risk of cardiovascular disease and improve gut microbiome diversity.
        `,
        quiz: {
          question: "Why is fiber in plant-based diets beneficial?",
          options: ["Regulates digestion, lowers cholesterol, stabilizes blood sugar", "Causes constipation", "No effect"],
          answer: "Regulates digestion, lowers cholesterol, stabilizes blood sugar"
        }
      },
      {
        lesson: `
        Consuming a variety of vegetables, fruits, legumes, and whole grains provides essential vitamins and minerals, 
        including vitamin C, potassium, magnesium, and antioxidants, which protect cells from oxidative stress and inflammation.
        `,
        quiz: {
          question: "What benefits do plant-based vitamins and minerals provide?",
          options: ["Protect cells from oxidative stress and inflammation", "Increase oxidative stress", "No effect"],
          answer: "Protect cells from oxidative stress and inflammation"
        }
      },
      {
        lesson: `
        Diets high in leafy greens like spinach, kale, and broccoli are associated with improved cognitive function. 
        Nutrients like folate, vitamin K, and lutein support brain health and may reduce the risk of age-related cognitive decline.
        `,
        quiz: {
          question: "Which aspect of health do leafy greens support?",
          options: ["Brain health and cognitive function", "Hair growth only", "Bone density only"],
          answer: "Brain health and cognitive function"
        }
      },
      {
        lesson: `
        Legumes such as lentils, beans, and chickpeas provide plant protein, iron, and B vitamins. 
        These nutrients support muscle repair, energy production, and red blood cell formation.
        `,
        quiz: {
          question: "What benefits do legumes provide?",
          options: ["Muscle repair, energy production, red blood cell formation", "Cause muscle loss", "Reduce energy"],
          answer: "Muscle repair, energy production, red blood cell formation"
        }
      },
      {
        lesson: `
        Whole grains like oats, quinoa, and brown rice help maintain steady blood sugar levels, reduce cholesterol, 
        and provide long-lasting energy, which can improve concentration and mood throughout the day.
        `,
        quiz: {
          question: "Why are whole grains beneficial for energy?",
          options: ["Provide steady blood sugar and long-lasting energy", "Spike blood sugar quickly", "Reduce energy"],
          answer: "Provide steady blood sugar and long-lasting energy"
        }
      },
      {
        lesson: `
        Plant-based diets can improve cardiovascular health. Studies show lower blood pressure, reduced LDL cholesterol, 
        and decreased risk of heart attacks among people who follow a diet rich in plants.
        `,
        quiz: {
          question: "What cardiovascular benefits do plant-based diets offer?",
          options: ["Lower blood pressure, reduced LDL cholesterol, decreased heart attack risk", "Increase blood pressure", "No effect"],
          answer: "Lower blood pressure, reduced LDL cholesterol, decreased heart attack risk"
        }
      },
      {
        lesson: `
        Antioxidants in berries, nuts, and colorful vegetables help combat free radicals that can damage cells and accelerate aging. 
        A diet rich in these foods supports longevity and healthy skin.
        `,
        quiz: {
          question: "How do antioxidants from plant foods benefit the body?",
          options: ["Protect cells from damage and support longevity", "Accelerate aging", "No effect"],
          answer: "Protect cells from damage and support longevity"
        }
      },
      {
        lesson: `
        Adequate hydration is crucial for overall wellness. Plant-based foods with high water content, like cucumbers, 
        melons, and oranges, contribute to hydration and can support kidney function and skin health.
        `,
        quiz: {
          question: "How do high-water plant foods support wellness?",
          options: ["Improve hydration, kidney function, and skin health", "Dehydrate the body", "Cause kidney damage"],
          answer: "Improve hydration, kidney function, and skin health"
        }
      },
      {
        lesson: `
        Consuming more fruits and vegetables has been linked to improved mood and mental health. 
        Nutrients like folate, magnesium, and antioxidants support neurotransmitter function and reduce stress.
        `,
        quiz: {
          question: "Which mental health benefits come from plant-based nutrients?",
          options: ["Support neurotransmitters and reduce stress", "Increase anxiety", "No effect"],
          answer: "Support neurotransmitters and reduce stress"
        }
      },
      {
        lesson: `
        Fiber-rich plant foods help regulate the gut microbiome, which has a direct effect on the immune system, 
        digestion, and even mental health through the gut-brain axis.
        `,
        quiz: {
          question: "How does fiber affect the gut microbiome?",
          options: ["Regulates digestion, immunity, and mental health", "Harms gut bacteria", "No effect"],
          answer: "Regulates digestion, immunity, and mental health"
        }
      },
      {
        lesson: `
        Plant-based diets are naturally lower in saturated fat, which supports healthy cholesterol levels, reduces 
        inflammation, and helps maintain a healthy weight.
        `,
        quiz: {
          question: "Why is a plant-based diet good for weight and inflammation?",
          options: ["Lower in saturated fat, supports healthy cholesterol and weight", "Higher in fat, increases inflammation", "No effect"],
          answer: "Lower in saturated fat, supports healthy cholesterol and weight"
        }
      },
      {
        lesson: `
        Vitamin B12 is essential for nerve function and red blood cell production. While mostly found in animal products, 
        fortified plant foods or supplements ensure plant-based eaters meet their needs safely.
        `,
        quiz: {
          question: "How can plant-based eaters get sufficient vitamin B12?",
          options: ["Fortified foods or supplements", "Eat more vegetables only", "No need for B12"],
          answer: "Fortified foods or supplements"
        }
      },
      {
        lesson: `
        Magnesium from nuts, seeds, and leafy greens supports energy metabolism, muscle function, and heart health. 
        Many people are deficient, but a varied plant-based diet covers daily needs naturally.
        `,
        quiz: {
          question: "Why is magnesium important and how is it obtained?",
          options: ["Supports energy, muscles, heart; from nuts, seeds, greens", "Not important", "Only found in meat"],
          answer: "Supports energy, muscles, heart; from nuts, seeds, greens"
        }
      },
      {
        lesson: `
        Omega-3 fatty acids from flax, chia, and walnuts help reduce inflammation, support brain health, and protect heart function. 
        Plant-based sources are excellent alternatives to fish for essential fats.
        `,
        quiz: {
          question: "What do plant-based omega-3s support?",
          options: ["Reduce inflammation, support brain and heart health", "Cause inflammation", "No effect"],
          answer: "Reduce inflammation, support brain and heart health"
        }
      },
      {
        lesson: `
        Antioxidants and phytonutrients from colorful fruits and vegetables help prevent DNA damage, 
        lower cancer risk, and enhance cellular repair mechanisms.
        `,
        quiz: {
          question: "How do antioxidants from plants affect cancer risk?",
          options: ["Prevent DNA damage and lower cancer risk", "Increase cancer risk", "No effect"],
          answer: "Prevent DNA damage and lower cancer risk"
        }
      },
      {
        lesson: `
        Whole food plant-based diets support stable energy levels. Avoiding processed foods prevents sugar crashes, 
        and fiber slows digestion, maintaining focus and productivity throughout the day.
        `,
        quiz: {
          question: "How do plant-based whole foods affect energy levels?",
          options: ["Provide stable energy and prevent crashes", "Cause energy spikes and crashes", "No effect"],
          answer: "Provide stable energy and prevent crashes"
        }
      },
      {
        lesson: `
        Phytonutrients in cruciferous vegetables like broccoli and cauliflower activate detoxification enzymes 
        in the liver, helping the body eliminate harmful compounds and support liver health.
        `,
        quiz: {
          question: "What do cruciferous vegetables do for the liver?",
          options: ["Activate detox enzymes and support liver health", "Harm liver function", "No effect"],
          answer: "Activate detox enzymes and support liver health"
        }
      },
      {
        lesson: `
        Consuming nuts regularly improves heart health, stabilizes blood sugar, and supports satiety. 
        Just a handful a day provides healthy fats, protein, and micronutrients.
        `,
        quiz: {
          question: "How do nuts benefit health?",
          options: ["Improve heart health, stabilize blood sugar, promote satiety", "Cause heart disease", "No effect"],
          answer: "Improve heart health, stabilize blood sugar, promote satiety"
        }
      },
      {
        lesson: `
        Plant-based diets can help regulate hormones. Nutrient-rich foods, fiber, and low saturated fat support balanced 
        insulin, estrogen, and testosterone levels naturally.
        `,
        quiz: {
          question: "How do plant-based diets affect hormones?",
          options: ["Support balanced insulin, estrogen, and testosterone", "Cause imbalance", "No effect"],
          answer: "Support balanced insulin, estrogen, and testosterone"
        }
      },
      {
        lesson: `
        Fermented plant foods like sauerkraut, kimchi, and tempeh introduce beneficial probiotics that enhance 
        gut microbiota diversity and immunity.
        `,
        quiz: {
          question: "What do fermented plant foods provide?",
          options: ["Probiotics that support gut and immunity", "Harm gut microbiome", "No effect"],
          answer: "Probiotics that support gut and immunity"
        }
      },
      {
        lesson: `
        Plant-based diets reduce chronic inflammation, a root cause of many diseases including diabetes, cardiovascular 
        disease, and arthritis.
        `,
        quiz: {
          question: "How do plant-based diets affect inflammation?",
          options: ["Reduce chronic inflammation", "Increase inflammation", "No effect"],
          answer: "Reduce chronic inflammation"
        }
      },
      {
        lesson: `
        A diverse plant-based diet ensures sufficient intake of antioxidants, vitamins, minerals, and fiber, which 
        work synergistically to support overall wellness and prevent nutrient deficiencies.
        `,
        quiz: {
          question: "Why is dietary diversity important in plant-based diets?",
          options: ["Supports wellness and prevents deficiencies", "Causes deficiencies", "No effect"],
          answer: "Supports wellness and prevents deficiencies"
        }
      },
      {
        lesson: `
        Vitamin D can be obtained through fortified plant milks or sunlight exposure. Adequate levels are essential 
        for bone health, immunity, and mood regulation.
        `,
        quiz: {
          question: "How can plant-based eaters obtain sufficient vitamin D?",
          options: ["Fortified foods or sunlight", "Only from meat", "No need for vitamin D"],
          answer: "Fortified foods or sunlight"
        }
      },
      {
        lesson: `
        Plant-based diets can improve sleep quality. Nutrients like magnesium, tryptophan, and complex carbohydrates 
        from whole foods support natural sleep cycles.
        `,
        quiz: {
          question: "How do plant-based diets affect sleep?",
          options: ["Support natural sleep cycles", "Disrupt sleep", "No effect"],
          answer: "Support natural sleep cycles"
        }
      },
      {
        lesson: `
        Including a variety of herbs and spices in plant-based meals adds antioxidants and anti-inflammatory compounds, 
        enhancing flavor while promoting long-term health.
        `,
        quiz: {
          question: "What do herbs and spices contribute in plant-based diets?",
          options: ["Antioxidants and anti-inflammatory compounds", "Nothing", "Harm health"],
          answer: "Antioxidants and anti-inflammatory compounds"
        }
      },
      {
        lesson: `
        Plant-based diets encourage mindful eating. Preparing meals and eating with intention improves digestion, 
        satisfaction, and mental well-being.
        `,
        quiz: {
          question: "How does plant-based eating support mindfulness?",
          options: ["Improves digestion and satisfaction", "Reduces mindfulness", "No effect"],
          answer: "Improves digestion and satisfaction"
        }
      },
      {
        lesson: `
        Transitioning to a plant-based diet can reduce the risk of obesity. High-fiber, nutrient-dense foods promote 
        satiety, regulate metabolism, and help maintain healthy body weight.
        `,
        quiz: {
          question: "How does plant-based eating affect body weight?",
          options: ["Reduces risk of obesity", "Increases obesity risk", "No effect"],
          answer: "Reduces risk of obesity"
        }
      },
      {
        lesson: `
        Plant-based diets provide anti-aging benefits. Antioxidants, phytonutrients, and vitamins in plants support 
        skin elasticity, reduce wrinkles, and protect cells from oxidative stress.
        `,
        quiz: {
          question: "How do plant-based diets affect aging?",
          options: ["Support skin health and reduce oxidative stress", "Accelerate aging", "No effect"],
          answer: "Support skin health and reduce oxidative stress"
        }
      },
      {
        lesson: `
        Choosing whole, minimally processed plant foods supports stable energy, prevents cravings, and enhances 
        overall mental clarity throughout the day.
        `,
        quiz: {
          question: "How do whole plant foods affect energy and clarity?",
          options: ["Provide stable energy and mental clarity", "Cause energy crashes", "No effect"],
          answer: "Provide stable energy and mental clarity"
        }
      }
// ✅ Add more lessons here in the future
],

    "Boosting my performance as an athlete": [
      {
    lesson: `
    Plant-based athletes often recover faster due to high antioxidant intake from fruits, vegetables, and nuts. 
    Antioxidants combat exercise-induced oxidative stress, reducing muscle soreness and supporting faster recovery.
    `,
    quiz: {
      question: "Why do plant-based athletes recover faster?",
      options: ["High antioxidant intake reduces muscle soreness", "Lower protein intake slows recovery", "Fewer carbs improve performance"],
      answer: "High antioxidant intake reduces muscle soreness"
    }
  },
  {
    lesson: `
    Vegan protein sources such as lentils, beans, tofu, tempeh, and quinoa provide all essential amino acids 
    when eaten in combination throughout the day, supporting muscle growth and repair.
    `,
    quiz: {
      question: "Which plant foods provide complete amino acids when combined?",
      options: ["Lentils, beans, tofu, tempeh, quinoa", "Candy and soda", "White bread only"],
      answer: "Lentils, beans, tofu, tempeh, quinoa"
    }
  },
  {
    lesson: `
    Iron is critical for endurance athletes to transport oxygen efficiently. Plant-based sources include lentils, beans, 
    spinach, pumpkin seeds, and fortified cereals. Pairing with vitamin C-rich foods improves absorption.
    `,
    quiz: {
      question: "How can plant-based athletes optimize iron absorption?",
      options: ["Pair iron-rich foods with vitamin C", "Eat iron alone", "Iron isn’t important"],
      answer: "Pair iron-rich foods with vitamin C"
    }
  },
  {
    lesson: `
    Omega-3 fatty acids from flaxseeds, chia seeds, walnuts, and algae oil reduce inflammation, 
    support cardiovascular health, and enhance joint mobility for athletes.
    `,
    quiz: {
      question: "What do plant-based omega-3s support in athletes?",
      options: ["Reduce inflammation and support joints", "Increase inflammation", "No effect on performance"],
      answer: "Reduce inflammation and support joints"
    }
  },
  {
    lesson: `
    Adequate carbohydrate intake from whole grains, fruits, and vegetables fuels endurance performance, 
    maintains glycogen stores, and prevents fatigue during high-intensity exercise.
    `,
    quiz: {
      question: "Why are carbohydrates important for athletes?",
      options: ["Fuel performance and maintain glycogen", "Slow down recovery", "Not necessary"],
      answer: "Fuel performance and maintain glycogen"
    }
  },
  {
    lesson: `
    Plant-based diets are naturally rich in nitrates, found in beetroot, spinach, and arugula. Nitrates enhance blood flow, 
    improve oxygen delivery to muscles, and can boost stamina.
    `,
    quiz: {
      question: "How do dietary nitrates support athletic performance?",
      options: ["Improve blood flow and oxygen delivery", "Decrease stamina", "No effect"],
      answer: "Improve blood flow and oxygen delivery"
    }
  },
  {
    lesson: `
    Hydration is crucial for athletes. High-water-content fruits and vegetables like watermelon, cucumber, 
    oranges, and celery contribute to fluid intake and maintain optimal performance.
    `,
    quiz: {
      question: "How do fruits and vegetables support hydration for athletes?",
      options: ["High water content helps maintain performance", "They dehydrate the body", "No effect"],
      answer: "High water content helps maintain performance"
    }
  },
  {
    lesson: `
    Magnesium from nuts, seeds, and leafy greens supports muscle contraction, nerve function, and energy production, 
    helping athletes avoid cramps and fatigue.
    `,
    quiz: {
      question: "Why is magnesium important for athletes?",
      options: ["Supports muscles, nerves, and energy", "Causes fatigue", "No effect"],
      answer: "Supports muscles, nerves, and energy"
    }
  },
  {
    lesson: `
    Plant-based diets provide antioxidants like vitamin C, E, and polyphenols that reduce inflammation and oxidative stress 
    caused by intense exercise, aiding in faster recovery.
    `,
    quiz: {
      question: "How do plant-based antioxidants help athletes?",
      options: ["Reduce exercise-induced inflammation", "Increase stress", "No effect"],
      answer: "Reduce exercise-induced inflammation"
    }
  },
  {
    lesson: `
    Adequate protein timing matters. Consuming plant-based protein within 30–60 minutes post-workout helps 
    muscle protein synthesis and recovery.
    `,
    quiz: {
      question: "Why is protein timing important for plant-based athletes?",
      options: ["Supports muscle synthesis after workouts", "Not important", "Slows recovery"],
      answer: "Supports muscle synthesis after workouts"
    }
  },
  {
    lesson: `
    Creatine, naturally found in meat but also available as a vegan supplement, enhances high-intensity performance, 
    strength, and power in plant-based athletes.
    `,
    quiz: {
      question: "How can vegan athletes get creatine?",
      options: ["Through supplements", "Only from meat", "Not needed"],
      answer: "Through supplements"
    }
  },
  {
    lesson: `
    Calcium from fortified plant milks, tofu, almonds, and leafy greens supports bone health and reduces injury risk, 
    essential for high-impact sports.
    `,
    quiz: {
      question: "Why is calcium important for athletes?",
      options: ["Supports bone health and reduces injuries", "Not necessary", "Only improves muscles"],
      answer: "Supports bone health and reduces injuries"
    }
  },
  {
    lesson: `
    Vitamin D, obtained through sunlight or fortified foods, strengthens bones, muscles, and immunity, 
    contributing to consistent performance.
    `,
    quiz: {
      question: "How does vitamin D support athletes?",
      options: ["Strengthens bones, muscles, and immunity", "Weakens performance", "No effect"],
      answer: "Strengthens bones, muscles, and immunity"
    }
  },
  {
    lesson: `
    Potassium from bananas, sweet potatoes, and leafy greens regulates fluid balance and prevents muscle cramps 
    during prolonged exercise.
    `,
    quiz: {
      question: "Why is potassium important for athletes?",
      options: ["Prevents cramps and regulates fluids", "Causes cramping", "No effect"],
      answer: "Prevents cramps and regulates fluids"
    }
  },
  {
    lesson: `
    A variety of colorful vegetables ensures intake of polyphenols, carotenoids, and flavonoids, 
    which reduce exercise-induced oxidative stress and promote cardiovascular health.
    `,
    quiz: {
      question: "What benefits do colorful vegetables provide for athletes?",
      options: ["Reduce oxidative stress and support heart health", "No effect", "Increase oxidative stress"],
      answer: "Reduce oxidative stress and support heart health"
    }
  },
  {
    lesson: `
    Adequate sleep is critical for recovery. Plant-based foods high in magnesium and tryptophan can support better 
    sleep quality and muscle repair overnight.
    `,
    quiz: {
      question: "How do plant-based foods affect athlete sleep?",
      options: ["Support recovery and quality sleep", "Disrupt sleep", "No effect"],
      answer: "Support recovery and quality sleep"
    }
  },
  {
    lesson: `
    Beta-alanine, naturally in some plant foods or as a vegan supplement, improves endurance, buffers lactic acid, 
    and delays fatigue during high-intensity exercise.
    `,
    quiz: {
      question: "What does beta-alanine do for athletes?",
      options: ["Delays fatigue and buffers lactic acid", "Causes fatigue", "No effect"],
      answer: "Delays fatigue and buffers lactic acid"
    }
  },
  {
    lesson: `
    Tart cherry juice contains anthocyanins that reduce muscle soreness and inflammation after strenuous workouts, 
    helping plant-based athletes recover faster.
    `,
    quiz: {
      question: "How does tart cherry juice help recovery?",
      options: ["Reduces muscle soreness and inflammation", "Increases soreness", "No effect"],
      answer: "Reduces muscle soreness and inflammation"
    }
  },
  {
    lesson: `
    Beetroot and nitrate-rich vegetables enhance endurance by improving oxygen efficiency, lowering blood pressure, 
    and boosting performance in both aerobic and anaerobic exercise.
    `,
    quiz: {
      question: "How do nitrate-rich foods like beetroot help athletes?",
      options: ["Improve oxygen efficiency and endurance", "Decrease performance", "No effect"],
      answer: "Improve oxygen efficiency and endurance"
    }
  },
  {
    lesson: `
    Adequate carbohydrate and protein combination post-workout supports glycogen replenishment and 
    muscle repair, optimizing recovery and readiness for the next training session.
    `,
    quiz: {
      question: "Why combine carbs and protein post-workout?",
      options: ["Replenish glycogen and repair muscles", "Reduce recovery", "No effect"],
      answer: "Replenish glycogen and repair muscles"
    }
  },
  {
    lesson: `
    Electrolytes like sodium, potassium, and magnesium lost during sweat are crucial for endurance athletes. 
    Coconut water, bananas, and leafy greens help maintain balance and prevent fatigue.
    `,
    quiz: {
      question: "How do electrolytes help athletes?",
      options: ["Prevent fatigue and maintain balance", "Cause cramping", "No effect"],
      answer: "Prevent fatigue and maintain balance"
    }
  },
  {
    lesson: `
    Anti-inflammatory foods like turmeric, ginger, and berries reduce delayed onset muscle soreness (DOMS) 
    and accelerate post-exercise recovery.
    `,
    quiz: {
      question: "How do anti-inflammatory plant foods help athletes?",
      options: ["Reduce DOMS and accelerate recovery", "Increase soreness", "No effect"],
      answer: "Reduce DOMS and accelerate recovery"
    }
  },
  {
    lesson: `
    High-fiber plant foods improve digestive health and nutrient absorption, ensuring athletes can efficiently 
    fuel their bodies for performance.
    `,
    quiz: {
      question: "Why is fiber important for athletes?",
      options: ["Supports digestion and nutrient absorption", "Hinders nutrient uptake", "No effect"],
      answer: "Supports digestion and nutrient absorption"
    }
  },
  {
    lesson: `
    Protein-rich seeds and nuts like pumpkin seeds, almonds, and sunflower seeds provide micronutrients like zinc 
    and selenium, supporting immunity and reducing illness risk during training.
    `,
    quiz: {
      question: "How do seeds and nuts support athlete performance?",
      options: ["Provide zinc and selenium to support immunity", "Reduce immunity", "No effect"],
      answer: "Provide zinc and selenium to support immunity"
    }
  },
  {
    lesson: `
    Plant-based diets are naturally anti-inflammatory, which can reduce chronic joint pain and inflammation, 
    supporting long-term athletic health and longevity.
    `,
    quiz: {
      question: "How do plant-based diets affect long-term joint health?",
      options: ["Reduce inflammation and joint pain", "Increase inflammation", "No effect"],
      answer: "Reduce inflammation and joint pain"
    }
  },
  {
    lesson: `
    Adequate hydration combined with antioxidant-rich plant foods enhances thermoregulation, preventing overheating 
    and maintaining performance during prolonged exercise.
    `,
    quiz: {
      question: "How do hydration and plant antioxidants support athletes?",
      options: ["Prevent overheating and maintain performance", "Cause dehydration", "No effect"],
      answer: "Prevent overheating and maintain performance"
    }
  },
  {
    lesson: `
    Mindful eating of plant-based foods supports digestion, nutrient absorption, and mental focus, which can enhance 
    overall athletic performance.
    `,
    quiz: {
      question: "How does mindful plant-based eating affect performance?",
      options: ["Improves focus and nutrient absorption", "Reduces focus", "No effect"],
      answer: "Improves focus and nutrient absorption"
    }
  },
  {
    lesson: `
    Prebiotics found in garlic, onions, and asparagus nourish gut bacteria, supporting immunity, 
    energy metabolism, and reducing gastrointestinal issues in athletes.
    `,
    quiz: {
      question: "What do prebiotics in plant foods support?",
      options: ["Gut health, immunity, and energy", "Cause gut issues", "No effect"],
      answer: "Gut health, immunity, and energy"
    }
  },
  {
    lesson: `
    Plant-based diets can help athletes maintain healthy body composition. Nutrient-dense, lower-calorie foods 
    support fat loss while preserving lean muscle mass.
    `,
    quiz: {
      question: "How do plant-based diets affect body composition?",
      options: ["Support fat loss and preserve lean muscle", "Cause muscle loss", "No effect"],
      answer: "Support fat loss and preserve lean muscle"
    }
   }
// ✅ Add more lessons here in the future
  ]
 }
};

//------ Health issues -------
//------ Health issues -------
//------ Health issues -------
//------ Health issues -------

export const HealthIssuesPool = {
  health: [
    // HEART DISEASE LESSON 1
    {
      issue: "Heart disease",
      title: "Lesson 1: How Heart Disease Begins — The Role of LDL Cholesterol",
      content: `
Heart disease doesn’t start with a heart attack — it begins silently, years earlier, inside your arteries.

Your blood carries cholesterol, a waxy substance that travels in two main forms:
- **LDL (Low-Density Lipoprotein)**: Often called “bad” cholesterol. When too much LDL circulates in your blood, it sticks to artery walls, forming plaque.
- **HDL (High-Density Lipoprotein)**: The “good” cholesterol. HDL helps remove excess LDL from the bloodstream and transports it to the liver for disposal.

The problem begins when **saturated fats** — mainly from meat, cheese, butter, and eggs — raise LDL levels. Over time, these LDL particles oxidize and damage the artery lining. 
The immune system responds by sending white blood cells to “clean up” the mess, but that only creates more buildup. This process, called *atherosclerosis*, narrows arteries and restricts blood flow to the heart.

Plant-based foods contain **no cholesterol and very little saturated fat**, so they don’t trigger this buildup. 
They also contain soluble fiber, which acts like a sponge in the intestines, soaking up excess cholesterol and carrying it out of the body.

In short: animal fats raise LDL; plants lower it. 
Every plant-based meal is a direct act of heart protection.
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

    // HEART DISEASE LESSON 2
    {
      issue: "Heart disease",
      title: "Lesson 2: How Plant-Based Diets Lower LDL and Heal Arteries",
      content: `
When you switch to a plant-based diet, LDL levels drop — often dramatically.

Why? Because:
- Plants contain **no dietary cholesterol**.
- They’re naturally low in **saturated fat**.
- Their **fiber** binds to cholesterol and removes it through digestion.

Clinical studies show that within **3–4 weeks**, people who reduce animal products can lower LDL cholesterol by **up to 30%**. 
That’s comparable to some cholesterol-lowering drugs, but without side effects.

Dr. Caldwell Esselstyn, a cardiologist at the Cleveland Clinic, treated patients with severe heart disease who adopted a whole-food, plant-based diet. 
Not only did their cholesterol drop, but angiograms showed that their **blocked arteries began to open up**.

In other words: your body is capable of healing itself when given the right food.
      `,
      quiz: {
        question: "What happens to LDL cholesterol when people eat mostly plants?",
        options: [
          "It increases",
          "It stays the same",
          "It decreases significantly",
          "It becomes dangerous"
        ],
        answer: 2
      }
    },

    // HEART DISEASE LESSON 3
    {
      issue: "Heart disease",
      title: "Lesson 3: The Silent Inflammation Inside Arteries",
      content: `
LDL buildup is only half the story — the other half is **inflammation**.

When LDL particles damage artery walls, the body responds as if fighting an infection. 
It sends immune cells to the area, which create a sticky plaque. This inflamed plaque can rupture, forming a blood clot — and that’s what causes most heart attacks.

Certain foods trigger more inflammation than others:
- **Processed meats**, fried foods, and refined oils worsen it.
- **Fruits, vegetables, nuts, and whole grains** reduce it.

Plant-based diets are naturally anti-inflammatory because they’re rich in antioxidants — molecules that neutralize “free radicals” (unstable compounds that damage cells). 
Antioxidants like vitamin C, E, and polyphenols help your arteries relax and stay elastic.

Think of inflammation like a small fire inside your arteries. 
Plants are the water that puts it out.
      `,
      quiz: {
        question: "What causes inflammation in the arteries?",
        options: [
          "Low LDL levels",
          "Antioxidants from fruits",
          "High intake of animal fats and processed foods",
          "Regular exercise"
        ],
        answer: 2
      }
    },

    // HEART DISEASE LESSON 4
    {
      issue: "Heart disease",
      title: "Lesson 4: The Hidden Power of Nitric Oxide",
      content: `
Inside every artery, there’s a thin layer of cells called the **endothelium**. 
These cells produce **nitric oxide (NO)** — a molecule that tells your blood vessels to relax and expand, improving circulation and lowering blood pressure.

Animal-based diets reduce nitric oxide production because they cause oxidative stress and damage the endothelium. 
Plant-based diets, however, boost nitric oxide naturally. Leafy greens like spinach, kale, and arugula are especially powerful because they’re rich in nitrates that convert to nitric oxide in the body.

Dr. Esselstyn called nitric oxide “the miracle molecule.” Without it, arteries stiffen and blood pressure rises. With it, blood flows smoothly and effortlessly.

So, the next time you eat a salad — know that you’re literally expanding your blood vessels with every bite.
      `,
      quiz: {
        question: "What does nitric oxide do for your arteries?",
        options: [
          "Narrows arteries and increases pressure",
          "Helps arteries relax and improve blood flow",
          "Raises cholesterol levels",
          "Causes inflammation"
        ],
        answer: 1
      }
    },

    // HEART DISEASE LESSON 5
    {
      issue: "Heart disease",
      title: "Lesson 5: Real People, Real Recovery",
      content: `
Scientific evidence is powerful — but human stories bring it to life.

Meet Linda, a 62-year-old woman who suffered from chest pain and fatigue. 
Her doctor found a 70% blockage in one artery and suggested surgery. Instead, she chose to adopt a plant-based diet.

Within six months, her cholesterol dropped from 250 to 170, her blood pressure normalized, and she walked up stairs again without pain. 
A follow-up scan showed improved blood flow — proof of healing from the inside out.

Thousands have similar stories. Some have even canceled bypass surgeries after months of whole-food, plant-based eating. 
It’s not magic; it’s biology. 
When the body receives pure, nourishing foods, it knows how to repair itself.
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

    // HEART DISEASE LESSON 6
    {
      issue: "Heart disease",
      title: "Lesson 6: Beyond Diet — Movement and Stress Management",
      content: `
Food is the foundation, but it’s not the whole story. 
A healthy heart also needs movement, rest, and emotional balance.

**Exercise:** Even gentle activity — 30 minutes of walking, cycling, or yoga — strengthens your heart muscle and improves circulation. 
Physical movement helps HDL (“good” cholesterol) rise, which clears excess LDL from the bloodstream.

**Stress management:** Chronic stress raises blood pressure and inflammation. 
Techniques like meditation, deep breathing, or spending time in nature can reduce these effects dramatically. 
Dr. Ornish’s heart disease reversal program included meditation and community support as essential components.

You don’t need perfection. You need consistency — small actions repeated daily build lifelong strength.
      `,
      quiz: {
        question: "How does regular exercise help your heart?",
        options: [
          "Raises LDL cholesterol",
          "Decreases HDL cholesterol",
          "Strengthens the heart and improves circulation",
          "Increases inflammation"
        ],
        answer: 2
      }
    },

    // HEART DISEASE LESSON 7
    {
      issue: "Heart disease",
      title: "Lesson 7: Your 7-Day Heart Healing Action Plan",
      content: `
Let’s bring everything together with a simple, practical plan you can start right now.

**Day 1–2:** Eat plants for breakfast — oatmeal, fruit, or avocado toast.  
**Day 3:** Add a salad or vegetable soup for lunch.  
**Day 4:** Replace red meat with beans or lentils.  
**Day 5:** Try a plant-based dinner and note how light you feel.  
**Day 6:** Move your body — a 20-minute walk or a dance break counts.  
**Day 7:** Reflect and breathe — your heart is already healing.

Within one week, many people report better energy, digestion, and mood. Within a month, measurable improvements in cholesterol and blood pressure appear.

You are not fighting your body; you’re *helping it remember how to heal*. 
Each plant-based choice is an act of self-love — and every heartbeat thanks you for it.
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
  

    // === HIGH CHOLESTEROL ===
{
  issue: "High cholesterol",
  title: "Lesson 1: Understanding Cholesterol — The Good, the Bad, and the Balance",
  content: `
Cholesterol itself isn’t the enemy — your body actually needs it. It’s a waxy substance used to build cells and hormones. 
The problem arises when there’s *too much of the wrong type* in your bloodstream.

There are two main types of cholesterol:
- **LDL (Low-Density Lipoprotein)** — often called “bad cholesterol.” It carries cholesterol to your arteries, where it can build up as plaque.
- **HDL (High-Density Lipoprotein)** — “good cholesterol.” It helps transport excess cholesterol away from arteries to the liver, where it’s broken down.

When your LDL rises too high, it begins to damage the artery walls. That’s how blockages start — the same process that leads to heart disease and stroke.

What raises LDL? Saturated fats and trans fats — mainly found in **meat, dairy, eggs, butter, and processed foods**. 
What lowers it? **Soluble fiber**, antioxidants, and unsaturated fats — mostly from **oats, fruits, beans, seeds, and vegetables**.

You don’t have to “cut everything” at once. Every meal you replace with plants helps your body rebalance naturally. 
Within weeks, your blood test can start to reflect the change.
  `,
  quiz: {
    question: "Which type of cholesterol can build up in arteries and cause blockages?",
    options: [
      "HDL cholesterol",
      "LDL cholesterol",
      "Dietary cholesterol from plants",
      "No cholesterol at all"
    ],
    answer: 1
  }
},

{
  issue: "High cholesterol",
  title: "Lesson 2: How Animal Products Affect Cholesterol Levels",
  content: `
Animal products are the main source of **saturated fats** and **dietary cholesterol**. While your liver produces all the cholesterol your body needs, eating meat, eggs, and dairy adds much more — leading to an excess that the body struggles to eliminate.

Here’s what happens:
1. Saturated fats increase your liver’s LDL production.
2. Cholesterol from animal foods adds to your blood levels.
3. Excess LDL cholesterol sticks to arterial walls, forming plaque.

Meanwhile, plant foods contain **zero cholesterol**. Even better, their fiber helps flush out existing cholesterol through digestion.  
Studies show that people who switch from a meat-heavy diet to a plant-based one can lower LDL cholesterol by **up to 30% in 4–6 weeks**.

Replacing butter with avocado or olive oil, dairy milk with oat milk, and meat with lentils or beans can bring results faster than most expect.

Your body isn’t broken — it’s just waiting for you to remove what’s holding it back.
  `,
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
  title: "Lesson 3: The Power of Soluble Fiber",
  content: `
Soluble fiber acts like a natural sponge for cholesterol. It binds to LDL particles in the intestines and carries them out of the body before they can enter your bloodstream.

Foods rich in soluble fiber include:
- **Oats, barley, and quinoa**
- **Beans, lentils, and peas**
- **Apples, berries, and citrus fruits**
- **Flaxseed and chia seeds**

The more soluble fiber you eat, the more cholesterol you remove.  
Studies show that eating just **5–10 grams of soluble fiber per day** can reduce LDL cholesterol by **5–10%**.

Unlike cholesterol-lowering medication, fiber comes with bonus benefits — it improves gut health, balances blood sugar, and helps you feel full longer.

Start small: add oats to breakfast, beans to lunch, and fruit to snacks. Each step is cumulative — you’re feeding your body’s ability to clean itself naturally.
  `,
  quiz: {
    question: "How does soluble fiber help reduce cholesterol?",
    options: [
      "It increases cholesterol production",
      "It binds to cholesterol and removes it through digestion",
      "It adds more LDL to the bloodstream",
      "It stops the liver from working"
    ],
    answer: 1
  }
},

{
  issue: "High cholesterol",
  title: "Lesson 4: Replace Animal Fats with Plant Power",
  content: `
Replacing saturated fats with unsaturated plant fats is one of the most effective ways to lower LDL cholesterol and raise HDL (“good”) cholesterol.

Healthy fat sources include:
- **Avocado**
- **Nuts and seeds**
- **Olive oil, flaxseed oil, and walnut oil**

These fats are rich in omega-3 and omega-6 fatty acids, which help reduce inflammation and maintain healthy blood vessels.  
When you swap butter for olive oil or a beef burger for a lentil burger, your body notices almost immediately.

In one 2018 study, participants who replaced 5% of their saturated fat intake with plant-based oils lowered their heart disease risk by **25%**.

It’s not about deprivation — it’s about smart replacement. Each swap supports cleaner blood and stronger arteries.
  `,
  quiz: {
    question: "Which of these is a healthy replacement for animal fats?",
    options: [
      "Butter and cream",
      "Avocado and olive oil",
      "Processed cheese",
      "Fried meat"
    ],
    answer: 1
  }
},

{
  issue: "High cholesterol",
  title: "Lesson 5: The Role of Exercise and Lifestyle",
  content: `
While diet is the foundation of cholesterol balance, lifestyle habits also play a major role.

**Regular exercise** increases HDL (“good”) cholesterol and helps clear LDL from your bloodstream.  
Just 30 minutes of brisk walking or cycling per day can make a measurable difference within weeks.

**Stress** also impacts cholesterol. Chronic stress triggers cortisol, which increases LDL and triglycerides. Practicing mindfulness, journaling, or yoga helps restore balance.

**Sleep** matters too — your liver processes fats and cholesterol most effectively during deep rest.

When combined with plant-based eating, these small lifestyle choices amplify your results, giving your heart the best possible environment to thrive.
  `,
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
  title: "Lesson 6: Real-Life Transformations and What’s Possible",
  content: `
Let’s bring this to life with real stories.

Dr. Dean Ornish conducted a groundbreaking study showing that patients who followed a low-fat, plant-based diet not only reduced their cholesterol but also **reversed heart disease** — without medication.

Participants reported more energy, clearer skin, and improved mood within weeks. After one year, their average LDL dropped by **37%** — purely from food and lifestyle changes.

People often say, “It runs in my family.” But genes load the gun — lifestyle pulls the trigger. Even if you have a family history of high cholesterol, your daily choices can silence those genes.

You’re not powerless. Every plant-based meal is a message to your body: *I’m helping you heal.*
  `,
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
// === HIGH BLOOD PRESSURE ===
{
  issue: "High blood pressure",
  title: "Lesson 1: Understanding Blood Pressure — What It Means for Your Heart",
  content: `
Blood pressure measures the force of blood pushing against the walls of your arteries.  
When it’s too high — called **hypertension** — your arteries, heart, and organs endure extra stress, increasing the risk of heart attack, stroke, and kidney disease.

Two numbers matter:
- **Systolic (top number):** Pressure when your heart beats.  
- **Diastolic (bottom number):** Pressure when your heart rests between beats.

High blood pressure often develops silently, with few symptoms, but it damages arteries over time.  
The primary dietary culprits are **excess sodium** (mostly from processed foods, cheese, and cured meats) and **saturated fat** from meat and dairy.  
Plant-based diets help in two ways:
1. **Lower sodium naturally** — fresh vegetables, fruits, and legumes are low in salt.  
2. **Provide potassium** — bananas, sweet potatoes, and spinach help balance fluids and relax blood vessels.

Even modest changes — replacing bacon with beans, or cheese with avocado — can lower blood pressure within weeks.
  `,
  quiz: {
    question: "Which mineral in plant foods helps relax blood vessels and lower blood pressure?",
    options: [
      "Calcium",
      "Potassium",
      "Iron",
      "Zinc"
    ],
    answer: 1
  }
},

{
  issue: "High blood pressure",
  title: "Lesson 2: Sodium — The Hidden Blood Pressure Trigger",
  content: `
Most people consume far more sodium than needed, often without realizing it.  
Processed foods, canned soups, bread, cheese, deli meats, and restaurant meals are loaded with hidden salt.

Excess sodium causes your body to retain water, increasing the volume of blood and the pressure on arterial walls.  
This stress gradually stiffens arteries, making the heart work harder and raising risk for stroke and heart disease.

Switching to **fresh, whole plant foods** dramatically reduces sodium intake.  
Tips for daily changes:
- Use **herbs, garlic, and lemon** instead of salt.  
- Choose **unsalted nuts and seeds**.  
- Eat **home-cooked meals** whenever possible.  

Even a **reduction of 1,500–2,000 mg of sodium per day** can reduce systolic blood pressure by 5–10 mmHg in just a few weeks.
  `,
  quiz: {
    question: "What effect does excess sodium have on blood pressure?",
    options: [
      "It lowers blood pressure",
      "It increases blood pressure by retaining water",
      "It has no effect",
      "It strengthens arteries"
    ],
    answer: 1
  }
},

{
  issue: "High blood pressure",
  title: "Lesson 3: Potassium — Your Natural Blood Pressure Regulator",
  content: `
Potassium is a superhero mineral for controlling blood pressure. It helps balance the effects of sodium and relaxes arterial walls.  

Top plant sources include:
- **Bananas and sweet potatoes**  
- **Spinach, kale, and Swiss chard**  
- **Beans and lentils**  
- **Avocado and pumpkin seeds**

Studies show that diets high in potassium can lower systolic blood pressure by **4–6 mmHg** and reduce the risk of stroke by 24%.  

When you swap a salty sandwich for a bowl of lentil soup with leafy greens, you’re giving your body tools to fight hypertension naturally.  
Pair it with fiber-rich foods — they amplify the benefits, helping the heart and kidneys stay healthy.
  `,
  quiz: {
    question: "Which of these foods is a rich source of potassium to help lower blood pressure?",
    options: [
      "Chips",
      "Bananas and spinach",
      "Cheese",
      "Soda"
    ],
    answer: 1
  }
},

{
  issue: "High blood pressure",
  title: "Lesson 4: Plant-Based Diets and Blood Pressure — Evidence from Studies",
  content: `
Multiple studies show that people who adopt a **whole-food, plant-based diet** experience significant reductions in blood pressure.  

Why it works:
1. **Low sodium:** Fresh plant foods are naturally low in salt.  
2. **High potassium and magnesium:** Relax arteries and improve circulation.  
3. **High antioxidants and fiber:** Reduce inflammation and oxidative stress.

In one randomized study, participants with mild hypertension who followed a plant-based diet for 12 weeks saw an average **drop of 10 mmHg systolic and 8 mmHg diastolic**, without medication.  

Plant-based diets aren’t just preventive — they’re restorative.  
Even small daily changes, like replacing cheese with beans or fried foods with roasted vegetables, have measurable effects.
  `,
  quiz: {
    question: "What is one reason plant-based diets help lower blood pressure?",
    options: [
      "They increase sodium intake",
      "They are high in potassium and fiber",
      "They reduce potassium",
      "They increase saturated fat"
    ],
    answer: 1
  }
},

{
  issue: "High blood pressure",
  title: "Lesson 5: Lifestyle Beyond Food — Movement, Sleep, and Stress",
  content: `
Diet is the cornerstone, but lifestyle amplifies results.

**Exercise:** Daily movement strengthens the heart, improves circulation, and helps maintain healthy blood pressure. Even 30 minutes of walking or cycling counts.

**Stress reduction:** Chronic stress raises cortisol, which increases blood pressure. Meditation, deep breathing, journaling, and connecting with supportive friends help mitigate this effect.

**Sleep:** Inadequate sleep disrupts hormonal balance, leading to higher blood pressure. 7–9 hours of restorative sleep per night is ideal.

Combining plant-based meals with exercise, mindfulness, and quality sleep gives the heart the best environment to heal and thrive.
  `,
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
  title: "Lesson 6: Small Steps, Big Impact — Your 7-Day Action Plan",
  content: `
Here’s a simple 7-day plan to start lowering blood pressure naturally:

**Day 1–2:** Swap processed snacks for fruits, vegetables, and nuts.  
**Day 3:** Add a high-potassium food to every meal — spinach, bananas, beans.  
**Day 4:** Replace dairy or meat with plant-based alternatives.  
**Day 5:** Reduce salt — use herbs and lemon for flavor.  
**Day 6:** Move your body — walk, cycle, or yoga.  
**Day 7:** Reflect, journal, and breathe — notice how your energy and focus feel.

Even one week of consistent effort can produce noticeable changes in blood pressure and mood.  
Each plant-powered choice is a step toward a stronger, healthier heart.
  `,
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
// === TYPE 2 DIABETES ===
{
  issue: "Type 2 diabetes",
  title: "Lesson 1: Understanding Type 2 Diabetes — How Blood Sugar Works",
  content: `
Type 2 diabetes occurs when your body becomes resistant to insulin, the hormone responsible for moving sugar from your blood into your cells.  
When insulin doesn’t work efficiently, blood sugar levels rise, leading to fatigue, weight gain, and increased risk of heart disease, kidney issues, and nerve damage.

Major contributors to high blood sugar include **refined sugars, processed foods, and animal-based products**, which often spike glucose levels and promote insulin resistance.

Plant-based diets rich in **whole grains, legumes, fruits, and vegetables** release sugar slowly into the bloodstream, stabilizing energy and improving insulin sensitivity.

The good news: even small dietary changes can have a measurable effect. Replacing sugary drinks with water or swapping white bread for lentils can lower blood sugar within days.
  `,
  quiz: {
    question: "What happens in type 2 diabetes?",
    options: [
      "Insulin moves sugar more efficiently",
      "The body becomes resistant to insulin, raising blood sugar",
      "Blood sugar drops dangerously low",
      "Insulin production stops completely"
    ],
    answer: 1
  }
},

{
  issue: "Type 2 diabetes",
  title: "Lesson 2: Low-Glycemic Plant Foods — Your Blood Sugar Allies",
  content: `
Not all carbohydrates are created equal. **Low-glycemic foods** release glucose slowly, preventing spikes in blood sugar and insulin.  

Key low-glycemic plant foods include:
- **Legumes:** beans, lentils, chickpeas  
- **Whole grains:** quinoa, steel-cut oats, brown rice  
- **Non-starchy vegetables:** leafy greens, broccoli, peppers  

Studies show that people who follow a low-glycemic, plant-focused diet reduce their HbA1c (a measure of long-term blood sugar) by **0.5–1% within 12 weeks**, which is a clinically significant improvement.

Simple swaps:  
- Replace white rice with lentils or quinoa.  
- Choose a bean salad over potato chips.  
- Snack on fruits instead of candy.

Each choice teaches your body to handle glucose more efficiently, lowering long-term risk.
  `,
  quiz: {
    question: "Which of these foods is low-glycemic and helps stabilize blood sugar?",
    options: [
      "Whole grains, legumes, and vegetables",
      "Candy and soda",
      "White bread and pastries",
      "Processed meats"
    ],
    answer: 0
  }
},

{
  issue: "Type 2 diabetes",
  title: "Lesson 3: The Sugar Trap — How Sweet Drinks Affect Your Body",
  content: `
Sugary drinks, even “healthy” fruit juices, flood your bloodstream with glucose. This causes your pancreas to overproduce insulin, which over time leads to insulin resistance.

By swapping these beverages for water, sparkling water, or unsweetened plant milk, you reduce sugar spikes and give your pancreas a break.  

Additional strategies:  
- Flavor water with lemon, cucumber, or mint.  
- Keep fruit handy for natural sweetness instead of candy.  
- Pair carbohydrates with fiber-rich foods — for example, fruit with nuts — to slow sugar absorption.

Real-world results: people who replaced soda and sweetened drinks with water saw **average fasting blood sugar drop by 10–15 mg/dL** in a few weeks.
  `,
  quiz: {
    question: "What should sugary drinks be replaced with for better insulin sensitivity?",
    options: [
      "Water",
      "Energy drinks",
      "Beer",
      "Milkshakes"
    ],
    answer: 0
  }
},

{
  issue: "Type 2 diabetes",
  title: "Lesson 4: Fiber — Your Secret Weapon Against Diabetes",
  content: `
Fiber slows digestion, stabilizes blood sugar, and feeds your gut microbiome — all of which help prevent insulin spikes.

**Sources of beneficial fiber:**
- Beans and lentils  
- Oats and barley  
- Vegetables like carrots, broccoli, and leafy greens  
- Fruits including berries, apples, and pears

In a 2019 study, people who increased fiber intake by 15–20 grams per day reduced their HbA1c by 0.4% on average.  
Fiber also promotes satiety, helping prevent overeating and weight gain, which are major risk factors for type 2 diabetes.

Tip: Gradually increase fiber intake to avoid digestive discomfort. Add beans to salads, start your day with oatmeal, and snack on fruit.
  `,
  quiz: {
    question: "Why is fiber important for people with type 2 diabetes?",
    options: [
      "It spikes blood sugar",
      "It slows digestion and stabilizes blood sugar",
      "It raises insulin resistance",
      "It provides no benefit"
    ],
    answer: 1
  }
},

{
  issue: "Type 2 diabetes",
  title: "Lesson 5: Weight Management and Plant-Based Nutrition",
  content: `
Maintaining a healthy weight is one of the most effective ways to prevent and manage type 2 diabetes.  
Plant-based diets are naturally lower in calories and higher in fiber, which helps control appetite and reduce body fat.

Even a modest **5–10% reduction in body weight** can significantly improve insulin sensitivity.  
Combine this with:
- Daily movement (walking, yoga, cycling)  
- Balanced meals with protein from beans, lentils, tofu  
- Reduced intake of animal fats and processed foods  

Every plant-based meal becomes a step toward better blood sugar control, more energy, and reduced diabetes complications.
  `,
  quiz: {
    question: "How does a plant-based diet help with type 2 diabetes?",
    options: [
      "By increasing blood sugar spikes",
      "By providing fiber, stabilizing blood sugar, and supporting weight management",
      "By reducing insulin sensitivity",
      "By adding more saturated fat"
    ],
    answer: 1
  }
},

{
  issue: "Type 2 diabetes",
  title: "Lesson 6: Real-Life Stories — People Who Reversed Blood Sugar Problems",
  content: `
Dr. Neal Barnard and colleagues have shown that people who switch to a low-fat, plant-based diet can **reverse type 2 diabetes**, sometimes eliminating medications entirely.

One participant, overweight and newly diagnosed, started replacing meat with beans and vegetables, cutting out sugary drinks, and walking 30 minutes daily.  
Within 3 months:
- Fasting glucose dropped from 160 mg/dL to 110 mg/dL  
- HbA1c dropped by 1.2%  
- Energy levels and mood improved dramatically

These stories show that diabetes is not a life sentence.  
With knowledge, small changes, and consistency, your body can regain its natural ability to regulate blood sugar.
  `,
  quiz: {
    question: "What is possible with a low-fat, plant-based diet for type 2 diabetes?",
    options: [
      "Reversing diabetes and reducing medications",
      "Worsening blood sugar control",
      "No measurable effect",
      "Requiring more insulin injections"
    ],
    answer: 0
  }
},
// === OBESITY ===
{
  issue: "Obesity",
  title: "Lesson 1: Understanding Obesity — More Than Just Weight",
  content: `
Obesity is not simply about appearance — it’s a medical condition that increases the risk of type 2 diabetes, heart disease, certain cancers, joint problems, and even mental health challenges.  

Excess weight often comes from **calorie-dense, nutrient-poor foods**, especially those rich in saturated fat and sugar, like meat, dairy, fried foods, and processed snacks.  

Plant-based diets provide high-volume, low-calorie foods that **fill your stomach without overloading your body with fat and sugar**.  
By choosing vegetables, fruits, whole grains, and legumes, you naturally reduce calorie intake while supplying essential nutrients, fiber, and antioxidants.

Even small, consistent dietary changes can produce measurable weight loss and improve overall health.
  `,
  quiz: {
    question: "What is obesity primarily linked to?",
    options: [
      "Excess calories and nutrient-poor foods",
      "Only genetics",
      "Drinking water",
      "Eating vegetables"
    ],
    answer: 0
  }
},

{
  issue: "Obesity",
  title: "Lesson 2: Portion Control — Eating Mindfully",
  content: `
Portion control is a simple but powerful tool in weight management.  

Even healthy plant foods can contribute to weight gain if eaten in excessive amounts, so focus on **mindful eating**:
- Listen to your hunger cues  
- Serve meals on smaller plates  
- Eat slowly, savoring each bite  
- Stop when you feel satisfied, not stuffed  

Combining portion control with plant-based nutrition creates a synergy: you feel full, energized, and satisfied without overloading on calories.

Remember, the goal isn’t restriction — it’s balance. You can enjoy variety while giving your body exactly what it needs.
  `,
  quiz: {
    question: "What is an effective strategy to prevent overeating?",
    options: [
      "Mindful eating and portion control",
      "Eating as fast as possible",
      "Skipping meals regularly",
      "Only drinking juice"
    ],
    answer: 0
  }
},

{
  issue: "Obesity",
  title: "Lesson 3: Exercise — Your Ally in Weight Management",
  content: `
Physical activity is essential for long-term weight management and overall health.  

Exercise helps:
- Burn calories  
- Improve metabolism  
- Preserve lean muscle mass  
- Reduce stress and improve mood  

You don’t need a gym membership — walking, cycling, dancing, or even stretching at home counts.  
Combining exercise with a plant-based diet creates an environment where fat is burned efficiently, energy improves, and cravings decrease.

Studies show that people who adopt both healthy eating and regular activity are **2–3 times more likely** to achieve sustainable weight loss than those relying on diet alone.
  `,
  quiz: {
    question: "How does exercise help in weight management?",
    options: [
      "It burns calories and improves metabolism",
      "It increases fat storage",
      "It is unnecessary if you eat vegetables",
      "It reduces muscle mass"
    ],
    answer: 0
  }
},

{
  issue: "Obesity",
  title: "Lesson 4: Reduce Processed Foods and Animal Products",
  content: `
Processed foods and animal products are high in **saturated fats, cholesterol, and empty calories**. They often lead to overeating because they are energy-dense but not filling.  

Replacing these foods with **whole plant foods** helps:
- Reduce calorie intake naturally  
- Increase fiber for satiety  
- Improve gut health  
- Lower inflammation  

For example:
- Swap burgers for bean-based patties  
- Replace cheese with avocado or hummus  
- Snack on fruit instead of chips  

These small changes can reduce weight gradually and improve health markers like blood pressure, cholesterol, and blood sugar.
  `,
  quiz: {
    question: "Why is replacing animal products with plant foods helpful for weight management?",
    options: [
      "Plant foods are calorie-dense and cause weight gain",
      "They increase saturated fat intake",
      "Plant foods reduce calories, increase fiber, and promote satiety",
      "They contain no nutrients"
    ],
    answer: 2
  }
},

{
  issue: "Obesity",
  title: "Lesson 5: Building Sustainable Habits",
  content: `
Sustainable weight loss comes from **long-term habit changes**, not extreme diets or temporary fixes.  

Focus on small, achievable goals:
- Eat more vegetables and legumes  
- Drink water instead of sugary drinks  
- Move your body daily  
- Cook at home whenever possible  

Consistency matters more than perfection. Each plant-based meal, walk, or mindful snack is a step toward a healthier, lighter, and more energetic life.

Remember: your body responds to repeated positive actions. Over time, these habits become automatic, making weight management effortless.
  `,
  quiz: {
    question: "What is the key to sustainable weight loss?",
    options: [
      "Extreme diets and fasting",
      "Consistent healthy habits",
      "Skipping meals entirely",
      "Eating only fruit for weeks"
    ],
    answer: 1
  }
},

{
  issue: "Obesity",
  title: "Lesson 6: Success Stories — Real People, Real Change",
  content: `
Many people have transformed their lives through plant-based nutrition and lifestyle changes.  

Example: A participant in a 12-week plant-based program lost **12 kg**, improved blood sugar levels, and reported higher energy.  
He replaced processed foods with beans, vegetables, and whole grains, walked daily, and practiced mindful eating.  

These results show that **long-term success is possible without extreme diets**.  
Every plant-powered choice, each small walk, and every mindful bite adds up. Change is gradual, but it’s sustainable — and the benefits go beyond weight, improving heart, gut, and metabolic health.
  `,
  quiz: {
    question: "What do success stories show about plant-based weight management?",
    options: [
      "It’s impossible without medications",
      "Gradual, consistent plant-based choices can lead to significant, sustainable weight loss",
      "Only short-term diets work",
      "Weight cannot be reduced without surgery"
    ],
    answer: 1
  }
},
// === DIGESTIVE ISSUES ===
{
  issue: "Digestive issues",
  title: "Lesson 1: Understanding Digestive Health — Your Gut Matters",
  content: `
Your digestive system is more than just a tube for food — it’s a complex ecosystem.  
A healthy gut helps digest food efficiently, absorb nutrients, regulate the immune system, and even influence mood.

Digestive issues like bloating, constipation, and irregular bowel movements often arise from **low fiber diets, excess animal products, and processed foods**.  
Meat and dairy are harder to digest, slow transit time, and can lead to inflammation in the gut.

Plant-based diets are naturally high in **fiber, water, and micronutrients**, which support smooth digestion, feed beneficial gut bacteria, and reduce inflammation.

By making simple dietary changes — like replacing meat with beans or milk with plant alternatives — you can improve digestion in just a few days.
  `,
  quiz: {
    question: "Which type of diet supports regular digestion and gut health?",
    options: [
      "High-fiber diet from fruits, vegetables, and grains",
      "Low-fiber diet with processed foods",
      "Sugary snacks and desserts",
      "Heavy meat and dairy diet"
    ],
    answer: 0
  }
},

{
  issue: "Digestive issues",
  title: "Lesson 2: Fiber — The Digestive Hero",
  content: `
Fiber is essential for digestion. It adds bulk to stool, helps food move through the digestive tract, and feeds beneficial gut bacteria.  

Types of fiber:
- **Soluble fiber:** oats, beans, apples — slows digestion and balances blood sugar  
- **Insoluble fiber:** whole grains, leafy greens, vegetables — adds bulk and prevents constipation  

Most people get **far less than the recommended 25–30 grams per day**.  
Adding more plant foods gradually improves stool consistency, reduces bloating, and promotes regular bowel movements.

Tip: Start slowly and drink plenty of water to prevent digestive discomfort as your body adjusts to higher fiber intake.
  `,
  quiz: {
    question: "What is one benefit of fiber for digestion?",
    options: [
      "It adds bulk to stool and promotes regular bowel movements",
      "It slows digestion to cause constipation",
      "It increases saturated fat",
      "It decreases gut bacteria"
    ],
    answer: 0
  }
},

{
  issue: "Digestive issues",
  title: "Lesson 3: Probiotics — Feeding Your Microbiome",
  content: `
Probiotics are beneficial bacteria that support a healthy gut microbiome. A balanced microbiome helps digestion, improves immune function, and may reduce inflammation.  

Plant-based sources of probiotics:
- **Sauerkraut and kimchi**  
- **Plant-based yogurts with live cultures**  
- **Fermented soy products like miso and tempeh**  

Studies show that regular probiotic intake can reduce bloating, improve stool regularity, and enhance nutrient absorption.  
Even small additions, like a tablespoon of sauerkraut on your salad, help your gut thrive.

Avoid over-reliance on supplements — real, whole-food sources are more effective and come with additional nutrients.
  `,
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
  title: "Lesson 4: Avoiding Gut Irritants",
  content: `
Certain foods can irritate your digestive system and worsen issues like bloating, gas, or inflammation.

Common irritants:
- **Excess meat and dairy** — harder to digest and inflammatory  
- **Highly processed foods** — lack fiber, add artificial additives  
- **Refined sugar and fried foods** — feed harmful bacteria  

Replacing these with **whole plant foods** improves gut motility, reduces inflammation, and creates a friendly environment for beneficial bacteria.  
Even a few meals a week free from animal products and processed foods can reduce discomfort and improve energy.
  `,
  quiz: {
    question: "Which foods should be reduced to improve digestion?",
    options: [
      "Excess meat, dairy, and processed foods",
      "Vegetables and fruits",
      "Whole grains and legumes",
      "Water and herbal teas"
    ],
    answer: 0
  }
},

{
  issue: "Digestive issues",
  title: "Lesson 5: Hydration and Regular Movement",
  content: `
Hydration is crucial for digestion. Water helps fiber move through the gut, supports nutrient absorption, and prevents constipation.  

Movement also keeps your digestive system active:
- Walking after meals stimulates peristalsis (gut contractions)  
- Yoga and stretching reduce bloating  
- Regular physical activity promotes overall gut health  

Together, hydration and movement improve digestion, reduce bloating, and enhance nutrient absorption. Pair this with a plant-based diet for maximum benefits.
  `,
  quiz: {
    question: "How do hydration and movement support digestive health?",
    options: [
      "They help fiber move through the gut and stimulate digestion",
      "They slow digestion and increase bloating",
      "They increase LDL cholesterol",
      "They are unrelated to gut health"
    ],
    answer: 0
  }
},

{
  issue: "Digestive issues",
  title: "Lesson 6: Real-Life Gut Improvements",
  content: `
Many people notice significant improvements in digestion after switching to a plant-focused diet.  

Example: One participant with chronic bloating replaced meat and cheese with beans, vegetables, and fermented foods. Within 4 weeks:
- Bloating decreased significantly  
- Stool became regular  
- Energy and mood improved  

This shows that **digestive issues are often reversible** with diet and lifestyle changes.  
Every plant-based meal, every glass of water, and every gentle walk supports your gut’s healing process.
  `,
  quiz: {
    question: "What did the participant experience after switching to a plant-based diet?",
    options: [
      "Improved digestion and less bloating",
      "Worse digestion",
      "No change",
      "Increased bloating"
    ],
    answer: 0
  }
},
// === INFLAMMATION OR SWELLING ===
{
  issue: "Inflammation or swelling",
  title: "Lesson 1: Understanding Inflammation — Your Body’s Fire Alarm",
  content: `
Inflammation is your body’s natural response to injury or infection.  
Short-term inflammation is healthy, but **chronic inflammation** can damage tissues, trigger pain, and increase the risk of diseases such as arthritis, heart disease, and diabetes.

Common triggers include **saturated fat from meat and dairy, processed foods, and refined sugar**, which increase inflammatory markers in the body.  

Plant-based foods, especially those rich in **antioxidants and phytonutrients**, help reduce inflammation naturally. Berries, leafy greens, nuts, seeds, and colorful vegetables calm the immune system, protect arteries, and reduce swelling.

Even small dietary changes — swapping meat for beans or adding turmeric to your meals — can lower inflammation over time.
  `,
  quiz: {
    question: "What is chronic inflammation linked to?",
    options: [
      "Excess saturated fat, processed foods, and sugar",
      "Eating vegetables and fruits",
      "Daily exercise",
      "Drinking water"
    ],
    answer: 0
  }
},

{
  issue: "Inflammation or swelling",
  title: "Lesson 2: Antioxidants — Nature’s Anti-Inflammatory Agents",
  content: `
Antioxidants are molecules that neutralize harmful free radicals in your body, preventing tissue damage and reducing inflammation.

Top anti-inflammatory plant foods include:
- **Berries:** blueberries, strawberries, raspberries  
- **Leafy greens:** spinach, kale, collards  
- **Nuts and seeds:** almonds, walnuts, flaxseed  
- **Colorful vegetables:** peppers, carrots, beets  

Research shows diets high in antioxidants **lower C-reactive protein (CRP), a key inflammation marker**, and improve joint and cardiovascular health.

Incorporate these foods daily: a handful of berries with breakfast, leafy greens in lunch salads, and roasted vegetables with dinner.
  `,
  quiz: {
    question: "Which foods help reduce inflammation?",
    options: [
      "Berries, leafy greens, and nuts",
      "Processed sugar and fried food",
      "Cheese and butter",
      "Red meat and sausages"
    ],
    answer: 0
  }
},

{
  issue: "Inflammation or swelling",
  title: "Lesson 3: Avoiding Inflammatory Foods",
  content: `
Certain foods trigger inflammation and oxidative stress.  

Common inflammatory foods include:
- **Processed and fried foods**  
- **Red and processed meats**  
- **Sugary drinks and snacks**  
- **Excess refined carbohydrates**  

Replacing these with **whole plant foods** reduces systemic inflammation, eases swelling, and protects organs from long-term damage.

Tips for swaps:
- Replace fried chicken with roasted chickpeas or tofu  
- Replace soda with sparkling water or herbal tea  
- Replace processed meats with lentils, beans, or mushrooms  

Even gradual reductions in these foods improve inflammation markers within weeks.
  `,
  quiz: {
    question: "Which foods should be avoided to prevent inflammation?",
    options: [
      "Processed foods, sugar, and refined carbs",
      "Leafy greens and berries",
      "Whole grains",
      "Legumes and nuts"
    ],
    answer: 0
  }
},

{
  issue: "Inflammation or swelling",
  title: "Lesson 4: Omega-3s — Plant-Based Anti-Inflammatory Fats",
  content: `
Omega-3 fatty acids are essential for reducing inflammation, supporting heart health, and improving joint function.  

Plant-based sources include:
- **Flaxseeds and chia seeds**  
- **Walnuts**  
- **Hemp seeds**  
- **Algal oil (for DHA/EPA)**  

Studies show that omega-3s **reduce swelling, stiffness, and inflammatory markers**. They also counteract the pro-inflammatory effects of saturated fat and animal products.

Incorporate omega-3s daily: add ground flaxseed to oatmeal, sprinkle chia seeds on smoothies, or enjoy a handful of walnuts as a snack.
  `,
  quiz: {
    question: "Which plant foods are good sources of anti-inflammatory omega-3s?",
    options: [
      "Flaxseeds, chia seeds, walnuts",
      "Cheese, butter, and red meat",
      "Chips and soda",
      "White bread and pastries"
    ],
    answer: 0
  }
},

{
  issue: "Inflammation or swelling",
  title: "Lesson 5: Lifestyle Factors — Movement, Stress, and Sleep",
  content: `
Diet alone isn’t enough — lifestyle plays a big role in managing inflammation.  

**Exercise:** Moderate activity like walking, cycling, or yoga lowers CRP levels and reduces swelling.  

**Stress management:** Chronic stress releases cortisol, promoting inflammation. Techniques like meditation, journaling, and deep breathing help.  

**Sleep:** Poor sleep increases inflammatory markers. 7–9 hours of quality sleep per night supports recovery.  

Combining a plant-based anti-inflammatory diet with these lifestyle habits produces **synergistic effects**, reducing chronic swelling, pain, and disease risk.
  `,
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
  title: "Lesson 6: Real-Life Anti-Inflammatory Success",
  content: `
Many people report dramatic reductions in joint pain, bloating, and swelling after switching to a plant-based, anti-inflammatory lifestyle.

Example: A participant with chronic knee inflammation replaced cheese and red meat with beans, vegetables, and walnuts. Within 6 weeks:
- Joint pain decreased significantly  
- Swelling in hands and knees reduced  
- Energy and mobility improved  

This shows that **dietary and lifestyle changes can profoundly reduce inflammation**, even in chronic conditions.  
Every plant-based meal, daily walk, and mindful moment contributes to a calmer, healthier body.
  `,
  quiz: {
    question: "What did the participant experience after switching to an anti-inflammatory plant-based diet?",
    options: [
      "Reduced joint pain and swelling",
      "Increased inflammation",
      "No change",
      "Worse mobility"
    ],
    answer: 0
  }
},
// === FATIGUE ===
{
  issue: "Fatigue",
  title: "Lesson 1: Understanding Fatigue — Why You Feel Tired",
  content: `
Fatigue isn’t just about sleep — it can stem from poor nutrition, stress, or nutrient deficiencies.  
A diet high in **meat, dairy, and processed foods** can lead to sluggishness because it often lacks fiber, antioxidants, and certain micronutrients, while being heavy in saturated fat.

Plant-based foods provide:
- **Complex carbohydrates** for steady energy  
- **Iron and magnesium** for cellular energy production  
- **B vitamins** for metabolism and red blood cell formation  

By shifting to nutrient-dense plant foods, your body receives fuel it can use efficiently, stabilizing energy levels and reducing the mid-day slump.
  `,
  quiz: {
    question: "Which type of diet can contribute to fatigue?",
    options: [
      "High in meat, dairy, and processed foods",
      "High in vegetables and whole grains",
      "Rich in legumes and fruits",
      "Plant-based with whole grains"
    ],
    answer: 0
  }
},

{
  issue: "Fatigue",
  title: "Lesson 2: Nutrient-Dense Foods — Your Energy Boosters",
  content: `
Certain nutrients are critical for maintaining energy:  
- **Iron:** Found in spinach, lentils, chickpeas — supports oxygen transport in blood  
- **Vitamin B12:** Essential for energy and nerve health — consider fortified plant milk or supplements  
- **Magnesium:** Almonds, pumpkin seeds, and leafy greens — aids muscle function and reduces tiredness  

A balanced plant-based diet ensures you get these nutrients without the downsides of saturated fat or cholesterol from animal products.  
Real-life results show that people replacing processed meals with nutrient-dense plant foods report **higher energy levels within 1–2 weeks**.
  `,
  quiz: {
    question: "Which nutrients help prevent fatigue?",
    options: [
      "Iron, vitamin B12, and magnesium",
      "Sugar and saturated fat",
      "Only protein",
      "Caffeine only"
    ],
    answer: 0
  }
},

{
  issue: "Fatigue",
  title: "Lesson 3: Hydration — Energy From Water",
  content: `
Even mild dehydration can cause fatigue, reduced concentration, and headaches.  

Plant-based diets naturally increase water intake through fruits, vegetables, and soups.  
Tips to stay hydrated:
- Drink water throughout the day, not just at meals  
- Include water-rich foods like cucumber, watermelon, and oranges  
- Avoid excessive caffeine or sugary drinks that can dehydrate  

Proper hydration helps nutrients reach your cells efficiently and keeps energy levels stable.
  `,
  quiz: {
    question: "How does hydration affect fatigue?",
    options: [
      "Proper hydration improves energy and prevents fatigue",
      "Hydration causes tiredness",
      "Only sugar drinks provide energy",
      "It has no effect on energy"
    ],
    answer: 0
  }
},

{
  issue: "Fatigue",
  title: "Lesson 4: Balanced Carbohydrates — Slow and Steady Energy",
  content: `
Refined carbs like white bread, pastries, and sugary snacks give quick energy spikes followed by crashes.  

Plant-based complex carbs, such as:
- **Whole grains:** oats, quinoa, brown rice  
- **Legumes:** beans, lentils, chickpeas  
- **Starchy vegetables:** sweet potatoes, pumpkin  

Release glucose gradually, preventing energy crashes and stabilizing mood.  
Pairing these with protein and healthy fats enhances satiety and provides steady fuel for your body and brain.
  `,
  quiz: {
    question: "Which foods provide slow, steady energy?",
    options: [
      "Whole grains, legumes, and starchy vegetables",
      "Pastries and sugary snacks",
      "Processed meat and cheese",
      "Soda and candy"
    ],
    answer: 0
  }
},

{
  issue: "Fatigue",
  title: "Lesson 5: Lifestyle Habits to Combat Fatigue",
  content: `
Nutrition is important, but lifestyle choices amplify energy levels:  
- **Regular sleep:** 7–9 hours allows cells to recover  
- **Moderate exercise:** boosts circulation and mitochondria function  
- **Stress management:** chronic stress consumes energy  

Combining plant-based nutrition with proper sleep, movement, and stress reduction creates an **energy-boosting synergy**, making fatigue manageable and improving productivity.
  `,
  quiz: {
    question: "Which habit helps reduce fatigue?",
    options: [
      "Regular sleep, exercise, and stress management",
      "Skipping meals",
      "Excess caffeine consumption",
      "Eating only processed foods"
    ],
    answer: 0
  }
},

{
  issue: "Fatigue",
  title: "Lesson 6: Real-Life Energy Transformation",
  content: `
Many people notice dramatic improvements in energy after switching to a nutrient-dense, plant-based diet.  

Example: A participant with chronic low energy replaced meat-heavy meals with legumes, vegetables, and whole grains, while drinking more water and walking daily. Within 3 weeks:
- Daytime energy increased  
- Afternoon crashes disappeared  
- Mood and focus improved  

These changes demonstrate that **fatigue is often reversible** with diet and lifestyle adjustments, empowering you to reclaim daily vitality.
  `,
  quiz: {
    question: "What happened to the participant after adopting a plant-based, nutrient-dense lifestyle?",
    options: [
      "Energy increased and mood improved",
      "Energy decreased",
      "Fatigue worsened",
      "No change occurred"
    ],
    answer: 0
  }
},
// === CANCER RISK ===
{
  issue: "Cancer risk",
  title: "Lesson 1: Understanding Cancer Risk — What We Can Control",
  content: `
Cancer is a complex disease influenced by genetics, environment, and lifestyle. While genetics are unchangeable, **diet and lifestyle choices play a huge role** in reducing risk.  

Research links **high consumption of red and processed meat, dairy, fried foods, and sugary snacks** to increased risk of colorectal, breast, and prostate cancers.  

Conversely, plant-based diets rich in **fiber, antioxidants, and phytonutrients** help protect cells from DNA damage, reduce inflammation, and support detoxification pathways.  

Even gradual dietary changes — like replacing one meat-based meal per day with beans, vegetables, or whole grains — can reduce cancer risk over time.
  `,
  quiz: {
    question: "Which diet increases cancer risk?",
    options: [
      "High in red and processed meat, dairy, and sugary snacks",
      "High in vegetables, fruits, and whole grains",
      "Plant-based with legumes and nuts",
      "Mediterranean diet with olive oil"
    ],
    answer: 0
  }
},

{
  issue: "Cancer risk",
  title: "Lesson 2: Antioxidants — Protecting Your Cells",
  content: `
Antioxidants neutralize free radicals, unstable molecules that can damage DNA and increase cancer risk.  

Key antioxidant-rich plant foods include:
- **Berries:** blueberries, raspberries, strawberries  
- **Leafy greens:** kale, spinach, Swiss chard  
- **Cruciferous vegetables:** broccoli, cauliflower, Brussels sprouts  
- **Tomatoes and bell peppers**  

Studies show that diets high in antioxidants reduce oxidative stress and may **lower the risk of multiple cancer types**.  

Incorporate these foods daily: smoothies, salads, stir-fries, and roasted vegetables make it easy and delicious.
  `,
  quiz: {
    question: "Which foods help protect cells from damage and lower cancer risk?",
    options: [
      "Berries, leafy greens, and cruciferous vegetables",
      "Processed meats and fried foods",
      "Cheese and cream",
      "Sugary snacks and soda"
    ],
    answer: 0
  }
},

{
  issue: "Cancer risk",
  title: "Lesson 3: Fiber — Your Natural Detoxifier",
  content: `
Fiber plays a vital role in reducing cancer risk, particularly colorectal cancer.  

How fiber helps:
- Promotes regular bowel movements, preventing toxin buildup  
- Feeds beneficial gut bacteria that produce protective compounds  
- Helps regulate blood sugar and insulin, reducing growth signals for certain cancer cells  

Sources of fiber include: legumes, whole grains, vegetables, and fruits.  
Replacing meat-heavy meals with fiber-rich plant foods can **dramatically improve gut health and reduce long-term cancer risk**.
  `,
  quiz: {
    question: "How does fiber help lower cancer risk?",
    options: [
      "Promotes regular bowel movements and supports gut health",
      "Increases inflammation",
      "Provides empty calories",
      "Causes oxidative stress"
    ],
    answer: 0
  }
},

{
  issue: "Cancer risk",
  title: "Lesson 4: Avoiding Processed and Red Meats",
  content: `
Processed and red meats contain compounds like nitrates, nitrites, and heterocyclic amines formed during cooking at high temperatures.  

These compounds **damage DNA and increase cancer risk**, particularly colorectal cancer.  

Healthier swaps:
- Replace bacon, sausages, and deli meats with lentils, chickpeas, or tofu  
- Grill or roast vegetables for flavor without harmful compounds  
- Choose plant-based proteins for most meals  

Even reducing meat intake by 50% has been linked to lower cancer risk in epidemiological studies.
  `,
  quiz: {
    question: "Why should processed and red meats be limited to reduce cancer risk?",
    options: [
      "They contain compounds that can damage DNA",
      "They are low in calories",
      "They prevent inflammation",
      "They increase fiber intake"
    ],
    answer: 0
  }
},

{
  issue: "Cancer risk",
  title: "Lesson 5: Alcohol, Sugar, and Inflammation",
  content: `
Alcohol, excessive sugar, and pro-inflammatory foods increase cancer risk by:
- Promoting DNA damage  
- Increasing estrogen levels (linked to breast cancer)  
- Raising insulin and IGF-1 levels, stimulating cancer cell growth  

Reducing alcohol, sugary snacks, and fried foods while increasing vegetables, fruits, and whole grains creates a **protective environment** for your body.  

Even small reductions — like swapping a sugary drink for water or replacing a steak dinner with beans and vegetables — can make a difference over time.
  `,
  quiz: {
    question: "Which habit increases cancer risk?",
    options: [
      "Excess alcohol, sugar, and pro-inflammatory foods",
      "Eating berries and leafy greens",
      "Drinking water",
      "Eating legumes and whole grains"
    ],
    answer: 0
  }
},

{
  issue: "Cancer risk",
  title: "Lesson 6: Real-Life Cancer Prevention Success",
  content: `
Real-life evidence shows that adopting plant-based, nutrient-rich diets reduces cancer risk markers and improves overall health.  

Example: A participant replaced 3 weekly meat-heavy dinners with lentils, vegetables, and whole grains, and added berries and cruciferous vegetables daily. Within 6 months:
- Inflammatory markers decreased  
- Weight normalized  
- Energy and digestion improved  

This demonstrates that **small, consistent dietary changes** are achievable and powerful in cancer prevention.  
Every plant-based meal contributes to long-term protection and vitality.
  `,
  quiz: {
    question: "What is the key takeaway from cancer prevention success stories?",
    options: [
      "Small, consistent plant-based dietary changes reduce cancer risk",
      "Only extreme diets work",
      "Cancer risk cannot be changed",
      "Supplements are the only solution"
    ],
    answer: 0
  }
}
]
};

//------ extraLessons -------
//------ extraLessons -------
//------ extraLessons -------
//------ extraLessons -------
export const extralessonsData = {
  animals: [
    { 
    title: "Sensing the World", 
    content: "Animals perceive the world in ways humans can hardly imagine. Dogs detect scents thousands of times more acutely than we can, allowing them to track people, find hidden objects, and even sense illness. Bats navigate entirely by echolocation, sending out sounds and interpreting returning echoes. Birds, like pigeons, can detect the Earth's magnetic field to find their way home. Understanding these incredible senses helps us appreciate how rich and varied animal life really is.", 
    question: { text: "Which animal uses echolocation?", options: ["Bat", "Dog", "Cat"], correctIndex: 0 } 
  },
  { 
    title: "Memory & Learning", 
    content: "Memory is essential for survival, and many animals have astonishing capabilities. Elephants remember locations of water sources for years, crows recall faces of humans who treated them kindly or threatened them, and octopuses can solve puzzles and remember solutions for future use. These skills show that intelligence exists in many forms, often different from human reasoning.", 
    question: { text: "Which animal remembers human faces?", options: ["Crow", "Elephant", "Shark"], correctIndex: 0 } 
  },
  { 
    title: "Problem Solving", 
    content: "Problem-solving is a sign of intelligence and creativity. Chimpanzees use sticks to extract termites from mounds, crows bend wires into hooks to retrieve food, and otters use rocks to crack open shells. Animals learn from trial and error and sometimes even invent entirely new solutions, showing ingenuity and adaptability.", 
    question: { text: "Which animal bends tools to get food?", options: ["Crow", "Monkey", "Dolphin"], correctIndex: 0 } 
  },
  { 
    title: "Planning & Foresight", 
    content: "Some animals think ahead, preparing for the future. Squirrels hide nuts to eat months later, and some birds collect and store food carefully for scarcity periods. Great apes also plan for tool use, demonstrating that foresight is not unique to humans. Planning improves survival and showcases complex cognition.", 
    question: { text: "Which animal hides food for future use?", options: ["Squirrel", "Dog", "Cat"], correctIndex: 0 } 
  },
  { 
    title: "Time Perception", 
    content: "Animals perceive time differently than humans. Bees remember the exact timing of flower nectar availability. Dogs can anticipate routines, and birds know when to migrate. These abilities demonstrate that animals live in a temporal world that requires awareness and adaptation.", 
    question: { text: "Which animal remembers timing for nectar?", options: ["Bee", "Elephant", "Horse"], correctIndex: 0 } 
  },
  { 
    title: "Navigation Skills", 
    content: "Navigation is crucial for survival. Salmon travel thousands of miles back to their birthplace to spawn. Sea turtles find their natal beaches after years at sea. Even tiny insects like monarch butterflies migrate across continents. This sense of direction relies on memory, environmental cues, and sometimes Earth's magnetic field.", 
    question: { text: "Which animal migrates thousands of miles to spawn?", options: ["Salmon", "Dolphin", "Owl"], correctIndex: 0 } 
  },
  { 
    title: "Communication Basics", 
    content: "Animals communicate in ways both subtle and complex. Dolphins use unique whistles to identify each other, elephants rumble across kilometers to coordinate movement, and bees perform dances to indicate food locations. Communication is vital for survival, cooperation, and social bonding.", 
    question: { text: "Which animal uses dances to communicate?", options: ["Bee", "Dog", "Elephant"], correctIndex: 0 } 
  },
  { 
    title: "Body Language & Signals", 
    content: "Nonverbal cues are everywhere in the animal kingdom. Cats purr when content, wag tails to express excitement, and dogs raise hackles to signal alertness. Recognizing these signals helps us understand needs, emotions, and intentions, creating opportunities for compassion and care.", 
    question: { text: "What does a dog's wagging tail usually indicate?", options: ["Excitement or friendliness", "Fear", "Illness"], correctIndex: 0 } 
  },
  { 
    title: "Sensory Superpowers", 
    content: "Some animals have senses humans can't imagine. Sharks detect electrical fields of prey, owls hear tiny rustles under snow, and star-nosed moles sense the smallest vibrations. These 'superpowers' let animals navigate and survive in ways humans cannot replicate, reminding us of the diversity of life.", 
    question: { text: "Which animal can detect electrical fields?", options: ["Shark", "Cat", "Dog"], correctIndex: 0 } 
  },
  { 
    title: "Why It Matters", 
    content: "Understanding how animals perceive and interact with the world fosters empathy. Recognizing their intelligence, sensitivity, and emotions motivates us to protect them and create environments where they can thrive. Knowledge is the first step toward action and compassion.", 
    question: { text: "Why should we understand animal senses?", options: ["To foster empathy and protect them", "To make them work for us", "To avoid them"], correctIndex: 0 } 
  },
  { 
    title: "Group Living", 
    content: "Many animals thrive in groups. Wolves hunt cooperatively, meerkats share babysitting duties, and elephants form tight family bonds. Social living increases survival chances, allows sharing of resources, and strengthens learning through observation.", 
    question: { text: "Why do many animals live in groups?", options: ["For survival and cooperation", "To look cute", "To fight humans"], correctIndex: 0 } 
  },
  { 
    title: "Social Hierarchies", 
    content: "Animal societies often have hierarchies to maintain order. Alpha wolves lead packs, chimpanzees have dominance ranks, and bees have a queen. Understanding these structures helps us see how animals organize themselves and cooperate efficiently.", 
    question: { text: "What is the purpose of social hierarchies?", options: ["Maintain order and cooperation", "Control humans", "Prevent reproduction"], correctIndex: 0 } 
  },
  { 
    title: "Cooperation & Altruism", 
    content: "Some animals act altruistically. Dolphins support sick pod members, vampire bats share food with those who went hungry, and elephants help injured companions. These behaviors show empathy and that cooperation can benefit the whole group.", 
    question: { text: "Which animal shares food with hungry peers?", options: ["Vampire bat", "Lion", "Frog"], correctIndex: 0 } 
  },
  { 
    title: "Play & Learning", 
    content: "Play is critical for social and cognitive development. Young animals wrestle, chase, and explore, practicing skills for hunting or defense. Ravens play games with sticks, and kittens chase invisible prey. Play is both fun and essential for learning.", 
    question: { text: "Why do animals play?", options: ["To learn skills and socialize", "To waste energy", "To annoy humans"], correctIndex: 0 } 
  },
  { 
    title: "Mating Rituals", 
    content: "Courtship can be elaborate. Birds perform dances and display feathers, whales sing complex songs, and spiders do acrobatic moves. These rituals ensure reproductive success and show that animals experience behavioral richness we often overlook.", 
    question: { text: "Why do animals have courtship rituals?", options: ["To ensure reproductive success", "To show off to humans", "To fight predators"], correctIndex: 0 } 
  },
  { 
    title: "Parenting Styles", 
    content: "Parenting varies widely. Elephants and orcas care for young for years, ensuring survival and teaching social skills. Birds like penguins share duties equally, while some fish guard eggs vigilantly. Parenting demonstrates intelligence, empathy, and long-term planning.", 
    question: { text: "Which animal cares for its young for many years?", options: ["Elephant", "Shark", "Frog"], correctIndex: 0 } 
  },
  { 
    title: "Communication Networks", 
    content: "Animal communication can be surprisingly complex. Ants leave pheromone trails to guide others, prairie dogs have alarm calls for different predators, and whales coordinate through songs across oceans. These networks are essential for safety, cooperation, and survival.", 
    question: { text: "Which animal uses pheromone trails to communicate?", options: ["Ant", "Horse", "Parrot"], correctIndex: 0 } 
  },
  { 
    title: "Emotions & Empathy", 
    content: "Animals feel emotions similar to humans. Dogs grieve their owners, elephants mourn dead, and rats show empathy by freeing trapped companions. Emotions drive social behavior and reveal depth in animal lives, encouraging ethical treatment.", 
    question: { text: "Which animal is known to show empathy?", options: ["Rat", "Snake", "Lizard"], correctIndex: 0 } 
  },
  { 
    title: "Conflict & Resolution", 
    content: "Conflicts happen in animal societies but are often resolved peacefully. Bonobos hug to calm tensions, wolves show submission to avoid fights, and dolphins form alliances. Conflict management highlights intelligence and the need for social harmony.", 
    question: { text: "How do bonobos resolve conflicts?", options: ["Hugging and grooming", "Fighting endlessly", "Ignoring each other"], correctIndex: 0 } 
  },
  { 
    title: "Why Social Life Matters", 
    content: "Studying social behavior helps us understand intelligence, emotional depth, and interdependence in animals. Recognizing their social complexity encourages protection and compassion, showing that animals are not isolated beings but participants in rich communities.", 
    question: { text: "Why should we understand animal social life?", options: ["To protect them and appreciate intelligence", "To train them for entertainment", "To isolate them"], correctIndex: 0 } 
  },
  { 
    title: "Unique Individuals", 
    content: "Just like humans, animals have distinct personalities. Some dolphins are bold explorers, while others are shy observers. Elephants show different temperaments, and dogs have preferences and quirks. Recognizing individuality helps us see them as sentient beings, not just species.", 
    question: { text: "Do animals have unique personalities?", options: ["Yes, each individual is different", "No, all are the same", "Only pets do"], correctIndex: 0 } 
  },
  { 
    title: "Problem-Solving Skills", 
    content: "Animals are capable of creative problem-solving. Crows use tools to access food, octopuses open jars, and elephants manipulate objects to achieve goals. These skills show intelligence, memory, and adaptability, challenging outdated notions of animal cognition.", 
    question: { text: "Which animal is known for using tools?", options: ["Crow", "Cow", "Frog"], correctIndex: 0 } 
  },
  { 
    title: "Memory & Recognition", 
    content: "Some animals have astonishing memory. Elephants remember watering holes over decades, dolphins recognize each other after years, and crows recall human faces. Memory is linked to social life and survival, reflecting sophisticated cognitive abilities.", 
    question: { text: "Which animal can recognize human faces after years?", options: ["Crow", "Rabbit", "Goldfish"], correctIndex: 0 } 
  },
  { 
    title: "Playful Characters", 
    content: "Play is also tied to personality. Some cats love chasing lasers, some parrots invent games, and some otters slide repeatedly for fun. Play reflects curiosity, learning, and joy, reminding us that animals experience happiness like we do.", 
    question: { text: "What does animal play indicate?", options: ["Curiosity and joy", "Boredom only", "Hunger"], correctIndex: 0 } 
  },
  { 
    title: "Empathy Varies", 
    content: "Even empathy shows personality differences. Some rats go out of their way to free trapped peers, while others ignore them. Dogs react differently to humans in distress, and elephants comfort grieving companions selectively. This variation shows depth and complexity.", 
    question: { text: "Does empathy vary among animals?", options: ["Yes, personalities affect empathy", "No, all animals feel the same", "Only mammals do"], correctIndex: 0 } 
  },
  { 
    title: "Learning Styles", 
    content: "Animals have different ways of learning. Some parrots learn by imitation, dolphins by observation, and dogs by repetition. Recognizing learning styles helps us provide better enrichment and care, enhancing well-being and cognitive stimulation.", 
    question: { text: "Do animals have different learning styles?", options: ["Yes, they learn differently", "No, all learn the same", "Only humans learn differently"], correctIndex: 0 } 
  },
  { 
    title: "Expressing Preferences", 
    content: "Animals show likes and dislikes. Chickens may favor certain foods, cats prefer specific resting spots, and horses enjoy particular companions. Preferences reveal personality, awareness, and choice—foundations of ethical consideration.", 
    question: { text: "Do animals have preferences?", options: ["Yes, they express likes and dislikes", "No, they are random", "Only pets express preferences"], correctIndex: 0 } 
  },
  { 
    title: "Curiosity & Exploration", 
    content: "Exploration is a sign of personality and intelligence. Foxes investigate new scents, parrots manipulate novel objects, and octopuses examine their tanks. Curiosity drives learning, problem-solving, and engagement with the environment.", 
    question: { text: "Which trait drives animal learning and problem-solving?", options: ["Curiosity", "Fear", "Hunger only"], correctIndex: 0 } 
  },
  { 
    title: "Social Bonds Are Personal", 
    content: "Friendships among animals are often selective. Elephants form tight bonds with certain herd members, dolphins have favorite partners, and birds maintain long-term social relationships. These personal bonds highlight emotional depth.", 
    question: { text: "Do animals form selective friendships?", options: ["Yes, they choose companions", "No, they bond randomly", "Only primates do"], correctIndex: 0 } 
  },
  { 
    title: "Why Individuality Matters", 
    content: "Recognizing animal individuality changes how we treat them. Understanding that each animal has personality, memory, preferences, and emotions encourages compassion, ethical choices, and a deeper connection to the living world.", 
    question: { text: "Why is recognizing individuality important?", options: ["Encourages compassion and ethical treatment", "For fun only", "It doesn't matter"], correctIndex: 0 } 
  },
   { 
    title: "Farmed Animal Reality", 
    content: "Billions of animals are raised for food in intensive systems. They often face overcrowding, stress, and lack of natural behaviors. Understanding this reality is the first step toward compassionate choices.", 
    question: { text: "What challenges do farmed animals face?", options: ["Overcrowding and stress", "Luxury housing", "No challenges"], correctIndex: 0 } 
  },
  { 
    title: "Sentience Means Suffering", 
    content: "Animals are sentient—they feel pain, fear, and joy. Practices that ignore their needs cause real suffering, from birth to slaughter. Acknowledging sentience strengthens ethical responsibility.", 
    question: { text: "What does sentience imply?", options: ["They can feel pain and joy", "They don't feel anything", "Only emotions exist in humans"], correctIndex: 0 } 
  },
  { 
    title: "Emotional Stress in Farms", 
    content: "Farmed animals experience chronic stress due to confinement, separation from family, and lack of stimulation. Stress weakens immunity and affects growth, showing that ethical treatment is linked to biology.", 
    question: { text: "What does chronic stress cause in farmed animals?", options: ["Weak immunity and poor growth", "Stronger bodies", "Nothing"], correctIndex: 0 } 
  },
  { 
    title: "Wildlife Threats", 
    content: "Animals in the wild face habitat loss, poaching, and climate change. Rainforest destruction, for example, not only reduces biodiversity but also forces animals into conflict with humans.", 
    question: { text: "What threatens wildlife?", options: ["Habitat loss and poaching", "Protection laws", "Clean forests"], correctIndex: 0 } 
  },
  { 
    title: "Rescue Operations", 
    content: "Sanctuaries and rescue organizations save thousands of animals yearly, providing safe environments, medical care, and rehabilitation. Supporting these efforts directly improves animal welfare.", 
    question: { text: "What do sanctuaries provide?", options: ["Safety and care", "More exploitation", "Entertainment"], correctIndex: 0 } 
  },
  { 
    title: "Behavioral Rehabilitation", 
    content: "Animals rescued from abusive environments often need behavioral rehabilitation. Trust-building, enrichment, and socialization help them recover emotionally and physically.", 
    question: { text: "What helps rescued animals recover?", options: ["Trust-building and enrichment", "Neglect", "Loud noise"], correctIndex: 0 } 
  },
  { 
    title: "Veterinary Care Saves Lives", 
    content: "Medical interventions in rescues—treatment of injuries, disease prevention, and spaying/neutering—significantly improve longevity and quality of life.", 
    question: { text: "What role does veterinary care play?", options: ["Improves life quality and longevity", "Is unnecessary", "Only cosmetic"], correctIndex: 0 } 
  },
  { 
    title: "The Power of Adoption", 
    content: "Adopting animals from shelters saves lives and reduces demand for breeding. Each adoption prevents suffering and gives a second chance to a sentient being.", 
    question: { text: "How does adoption help animals?", options: ["Saves lives and reduces suffering", "Increases shelters", "Has no impact"], correctIndex: 0 } 
  },
  { 
    title: "Volunteering Matters", 
    content: "Volunteers in sanctuaries, shelters, and rescue organizations provide essential care, socialization, and enrichment. Every hour spent directly improves animals’ welfare.", 
    question: { text: "Why is volunteering important?", options: ["Directly improves welfare", "Only for fun", "It doesn't matter"], correctIndex: 0 } 
  },
  { 
    title: "Small Daily Choices", 
    content: "Every compassionate choice—choosing plant-based meals, supporting cruelty-free products, or educating others—reduces suffering and creates a tangible impact.", 
    question: { text: "How can we reduce animal suffering daily?", options: ["Plant-based choices and advocacy", "Ignore it", "Overconsume animal products"], correctIndex: 0 } 
  },
  { 
    title: "Cognitive Skills", 
    content: "Many animals, from pigs to crows, demonstrate problem-solving, memory, and planning skills. Recognizing their intelligence helps us design more compassionate care systems.", 
    question: { text: "Which animals show advanced cognition?", options: ["Pigs and crows", "Rocks and trees", "Goldfish only"], correctIndex: 0 } 
  },
  { 
    title: "Communication", 
    content: "Animals communicate through sounds, gestures, and chemical signals. Elephants, dolphins, and bees share complex information, highlighting their social intelligence.", 
    question: { text: "How do animals communicate?", options: ["Sounds, gestures, chemicals", "Telepathy only", "They don't communicate"], correctIndex: 0 } 
  },
  { 
    title: "Emotional Intelligence", 
    content: "Animals feel empathy, grief, joy, and curiosity. Elephants mourn their dead, dogs comfort humans, and birds play, proving that emotions are not uniquely human.", 
    question: { text: "Which emotions can animals feel?", options: ["Empathy, grief, joy", "None", "Only hunger"], correctIndex: 0 } 
  },
  { 
    title: "Personality Traits", 
    content: "Individual animals have distinct personalities. Some are shy, others playful or bold. Recognizing this helps us provide environments tailored to each animal’s needs.", 
    question: { text: "Do animals have personalities?", options: ["Yes, distinct traits", "No, identical behavior", "Only humans do"], correctIndex: 0 } 
  },
  { 
    title: "Social Structures", 
    content: "Many species live in structured social groups with rules, alliances, and hierarchies. Understanding social dynamics is crucial to welfare and enrichment programs.", 
    question: { text: "Why study animal social structures?", options: ["To improve welfare and enrichment", "To ignore them", "To copy human society"], correctIndex: 0 } 
  },
  { 
    title: "Play Behavior", 
    content: "Play is a sign of intelligence and well-being. Animals like dolphins, octopuses, and primates engage in play, which enhances learning, social bonds, and problem-solving skills.", 
    question: { text: "What does play indicate in animals?", options: ["Intelligence and well-being", "Nothing", "Only hunger"], correctIndex: 0 } 
  },
  { 
    title: "Tool Use", 
    content: "Some animals use tools to obtain food or solve problems—crows bend wires, chimpanzees use sticks, and octopuses manipulate objects—demonstrating advanced cognition.", 
    question: { text: "Which animals use tools?", options: ["Crows, chimps, octopuses", "Fish only", "No animals use tools"], correctIndex: 0 } 
  },
  { 
    title: "Memory & Planning", 
    content: "Animals can remember locations, faces, and past events. Scrub jays hide food and recall locations months later, showing foresight and complex memory capabilities.", 
    question: { text: "What abilities show advanced memory?", options: ["Food caching and recognition", "Only instinct", "No memory"], correctIndex: 0 } 
  },
  { 
    title: "Problem Solving", 
    content: "Animals solve novel problems using reasoning and observation. Octopuses escape enclosures, elephants manipulate locks, and ravens create sequences of actions to reach goals.", 
    question: { text: "Which is an example of animal problem-solving?", options: ["Octopuses escaping enclosures", "Random movement", "Automatic reflex"], correctIndex: 0 } 
  },
  { 
    title: "Empowerment Through Action", 
    content: "By learning about intelligence and suffering, we can make compassionate choices: adopt, support sanctuaries, advocate for change, and choose plant-based diets to reduce harm.", 
    question: { text: "How can we help intelligent animals?", options: ["Adopt, support, advocate, choose plant-based", "Ignore them", "Use them for entertainment"], correctIndex: 0 } 
  }
],

  earth: [
    {
  title: "Your Diet Has a Carbon Footprint",
  content: "Every bite you take leaves a mark on the planet — it’s called your food’s carbon footprint. Producing animal-based foods, especially beef and dairy, emits enormous amounts of greenhouse gases like methane, nitrous oxide, and CO₂. In fact, if cows were a country, they’d be the third-largest emitter in the world — after China and the United States. By replacing just one beef meal per week with a plant-based one, you can save the same amount of emissions as driving 500 km less per year. The simple truth? What’s on your plate changes the climate more than what’s in your garage.",
  question: {
    text: "What food group has the highest carbon footprint?",
    options: ["Animal-based foods", "Plant-based foods", "Locally grown vegetables"],
    correctIndex: 0
  }
},
{
  title: "The Methane Mystery",
  content: "Methane traps 80 times more heat than carbon dioxide over 20 years. Most of it comes from livestock — mainly cows and sheep — as they digest food. Each cow can emit up to 120 kg of methane a year just through burps. That’s equivalent to driving a car thousands of kilometers! When you choose beans over beef, you’re literally helping cool the planet. Scientists say cutting methane could slow global warming faster than any other single action humanity can take in the next decade.",
  question: {
    text: "Which gas from livestock warms the planet the most?",
    options: ["Methane", "Oxygen", "Nitrogen"],
    correctIndex: 0
  }
},
{
  title: "Deforestation on Your Plate",
  content: "Every second, a piece of rainforest the size of a football field disappears — mostly to make room for livestock or grow soy for animal feed. About 80% of all deforestation in the Amazon is linked to cattle. This not only destroys trees that absorb CO₂ but also wipes out countless species. Switching to plant-based meals means less land needed, more forests protected, and more oxygen for everyone. Your dinner can either clear a forest or help regrow one.",
  question: {
    text: "What’s the main driver of deforestation in the Amazon?",
    options: ["Cattle farming", "Eco-tourism", "Fruit cultivation"],
    correctIndex: 0
  }
},
{
  title: "The Water Footprint of Food",
  content: "Producing meat isn’t just carbon-intensive — it’s water-intensive too. It takes about 15,000 liters of water to produce 1 kg of beef, compared to only 1,000 liters for 1 kg of grains. Imagine every steak as a hidden swimming pool. Livestock also pollute rivers through runoff from manure and fertilizers. Choosing lentils, beans, or tofu can cut your water footprint by more than half while still nourishing you fully.",
  question: {
    text: "How much more water does beef production use compared to grains?",
    options: ["About 15 times more", "The same", "Less"],
    correctIndex: 0
  }
},
{
  title: "The Hidden Energy Behind Meat",
  content: "Feeding and raising animals requires enormous energy — to grow crops, pump water, run machinery, transport feed, and refrigerate meat. In total, it takes 11 times more fossil fuel energy to produce animal protein than plant protein. That’s like using a diesel engine to power your salad. By eating lower on the food chain — plants instead of animals — you’re tapping directly into solar energy stored in plants instead of burning fossil fuels to feed animals first.",
  question: {
    text: "How much more energy does animal protein require compared to plant protein?",
    options: ["About 11 times more", "About the same", "Less energy overall"],
    correctIndex: 0
  }
},
{
  title: "The Power of One Meal",
  content: "You don’t need to be 100% vegan to make a difference. Every plant-based meal counts. A single plant-based lunch instead of a beef burger saves about 2.5 kg of CO₂ — that’s like skipping a 10 km drive. If everyone in the world replaced one animal meal per day with plants, we could cut global emissions by up to 8 billion tons per year — more than all cars on Earth combined. Your fork is a climate tool — use it wisely.",
  question: {
    text: "Replacing one beef meal a day with plants could cut emissions by how much?",
    options: ["Billions of tons per year", "A few kilograms total", "No measurable change"],
    correctIndex: 0
  }
},
{
  title: "Climate-Friendly Protein",
  content: "Plant proteins like lentils, chickpeas, tofu, and quinoa don’t just nourish your body — they protect the planet. Lentils emit 43 times less greenhouse gas than beef per gram of protein. That means one bowl of lentil stew has the same climate impact as one slice of beef — and it’s full of fiber and iron. The good news: plant protein doesn’t require compromise. It’s nutritious, ethical, and the single most powerful climate choice available to individuals.",
  question: {
    text: "How much less greenhouse gas do lentils produce compared to beef?",
    options: ["About 40 times less", "The same amount", "Twice as much"],
    correctIndex: 0
  }
},
{
  title: "Food Waste and Climate Change",
  content: "Nearly one-third of all food produced is never eaten — and wasted food emits 8–10% of all global greenhouse gases. That’s more than the entire aviation industry. Every time food ends up in the bin, all the land, water, and energy used to make it are wasted too. Freezing leftovers, composting, and buying only what you need are simple but powerful acts of climate care. Reducing waste is just as important as eating green.",
  question: {
    text: "How much of global emissions come from wasted food?",
    options: ["8–10%", "1%", "50%"],
    correctIndex: 0
  }
},
{
  title: "Oceans, Fish, and the Carbon Cycle",
  content: "Oceans absorb about a quarter of all the CO₂ humans emit — but industrial fishing and fish farming threaten this balance. Overfishing removes key species that keep algae and plankton in check, while fish farms release methane and nitrogen. The ocean is the planet’s largest carbon sink, yet we treat it as a buffet. Choosing plant-based seafood alternatives protects this vital system — and the billions who depend on it.",
  question: {
    text: "What helps oceans maintain the carbon cycle?",
    options: ["Healthy marine ecosystems", "Overfishing", "Fish farms"],
    correctIndex: 0
  }
},
{
  title: "Eating for a Cooler Planet",
  content: "Every plant-based meal is a small act of resistance against global warming. It’s a message that says, ‘I care about future generations.’ Studies show that if everyone adopted a plant-rich diet, global farmland use could drop by 75%, freeing space for rewilding and carbon capture. The planet doesn’t need a few perfect vegans — it needs millions of imperfect people making better choices, one plate at a time.",
  question: {
    text: "What could happen if everyone ate a plant-rich diet?",
    options: ["Farmland use would drop massively", "Deforestation would increase", "Emissions would rise"],
    correctIndex: 0
  }
},
{
  title: "Food Miles vs. Food Type",
  content: "Many people think imported fruits are worse for the planet than local meat. Surprisingly, the type of food matters far more than distance. Transporting vegetables by plane has a carbon footprint, but a single steak produces 50 times more emissions than flying in a few mangoes. Your choice of *what* to eat matters more than *where* it comes from. Eating plants, even if flown in occasionally, is still far better for the climate than a daily meat habit.",
  question: {
    text: "What impacts emissions more than shipping distance?",
    options: ["Type of food", "Packaging color", "Plate size"],
    correctIndex: 0
  }
},
{
  title: "Soil Carbon Secrets",
  content: "Soil stores more carbon than all the forests on Earth combined. But conventional animal agriculture strips soil of nutrients, compacts it with heavy machinery, and emits CO₂. Growing plants, especially legumes and cover crops, restores soil carbon and fertility. Your plate doesn’t just feed you — it can regenerate the Earth beneath your feet. Every lentil and bean planted responsibly helps trap carbon underground.",
  question: {
    text: "Which practice restores soil carbon?",
    options: ["Growing plants and legumes", "Overgrazing", "Tilling repeatedly"],
    correctIndex: 0
  }
},
{
  title: "The Hidden Energy of Feed Crops",
  content: "Most livestock eat crops like corn and soy that could feed humans directly. Globally, we produce enough plant calories to feed 10 billion people, but livestock consume nearly half. Producing meat first wastes energy and resources: it takes roughly 7 kg of plant feed to produce 1 kg of beef. By choosing plants directly, we cut energy waste and reduce the planet’s burden dramatically.",
  question: {
    text: "How many kg of plants are needed to make 1 kg of beef?",
    options: ["About 7 kg", "1 kg", "20 kg"],
    correctIndex: 0
  }
},
{
  title: "Nitrous Oxide – The Forgotten Gas",
  content: "Nitrous oxide (N₂O) is 300 times more potent than CO₂ at trapping heat. It mostly comes from fertilizer used to grow animal feed. By reducing demand for animal products, we lower fertilizer use, slow N₂O emissions, and protect water sources from nutrient pollution. It’s a gas that quietly accelerates warming — but your meals can fight it.",
  question: {
    text: "Which greenhouse gas from fertilizer is extremely potent?",
    options: ["Nitrous oxide", "Oxygen", "Argon"],
    correctIndex: 0
  }
},
{
  title: "Regenerative Plant Choices",
  content: "Regenerative agriculture grows plants in ways that restore soil, capture carbon, and protect biodiversity. By choosing foods from regenerative farms — nuts, grains, legumes, vegetables — you amplify your climate impact. One salad grown regeneratively can offset more emissions than a day without driving your car. Food becomes a solution, not a problem.",
  question: {
    text: "Which type of farming helps restore soil and capture carbon?",
    options: ["Regenerative agriculture", "Conventional feedlots", "Deforested grazing"],
    correctIndex: 0
  }
},
{
  title: "Plant-Based Protein Revolution",
  content: "Plant-based alternatives are no longer niche. Foods like tofu, tempeh, seitan, and innovative lab-grown proteins allow people to meet nutritional needs with a fraction of emissions. Replacing half your meat meals with plants could cut your personal carbon footprint by 30–50%. Every choice scales — small changes multiplied by millions can alter global emissions trajectories.",
  question: {
    text: "What can reduce personal carbon footprint by 30–50%?",
    options: ["Replacing half of meat meals with plants", "Drinking water", "Driving electric cars only"],
    correctIndex: 0
  }
},
{
  title: "Seasonal Eating = Smarter Planet",
  content: "Eating seasonally is a subtle but effective climate strategy. Growing vegetables in their natural season avoids energy-intensive greenhouses, reduces food miles, and aligns with local ecosystems. A winter tomato grown in a heated greenhouse can produce 10 times more CO₂ than the same tomato in summer. Choosing seasonal produce is a small habit with a surprisingly big impact.",
  question: {
    text: "Why is seasonal produce better for the planet?",
    options: ["It avoids extra energy use", "It tastes sweeter", "It lasts longer"],
    correctIndex: 0
  }
},
{
  title: "Packaging Myths",
  content: "Many people focus on packaging — but food type dominates climate impact. A beef burger in minimal packaging causes far more emissions than a packaged salad shipped from afar. Prioritize plant-based meals first; then consider packaging. Choosing lentils, beans, or grains over meat is always the bigger climate win.",
  question: {
    text: "Which matters more for emissions than packaging?",
    options: ["Food type", "Color of packaging", "Plate size"],
    correctIndex: 0
  }
},
{
  title: "The Domino Effect of Change",
  content: "Your dietary choices ripple across systems: fewer cows → less feed crop demand → lower fertilizer use → less deforestation → cleaner water → cooler planet. Each meal becomes a small domino, and each domino contributes to a chain reaction of environmental healing. The most empowering fact? You are at the center of this chain — your fork is your lever.",
  question: {
    text: "How do individual dietary choices impact the planet?",
    options: ["They create a ripple effect across ecosystems", "They have no effect", "They only affect taste"],
    correctIndex: 0
  }
},
{
  title: "Scaling Impact With Communities",
  content: "One person switching to plant-based meals is powerful. A community? Exponential. Schools, workplaces, and cities adopting plant-rich programs reduce emissions, save water, and protect forests. Joining or creating plant-based groups amplifies your effect. Collective change is the only way to meet climate goals — your choices inspire others to follow.",
  question: {
    text: "Why is community action important for climate?",
    options: ["It multiplies individual impact", "It doesn’t help", "It only affects prices"],
    correctIndex: 0
  }
},
{
  title: "Hidden Water Footprints",
  content: "One kilogram of beef can require up to 15,000 liters of water when accounting for feed, drinking water, and processing. In contrast, growing 1 kg of lentils takes around 1,250 liters. Every plant-based meal you eat conserves thousands of liters of water — a hidden resource that most people forget when choosing their food.",
  question: {
    text: "Which uses far less water per kg?",
    options: ["Lentils", "Beef", "Cheese"],
    correctIndex: 0
  }
},
{
  title: "Food Waste = Climate Waste",
  content: "Globally, roughly one-third of all food is wasted. Animal products have the highest climate cost when wasted because so much energy went into producing them. Wasting a pound of beef is like driving 160 miles in a car. By planning meals and storing food properly, you save energy, water, and reduce unnecessary emissions.",
  question: {
    text: "Which type of food waste has the highest climate impact?",
    options: ["Animal products", "Bread", "Leafy greens"],
    correctIndex: 0
  }
},
{
  title: "Legumes: Tiny Giants",
  content: "Legumes aren’t just protein-rich; they fix nitrogen in the soil naturally, reducing the need for synthetic fertilizers, which emit potent nitrous oxide. Eating beans and lentils is like planting mini carbon-traps every time you cook. These small seeds pack huge climate benefits, and they’re delicious too!",
  question: {
    text: "Why are legumes good for the climate?",
    options: ["They fix nitrogen and reduce fertilizer use", "They grow slowly", "They need lots of water"],
    correctIndex: 0
  }
},
{
  title: "Cow Belching vs. Car Engines",
  content: "A single cow can emit up to 500 liters of methane per day through burping. Methane traps heat 25 times more effectively than CO₂ over a century. Reducing meat consumption isn’t just a gentle choice — it’s like removing a small fleet of cars from the road daily. Your dinner plate is a climate lever.",
  question: {
    text: "Which gas from cows is very potent?",
    options: ["Methane", "Oxygen", "CO₂ only"],
    correctIndex: 0
  }
},
{
  title: "Forest-Free Diets",
  content: "Every year, millions of acres of rainforest are cleared for livestock or feed crops. Choosing plant-based foods helps protect forests, which act as Earth’s lungs. One person’s plant-forward diet could save dozens of trees annually, prevent habitat loss, and preserve biodiversity — a single forkful saving entire ecosystems.",
  question: {
    text: "What helps protect forests from being cleared?",
    options: ["Eating more plant-based foods", "Driving electric cars", "Buying paper"],
    correctIndex: 0
  }
},
{
  title: "Soil Microbes & Carbon Capture",
  content: "Healthy soils are full of microbes that store carbon efficiently. Animal farming compacts the soil, killing microbes and releasing stored CO₂. Plant-focused farming nourishes the soil, supports microbes, and keeps carbon locked underground. Your salad is a tiny ecosystem hero!",
  question: {
    text: "What do plant-focused farms help?",
    options: ["Support soil microbes and carbon storage", "Destroy microbes", "Use more fertilizer"],
    correctIndex: 0
  }
},
{
  title: "Hidden Protein Sources",
  content: "Many plant foods contain more protein per acre than meat. Quinoa, lentils, peas, and soy yield far more usable protein for humans per unit of land, meaning plant-based diets are more efficient, climate-friendly, and help reduce pressure on forests, water, and biodiversity.",
  question: {
    text: "Which provides more protein per acre for humans?",
    options: ["Plant crops like lentils and quinoa", "Cattle farming", "Poultry"],
    correctIndex: 0
  }
},
{
  title: "Seafood Carbon Surprises",
  content: "Fishing and aquaculture contribute to emissions, overfishing, and habitat destruction. Plant-based meals can reduce pressure on oceans, prevent bycatch, and preserve marine biodiversity. Choosing legumes, grains, or algae-based foods is not just healthier — it protects entire aquatic ecosystems.",
  question: {
    text: "Why is reducing seafood consumption helpful for the planet?",
    options: ["It protects oceans and reduces emissions", "It increases overfishing", "It has no effect"],
    correctIndex: 0
  }
},
{
  title: "Hidden Fossil Fuels",
  content: "From tractors to transport, producing meat consumes 5–10 times more fossil fuels than equivalent plant foods. A plant-forward diet isn’t just low-carbon in theory — it drastically reduces dependence on fossil fuels, a key driver of climate change.",
  question: {
    text: "Which consumes more fossil fuels?",
    options: ["Meat production", "Plant production", "Cooking plant-based meals"],
    correctIndex: 0
  }
},
{
  title: "Meal Impact Multiplier",
  content: "Switching one meal per day from animal products to plants might seem small — but if 1 billion people did it, it would reduce global emissions by over 1 billion tons annually. Your choices ripple across the planet, proving that small, consistent dietary changes can create massive, tangible climate impact.",
  question: {
    text: "What happens if a billion people switch one meal to plants daily?",
    options: ["Global emissions drop significantly", "Nothing changes", "Prices go up"],
    correctIndex: 0
  }
},
{
  title: "Synthetic Fertilizer Shock",
  content: "Producing synthetic nitrogen fertilizers releases nitrous oxide, a greenhouse gas 300 times stronger than CO₂. By eating more legumes and plant-based proteins, we reduce reliance on synthetic fertilizers, protecting the atmosphere from hidden emissions. Every bean counts!",
  question: {
    text: "Which gas from fertilizers is extremely potent?",
    options: ["Nitrous oxide", "CO₂", "Methane"],
    correctIndex: 0
  }
},
{
  title: "Plant Protein, Tiny Footprint",
  content: "Switching from beef to lentils for protein reduces your food-related carbon footprint by up to 90%. One meal change can save more CO₂ than skipping a car trip for a week. Your plate isn’t just food — it’s a climate action plan.",
    question: {
    text: "Which protein has the lowest carbon footprint?",
    options: ["Lentils", "Beef", "Chicken"],
    correctIndex: 0
  }
},
{
  title: "Seasonal Eating Matters",
  content: "Eating fruits and vegetables in season avoids energy-intensive greenhouses and long-distance transport. Seasonal, plant-based diets drastically cut emissions and support local farmers. It’s a small change with surprisingly big planetary impact.",
  question: {
    text: "Why eat seasonal plant foods?",
    options: ["Reduces emissions and supports local farming", "Tastes worse", "Increases transport"],
    correctIndex: 0
  }
},
{
  title: "Hidden Land Use",
  content: "About 80% of agricultural land is used for animals, yet they provide only 18% of calories globally. Choosing plant-based foods frees land for forests, wildlife, and carbon capture. Your dinner can literally return land to nature.",
  question: {
    text: "Which takes more land for less food?",
    options: ["Animal agriculture", "Vegetable crops", "Legumes"],
    correctIndex: 0
  }
},
{
  title: "Cheese Climate Surprise",
  content: "Dairy has a surprisingly high carbon footprint. One kilogram of cheese can emit as much CO₂ as driving 50 miles. Plant-based alternatives or reducing dairy even slightly can have a major climate effect.",
  question: {
    text: "Which has a surprisingly high carbon footprint?",
    options: ["Cheese", "Lettuce", "Potatoes"],
    correctIndex: 0
  }
},
{
  title: "Egg Emissions",
  content: "Eggs may seem harmless, but producing one dozen eggs can emit roughly 4.5 kg CO₂. Swapping eggs for legumes or tofu reduces emissions significantly without sacrificing protein.",
  question: {
    text: "Which swap reduces carbon footprint?",
    options: ["Eggs → tofu/legumes", "Eggs → more eggs", "Eggs → meat"],
    correctIndex: 0
  }
},
{
  title: "Beyond Meat: Lab Meat",
  content: "Lab-grown meat could reduce emissions by up to 90% compared to conventional beef. Plant-based proteins, however, are still simpler, cheaper, and more immediately climate-friendly. Science gives options — but plants remain the most reliable climate ally.",
  question: {
    text: "Which is the most immediately climate-friendly?",
    options: ["Plant-based proteins", "Lab meat", "Beef"],
    correctIndex: 0
  }
},
{
  title: "Hidden Emissions in Drinks",
  content: "Milk, cheese, and even coffee with dairy have hidden carbon emissions. Switching to plant-based milks like oat, soy, or almond can save significant CO₂, especially when multiplied over billions of cups daily.",
  question: {
    text: "Which change saves hidden emissions in drinks?",
    options: ["Dairy → plant milk", "Coffee → water", "Tea → soda"],
    correctIndex: 0
  }
},
{
  title: "Global Protein Inefficiency",
  content: "Feeding grains to animals for meat is inefficient: only 12% of the protein fed to cows becomes edible meat. Eating grains directly could feed far more people and dramatically reduce environmental impact.",
  question: {
    text: "Which is more efficient for feeding people?",
    options: ["Eat grains directly", "Feed grains to cows", "Feed grains to pigs"],
    correctIndex: 0
  }
},
{
  title: "Plant-Based Multiplier Effect",
  content: "One person switching to a plant-forward diet influences farmers, markets, and culture. A single choice can ripple outward, shaping what foods are produced, which carbon-intensive practices are reduced, and even inspiring others to act. Change starts at your plate.",
  question: {
    text: "How does one plant-based choice affect the world?",
    options: ["It creates a ripple effect reducing emissions and influencing markets", "It has no effect", "It increases meat demand"],
    correctIndex: 0
  }
},
{
  title: "Ocean Dead Zones",
  content: "Excess nitrogen and phosphorus from animal farming run-off create 'dead zones' in oceans, where life cannot survive. Plant-based diets reduce this pollution, keeping marine ecosystems vibrant and carbon storage healthy.",
  question: {
    text: "What causes ocean dead zones?",
    options: ["Animal farming run-off", "Plastic bags", "Solar panels"],
    correctIndex: 0
  }
},
{
  title: "Seafood Footprint",
  content: "Overfishing and industrial seafood production emit significant greenhouse gases. Reducing seafood consumption in favor of plant-based options helps oceans regenerate and lowers your diet’s carbon footprint.",
  question: {
    text: "How does reducing seafood help the planet?",
    options: ["Lowers emissions and helps ocean recovery", "Increases CO₂", "Pollutes rivers"],
    correctIndex: 0
  }
},
{
  title: "Transport Matters Less Than You Think",
  content: "Food transportation contributes only 10% of food-related emissions. The majority comes from production — especially animal-based foods. Focusing on what you eat impacts climate more than where it comes from.",
  question: {
    text: "What contributes most to food emissions?",
    options: ["Production, especially animal-based foods", "Transportation", "Packaging"],
    correctIndex: 0
  }
},
{
  title: "Soil Carbon Storage",
  content: "Healthy plant-based farming can increase soil carbon storage, removing CO₂ from the atmosphere. Cover crops, legumes, and reduced animal grazing all help turn fields into carbon sinks.",
  question: {
    text: "How can plant-based farming help climate?",
    options: ["Increases soil carbon storage", "Worsens emissions", "Consumes more water"],
    correctIndex: 0
  }
},
{
  title: "Food Waste Amplifies Emissions",
  content: "About a third of all food is wasted, and when meat is wasted, the emissions and land use are multiplied. Prioritizing plant-based, portion-controlled meals drastically reduces climate impact.",
  question: {
    text: "Why is food waste worse for meat than plants?",
    options: ["Higher emissions and land use are wasted", "It’s not worse", "Plants emit more CO₂"],
    correctIndex: 0
  }
},
{
  title: "Carbon Opportunity Cost",
  content: "Every kilogram of beef we avoid frees up land that can regrow forests, sequestering more carbon than the emissions saved from meat alone. Eating plants creates a double climate benefit.",
  question: {
    text: "What is the double benefit of avoiding beef?",
    options: ["Reduces emissions and allows forests to regrow", "No effect", "Increases soil erosion"],
    correctIndex: 0
  }
},
{
  title: "Processed vs Whole Plant Foods",
  content: "Whole plant foods have lower emissions than highly processed vegan foods, which often require energy-intensive production. Eating minimally processed plants maximizes climate benefit.",
  question: {
    text: "Which has the lowest emissions?",
    options: ["Whole plant foods", "Vegan processed foods", "Dairy"],
    correctIndex: 0
  }
},
{
  title: "Fertilizer-Free Farming",
  content: "Organic and regenerative plant-based farming avoids synthetic fertilizers, which are energy-intensive and emit nitrous oxide. Eating plants grown this way has a surprisingly low climate impact.",
  question: {
    text: "Which farming reduces nitrous oxide emissions?",
    options: ["Organic/regenerative plant farming", "Conventional beef farming", "Processed vegan foods"],
    correctIndex: 0
  }
},
{
  title: "The Power of Meat-Free Days",
  content: "Even one meat-free day per week per person reduces global emissions significantly. Multiply that by millions of people, and you have a real climate solution — simple, delicious, and empowering.",
  question: {
    text: "What’s the impact of one meat-free day per person?",
    options: ["Reduces global emissions significantly", "No impact", "Increases emissions"],
    correctIndex: 0
  }
},
{
  title: "Long-Term Planetary Balance",
  content: "Diet shifts are not just about emissions today. Reducing animal-based foods slows deforestation, restores ecosystems, enhances biodiversity, and stabilizes climate feedback loops for decades. Your choices echo far into the future.",
  question: {
    text: "Why do plant-based diets matter long-term?",
    options: ["Protect ecosystems and stabilize climate", "Only affect taste", "No real effect"],
    correctIndex: 0
  }
}
],

 health: [
  {
    title: "Your Body Rebuilds Itself",
    content: "Here’s a fact that most people don’t realize: about every 7–10 years, almost every cell in your body is replaced. Your bones, skin, and even parts of your liver are rebuilt molecule by molecule — using the nutrients from the food you eat today. That means your next body is literally being built right now. The salad you eat becomes part of your muscles and skin; the processed junk becomes part of you too. This makes nutrition not just about weight or calories — but about *what kind of body you want to rebuild*.",
    question: {
      text: "How often does your body rebuild most of its cells?",
      options: ["Every 7–10 years", "Every year", "Never"],
      correctIndex: 0
    }
  },
  {
    title: "Gut Feelings: The Hidden Brain in Your Belly",
    content: "Your gut isn’t just a tube that digests food — it’s lined with over 100 million neurons, sometimes called your ‘second brain’. It communicates constantly with your real brain, influencing mood, energy, and even decision-making. Scientists have found that 90% of serotonin — the ‘happiness chemical’ — is produced in the gut. When you feed your gut bacteria fiber, fruits, and vegetables, they produce compounds that improve your mood and protect your immune system. So, eating well doesn’t just fuel your body — it literally makes you happier and calmer.",
    question: {
      text: "Where is most of the body's serotonin produced?",
      options: ["In the gut", "In the brain", "In the skin"],
      correctIndex: 0
    }
  },
  {
    title: "Inflammation: The Silent Fire",
    content: "Chronic inflammation is one of the most underestimated threats to health. It’s not visible, but it silently damages arteries, joints, and organs for years before any disease appears. What causes it? Constant exposure to processed foods, animal fats, refined sugar, and stress. The good news? A single week on a whole-food, plant-based diet can reduce inflammatory markers measurably. Foods like turmeric, leafy greens, berries, and flaxseed act as natural fire extinguishers inside your body — cooling that hidden flame that causes heart disease and fatigue.",
    question: {
      text: "What type of foods help reduce inflammation?",
      options: ["Leafy greens and berries", "Processed meats", "Refined sugar"],
      correctIndex: 0
    }
  },
  {
    title: "Energy Isn’t From Coffee",
    content: "When people feel tired, they often blame lack of caffeine, but true energy doesn’t come from stimulants — it comes from mitochondria, the microscopic power plants in your cells. These mitochondria burn the nutrients you eat to produce energy (ATP). Diets rich in antioxidants from fruits, vegetables, and whole grains protect them from damage, while processed foods and high-fat diets clog up their efficiency. Real vitality comes not from drinking more coffee, but from *feeding your mitochondria* what they need to thrive.",
    question: {
      text: "What gives your body real, lasting energy?",
      options: ["Healthy mitochondria", "More caffeine", "Less sleep"],
      correctIndex: 0
    }
  },
  {
    title: "You Have a Built-In Detox System",
    content: "Forget detox teas — your liver, kidneys, lungs, and skin are already detoxing you every second. But they can only do their job if you give them the right materials. Cruciferous vegetables like broccoli and kale activate liver enzymes that flush out toxins. Water helps your kidneys filter waste. Fiber traps and removes harmful compounds through digestion. When you eat real food, you’re upgrading your natural detox system — no expensive products needed.",
    question: {
      text: "What truly helps your body detoxify?",
      options: ["A healthy liver and diet", "Detox teas", "Fasting for days"],
      correctIndex: 0
    }
  },
  {
    title: "Protein Myths: You’re Probably Getting Enough",
    content: "One of the most common nutrition myths is that we need massive amounts of protein. In reality, most adults in Western countries consume almost twice the recommended amount. What we actually lack are *fiber and micronutrients*. Legumes, nuts, seeds, tofu, and whole grains provide all essential amino acids — without the cholesterol or inflammation caused by animal protein. In fact, plant-based athletes are breaking world records while eating less protein but more antioxidants and recovery-boosting foods.",
    question: {
      text: "What nutrient are most people actually lacking?",
      options: ["Fiber", "Protein", "Fat"],
      correctIndex: 0
    }
  },
  {
    title: "The 80,000 Meals That Shape Your Life",
    content: "An average person eats around 80,000 meals in their lifetime — that’s 80,000 chances to build or harm your health. Each meal changes your blood chemistry within minutes: inflammation levels, sugar balance, and even gene expression. Your DNA is not your destiny; it’s your *diet* that decides which genes get activated. This is the science of epigenetics — showing that food can literally turn disease-promoting genes off and healing genes on. Every bite is a message to your body.",
    question: {
      text: "What influences which genes become active?",
      options: ["Your diet", "Luck", "Horoscope"],
      correctIndex: 0
    }
  },
  {
    title: "Your Blood Changes After One Meal",
    content: "It’s astonishing but true: your blood becomes thicker and inflamed within hours after eating a meal high in saturated fat or refined sugar. Under a microscope, blood cells start sticking together, slowing oxygen flow. Conversely, eating a meal rich in fruits, greens, and whole grains makes blood flow smoother and boosts oxygen delivery to your muscles and brain. Your next meal changes your body’s chemistry almost instantly — that’s how powerful food really is.",
    question: {
      text: "How quickly does your blood react to what you eat?",
      options: ["Within hours", "After weeks", "After years"],
      correctIndex: 0
    }
  },
  {
    title: "Your Immune System Eats What You Eat",
    content: "About 70% of your immune system lives in your gut, so the health of your microbiome directly determines how well you fight infections. When you eat colorful plants, your gut bacteria release anti-inflammatory compounds that boost immunity. When you eat processed foods, they release toxins that weaken your defenses. A diverse plant-based diet literally trains your immune system to become stronger, faster, and more intelligent — like giving it daily exercise.",
    question: {
      text: "Where does most of your immune system reside?",
      options: ["In the gut", "In the heart", "In the brain"],
      correctIndex: 0
    }
  },
  {
    title: "Longevity Isn’t Luck",
    content: "In the world’s longest-living communities — the Blue Zones — people don’t rely on genetics or luck. They live longer because of simple, consistent habits: eating mostly plants, staying active naturally, having close social connections, and living with purpose. Their diets are 95% plant-based, rich in beans, greens, and whole grains. It’s proof that longevity is not mysterious — it’s a lifestyle that you can start building today, one choice at a time.",
    question: {
      text: "What do all Blue Zone diets have in common?",
      options: ["They’re mostly plant-based", "They’re meat-centered", "They’re high in sugar"],
      correctIndex: 0
    }
  },
  {
  title: "Stress Ages You — But You Can Reverse It",
  content: "Every time you experience stress, your body releases cortisol and adrenaline — powerful hormones designed to save your life in emergencies. But when stress becomes chronic, it shortens your telomeres — the protective caps at the ends of your DNA strands. Shorter telomeres mean faster aging and higher disease risk. The fascinating part? Meditation, deep breathing, and plant-based diets have been shown to *lengthen* telomeres again. In other words, a calm mind can literally slow biological aging.",
  question: {
    text: "What protects your DNA from aging?",
    options: ["Telomeres", "Calories", "Protein"],
    correctIndex: 0
  }
},
{
  title: "Sleep: Your Brain’s Nightly Cleaning Service",
  content: "During deep sleep, your brain activates a ‘cleaning’ network called the glymphatic system. It flushes out toxins and waste proteins that accumulate during the day — including beta-amyloid, which is linked to Alzheimer’s disease. Even one night of poor sleep slows this process. Prioritizing 7–9 hours of quality rest isn’t laziness; it’s essential brain maintenance. Every hour you sleep well, you protect your memory, mood, and long-term mental clarity.",
  question: {
    text: "What does the brain do during deep sleep?",
    options: ["Flushes out toxins", "Stores fat", "Stops working"],
    correctIndex: 0
  }
},
{
  title: "Your Mindset Can Boost Immunity",
  content: "Scientists have found that positive emotions don’t just feel good — they strengthen your immune response. People who practice gratitude or maintain optimism after stress have higher levels of protective antibodies and lower inflammation. It’s not magic; it’s the biology of hope. When your brain feels safe and positive, your immune system stops wasting energy on defense and focuses on healing instead. How you *think* literally changes how your cells behave.",
  question: {
    text: "What effect can positive emotions have on the body?",
    options: ["They strengthen immunity", "They weaken it", "They have no effect"],
    correctIndex: 0
  }
},
{
  title: "Movement is Medicine — Even 10 Minutes Counts",
  content: "Many people believe they need hours in the gym to stay healthy. The truth: just 10 minutes of brisk walking, dancing, or cycling can increase blood flow, improve focus, and release endorphins. Regular movement reduces the risk of depression and boosts longevity — even without heavy workouts. Our bodies are designed to move often, not to sit all day. Every step tells your body, ‘I’m alive, I’m safe, keep me strong.’",
  question: {
    text: "How much movement can already improve health?",
    options: ["10 minutes", "1 hour minimum", "None"],
    correctIndex: 0
  }
},
{
  title: "Your Taste Buds Can Change",
  content: "If you think you’ll never enjoy healthy food, here’s the truth: your taste buds completely renew themselves about every two weeks. That means your preferences are not fixed. When you reduce processed sugar and salt, your sensitivity to natural flavors increases. Within weeks, fruit tastes sweeter, vegetables taste richer, and junk food starts to taste *too* strong. You can literally retrain your tongue — and your brain — to love healthy food again.",
  question: {
    text: "How often do taste buds renew themselves?",
    options: ["About every two weeks", "Once a year", "Never"],
    correctIndex: 0
  }
},
{
  title: "Loneliness Can Hurt Like Smoking",
  content: "Chronic loneliness raises stress hormones, weakens immunity, and increases the risk of early death — as much as smoking 15 cigarettes a day. Humans are wired for connection; meaningful relationships are vital for health. Sharing meals, volunteering, or joining a community helps regulate stress and boost emotional resilience. The strongest predictor of long life isn’t wealth or genetics — it’s having people you can truly count on.",
  question: {
    text: "How harmful can loneliness be to health?",
    options: ["As harmful as smoking", "No harm at all", "Good for you"],
    correctIndex: 0
  }
},
{
  title: "Mindful Eating Transforms Digestion",
  content: "Your body digests food differently depending on your mental state. Eating in a rush or while stressed reduces enzyme secretion and nutrient absorption. When you slow down, breathe, and chew mindfully, your body shifts to ‘rest and digest’ mode — optimizing metabolism and even lowering blood sugar spikes. Mindful eating isn’t about restriction; it’s about respect — giving your food, and yourself, the attention they deserve.",
  question: {
    text: "What helps your body digest better?",
    options: ["Eating calmly", "Eating while stressed", "Eating faster"],
    correctIndex: 0
  }
},
{
  title: "Your Thoughts Can Affect Your Heartbeat",
  content: "Your heart doesn’t beat in a perfectly steady rhythm — it’s meant to vary with your breath and emotions. High ‘heart rate variability’ (HRV) means your body adapts well to stress; low HRV predicts burnout and disease. Practices like meditation, gratitude, and slow breathing increase HRV, making your heart more resilient. It’s proof that calm thinking directly strengthens the physical heart.",
  question: {
    text: "What does a high heart rate variability indicate?",
    options: ["Better stress adaptation", "Heart weakness", "Nothing important"],
    correctIndex: 0
  }
},
{
  title: "Nature Is a Natural Antidepressant",
  content: "Studies show that spending just 20 minutes in nature lowers cortisol, slows heart rate, and boosts mood. The human body evolved outdoors — the sight of trees, sunlight, and flowing water triggers relaxation in our nervous system. Even looking at pictures of nature can reduce stress hormones. Nature isn’t just beautiful; it’s biologically necessary. If you can, make time every day to step outside and let your body remember where it came from.",
  question: {
    text: "How long in nature can reduce stress hormones?",
    options: ["Around 20 minutes", "Only after hours", "It doesn’t help"],
    correctIndex: 0
  }
},
{
  title: "Healthy Habits Build Themselves",
  content: "Most people try to change through motivation, but the secret lies in identity. Instead of saying ‘I want to eat healthy,’ say ‘I’m the kind of person who nourishes their body.’ The brain loves consistency — once your identity shifts, your habits naturally align. Every time you choose a healthy option, you’re casting a vote for your future self. Over time, those votes become who you are.",
  question: {
    text: "What’s the most powerful way to create lasting habits?",
    options: ["Change your identity first", "Rely on willpower", "Avoid all mistakes"],
    correctIndex: 0
  }
},
{
  title: "Your Body Has a Second Brain",
  content: "Deep inside your digestive system lives the enteric nervous system — over 100 million neurons running along your intestines. Scientists call it the 'second brain' because it can function independently of the central nervous system and communicates directly with your mood and immune system. About 90% of your serotonin — the ‘happiness’ neurotransmitter — is made in your gut, not your head. That’s why poor diet or stress can lead to both digestive and emotional imbalance. Healing your gut is literally healing your mood.",
  question: {
    text: "Where is most of your serotonin produced?",
    options: ["In the gut", "In the brain", "In the lungs"],
    correctIndex: 0
  }
},
{
  title: "Your Brain Cleans Itself on a Schedule",
  content: "Your brain follows a strict cleaning rhythm tied to your circadian clock — the internal 24-hour timer that regulates everything from sleep to hormones. At night, while you sleep, brain cells shrink slightly to make space for cerebrospinal fluid to wash away waste. But late-night screen use and irregular sleep confuse this system, letting toxins accumulate. Respecting your natural rhythm (sleeping and eating at consistent times) is like oiling your biological machinery — it keeps your mind clear and focused.",
  question: {
    text: "When does your brain clean out waste most effectively?",
    options: ["During deep sleep", "While watching screens", "When skipping sleep"],
    correctIndex: 0
  }
},
{
  title: "Dopamine Isn’t Happiness — It’s Desire",
  content: "Many people think dopamine brings joy, but it’s actually the *anticipation* chemical. It motivates you to seek rewards — like checking your phone or craving a snack. Too much artificial stimulation (social media, sugar, or constant notifications) hijacks this system, leaving you restless and unfulfilled. True balance comes from ‘natural dopamine’ — small, steady hits from purpose, learning, connection, and exercise. When you control dopamine, you control your focus and contentment.",
  question: {
    text: "What is dopamine mainly responsible for?",
    options: ["Motivation and desire", "Sleep", "Digestion"],
    correctIndex: 0
  }
},
{
  title: "Neuroplasticity: You Can Rewire Your Mind",
  content: "Your brain is not fixed — it constantly reshapes itself based on what you do, think, and feel. Every thought strengthens certain neural connections and weakens others. Learning new skills, practicing mindfulness, or even changing self-talk physically rewires your brain structure. Neuroplasticity means you’re never stuck — your habits and emotions are patterns, not prisons. Each small change builds new pathways toward a healthier mind.",
  question: {
    text: "What does neuroplasticity mean?",
    options: ["The brain can rewire itself", "The brain never changes", "Plastic affects the brain"],
    correctIndex: 0
  }
},
{
  title: "Circadian Nutrition — Timing Matters",
  content: "What you eat matters, but *when* you eat may matter almost as much. Your metabolism follows the sun — it’s most efficient during the day and slows at night. Late-night eating disrupts insulin sensitivity, blood sugar balance, and even sleep. Studies show that restricting meals to a 10–12 hour window during daylight improves energy and longevity. You’re not just what you eat — you’re *when* you eat.",
  question: {
    text: "When is your metabolism most efficient?",
    options: ["During the day", "Late at night", "At random times"],
    correctIndex: 0
  }
},
{
  title: "The Power of Emotional Labeling",
  content: "When you name your feelings — ‘I’m anxious,’ ‘I feel tense,’ ‘I’m sad’ — activity in the brain’s emotional centers (like the amygdala) decreases, while control areas (like the prefrontal cortex) increase. It’s called ‘affect labeling,’ and it’s scientifically proven to calm you. Naming emotions doesn’t make you weak; it gives your brain back its steering wheel. Words turn raw feelings into manageable experiences.",
  question: {
    text: "What happens when you name your emotions?",
    options: ["You regain emotional control", "You lose control", "Nothing changes"],
    correctIndex: 0
  }
},
{
  title: "Your Immune System Remembers Your Emotions",
  content: "Every emotion releases chemical messengers that communicate with your immune cells. Chronic anger or despair suppresses them; gratitude and love strengthen them. This ‘psychoneuroimmunology’ shows that your mental state is part of your immune defense. It’s why laughter, kindness, and hope aren’t luxuries — they’re biological shields. You literally heal faster when you feel safe and connected.",
  question: {
    text: "What effect do positive emotions have on immunity?",
    options: ["They strengthen it", "They weaken it", "No effect"],
    correctIndex: 0
  }
},
{
  title: "Focus Is a Muscle — And It Weakens with Multitasking",
  content: "Switching between tasks floods your brain with dopamine bursts, giving the illusion of productivity — but actually burns out focus circuits. Over time, it becomes harder to concentrate on anything deep. To rebuild focus, do one thing at a time and protect distraction-free blocks. Each time you resist a notification, your attention span gets a little stronger. True focus is now a superpower.",
  question: {
    text: "What happens when you multitask frequently?",
    options: ["Focus weakens", "Focus improves", "No change"],
    correctIndex: 0
  }
},
{
  title: "Your Body Learns from Your Thoughts",
  content: "Visualizing an action activates nearly the same brain circuits as physically performing it. Athletes improve performance through mental rehearsal; patients recover faster when they visualize healing. The body doesn’t fully distinguish between imagined and real experiences — it follows your mind’s lead. Use this wisely: imagine calm, success, and health, and your biology starts believing it.",
  question: {
    text: "What happens when you visualize an action?",
    options: ["The brain activates similar circuits", "Nothing happens", "You get tired"],
    correctIndex: 0
  }
},
{
  title: "Food Talks to Your Genes",
  content: "Every bite you take sends information to your DNA. Nutrients act as signals that turn genes on or off — this is called epigenetics. A plant-based, nutrient-rich diet activates genes that reduce inflammation and promote longevity. Processed food does the opposite. You’re not a victim of your genes; you’re in a constant conversation with them. Every meal is a message saying who you want to become.",
  question: {
    text: "What is epigenetics about?",
    options: ["How lifestyle turns genes on or off", "Genetic mutations only", "Unchangeable DNA"],
    correctIndex: 0
  }
},
{
  title: "Your Cells Listen to Your Purpose",
  content: "Having a sense of purpose is not just philosophical — it’s biological. Studies on longevity show that people who wake up with a reason to live (something larger than themselves) have lower inflammation markers, slower cellular aging, and better immunity. Your body literally responds to meaning. Purpose acts as an internal compass that stabilizes your stress hormones, supports sleep, and strengthens your heart. When you live with direction, your cells feel it too.",
  question: {
    text: "How does having a purpose affect your body?",
    options: ["It lowers inflammation and strengthens health", "It makes you tired", "It has no effect"],
    correctIndex: 0
  }
},
{
  title: "Loneliness Hurts Like a Physical Wound",
  content: "Your brain processes social pain the same way it processes physical pain. That’s why rejection or isolation can actually ‘hurt.’ Chronic loneliness activates the same stress pathways as chronic illness, raising blood pressure and inflammation. Building genuine connection — even with one person or community — is one of the strongest predictors of longevity. Humans are wired for belonging; isolation makes the body feel unsafe.",
  question: {
    text: "How does loneliness affect your health?",
    options: ["It triggers stress and inflammation", "It improves focus", "It has no physical impact"],
    correctIndex: 0
  }
},
{
  title: "The Hormone of Trust and Healing: Oxytocin",
  content: "When you hug someone, pet an animal, or even share a deep conversation, your body releases oxytocin — a hormone that lowers blood pressure, reduces stress, and promotes emotional bonding. It’s the body’s natural antidote to cortisol (the stress hormone). Oxytocin is one reason kindness and touch speed up healing. Connection is not a luxury — it’s a medicine you can give and receive daily.",
  question: {
    text: "What does oxytocin do for your body?",
    options: ["It lowers stress and strengthens bonding", "It increases anxiety", "It causes fatigue"],
    correctIndex: 0
  }
},
{
  title: "Inflammation Begins in the Mind",
  content: "Your thoughts and emotions can start inflammation long before food or illness does. Chronic stress tells your immune system to ‘stay alert,’ flooding your body with inflammatory molecules even when there’s no danger. Over time, this weakens your defenses. But mindfulness, gratitude, and slow breathing can instantly reduce this internal fire. The mind and the immune system are in constant dialogue — calm one, and you calm the other.",
  question: {
    text: "How can mindfulness help reduce inflammation?",
    options: ["By lowering stress signals", "By increasing alertness", "By boosting inflammation"],
    correctIndex: 0
  }
},
{
  title: "The Longevity Paradox — Stress Makes You Strong, in Doses",
  content: "Some stress is not only harmless — it’s vital. Short, manageable bursts like exercise, fasting, or learning something challenging trigger ‘hormesis’ — the process that makes your body stronger by adaptation. Too little stress weakens resilience, too much breaks it. The secret is balance: challenge yourself just enough to grow. Your body, like a muscle, thrives on being gently pushed, not chronically strained.",
  question: {
    text: "What is the benefit of short-term stress?",
    options: ["It strengthens the body through adaptation", "It causes chronic illness", "It has no benefit"],
    correctIndex: 0
  }
},
{
  title: "Your Breath Is a Remote Control for the Nervous System",
  content: "You can’t directly tell your heart to slow down or your anxiety to stop — but you can breathe. Slow, deep breaths signal the vagus nerve (your body’s calming highway) to activate the parasympathetic system — the one responsible for rest, digestion, and healing. Within 90 seconds, your heart rate, blood pressure, and cortisol levels begin to drop. Every breath is a manual override for stress.",
  question: {
    text: "How does slow breathing calm the body?",
    options: ["By activating the vagus nerve", "By increasing adrenaline", "By stopping oxygen flow"],
    correctIndex: 0
  }
},
{
  title: "Digital Overload — The Hidden Drain on Focus",
  content: "Constant notifications, multitasking, and endless scrolling don’t just waste time — they rewire your brain for distraction. Dopamine spikes from digital rewards keep you in a loop of craving new stimulation. Over time, this erodes deep focus, patience, and even creativity. The solution isn’t to abandon technology, but to use it consciously — check less often, create more. Protect your attention like your most valuable resource — because it is.",
  question: {
    text: "What effect does digital overload have on the brain?",
    options: ["It weakens focus and patience", "It boosts creativity", "It improves memory"],
    correctIndex: 0
  }
},
{
  title: "The Power of Sunlight — More Than Vitamin D",
  content: "Morning sunlight does more than create vitamin D. It resets your circadian rhythm, boosts serotonin, improves metabolism, and synchronizes every cell’s clock. Just 10–15 minutes outdoors after waking tells your brain, ‘It’s time to be alert.’ Missing this cue can cause fatigue, insomnia, or low mood. Nature is not optional — it’s the original operating system your body still runs on.",
  question: {
    text: "What is one major benefit of morning sunlight?",
    options: ["It resets your circadian rhythm", "It causes fatigue", "It disrupts sleep"],
    correctIndex: 0
  }
},
{
  title: "Your Thoughts Can Age You — Or Reverse It",
  content: "People with an optimistic mindset tend to live 7–10 years longer, according to multiple studies. Optimism isn’t blind positivity — it’s a realistic belief that challenges can be overcome. This attitude reduces chronic cortisol exposure, protects DNA telomeres (the aging caps on chromosomes), and encourages healthy behavior. Your perspective literally slows cellular aging. Every hopeful thought is youth at the molecular level.",
  question: {
    text: "How does optimism influence aging?",
    options: ["It protects DNA and reduces stress", "It increases stress", "It accelerates aging"],
    correctIndex: 0
  }
},
{
  title: "You Are a Community of Trillions",
  content: "Your body is home to around 38 trillion microorganisms — more than your human cells. This ecosystem (your microbiome) trains your immune system, digests food, and even affects your mood. A fiber-rich, plant-based diet feeds these tiny allies, while processed foods and antibiotics starve them. You’re not alone inside your skin — you’re a living planet, and how you eat decides which species thrive within you.",
  question: {
    text: "What is the microbiome?",
    options: ["The community of microorganisms in your body", "Your brain", "A type of vitamin"],
    correctIndex: 0
  }
},
{
  title: "The 24-Hour Health Cycle",
  content: "Your body follows a precise rhythm — the circadian clock. Every cell, hormone, and organ runs on this 24-hour timer. When you align your habits with it, your energy and focus peak naturally. Morning sunlight wakes your brain. Midday movement optimizes metabolism. Evening calm signals repair. But screens, late meals, and erratic sleep confuse this internal orchestra. Try eating and sleeping at roughly the same times daily, and step outside early. You’ll feel the difference within days — clearer mind, steadier mood, deeper rest.",
  question: {
    text: "What helps your circadian rhythm stay balanced?",
    options: ["Consistent sleep and sunlight exposure", "Late-night screens", "Skipping meals"],
    correctIndex: 0
  }
},
{
  title: "Designing Your Morning for Energy",
  content: "The first 30 minutes after waking set the tone for your entire day. Cortisol (your natural wake-up hormone) peaks in the morning — it’s your built-in espresso. Support it with movement, hydration, and sunlight instead of caffeine and screens. Try stretching or journaling before checking notifications. This trains your brain to begin the day in creation mode, not reaction mode. A mindful start compounds — better mood, sharper focus, and more willpower for the rest of the day.",
  question: {
    text: "What helps start the day in 'creation mode'?",
    options: ["Avoiding screens and moving early", "Checking notifications immediately", "Skipping breakfast"],
    correctIndex: 0
  }
},
{
  title: "Midday Reset — The Power of Pausing",
  content: "Most people push through fatigue, thinking productivity means constant motion. But the brain naturally dips in alertness every 90–120 minutes. Short pauses — standing up, breathing deeply, or walking for 2 minutes — reset attention and creativity. NASA studies show that short breaks can improve focus by up to 40%. Rest is not wasted time; it’s how the brain consolidates and refuels. Learn to pause, and you’ll get more done with less effort.",
  question: {
    text: "Why are short breaks important during the day?",
    options: ["They restore focus and creativity", "They waste time", "They increase stress"],
    correctIndex: 0
  }
},
{
  title: "How to Build Meals That Heal",
  content: "Think of each meal as an opportunity for repair. Combine colorful vegetables (antioxidants), legumes or tofu (protein), whole grains (steady energy), and nuts or seeds (healthy fats). This combination keeps blood sugar stable and supports brain function. Variety matters more than perfection — your gut microbes love diversity. Try eating the rainbow over a week. Your skin, mood, and focus will mirror the nourishment you give yourself.",
  question: {
    text: "What’s the benefit of eating a variety of plant foods?",
    options: ["It supports gut health and balance", "It causes inflammation", "It reduces nutrients"],
    correctIndex: 0
  }
},
{
  title: "Digital Detox — Reclaiming Your Attention",
  content: "Your attention span has a measurable value — it’s your mental currency. Each scroll and notification taxes your dopamine system, fragmenting your focus. Choose intentional consumption: designate 'offline hours,' keep your phone away from meals, and use apps mindfully. Neuroscientists found that even having your phone nearby (face down!) reduces working memory. Every moment of digital silence is a gift to your nervous system — a breath of mental oxygen.",
  question: {
    text: "What happens when your phone is constantly nearby?",
    options: ["Your focus weakens even if unused", "You think better", "You digest faster"],
    correctIndex: 0
  }
},
{
  title: "Evening Ritual — Programming Rest",
  content: "Sleep doesn’t begin when your eyes close; it begins one hour before. Light, sound, and thoughts tell your brain whether it’s safe to rest. Dim screens, stretch, read, or write a gratitude list — this lowers cortisol and releases melatonin. Think of it as a landing runway for your body’s airplane. The smoother the landing, the deeper the sleep. Consistent sleep hygiene is one of the simplest forms of therapy — and it’s completely free.",
  question: {
    text: "What helps the body prepare for sleep?",
    options: ["Reducing light and stimulation before bed", "Watching TV until sleep", "Eating large meals late"],
    correctIndex: 0
  }
},
{
  title: "Hydration — The Forgotten Habit",
  content: "Dehydration often masquerades as fatigue, irritability, or hunger. Even a 2% drop in body water impairs cognition. Your body needs water to transport nutrients, clear toxins, and maintain mood. Instead of counting cups, use color: pale yellow urine means hydrated. Add slices of lemon, cucumber, or mint if plain water bores you. Hydration is one of the cheapest energy upgrades — yet most people ignore it until they crash.",
  question: {
    text: "What can dehydration cause?",
    options: ["Fatigue and reduced focus", "Improved mood", "Stronger immunity"],
    correctIndex: 0
  }
},
{
  title: "Stress Reset in 60 Seconds",
  content: "Stress isn’t the enemy; staying there is. When tension rises, your nervous system needs a quick signal of safety. Try this 60-second reset: inhale slowly through your nose for 4 seconds, hold for 4, exhale for 6, and relax your shoulders. This activates the vagus nerve, switching your body from fight-or-flight to rest-and-digest. One mindful breath can stop a stress cascade before it starts — biology obeys calmness.",
  question: {
    text: "What does slow breathing do to the nervous system?",
    options: ["Activates calm responses", "Raises adrenaline", "Increases stress signals"],
    correctIndex: 0
  }
},
{
  title: "The Power of Small Habits",
  content: "Transformation doesn’t come from intensity, but consistency. A single push-up, one glass of water, or one deep breath repeated daily builds identity. Your brain loves repetition — each small success wires new neural pathways of self-trust. Start with one 2-minute habit. Stack it on something you already do: drink water after brushing teeth, or stretch before breakfast. Health is not a goal — it’s a rhythm you create.",
  question: {
    text: "What’s more important than intensity for habit change?",
    options: ["Consistency and repetition", "Random big efforts", "Perfection"],
    correctIndex: 0
  }
},
{
  title: "Health Is Not the Absence of Illness",
  content: "True health is a dynamic state of energy, clarity, and emotional stability — not just the lack of disease. It’s the feeling of being fully alive in your body. You build it moment by moment through rest, nourishment, connection, and curiosity. Every choice — food, breath, thought — sends a signal toward vitality or depletion. The goal isn’t perfection; it’s awareness. When you understand your body’s language, every day becomes an opportunity to thrive.",
  question: {
    text: "What defines true health?",
    options: ["A dynamic state of energy and clarity", "The total absence of bacteria", "Never getting tired"],
    correctIndex: 0
  }
}
]
};

// ---------------------------
// Tip pools
// ---------------------------
const characterTips = {
  eluna: [
    "Dairy calves are separated from mothers—plant milk makes a difference 🥛🌱",
    "Cows in factory farms often never see grass or open fields.",
    "Mother pigs are kept in crates so small they can’t even turn around.",
    "Chickens raised for meat grow so fast their legs often break under them.",
    "Egg-laying hens live in cages the size of an A4 paper sheet.",
    "Fishing nets don’t just catch fish — they trap dolphins, turtles, and seabirds too.",
    "Every year, thousands of dolphins suffocate after getting tangled in fishing nets.",
    "Dolphins are often killed as ‘bycatch’ — an industry term for accidental victims.",
    "Sea turtles drown when trapped in nets, unable to reach the surface for air.",
    "Many whales carry heavy fishing gear for years, suffering constant pain.",
    "We kill 80 billion animals yearly — if it were humans, extinction in 17 days.",

    "Fun fact: pigs are actually more intelligent than dogs!",
    "Dolphins give themselves names using unique whistles.",
    "Dolphins work together to care for injured friends.",
    "By protecting cows, you help preserve gentle, social animals with rich emotions.",
    "Turkeys love affection and can purr when they’re happy!",
    "Some fish use tools and can recognize themselves in mirrors.",
    "Fish feel pain and stress — just like land animals do.",
    "Every animal wants to live, just like us 🐮🐷🐔",
    "Protecting forests means protecting animal homes 🌳",
    "Cows have best friends — and they get stressed when separated.",


    "Imagine a world where no animal suffers—you're building it! 🌍",
    "You are the reason an animal sees tomorrow!",
    "With every kind action, you protect someone who cannot speak for themselves.",
    "By caring, you turn empathy into real change for animals.",
    "Every plant-based meal is a hug to the planet and its creatures.",
    "Your actions today ripple into a brighter future for all animals.",
    "Thanks to you, someone is free to live and flourish.",
    "You are creating a world where kindness is the norm.",
    "Each conscious choice makes suffering optional, not inevitable.",
    "Because of you, a life is lived, not taken.",
    "Your compassion is stronger than any industry of cruelty.",
    "Every act of kindness makes the world safer for the voiceless.",
    "You are part of the solution — a hero for every animal.",
    "The animals you protect today will thank you in ways you’ll never see — but feel.",
    "Every small step toward compassion changes the story for thousands of lives.",
    "Your choices matter more than you realize — they save lives. 💛",
    "Imagine the joy of a world where no creature lives in fear — you make it possible. 🌟",
    "Each plant-based meal is a victory for animals. 🥦",
    "Your empathy is a superpower — use it to protect the voiceless. 🦸",
    "Because of your choices, someone can play, explore, and be free. 🐇",
    "Every act of kindness counts — one life at a time. 🐾",
    "You’re shaping a future where compassion wins. 🌈",
    "A world without animal suffering begins with you. 🌍",
    "Your care creates safe spaces for animals every day. 💚",
    "Plant-based choices = lives saved. It’s that simple. 🌱",
    "Even small changes ripple into massive kindness. 🌊",
    "With every thoughtful choice, you fight cruelty. ⚡",
    "You are the voice for those who cannot speak. 🗣️",
    "Every conscious meal is a step toward a brighter, gentler world. 🌞",
    "Your compassion today builds hope for tomorrow. ✨",
    "You are a guardian for the innocent. 🛡️",
    "One meal, one choice, one life saved — you are amazing! 💛",
    "Your actions give freedom a chance to flourish. 🌿",
    "Each kind choice is a victory against cruelty. 🏆",
    "You are creating a world worth living for, for every creature. 🌍",
    "Every thoughtful act for animals multiplies kindness. 💫",
    "You hold the power to change lives — one compassionate choice at a time. 🌱",
    "Every life you protect matters — and you matter to them. 💛",
    "Your compassion can turn fear into freedom. 🕊️",
    "Imagine the smiles of animals living without fear — that’s your impact. 🐶",
    "By caring, you create a world full of hope and joy. 🌈",
    "Your everyday choices have extraordinary power. ⚡",
    "The kindness you show today echoes through countless lives. 🌊",
    "You are a hero for animals — simple as that. 🦸",
    "Every act of empathy builds a gentler world. 💛",
    "Plant-based choices = love in action. 🌱",
    "You are proof that small actions can make big changes. ✨",
    "Each life you protect is a victory for compassion. 🐾",
    "You are making the world brighter, one kind choice at a time. 🌞",
    "Thanks to you, more animals get to live, explore, and play. 🐇",
    "Every kind choice is a ripple in the ocean of compassion. 🌊",
    "Your empathy shapes the world into a safer place for the voiceless. 💚"

  ],
  elune: [
"We feed 80 billion farm animals annually — yet 673 million humans go hungry.", //(Based on the 2024 UN report indicating 673 million people experienced hunger.)
"Approximately 70% of antibiotics are used in farm animals, not humans.", //(Based on estimates from the 2010s; figures may vary.)
"Up to 80% of chronic diseases are linked to diets high in meat and dairy.",
"Air pollution causes 7 million deaths globally every year.",
"Plastic waste kills over a million marine animals annually.",
"Deforestation wipes out 10 million hectares of forest each year.",
"Industrial farming produces more greenhouse gases than all cars and planes combined.",
"Overfishing has wiped out 90% of large fish populations in the last century.",
"Human consumption uses 1.7 times the planet’s resources annually.",
"Animal agriculture uses 70% of global freshwater for meat and dairy production.",
"Polluted oceans threaten the food supply of billions of people.",
"Rising CO₂ levels make oceans more acidic, threatening coral reefs.",
"Waste from meat and dairy farms contaminates rivers and lakes.",
"Climate change is a major factor in the increasing spread of diseases.",
"Industrial farming contributes to biodiversity loss — thousands of species are disappearing.",


"Meat-free meals are linked to lower cholesterol and better heart health.",
"Eating more plants can reduce your risk of type 2 diabetes.",
"Every kilogram of beef uses 15,000 liters of water to produce.",
"Global temperature has already increased by over 1°C since pre-industrial times.",
"Methane is a more potent greenhouse gas than CO₂ over 20 years.",
"Switching to a plant-based diet could reduce a person’s carbon footprint by up to 50%.",
"Every plant-based meal helps protect the planet and your health. 🌱",
"Choosing to walk, bike, or use public transport reduces CO₂ emissions. 🚲",
"Planting trees can restore habitats and fight climate change. 🌳",
"Eating more plants supports your heart, your body, and the Earth. ❤️",
"Switching to a plant-based diet is one of the fastest ways to reduce your footprint. 🌎",
"Composting at home returns nutrients to the soil naturally. 🌱",
"Sustainable fashion and recycled materials reduce pollution and save lives. 👕",
"Many companies are switching to plant-based products — change is spreading fast. 🌱",
"Plant-based diets can reduce heart disease, diabetes, and obesity. ❤️",
"Small daily actions add up — every choice matters. ✨",
"Eating more seasonal vegetables reduces emissions and supports farmers. 🥦",
"Planting a single tree can capture hundreds of kilograms of CO₂ over its life. 🌳",
"Every clean river and beach is a victory for wildlife. 🐢",
"Choosing cruelty-free products protects animals and the environment. 🐾",
"Reducing food waste saves money, energy, and lives. 🥗",
"Eating a variety of plants supports both your health and biodiversity. 🌾",
"Every kind choice creates a ripple of positive change. 🌊",
"Every small reduction in waste helps preserve oceans and rivers. 🐠",



  ],
  pet: [
    "Be kind to every kind — and don’t forget to be kind to yourself too!",
    "Love grows when shared 💚",
    "Every small act of care shapes who you are.",
    "Happiness multiplies when you give it away.",
"Patience is love in action.",
"A gentle word can change someone’s entire day.",
"Kindness is contagious — spread it freely.",
"Sharing love is never wasted — it always returns.",
"Every creature deserves respect, including you.",
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
    
  ],
celebrity: [   // ✅ replace placeholder with real array
    {
      name: "Natalie Portman",
      title: "Actress & Activist",
      quote: "Three times a day, I remind myself that I value life and do not want to cause pain to or kill other living beings. That is why I eat the way I do.",
      avatar: "images/natalie.jpg"
    },
    {
      name: "Albert Einstein",
      title: "Theoretical Physicist",
      quote: "Nothing will benefit health or increase chances of survival on Earth as much as the evolution to a vegetarian diet.",
      avatar: "images/einstein.jpg"
    },
    {
      name: "Patrik Baboumian",
      title: "Strongman & Vegan Activist",
      quote: "Someone once asked me, 'How can you get as strong as an ox without eating any meat?' My answer was, 'Have you ever seen an ox eating meat?'",
      avatar: "images/patrik.jpg"
    },
    {
      name: "Abraham Lincoln",
      title: "16th U.S. President",
      quote: "I am in favor of animal rights as well as human rights. That is the way of a whole human being.",
      avatar: "images/lincoln.jpg"
    },
    {
      name: "Leonardo da Vinci",
      title: "Renaissance Polymath",
      quote: "I have from an early age abjured the use of meat.",
      avatar: "images/davinci.jpg"
    },
    //{
    //  name: "Plato",
    //  title: "Philosopher",
    //  quote: "The greatness of a nation and its moral progress can be judged by the way its animals are treated.",
    //  avatar: "images/plato.jpg"
    //},
    {
      name: "Pythagoras",
      title: "Philosopher & Mathematician",
      quote: "As long as man continues to be the ruthless destroyer of lower living beings, he will never know health or peace.",
      avatar: "images/pythagoras.jpg"
    },
    {
      name: "Lewis Hamilton",
      title: "Formula 1 World Champion",
      quote: "We all have choices to make. I choose to love, to be conscious of what I’m supporting and I refuse to support the companies killing and torturing animals.",
      avatar: "images/hamilton.jpg"
    },
    {
      name: "Mahatma Gandhi",
      title: "Indian Leader & Activist",
      quote: "The greatness of a nation can be judged by the way its animals are treated.",
      avatar: "images/gandhi.jpg"
    },
    {
      name: "Leo Tolstoy",
      title: "Author & Philosopher",
      quote: "As long as there are slaughterhouses, there will be battlefields.",
      avatar: "images/tolstoy.jpg"
    },
    {
      name: "John Stuart Mill",
      title: "Philosopher & Economist",
      quote: "The worth of a civilization is measured by the compassion it shows toward those who cannot defend themselves.",
      avatar: "images/stuart.jpg"
    },
    {
      name: "Buddha",
      title: "Spiritual Leader",
      quote: "All beings tremble before violence. All fear death. When a man considers this, he does not kill or cause to kill.",
      avatar: "images/buddha.jpg"
    }
  ]
};
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
  const bottomLimit = 0.55 * vh; // max Y (40% from bottom)
  const topLimit = 0.10 * vh;

  let minX, maxX;

  switch (char) {
    case "eluna":
      minX = leftEdge;
      maxX = 0.4 * vw - wrapperWidth; // left side
      break;
    case "elune":
      minX = 0.3 * vw;
      maxX = 0.7 * vw - wrapperWidth; // middle
      break;
    case "pet":
      minX = 0.6 * vw;
      maxX = rightEdge; // right side
      break;
    case "celebrity":
      minX = leftEdge;
      maxX = 0.4 * vw - wrapperWidth;
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
    { char: "celebrity", weight: 25 },
    { char: "Elune", weight: 25 },
    { char: "Eluna", weight: 25 },
    { char: "pet", weight: 25 }
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
  const pos = getRandomPositionForChar(
    char,
    wrapper.offsetWidth,
    wrapper.offsetHeight
  );
  wrapper.style.left = `${pos.x}px`;
  wrapper.style.top = `${pos.y}px`;

  document.body.appendChild(wrapper);
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
        <p class="quote">“${celeb.quote}”</p>
        <p class="celeb-name"><strong>${celeb.name}</strong></p>
        <p class="celeb-title"><em>${celeb.title}</em></p>
      </div>
    `;

    const avatarImg = wrapper.querySelector("#celebrityAvatar");
    avatarImg.src = celeb.avatar;
  } else {
    const tips = characterTips[char];
    tipBox.textContent = tips[Math.floor(Math.random() * tips.length)];
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

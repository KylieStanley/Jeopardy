const data = {
  response_code: {
    version: '1.5',
    termsofService: 'http://frontend.turing.io/projects/jeopardy.html',
    features: {
      categories: 1,
      clues: 1
    },
  },
  categories: {
    'unitedStatesHistory': 1,
    'lifeSciences': 2,
    'publicHealth': 3,
    'educationJargon': 4,
    'nameThatBoardGame': 5,
    'americanLiterature': 6,
    'biographies': 7,
    'americanCities': 8,
    'food': 9,
    'cableTV': 10
  },
  clues: [ 
    { 
      question: 'Scorecard Report" & "Peter Jacobsen Plugged In" are seen on the sports channel devoted to this',
      answer: 'golf',
      pointValue: 100,
      categoryId: 10
    },
    { 
      question: 'One of the most popular shows on the Food Network is "The Essence of" him',
      answer: 'Emeril',
      pointValue: 200,
      categoryId: 10
    },
    { 
      question: 'The Eulogy" is HBO\'s e-mail newsletter devoted to this series',
      answer: 'Six Feet Under',
      pointValue: 300,
      categoryId: 10
    },
    { 
      question: '(Hi, I\'m Billy Ray Cyrus.)  In 2001 I began practicing medicine in the Big Apple on this Pax TV drama',
      answer: 'Doc',
      pointValue: 400,
      categoryId: 10
    },
    { 
      question: 'What Sonya Fitzpatrick is, or the Animal Planet series on which she communicates with animals telepathically',
      answer: 'The Pet Psychic',
      pointValue: 500,
      categoryId: 10
    },


    { 
      question: 'An energetic person is full of these, maybe the fava type',
      answer: 'beans',
      pointValue: 100,
      categoryId: 9
    },
    { 
      question: 'Government money that a congressman steers toward his home district',
      answer: 'pork',
      pointValue: 200,
      categoryId: 9
    },
    { 
      question: 'To mean a quarrel, vegetarians can use "rhubarb" & carnivores can use this',
      answer: 'beef',
      pointValue: 300,
      categoryId: 9
    },
    { 
      question: 'Diana Prince occasionally has to take her hair out of this to become Wonder Woman',
      answer: 'a bun',
      pointValue: 400,
      categoryId: 9
    },
    { 
      question: 'A story or joke that\'s been repeated often, maybe too often',
      answer: 'a chestnut',
      pointValue: 500,
      categoryId: 9
    },



    { 
      question: 'About this city\'s 1906 earthquake, Jack London wrote, "Day was trying to dawn through the smoke pall',
      answer: 'San Francisco',
      pointValue: 100,
      categoryId: 8
    },
    { 
      question: 'This state capital lies on both banks of the Mississippi River at the confluence of the Minnesota River',
      answer: 'St. Paul',
      pointValue: 200,
      categoryId: 8
    },
    { 
      question: 'This city on Lake Michigan is "The Beer Capital of America',
      answer: 'Milwaukee',
      pointValue: 300,
      categoryId: 8
    },
    { 
      question: 'This city near Disney World was given its present name in 1857 to honor a soldier killed in the Seminole Wars',
      answer: 'Orlando',
      pointValue: 400,
      categoryId: 8
    },
    { 
      question: 'Juarez, Mexico & this Texas city make up the largest metropolitan center on the U.S.-Mexico border',
      answer: 'El Paso',
      pointValue: 500,
      categoryId: 8
    },



    { 
      question: 'La Femme Peta" calls itself this type of "biography" of actress Peta Wilson',
      answer: 'unauthorized',
      pointValue: 100,
      categoryId: 7
    },
    { 
      question: 'Title of Sylvia Nasar\'s tale of "The Life of Mathematical Genius and Nobel Laureate John Nash',
      answer: 'A Beautiful Mind',
      pointValue: 200,
      categoryId: 7
    },
    { 
      question: 'This pioneer was a man, yes, a big man, & his bio won a Newbery Medal for James Daugherty',
      answer: 'Daniel Boone',
      pointValue: 300,
      categoryId: 7
    },
    { 
      question: 'Virginia Spencer Carr\'s "The Lonely Hunter" chronicles the life of this author',
      answer: 'Carson McCullers',
      pointValue: 400,
      categoryId: 7
    },
    { 
      question: 'This "Lady"like biographer of Mary, Queen of Scots came out with "Marie Antoinette: The Journey" in 2001',
      answer: 'Antonia Fraser',
      pointValue: 500,
      categoryId: 7
    },

    {
      question: "This Mark Twain character's father \"Pap\" briefly held him prisoner in a cabin on the Illinois side of the Mississippi",
      pointValue: 100,
      answer: "Huckleberry Finn",
      categoryId: 6
    },
    {
      question: "In this Hemingway WWI novel, ambulance driver Frederic Henry falls in love with British nurse Catherine Barkley",
      pointValue: 200,
      answer: "A Farewell to Arms",
      categoryId: 6
    },
    {
      question: "In this Steinbeck novel, a few buddies get drunk & make a shambles of the Western Biological Lab in Monterey",
      pointValue: 300,
      answer: "Cannery Row",
      categoryId: 6
    },
    {
      question: "It's the nickname of William Lonigan, the 15-year-old hero of a 1930s trilogy written by James T. Farrell",
      pointValue: 400,
      answer: "Studs",
      categoryId: 6
    },
    {
      question: "This captain of the Ghost rescues literary critic Humphrey Van Weyden & poet Maude Brewster from a shipwreck",
      pointValue: 500,
      answer: "Wolf Larsen",
      categoryId: 6
    },
    {
      question: "The Scarlet Letter\" says, \"to forbid the culprit to hide his face... was the essence of\" this 7-letter punishment",
      pointValue: 100,
      answer: "the pillory",
      categoryId: 6
    },
    {
      question: "Harpooneers in this novel include Tashtego, Daggoo & Queequeg, a cannibal",
      pointValue: 200,
      answer: "Moby Dick",
      categoryId: 6
    },
    {
      question: "This 1950 Ray Bradbury book collected 26 stories about Earth's colonization of Mars",
      pointValue: 300,
      answer: "The Martian Chronicles",
      categoryId: 6
    },
    {
      question: "This 1854 Thoreau work is subtitled \"Or Life in the Woods",
      pointValue: 400,
      answer: "Walden",
      categoryId: 6
    },
    {
      question: "In \"The Adventures of Tom Sawyer\", this character kills Dr. Robinson, a murder witnessed by Tom",
      pointValue: 500,
      answer: "Injun Joe",
      categoryId: 6
    },
    {
      question: "Sons\", the second novel in her \"House of Earth\" trilogy, traces the lives of Wang Lung's 3 sons",
      pointValue: 100,
      answer: "Pearl S. Buck",
      categoryId: 6
    },
    {
      question: "He penned a campaign biography for Franklin Pierce and pinned \"The Scarlet Letter\" on Hester Prynne",
      pointValue: 200,
      answer: "(Nathaniel) Hawthorne",
      categoryId: 6
    },
    {
      question: "His experiences as a bombardier in WWII were the basis of the novel \"Catch-22",
      pointValue: 300,
      answer: "Joseph Heller",
      categoryId: 6
    },
    {
      question: "Little Women\" is set during this war",
      pointValue: 400,
      answer: "the Civil War",
      categoryId: 6
    },
    {
      question: "Among his pen names were Jonathan Oldstyle, Gentleman & Diedrich Knickerbocker",
      pointValue: 500,
      answer: "Washington Irving",
      categoryId: 6
    },




    { 
      question: 'Go directly to jail',
      answer: 'Monopoly',
      pointValue: 100,
      categoryId: 5
    },
    { 
      question: 'King me!',
      answer: 'Checkers',
      pointValue: 200,
      categoryId: 5
    },
    { 
      question: 'Miss Scarlet in the library with the wrench',
      answer: 'Clue',
      pointValue: 300,
      categoryId: 5
    },
    { 
      question: 'You sank my aircraft carrier!',
      answer: 'Battleship',
      pointValue: 400,
      categoryId: 5
    },
    { 
      question: 'My wink is nearest the pot.  I\'ve won the squidge-off!',
      answer: 'tiddlywinks',
      pointValue: 500,
      categoryId: 5
    },



    { 
      question: 'IDEA is the Individuals with these Education Act, formerly the Education For All Handicapped Children Act',
      answer: 'Disabilities',
      pointValue: 100,
      categoryId: 4
    },
    { 
      question: '65 out of 100 students did the same as or worse than you if your grade is in the 65th of these',
      answer: 'percentile',
      pointValue: 200,
      categoryId: 4
    },
    { 
      question: 'It\'s the rhyming term for the technique of teaching with only a blackboard to help you',
      answer: 'chalk talk/chalk and talk',
      pointValue: 300,
      categoryId: 4
    },
    { 
      question: 'From the Latin for "to heal", it\'s the type of education that brings deficient students up to standard levels',
      answer: 'remedial',
      pointValue: 400,
      categoryId: 4
    },
    { 
      question: 'These 2 words, denoting socioeconomically challenged, followed "A Nation" in a 1983 report\'s title',
      answer: 'At Risk',
      pointValue: 500,
      categoryId: 4
    },





    { 
      question: 'A 1992 law introduced by Sen. Cranston aimed to reduce the use of paint containing too much of this element',
      answer: 'lead',
      pointValue: 100,
      categoryId: 3
    },
    { 
      question: 'An effort lasting from 1985 to 1991 eliminated this paralytic illness from Latin America',
      answer: 'polio',
      pointValue: 200,
      categoryId: 3
    },
    { 
      question: '(<a href="http://www.j-archive.com/media/2005-12-21_J_25.jpg" target="_blank">Hi!  I\'m CNN senior medical correspondent Dr. Sanjay Gupta.</a>)  I joined CNN in 2001 & reported on the biological attacks of this bacillus in the news that October',
      answer: 'anthrax',
      pointValue: 300,
      categoryId: 3
    },
    { 
      question: 'Stanford\'s med school has a division of this, the study & control of disease in populations',
      answer: 'epidemiology',
      pointValue: 400,
      categoryId: 3
    },
    { 
      question: 'Also a type of mathematical quantity, it\'s a term for disease-carrying critters like ticks',
      answer: 'a vector',
      pointValue: 500,
      categoryId: 3
    },


    
    { 
      question: 'Organic chemistry focuses specifically on this element\'s compounds & their reactions',
      answer: 'carbon',
      pointValue: 100,
      categoryId: 2
    },
    { 
      question: 'If you\'re a steak & veggies creature, you\'re an omnivore, a combination of these other 2 basic "-vores',
      answer: 'carnivore and herbivore',
      pointValue: 200,
      categoryId: 2
    },
    { 
      question: 'In humans this collection of nerves extends from the base of the skull to the second lumbar vertebra',
      answer: 'spinal cord',
      pointValue: 300,
      categoryId: 2
    },
    { 
      question: '(<a href="http://www.j-archive.com/media/2009-04-28_DJ_22.wmv">Jimmy of the Clue Crew gets in his workout.</a>)  Physical activity increases both body temperature & this process in which food is converted to protein, carbs & fat & then used for energy',
      answer: 'metabolism',
      pointValue: 400,
      categoryId: 2
    },
    { 
      question: 'Alimentary, my dear! waves of contractions moving swallowed food through the esophagus are called this',
      answer: 'peristalsis',
      pointValue: 500,
      categoryId: 2
    },


    


    {
      question: "Demonstrators were kicked out of this city's Lincoln Park August 27, 1968",
      pointValue: 100,
      answer: "Chicago",
      categoryId: 1
    },
    {
      question: "Though he left the service after WWII as a captain, today he holds the highest rank possible",
      pointValue: 200,
      answer: "Ronald Reagan",
      categoryId: 1
    },
    {
      question: "Country to which the U.S. began beaming Radio Marti in May 1985",
      pointValue: 300,
      answer: "Cuba",
      categoryId: 1
    },
    {
      question: "Though popular in early 1800s this Tennessee congressman was even more popular in the 1950s",
      pointValue: 400,
      answer: "Davy Crockett",
      categoryId: 1
    },
    {
      question: "This president vetoed more legislation than any other",
      pointValue: 500,
      answer: "Franklin Delano Roosevelt",
      categoryId: 1
    },
    {
      question: "From Latin for \"put an end to\", it's the term for reformers like Wm. L. Garrison who wanted to end slavery",
      pointValue: 100,
      answer: "Abolitionists",
      categoryId: 1
    },
    {
      question: "Thoroughly restored for its 100th birthday in 1986, on July 3 that year, its torch was relit",
      pointValue: 200,
      answer: "Statue of Liberty",
      categoryId: 1
    },
    {
      question: "In March 1974 it was announced that the wreck of this Union ironclad had been found off Cape Hatteras, N.C.",
      pointValue: 300,
      answer: "Monitor",
      categoryId: 1
    },
    {
      question: "In 10 minutes, this May 31, 1889 disaster destroyed a town & killed over 2,200 people",
      pointValue: 400,
      answer: "The Johnstown Flood",
      categoryId: 1
    },
    {
      question: "In September 1847 this general led the American troops that captured Mexico City",
      pointValue: 500,
      answer: "Winfield Scott",
      categoryId: 1
    },
    {
      question: "It's the present-day successor of the old Federal Radio Commission",
      pointValue: 100,
      answer: "the FCC (Federal Communications Commission)",
      categoryId: 1
    },
    {
      question: "Number of the Continental Congress which adopted the Declaration of Independence",
      pointValue: 200,
      answer: "the second",
      categoryId: 1
    },
    {
      question: "A cartoon by Thomas Nast in an 1874 Harper's Weekly was the 1st to use an elephant as this",
      pointValue: 300,
      answer: "the symbol of the Republican Party",
      categoryId: 1
    },
    {
      question: "The Liberty Bell cracked July 8, 1835 while tolling this Chief Justice's death",
      pointValue: 400,
      answer: "(John) Marshall",
      categoryId: 1
    },
    {
      question: "The verdict in the 1982 trial of John Hinckley Jr. for attempting to murder the president",
      pointValue: 500,
      answer: "not guilty by reason of insanity",
      categoryId: 1
    },
    {
      question: "In 1787 Patrick Henry refused to go to this convention; it's said that he \"smelt a rat",
      pointValue: 100,
      answer: "the Constitutional Convention",
      categoryId: 1
    },
    {
      question: "In 1864, not a hurricane, but this general caused a path of destruction almost 300 miles long & 60 wide",
      pointValue: 200,
      answer: "William T. Sherman",
      categoryId: 1
    },
    {
      question: "Looking for a good reelection issue in 1950, this Wisconsin senator took up anti-Communism on the advice of friends",
      pointValue: 300,
      answer: "Joseph McCarthy",
      categoryId: 1
    },
    {
      question: "This 1862 act gave American citizens 160 acres of land if they'd live on it for at least 5 years & improve it",
      pointValue: 400,
      answer: "The Homestead Act",
      categoryId: 1
    },
    {
      question: "An ink used in a newspaper cartoon in the 1890s gave us this term for sensationalist reporting",
      pointValue: 500,
      answer: "yellow journalism",
      categoryId: 1
    }
  ]
};
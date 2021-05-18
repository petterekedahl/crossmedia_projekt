const STATE = {
  userId: null,
  user: {},
  end: null,
};

const pageContents = {
  homepage: {
    image: '../spelapp/images/Seal_of_the_MPP1.png',
    title: "Dear Investigator,",
    p1: "We are happy that you have decided to join the MPP-programme.",
    p2: "The Ministry of Private Protection is a secret service agency based in The US. We are a small task force whom specify in solving some of the worlds most difficult crime cases one at a time. MPP also uses controversial methods in solving the cases we are working on. One of this method is letting volanteers help taking the investigation forward and inspecting the crime scenes. Taking on such a role comes with responsibility and trespassing the boundries and wasting time is not acceptable.",
    p3: "The case we are currently working on is a murder which have taken place in Malmö, Sweden. We have been gathering information about suspects and  interrogation records are at your disposal. Feel free to navigate around this app to find all the information you need to help us solve this case.",
    sincerly: "Sincerly,",
    us: "Ministry of Private Protection"
  }
};

const interrogationArray = [
  {
    name: 'Berg, Hulda',
    date: '2021-04-29',
    src: './interrogation-records/mall-interrogation-record.pdf'
  },
  {
    name: 'Deuretzbacher, Melanie',
    date: '2021-04-29',
    src: './interrogation-records/mall-interrogation-record.pdf'
  },
  {
    name: 'Nilsson, Sebastian',
    date: '2021-04-29',
    src: './interrogation-records/mall-interrogation-record.pdf'
  },
  {
    name: 'Hansson, Joanna',
    date: '2021-04-29',
    src: './interrogation-records/mall-interrogation-record.pdf'
  },
  {
    name: 'Ekedahl, Petter',
    date: '2021-04-29',
    src: './interrogation-records/mall-interrogation-record.pdf'
  },
];

const notifications = [
  {
    title: 'Investigation at Crime scene',
    content: 'We need help to investigate the crime scene for the murder commited on 21-05-15. At the scene you will find a house to the east with a company name written onto it, we need to know how many "." is in that name. Enter your answer on the "Investigation page" to lead the investigation forward.',
    location: "55.603149510241586, 13.000445868824446"
  }, 
  {
    title: 'Investigation at Crime scene',
    content: 'We need help to investigate the crime scene for the murder commited on 21-05-15. At the scene you will find a house to the east with a company name written onto it, we need to know how many "." is in that name. Enter your answer on the "Investigation page" to lead the investigation forward.',
    location: "55.603149510241586, 13.000445868824446"
  }
];

const addClues = [
  {
    id: 0,
    action: 'clues-guess',
    method: 'POST',
    content: 'What information did you find at the crime scene?'
  },
  {
    id: 1,
    action: 'clues-guess',
    method: 'POST',
    content: 'What information did you find at the crime scene?'
  },
]
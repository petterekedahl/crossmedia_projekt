const STATE = {
  userId: null,
  user: {},
  end: null,
};

const pageContents = {
  homepage: {
    image: '../spelapp/images/Seal_of_the_MPP1.png',
    title: "Dear user,",
    p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in dictum lectus. Integer ante felis, dictum ut facilisis at, sollicitudin eget elit. Fusce tincidunt nibh ac varius viverra. Duis fermentum scelerisque ornare. Aenean ac arcu et quam scelerisque faucibus a sagittis sem. Suspendisse laoreet gravida magna, sed finibus odio malesuada eget. Donec vel ligula maximus lacus faucibus sollicitudin ut eget magna. In vel mattis nisl.",
    p2: "Phasellus at lacus metus. Mauris at erat sagittis eros consectetur varius vitae ac erat. Nunc auctor a sem sed pharetra. Aliquam erat volutpat. Maecenas ultricies feugiat nisl, id hendrerit dolor. Praesent id neque quis enim tristique condimentum at eu lacus. Suspendisse malesuada est id arcu pharetra, non dignissim lectus vulputate.",
    p3: "Maecenas tempus tempus sodales. Integer at libero ac mi fringilla pellentesque. Vivamus sodales lectus non facilisis fermentum. Sed leo nisl, tristique sed nulla tempor, posuere blandit urna. Proin rutrum nisl sit amet mattis elementum. Vivamus tincidunt ex at consequat venenatis. Aliquam sit amet ullamcorper erat.",
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
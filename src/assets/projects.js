const projects = [
  {
    title: 'Tudor',
    date: 'Frontend Developer at Expend',
    bg: '#bbb',
    colour: '#333',
    text: [
      'University of Nottingham Compsci Grad',
      'Interested in networking, IoT, tools and game development'
    ],
    images: []
  },
  {
    title: 'Sleepy Studios',
    date: '2009 to present',
    bg: '#241b5f',
    text: [
      'Game development studio I co-founded. To date we\'ve made over 15 games, including three commercial projects, two of which (Superstatic and Scrunk) are available on Steam.',
      'Our focus has always been on prototyping and recently our aim has been to create unique and interesting multiplayer games (e.g. Entropy)',
      'We regularly participate in game jams, especially Ludum Dare. These usually culminate in new project ideas (e.g. Waker and Dangle). We also like to open source most our jam games too!',        
      'Our first game, Crawle, despite not being on Steam, was hugely successful in a time where Steam was the dominant platform for indie games. The game took over 4 years to complete',
    ],
    images: [
      require('../assets/ss.png'),
      require('../assets/entropy.png'),
      require('../assets/vigilante.png'),
      require('../assets/crawle.png')
    ],
    url: 'sleepystudios.net',
    builtWith: ['Unity', 'C#', 'JavaScript', 'Java', 'VB6']
  },
  {
    title: 'MobileAuth',
    date: 'October 2016',
    bg: '#00bb4e',
    text: [
      'A secure authentication system built for Capital One as part of a group project. A user logs in on the web, authenticates on their phone (using face or touch) and once authenticated, the webpage automatically updates to log them in',
      'Administrators also had access to a number of anonymous statistics such as login locations, phone platforms and authentication method popularity',
    ],
    images: [
      require('../assets/mobauth1.png'),
      require('../assets/mobauth2.png'),
      require('../assets/mobauth3.png')
    ],
    builtWith: ['Node', 'Angular2', 'TypeScript']
  },
  {
    title: 'Just Pick It',
    date: 'March 2017',
    bg: '#fba234',
    text: [
      'A web-app for storing potential going-out destinations (e.g. hotels, bars, restaurants). Anyone can create a lobby and share their lobby code to allow friends to add their own places and vote on existing ones',
      'The backend was originally built using Express and LowDB (a lodash-based database package) but was rewritten in 2018 to use serverless architecture (specifically Amazon Lambda) coupled with DynamoDB',  
    ],
    images: [
      require('../assets/jpi1.png'),
      require('../assets/jpi2.png'),
      require('../assets/jpi3.png'),
      require('../assets/jpi4.png')
    ],
    url: 'justpick.it',
    builtWith: ['Node', 'Angular4', 'Bootstrap', 'TypeScript', 'Amazon Lambda', 'DynamoDB']
  },
  {
    title: 'Waker',
    date: 'July 2017',
    bg: '#eaae1c',
    text: [
      'A routing system for Sleepy Studios servers. Using Waker we can easily query server locations and statuses. If a server is down the bot will notify us via Twitter',
      'Initially implemented using Express, in early 2018 I rewrote it to take advantage of serverless architecture using Amazon Lambda',
    ],
    columns: 2,
    images: [require('../assets/waker.png')],
    url: 'twitter.com/waker_bot',
    builtWith: ['Node', 'Serverless', 'Amazon Lambda']
  },
  {
    title: 'Interviews App',
    date: 'July 2017',
    bg: '#8761d6',
    text: [
      'An app I co-built during an internship at MHR. Allows potential candidates to record themselves answering interview questions, retry questions and review interviews by playing back individual clips',  
    ],
    columns: 4,
    images: [
      require('../assets/interview1.png'),
      require('../assets/interview2.png'),
      require('../assets/interview3.png'),
      require('../assets/interview4.png')
    ],
    builtWith: ['React Native']
  },
  {
    title: 'Check In',
    date: 'August 2017',
    bg: '#7f0d4a',
    text: [
      'Another app built at MHR. The app aims to augment employee check-ins by managing a list of agreements and talking points between a manager and employee with speech recognition to easily store conversation notes for later review',
      'The app also features video calling via Twilio and a socket server to synchronise events between managers and employees',  
    ],
    columns: 4,
    images: [
      require('../assets/checkin1.png'),
      require('../assets/checkin2.png'),
      require('../assets/checkin3.png'),
      require('../assets/checkin4.png'),
      require('../assets/checkin5.png'),
      require('../assets/checkin6.png'),
      require('../assets/checkin7.png')
    ],
    builtWith: ['Ionic3', 'TypeScript', 'Twilio']
  },
  {
    title: 'Dangle',
    date: 'August 2017',
    bg: '#f82869',
    text: [
      'A tool for finding and scheduling other players for small multiplayer games. Users can add games, create and view event times in order to see when other players will be online',
      'Users can also participate in discussions using the custom-built forum system',
      'Reports and requests to change info about games are handled through the Waker bot and rendered serverside using Pug', 
    ],
    columns: 3,
    images: [
      require('../assets/dangle0.png'),
      require('../assets/dangle.png'), 
      require('../assets/dangle2.png'),
      require('../assets/dangle3.png'),
      require('../assets/dangle4.png')
    ],
    url: 'github.com/sekaru/dangle',
    builtWith: ['Node', 'Angular4', 'Material', 'SASS', 'TypeScript', 'Pug']
  },
  {
    title: 'Eyes',
    date: 'September 2017 - May 2018',
    bg: '#34b4f0',
    text: [
      'A visualisation of Waker showing physical server locations and statuses'
    ],
    columns: 2,
    images: [
      require('../assets/eyes.png')
    ],
    url: 'github.com/sekaru/eyes',
    builtWith: ['Angular4', 'TypeScript']
  },
  {
    title: 'tudr.xyz',
    date: 'September 2017 - September 2018',
    bg: '#404040',
    text: [
      'A portfolio site built over a weekend to learn Vue. The app features a dynamic slide system used to display each project and utilises CircleCI to automatically build and deploy',
    ],
    columns: 2,
    images: [require('../assets/oldtudr.png')],
    url: 'sleepystudios.net/oldtudr',
    builtWith: ['Vue']
  },
  {
    title: 'Yoop',
    date: 'November 2017 - February 2018',
    bg: '#d2424b',
    text: [
        'A platform aiming to eliminate fake news by allowing users to rate news as part of a self-regulating community',
        'I worked on Yoop\'s React frontend, Chrome extension and React Native mobile app. I redesigned and reworked existing interfaces, brought them up to modern web standards and contributed UX improvements',
    ],
    images: [
      require('../assets/yoop1.png'),
      require('../assets/yoop2.png'),
      require('../assets/yoop3.png'),
      require('../assets/yoop4.png')
    ],
    builtWith: ['React', 'React Native']
  },
  {
    title: 'Just Map It',
    date: 'November 2017',
    bg: '#f67e24',
    text: [
      'A Just Pick It mobile companion app allowing you to add places to your lobby by tapping on them in a Google Maps interface',  
    ],
    images: [
      require('../assets/jmi0.png'),
      require('../assets/jmi1.png'),
      require('../assets/jmi2.png'),
      require('../assets/jmi3.png'),
      require('../assets/jmi4.png')
    ],
    url: 'github.com/sekaru/justmapit',
    builtWith: ['React Native', 'Google Maps & Places APIs']
  },
  {
    title: 'LIFX Visualiser',
    date: 'January 2018',
    bg: '#000',
    text: [
      'Visualise your Spotify music through a LIFX device using Spotify\'s web API and audio analysis tool',
    ],
    images: [],
    url: 'github.com/sekaru/spotify-lifx-visualiser',
    builtWith: ['Node', 'Pug', 'Spotify API']
  },
  {
    title: 'Octopocto',
    date: 'February 2018',
    bg: '#6f33a2',
    text: [
      'A web app that automatically generates a portfolio from your public GitHub profile and shows your favourite languages and topics',
    ],
    images: [
      require('../assets/octo1.png'),   
      require('../assets/octo2.png')  
    ],
    url: 'sekaru.github.io/Octopocto',
    builtWith: ['React', 'GitHub API']
  },
  {
    title: 'Eyes 2',
    date: 'May 2018',
    bg: '#30334d',
    text: [
      'An Eyes rewrite made to be faster, more convenient and more transparent. It\'s built with Inferno for speed and has support for extra server descriptions such as if the server is still in development or discontinued',
    ],
    columns: 2,
    images: [
      require('../assets/eyes2.png')
    ],
    url: 'sleepystudios.net/eyes',
    builtWith: ['Inferno']
  },
  {
    title: 'LightShow',
    date: 'June 2018',
    wip: true,
    bg: '#199865',
    text: [
      'An Android app for creating custom light shows using your LIFX devices',
      'The app allows you to setup sequences. These sequences then show up on the main dashboard and activate when pressed'
    ],
    columns: 4,
    images: [
      require('../assets/ls1.jpg'),
      require('../assets/ls2.jpg'),
      require('../assets/ls3.jpg')
    ],
    url: 'github.com/sekaru/lifx-lightshow',
    builtWith: ['React Native']
  },
  {
    title: 'Just Pick It 2',
    date: 'September 2018',
    bg: '#ffaa5a',
    text: [
      'Just Pick It, reborn. Rewritten from the ground up using Inferno',
      'This time round, you can search for places using the Google Places API and automatically add them to your lobby.',
      'The highlight of this rewrite is the ability to have multiple boards within a lobby. For example a main board for all the places you want to go and other boards for temporary events like a birthday night out or places to go while on holiday.'
    ],
    columns: 3,
    images: [
      require('../assets/jpi21.png'),
      require('../assets/jpi22.png'),
      require('../assets/jpi26.png'),
      require('../assets/jpi24.png'),
      require('../assets/jpi25.png'),
      require('../assets/jpi23.png')
    ],
    url: 'justpick.it',
    builtWith: ['Inferno, Google Places API']
  },
  {
    title: 'DevStreak',
    date: 'January 2019',
    bg: '#7289DA',
    text: [
      'A open-source Discord Bot and server dedicated to keeping up a streak of doing something every day',
      'Users can start and progress streaks using the !streak command in a specific chosen channel followed by the work they did',
      'Users can have one active streak per channel and can see all the active streaks in the channel as well as whether or not they have progressed their own streak today',
      'At the end of the day, the highest active streaks are announced and streaks that haven\'t been continued are reset'
    ],
    columns: 2,
    images: [
      require('../assets/ds5.png'),
      require('../assets/ds4.png'),
      require('../assets/ds3.png'),
      require('../assets/ds2.png'),
      require('../assets/ds1.png')
    ],
    url: 'discord.gg/zs2CQk',
    builtWith: ['Discord.js', 'lowdb', 'Node']
  }
]

export default projects
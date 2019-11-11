const projects = [
  {
    title: 'Tudor',
    date: 'Frontend Developer at Expend',
    bg: '#5082D2',
    colour: '#fff',
    text: [
      'Currently looking for a diverse opportunity where I can develop both my frontend and design skills as well as work on a user-facing product still finding its feet',
      'Interested in IoT, sound/lighting systems, connectivity, discoverability and game development'
    ],
    images: [],
    urls: [
      {
        link: 'https://github.com/sekaru',
        text: 'GitHub'
      },
      {
        link: 'https://twitter.com/sekaru_',
        text: 'Twitter'
      },
      {
        link: 'https://www.linkedin.com/in/tudor-sandulescu-257bb5130',
        text: 'LinkedIn'
      },
      {
        link: 'cv.pdf',
        text: 'CV'
      }
    ]
  },
  {
    title: 'Sleepy Studios',
    date: '2009 to present',
    bg: '#352c6f',
    text: [
      'Game development studio I co-founded. To date we\'ve made over 15 games, including three commercial projects, two of which (Superstatic and Scrunk) are available on Steam',
      'Our focus has always been on prototyping and recently our aim has been to create unique and interesting multiplayer games (e.g. Entropy)',
      'We regularly participate in game jams, especially Ludum Dare. These usually culminate in new project ideas (e.g. Waker and Dangle). We also like to open source our jam games too!',        
      'Our first game, Crawle, despite not being on Steam, was hugely successful in a time where Steam was the dominant platform for indie games. Crawle evolved from being a simple 4-year passion project to a great first step in the indie games industry',
    ],
    images: [
      require('../assets/images/ss.png'),
      require('../assets/images/entropy.png'),
      require('../assets/images/vigilante.png'),
      require('../assets/images/crawle.png')
    ],
    urls: [
      {
        link: 'https://sleepystudios.net',
        text: 'sleepystudios.net'
      },
      {
        link: 'https://github.com/sleepystudios',
        text: 'github.com/sleepystudios'
      }
    ],
    builtWith: ['Unity', 'C#', 'JavaScript', 'Java', 'VB6']
  },
  {
    title: 'Expend',
    date: 'October 2018 - Present',
    bg: '#00abc8',
    colour: '#fff',
    text: [
      'I led the development of the Expend frontend from January 2019 onwards, designing and implementing the majority of the product\'s largest features',
      'I managed the development of the outsourced app and the contractor working on it as well as fixing time-critical bugs when necessary',
      'I took over all design duties creating mockups, vector art, animations, marketing materials and print media',
      'I led the rebrand of the company to our new branding including redesigning the web app, mobile app and website'
    ],
    columns: 3,
    images: [
      require('../assets/images/expend1.png'),
      require('../assets/images/expend2.png'),
      require('../assets/images/expend3.png'),
      require('../assets/images/expend4.png'),
      require('../assets/images/expend5.png'),
      require('../assets/images/expend6.png')
    ],
    urls: [
      {
        link: 'https://expend.io',
        text: 'expend.io'
      }
    ],
    builtWith: ['React, React Native, Invision Studio, Figma, After Effects']
  },
  {
    title: 'DevStreak',
    date: 'January 2019 to August 2019',
    bg: '#7289DA',
    text: [
      'A open-source Discord Bot and server dedicated to keeping up a streak of doing something every day',
      'Users can start and progress streaks using the !streak command in a specific chosen channel followed by the work they did',
      'Users can have one active streak per channel and can see all the active streaks in the channel as well as whether or not they have progressed their own streak today',
      'At the end of the day, the highest active streaks are announced and streaks that haven\'t been continued are reset',
      'Streakbot also has an API for querying purposes, built with Koa',
      'As of August 2019, DevStreak has had 775 streak updates by 40 users with the highest streak being 36 days'
    ],
    columns: 3,
    images: [
      require('../assets/images/ds5.png'),
      require('../assets/images/ds4.png'),
      require('../assets/images/ds3.png'),
      require('../assets/images/ds2.png'),
      require('../assets/images/ds1.png')
    ],
    urls: [
      {
        link: 'https://discord.gg/zs2CQk',
        text: 'discord.gg/zs2CQk'
      }
    ],
    builtWith: ['Discord.js', 'lowdb', 'Node', 'Koa']
  },
  {
    title: 'Just Pick It 2',
    date: 'September 2018',
    bg: '#ffaa5a',
    text: [
      'Just Pick It, reborn. Rewritten from the ground up using Inferno',
      'In this version, you can search for places using the Google Places API and automatically add them to your lobby.',
      'The highlight of this rewrite is the ability to have multiple boards within a lobby. For example a main board for all the places you want to go and other boards for temporary events like a birthday night out or places to go while on holiday.'
    ],
    columns: 3,
    images: [
      require('../assets/images/jpi21.png'),
      require('../assets/images/jpi22.png'),
      require('../assets/images/jpi26.png'),
      require('../assets/images/jpi24.png'),
      require('../assets/images/jpi25.png'),
      require('../assets/images/jpi23.png')
    ],
    urls: [
      {
        link: 'https://justpick.it',
        text: 'justpick.it'
      }
    ],
    builtWith: ['Inferno, Google Places API']
  },
  {
    title: 'LightShow',
    date: 'June 2018, April 2019',
    bg: '#199865',
    text: [
      'An iOS/Android app for creating custom light shows using your LIFX devices',
      'The app allows you to setup sequences. These sequences then show up on the main dashboard and activate when pressed',
      'Sequences can loop and are made up of actions. Actions specify hue/saturation/kelvin/brightness as well as custom delays and transition times'
    ],
    columns: 6,
    images: [
      require('../assets/images/ls1.png'),
      require('../assets/images/ls2.png'),
      require('../assets/images/ls3.png')
    ],
    urls: [
      {
        link: 'https://github.com/sekaru/lightshow',
        text: 'github.com/sekaru/lightshow'
      }
    ],
    builtWith: ['React Native']
  },
  {
    title: 'Eyes 2',
    date: 'May 2018',
    bg: '#52556f',
    text: [
      'An Eyes rewrite made to be faster, more convenient and more transparent. It\'s built with Inferno for speed and has support for extra server tags such as if the server is still in development or discontinued',
    ],
    columns: 2,
    images: [
      require('../assets/images/eyes2.png')
    ],
    urls: [
      {
        link: 'https://sleepystudios.net/eyes',
        text: 'sleepystudios.net/eyes'
      }
    ],
    builtWith: ['Inferno']
  },
  {
    title: 'Octopocto',
    date: 'February 2018',
    bg: '#6f33a2',
    text: [
      'A web app that automatically generates a portfolio from your public GitHub profile and shows your favourite languages and topics',
    ],
    images: [
      require('../assets/images/octo1.png'),   
      require('../assets/images/octo2.png')  
    ],
    urls: [
      {
        link: 'https://sekaru.github.io/Octopocto',
        text: 'sekaru.github.io/Octopocto'
      }
    ],
    builtWith: ['React', 'GitHub API']
  },
  {
    title: 'LIFX Visualiser',
    date: 'January 2018',
    bg: '#000',
    text: [
      'Visualise your Spotify music through a LIFX device using Spotify\'s web API and audio analysis tool',
      'The visualiser includes a number of different modes for how colours change and how beats are detected as well as many other settings for personalising the visualiser'
    ],
    videos: [
      require('../assets/videos/visualiser.mp4')
    ],
    urls: [
      {
        link: 'https://github.com/sekaru/spotify-lifx-visualiser',
        text: 'github.com/sekaru/spotify-lifx-visualiser'
      }
    ],
    builtWith: ['Node', 'Pug', 'Spotify API']
  },
  {
    title: 'Just Map It',
    date: 'November 2017',
    bg: '#f67e24',
    text: [
      'A Just Pick It mobile companion app allowing you to add places to your lobby by tapping on them in a Google Maps interface',  
    ],
    images: [
      require('../assets/images/jmi0.png'),
      require('../assets/images/jmi1.png'),
      require('../assets/images/jmi2.png'),
      require('../assets/images/jmi3.png'),
      require('../assets/images/jmi4.png')
    ],
    urls: [
      {
        link: 'https://github.com/sekaru/justmapit',
        text: 'github.com/sekaru/justmapit'
      }
    ],
    builtWith: ['React Native', 'Google Maps & Places APIs']
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
      require('../assets/images/yoop1.png'),
      require('../assets/images/yoop2.png'),
      require('../assets/images/yoop3.png'),
      require('../assets/images/yoop4.png')
    ],
    builtWith: ['React', 'React Native']
  },
  {
    title: 'tudr.xyz',
    date: 'September 2017 - September 2018',
    bg: '#555',
    text: [
      'My old portfolio built over a weekend to learn Vue. The app features a dynamic slide system used to display each project and utilises CircleCI to automatically build and deploy',
    ],
    columns: 2,
    images: [require('../assets/images/oldtudr.png')],
    urls: [
      {
        link: 'https://sleepystudios.net/oldtudr',
        text: 'sleepystudios.net/oldtudr'
      }
    ],
    builtWith: ['Vue']
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
      require('../assets/images/eyes.png')
    ],
    urls: [
      {
        link: 'https://github.com/sekaru/eyes',
        text: 'github.com/sekaru/eyes'
      }
    ],
    builtWith: ['Angular4', 'TypeScript']
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
      require('../assets/images/dangle0.png'),
      require('../assets/images/dangle.png'), 
      require('../assets/images/dangle2.png'),
      require('../assets/images/dangle3.png'),
      require('../assets/images/dangle4.png')
    ],
    urls: [
      {
        link: 'https://github.com/sekaru/dangle',
        text: 'github.com/sekaru/dangle'
      }
    ],
    builtWith: ['Node', 'Angular4', 'Material', 'SASS', 'TypeScript', 'Pug']
  },
  {
    title: 'Check In',
    date: 'August 2017',
    bg: '#750d45',
    text: [
      'An app I built during an internship at MHR. The app aims to augment employee check-ins by managing a list of agreements and talking points between a manager and employee with speech recognition to easily store conversation notes for later review',
      'The app also features video calling via Twilio and a socket server to synchronise events between managers and employees',  
    ],
    columns: 4,
    images: [
      require('../assets/images/checkin1.png'),
      require('../assets/images/checkin2.png'),
      require('../assets/images/checkin3.png'),
      require('../assets/images/checkin4.png'),
      require('../assets/images/checkin5.png'),
      require('../assets/images/checkin6.png'),
      require('../assets/images/checkin7.png')
    ],
    builtWith: ['Ionic3', 'TypeScript', 'Twilio']
  },
  {
    title: 'Interviews App',
    date: 'July 2017',
    bg: '#be2864',
    text: [
      'An app I co-built during an internship at MHR. Allows potential candidates to record themselves answering interview questions, retry questions and review interviews by playing back individual clips',  
    ],
    columns: 6,
    images: [
      require('../assets/images/interview1.png'),
      require('../assets/images/interview2.png'),
      require('../assets/images/interview3.png'),
      require('../assets/images/interview4.png')
    ],
    builtWith: ['React Native']
  },
  {
    title: 'Waker',
    date: 'July 2017',
    bg: '#eaae1c',
    text: [
      'A routing system for Sleepy Studios servers. Using Waker we can easily query geographical server locations and statuses. If a server is down the bot will notify us via Twitter',
      'Initially implemented using Express, in early 2018 I rewrote it to take advantage of serverless architecture using Amazon Lambda',
    ],
    columns: 2,
    images: [require('../assets/images/waker.png')],
    url: 'twitter.com/waker_bot',
    urls: [
      {
        link: 'https://twitter.com/waker_bot',
        text: 'twitter.com/waker_bot'
      }
    ],
    builtWith: ['Node', 'Serverless', 'Amazon Lambda']
  },
  {
    title: 'Just Pick It',
    date: 'March 2017',
    bg: '#fba234',
    text: [
      'A web-app for storing potential going-out destinations (e.g. hotels, bars, restaurants). Anyone can create a lobby and share their lobby code to allow friends to add their own places and vote on existing ones',
      'The backend was originally built using Express and lowDB (a lodash-based database package) but was rewritten in 2018 to use serverless architecture (specifically Amazon Lambda) coupled with DynamoDB',  
    ],
    images: [
      require('../assets/images/jpi1.png'),
      require('../assets/images/jpi2.png'),
      require('../assets/images/jpi3.png'),
      require('../assets/images/jpi4.png')
    ],
    url: 'justpick.it',
    urls: [
      {
        link: 'https://github.com/sekaru/JustPickIt',
        text: 'github.com/sekaru/JustPickIt'
      }
    ],
    builtWith: ['Node', 'Angular4', 'Bootstrap', 'TypeScript', 'Amazon Lambda', 'DynamoDB']
  },
  {
    title: 'MobileAuth',
    date: 'October 2016',
    bg: '#00bb4e',
    text: [
      'A secure authentication system built for Capital One as part of a group project. A user logs in on the web, authenticates on their phone (using face or touch) and once authenticated, the frontend automatically updates to log them in',
      'Administrators also had access to a number of anonymous statistics such as login locations, phone platforms and authentication method popularity',
      'I developed the frontend and backend (starting in PHP and then later rewriting it in JavaScript) and managed the technical and UX/design aspects of the project'
    ],
    images: [
      require('../assets/images/mobauth1.png'),
      require('../assets/images/mobauth2.png'),
      require('../assets/images/mobauth3.png')
    ],
    builtWith: ['Node', 'Angular2', 'TypeScript']
  },
  {
    title: 'Small Projects',
    date: 'Prototypes and experiments',
    bg: '#5082D2',
    colour: '#fff',
    smallProjects: [
      {
        title: 'BadBook',
        text: 'A minimal social network built with Inferno, Serverless, Amazon Lambda and DynamoDB. The platform allows users to customise their posts (such as the text and background colours) and react to other posts. Users can choose to sign up or remain completely anonymous',
        url: 'sleepystudios.net/badbook'
      },
      {
        title: 'AppyHour',
        text: 'A React app showing happy hour deals in London with an automatically curated view of live deals',
        url: 'sleepystudios.net/appyhour'
      },
      {
        title: 'LIFX Visualiser 2',
        text: 'A music visualiser that uses raw audio to control smart lights. Building on this, the dev branch has a colour definition system, allowing users to define their own colours as well as how they\'re triggered (e.g. when the volume hits a certain threshold or a specific percentage change in volume) as well as which lights to use',
        url: 'github.com/sekaru/lifx-visualiser2'
      }
    ],
    images: []
  }
]

export default projects
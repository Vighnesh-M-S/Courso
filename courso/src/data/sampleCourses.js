const sampleCourses =[
    {
   id: 1, // Unique identifier for the course
   name: 'Introduction to React Native',
   instructor: 'John Doe', // Name of the course instructor
   description: 'Learn the basics of React Native development and build your first mobile app.',
   enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'InProgress',
   duration: '8 weeks', // Duration of the course
   schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
   location: 'Online',
   thumbnail: 'https://www.vcubesoftsolutions.com/wp-content/uploads/2021/11/2124-1024x576.jpg',
   prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
   likes: 5,
   syllabus: [
       {
       week: 1,
       topic: 'Introduction to React Native',
       content: 'Overview of React Native, setting up your development environment.'
       },
       {
       week: 2,
       topic: 'Building Your First App',
       content: 'Creating a simple mobile app using React Native components.'
       },
       // Additional weeks and topics...
       ],
       students: [
       {
       id: 101,
       name: 'Alice Johnson',
       email: 'alice@example.com',
       },
       {
       id: 102,
       name: 'Bob Smith',
       email: 'bob@example.com',
       },
       // Additional enrolled students...
       ]
   },
   {
   id: 2, // Unique identifier for the course
   name: 'Introduction to React',
   instructor: 'John Dow',
   description: 'Learn the basics of React Native development and build your first mobile app.',
   enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'InProgress',
   duration: '8 weeks', // Duration of the course
   schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
   location: 'Online',
   thumbnail: 'https://www.excelptp.com/wp-content/uploads/2021/05/react-native-banner-img.jpg',
   prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
   likes: 6,
   syllabus: [
       {
       week: 1,
       topic: 'Introduction to React Native',
       content: 'Overview of React Native, setting up your development environment.'
       },
       {
       week: 2,
       topic: 'Building Your First App',
       content: 'Creating a simple mobile app using React Native components.'
       },
       // Additional weeks and topics...
       ],
       students: [
       {
       id: 101,
       name: 'Charlie Brown',
       email: 'alice@example.com',
       },
       {
       id: 102,
       name: 'Bob Smith',
       email: 'bob@example.com',
       },
       // Additional enrolled students...
       ]
   },

   {
    id: 2, // Unique identifier for the course
    name: 'Introduction to Python',
    instructor: 'peter',
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Closed', // Can be 'Open', 'Closed', or 'InProgress',
    duration: '8 weeks', // Duration of the course
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    thumbnail: 'https://www.excelptp.com/wp-content/uploads/2021/05/react-native-banner-img.jpg',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    likes: 6,
    syllabus: [
        {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
        },
        {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
        },
        // Additional weeks and topics...
        ],
        students: [
        {
        id: 101,
        name: 'Charlie Brown',
        email: 'alice@example.com',
        },
        {
        id: 102,
        name: 'Bob Smith',
        email: 'bob@example.com',
        },
        // Additional enrolled students...
        ]
    },

    {
        id: 2, // Unique identifier for the course
        name: 'Introduction to Java',
        instructor: 'David',
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'InProgress',
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        thumbnail: 'https://www.excelptp.com/wp-content/uploads/2021/05/react-native-banner-img.jpg',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        likes: 6,
        syllabus: [
            {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'
            },
            {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
            },
            // Additional weeks and topics...
            ],
            students: [
            {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com',
            },
            {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com',
            },
            // Additional enrolled students...
            ]
        }
   
];

export const fetchCourses = async () => {
    // Simulate fetching data from an API
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(sampleCourses);
      }, 1000); // Simulating delay of 1 second
    });
  };
 
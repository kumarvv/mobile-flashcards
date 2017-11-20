export function generateSampleData() {
  return {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    },
    Java: {
      title: 'Java',
      questions: [
        {
          question: 'Which version of Java?',
          answer: 'Current active version is 8. But 9 is on the way soon with more features'
        },
        {
          question: 'Best feature in Java?',
          answer: 'Multi-threading and concurrency'
        },
        {
          question: 'What would you like to improve?',
          answer: 'More functional programming features, and short coding options'
        }
      ]
    },
  }
}
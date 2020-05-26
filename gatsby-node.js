exports.createPages = ({ actions: { createPage } }) => {
  const questions = require("./src/data/questions.json")
  
  questions.forEach( (question, index) => {
    createPage({
      path: `/question/${index.toString()}/`,
      component: require.resolve("./src/templates/question.js"),
      context: {
        title: question.title,
        options: question.options
      },
    })
  })
}
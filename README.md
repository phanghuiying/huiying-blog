# HUIYING-BLOG

HUIYING-BLOG is simple blog built using react that allow people to know some basic info about me. Check it out [here](https://phanghuiying.github.io/huiying-blog/)!

## Setup

To run this project, clone this repo and run the following code:

```
$ npm install
$ npm run dev
```

## Technologies Used

-   [React](https://github.com/reactjs/reactjs.org)
-   [ChakraUI](https://chakra-ui.com/getting-started)
-   [ESlint](https://eslint.org/docs/latest/use/getting-started)
-   [prettier](https://prettier.io/)

## Blog Homescreen
![Blog Homescreen](/public/webapp-homescreen.png?raw=true "Blog Homescreen")

## Unit Testing with jest/react-testing-library
### App
-   Page rendered correctly with submit button disabled
-   Links to socials are correct
-   Emoji button clicked should be same as what is displayed

### MessageForm component
-   Component rendered correctly with submit button disabled
-   Error helper text should appear if text fields are not in initial state and empty
-   Submit button should be disabled if either of the text fields are empty
-   If validation pass, submit button should be clickable

## Best practices

-   [Adhering to naming conventions](https://kinsta.com/blog/react-best-practices/#3-adhere-to-naming-conventions)
    -   PascalCase for component names and camelCase for variables, functions, and hooks etc.
-   [Using a linter](https://kinsta.com/blog/react-best-practices/#4-use-a-linter)
    -   Maintaining a consistent code base
-   [Unit testing for code](https://kinsta.com/blog/react-best-practices/#11-monitor-and-test-your-code)
    -   Detecting errors and bugs early
-   [Using functional components](https://kinsta.com/blog/react-best-practices/#12-make-use-of-functional-components)
    - Write lesser code, easier to read and easier to manage states with hooks
-   [Using Typescript](https://www.freecodecamp.org/news/best-practices-for-react/amp/)
    - Static type checking, catching type errors
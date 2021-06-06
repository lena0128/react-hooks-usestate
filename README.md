# React Hooks - useState

## Overview of React Hooks

- Hooks are functions
- Can only be used in functional components
- With hooks, we no longer have any need for class components
- Must be called in the exact same order every time
    - Can not be used in nested closures or blocks (such as if statements)
- [Docs](https://reactjs.org/docs/hooks-intro.html)

## useState

- Takes the place of state and setState
- Returns an array of 2 items - your state value and a function to change that value
- Can be used more than once in a component
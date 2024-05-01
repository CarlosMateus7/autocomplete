1. **What is the difference between Component and PureComponent?
Give an example where it might break my app.**
    
    Both are classes provided by React
    
    Component: 
    
    - does not implement ‘shouldComponentUpdate()’
    - when extends ‘Component’ it will re-render when parent component re-renders regardless of whether its props or state have changed
    - That mean that even if the component receives the same props or its state remain unchained, it still re-render
    - PureComponent
        - implement  ‘shouldComponentUpdate()’
        - it only re-renders if its props or state have changed
        - If there are no changes, React skips re-render, optimizing performance
    - Example:
    If I have a parent component and a child component, the parent component renders the child component and passes down a prop to it. If the prop passed down to the child component is an object or an array, and I mutate that object or array in the parent component, it can potentially break the app when using **`PureComponent`**.

1. Context + ShouldComponentUpdate might be dangerous. Why is that?
    1. Could be dangerous for the following:
        1. Bypassing: Changes to context values can cause components consuming that context to re-render. That could lead to unexpected re-renders and performance issues.
        2. Performance Impact: as mentioned before, re-renders can decrease performance.
        3. Complexity and Maintainability: mixing both can introduce complexity and make code harder to understand and maintain.
        4. Debugging challenges: due to unexpected re-renders caused by changes in context could be challenging, making debugging difficult.
        
2. Describe 3 ways to pass information from a component to its PARENT.
    1. We can pass information from a **Callback** function from parent to child component as a prop. **Context API** that allows us to share data across the component tree without passing props. **State Lifting:** If the components share a common ancestor, we can lift the state up to the nearest common ancestor and pass down the state and functions as props. 
    
3. Give 2 ways to prevent components from re-rendering.
    1. **React Memo** that memoizes the component, preventing re-renders if the props remain the same.
    2. **Optimizing ShouldComponentUpdate** that will optimize rendering by preventing re-renders when relevant data hasn’t changed.
    
4. What is a fragment and why do we need it? Give an example where it might break my app.
    1. Fragment is a lightweight syntax that allow to group multiple children elements without adding extra node to the DOM.
    2. Example where it might break my app
        1. If I have a component that renders a list of items that has unique keys, and I forget to wrap the list items in a fragment or a container element, it might break the app because React requires each child in a list to have a unique key prop.
        
5. Give 3 examples of the HOC pattern.
    1. Technique for code reuse, logic abstraction and composability.
        1. **withLoading HOC - adds loading state management to a component**
        2. **withAuthentication HOC - adds authentication logic to a component. It will check if the user is authenticated and redirect to the login page or not**
        3. **withLogger HOC - logs lifecycle events of a component for debugging purposes.**
        
6. What's the difference in handling exceptions in promises, callbacks and async...await?
    1. Promises - use .then() method to resolved values, .catch() to reject (exception) values 
    2. Callbacks - pass an error object as the first argument to the callback function. We as a developers need to manually check errors within the callback function and handle them.
    3. async/away - provide more asynchronous code, use try/catch blocks as well as the promises to handle exceptions.
    
7. How many arguments does setState take and why is it async.
    1. The first one is Partial State that is an object containing the partial state that we want to update. The second one is an optional argument (callback function) that will be invoked after the state has been updated and the component re-rendered.
    
8. List the steps needed to migrate a Class to Function Component.
    1. Identify State and Lifecycle Methods
    2. Rewrite State Variables
    3. Rewrite Lifecycle Methods
    4. Rewrite Class Methods
    5. Handle Events:
    6. Remove Constructor
    7. Remove this Keyword
    8. Review Props Usage
    9. Review Context Usage
    10. Review Refs
    11. Review Component Name
    12. Test and Debug
    
9. List a few ways styles can be used with components.
    1. **Inline Styles**
    2. CSS Classes
    3. Styled components
    4. CSS modules
    5. global stylesheets
    6. CSS libraries like emotion, radium, etc
    
10. How to render an HTML string coming from the server.
    1. For example we can use ‘document.getElementById("content").innerHTML = responseHTML;’
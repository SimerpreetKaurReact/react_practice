Project includes multiple smaller react project, each explaining a basic react functionality.
The fucntionality sequence is as follows for each individual poject

1.
2.
3.
4. Login_component: useEffect, debouncing for 500ms with useEffect
5. useReducer:Simple login app with useReducer,useContext, with seperate custom context provider component,with custom input, button components,+ inputref example
6. food order app: another useReducer, useContext,portals example
7. callback example, memo example
8. Classbased components with context provider

Rules of Hooks

1. Only call react hooks in react functions: react component functions, custom hooks
2. Only call hooks at top level, dont call them in nested functions, and neither in block statements
3. Always add everything you refer to inside the useEffect as a dependency

a)React schedules all state changes, order of state change is kept, but still update state as setState is saferif using prevState instead of using current snapshot pf state
b) State scheduling is batched if multiple state changes are occuring without any promise/then in between

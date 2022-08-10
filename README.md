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
9. TASKS: contains react custom hook project which is todo components storing data in firebase db
10. FORMS: contains forms custom hook project
    Rules of Hooks

11. Only call react hooks in react functions: react component functions, custom hooks
12. Only call hooks at top level, dont call them in nested functions, and neither in block statements
13. Always add everything you refer to inside the useEffect as a dependency

a)React schedules all state changes, order of state change is kept, but still update state as setState is saferif using prevState instead of using current snapshot pf state
b) State scheduling is batched if multiple state changes are occuring without any promise/then in between
//props for configuration
//context for state mangament across componenets

1. react context is not optimized for high frequency changes
2. UseEffect with empty array runs after the component was rendered for the first time

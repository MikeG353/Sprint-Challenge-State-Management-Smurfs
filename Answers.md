1. What problem does the context API help solve?

The context API helps solve the props drilling issue.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are for the most part lables. They package the name of the action, the name of the function, the payload of the action etc. reducers are the actions themselves. They are your logic tree for that component. and the store is the place that the functions and the data that is being worked on is stored. It is the single source for truth because if a component needs to know anything in the application state, they look in the store.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other? 

Application state is state that needs to be tracked and used by the entire app across multiple components. Component state is state that only a single component uses. if something you change in one component needs to be used by so0me code elsewhere, it should be application level so you dont get differences in data.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`? 

Redux-thunk allowls us to create asynchronous actions, such as axios requests which require us to wait for a return from our promise.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

So far I like Context. My original major is college was going to be network security, so.. I'm predisposed to the concept of only allowing an opject to have what it needs and nothing else.

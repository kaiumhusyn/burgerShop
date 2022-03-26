import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
             <h4 className='qHead'>How React Work?</h4>
             <br />
            <p>React is a declarative programming language. Imagine the following code written as an app to demonstrate what we mean by declarative code. Imagine a screen with a navbar, a header, a filter, and a list, similar to the one below. This is because each line of code defines what each app part is. React, at its heart, essentially maintains a tree for you. On the nodes, this tree can perform efficient diff computations.Consider your HTML code to be a tree. That is, in fact, how the browser handles your DOM your rendered HTML on the browser.</p>
            <br />
            <h4 className='qHead'>How useStates work?</h4>
            <br />
            <p>You make a functioning component, attach a React hook that tracks state and updates it, and it just works. Okay, that's fantastic, but how does it work its magic? Take a look at the line React.useState. It's so simple to read that I've never doubted it. I have a destructed array that extracts the count value, as well as a setCount method that will set count to the default value that I gave into useState. When I add another React.useState to the place, what happens?</p>
        </div>
    );
};

export default Question;
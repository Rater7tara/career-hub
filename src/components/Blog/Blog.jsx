import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='blog-div'>
            <div className='banner-div'>
                <img className='det-banner
                ' src={'https://img.freepik.com/premium-photo/blog-writing-online-internet-computer_770123-5681.jpg?size=626&ext=jpg&ga=GA1.1.205563488.1680186315&semt=ais'} alt="" />
            </div>
            <div>
                <Accordion defaultActiveKey="0" className='text-start'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>1. When are Custom API used?</Accordion.Header>
                        <Accordion.Body>
                            Custom APIs are an alternative to Custom process actions. Custom process actions provide a no-code way to include custom messages but has some limitations for developers. Custom APIs provide capabilities specifically for developers to define their logic in code with more options.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2. What is Custom Hook in React JS?</Accordion.Header>
                        <Accordion.Body>
                            Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>3. What is useRef in React JS?</Accordion.Header>
                        <Accordion.Body>
                            useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>4. What is useMemo in React?</Accordion.Header>
                        <Accordion.Body>
                            React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blog;
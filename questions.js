// creating an array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question: "JavaScript is a(n) ____ language.",
        answer: "Object-Oriented",
        options: [
            "Object-Oriented",
            "Object-Based",
            "Procedural",
            "None of the above"
        ]
    },
    {
        numb: 2,
        question: "Which of the following keywords is used to define a variable in JavaScript?",
        answer: "Both A and B",
        options: [
            "var",
            "let",
            "Both A and B",
            "None of the above"
        ]
    },
    {
        numb: 3,
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answer: "Both A and B",
        options: [
            "getElementbyId()",
            "getElementsByClassName()",
            "Both A and B",
            "None of the above"
        ]
    },
    {
        numb: 4,
        question: "Upon encountering empty statements, what does the JavaScript Interpreter do?",
        answer: "Ignores the statements",
        options: [
            "Throws an error",
            "Ignores the statements",
            "Gives a warning",
            "None of the above"
        ]
    },
    {
        numb: 5,
        question: "Which of the following methods can be used to display data in some form using Javascrip?",
        answer: "All of the above",
        options: [
            "document.write()",
            "gconsole.log()",
            "window.alert",
            "All of the above"
        ]
    },
    {
        numb: 6,
        question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
        answer: "Both the datatype and the result of the expression are compared.",
        options: [
            "Both the datatype and the result of the expression are compared.",
            "Only the datatype of the expression is compared.",
            "Only the value of the expression is compared.",
            "None of the above"
        ]
    },
    {
        numb: 7,
        question: "What keyword is used to check whether a given property is valid or not?",
        answer: "in",
        options: [
            "in",
            "is in",
            "exists",
            "lies"
        ]
    },
    {
        numb: 8,
        question: "What is the use of the noscript tag in Javascript?",
        answer: "The contents are displayed by non-JS-based browsers.",
        options: [
            "The contents are displayed by non-JS-based browsers.",
            "Clears all the cookies and cache.",
            "Both A and B.",
            "None of the above"
        ]
    },
    {
        numb: 9,
        question: "When and operators value is NULL, the type of returned by the unary operator is:",
        answer: "Object",
        options: [
            "Boolean",
            "Undefined",
            "Object",
            "Integer"
        ]
    },
    {
        numb: 10,
        question: "What does the Javascript debugger statement do?",
        answer: "It acts as a breakpoint in a program.",
        options: [
            "It will debug all the errors in the program at runtime.",
            "It acts as a breakpoint in a program.",
            "It will debug error in the current statement, if any.",
            "None of the above"
        ]
    },
    {
        numb: 11,
        question: "What is the ouput of the following code snippet: print(NaN === NaN)?",
        answer: "false",
        options: [
            "true",
            "false",
            "undefined",
            "Error"
        ]
    },
    {
        numb: 12,
        question: "What will be the outcome of the following code snippet: print(typeof(NaN)); ?",
        answer: "Number",
        options: [
            "Object.",
            "Number",
            "String",
            "None of the above"
        ]
    },
    {
        numb: 13,
        question: "What does the 'toLocateString()' method do in JS?",
        answer: "Returns a localized string representation of an object.",
        options: [
            "Returns a localised object representation.",
            "Returns a parsed string",
            "Returns a localized string representation of an object.",
            "None of the above."
        ]
    },
    {
        numb: 14,
        question: "The process in which an object or data structure is translated into a format suitable tor transferral over a network, or storage is called?",
        answer: "Object Serialization",
        options: [
            "Object Serialization",
            "Object Encapsulation",
            "SObject Inheritence",
            "None of the above"
        ]
    },
];
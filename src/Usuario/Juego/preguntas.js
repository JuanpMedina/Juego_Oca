const preguntas = [
    {
        titulo: "¿Cuál es el mejor lenguaje de programación?",
        opciones: [
            { textoRespuesta: "JavaScript", isCorrect: true },
            { textoRespuesta: "PHP", isCorrect: false },
            { textoRespuesta: "C++", isCorrect: false },
            { textoRespuesta: "Kotlin", isCorrect: false },
        ],
    },
    {
        titulo: "Cuanto es 2+10",
        opciones: [
            { textoRespuesta: "11", isCorrect: false },
            { textoRespuesta: "12", isCorrect: true },
            { textoRespuesta: "9", isCorrect: false },
            { textoRespuesta: "1", isCorrect: false },
        ],
    },
    {
        titulo: "¿Cuánto es `11`+ 1 en JavaScript?",
        opciones: [
            { textoRespuesta: "111", isCorrect: true },
            { textoRespuesta: "12", isCorrect: false },
            { textoRespuesta: "Syntax Error", isCorrect: false },
            { textoRespuesta: "`11`1", isCorrect: false },
        ],
    },
    {
        titulo: "¿Cuento es pi?",
        opciones: [
            { textoRespuesta: "3.15", isCorrect: false },
            { textoRespuesta: "1", isCorrect: false },
            { textoRespuesta: "3", isCorrect: false },
            { textoRespuesta: "3.1416", isCorrect: true },
        ],
    },
];

export default preguntas;
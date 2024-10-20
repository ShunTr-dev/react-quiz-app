

# Quiz de JavaScript y React [![Netlify Status](https://api.netlify.com/api/v1/badges/63c83f7c-efdb-4725-ad69-806cbf7e175a/deploy-status)](https://app.netlify.com/sites/react-and-js-quiz/deploys)

Este repositorio contiene un quiz interactivo con preguntas sobre JavaScript y React. Es un proyecto educativo diseñado para evaluar los conocimientos sobre estos temas clave y para servir como una herramienta divertida de aprendizaje.

## Características del Proyecto

-   **Preguntas sobre JavaScript y React**: Preguntas de opción múltiple relacionadas con conceptos fundamentales de JavaScript.
-   **Sistema de puntuación**: Al finalizar el quiz, los usuarios pueden ver su puntaje basado en las respuestas correctas.
-   **Interfaz interactiva**: La aplicación está construida con React para ofrecer una experiencia de usuario fluida e interactiva.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=white&style=for-the-badge)
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/ShunTr-dev/react-quiz-app.git
    ```

2. Navega a la carpeta del proyecto:

    ```bash
    cd react-quiz-app
    ```

3. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

4. Inicia el servidor de desarrollo:

    ```bash
    npm run dev
    ```

## Uso de la aplicación

1. **Inicia el quiz**: Una vez cargada la aplicación, puedes comenzar el quiz haciendo clic en el botón de inicio.
2. **Responde las preguntas**: Se te presentarán una serie de preguntas con opciones múltiples relacionadas con JavaScript y React.
3. **Obtén tu puntuación**: Al finalizar, recibirás una puntuación basada en las respuestas correctas.
4. **Repite el quiz**: Puedes reiniciar el quiz para practicar de nuevo.

## Cómo agregar preguntas

Si deseas agregar más preguntas al quiz, puedes hacerlo modificando el archivo `questions.js` en la raiz del proyecto. Aquí está un ejemplo del formato para las preguntas:

```javascript
export const questions = [
    {
        id: 'q1',
        text: 'Which of the following definitions best describes React.js?',
        answers: [
            'A library to build user interfaces with help of declarative code.',
            'A library for managing state in web applications.',
            'A framework to build user interfaces with help of imperative code.',
            'A library used for building mobile applications only.',
        ],
    },
]
```

## Contribuciones

Las contribuciones a este proyecto son bienvenidas. Si tienes sugerencias para mejorar la aplicación, nuevas preguntas o cualquier otra idea, siéntete libre de abrir un issue o enviar un pull request.

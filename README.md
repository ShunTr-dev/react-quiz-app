# Quiz de JavaScript y React

Este repositorio contiene un quiz interactivo con preguntas sobre JavaScript y React. Es un proyecto educativo diseñado para evaluar los conocimientos sobre estos temas clave y para servir como una herramienta divertida de aprendizaje.

## Características del Proyecto

-   **Preguntas sobre JavaScript y React**: Preguntas de opción múltiple relacionadas con conceptos fundamentales de JavaScript y React.
-   **Sistema de puntuación**: Al finalizar el quiz, los usuarios pueden ver su puntaje basado en las respuestas correctas.
-   **Interfaz interactiva**: La aplicación está construida con React para ofrecer una experiencia de usuario fluida e interactiva.
-   **Retroalimentación**: Muestra al usuario si su respuesta es correcta o incorrecta en cada pregunta.

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
];
```

## Contribuciones

Las contribuciones a este proyecto son bienvenidas. Si tienes sugerencias para mejorar la aplicación, nuevas preguntas o cualquier otra idea, siéntete libre de abrir un issue o enviar un pull request.

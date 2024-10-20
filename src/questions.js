export default [
    {
        id: 'q1',
        text: 'Explica la delegación de eventos.',
        explanation:
            'La delegación de eventos es una técnica en JavaScript en la que asignas un evento a un elemento padre en lugar de asignarlo a cada uno de los elementos hijos individuales. Esto funciona debido a la propagación de eventos (event bubbling). En lugar de agregar un manejador de eventos a cada elemento hijo, se asigna a un ancestro común. El evento se propaga desde el elemento hijo al padre y se puede detectar cuál fue el origen del evento usando event.target.',
        answers: [
            'Es un método en la que se asigna un evento a un elemento padre en lugar de a cada uno de los hijos individuales.',
            'Es un método para detener la propagación de eventos.',
            'Es una técnica para agregar múltiples eventos a un solo elemento hijo.',
            'Es cuando tu cuñado te dice que él te lo hace más barato.',
        ],
    },
    {
        id: 'q2',
        text: 'Explica cómo funciona this en JavaScript.',
        explanation:
            'En JavaScript, this se refiere al objeto desde el cual se invoca una función. Su valor cambia dependiendo de cómo y dónde se utiliza. En una función global, this apunta a window (en navegadores). En el contexto de un método de objeto, this apunta al objeto en sí. \nCambios en ES6: Con las funciones flecha (=>), this se determina léxicamente, es decir, toma el valor de this del contexto en el que se define, no del contexto en el que se ejecuta.',
        answers: [
            'this se refiere al objeto desde el cual se invoca una función.',
            'this siempre apunta al objeto window.',
            'this siempre se refiere al objeto global.',
            'this es esto en inglés. Se usa para hablar de algo que está cerca.',
        ],
    },
    {
        id: 'q3',
        text: 'Explica cómo funciona la herencia prototipal.',
        explanation:
            'La herencia prototipal es un mecanismo en JavaScript mediante el cual los objetos pueden heredar propiedades y métodos de otros objetos a través de la propiedad [[Prototype]].',
        answers: [
            'Es un mecanismo mediante el cual los objetos pueden heredar propiedades y métodos de otros objetos.',
            'Es un sistema donde los objetos no pueden compartir métodos.',
            'Los objetos solo pueden heredar de una clase, no de otro objeto.',
            'Igual que la calvicie, si te toca, iluminas la sala.',
        ],
    },
    {
        id: 'q4',
        text: '¿null y undefined es lo mismo?',
        explanation:
            'null representa la ausencia intencional de un valor. undefined significa que una variable ha sido declarada pero no tiene valor asignado. undeclared es una variable no declarada en el entorno actual.',
        answers: [
            'null representa la ausencia intencional de un valor, undefined es una variable ha sido declarada sin valor.',
            'undefined representa la ausencia intencional de un valor, null es una variable ha sido declarada sin valor.',
            'Si, es lo mismo, representa la ausencia de valor.',
            'Pero como va a ser lo mismo si Goku siempre gana a Freezer.',
        ],
    },
    {
        id: 'q5',
        text: '¿Qué construcciones de lenguaje utilizas para iterar sobre elementos de un array?',
        explanation:
            'for, for...of, forEach, map, filter, reduce. for es el más básico, for...of es más moderno y solo funciona con objetos iterables, forEach es útil para ejecutar una función en cada elemento, map crea un nuevo array con los resultados de una función, filter crea un nuevo array con elementos que pasan una condición, reduce reduce un array a un solo valor.',
        answers: [
            'for, for...of, forEach, map, filter, reduce.',
            'Solo se puede usar forEach para objetos y arrays.',
            'map y for...in son las únicas formas de iterar.',
            'Hablar muy alto, así te escuchan todos y no tienes que repetir nada.',
        ],
    },
    {
        id: 'q6',
        text: '¿Qué construcciones de lenguaje utilizas para iterar sobre propiedades de un objeto?',
        explanation: 'for...in, Object.keys(), Object.values(), Object.entries().',
        answers: [
            'for...in, Object.keys(), Object.values(), Object.entries().',
            'Solo se puede usar forEach para objetos y arrays.',
            'map y for...in son las únicas formas de iterar.',
            'Los números, si le pongo nombre luego me olvido.',
        ],
    },
    {
        id: 'q7',
        text: '¿Cuál es la diferencia principal entre los métodos Array.forEach() y Array.map()?',
        explanation:
            'forEach: Itera sobre cada elemento pero no devuelve nada. Se usa para efectos secundarios. \n map: Itera y retorna un nuevo array con los resultados. Se usa para transformar datos.',
        answers: [
            'forEach itera sobre cada elemento sin devolver nada, mientras que map devuelve un nuevo array.',
            'forEach devuelve un nuevo array y map no.',
            'Ambos métodos son equivalentes.',
            'Que en el maincra no se puede hacer trampa.',
        ],
    },
    {
        id: 'q8',
        text: '¿Cuál es un caso típico para funciones anónimas?',
        explanation: 'Las funciones anónimas son útiles como callbacks en eventos, en setTimeout, o en métodos como map y filter.',
        answers: [
            'Se usan comúnmente como callbacks en eventos o en métodos como map y filter.',
            'Solo se usan en el global scope.',
            'Siempre deben ser asignadas a una variable.',
            'Hacer bromas teléfonicas, así no rastrean tu IP.',
        ],
    },
    {
        id: 'q9',
        text: '¿Cuál es la diferencia entre objetos de host y objetos nativos?',
        explanation:
            'Los objetos de host son proporcionados por el entorno (como window o document), mientras que los objetos nativos son parte del lenguaje JavaScript (como Array u Object).',
        answers: [
            'Los objetos de host son proporcionados por el entorno, y los objetos nativos son parte del lenguaje JavaScript.',
            'Los objetos de host son parte del lenguaje, y los objetos nativos son proporcionados por el navegador.',
            'Los objetos nativos y de host son lo mismo en JavaScript.',
            'Los host no son racistas, son ordenados.',
        ],
    },
    {
        id: 'q10',
        text: 'Explica la diferencia entre function Person(){}, var person = Person(), y var person = new Person():',
        explanation:
            'function Person(){}: Declara una función. var person = Person(): Llama la función sin crear un nuevo objeto. var person = new Person(): Crea una instancia con su propio contexto this.',
        answers: [
            'function Person(){}: Declara una función. var person = Person(): Llama la función. var person = new Person(): Crea una nueva instancia con su propio this.',
            'function Person(){} y var person = Person() son lo mismo.',
            'var person = new Person() y var person = Person() son equivalentes.',
            'Bar person, ese es con el que siempre me tomo un algo.',
        ],
    },
    // {
    //     id: 'q11',
    //     text: 'Explica las diferencias en el uso de foo entre function foo() {} y var foo = function() {}:',
    //     explanation:
    //         'function foo() {} es una declaración de función que está disponible en todo el contexto debido al hoisting. var foo = function() {} es una expresión de función que solo está disponible después de ser declarada.',
    //     answers: [
    //         'function foo() {} es una declaración de función, mientras que var foo = function() {} es una expresión de función.',
    //         'Ambas son equivalentes en cualquier contexto.',
    //         'var foo = function() {} es una declaración que se eleva (hoisting).',
    //         'function foo() {} no está sujeta al hoisting.',
    //     ],
    // },
    // {
    //     id: 'q12',
    //     text: '¿Puedes explicar qué hacen Function.call y Function.apply? ¿Cuál es la diferencia notable?',
    //     explanation:
    //         'Function.call invoca una función con un valor de this específico y pasa los argumentos de forma individual. Function.apply también invoca una función con un valor de this específico, pero los argumentos se pasan como un array.',
    //     answers: [
    //         'Function.call pasa los argumentos de forma individual, mientras que Function.apply los pasa como un array.',
    //         'Function.apply no permite pasar this.',
    //         'Function.call y Function.apply son métodos obsoletos.',
    //         'Function.apply es más rápido que Function.call.',
    //     ],
    // },
    {
        id: 'q13',
        text: 'Explica Function.prototype.bind.',
        explanation: 'bind crea una nueva función que, cuando se llama, tiene un valor de this específico y puede tener argumentos predefinidos.',
        answers: [
            'Crea una nueva función con un valor de this específico y puede tener argumentos predefinidos.',
            'Se usa para invocar inmediatamente una función.',
            'Permite crear funciones sin contexto this.',
            'Es el error que permite hackear con Visual Basic.',
        ],
    },
    // {
    //     id: 'q14',
    //     text: '¿Cuál es la diferencia entre detección de características, inferencia de características y usar la cadena UA?',
    //     explanation:
    //         'La detección de características implica verificar si una característica está disponible. La inferencia de características asume que, si una está presente, otras relacionadas también lo estarán. Usar la cadena UA se basa en la identificación del User-Agent, aunque puede ser manipulada.',
    //     answers: [
    //         'La detección de características verifica la disponibilidad de una característica, mientras que la inferencia de características asume relaciones entre características y la cadena UA se basa en el User-Agent.',
    //         'La detección de características y la cadena UA son lo mismo.',
    //         'La inferencia de características es más precisa que la detección de características.',
    //         'Usar la cadena UA es la forma más confiable de verificar compatibilidad.',
    //     ],
    // },
    {
        id: 'q15',
        text: 'Explica "hoisting".',
        explanation:
            'El hoisting es el comportamiento por el cual las declaraciones de variables y funciones se mueven al principio de su contexto de ejecución durante la fase de compilación. Solo las declaraciones se elevan, no las asignaciones.',
        answers: [
            'El hoisting es el comportamiento donde las declaraciones de variables y funciones se mueven al principio de su contexto.',
            'El hoisting eleva tanto las declaraciones como las asignaciones.',
            'El hoisting es un comportamiento exclusivo de ES5.',
            'El hoisting es poner tu web en internet.',
        ],
    },
    {
        id: 'q16',
        text: '¿Qué es la coerción de tipos?',
        explanation:
            'La coerción de tipos es la conversión automática entre tipos de datos. Los problemas comunes incluyen resultados inesperados, como "" + 1 que produce "1" o 0 == false que evalúa como true.',
        answers: [
            'La coerción de tipos es la conversión automática entre tipos de datos.',
            'La coerción de tipos siempre resulta en errores de ejecución.',
            'La coerción de tipos solo se produce en operaciones matemáticas.',
            'El momento en el que tu alguien te pregunta la diferencia entre colores y tu ves el mismo.',
        ],
    },
    {
        id: 'q17',
        text: 'Describe la propagación de eventos (event bubbling).',
        explanation: 'En la propagación de eventos, un evento comienza en un elemento y se propaga hacia arriba a través de sus ancestros en el DOM hasta llegar a la raíz.',
        answers: [
            'Es cuando un evento comienza en un elemento y se propaga hacia arriba en el DOM.',
            'Es cuando un evento solo se queda en el elemento donde se originó.',
            'Comienza en el propio elemento y ocurre hacia los elementos hijos.',
            'Es un tipo de representación artistica con perros voladores.',
        ],
    },
    {
        id: 'q18',
        text: 'Describe la captura de eventos (event capturing).',
        explanation:
            'La captura de eventos ocurre cuando un evento se propaga desde la raíz del documento hacia el objetivo del evento antes de que el manejador del evento se dispare.',
        answers: [
            'Ocurre cuando el evento se propaga desde la raíz del documento hacia el objetivo del evento.',
            'Es cuando el evento se propaga hacia arriba en el DOM.',
            'Solo ocurre en eventos de teclado.',
            'La captura de eventos está prohibida desde 1922.',
        ],
    },
    {
        id: 'q19',
        text: '¿Cuál es la diferencia entre un "atributo" y una "propiedad"?',
        explanation:
            'Un atributo es lo que está en el HTML, mientras que una propiedad es lo que se maneja en el DOM con JavaScript. Los valores de los atributos y propiedades pueden sincronizarse en ciertos casos.',
        answers: [
            'Un atributo está en el HTML y una propiedad es lo que se maneja en el DOM con JavaScript.',
            'Atributo y propiedad son términos intercambiables en HTML y JavaScript.',
            'Un atributo es una propiedad especial solo disponible en etiquetas de enlace (a).',
            'A ver, todo comienza con dos vacas. Si tienes dos vacas...',
        ],
    },
    // {
    //     id: 'q20',
    //     text: '¿Cuáles son los pros y contras de extender objetos JavaScript integrados?',
    //     explanation:
    //         'Pros: Puedes agregar funcionalidades útiles a objetos existentes. Contras: Puede causar conflictos si otras bibliotecas o el propio JavaScript hacen lo mismo.',
    //     answers: [
    //         'Pros: Puedes agregar funcionalidades útiles a objetos existentes. Contras: Puede causar conflictos con otras bibliotecas o el propio lenguaje.',
    //         'Pros: Los objetos extendidos siempre serán más rápidos.',
    //         'Contras: Los objetos extendidos no pueden ser heredados.',
    //         'Extender objetos JavaScript integrados no tiene desventajas.',
    //     ],
    // },
    {
        id: 'q21',
        text: '¿Cuál es la diferencia entre == y ===?',
        explanation: '== realiza coerción de tipos antes de la comparación, mientras que === compara estrictamente sin coerción de tipos.',
        answers: [
            '== realiza coerción de tipos antes de comparar, mientras que === no realiza coerción.',
            '=== convierte los valores antes de compararlos.',
            '== es más rápido que ===.',
            '=== claramente indica que tienes alguien detrás de ti.',
        ],
    },
    {
        id: 'q22',
        text: 'Explica la política de mismo origen con respecto a JavaScript.',
        explanation:
            'La política de mismo origen previene que scripts en diferentes orígenes accedan a recursos de otros, protegiendo contra ataques como cross-site scripting (XSS).',
        answers: [
            'La política de mismo origen impide que scripts de diferentes orígenes accedan a recursos entre sí.',
            'Permite compartir recursos entre orígenes sin restricciones.',
            'Solo se aplica a solicitudes GET.',
            'No me gusta hablar de política.',
        ],
    },
    {
        id: 'q23',
        text: '¿Qué es un operador ternario?',
        explanation: 'Se llama así porque opera con tres operandos: una condición, una expresión si es verdadera y otra si es falsa. La palabra "ternario" indica tres partes.',
        answers: [
            'Trabaja con tres operandos: condición, resultado verdadero / falso.',
            'Ternario significa que se pueden hacer tres comparaciones.',
            'El operador ternario solo funciona con valores booleanos.',
            'Es un operador de trenes, pero mal escrito.',
        ],
    },
    {
        id: 'q24',
        text: '¿Qué es el modo estricto?',
        explanation:
            'El modo estricto ("use strict";) introduce una versión más estricta de JavaScript, eliminando malas prácticas y errores silenciosos. Sin embargo, puede romper código más antiguo.',
        answers: ['Mejora la seguridad del código y previene errores silenciosos.', 'Permite funciones asincrónicas.', 'Es obligatorio en ES6.', 'Enfada a tu ordenador.'],
    },
    // {
    //     id: 'q25',
    //     text: '¿Cuáles son las ventajas/desventajas de escribir código JavaScript en un lenguaje que se compila a JavaScript?',
    //     explanation:
    //         'Ventajas: Puede mejorar la sintaxis y agregar características adicionales. Desventajas: Requiere un paso de compilación adicional y puede hacer más difícil la depuración.',
    //     answers: [
    //         'Ventajas: Mejora la sintaxis y agrega nuevas características. Desventajas: Necesita un paso de compilación y puede hacer más difícil la depuración.',
    //         'No hay desventajas en usar lenguajes que se compilan a JavaScript.',
    //         'Estos lenguajes no son compatibles con el ecosistema de JavaScript.',
    //         'No hay necesidad de compilación si se usa un lenguaje de alto nivel.',
    //     ],
    // },
    // {
    //     id: 'q26',
    //     text: '¿Qué herramientas y técnicas usas para depurar código JavaScript?',
    //     explanation:
    //         'Uso herramientas como console.log para revisar el estado del código, breakpoints en DevTools para pausar y analizar el código, y el debugger para una depuración más avanzada.',
    //     answers: [
    //         'Uso console.log, breakpoints en DevTools y debugger para depurar.',
    //         'Solo uso console.log para depurar.',
    //         'No existen herramientas específicas para depurar JavaScript.',
    //         'DevTools no permite poner breakpoints.',
    //     ],
    // },
    {
        id: 'q27',
        text: 'Explica la diferencia entre objetos mutables e inmutables.',
        explanation:
            'Los objetos mutables pueden cambiar su estado después de ser creados (como los objetos). Los objetos inmutables no pueden ser modificados una vez creados (ej. números, cadenas).',
        answers: [
            'Los objetos mutables pueden cambiar su estado, mientras que los inmutables no pueden ser modificados.',
            'Los objetos inmutables son más rápidos que los mutables.',
            'No existe diferencia entre objetos mutables e inmutables.',
            'Los objetos inmutables mejoran a tu pokemon.',
        ],
    },
    {
        id: 'q28',
        text: 'Explica la diferencia entre funciones síncronas y asíncronas.',
        explanation:
            'Las funciones síncronas se ejecutan de manera secuencial, bloqueando el hilo principal. Las funciones asíncronas permiten que otras operaciones continúen mientras se espera que una tarea termine, como una solicitud a un servidor.',
        answers: [
            'Las funciones síncronas bloquean el hilo principal, las asíncronas permiten que otras tareas se ejecuten en paralelo.',
            'No hay diferencia entre funciones síncronas y asíncronas.',
            'Las funciones asíncronas solo se pueden usar en navegadores modernos.',
            'Las funciones asíncronas permiten ir al partido de los niños.',
        ],
    },
    {
        id: 'q29',
        text: '¿Qué es el event loop?',
        explanation:
            'El event loop es un mecanismo en JavaScript que permite gestionar operaciones asíncronas. Verifica la cola de tareas y ejecuta callbacks cuando el call stack está vacío.',
        answers: [
            'Permite a JavaScript manejar operaciones asíncronas verificando la cola de tareas y ejecutando callbacks.',
            'Es un ciclo de eventos que detiene la ejecución de funciones.',
            'Solo se usa en el contexto de promesas.',
            'Son los mejores cereales de EEUU.',
        ],
    },
    {
        id: 'q30',
        text: '¿Cuáles son las diferencias entre variables creadas con let y var?',
        explanation:
            'var tiene un alcance de función y permite redeclaración. let tiene un alcance de bloque y no permite redeclaración. const es similar a let, pero no permite reasignación (aunque las propiedades de un objeto pueden cambiar).',
        answers: [
            'var tiene un alcance de función y permite redeclaración, let tiene un alcance de bloque y no permite redeclaración.',
            'let no te roba a la novia.',
            'let y var son lo mismo.',
            'var permite declarar lo que quieras.',
        ],
    },
    // {
    //     id: 'q31',
    //     text: '¿Cuáles son las diferencias entre clases ES6 y constructores de funciones ES5?',
    //     explanation:
    //         'Las clases ES6 proporcionan una sintaxis más limpia y estructurada para la creación de objetos y herencia, mientras que las funciones constructoras de ES5 requieren el uso manual de prototipos para la herencia.',
    //     answers: [
    //         'Las clases ES6 tienen una sintaxis más limpia y proporcionan un mecanismo integrado de herencia, mientras que los constructores de funciones ES5 requieren prototipos manuales.',
    //         'No hay diferencias, ambos son equivalentes.',
    //         'Las funciones constructoras de ES5 no permiten herencia.',
    //         'Las clases ES6 no permiten la herencia.',
    //     ],
    // },
    {
        id: 'q32',
        text: '¿Puedes ofrecer un caso de uso para la nueva sintaxis de función flecha (=>)?',
        explanation: 'Las funciones flecha son útiles cuando se desea mantener el contexto léxico de this, como en callbacks dentro de métodos de objetos o funciones asíncronas.',
        answers: [
            'Las funciones flecha son útiles para mantener el contexto léxico de this en callbacks.',
            'Se usan principalmente para funciones globales.',
            'No tienen ninguna ventaja sobre las funciones tradicionales.',
            'Permiten señalar al perro que se portó mal.',
        ],
    },
    {
        id: 'q33',
        text: '¿Cuál es la definición de una función de orden superior?',
        explanation: 'Una función de orden superior es aquella que acepta otras funciones como argumentos o que retorna una función como resultado.',
        answers: [
            'Acepta funciones como argumentos o retorna una función.',
            'Es una función que se ejecuta en segundo plano.',
            'Son funciones que solo pueden operar con números.',
            'Son las funciones que representan los elfos.',
        ],
    },
    {
        id: 'q34',
        text: '¿Puedes dar un ejemplo de desestructuración de un objeto o array?',
        explanation:
            'La desestructuración es una técnica que permite extraer valores de objetos o arrays fácilmente. Ejemplo de objeto: const { name, age } = person. Ejemplo de array: const [first, second] = [1, 2, 3].',
        answers: ['const { name, age } = person; const [first, second] = [1, 2, 3].', 'const name; const age = person', 'person = { name, age };', 'No puedo.'],
    },
    {
        id: 'q35',
        text: '¿Puedes dar un ejemplo de generar una cadena con literales de plantilla ES6?',
        explanation: 'Los literales de plantilla permiten crear cadenas dinámicas usando la sintaxis ${}. Ejemplo: const name = "John"; const greeting = `Hello, ${name}!`.',
        answers: ['`Hello, ${name}!`.', '`Hello, &&{name}!`.', 'No es posible usar literales en ES6.', 'Mi mamá no me deja.'],
    },
    {
        id: 'q36',
        text: '¿Puedes dar un ejemplo de una función curry y por qué esta sintaxis ofrece una ventaja?',
        explanation:
            'El currying es una técnica que transforma una función que acepta múltiples argumentos en una función que acepta uno y retorna otra función que acepta el siguiente argumento. Esto permite reutilización de funciones con argumentos parciales. Ejemplo: const add = (x) => (y) => x + y.',
        answers: ['(x) => (y) => x + y', '(y) => (y) => x + x', '(x) => x + y', 'No me gusta el picante.'],
    },
    {
        id: 'q37',
        text: '¿Cuáles son los beneficios de usar la sintaxis de propagación y cómo es diferente de la sintaxis de resto?',
        explanation:
            'La sintaxis de propagación (...) permite expandir elementos de un array o propiedades de un objeto. La sintaxis de resto (...) recoge múltiples argumentos en un array.',
        answers: [
            'La propagación expande un array u objeto, mientras que resto recoge argumentos en un array.',
            'La sintaxis de resto solo se usa con arrays.',
            'No hay diferencia entre propagación y resto.',
            'Yo solo quiero cobrar a final de mes.',
        ],
    },
    {
        id: 'q38',
        text: '¿Cómo puedes compartir código entre archivos?',
        explanation: 'Puedes compartir código entre archivos usando las palabras clave export e import para exportar módulos desde un archivo e importarlos en otro.',
        answers: [
            'Puedes compartir código usando export e import.',
            'Solo se puede compartir código copiando y pegando entre archivos.',
            'Es necesario usar funciones globales para compartir código.',
            'Tienes que obligar a que tengan la @Clave.',
        ],
    },
    {
        id: 'q39',
        text: '¿Por qué querrías crear miembros de clase estáticos?',
        explanation:
            'Los miembros estáticos pertenecen a la clase en sí, no a instancias específicas. Son útiles para crear métodos auxiliares que no dependen de los datos de una instancia.',
        answers: [
            'Los miembros estáticos pertenecen a la clase en sí y son útiles para métodos auxiliares.',
            'Los miembros estáticos solo funcionan con clases abstractas.',
            'Los miembros estáticos no pueden acceder a otros métodos de la clase.',
            'Para pintarlos como una musa.',
        ],
    },
    {
        id: 'q40',
        text: '¿Cuál es la diferencia entre los bucles while y do-while?',
        explanation:
            'En un bucle while, la condición se evalúa antes de ejecutar el bloque de código, mientras que en un bucle do-while, el bloque se ejecuta al menos una vez antes de que se evalúe la condición.',
        answers: [
            'do-while siempre se ejecuta al menos una vez.',
            'Ambos bucles son idénticos.',
            'while siempre se ejecuta al menos una vez.',
            'Me da igual, yo no pienso hacer nada.',
        ],
    },
    {
        id: 'q41',
        text: '¿Qué es una promesa?',
        explanation:
            'Una promesa en JavaScript representa la eventual finalización (o fallo) de una operación asíncrona y su valor resultante. Se usa en operaciones que requieren tiempo, como solicitudes a servidores o temporizadores. Una promesa puede estar en tres estados: pendiente (pending), resuelta (fulfilled), o rechazada (rejected).',
        answers: [
            'Es la eventual resolución o rechazo de una operación asíncrona.',
            'Es para hacer que las funciones síncronas sean asíncronas.',
            'Solo se usa para manejar errores en código JavaScript.',
            'Es la mejor mesa que podrías tener.',
        ],
    },
    {
        id: 'q42',
        text: 'Cómo usarías principios de Programación Orientada a Objetos en JavaScript.',
        explanation:
            'Puedes implementar los principios de la Programación Orientada a Objetos (POO) usando clases y prototipos. Las clases permiten la creación de objetos con propiedades y métodos, y la herencia permite que un objeto herede las propiedades y métodos de otro. También puedes aplicar encapsulación creando propiedades privadas dentro de las clases.',
        answers: [
            'Usando clases y prototipos para crear objetos con herencia, encapsulación y polimorfismo.',
            'Solo puedes aplicar POO usando funciones constructoras.',
            'No es posible usar Programación Orientada a Objetos en JavaScript.',
            'Llamo al técnico que le pone los canales a la tele.',
        ],
    },
    {
        id: 'q43',
        text: '¿Cuál es la diferencia entre event.target y event.currentTarget?',
        explanation:
            'La diferencia entre event.target y event.currentTarget es que event.target se refiere al elemento específico donde ocurrió el evento, mientras que event.currentTarget se refiere al elemento al que se asignó el manejador de eventos. Esto es útil en la delegación de eventos.',
        answers: [
            'event.target es el elemento donde ocurrió el evento, mientras que event.currentTarget es el elemento al que se asignó el manejador de eventos.',
            'event.target y event.currentTarget siempre son iguales.',
            'event.target se refiere al padre del elemento objetivo.',
            'Prefiero ver el furbol en otro lado.',
        ],
    },
    // {
    //     id: 'q44',
    //     text: '¿Cuál es la diferencia entre event.preventDefault() y event.stopPropagation()?',
    //     explanation:
    //         'event.preventDefault() evita que ocurra la acción predeterminada asociada a un evento (como el envío de un formulario). event.stopPropagation() detiene la propagación de un evento hacia otros elementos en el DOM, evitando que los manejadores de eventos de los elementos padres sean ejecutados.',
    //     answers: [
    //         'event.preventDefault previene la acción por defecto de un evento, mientras que event.stopPropagation detiene la propagación del evento a través del DOM.',
    //         'event.preventDefault detiene la propagación del evento.',
    //         'event.stopPropagation previene la acción predeterminada del evento.',
    //         'Ambos métodos detienen la propagación del evento, pero en diferentes niveles.',
    //     ],
    // },
    // {
    //     id: 'q45',
    //     text: 'Haz que esto funcione: \n\nfunction duplicate(arr) {\n    return arr.concat(arr)\n}\n\nconsole.log(duplicate([1, 2, 3, 4, 5])) // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]',
    //     explanation: 'La función duplicate toma un array como argumento, luego usa el método concat para duplicar el array concatenándolo consigo mismo.',
    //     answers: [
    //         'La función concatena el array con una copia de sí mismo, devolviendo un array duplicado.',
    //         'El método concat toma los elementos y devuelve la suma.',
    //         'El método concat modifica el array original directamente.',
    //         'La función duplica los elementos multiplicando por 2.',
    //     ],
    // },
    {
        id: 'q46',
        text: "¿Qué devolverá esta sentencia?\n\nconsole.log('hello' || 'world')",
        explanation: 'El operador || (OR) devuelve el primer valor truthy que encuentra. Por lo tanto devuelve "hello" porque es el primer valor truthy.',
        answers: ['hello', 'world', 'true', 'Le digo hola, por si las IAs pierden el control.'],
    },
    {
        id: 'q47',
        text: "¿Qué se devolverá en cada uno de estos?\nconsole.log('foo' && 'bar')",
        explanation: 'El operador && (AND) devuelve el último valor si ambos son truthy, o el primer valor falsy.',
        answers: ['bar', 'foo', 'true', 'No sé, pero lo de ir al bar suena bien.'],
    },
    {
        id: 'q48',
        text: 'Cómo es una IIFE (Immediately Invoked Function Expression)',
        explanation: 'Una IIFE es una función que se ejecuta inmediatamente después de ser definida. Se utiliza para crear un ámbito privado.',
        answers: [
            ";(function () {console.log('IIFE executed')})()",
            'function activar() {console.log("IIFE executed")}',
            'const activar = function () {console.log("IIFE executed")}',
            'Empiezo tirando iniciativa, ese ogro no me gana.',
        ],
    },
    {
        id: 'q49',
        text: "¿Cuál es el valor de foo?\n\nvar foo = 10 + '20'",
        explanation: 'En JavaScript, cuando se suman un número y una cadena, el número se convierte en cadena y ambos se concatenan. Por lo tanto, el valor de foo será "1020".',
        answers: ['1020', '30', 'NaN', 'Foo fighters'],
    },
    {
        id: 'q50',
        text: '¿Cuál será la salida de este código?\n\nconsole.log(0.1 + 0.2 == 0.3)',
        explanation:
            'El resultado será false debido a la representación imprecisa de los números de punto flotante en JavaScript. 0.1 + 0.2 no es exactamente 0.3, sino algo como 0.30000000000000004.',
        answers: ['false', 'true', '0.3', 'Enter the Matrix, Neo'],
    },
    // {
    //     id: 'q51',
    //     text: '¿Cómo harías funcionar este código?\n\nadd(2, 5) // 7\nadd(2)(5) // 7',
    //     explanation:
    //         'Puedes lograr este comportamiento con una función curry que verifique si se pasan ambos argumentos de inmediato o solo uno, devolviendo una función para el segundo.',
    //     answers: [
    //         'La función se puede escribir de manera que acepte dos argumentos o que devuelva una función que espera el segundo argumento.',
    //         'El código funcionará solo si se pasan ambos argumentos al mismo tiempo.',
    //         'Se debe usar una función diferente para manejar ambos casos.',
    //         'No es posible hacer que este código funcione sin usar bind().',
    //     ],
    // },
    {
        id: 'q52',
        text: "¿Qué valor devuelve esta sentencia?\n\n\"im a lasagna hog\".split('').reverse().join('')",
        explanation:
            'La cadena se divide en un array de caracteres con split(), luego se invierte con reverse(), y finalmente se une de nuevo en una cadena con join(). El resultado será "goh angasal a m\'i".',
        answers: ['goh angasal a mi', 'im a lasagna hog', 'error', 'Mums Spaggetti.'],
    },
    {
        id: 'q53',
        text: "¿Cuál es el valor de window.foo?\n\nwindow.foo || (window.foo = 'bar')",
        explanation: 'El valor de window.foo será "bar" si no estaba previamente definido. Si ya tiene un valor truthy, ese valor no cambiará.',
        answers: [
            'El valor de window.foo será "bar" si no estaba definido anteriormente.',
            'El valor de window.foo será siempre "bar".',
            'El valor de window.foo será undefined.',
            'Ya, eso es con Windows pero y en Mac?.',
        ],
    },
    {
        id: 'q54',
        text: "¿Cuál es la salida de las dos alertas de abajo?\n\nvar foo = 'Hello'\n;(function () {\n    var bar = ' World'\n    alert(foo + bar)\n})()\nalert(foo + bar)",
        explanation:
            'El primer alert mostrará "Hello World", ya que ambas variables están accesibles dentro de la función. El segundo alert producirá un error de referencia, ya que "bar" solo está disponible dentro de la función IIFE.',
        answers: [
            '"Hello World" +  error porque "bar" no está definido fuera de la función.',
            'Ambos alerts mostrarán "Hello World".',
            'El segundo alert muestra "Hello" porque "bar" es undefined.',
            'Llaman a los cazafantasmas, por que es una callback function.',
        ],
    },
    {
        id: 'q55',
        text: '¿Cuál es el valor de foo.length?\n\nvar foo = []\nfoo.push(1)\nfoo.push(2)',
        explanation: 'El valor de foo.length será 2 porque se han agregado dos elementos al array con push(), lo que aumenta la propiedad length en consecuencia.',
        answers: ['2', '1', 'undefined.', 'Por favor, para de preguntarme cosas raras.'],
    },
    {
        id: 'q56',
        text: '¿Cuál es el valor de foo.x?\n\nvar foo = { n: 1 }\nvar bar = foo\nfoo.x = foo = { n: 2 }',
        explanation:
            'El valor de foo.x es undefined porque la asignación foo.x = foo = { n: 2 } se evalúa de derecha a izquierda. Primero, foo se reasigna a { n: 2 }, luego se intenta asignar foo.x, pero ahora foo es el nuevo objeto sin la propiedad x.',
        answers: ['undefined.', '{ n: 1 }.', '{ n: 2 }.', 'Pero quién es FOO?.'],
    },
    {
        id: 'q57',
        text: "¿Qué imprime el siguiente código?\n\nconsole.log('one')\nsetTimeout(function () {\n    console.log('two')\n}, 0)\nPromise.resolve().then(function () {\n    console.log('three')\n})\nconsole.log('four')",
        explanation:
            'El orden de la salida es "one", "four", "three", "two". Primero se ejecuta el código síncrono, luego las promesas, y finalmente el callback del setTimeout, ya que está en la cola de tareas.',
        answers: ['one, four, three, two.', 'one, two, three, four.', 'one, three, two, four.', 'Ai don tal inglish, yo very gud fandango'],
    },
    // {
    //     id: 'q58',
    //     text: '¿Cuál es la diferencia entre estas cuatro funciones?\n\ndoSomething().then(function () {\n    return doSomethingElse()\n})\n\ndoSomething().then(function () {\n    doSomethingElse()\n})\n\ndoSomething().then(doSomethingElse())\n\ndoSomething().then(doSomethingElse)',
    //     explanation:
    //         'La primera promesa devuelve el resultado de doSomethingElse(), encadenando la promesa. La segunda ejecuta doSomethingElse() pero no retorna nada, por lo que no encadena la promesa. La tercera ejecuta doSomethingElse() inmediatamente, lo que es incorrecto. La cuarta pasa doSomethingElse como callback, lo que es el comportamiento correcto.',
    //     answers: [
    //         'La primera devuelve y encadena la promesa. La segunda no encadena la promesa. La tercera ejecuta doSomethingElse() inmediatamente. La cuarta pasa doSomethingElse correctamente como callback.',
    //         'La primera es incorrecta porque retorna una promesa vacía.',
    //         'La segunda ejecuta doSomethingElse inmediatamente.',
    //         'La cuarta encadena incorrectamente la promesa.',
    //     ],
    // },
    {
        id: 'q59',
        text: "¿Qué sacará por consola este código y por qué?\n\n;(function () {\n    var a = (b = 3)\n})()\n\nconsole.log('a defined? ' + (typeof a !== 'undefined'))\nconsole.log('b defined? ' + (typeof b !== 'undefined'))",
        explanation:
            'El valor de a es undefined porque está en el ámbito de la función IIFE, mientras que b es global porque no se declaró con var, let o const, por lo que está disponible fuera de la función.',
        answers: [
            ' "a defined? false" y "b defined? true".',
            '"a defined? true" y "b defined? true".',
            'El código arrojará un error de referencia.',
            'Es el momento de ir a tocar un poco de pasto.',
        ],
    },
    {
        id: 'q60',
        text: "¿Considerando las dos funciones de abajo, devuelven lo mismo? ¿Por qué o por qué no?\n\nfunction foo1() {\n    return {\n        bar: 'hello'\n    }\n}\n\nfunction foo2() {\n    return\n    {\n        bar: 'hello'\n    }\n}",
        explanation:
            'No, no devuelven lo mismo. En foo2, el retorno se interrumpe debido a la nueva línea después de return. JavaScript interpreta esto como un retorno vacío, por lo que foo2 devuelve undefined, mientras que foo1 devuelve el objeto.',
        answers: [
            'No, foo2 devuelve undefined debido al salto de línea después del return.',
            'Sí, ambas funciones devuelven el mismo objeto.',
            'No, foo1 devuelve undefined.',
            'Esto no hay dios que lo entienda.',
        ],
    },
];

export default [
    {
        id: 'q1',
        text: '¿Qué es la delegación de eventos?',
        explanation: (
            <>
                <p>
                    {' '}
                    La delegación de eventos en JavaScript es una técnica para manejar eventos de manera eficiente en
                    elementos de la página web, especialmente cuando se trabaja con muchos elementos dinámicos
                    (elementos que se crean o se modifican en tiempo de ejecución).
                </p>
                <p>
                    <strong>¿Cómo funciona?</strong>
                    <br />
                    En lugar de asignar un controlador de eventos (event listener) a cada elemento individual, se asigna
                    un solo controlador a un elemento padre común. Este elemento será responsable de manejar los eventos
                    de todos los elementos hijos. La delegación de eventos aprovecha el mecanismo de propagación de
                    eventos (event bubbling) de JavaScript.
                </p>
                <p>
                    <strong>Propagación de eventos (Event Bubbling)</strong>
                    <br />
                    Cuando se produce un evento en un elemento (como un clic), este no solo se dispara en ese elemento,
                    sino que también burbujea (sube) a través de sus elementos padres en el DOM (Document Object Model),
                    activando también los eventos correspondientes en esos elementos padres si existen controladores
                    asignados.
                </p>
                <div>
                    <strong>Ventajas de la delegación de eventos</strong>
                    <br />
                    <ul>
                        <li>
                            <strong>Mejor rendimiento:</strong> No necesitas asignar un evento a cada elemento hijo de
                            forma individual. En su lugar, asignas un solo evento al contenedor padre, lo que reduce el
                            uso de memoria y mejora el rendimiento, especialmente en listas o tablas largas de
                            elementos.
                        </li>
                        <li>
                            <strong>Manejo de elementos dinámicos:</strong> Si los elementos hijos se crean o eliminan
                            dinámicamente, no necesitas preocuparte de asignar o remover eventos manualmente. El
                            controlador de eventos en el elemento padre sigue funcionando para los nuevos elementos
                            hijos.
                        </li>
                        <li>
                            <strong>Código más limpio:</strong> Facilita el mantenimiento del código, ya que centraliza
                            el manejo de eventos.
                        </li>
                    </ul>
                </div>
                <div>
                    <strong>¿Cuándo usar la delegación de eventos?</strong>
                    <br />
                    <ul>
                        <li>Cuando trabajas con muchos elementos que tienen el mismo tipo de evento.</li>
                        <li>Cuando trabajas con elementos que se crean dinámicamente en el DOM.</li>
                        <li>
                            En situaciones donde deseas mejorar el rendimiento y optimizar la memoria evitando múltiples
                            listeners.
                        </li>
                    </ul>
                </div>
            </>
        ),
        answers: [
            'Es un método en la que se asigna un evento a un elemento padre en lugar de a cada uno de los hijos individuales',
            'Es un método para detener la propagación de eventos',
            'Es una técnica para agregar múltiples eventos a un solo elemento hijo',
            'Es cuando tu cuñado te dice que él te lo hace más barato',
        ],
    },
    {
        id: 'q2',
        text: (
            <>
                ¿Qué es <code>this</code> en JavaScript?
            </>
        ),
        explanation: (
            <>
                <p>
                    En JavaScript, <code>this</code> es una palabra clave especial que se refiere al contexto en el que
                    se está ejecutando una función. El valor de <code>this</code> varía dependiendo de cómo y dónde se
                    invoca la función, y no está vinculado al momento de escribir el código.
                </p>
                <p>
                    <strong>
                        ¿Cómo funciona <code>this</code>?
                    </strong>
                    <br />
                    El valor de <code>this</code> se determina en el momento en que una función es llamada, no en el
                    momento en que se define. Esto significa que su valor puede cambiar según el contexto de ejecución.
                    A continuación, se explican algunos casos comunes de cómo funciona:
                </p>
                <p>
                    <strong>1. En el contexto global (o fuera de una función):</strong>
                    <br />
                    Cuando <code>this</code> se utiliza en el contexto global (es decir, fuera de cualquier función), en
                    un navegador hace referencia al objeto <code>window</code>. En un entorno Node.js, <code>this</code>{' '}
                    hace referencia al objeto global.
                    <pre>
                        <code>console.log(this); // En el navegador, imprime el objeto window</code>
                    </pre>
                </p>
                <div>
                    <strong>2. Dentro de una función:</strong>
                    <br />
                    En una función normal, el valor de <code>this</code> depende de cómo se llama a la función:
                    <ul>
                        <li>
                            <strong>Modo estricto (strict mode):</strong> En <code>"use strict"</code>,{' '}
                            <code>this</code> será <code>undefined</code> si se llama a la función sin un contexto
                            específico.
                        </li>
                        <li>
                            <strong>Modo no estricto:</strong> Sin <code>"use strict"</code>, <code>this</code> hará
                            referencia al objeto global (<code>window</code> en navegadores).
                        </li>
                    </ul>
                </div>
                <p>
                    <strong>3. En el contexto de un objeto:</strong>
                    <br />
                    Cuando una función es invocada como método de un objeto, el valor de <code>this</code> hace
                    referencia a ese objeto.
                </p>
                <p>
                    <strong>4. En constructores y clases:</strong>
                    <br />
                    Cuando usas <code>this</code> dentro de una función constructora o clase, <code>this</code> hace
                    referencia al nuevo objeto que se está creando.
                </p>
                <p>
                    <strong>5. En funciones flecha (arrow functions):</strong>
                    <br />A diferencia de las funciones normales, las funciones flecha no tienen su propio{' '}
                    <code>this</code>. En su lugar, heredan el valor de <code>this</code> del contexto en el que fueron
                    definidas.
                </p>
                <div>
                    <strong>
                        ¿Cuándo usar <code>this</code>?
                    </strong>
                    <br />
                    <ul>
                        <li>Cuando necesitas hacer referencia al objeto que contiene un método.</li>
                        <li>En constructores para asignar propiedades al nuevo objeto.</li>
                        <li>
                            Cuando deseas reutilizar una función en varios contextos usando <code>call</code>,{' '}
                            <code>apply</code> o <code>bind</code>.
                        </li>
                    </ul>
                </div>
            </>
        ),
        answers: [
            <>
                <code>this</code> se refiere al objeto desde el cual se invoca una función
            </>,
            <>
                <code>this</code> siempre apunta al objeto window
            </>,
            <>
                <code>this</code> siempre se refiere al objeto global
            </>,
            <>
                <code>this</code> es "esto" en inglés. Se usa para hablar de algo que está cerca
            </>,
        ],
    },
    {
        id: 'q3',
        text: '¿Qué es la herencia prototipal?',
        explanation: (
            <>
                <p>
                    La herencia prototipal es el mecanismo en JavaScript que permite que los objetos hereden propiedades
                    y métodos de otros objetos. A diferencia de otros lenguajes orientados a objetos que utilizan
                    clases, JavaScript se basa en prototipos, donde los objetos pueden servir como "plantillas" para
                    otros objetos.
                </p>
                <p>
                    <strong>¿Cómo funciona la herencia prototipal?</strong>
                    <br />
                    En JavaScript, cada objeto tiene una referencia interna a otro objeto llamado su "prototipo". Si
                    intentas acceder a una propiedad o método en un objeto y este no lo tiene, JavaScript buscará en su
                    prototipo, y si tampoco lo encuentra, continuará subiendo por la cadena de prototipos (prototype
                    chain) hasta llegar al objeto <code>Object.prototype</code>, que es el prototipo raíz.
                </p>
                <div>
                    <strong>¿Cuándo usar la herencia prototipal?</strong>
                    <br />
                    <ul>
                        <li>Cuando deseas compartir métodos y propiedades entre múltiples objetos.</li>
                        <li>
                            Cuando trabajas con objetos que comparten una estructura similar o comportamiento común.
                        </li>
                        <li>
                            Cuando buscas optimizar la memoria y el rendimiento mediante el uso de prototipos
                            compartidos.
                        </li>
                    </ul>
                </div>
            </>
        ),
        answers: [
            'Es un mecanismo mediante el cual los objetos pueden heredar propiedades y métodos de otros objetos',
            'Es un sistema donde los objetos no pueden compartir métodos',
            'Los objetos solo pueden heredar de una clase, no de otro objeto',
            'Igual que la calvicie, si te toca, iluminas la sala',
        ],
    },
    {
        id: 'q4',
        text: (
            <>
                ¿<code>null</code> y <code>undefined</code> son lo mismo?
            </>
        ),
        explanation: (
            <>
                <p>
                    <strong>
                        No, <code>null</code>, <code>undeclared</code> y <code>undefined</code> no son lo mismo en
                        JavaScript.
                    </strong>{' '}
                    Aunque pueden parecer similares, tienen diferencias importantes en cómo se comportan y cuándo se
                    utilizan.
                </p>

                <p>
                    <strong>
                        1. <code>undefined</code>:
                    </strong>
                    <br />
                    <code>undefined</code> es un valor que JavaScript asigna automáticamente a una variable cuando se
                    declara pero no se le asigna un valor. También puede ser el resultado de acceder a una propiedad que
                    no existe en un objeto o de una función que no devuelve nada explícitamente.
                    <pre>
                        <code>
                            let x; console.log(x); // Imprime undefined, porque x está declarada pero no tiene valor
                        </code>
                    </pre>
                </p>

                <p>
                    <strong>
                        2. <code>null</code>:
                    </strong>
                    <br />
                    <code>null</code> es un valor especial en JavaScript que representa "ausencia intencionada de
                    valor". Se utiliza cuando deseas indicar explícitamente que una variable no tiene ningún valor, pero
                    no es <code>undefined</code>. <code>null</code> es asignado manualmente por el programador.
                    <pre>
                        <code>
                            let y = null; console.log(y); // Imprime null, lo que indica que no tiene valor asignado de
                            manera explícita
                        </code>
                    </pre>
                </p>

                <p>
                    <strong>
                        3. <code>undeclared</code>:
                    </strong>
                    <br />
                    Una variable <code>undeclared</code> es aquella que nunca ha sido declarada en el entorno actual.
                    Intentar acceder a una variable que no ha sido declarada resultará en un error de referencia (
                    <code>ReferenceError</code>).
                    <pre>
                        <code>console.log(z); // ReferenceError: z is not defined, porque nunca se declaró</code>
                    </pre>
                </p>

                <div>
                    <strong>Diferencias clave:</strong>
                    <br />
                    <ul>
                        <li>
                            <strong>
                                <code>undefined</code>:
                            </strong>{' '}
                            Una variable ha sido declarada, pero no tiene valor asignado.
                        </li>
                        <li>
                            <strong>
                                <code>null</code>:
                            </strong>{' '}
                            Es un valor asignado intencionadamente para indicar la ausencia de valor.
                        </li>
                        <li>
                            <strong>
                                <code>undeclared</code>:
                            </strong>{' '}
                            La variable nunca ha sido declarada, y acceder a ella provoca un error.
                        </li>
                    </ul>
                </div>
            </>
        ),
        answers: [
            <>
                <code>null</code> representa la ausencia de valor, <code>undefined</code> es una variable ha sido
                declarada sin valor
            </>,
            <>
                <code>undefined</code> representa la ausencia de valor, <code>null</code> es una variable ha sido
                declarada sin valor
            </>,
            'Si, son lo mismo, representan la ausencia de valor',
            'Pero como va a ser lo mismo si Goku siempre gana a Freezer',
        ],
    },
    {
        id: 'q5',
        text: '¿Qué construcciones de lenguaje utilizas para iterar sobre elementos de un array?',
        explanation: (
            <>
                <p>
                    En JavaScript, existen varias construcciones de lenguaje que se pueden utilizar para iterar sobre
                    los elementos de un array. A continuación, se describen las más comunes:
                </p>

                <p>
                    <strong>
                        1. Bucle <code>for</code>:
                    </strong>
                    <br />
                    La forma más básica de iterar sobre un array es utilizando un bucle <code>for</code>. Este bucle
                    permite recorrer el array usando un índice.
                    <pre>
                        <code>
                            {`const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]); // Imprime cada elemento del array
}`}
                        </code>
                    </pre>
                </p>

                <p>
                    <strong>
                        2. Bucle <code>forEach</code>:
                    </strong>
                    <br />
                    El método <code>forEach</code> es una función de los arrays que permite ejecutar una función para
                    cada elemento del array. Es una manera más concisa y legible de iterar.
                    <pre>
                        <code>
                            {`const array = [1, 2, 3, 4, 5];
array.forEach((element) => {
    console.log(element); // Imprime cada elemento del array
});`}
                        </code>
                    </pre>
                </p>

                <p>
                    <strong>
                        3. Bucle <code>for...of</code>:
                    </strong>
                    <br />
                    El bucle <code>for...of</code> permite iterar directamente sobre los valores de un array. Es una
                    forma sencilla y clara de recorrer arrays.
                    <pre>
                        <code>
                            {`const array = [1, 2, 3, 4, 5];
for (const element of array) {
    console.log(element); // Imprime cada elemento del array
}`}
                        </code>
                    </pre>
                </p>

                <p>
                    <strong>
                        4. Bucle <code>for...in</code>:
                    </strong>
                    <br />
                    El bucle <code>for...in</code> se utiliza para iterar sobre las propiedades enumerables de un
                    objeto. Aunque no es recomendable para arrays, se puede usar para acceder a los índices.
                    <pre>
                        <code>
                            {`const array = [1, 2, 3, 4, 5];
for (const index in array) {
    console.log(array[index]); // Imprime cada elemento del array
}`}
                        </code>
                    </pre>
                    <p>
                        Nota: Al usar <code>for...in</code>, es importante tener en cuenta que puede enumerar
                        propiedades heredadas y no solo los índices del array.
                    </p>
                </p>

                <div>
                    <strong>
                        5. Métodos de array como <code>map</code>, <code>filter</code> y <code>reduce</code>:
                    </strong>
                    <br />
                    Existen métodos de array que permiten iterar y transformar los elementos de un array de manera
                    funcional.
                    <ul>
                        <li>
                            <strong>
                                <code>map</code>:
                            </strong>{' '}
                            Crea un nuevo array con los resultados de aplicar una función a cada elemento del array
                            original.
                            <pre>
                                <code>
                                    {`const array = [1, 2, 3, 4, 5];
const doubled = array.map((element) => element * 2);
console.log(doubled); // Imprime [2, 4, 6, 8, 10]`}
                                </code>
                            </pre>
                        </li>
                        <li>
                            <strong>
                                <code>filter</code>:
                            </strong>{' '}
                            Crea un nuevo array con todos los elementos que cumplen una condición específica.
                            <pre>
                                <code>
                                    {`const array = [1, 2, 3, 4, 5];
const evens = array.filter((element) => element % 2 === 0);
console.log(evens); // Imprime [2, 4]`}
                                </code>
                            </pre>
                        </li>
                        <li>
                            <strong>
                                <code>reduce</code>:
                            </strong>{' '}
                            Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para
                            reducirlo a un solo valor.
                            <pre>
                                <code>
                                    {`const array = [1, 2, 3, 4, 5];
const sum = array.reduce((accumulator, element) => accumulator + element, 0);
console.log(sum); // Imprime 15`}
                                </code>
                            </pre>
                        </li>
                    </ul>
                </div>
            </>
        ),
        answers: [
            'for, for...of, forEach, map, filter, reduce',
            'Solo se puede usar forEach para objetos y arrays',
            'map y for...in son las únicas formas de iterar',
            'Hablar muy alto, así te escuchan todos y no tienes que repetir nada',
        ],
    },
    {
        id: 'q6',
        text: '¿Qué construcciones de lenguaje utilizas para iterar sobre propiedades de un objeto?',
        explanation: (
            <>
                <p>
                    En JavaScript, existen varias construcciones de lenguaje que puedes utilizar para iterar sobre las
                    propiedades de un objeto. A continuación, se describen las más comunes:
                </p>

                <p>
                    <strong>
                        1. Bucle <code>for...in</code>:
                    </strong>
                    <br />
                    El bucle <code>for...in</code> es la forma más directa de iterar sobre las propiedades enumerables
                    de un objeto. Itera sobre las claves del objeto.
                    <pre>
                        {`
        const persona = {
            nombre: 'Juan',
            edad: 30,
            ciudad: 'Madrid'
        };

        for (const clave in persona) {
            console.log(clave + ': ' + persona[clave]); // Imprime cada propiedad y su valor
        }
    `}
                    </pre>
                </p>

                <p>
                    <strong>
                        2. <code>Object.keys()</code>:
                    </strong>
                    <br />
                    El método <code>Object.keys()</code> devuelve un array que contiene las claves (propiedades) del
                    objeto. Luego, puedes usar métodos de array como <code>forEach</code>, <code>map</code> o un bucle{' '}
                    <code>for</code> para iterar sobre ese array.
                    <pre>
                        {`
        const persona = {
            nombre: 'Juan',
            edad: 30,
            ciudad: 'Madrid'
        };

        Object.keys(persona).forEach((clave) => {
            console.log(clave + ': ' + persona[clave]); // Imprime cada propiedad y su valor
        });
    `}
                    </pre>
                </p>

                <p>
                    <strong>
                        3. <code>Object.values()</code>:
                    </strong>
                    <br />
                    Similar a <code>Object.keys()</code>, el método <code>Object.values()</code> devuelve un array que
                    contiene los valores de las propiedades del objeto. Puedes iterar sobre estos valores directamente.
                    <pre>
                        {`
        const persona = {
            nombre: 'Juan',
            edad: 30,
            ciudad: 'Madrid'
        };

        Object.values(persona).forEach((valor) => {
            console.log(valor); // Imprime cada valor del objeto
        });
    `}
                    </pre>
                </p>

                <p>
                    <strong>
                        4. <code>Object.entries()</code>:
                    </strong>
                    <br />
                    Este método devuelve un array de pares clave-valor, donde cada par es un array de dos elementos: la
                    clave y el valor. Puedes usar este array para iterar sobre ambas partes.
                    <pre>
                        {`
        const persona = {
            nombre: 'Juan',
            edad: 30,
            ciudad: 'Madrid'
        };

        Object.entries(persona).forEach(([clave, valor]) => {
            console.log(clave + ': ' + valor); // Imprime cada propiedad y su valor
        });
    `}
                    </pre>
                </p>
            </>
        ),
        answers: [
            'for...in, Object.keys(), Object.values(), Object.entries()',
            'Solo se puede usar forEach para objetos y arrays',
            'map y for...in son las únicas formas de iterar',
            'Los números, si le pongo nombre luego me olvido',
        ],
    },
    {
        id: 'q7',
        text: (
            <>
                ¿Cuál es la diferencia principal entre los métodos <code>Array.forEach()</code> y{' '}
                <code>Array.map()</code>?
            </>
        ),
        explanation: (
            <>
                <p>
                    La diferencia principal entre los métodos <code>Array.forEach()</code> y <code>Array.map()</code> en
                    JavaScript radica en su propósito y el valor que devuelven.
                </p>

                <p>
                    <strong>
                        1. <code>Array.forEach()</code>:
                    </strong>
                    <br />
                    El método <code>forEach()</code> se utiliza para ejecutar una función en cada elemento de un array.
                    Este método no devuelve un nuevo array, sino que simplemente ejecuta la función proporcionada para
                    cada elemento del array original. Es útil cuando se desea realizar efectos secundarios, como
                    modificar elementos en el array original, realizar operaciones de impresión o manipular el DOM.
                    <pre>
                        {`
                    const numeros = [1, 2, 3, 4, 5];
                    numeros.forEach((numero) => {
                      console.log(numero * 2); // Imprime el doble de cada número
                    });
                  `}
                    </pre>
                </p>

                <p>
                    <strong>
                        2. <code>Array.map()</code>:
                    </strong>
                    <br />
                    El método <code>map()</code>, por otro lado, se utiliza para crear un nuevo array con los resultados
                    de aplicar una función a cada elemento del array original. Este método es útil cuando se desea
                    transformar los elementos del array, ya que devuelve un nuevo array sin modificar el original.
                    <pre>
                        {`
                    const numeros = [1, 2, 3, 4, 5];
                    const dobles = numeros.map((numero) => numero * 2);
                    console.log(dobles); // Imprime [2, 4, 6, 8, 10], que es un nuevo array
                  `}
                    </pre>
                </p>

                <div>
                    <strong>Resumen de las diferencias:</strong>
                    <br />
                    <ul>
                        <li>
                            <strong>Propósito:</strong> <code>forEach()</code> se utiliza para realizar acciones en cada
                            elemento, mientras que <code>map()</code> se utiliza para transformar los elementos y crear
                            un nuevo array.
                        </li>
                        <li>
                            <strong>Valor devuelto:</strong> <code>forEach()</code> no devuelve nada (es{' '}
                            <code>undefined</code>), mientras que <code>map()</code> devuelve un nuevo array con los
                            resultados.
                        </li>
                    </ul>
                </div>
            </>
        ),
        answers: [
            <>
                <code>forEach</code> itera sobre cada elemento sin devolver nada, mientras que <code>map</code> devuelve
                un nuevo <code>array</code>
            </>,
            <>
                <code>forEach</code> devuelve un nuevo <code>array</code> y <code>map</code> no
            </>,
            'Ambos métodos son equivalentes',
            'Que en el maincra no se puede hacer trampa',
        ],
    },
    {
        id: 'q8',
        text: '¿Cuál es un caso típico para funciones anónimas?',
        explanation: (
            <>
                <p>
                    Las funciones anónimas, también conocidas como funciones de expresión, son funciones que no tienen
                    un nombre definido. Se utilizan comúnmente en situaciones donde se necesita una función como
                    argumento o cuando la función solo se utilizará una vez. Un caso típico para utilizar funciones
                    anónimas es en la definición de manejadores de eventos o callbacks.
                </p>

                <p>
                    <strong>Ejemplo de uso en manejadores de eventos:</strong>
                    <br />
                    Cuando se agrega un manejador de eventos a un elemento del DOM, a menudo se utiliza una función
                    anónima para definir el comportamiento que debe ocurrir cuando se dispara el evento. Este es un caso
                    práctico en el que no es necesario nombrar la función, ya que solo se utiliza en el contexto del
                    evento.
                    <pre>
                        {`
                    const boton = document.getElementById('miBoton');
                    boton.addEventListener('click', function() {
                      alert('¡Botón clickeado!');
                    });
                  `}
                    </pre>
                </p>

                <p>
                    <strong>Ejemplo de uso en funciones de orden superior:</strong>
                    <br />
                    Las funciones anónimas también son comunes en funciones de orden superior, como <code>
                        map()
                    </code>, <code>filter()</code>, y <code>reduce()</code>, donde se necesita pasar una función como
                    argumento.
                    <pre>
                        {`
                    const numeros = [1, 2, 3, 4, 5];
                    const cuadrados = numeros.map(function(numero) {
                      return numero * numero; // Retorna el cuadrado de cada número
                    });
                    console.log(cuadrados); // Imprime [1, 4, 9, 16, 25]
                  `}
                    </pre>
                </p>
            </>
        ),
        answers: [
            'Se usan comúnmente como callbacks en eventos o en métodos como map y filter',
            'Solo se usan en el global scope',
            'Siempre deben ser asignadas a una variable',
            'Hacer bromas teléfonicas, así no rastrean tu IP',
        ],
    },
    {
        id: 'q9',
        text: '¿Cuál es la diferencia entre objetos de host y objetos nativos?',
        explanation: (
            <>
                <p>
                    En JavaScript, la diferencia entre objetos de host y objetos nativos radica en su origen y
                    propósito. A continuación se detallan sus características y diferencias principales:
                </p>

                <div>
                    <strong>1. Objetos nativos:</strong>
                    <br />
                    Los objetos nativos son parte del propio lenguaje JavaScript. Son aquellos que se definen en el
                    estándar ECMAScript y están disponibles en todos los entornos que implementan JavaScript. Ejemplos
                    de objetos nativos incluyen:
                    <ul>
                        <li>
                            <code>Object</code>: Proporciona métodos para trabajar con objetos.
                        </li>
                        <li>
                            <code>Array</code>: Permite el manejo de colecciones de datos ordenados.
                        </li>
                        <li>
                            <code>String</code>: Proporciona métodos para trabajar con cadenas de texto.
                        </li>
                        <li>
                            <code>Number</code>: Permite realizar operaciones sobre números.
                        </li>
                        <li>
                            <code>Function</code>: Proporciona métodos relacionados con funciones.
                        </li>
                    </ul>
                    <p>
                        Los objetos nativos están implementados directamente en el motor JavaScript y no dependen del
                        entorno en el que se ejecuta el código.
                    </p>
                </div>

                <div>
                    <strong>2. Objetos de host:</strong>
                    <br />
                    Los objetos de host son aquellos que son proporcionados por el entorno de ejecución de JavaScript,
                    como el navegador web o el entorno de Node.js. Estos objetos permiten interactuar con
                    características específicas del entorno. Ejemplos de objetos de host incluyen:
                    <ul>
                        <li>
                            <code>window</code>: En un navegador, representa la ventana del navegador y proporciona
                            métodos para manipularla.
                        </li>
                        <li>
                            <code>document</code>: Permite acceder y manipular el contenido del documento HTML en un
                            navegador.
                        </li>
                        <li>
                            <code>XMLHttpRequest</code>: Proporciona métodos para realizar solicitudes HTTP en el
                            navegador.
                        </li>
                        <li>
                            <code>console</code>: Permite realizar operaciones de registro y depuración en el entorno de
                            desarrollo.
                        </li>
                    </ul>
                    <p>
                        Los objetos de host son específicos del entorno y pueden variar entre diferentes navegadores o
                        plataformas. No están definidos por el estándar ECMAScript, sino que son implementaciones
                        específicas del entorno de ejecución.
                    </p>
                </div>

                <div>
                    <strong>Resumen de las diferencias:</strong>
                    <br />
                    <ul>
                        <li>
                            <strong>Origen:</strong> Los objetos nativos son parte del lenguaje JavaScript, mientras que
                            los objetos de host son proporcionados por el entorno de ejecución (como navegadores o
                            Node.js).
                        </li>
                        <li>
                            <strong>Propósito:</strong> Los objetos nativos proporcionan funcionalidades básicas del
                            lenguaje, mientras que los objetos de host permiten interactuar con características
                            específicas del entorno.
                        </li>
                        <li>
                            <strong>Variabilidad:</strong> Los objetos nativos son consistentes en todos los entornos
                            JavaScript, mientras que los objetos de host pueden variar de un entorno a otro.
                        </li>
                    </ul>
                </div>
            </>
        ),
        answers: [
            'Los objetos de host son proporcionados por el entorno, y los objetos nativos son parte del lenguaje JavaScript',
            'Los objetos de host son parte del lenguaje, y los objetos nativos son proporcionados por el navegador',
            'Los objetos nativos y de host son lo mismo en JavaScript',
            'A mi Josemanué no me dijo que habia que venir duchado',
        ],
    },
    {
        id: 'q10',
        text: (
            <>
                Explica la diferencia entre:{' '}
                <pre style={{ textAlign: 'start !important' }}>
                    <code>
                        {`function Person(){}
var person = Person()
var person = new Person():`}
                    </code>
                </pre>
            </>
        ),
        explanation: (
            <>
                <p>
                    En JavaScript, la manera en que se llama a una función puede alterar su comportamiento y la forma en
                    que se crea un objeto. A continuación, se describen las diferencias entre{' '}
                    <code>function Person(){}</code>, <code>var person = Person();</code> y{' '}
                    <code>var person = new Person();</code>.
                </p>

                <p>
                    <strong>
                        1. <code>function Person(){}</code>:
                    </strong>
                    <br />
                    Esta es la declaración de una función constructora llamada <code>Person</code>. En JavaScript, las
                    funciones pueden actuar como constructores de objetos cuando se utilizan con la palabra clave{' '}
                    <code>new</code>. Esta función puede contener propiedades y métodos que se asignan a los objetos
                    creados a partir de ella.
                    <pre>
                        {`
      function Person() {
        this.nombre = 'Juan';
        this.edad = 30;
      }
    `}
                    </pre>
                </p>

                <p>
                    <strong>
                        2. <code>var person = Person();</code>:
                    </strong>
                    <br />
                    Aquí, se está llamando a la función <code>Person</code> sin la palabra clave <code>new</code>. Esto
                    significa que <code>Person</code> se ejecutará como una función normal, no como un constructor. Si
                    dentro de la función hay un <code>this</code> que asigna propiedades, se referirá al objeto global
                    (en modo no estricto) o será <code>undefined</code> (en modo estricto). Por lo tanto, esta forma no
                    crea una nueva instancia de <code>Person</code>.
                    <pre>
                        {`
      var person = Person(); // Esto no crea un objeto nuevo.
      console.log(person); // undefined (o el valor del objeto global si no se usa 'strict mode')
    `}
                    </pre>
                </p>

                <p>
                    <strong>
                        3. <code>var person = new Person();</code>:
                    </strong>
                    <br />
                    Al utilizar la palabra clave <code>new</code>, se está creando una nueva instancia de{' '}
                    <code>Person</code>. Esto hace que se cree un nuevo objeto, y <code>this</code> dentro de la función
                    se refiere a ese nuevo objeto. Además, el nuevo objeto será el valor de retorno de la función, a
                    menos que la función retorne explícitamente otro objeto.
                    <pre>
                        {`
      var person = new Person(); // Crea una nueva instancia de Person
      console.log(person.nombre); // Imprime "Juan"
      console.log(person.edad); // Imprime 30
    `}
                    </pre>
                </p>

                <div>
                    <strong>Resumen de las diferencias:</strong>
                    <br />
                    <ul>
                        <li>
                            <code>function Person(){}</code> define una función constructora que puede ser utilizada
                            para crear objetos.
                        </li>
                        <li>
                            <code>var person = Person();</code> llama a la función como una función normal, no crea un
                            objeto nuevo, y el valor de <code>person</code> será <code>undefined</code> (en modo
                            estricto) o el objeto global (en modo no estricto).
                        </li>
                        <li>
                            <code>var person = new Person();</code> crea un nuevo objeto, permitiendo que{' '}
                            <code>this</code> se refiera a ese nuevo objeto, y permite acceder a las propiedades y
                            métodos definidos en la función constructora.
                        </li>
                    </ul>
                </div>
            </>
        ),
        answers: [
            'function Person(){}: Declara una función. \nvar person = Person(): Llama la función. \nvar person = new Person(): Crea una nueva instancia con su propio this',
            'function Person(){} y var person = Person() son lo mismo',
            'var person = new Person() y var person = Person() son equivalentes',
            'Bar person, ese es con el que siempre me tomo un algo',
        ],
    },
    {
        id: 'q11',
        text: (
            <>
                Explica las diferencias en el uso de foo entre: <br />
                <code>function foo() {}</code> <br /> <code>var foo = function() {}</code>
            </>
        ),
        explanation: (
            <>
                <p>
                    En JavaScript, existen diferentes maneras de definir funciones, y la forma en que se utiliza la
                    variable <code>foo</code> puede afectar el comportamiento y el alcance de la función. A continuación
                    se describen las diferencias entre <code>function foo() {}</code> y{' '}
                    <code>var foo = function() {};</code>.
                </p>

                <p>
                    <strong>
                        1. <code>function foo() {}</code>:
                    </strong>
                    <br />
                    Esta es una declaración de función (function declaration). Al definir una función de esta manera, se
                    crea una función llamada <code>foo</code> que se puede invocar en cualquier parte del código,
                    incluso antes de su declaración. Esto se debe a que las declaraciones de funciones son "elevadas"
                    (hoisted) al inicio del contexto de ejecución.
                    <pre>
                        {`
      // Ejemplo de declaración de función
      foo(); // Esto funciona porque foo está elevada

      function foo() {
        console.log('Función foo llamada');
      }
    `}
                    </pre>
                </p>

                <p>
                    <strong>
                        2. <code>var foo = function() {};</code>:
                    </strong>
                    <br />
                    Esta es una expresión de función (function expression). En este caso, se está asignando una función
                    anónima a la variable <code>foo</code>. A diferencia de las declaraciones de función, las
                    expresiones de función no son elevadas de la misma manera, lo que significa que <code>foo</code> no
                    se puede invocar antes de su definición. Intentar llamar a <code>foo</code> antes de su declaración
                    resultará en un error de tipo <code>TypeError</code> porque <code>foo</code> aún no está definida en
                    ese momento.
                    <pre>
                        {`
      // Ejemplo de expresión de función
      foo(); // Esto dará un error: TypeError: foo is not a function

      var foo = function() {
        console.log('Función foo llamada');
      };
    `}
                    </pre>
                </p>

                <div>
                    <strong>Resumen de las diferencias:</strong>
                    <br />
                    <ul>
                        <li>
                            <strong>Elevación:</strong> Las declaraciones de función son elevadas, lo que permite
                            llamarlas antes de su definición. Las expresiones de función no son elevadas, y deben
                            definirse antes de ser llamadas.
                        </li>
                        <li>
                            <strong>Nombre:</strong> Las declaraciones de función tienen un nombre asociado (
                            <code>foo</code>), mientras que las expresiones de función pueden ser anónimas o nombradas
                            (en este caso, se usó una función anónima). Sin embargo, el nombre de la función en la
                            expresión no se puede usar fuera del contexto de la propia función.
                        </li>
                        <li>
                            <strong>Ámbito de uso:</strong> Las funciones declaradas están disponibles en el ámbito
                            global o de la función, mientras que las funciones expresadas son solo accesibles después de
                            su declaración.
                        </li>
                    </ul>
                </div>
            </>
        ),
        answers: [
            'function foo() {} es una declaración de función, mientras que var foo = function() {} es una expresión de función',
            'Ambas son equivalentes en cualquier contexto',
            'La gran diferencia es que una es foo y la otra es var',
            'A mi no me marees, no entiendo de estas cosas',
        ],
    },
    // {
    //     id: 'q12',
    //     text: '¿Puedes explicar qué hacen Function.call y Function.apply? ¿Cuál es la diferencia notable?',
    //     explanation:
    //         'Function.call invoca una función con un valor de this específico y pasa los argumentos de forma individual. Function.apply también invoca una función con un valor de this específico, pero los argumentos se pasan como un array',
    //     answers: [
    //         'Function.call pasa los argumentos de forma individual, mientras que Function.apply los pasa como un array',
    //         'Function.apply no permite pasar this',
    //         'Function.call y Function.apply son métodos obsoletos',
    //         'Function.apply es más rápido que Function.call',
    //     ],
    // },
    {
        id: 'q13',
        text: '¿Qué es Function.prototype.bind?',
        explanation: (
            <>
                <p>
                    <code>Function.prototype.bind</code> es un método en JavaScript que permite crear una nueva función
                    que, cuando es llamada, tiene su <code>this</code> establecido a un valor específico, con una
                    secuencia de argumentos dados precediendo cualquier otro argumento que se pase a la función al
                    momento de su llamada. Este método es especialmente útil para asegurar que una función se ejecute en
                    un contexto específico, lo que puede ser necesario en diversos escenarios, como manejadores de
                    eventos o métodos de objetos.
                </p>

                <p>
                    <strong>¿Cómo funciona?</strong>
                    <br />
                    Cuando se llama a <code>bind</code> en una función, se devuelve una nueva función con el{' '}
                    <code>this</code> permanentemente establecido al valor proporcionado. Puedes también pasar
                    parámetros que se aplicarán al invocar la nueva función.
                    <pre>
                        {`
      function saludar(greeting) {
        console.log(\`\${greeting}, \${this.nombre}\`);
      }

      const persona = {
        nombre: 'Juan'
      };

      const saludarJuan = saludar.bind(persona, 'Hola');
      saludarJuan(); // Imprime "Hola, Juan"
    `}
                    </pre>
                </p>

                <div>
                    <strong>Parámetros:</strong>
                    <br />
                    El método <code>bind</code> toma como argumentos:
                    <ul>
                        <li>
                            <strong>thisArg:</strong> El valor que se usará como <code>this</code> al llamar a la
                            función.
                        </li>
                        <li>
                            <strong>args:</strong> Uno o más parámetros que se predefinen y se pasan a la función cuando
                            se llama la nueva función.
                        </li>
                    </ul>
                </div>

                <div>
                    <strong>
                        Ventajas de usar <code>bind</code>:
                    </strong>
                    <br />
                    <ul>
                        <li>
                            <strong>Control de contexto:</strong> Permite mantener un control claro sobre qué objeto se
                            asocia con el contexto de la función.
                        </li>
                        <li>
                            <strong>Preconfiguración de argumentos:</strong> Puedes predefinir algunos argumentos, lo
                            que facilita la reutilización de funciones con configuraciones específicas.
                        </li>
                        <li>
                            <strong>Compatible con manejadores de eventos:</strong> Es útil para asegurar que el
                            contexto de la función se mantenga cuando se utiliza en manejadores de eventos en objetos
                            DOM.
                        </li>
                    </ul>
                </div>

                <p>
                    <strong>Ejemplo de uso en un manejador de eventos:</strong>
                    <br />
                    En este caso, puedes usar <code>bind</code> para asegurar que el <code>this</code> dentro de la
                    función del manejador se refiera al objeto correcto.
                    <pre>
                        {`
      const boton = document.getElementById('miBoton');
      const obj = {
        nombre: 'Juan',
        saludar: function() {
          console.log('Hola, ' + this.nombre);
        }
      };

      boton.addEventListener('click', obj.saludar.bind(obj)); // 'this' es obj
    `}
                    </pre>
                </p>
            </>
        ),
        answers: [
            'Crea una nueva función con un valor de this específico y puede tener argumentos predefinidos',
            'Se usa para invocar inmediatamente una función',
            'Permite crear funciones sin contexto this',
            'Es el error que permite hackear con Visual Basic',
        ],
    },
    // {
    //     id: 'q14',
    //     text: '¿Cuál es la diferencia entre detección de características, inferencia de características y usar la cadena UA?',
    //     explanation:
    //         'La detección de características implica verificar si una característica está disponible. La inferencia de características asume que, si una está presente, otras relacionadas también lo estarán. Usar la cadena UA se basa en la identificación del User-Agent, aunque puede ser manipulada',
    //     answers: [
    //         'La detección de características verifica la disponibilidad de una característica, mientras que la inferencia de características asume relaciones entre características y la cadena UA se basa en el User-Agent',
    //         'La detección de características y la cadena UA son lo mismo',
    //         'La inferencia de características es más precisa que la detección de características',
    //         'Usar la cadena UA es la forma más confiable de verificar compatibilidad',
    //     ],
    // },
    {
        id: 'q15',
        text: '¿Qué es el "hoisting"?',
        explanation: (
            <>
                <p>
                    El <strong>hoisting</strong> es un comportamiento en JavaScript que permite que las declaraciones de
                    variables y funciones se "eleven" (o se muevan) a la parte superior de su contexto de ejecución
                    durante la fase de compilación. Esto significa que puedes utilizar variables y funciones antes de
                    que sean declaradas en el código, aunque hay ciertas diferencias en cómo funciona para las variables
                    y las funciones.
                </p>

                <p>
                    <strong>1. Hoisting de funciones:</strong>
                    <br />
                    Las funciones declaradas con la palabra clave <code>function</code> son completamente elevadas. Esto
                    significa que puedes invocar una función antes de su declaración en el código. Por ejemplo:
                    <pre>
                        {`
      // Llamada a la función antes de su declaración
      saludar();

      function saludar() {
        console.log('¡Hola!');
      }
    `}
                    </pre>
                    <p>
                        En este caso, el código funcionará correctamente y mostrará "¡Hola!" en la consola, porque la
                        declaración de la función es elevada.
                    </p>
                </p>

                <p>
                    <strong>2. Hoisting de variables:</strong>
                    <br />
                    Para las variables declaradas con <code>var</code>, solo la declaración es elevada, no la
                    inicialización. Esto significa que la variable puede ser utilizada antes de ser declarada, pero su
                    valor será <code>undefined</code> hasta que se le asigne un valor. Por ejemplo:
                    <pre>
                        {`
      console.log(miVariable); // Imprime 'undefined'

      var miVariable = 10;

      console.log(miVariable); // Imprime 10
    `}
                    </pre>
                    <p>
                        En este caso, aunque se intenta acceder a <code>miVariable</code> antes de su declaración, el
                        código no produce un error, pero imprime <code>undefined</code> debido a que solo la declaración
                        fue elevada.
                    </p>
                </p>

                <p>
                    <strong>
                        3. Hoisting con <code>let</code> y <code>const</code>:
                    </strong>
                    <br />
                    En el caso de las variables declaradas con <code>let</code> y <code>const</code>, el hoisting sigue
                    ocurriendo, pero estas variables no están accesibles antes de su declaración en el código. Intentar
                    acceder a ellas antes de ser declaradas resultará en un error de referencia. Por ejemplo:
                    <pre>
                        {`
      console.log(miVariableLet); // ReferenceError: Cannot access 'miVariableLet' before initialization

      let miVariableLet = 20;
    `}
                    </pre>
                </p>

                <div>
                    <strong>Resumen:</strong>
                    <br />
                    <ul>
                        <li>
                            <strong>Hoisting de funciones:</strong> Las declaraciones de funciones se elevan
                            completamente, permitiendo su uso antes de la declaración.
                        </li>
                        <li>
                            <strong>
                                Hoisting de variables con <code>var</code>:
                            </strong>{' '}
                            Solo la declaración se eleva, no la inicialización, resultando en un valor de{' '}
                            <code>undefined</code> si se accede antes.
                        </li>
                        <li>
                            <strong>
                                Hoisting con <code>let</code> y <code>const</code>:
                            </strong>{' '}
                            Las declaraciones son elevadas, pero no se pueden acceder antes de su definición, lo que
                            produce un error.
                        </li>
                    </ul>
                </div>
            </>
        ),
        answers: [
            'El hoisting es el comportamiento donde las declaraciones de variables y funciones se mueven al principio de su contexto',
            'El hoisting eleva tanto las declaraciones como las asignaciones',
            'El hoisting es un comportamiento exclusivo de ES5',
            'El hoisting es poner tu web en internet',
        ],
    },
    {
        id: 'q16',
        text: '¿Qué es la coerción de tipos?',
        explanation: (
            <>
                <p>
                    La <strong>coerción de tipos</strong> en JavaScript se refiere al proceso automático en el que el
                    lenguaje convierte un valor de un tipo de dato a otro tipo. Esto ocurre en diversas situaciones,
                    especialmente en operaciones que involucran diferentes tipos de datos. La coerción puede ser
                    explícita (cuando el programador realiza la conversión de forma intencionada) o implícita (cuando el
                    motor de JavaScript lo hace automáticamente).
                </p>

                <p>
                    <strong>1. Coerción implícita:</strong>
                    <br />
                    La coerción implícita ocurre cuando JavaScript convierte automáticamente un tipo de dato en otro.
                    Por ejemplo, al usar el operador de suma (+) con una cadena y un número, el motor convierte el
                    número a una cadena:
                    <pre>
                        {`
      const numero = 5;
      const texto = "El número es: " + numero;
      console.log(texto); // Imprime "El número es: 5"
    `}
                    </pre>
                    <p>
                        En este caso, el número <code>5</code> se convierte en la cadena <code>"5"</code> antes de
                        realizar la concatenación.
                    </p>
                </p>

                <p>
                    <strong>2. Coerción explícita:</strong>
                    <br />
                    La coerción explícita es cuando el programador convierte un tipo de dato a otro de manera
                    intencionada. Esto se puede hacer utilizando funciones de conversión como <code>
                        String()
                    </code>, <code>Number()</code>, o <code>Boolean()</code>:
                    <pre>
                        {`
      const valorNumerico = "10";
      const valorConvertido = Number(valorNumerico);
      console.log(valorConvertido); // Imprime 10 como número
    `}
                    </pre>
                    <p>
                        Aquí, la cadena <code>"10"</code> se convierte explícitamente a un número utilizando la función{' '}
                        <code>Number()</code>.
                    </p>
                </p>

                <p>
                    <strong>3. Ejemplos comunes de coerción:</strong>
                    <br />- **Comparaciones:** Al comparar diferentes tipos de datos, JavaScript puede realizar coerción
                    para evaluar la expresión.
                    <pre>
                        {`
      console.log(5 == "5"); // true (coerción a número)
    `}
                    </pre>
                    - **Operadores aritméticos:** Algunos operadores, como el de suma, pueden forzar la conversión de
                    tipos.
                    <pre>
                        {`
      console.log(1 + "2"); // "12" (1 se convierte a cadena)
      console.log("5" - 2); // 3 (5 se convierte a número)
    `}
                    </pre>
                </p>

                <p>
                    <strong>4. Consideraciones sobre la coerción:</strong>
                    <br />
                    La coerción de tipos puede llevar a resultados inesperados si no se comprende completamente, por lo
                    que es importante tener cuidado al realizar operaciones con diferentes tipos de datos. Utilizar el
                    operador de igualdad estricta (<code>===</code>) puede ayudar a evitar problemas relacionados con la
                    coerción, ya que este operador no realiza conversión de tipos:
                    <pre>
                        {`
      console.log(5 === "5"); // false (sin coerción)
    `}
                    </pre>
                </p>
            </>
        ),
        answers: [
            'La coerción de tipos es la conversión automática entre tipos de datos',
            'La coerción de tipos siempre resulta en errores de ejecución',
            'La coerción de tipos solo se produce en operaciones matemáticas',
            'El momento en el que tu alguien te pregunta la diferencia entre colores y tu ves el mismo',
        ],
    },
    {
        id: 'q17',
        text: '¿Qué es la propagación de eventos (event bubbling)?',
        explanation: (
            <>
                <p>
                    La <strong>propagación de eventos</strong> (o <strong>event bubbling</strong>) es un mecanismo en
                    JavaScript que determina cómo se transmiten los eventos a través del árbol del DOM (Document Object
                    Model). Cuando un evento ocurre en un elemento del DOM, se propaga hacia arriba desde el elemento
                    objetivo hasta su elemento padre, y así sucesivamente, hasta alcanzar el elemento raíz del
                    documento. Este comportamiento permite que los eventos se manejen de manera eficiente en estructuras
                    de árbol anidadas.
                </p>

                <p>
                    <strong>1. Cómo funciona la propagación de eventos:</strong>
                    <br />
                    Cuando se produce un evento en un elemento (por ejemplo, un clic en un botón), el evento se dispara
                    en ese elemento y luego "burbujea" hacia arriba a través de sus padres. Esto significa que, si hay
                    manejadores de eventos registrados en los elementos padres, también se activarán en el orden
                    jerárquico. La propagación puede ser detenida utilizando el método <code>stopPropagation()</code>,
                    lo que evita que el evento continúe hacia arriba.
                    <pre>
                        {`
                    document.getElementById('hijo').addEventListener('click', function(event) {
                      console.log('Elemento hijo clickeado');
                      event.stopPropagation(); // Detiene la propagación
                    });
              
                    document.getElementById('padre').addEventListener('click', function() {
                      console.log('Elemento padre clickeado');
                    });
                  `}
                    </pre>
                    <p>
                        En este ejemplo, si se hace clic en el elemento hijo, solo se ejecutará el manejador de eventos
                        para el hijo y se detendrá la propagación al padre.
                    </p>
                </p>

                <p>
                    <strong>2. Ventajas de la propagación de eventos:</strong>
                    <br />- **Eficiencia:** Permite asignar un único manejador de eventos a un elemento padre en lugar
                    de múltiples manejadores a cada elemento hijo, lo que mejora el rendimiento y simplifica el código.
                    - **Manejo de elementos dinámicos:** La delegación de eventos se facilita, ya que un solo manejador
                    en un padre puede gestionar eventos de hijos que se agregan dinámicamente al DOM.
                </p>

                <p>
                    <strong>3. Diferencia con la captura de eventos:</strong>
                    <br />
                    Además del bubbling, existe un proceso llamado <strong>captura de eventos</strong>, donde el evento
                    se propaga desde el elemento raíz hacia abajo hasta el elemento objetivo. Esto se puede habilitar al
                    especificar el tercer argumento en <code>addEventListener()</code> como <code>true</code>.
                    <pre>
                        {`
                    document.getElementById('padre').addEventListener('click', function() {
                      console.log('Elemento padre clickeado durante la captura');
                    }, true); // Captura
                  `}
                    </pre>
                    <p>En este caso, el evento se manejaría en el padre antes de llegar al hijo.</p>
                </p>

                <p>
                    <strong>4. Ejemplo de uso:</strong>
                    <br />
                    Imagina que tienes una lista de elementos <code>&lt;li&gt;</code> dentro de un{' '}
                    <code>&lt;ul&gt;</code>, y quieres manejar los clics en los elementos de la lista. Puedes asignar un
                    único manejador de eventos al <code>&lt;ul&gt;</code>:
                    <pre>
                        {`
                    const ulElement = document.querySelector('ul');
              
                    ulElement.addEventListener('click', function(event) {
                      if (event.target.tagName === 'LI') {
                        console.log('Elemento de lista clickeado: ' + event.target.textContent);
                      }
                    });
                  `}
                    </pre>
                    <p>
                        En este caso, cuando se hace clic en cualquier <code>&lt;li&gt;</code>, el evento burbujeará
                        hasta el <code>&lt;ul&gt;</code>, donde se puede manejar.
                    </p>
                </p>
            </>
        ),
        answers: [
            'Es cuando un evento comienza en un elemento y se propaga hacia arriba en el DOM',
            'Es cuando un evento solo se queda en el elemento donde se originó',
            'Comienza en el propio elemento y ocurre hacia los elementos hijos',
            'Es un tipo de representación artistica con perros voladores',
        ],
    },
    {
        id: 'q18',
        text: '¿Qué es la captura de eventos (event capturing)?',
        explanation: (
            <>
                <p>
                    La <strong>captura de eventos</strong> (o <strong>event capturing</strong>) es un mecanismo en
                    JavaScript que describe cómo se transmiten los eventos a través del árbol del DOM (Document Object
                    Model). A diferencia de la <strong>propagación de eventos</strong> (event bubbling), donde el evento
                    se propaga desde el elemento objetivo hacia sus elementos padres, en la captura de eventos el evento
                    se mueve desde el elemento raíz hacia abajo hasta alcanzar el elemento objetivo. Esto permite que
                    los manejadores de eventos se activen en el orden inverso al de la burbuja.
                </p>

                <p>
                    <strong>1. Cómo funciona la captura de eventos:</strong>
                    <br />
                    Cuando un evento ocurre, primero se captura en el elemento raíz (el documento) y luego se propaga
                    hacia abajo a través de cada nivel del árbol DOM hasta que llega al elemento objetivo. Esto
                    significa que puedes asignar manejadores de eventos en los elementos padres que se ejecutarán antes
                    de que el evento llegue a sus hijos. Para habilitar la captura de eventos, debes establecer el
                    tercer argumento en <code>addEventListener()</code> como <code>true</code>.
                    <pre>
                        {`
                    document.getElementById('padre').addEventListener('click', function() {
                      console.log('Elemento padre clickeado durante la captura');
                    }, true); // Captura
                  `}
                    </pre>
                    <p>
                        En este ejemplo, si se hace clic en un elemento hijo, el manejador en el padre se ejecutará
                        antes de que se ejecute el manejador en el hijo.
                    </p>
                </p>

                <div>
                    <strong>2. Diferencia con la propagación de eventos:</strong>
                    <br />
                    La principal diferencia entre la captura y la propagación es el orden en que se activan los
                    manejadores de eventos:
                    <ul>
                        <li>
                            En la captura, los manejadores de eventos se activan desde el elemento raíz hasta el
                            elemento objetivo.
                        </li>
                        <li>
                            En la propagación, los manejadores se activan desde el elemento objetivo hacia arriba a
                            través de los elementos padres.
                        </li>
                    </ul>
                </div>

                <p>
                    <strong>3. Ejemplo de uso:</strong>
                    <br />
                    Imagina que tienes una estructura de elementos anidados y quieres manejar clics en un elemento
                    específico antes de que lleguen a los hijos:
                    <pre>
                        {`
                    const padre = document.getElementById('padre');
                    const hijo = document.getElementById('hijo');
              
                    padre.addEventListener('click', function() {
                      console.log('Clic en el elemento padre (captura)');
                    }, true); // Manejador en captura
              
                    hijo.addEventListener('click', function() {
                      console.log('Clic en el elemento hijo');
                    }); // Manejador en bubbling
                  `}
                    </pre>
                    <p>
                        Si haces clic en el elemento hijo, el resultado será:
                        <code>Clic en el elemento padre (captura)</code> seguido de
                        <code>Clic en el elemento hijo</code>. Esto demuestra cómo el manejador de captura se ejecuta
                        antes que el manejador de propagación.
                    </p>
                </p>

                <p>
                    <strong>4. Aplicaciones prácticas:</strong>
                    <br />
                    La captura de eventos puede ser útil en situaciones donde deseas interceptar un evento antes de que
                    se propague a otros elementos. Por ejemplo, podrías implementar lógica de validación o lógica de
                    control en un elemento padre antes de que se ejecute la lógica en un elemento hijo.
                </p>
            </>
        ),
        answers: [
            'Ocurre cuando el evento se propaga desde la raíz del documento hacia el objetivo del evento',
            'Es cuando el evento se propaga hacia arriba en el DOM',
            'Solo ocurre en eventos de teclado',
            'La captura de eventos está prohibida desde 1922',
        ],
    },
    {
        id: 'q19',
        text: '¿Cuál es la diferencia entre un "atributo" y una "propiedad"?',
        explanation: (
            <>
                <p>
                    En el contexto de JavaScript y el DOM (Document Object Model), la diferencia entre un{' '}
                    <strong>atributo</strong> y una <strong>propiedad</strong> es fundamental para comprender cómo se
                    manejan los elementos HTML y sus características.
                </p>

                <p>
                    <strong>1. Atributos:</strong>
                    <br />
                    Los atributos son las características definidas en el HTML que están presentes en el marcado de un
                    elemento. Son parte de la estructura del documento y se definen directamente en el código HTML. Los
                    atributos se pueden ver y modificar utilizando las herramientas de desarrollo del navegador.
                    <pre>
                        {`
                    <input type="text" id="miInput" value="Hola">
                  `}
                    </pre>
                    <p>
                        En este caso, <code>type</code>, <code>id</code> y <code>value</code> son atributos del elemento{' '}
                        <code>&lt;input&gt;</code>.
                    </p>
                </p>

                <p>
                    <strong>2. Propiedades:</strong>
                    <br />
                    Las propiedades son las representaciones de esos atributos dentro del objeto DOM en JavaScript.
                    Cuando accedes a un elemento a través de JavaScript, puedes interactuar con sus propiedades, que
                    reflejan los valores actuales de los atributos, pero pueden ser diferentes en función de las
                    manipulaciones realizadas mediante JavaScript.
                    <pre>
                        {`
                    const miInput = document.getElementById('miInput');
                    console.log(miInput.value); // Imprime "Hola"
                  `}
                    </pre>
                    <p>
                        Aquí, <code>value</code> es una propiedad del objeto <code>miInput</code> que refleja el
                        atributo <code>value</code> del HTML. Sin embargo, si cambias el valor de la propiedad a través
                        de JavaScript:
                        <pre>
                            {`
                    miInput.value = 'Adiós';
                    console.log(miInput.value); // Imprime "Adiós"
                  `}
                        </pre>
                    </p>
                </p>

                <div>
                    <strong>3. Diferencias clave:</strong>
                    <br />
                    <ul>
                        <li>
                            <strong>Definición:</strong> Los atributos son parte del HTML; las propiedades son parte del
                            objeto DOM.
                        </li>
                        <li>
                            <strong>Acceso:</strong> Los atributos se acceden directamente desde el HTML; las
                            propiedades se acceden a través del objeto en JavaScript.
                        </li>
                        <li>
                            <strong>Actualización:</strong> Cambiar una propiedad no siempre afecta el atributo
                            correspondiente y viceversa.
                        </li>
                    </ul>
                </div>

                <p>
                    <strong>4. Ejemplo práctico:</strong>
                    <br />
                    Imagina un elemento <code>&lt;img&gt;</code> con un atributo <code>src</code>:
                    <pre>
                        {`
                    <img id="miImagen" src="imagen1.jpg">
                  `}
                    </pre>
                    Al acceder a la propiedad <code>src</code> en JavaScript:
                    <pre>
                        {`
                    const miImagen = document.getElementById('miImagen');
                    console.log(miImagen.src); // Imprime la URL completa de "imagen1.jpg"
                  `}
                    </pre>
                    Si cambias el atributo directamente en el HTML:
                    <pre>
                        {`
                    <img id="miImagen" src="imagen2.jpg">
                  `}
                    </pre>
                    Y vuelves a acceder a <code>miImagen.src</code>, obtendrás la nueva URL, pero si cambias la
                    propiedad <code>src</code> mediante JavaScript:
                    <pre>
                        {`
                    miImagen.src = 'imagen3.jpg';
                  `}
                    </pre>
                    El atributo HTML <code>src</code> no se actualiza automáticamente en el código HTML; sin embargo, la
                    propiedad reflejará el nuevo valor.
                </p>
            </>
        ),
        answers: [
            'Un atributo está en el HTML y una propiedad es lo que se maneja en el DOM con JavaScript',
            'Atributo y propiedad son términos intercambiables en HTML y JavaScript',
            'Un atributo es una propiedad especial solo disponible en etiquetas de enlace (a)',
            'A ver, todo comienza con dos vacas. Si tienes dos vacas..',
        ],
    },
    // {
    //     id: 'q20',
    //     text: '¿Cuáles son los pros y contras de extender objetos JavaScript integrados?',
    //     explanation:
    //         'Pros: Puedes agregar funcionalidades útiles a objetos existentes. Contras: Puede causar conflictos si otras bibliotecas o el propio JavaScript hacen lo mismo',
    //     answers: [
    //         'Pros: Puedes agregar funcionalidades útiles a objetos existentes. Contras: Puede causar conflictos con otras bibliotecas o el propio lenguaje',
    //         'Pros: Los objetos extendidos siempre serán más rápidos',
    //         'Contras: Los objetos extendidos no pueden ser heredados',
    //         'Extender objetos JavaScript integrados no tiene desventajas',
    //     ],
    // },
    {
        id: 'q21',
        text: '¿Cuál es la diferencia entre == y ===?',
        explanation: (
            <>
                <p>
                    En JavaScript, la diferencia entre <strong>==</strong> y <strong>===</strong> radica en cómo
                    comparan los valores y los tipos de datos. Esta diferencia es crucial para evitar errores sutiles en
                    el código.
                </p>

                <p>
                    <strong>
                        1. Operador de igualdad abstracta (<code>==</code>):
                    </strong>
                    <br />
                    El operador <code>==</code> compara dos valores para determinar si son equivalentes, pero lo hace
                    realizando coerción de tipos si los tipos son diferentes. Esto significa que JavaScript intentará
                    convertir los valores a un tipo común antes de compararlos.
                    <pre>
                        {`
                    console.log(5 == '5'); // true (convierte '5' a número)
                    console.log(null == undefined); // true (considerados equivalentes)
                    console.log(0 == false); // true (0 se convierte a false)
                  `}
                    </pre>
                    <p>
                        Aquí, puedes ver cómo <code>==</code> permite la comparación de valores de diferentes tipos
                        mediante coerción.
                    </p>
                </p>

                <p>
                    <strong>
                        2. Operador de igualdad estricta (<code>===</code>):
                    </strong>
                    <br />
                    El operador <code>===</code> compara tanto el valor como el tipo de dato sin realizar coerción. Esto
                    significa que si los tipos son diferentes, la comparación devuelve <code>false</code>.
                    <pre>
                        {`
                    console.log(5 === '5'); // false (tipos diferentes: número vs. cadena)
                    console.log(null === undefined); // false (tipos diferentes: null vs. undefined)
                    console.log(0 === false); // false (tipos diferentes: número vs. booleano)
                  `}
                    </pre>
                    <p>
                        En este caso, <code>===</code> es más riguroso, lo que ayuda a prevenir errores involuntarios
                        que pueden ocurrir con coerción de tipos.
                    </p>
                </p>

                <p>
                    <strong>3. ¿Cuándo usar cada uno?</strong>
                    <br />- Utiliza <code>===</code> siempre que sea posible para evitar problemas de coerción y
                    asegurar comparaciones más predecibles y seguras. - Utiliza <code>==</code> en situaciones
                    específicas donde deseas que la coerción de tipos sea parte de la comparación, aunque esto es menos
                    común y generalmente se recomienda evitarlo para mantener el código claro y sin errores.
                </p>

                <p>
                    <strong>4. Ejemplos adicionales:</strong>
                    <br />
                    Considera los siguientes ejemplos para ilustrar aún más la diferencia:
                    <pre>
                        {`
                    console.log('' == 0); // true (cadena vacía se convierte a 0)
                    console.log('' === 0); // false (tipos diferentes)
                    console.log(false == 'false'); // false (booleano vs. cadena)
                    console.log(false == 0); // true (booleano convertido a número)
                    console.log(true === 1); // false (booleano vs. número)
                  `}
                    </pre>
                </p>
            </>
        ),
        answers: [
            '== realiza coerción de tipos antes de comparar, mientras que === no realiza coerción',
            '=== convierte los valores antes de compararlos',
            '== es más rápido que ===',
            '=== claramente indica que tienes alguien detrás de ti',
        ],
    },
    {
        id: 'q22',
        text: '¿Qué es la política de mismo origen con respecto a JavaScript?',
        explanation: (
            <>
                <p>
                    La <strong>política de mismo origen</strong> (o <strong>same-origin policy</strong>) es una medida
                    de seguridad en los navegadores web que restringe cómo un documento o script de una fuente puede
                    interactuar con recursos de otra fuente. Esta política es fundamental para proteger la información
                    sensible y evitar ataques como el Cross-Site Scripting (XSS) y el Cross-Site Request Forgery (CSRF).
                </p>

                <p>
                    <strong>1. Definición de origen:</strong>
                    <br />
                    Un "origen" se define como la combinación del <strong>protocolo</strong> (http, https), el{' '}
                    <strong>dominio</strong> (ejemplo: example.com) y el <strong>puerto</strong> (por ejemplo, :80 o
                    :443). Dos URLs tienen el mismo origen si cumplen con estos tres criterios.
                    <pre>
                        {`
                    - http://example.com:80
                    - http://example.com:443
                    - https://example.com
                    - http://example.com:3000 // Diferente puerto
                    - http://sub.example.com // Diferente dominio
                    - http://example.com/path // Diferente ruta, pero mismo origen
                  `}
                    </pre>
                </p>

                <p>
                    <strong>2. Implicaciones de la política de mismo origen:</strong>
                    <br />
                    Debido a esta política, un script en un sitio web no puede acceder a datos de otro sitio web que
                    tenga un origen diferente. Por ejemplo, si un sitio web A intenta hacer una solicitud AJAX a un
                    sitio web B, el navegador bloqueará esa solicitud si ambos sitios tienen orígenes diferentes.
                </p>

                <p>
                    <strong>3. Ejemplo:</strong>
                    <br />
                    Considera el siguiente caso:
                    <pre>
                        {`
                    // Suponiendo que el script se ejecuta desde example.com
                    fetch('http://anotherdomain.com/api/data') // Esta solicitud será bloqueada
                      .then(response => response.json())
                      .then(data => console.log(data));
                  `}
                    </pre>
                    <p>
                        Aquí, la solicitud a <code>anotherdomain.com</code> será bloqueada por la política de mismo
                        origen, ya que el dominio es diferente.
                    </p>
                </p>

                <p>
                    <strong>4. Excepciones y soluciones:</strong>
                    <br />- **CORS (Cross-Origin Resource Sharing):** Es una forma de permitir que los recursos sean
                    compartidos entre diferentes orígenes. Los servidores pueden enviar cabeceras HTTP específicas para
                    indicar que ciertos orígenes tienen permiso para acceder a sus recursos.
                    <pre>
                        {`
                    Access-Control-Allow-Origin: http://example.com
                  `}
                    </pre>
                    - **JSONP:** Una técnica que permite hacer solicitudes cross-origin mediante el uso de etiquetas
                    `script`, aunque está siendo reemplazada por CORS debido a problemas de seguridad.
                </p>

                <p>
                    <strong>5. Resumen:</strong>
                    <br />
                    La política de mismo origen es una característica de seguridad esencial que ayuda a proteger a los
                    usuarios y sus datos de ataques maliciosos al restringir el acceso a recursos entre diferentes
                    orígenes. Las soluciones como CORS y JSONP permiten superar estas restricciones de manera controlada
                    y segura.
                </p>
            </>
        ),
        answers: [
            'La política de mismo origen impide que scripts de diferentes orígenes accedan a recursos entre sí',
            'Permite compartir recursos entre orígenes sin restricciones',
            'Solo se aplica a solicitudes GET',
            'No me gusta hablar de política',
        ],
    },
    {
        id: 'q23',
        text: '¿Qué es un operador ternario?',
        explanation: (
            <>
                <p>
                    Un <strong>operador ternario</strong> es una construcción en JavaScript (y en otros lenguajes de
                    programación) que permite realizar una evaluación condicional en una sola línea. Es una forma
                    concisa de expresar una condición y seleccionar entre dos resultados posibles, lo que lo convierte
                    en una alternativa más breve a una declaración <code>if-else</code>.
                </p>

                <p>
                    <strong>1. Sintaxis:</strong>
                    <br />
                    La sintaxis del operador ternario es la siguiente:
                    <pre>
                        {`
                    condición ? valorSiVerdadero : valorSiFalso;
                  `}
                    </pre>
                    <p>
                        Aquí, <code>condición</code> es la expresión que se evalúa. Si es <code>true</code>, se retorna{' '}
                        <code>valorSiVerdadero</code>; si es <code>false</code>, se retorna <code>valorSiFalso</code>.
                    </p>
                </p>

                <p>
                    <strong>2. Ejemplo práctico:</strong>
                    <br />
                    Considera el siguiente ejemplo donde determinamos si una persona es mayor de edad:
                    <pre>
                        {`
                    const edad = 18;
                    const resultado = (edad >= 18) ? 'Es mayor de edad' : 'Es menor de edad';
                    console.log(resultado); // Imprime "Es mayor de edad"
                  `}
                    </pre>
                    <p>
                        En este caso, si <code>edad</code> es mayor o igual a 18, la variable <code>resultado</code>{' '}
                        tomará el valor <code>'Es mayor de edad'</code>; de lo contrario, tomará el valor{' '}
                        <code>'Es menor de edad'</code>.
                    </p>
                </p>

                <p>
                    <strong>3. Ventajas del operador ternario:</strong>
                    <br />- **Concisión:** Permite escribir condiciones en menos líneas de código. - **Legibilidad:**
                    Para condiciones simples, puede mejorar la claridad del código al evitar estructuras más largas.
                </p>

                <p>
                    <strong>4. Desventajas del operador ternario:</strong>
                    <br />- **Complejidad:** Para condiciones más complejas, el uso excesivo del operador ternario puede
                    hacer que el código sea más difícil de leer y mantener. - **Anidación:** Aunque se puede anidar
                    varios operadores ternarios, esto puede llevar a un código confuso.
                    <pre>
                        {`
                    const resultado = (edad < 13) ? 'Niño' : (edad < 18) ? 'Adolescente' : 'Adulto';
                  `}
                    </pre>
                </p>
            </>
        ),
        answers: [
            'Trabaja con tres operandos: condición, resultado verdadero / falso',
            'Ternario significa que se pueden hacer tres comparaciones',
            'El operador ternario solo funciona con valores booleanos',
            'Es un operador de trenes, pero mal escrito',
        ],
    },
    {
        id: 'q24',
        text: '¿Qué es el modo estricto?',
        explanation: (
            <>
                <p>
                    El <strong>modo estricto</strong> en JavaScript es una forma de ejecutar código que ayuda a
                    identificar errores potenciales y a mejorar la calidad del código. Introducido en ECMAScript 5, el
                    modo estricto permite a los desarrolladores escribir código más seguro y optimizado al deshabilitar
                    ciertas características problemáticas del lenguaje.
                </p>

                <p>
                    <strong>1. Activación del modo estricto:</strong>
                    <br />
                    Para activar el modo estricto, se debe agregar la cadena <code>'use strict';</code> al principio de
                    un script o de una función. Esto se puede hacer de las siguientes maneras:
                    <pre>
                        {`
                    // Modo estricto para todo el script
                    'use strict';
                    // Código aquí será en modo estricto
              
                    // O para una función específica
                    function miFuncion() {
                      'use strict';
                      // Código de la función aquí será en modo estricto
                    }
                  `}
                    </pre>
                </p>

                <div>
                    <strong>2. Comportamientos del modo estricto:</strong>
                    <br />
                    Cuando se ejecuta en modo estricto, JavaScript impone una serie de reglas más estrictas, tales como:
                    <ul>
                        <li>
                            <strong>Prohibición de variables no declaradas:</strong> No se permite asignar valores a
                            variables que no han sido declaradas.
                            <pre>
                                {`
                        'use strict';
                        x = 10; // Error: x no está declarado
                      `}
                            </pre>
                        </li>
                        <li>
                            <strong>
                                Eliminación de <code>this</code> global:
                            </strong>{' '}
                            En funciones no llamadas como métodos, <code>this</code> se convertirá en{' '}
                            <code>undefined</code> en lugar de referirse al objeto global.
                            <pre>
                                {`
                        'use strict';
                        function miFuncion() {
                          console.log(this); // undefined
                        }
                        miFuncion();
                      `}
                            </pre>
                        </li>
                        <li>
                            <strong>Prohibición de duplicados:</strong> No se pueden declarar parámetros de función
                            duplicados ni propiedades de objeto duplicadas.
                            <pre>
                                {`
                        'use strict';
                        function suma(a, a, c) { // Error: Parámetro duplicado
                          return a + a + c;
                        }
                      `}
                            </pre>
                        </li>
                        <li>
                            <strong>
                                Prohibición de <code>delete</code> en propiedades no configurables:
                            </strong>{' '}
                            Intentar eliminar propiedades no configurables causará un error.
                            <pre>
                                {`
                        'use strict';
                        const obj = {};
                        Object.defineProperty(obj, 'prop', { value: 42, configurable: false });
                        delete obj.prop; // Error: no se puede eliminar la propiedad
                      `}
                            </pre>
                        </li>
                    </ul>
                </div>

                <p>
                    <strong>3. Beneficios del modo estricto:</strong>
                    <br />- **Detección de errores temprana:** Ayuda a identificar errores comunes y malas prácticas en
                    el código. - **Mejora del rendimiento:** Los motores JavaScript pueden optimizar mejor el código
                    cuando se ejecuta en modo estricto. - **Seguridad:** Reduce el riesgo de errores accidentales que
                    pueden comprometer la seguridad del código.
                </p>

                <p>
                    <strong>4. Limitaciones del modo estricto:</strong>
                    <br />- No se puede usar en todas las versiones de navegadores más antiguos, pero la mayoría de los
                    navegadores modernos lo admiten. - Algunas características de JavaScript pueden funcionar de manera
                    diferente, lo que requiere que los desarrolladores estén atentos a cómo implementan su código.
                </p>
            </>
        ),
        answers: [
            'Mejora la seguridad del código y previene errores silenciosos',
            'Permite funciones asincrónicas',
            'Es obligatorio en ES6',
            'Enfada a tu ordenador',
        ],
    },
    // {
    //     id: 'q25',
    //     text: '¿Cuáles son las ventajas/desventajas de escribir código JavaScript en un lenguaje que se compila a JavaScript?',
    //     explanation:
    //         'Ventajas: Puede mejorar la sintaxis y agregar características adicionales. Desventajas: Requiere un paso de compilación adicional y puede hacer más difícil la depuración',
    //     answers: [
    //         'Ventajas: Mejora la sintaxis y agrega nuevas características. Desventajas: Necesita un paso de compilación y puede hacer más difícil la depuración',
    //         'No hay desventajas en usar lenguajes que se compilan a JavaScript',
    //         'Estos lenguajes no son compatibles con el ecosistema de JavaScript',
    //         'No hay necesidad de compilación si se usa un lenguaje de alto nivel',
    //     ],
    // },
    // {
    //     id: 'q26',
    //     text: '¿Qué herramientas y técnicas usas para depurar código JavaScript?',
    //     explanation:
    //         'Uso herramientas como console.log para revisar el estado del código, breakpoints en DevTools para pausar y analizar el código, y el debugger para una depuración más avanzada',
    //     answers: [
    //         'Uso console.log, breakpoints en DevTools y debugger para depurar',
    //         'Solo uso console.log para depurar',
    //         'No existen herramientas específicas para depurar JavaScript',
    //         'No necesito depurar, mi código siempre es perfecto',
    //     ],
    // },
    {
        id: 'q27',
        text: '¿Qué diferencia hay entre objetos mutables e inmutables?',
        explanation: (
            <>
                <p>
                    En programación, la diferencia entre <strong>objetos mutables</strong> e <strong>inmutables</strong>{' '}
                    se refiere a la capacidad de un objeto para ser modificado después de su creación. Esta distinción
                    es importante en el manejo de datos y en la forma en que los programas gestionan el estado.
                </p>

                <p>
                    <strong>1. Objetos mutables:</strong>
                    <br />
                    Los objetos mutables son aquellos que pueden ser modificados después de haber sido creados. Esto
                    significa que sus propiedades o elementos pueden cambiar sin necesidad de crear un nuevo objeto. En
                    JavaScript, los objetos y los arreglos son ejemplos de objetos mutables.
                    <pre>
                        {`
                    const objetoMut = { nombre: 'Juan' };
                    objetoMut.nombre = 'Pedro'; // Modificación de la propiedad
                    console.log(objetoMut); // { nombre: 'Pedro' }
                  `}
                    </pre>
                    <p>
                        Aquí, el objeto <code>objetoMut</code> se modifica cambiando su propiedad <code>nombre</code>{' '}
                        sin necesidad de crear un nuevo objeto.
                    </p>
                </p>

                <p>
                    <strong>2. Objetos inmutables:</strong>
                    <br />
                    Los objetos inmutables, por otro lado, no pueden ser modificados después de su creación. Cualquier
                    cambio en su estado debe resultar en la creación de un nuevo objeto. Esto puede ayudar a evitar
                    efectos secundarios y hacer que el código sea más predecible. Un ejemplo de objetos inmutables en
                    JavaScript son las cadenas (strings) y los objetos creados usando bibliotecas como Immutable.js.
                    <pre>
                        {`
                    const cadenaInmut = 'Hola';
                    const nuevaCadena = cadenaInmut.replace('Hola', 'Hola, mundo!'); // Crea una nueva cadena
                    console.log(cadenaInmut); // 'Hola'
                    console.log(nuevaCadena); // 'Hola, mundo!'
                  `}
                    </pre>
                    <p>
                        En este caso, <code>cadenaInmut</code> no se modifica; en cambio, se crea una nueva cadena{' '}
                        <code>nuevaCadena</code> que contiene el valor modificado.
                    </p>
                </p>

                <p>
                    <strong>3. Ventajas y desventajas:</strong>
                    <br />
                    - **Objetos mutables:**
                    <br />- <strong>Ventajas:</strong> Permiten cambios rápidos y eficientes en el estado de los datos
                    sin necesidad de crear nuevos objetos, lo que puede ser útil en situaciones donde se requieren
                    modificaciones frecuentes. - <strong>Desventajas:</strong> Pueden llevar a efectos secundarios no
                    deseados y complicar el seguimiento del estado en aplicaciones grandes.
                    <p>
                        - **Objetos inmutables:**
                        <br />- <strong>Ventajas:</strong> Facilitan el seguimiento del estado y mejoran la
                        predictibilidad del código al eliminar efectos secundarios. - <strong>Desventajas:</strong>{' '}
                        Pueden ser menos eficientes en términos de rendimiento, ya que cada modificación requiere la
                        creación de un nuevo objeto.
                    </p>
                </p>

                <p>
                    <strong>4. Ejemplo en contexto:</strong>
                    <br />
                    Supongamos que tenemos un arreglo de números. Si queremos añadir un número a un arreglo mutable,
                    simplemente modificamos el arreglo existente:
                    <pre>
                        {`
                    const numeros = [1, 2, 3];
                    numeros.push(4); // Modificación del arreglo mutable
                    console.log(numeros); // [1, 2, 3, 4]
                  `}
                    </pre>
                    <p>
                        En cambio, si trabajamos con un arreglo inmutable, tendríamos que crear un nuevo arreglo:
                        <pre>
                            {`
                    const numerosInmut = [1, 2, 3];
                    const nuevosNumeros = [...numerosInmut, 4]; // Creación de un nuevo arreglo
                    console.log(numerosInmut); // [1, 2, 3]
                    console.log(nuevosNumeros); // [1, 2, 3, 4]
                  `}
                        </pre>
                    </p>
                </p>
            </>
        ),
        answers: [
            'Los objetos mutables pueden cambiar su estado, mientras que los inmutables no pueden ser modificados',
            'Los objetos inmutables son más rápidos que los mutables',
            'No existe diferencia entre objetos mutables e inmutables',
            'Los objetos inmutables mejoran a tu pokemon',
        ],
    },
    {
        id: 'q28',
        text: '¿Que diferencia hay entre funciones síncronas y asíncronas?',
        explanation: (
            <>
                <p>
                    La diferencia entre <strong>funciones síncronas</strong> y <strong>asíncronas</strong> se refiere a
                    cómo se ejecutan y manejan las operaciones en el tiempo, especialmente en relación con el flujo de
                    ejecución de un programa.
                </p>

                <p>
                    <strong>1. Funciones síncronas:</strong>
                    <br />
                    Las funciones síncronas son aquellas que se ejecutan de manera secuencial. Cuando se invoca una
                    función síncrona, el programa espera a que esta finalice su ejecución antes de continuar con la
                    siguiente línea de código. Esto puede llevar a bloqueos en el hilo principal de ejecución si la
                    función realiza operaciones que tardan mucho tiempo, como cálculos intensivos o solicitudes de red.
                    <pre>
                        {`
                    function tareaSinc() {
                      console.log('Tarea 1 iniciada');
                      // Simulación de un proceso largo
                      for (let i = 0; i < 1e9; i++) {} // Bloquea la ejecución
                      console.log('Tarea 1 completada');
                    }
              
                    tareaSinc();
                    console.log('Tarea 2'); // Espera a que tareaSinc se complete
                  `}
                    </pre>
                    <p>
                        En este ejemplo, la <code>tareaSinc()</code> bloquea la ejecución hasta que termina, por lo que
                        "Tarea 2" no se imprime hasta que "Tarea 1" ha finalizado.
                    </p>
                </p>

                <p>
                    <strong>2. Funciones asíncronas:</strong>
                    <br />
                    Las funciones asíncronas permiten que el programa continúe ejecutándose sin esperar a que una
                    operación se complete. Esto se logra a través de mecanismos como callbacks, promesas y la palabra
                    clave <code>async/await</code>. Las funciones asíncronas permiten manejar tareas que pueden llevar
                    tiempo (como solicitudes a servidores) sin bloquear el hilo principal.
                    <pre>
                        {`
                    function tareaAsinc() {
                      console.log('Tarea 1 iniciada');
                      setTimeout(() => {
                        console.log('Tarea 1 completada');
                      }, 2000); // Simulación de una tarea asíncrona
                    }
              
                    tareaAsinc();
                    console.log('Tarea 2'); // Se ejecuta inmediatamente
                  `}
                    </pre>
                    <p>
                        En este caso, la función <code>tareaAsinc()</code> inicia una operación asíncrona, y "Tarea 2"
                        se imprime inmediatamente después, sin esperar a que "Tarea 1" termine.
                    </p>
                </p>

                <p>
                    <strong>3. Uso de promesas y async/await:</strong>
                    <br />
                    Las promesas son un mecanismo que permite manejar la finalización de operaciones asíncronas. La
                    palabra clave <code>async</code> se utiliza para definir funciones asíncronas y <code>await</code>{' '}
                    permite esperar la resolución de una promesa sin bloquear la ejecución del programa.
                    <pre>
                        {`
                    async function tareaAsync() {
                      console.log('Tarea 1 iniciada');
                      await new Promise(resolve => setTimeout(resolve, 2000)); // Espera 2 segundos
                      console.log('Tarea 1 completada');
                    }
              
                    tareaAsync();
                    console.log('Tarea 2'); // Se ejecuta inmediatamente
                  `}
                    </pre>
                    <p>
                        En este ejemplo, <code>tareaAsync()</code> inicia una tarea asíncrona y luego "Tarea 2" se
                        imprime antes de que "Tarea 1" se complete.
                    </p>
                </p>

                <p>
                    <strong>4. Ventajas y desventajas:</strong>
                    <br />
                    - **Funciones síncronas:**
                    <br />- <strong>Ventajas:</strong> Más simples y fáciles de entender, ya que el flujo de ejecución
                    es predecible. - <strong>Desventajas:</strong> Pueden bloquear el hilo de ejecución y hacer que la
                    aplicación se vuelva menos receptiva.
                    <p>
                        - **Funciones asíncronas:**
                        <br />- <strong>Ventajas:</strong> Permiten una mejor gestión del tiempo de espera y una mayor
                        responsividad de la aplicación. - <strong>Desventajas:</strong> Pueden ser más complejas de
                        manejar, especialmente con callbacks anidados (lo que se conoce como "callback hell").
                    </p>
                </p>
            </>
        ),
        answers: [
            'Las funciones síncronas bloquean el hilo principal, las asíncronas permiten que otras tareas se ejecuten en paralelo',
            'No hay diferencia entre funciones síncronas y asíncronas',
            'Las funciones asíncronas solo se pueden usar en navegadores modernos',
            'Las funciones asíncronas permiten ir al partido de los niños',
        ],
    },
    {
        id: 'q29',
        text: '¿Qué es el event loop?',
        explanation: (
            <>
                <p>
                    El <strong>event loop</strong>, o bucle de eventos, es un mecanismo fundamental en JavaScript que
                    permite manejar la ejecución de código, la recolección de eventos y la ejecución de tareas
                    asíncronas. Es esencial para la naturaleza no bloqueante y asíncrona de JavaScript, lo que le
                    permite gestionar múltiples operaciones sin detener el hilo principal de ejecución.
                </p>

                <p>
                    <strong>1. Contexto de ejecución:</strong>
                    <br />
                    JavaScript se ejecuta en un solo hilo, lo que significa que solo puede procesar una tarea a la vez.
                    Para manejar operaciones que pueden tardar mucho tiempo (como solicitudes de red o temporizadores),
                    JavaScript utiliza el event loop junto con la cola de tareas y la pila de llamadas.
                </p>

                <p>
                    <strong>2. Componentes clave:</strong>
                    <br />- **Pila de llamadas (Call Stack):** Es donde se llevan a cabo las funciones de ejecución.
                    Cuando se llama a una función, se apila en la parte superior de la pila y se ejecuta. Cuando la
                    función termina, se elimina de la pila.
                    <pre>
                        {`
                    function tarea() {
                      console.log('Tarea ejecutada');
                    }
                    tarea(); // Se apila y se ejecuta
                  `}
                    </pre>
                </p>

                <p>
                    - **Cola de tareas (Task Queue):** Es donde se almacenan las funciones que deben ejecutarse una vez
                    que la pila de llamadas esté vacía. Esto incluye callbacks de eventos y funciones programadas con{' '}
                    <code>setTimeout</code> o <code>setInterval</code>.
                    <pre>
                        {`
                    setTimeout(() => {
                      console.log('Tarea de la cola');
                    }, 0); // Se añade a la cola de tareas
                  `}
                    </pre>
                </p>

                <p>
                    - **Event Loop:** Es el que monitorea la pila de llamadas y la cola de tareas. Si la pila está
                    vacía, el event loop toma la primera tarea de la cola y la empuja a la pila para su ejecución.
                </p>

                <p>
                    <strong>3. Flujo de ejecución:</strong>
                    <br />
                    El flujo de ejecución de JavaScript con el event loop se puede describir de la siguiente manera:
                    <ol>
                        <li>Las funciones son llamadas y se ejecutan, apilándose en la pila de llamadas.</li>
                        <li>
                            Si se encuentra una tarea asíncrona (como un temporizador o una solicitud de red), se
                            registra y se pasa a la cola de tareas.
                        </li>
                        <li>
                            Una vez que la pila de llamadas está vacía, el event loop revisa la cola de tareas y mueve
                            la primera tarea a la pila de llamadas para su ejecución.
                        </li>
                    </ol>
                </p>

                <p>
                    <strong>4. Ejemplo ilustrativo:</strong>
                    <br />
                    Considera el siguiente código:
                    <pre>
                        {`
                    console.log('Inicio');
              
                    setTimeout(() => {
                      console.log('Timeout');
                    }, 0);
              
                    console.log('Fin');
                  `}
                    </pre>
                    <p>La salida de este código será:</p>
                    <pre>
                        {`
                    Inicio
                    Fin
                    Timeout
                  `}
                    </pre>
                    <p>
                        En este caso, "Inicio" y "Fin" se imprimen primero porque están en la pila de llamadas. La
                        función del <code>setTimeout</code> se mueve a la cola de tareas y se ejecuta solo después de
                        que la pila de llamadas esté vacía.
                    </p>
                </p>

                <p>
                    <strong>5. Importancia del event loop:</strong>
                    <br />
                    El event loop permite a JavaScript manejar tareas asíncronas de manera eficiente, lo que es crucial
                    para la creación de aplicaciones web interactivas y receptivas. Permite que los desarrolladores
                    realicen múltiples operaciones sin bloquear el hilo principal, mejorando así la experiencia del
                    usuario.
                </p>
            </>
        ),
        answers: [
            'Permite a JavaScript manejar operaciones asíncronas verificando la cola de tareas y ejecutando callbacks',
            'Es un ciclo de eventos que detiene la ejecución de funciones',
            'Solo se usa en el contexto de promesas',
            'Son los mejores cereales de EEUU',
        ],
    },
    {
        id: 'q30',
        text: '¿Cuáles son las diferencias entre variables creadas con let y var?',
        explanation: (
            <>
                <p>
                    En JavaScript, las palabras clave <strong>const</strong>, <strong>let</strong> y{' '}
                    <strong>var</strong> se utilizan para declarar variables, pero cada una tiene características
                    diferentes en cuanto a alcance (scope), mutabilidad y comportamiento. A continuación, se presentan
                    las principales diferencias entre ellas.
                </p>

                <p>
                    <strong>1. Alcance (Scope):</strong>
                    <br />- <strong>var:</strong> Tiene un alcance de función o global. Esto significa que si se declara
                    una variable con <code>var</code> dentro de una función, no se puede acceder a ella fuera de esa
                    función. Si se declara fuera de cualquier función, es global.
                    <pre>
                        {`
                    function ejemploVar() {
                      var x = 10; // Alcance de función
                    }
                    ejemploVar();
                    console.log(x); // ReferenceError: x is not defined
                  `}
                    </pre>
                    - <strong>let:</strong> Tiene un alcance de bloque. Esto significa que una variable declarada con{' '}
                    <code>let</code> solo está disponible dentro del bloque (por ejemplo, dentro de un <code>if</code>,
                    un bucle, etc.) donde fue definida.
                    <pre>
                        {`
                    if (true) {
                      let y = 20; // Alcance de bloque
                    }
                    console.log(y); // ReferenceError: y is not defined
                  `}
                    </pre>
                    - <strong>const:</strong> Al igual que <code>let</code>, tiene un alcance de bloque. Sin embargo, no
                    se puede reasignar una variable declarada con <code>const</code> después de su inicialización.
                    <pre>
                        {`
                    if (true) {
                      const z = 30; // Alcance de bloque
                    }
                    console.log(z); // ReferenceError: z is not defined
                  `}
                    </pre>
                </p>

                <p>
                    <strong>2. Mutabilidad:</strong>
                    <br />- <strong>var y let:</strong> Ambas permiten la reasignación de valores.
                    <pre>
                        {`
                    var a = 1;
                    let b = 2;
                    a = 3; // Reasignación válida
                    b = 4; // Reasignación válida
                    console.log(a, b); // 3, 4
                  `}
                    </pre>
                    - <strong>const:</strong> No permite la reasignación. Si se intenta cambiar el valor de una variable
                    declarada con <code>const</code>, se genera un error.
                    <pre>
                        {`
                    const c = 5;
                    c = 6; // TypeError: Assignment to constant variable.
                  `}
                    </pre>
                    <p>
                        Sin embargo, los objetos y arreglos declarados con <code>const</code> pueden ser mutables, lo
                        que significa que puedes modificar sus propiedades o elementos, pero no puedes reasignar el
                        objeto o arreglo completo.
                        <pre>
                            {`
                    const obj = { nombre: 'Juan' };
                    obj.nombre = 'Pedro'; // Modificación válida
                    console.log(obj); // { nombre: 'Pedro' }
                  `}
                        </pre>
                    </p>
                </p>

                <p>
                    <strong>3. Hoisting:</strong>
                    <br />- <strong>var:</strong> Las variables declaradas con <code>var</code> son "hoisted" (elevadas)
                    a la parte superior de su contexto de ejecución, lo que significa que se pueden usar antes de su
                    declaración. Sin embargo, su valor será <code>undefined</code> hasta que se alcance la línea de
                    código donde se les asigna un valor.
                    <pre>
                        {`
                    console.log(d); // undefined
                    var d = 10;
                    console.log(d); // 10
                  `}
                    </pre>
                    - <strong>let y const:</strong> Las variables declaradas con <code>let</code> y <code>const</code>{' '}
                    también son hoisted, pero no se pueden utilizar antes de su declaración, resultando en un error de
                    referencia si se intenta acceder a ellas.
                    <pre>
                        {`
                    console.log(e); // ReferenceError: Cannot access 'e' before initialization
                    let e = 15;
                  `}
                    </pre>
                </p>

                <p>
                    <strong>4. Recomendaciones de uso:</strong>
                    <br />- Se recomienda usar <code>let</code> y <code>const</code> en lugar de <code>var</code> en el
                    código moderno de JavaScript debido a su comportamiento más predecible y sus alcances más
                    restrictivos.
                </p>
            </>
        ),
        answers: [
            'var tiene un alcance de función y permite redeclaración, let tiene un alcance de bloque y no permite redeclaración',
            'let no te roba a la novia',
            'let y var son lo mismo',
            'var permite declarar lo que quieras',
        ],
    },
    // {
    //     id: 'q31',
    //     text: '¿Cuáles son las diferencias entre clases ES6 y constructores de funciones ES5?',
    //     explanation:
    //         'Las clases ES6 proporcionan una sintaxis más limpia y estructurada para la creación de objetos y herencia, mientras que las funciones constructoras de ES5 requieren el uso manual de prototipos para la herencia',
    //     answers: [
    //         'Las clases ES6 tienen una sintaxis más limpia y proporcionan un mecanismo integrado de herencia, mientras que los constructores de funciones ES5 requieren prototipos manuales',
    //         'No hay diferencias, ambos son equivalentes',
    //         'Las funciones constructoras de ES5 no permiten herencia',
    //         'Las clases ES6 no permiten la herencia',
    //     ],
    // },
    {
        id: 'q32',
        text: '¿Cuándo se debería usar la sintaxis de función flecha (=>)?',
        explanation: (
            <>
                <p>
                    La sintaxis de <strong>función flecha</strong> (arrow function) en JavaScript, introducida en
                    ECMAScript 6 (ES6), proporciona una forma más concisa de definir funciones. Un caso de uso típico
                    para las funciones flecha es en la programación funcional, especialmente al trabajar con métodos de
                    array como <code>map</code>, <code>filter</code> y <code>reduce</code>.
                </p>

                <p>
                    <strong>
                        Ejemplo de uso con <code>map</code>:
                    </strong>
                    <br />
                    Supongamos que tenemos un array de números y queremos crear un nuevo array que contenga el cuadrado
                    de cada número. Con la sintaxis de función tradicional, el código se vería así:
                    <pre>
                        {`
                    const numeros = [1, 2, 3, 4, 5];
                    const cuadrados = numeros.map(function(num) {
                      return num * num;
                    });
                    console.log(cuadrados); // [1, 4, 9, 16, 25]
                  `}
                    </pre>
                    <p>
                        Usando la sintaxis de función flecha, el mismo código se puede escribir de manera más concisa:
                    </p>
                    <pre>
                        {`
                    const numeros = [1, 2, 3, 4, 5];
                    const cuadrados = numeros.map(num => num * num);
                    console.log(cuadrados); // [1, 4, 9, 16, 25]
                  `}
                    </pre>
                </p>

                <p>
                    <strong>Ventajas de usar funciones flecha:</strong>
                    <br />
                    1. <strong>Concisión:</strong> La sintaxis es más breve, eliminando la necesidad de la palabra clave{' '}
                    <code>function</code> y los paréntesis si solo hay un parámetro. 2.{' '}
                    <strong>
                        Contexto de <code>this</code>:
                    </strong>{' '}
                    Las funciones flecha no crean su propio contexto de <code>this</code>; en cambio, heredan el{' '}
                    <code>this</code> del contexto donde fueron definidas. Esto es especialmente útil en callbacks donde
                    se necesita acceder al contexto del objeto que contiene el método.
                </p>

                <p>
                    <strong>
                        Ejemplo de uso de <code>this</code>:
                    </strong>
                    <br />
                    Imagina que tienes un objeto con un método que utiliza una función flecha para manejar un evento:
                    <pre>
                        {`
                    const persona = {
                      nombre: 'Juan',
                      saludar: function() {
                        setTimeout(() => {
                          console.log('Hola, ' + this.nombre); // 'Hola, Juan'
                        }, 1000);
                      }
                    };
                    persona.saludar();
                  `}
                    </pre>
                    <p>
                        En este caso, la función flecha dentro de <code>setTimeout</code> utiliza el mismo{' '}
                        <code>this</code> que la función <code>saludar</code>, permitiendo acceder correctamente a la
                        propiedad <code>nombre</code> del objeto <code>persona</code>.
                    </p>
                </p>
            </>
        ),
        answers: [
            'Las funciones flecha son útiles para mantener el contexto léxico de this en callbacks',
            'Se usan principalmente para funciones globales',
            'No tienen ninguna ventaja sobre las funciones tradicionales',
            'Permiten señalar al perro que se portó mal',
        ],
    },
    {
        id: 'q33',
        text: '¿Cuál es la definición de una función de orden superior?',
        explanation: (
            <>
                <p>
                    Una <strong>función de orden superior</strong> en JavaScript es una función que cumple al menos una
                    de las siguientes condiciones:
                </p>

                <ul>
                    <li>Recibe una o más funciones como argumentos.</li>
                    <li>Devuelve una función como resultado.</li>
                </ul>

                <p>
                    Este concepto es fundamental en la programación funcional, ya que permite crear funciones más
                    abstractas y reutilizables. Las funciones de orden superior son muy útiles para la manipulación de
                    arrays, callbacks y la creación de funciones personalizadas.
                </p>

                <p>
                    <strong>Ejemplo de una función de orden superior:</strong>
                    <br />
                    Consideremos una función llamada <code>operar</code> que recibe dos números y una función como
                    parámetros. Dependiendo de la función pasada, <code>operar</code> puede realizar diferentes
                    cálculos:
                    <pre>
                        {`
                    function operar(a, b, operacion) {
                      return operacion(a, b);
                    }
                    
                    function sumar(x, y) {
                      return x + y;
                    }
                    
                    function restar(x, y) {
                      return x - y;
                    }
                    
                    console.log(operar(5, 3, sumar));  // 8
                    console.log(operar(5, 3, restar)); // 2
                  `}
                    </pre>
                </p>

                <p>
                    En este caso, <code>operar</code> es una función de orden superior porque acepta una función (
                    <code>operacion</code>) como argumento y la invoca con los dos números proporcionados.
                </p>

                <p>
                    <strong>Ejemplo de una función de orden superior que devuelve otra función:</strong>
                    <br />
                    También se puede definir una función de orden superior que devuelva una nueva función. Por ejemplo,
                    una función que genera multiplicadores:
                    <pre>
                        {`
                    function crearMultiplicador(factor) {
                      return function(num) {
                        return num * factor;
                      };
                    }
                    
                    const duplicar = crearMultiplicador(2);
                    console.log(duplicar(5)); // 10
                  `}
                    </pre>
                </p>

                <p>
                    En este caso, <code>crearMultiplicador</code> es una función de orden superior que devuelve otra
                    función, la cual multiplica un número por el factor proporcionado.
                </p>
            </>
        ),
        answers: [
            'Acepta funciones como argumentos o retorna una función',
            'Es una función que se ejecuta en segundo plano',
            'Son funciones que solo pueden operar con números',
            'Son las funciones que representan los elfos',
        ],
    },
    {
        id: 'q34',
        text: '¿Qué ejemplo de desestructuración de un objeto o array es correcto?',
        explanation: (
            <>
                <p>
                    La <strong>desestructuración</strong> es una sintaxis en JavaScript que permite extraer valores de
                    arreglos o propiedades de objetos y asignarlos a variables de manera más sencilla y concisa. A
                    continuación, se presentan ejemplos de desestructuración tanto de objetos como de arreglos.
                </p>

                <p>
                    <strong>Ejemplo de desestructuración de un objeto:</strong>
                    <br />
                    Supongamos que tenemos un objeto que representa a una persona:
                    <pre>
                        {`
                    const persona = {
                      nombre: 'Juan',
                      edad: 30,
                      ciudad: 'Madrid'
                    };
                    
                    const { nombre, edad } = persona;
                    console.log(nombre); // 'Juan'
                    console.log(edad);   // 30
                  `}
                    </pre>
                    <p>
                        En este ejemplo, se desestructuran las propiedades <code>nombre</code> y <code>edad</code> del
                        objeto <code>persona</code>, asignándolas a variables con el mismo nombre.
                    </p>
                </p>

                <p>
                    <strong>Ejemplo de desestructuración de un array:</strong>
                    <br />
                    Consideremos un array que contiene números:
                    <pre>
                        {`
                    const numeros = [1, 2, 3, 4, 5];
                    
                    const [primero, segundo] = numeros;
                    console.log(primero); // 1
                    console.log(segundo);  // 2
                  `}
                    </pre>
                    <p>
                        En este caso, se desestructuran los primeros dos elementos del array <code>numeros</code>,
                        asignándolos a las variables <code>primero</code> y <code>segundo</code>.
                    </p>
                </p>

                <p>
                    <strong>Desestructuración con valores por defecto:</strong>
                    <br />
                    También se pueden proporcionar valores por defecto en la desestructuración. Por ejemplo, si una
                    propiedad no existe, se puede asignar un valor por defecto:
                    <pre>
                        {`
                    const persona = {
                      nombre: 'Juan'
                    };
                    
                    const { nombre, edad = 25 } = persona;
                    console.log(nombre); // 'Juan'
                    console.log(edad);   // 25 (valor por defecto)
                  `}
                    </pre>
                </p>

                <p>
                    Esto es útil cuando se desea asegurar que una variable tenga un valor incluso si la propiedad
                    correspondiente no está presente en el objeto.
                </p>
            </>
        ),
        answers: [
            'const { name, age } = person; const [first, second] = [1, 2, 3]',
            'const name; const age = person',
            'person = { name, age };',
            'No puedo',
        ],
    },
    {
        id: 'q35',
        text: '¿Cuál de las siguientes respuestas generara una cadena con literales de plantilla ES6?',
        explanation: (
            <>
                <p>
                    Los <strong>literales de plantilla</strong> (template literals) en ES6 son una característica que
                    permite trabajar con cadenas de texto de manera más flexible y legible. Se definen utilizando
                    comillas invertidas (<code>``</code>) y permiten la interpolación de variables y la creación de
                    cadenas multilínea.
                </p>

                <p>
                    <strong>Ejemplo básico de literales de plantilla:</strong>
                    <br />
                    Supongamos que queremos crear una cadena que incluya el nombre y la edad de una persona:
                    <pre>
                        {`
                    const nombre = 'Juan';
                    const edad = 30;
                    
                    const mensaje = \`Hola, mi nombre es \${nombre} y tengo \${edad} años.\`;
                    console.log(mensaje); // 'Hola, mi nombre es Juan y tengo 30 años.'
                  `}
                    </pre>
                </p>

                <p>
                    En este ejemplo, las variables <code>nombre</code> y <code>edad</code> se interpolan dentro de la
                    cadena utilizando la sintaxis <code>\${}</code>, lo que permite insertar sus valores directamente en
                    el texto.
                </p>

                <p>
                    <strong>Ejemplo de cadena multilínea:</strong>
                    <br />
                    Los literales de plantilla también permiten crear cadenas que ocupan varias líneas sin necesidad de
                    utilizar caracteres de escape:
                    <pre>
                        {`
                    const mensajeMultilinea = \`
                      Este es un mensaje
                      que se extiende
                      en varias líneas.
                    \`;
                    console.log(mensajeMultilinea);
                  `}
                    </pre>
                </p>

                <p>
                    En este caso, la cadena se crea con saltos de línea incluidos, lo que facilita la legibilidad del
                    texto sin necesidad de concatenaciones o saltos de línea manuales.
                </p>
            </>
        ),
        answers: [
            '`Hello, ${name}!`',
            '`Hello, &&{name}!`',
            'No es posible usar literales en ES6',
            'Mi mamá no me deja',
        ],
    },
    // {
    //     id: 'q36',
    //     text: '¿Puedes dar un ejemplo de una función curry y por qué esta sintaxis ofrece una ventaja?',
    //     explanation:
    //         'El currying es una técnica que transforma una función que acepta múltiples argumentos en una función que acepta uno y retorna otra función que acepta el siguiente argumento. Esto permite reutilización de funciones con argumentos parciales. Ejemplo: const add = (x) => (y) => x + y',
    //     answers: ['(x) => (y) => x + y', '(y) => (y) => x + x', '(x) => x + y', 'No me gusta el picante.'],
    // },
    // {
    //     id: 'q37',
    //     text: '¿Cuáles son los beneficios de usar la sintaxis de propagación y cómo es diferente de la sintaxis de resto?',
    //     explanation:
    //         'La sintaxis de propagación (...) permite expandir elementos de un array o propiedades de un objeto. La sintaxis de resto (...) recoge múltiples argumentos en un array',
    //     answers: [
    //         'La propagación expande un array u objeto, mientras que resto recoge argumentos en un array',
    //         'La sintaxis de resto solo se usa con arrays',
    //         'No hay diferencia entre propagación y resto',
    //         'Yo solo quiero cobrar a final de mes',
    //     ],
    // },
    {
        id: 'q38',
        text: '¿Cómo puedes compartir código entre archivos?',
        explanation: (
            <>
                <p>
                    Compartir código entre archivos en JavaScript se puede lograr utilizando diferentes enfoques,
                    principalmente mediante el uso de <strong>módulos</strong>. Los módulos permiten organizar y
                    estructurar el código de manera más eficiente, promoviendo la reutilización y el mantenimiento. A
                    continuación, se describen algunas de las formas más comunes de compartir código entre archivos.
                </p>

                <p>
                    <strong>1. Usando Módulos ES6:</strong>
                    <br />
                    La forma más moderna y común de compartir código es mediante módulos ES6. Puedes exportar funciones,
                    objetos o variables desde un archivo y luego importarlos en otro.
                </p>

                <pre>
                    {`
              // archivo1.js
              export function saludar(nombre) {
                return \`Hola, \${nombre}!\`;
              }
                `}
                </pre>
                <pre>
                    {`
              // archivo2.js
              import { saludar } from './archivo1.js';
              
              console.log(saludar('Juan')); // 'Hola, Juan!'
                `}
                </pre>

                <p>
                    En este ejemplo, la función <code>saludar</code> se exporta desde <code>archivo1.js</code> y se
                    importa en <code>archivo2.js</code>, permitiendo su reutilización.
                </p>

                <p>
                    <strong>2. Usando CommonJS (Node.js):</strong>
                    <br />
                    En un entorno de Node.js, se puede utilizar el sistema de módulos CommonJS. Para exportar un módulo,
                    se utiliza <code>module.exports</code>, y para importarlo, se utiliza <code>require()</code>.
                </p>

                <pre>
                    {`
              // archivo1.js
              function saludar(nombre) {
                return \`Hola, \${nombre}!\`;
              }
              module.exports = saludar;
                `}
                </pre>
                <pre>
                    {`
              // archivo2.js
              const saludar = require('./archivo1.js');
              
              console.log(saludar('Juan')); // 'Hola, Juan!'
                `}
                </pre>

                <p>
                    En este caso, la función <code>saludar</code> se exporta mediante <code>module.exports</code> y se
                    importa en <code>archivo2.js</code> con <code>require()</code>.
                </p>

                <p>
                    <strong>3. Usando un objeto global:</strong>
                    <br />
                    Aunque no es la mejor práctica, en algunos casos se puede compartir código mediante un objeto
                    global. Esto puede ser útil en scripts que no utilizan módulos, pero puede llevar a conflictos de
                    nombres y dificultades en el mantenimiento.
                </p>

                <pre>
                    {`
              // archivo1.js
              window.miModulo = {
                saludar: function(nombre) {
                  return \`Hola, \${nombre}!\`;
                }
              };
                `}
                </pre>
                <pre>
                    {`
              // archivo2.js
              console.log(window.miModulo.saludar('Juan')); // 'Hola, Juan!'
                `}
                </pre>

                <p>
                    En este ejemplo, se asigna un objeto a <code>window.miModulo</code> en <code>archivo1.js</code>, y
                    luego se accede a la función <code>saludar</code> a través de ese objeto en <code>archivo2.js</code>
                    .
                </p>

                <p>
                    En resumen, la forma más recomendada de compartir código entre archivos en JavaScript es mediante el
                    uso de módulos ES6 o CommonJS, ya que proporcionan una estructura más limpia y evitan conflictos de
                    nombres.
                </p>
            </>
        ),
        answers: [
            'Puedes compartir código usando export e import',
            'Solo se puede compartir código copiando y pegando entre archivos',
            'Es necesario usar funciones globales para compartir código',
            'Tienes que obligar a que tengan la @Clave',
        ],
    },
    // {
    //     id: 'q39',
    //     text: '¿Por qué querrías crear miembros de clase estáticos?',
    //     explanation:
    //         'Los miembros estáticos pertenecen a la clase en sí, no a instancias específicas. Son útiles para crear métodos auxiliares que no dependen de los datos de una instancia',
    //     answers: [
    //         'Los miembros estáticos pertenecen a la clase en sí y son útiles para métodos auxiliares',
    //         'Los miembros estáticos solo funcionan con clases abstractas',
    //         'Los miembros estáticos no pueden acceder a otros métodos de la clase',
    //         'Para pintarlos como una musa',
    //     ],
    // },
    {
        id: 'q40',
        text: '¿Cuál es la diferencia entre los bucles while y do-while?',
        explanation: (
            <>
                <p>
                    La diferencia principal entre los bucles <strong>while</strong> y <strong>do-while</strong> en
                    JavaScript radica en cómo y cuándo se evalúa la condición del bucle, lo que afecta el número de
                    veces que se ejecuta el bloque de código dentro del bucle.
                </p>

                <p>
                    <strong>1. Bucle while:</strong>
                    <br />
                    En un bucle <code>while</code>, la condición se evalúa antes de ejecutar el bloque de código. Esto
                    significa que si la condición es falsa desde el principio, el bloque de código no se ejecutará en
                    absoluto.
                </p>

                <pre>
                    {`
              // Ejemplo de bucle while
              let i = 0;
              while (i < 3) {
                console.log(i);
                i++;
              }
              // Salida: 0, 1, 2
                `}
                </pre>

                <p>
                    En este ejemplo, el bucle <code>while</code> continuará ejecutándose mientras <code>i</code> sea
                    menor que 3. Si <code>i</code> comenzara con un valor de 3 o más, el bloque de código no se
                    ejecutaría.
                </p>

                <p>
                    <strong>2. Bucle do-while:</strong>
                    <br />
                    En un bucle <code>do-while</code>, el bloque de código se ejecuta al menos una vez, ya que la
                    condición se evalúa después de la ejecución del bloque. Esto garantiza que el bloque de código se
                    ejecute al menos una vez, independientemente de si la condición es verdadera o falsa.
                </p>

                <pre>
                    {`
              // Ejemplo de bucle do-while
              let j = 3;
              do {
                console.log(j);
                j++;
              } while (j < 3);
              // Salida: 3
                `}
                </pre>

                <p>
                    En este caso, el bucle <code>do-while</code> ejecutará el bloque de código al menos una vez, incluso
                    si <code>j</code> ya es igual o mayor que 3. Como resultado, se imprimirá 3 antes de que se evalúe
                    la condición y se termine el bucle.
                </p>

                <p>
                    <strong>Resumen de diferencias:</strong>
                    <br />- En el bucle <code>while</code>, la condición se evalúa antes de ejecutar el bloque de
                    código, por lo que podría no ejecutarse en absoluto si la condición es falsa desde el inicio. <br />
                    - En el bucle <code>do-while</code>, el bloque de código se ejecuta primero, y luego se evalúa la
                    condición, asegurando al menos una ejecución del bloque.
                </p>
            </>
        ),
        answers: [
            'do-while siempre se ejecuta al menos una vez',
            'Ambos bucles son idénticos',
            'while siempre se ejecuta al menos una vez',
            'Me da igual, yo no pienso hacer nada',
        ],
    },
    {
        id: 'q41',
        text: '¿Qué es una promesa?',
        explanation: (
            <>
                <p>
                    Una <strong>promesa</strong> en JavaScript es un objeto que representa la eventual finalización o
                    fracaso de una operación asíncrona. Proporciona una forma más estructurada de manejar la asincronía
                    en comparación con los callbacks tradicionales, permitiendo un manejo más limpio y legible del
                    código.
                </p>

                <p>
                    <strong>Estructura de una promesa:</strong>
                    <br />
                    Una promesa puede estar en uno de tres estados:
                </p>

                <ul>
                    <li>
                        <strong>Pending (pendiente):</strong> La operación asíncrona aún no se ha completado.
                    </li>
                    <li>
                        <strong>Fulfilled (cumplida):</strong> La operación se completó con éxito y la promesa tiene un
                        resultado.
                    </li>
                    <li>
                        <strong>Rejected (rechazada):</strong> La operación falló y la promesa tiene una razón por la
                        cual no se cumplió (por ejemplo, un error).
                    </li>
                </ul>

                <p>
                    <strong>Creación de una promesa:</strong>
                    <br />
                    Para crear una promesa, se utiliza el constructor <code>Promise</code>, que recibe una función con
                    dos argumentos: <code>resolve</code> y <code>reject</code>. <code>resolve</code> se llama cuando la
                    operación se completa con éxito, mientras que <code>reject</code> se llama cuando hay un error.
                </p>

                <pre>
                    {`
              // Ejemplo de creación de una promesa
              const miPromesa = new Promise((resolve, reject) => {
                const exito = true; // Simulamos el éxito de una operación
                if (exito) {
                  resolve('Operación exitosa!');
                } else {
                  reject('Hubo un error en la operación.');
                }
              });
                `}
                </pre>

                <p>
                    En este ejemplo, si la variable <code>exito</code> es <code>true</code>, la promesa se cumple, y si
                    es <code>false</code>, se rechaza.
                </p>

                <p>
                    <strong>Uso de promesas:</strong>
                    <br />
                    Para manejar el resultado de una promesa, se utilizan los métodos <code>then</code> y{' '}
                    <code>catch</code>. El método <code>then</code> se ejecuta cuando la promesa se cumple, y el método{' '}
                    <code>catch</code> se ejecuta si la promesa es rechazada.
                </p>

                <pre>
                    {`
              // Manejo de la promesa
              miPromesa
                .then(resultado => {
                  console.log(resultado); // 'Operación exitosa!'
                })
                .catch(error => {
                  console.log(error); // 'Hubo un error en la operación.'
                });
                `}
                </pre>

                <p>
                    En este caso, se imprimirá <code>'Operación exitosa!'</code> en la consola si la promesa se cumple,
                    o <code>'Hubo un error en la operación.'</code> si se rechaza.
                </p>

                <p>
                    <strong>Ventajas de las promesas:</strong>
                    <br />
                    - **Manejo más claro de errores:** Permiten un manejo de errores más estructurado, evitando el
                    llamado "callback hell".
                    <br />
                    - **Composición fácil:** Permiten encadenar múltiples operaciones asíncronas de manera más limpia.
                    <br />- **Compatibilidad con async/await:** Son compatibles con la sintaxis <code>async/await</code>
                    , que facilita aún más el manejo de código asíncrono.
                </p>
            </>
        ),
        answers: [
            'Es la eventual resolución o rechazo de una operación asíncrona',
            'Es para hacer que las funciones síncronas sean asíncronas',
            'Solo se usa para manejar errores en código JavaScript',
            'Es la mejor mesa que podrías tener',
        ],
    },
    // {
    //     id: 'q42',
    //     text: 'Cómo usarías principios de Programación Orientada a Objetos en JavaScript',
    //     explanation:
    //         'Puedes implementar los principios de la Programación Orientada a Objetos (POO) usando clases y prototipos. Las clases permiten la creación de objetos con propiedades y métodos, y la herencia permite que un objeto herede las propiedades y métodos de otro. También puedes aplicar encapsulación creando propiedades privadas dentro de las clases',
    //     answers: [
    //         'Usando clases y prototipos para crear objetos con herencia, encapsulación y polimorfismo',
    //         'Solo puedes aplicar POO usando funciones constructoras',
    //         'No es posible usar Programación Orientada a Objetos en JavaScript',
    //         'Llamo al técnico que le pone los canales a la tele',
    //     ],
    // },
    {
        id: 'q43',
        text: '¿Cuál es la diferencia entre event.target y event.currentTarget?',
        explanation: (
            <>
                <p>
                    En el contexto de la gestión de eventos en JavaScript, <strong>event.target</strong> y{' '}
                    <strong>event.currentTarget</strong> son dos propiedades del objeto de evento que se utilizan para
                    identificar diferentes elementos en la propagación de eventos. Aunque a menudo se utilizan de manera
                    intercambiable, tienen significados distintos.
                </p>

                <p>
                    <strong>1. event.target:</strong>
                    <br />
                    <code>event.target</code> se refiere al elemento que realmente disparó el evento. Esto significa que
                    es el elemento sobre el cual ocurrió la acción, como un clic o un cambio. Puede ser un elemento hijo
                    dentro de un contenedor que tiene un manejador de eventos asignado.
                </p>

                <pre>
                    {`
              // Ejemplo de event.target
              document.querySelector('ul').addEventListener('click', (event) => {
                console.log('Elemento objetivo:', event.target);
              });
              
              // HTML:
              // <ul>
              //   <li>Elemento 1</li>
              //   <li>Elemento 2</li>
              // </ul>
                `}
                </pre>

                <p>
                    En este ejemplo, si el usuario hace clic en un elemento <code>&lt;li&gt;</code> dentro del{' '}
                    <code>&lt;ul&gt;</code>, <code>event.target</code> se referirá al elemento <code>&lt;li&gt;</code>{' '}
                    que fue clicado.
                </p>

                <p>
                    <strong>2. event.currentTarget:</strong>
                    <br />
                    <code>event.currentTarget</code> se refiere al elemento que actualmente tiene el controlador de
                    eventos adjunto. En otras palabras, es el elemento sobre el cual se está ejecutando el evento, el
                    que está escuchando el evento. Esto es especialmente relevante en el caso de la delegación de
                    eventos.
                </p>

                <pre>
                    {`
              // Ejemplo de event.currentTarget
              document.querySelector('ul').addEventListener('click', (event) => {
                console.log('Elemento actual:', event.currentTarget);
              });
              
              // HTML:
              // <ul>
              //   <li>Elemento 1</li>
              //   <li>Elemento 2</li>
              // </ul>
                `}
                </pre>

                <p>
                    En este caso, si se hace clic en un elemento <code>&lt;li&gt;</code>,{' '}
                    <code>event.currentTarget</code> se referirá al elemento <code>&lt;ul&gt;</code> que tiene el
                    manejador de eventos. Esto es útil cuando se trabaja con elementos padres que manejan eventos de sus
                    hijos.
                </p>

                <p>
                    <strong>Resumen de diferencias:</strong>
                    <br />- <code>event.target</code>: hace referencia al elemento que activó el evento, el elemento en
                    el que realmente ocurrió la acción.
                    <br />- <code>event.currentTarget</code>: hace referencia al elemento que tiene el manejador de
                    eventos asignado, el elemento que está escuchando el evento.
                </p>

                <p>
                    Comprender la diferencia entre estas dos propiedades es esencial para manejar correctamente los
                    eventos, especialmente en situaciones donde se utilizan elementos anidados o se emplea la delegación
                    de eventos.
                </p>
            </>
        ),
        answers: [
            'event.target es el elemento donde ocurrió el evento, mientras que event.currentTarget es el elemento al que se asignó el manejador de eventos',
            'event.target y event.currentTarget siempre son iguales',
            'event.target se refiere al padre del elemento objetivo',
            'Prefiero ver el furbol en otro lado',
        ],
    },
    // {
    //     id: 'q44',
    //     text: '¿Cuál es la diferencia entre event.preventDefault() y event.stopPropagation()?',
    //     explanation:
    //         'event.preventDefault() evita que ocurra la acción predeterminada asociada a un evento (como el envío de un formulario). event.stopPropagation() detiene la propagación de un evento hacia otros elementos en el DOM, evitando que los manejadores de eventos de los elementos padres sean ejecutados',
    //     answers: [
    //         'event.preventDefault previene la acción por defecto de un evento, mientras que event.stopPropagation detiene la propagación del evento a través del DOM',
    //         'event.preventDefault detiene la propagación del evento',
    //         'event.stopPropagation previene la acción predeterminada del evento',
    //         'Ambos métodos detienen la propagación del evento, pero en diferentes niveles',
    //     ],
    // },
    // {
    //     id: 'q45',
    //     text: 'Haz que esto funcione: \n\nfunction duplicate(arr) {\n    return arr.concat(arr)\n}\n\nconsole.log(duplicate([1, 2, 3, 4, 5])) // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]',
    //     explanation: 'La función duplicate toma un array como argumento, luego usa el método concat para duplicar el array concatenándolo consigo mismo',
    //     answers: [
    //         'La función concatena el array con una copia de sí mismo, devolviendo un array duplicado',
    //         'El método concat toma los elementos y devuelve la suma',
    //         'El método concat modifica el array original directamente',
    //         'La función duplica los elementos multiplicando por 2',
    //     ],
    // },
    {
        id: 'q46',
        text: "¿Qué devolverá esta sentencia?\n\nconsole.log('hello' || 'world')",
        explanation: (
            <>
                <p>
                    La sentencia <code>console.log('hello' || 'world')</code> devolverá <strong>'hello'</strong>. Esto
                    se debe a cómo funciona el operador lógico <strong>OR (||)</strong> en JavaScript.
                </p>

                <p>
                    El operador <code>||</code> evalúa los operandos de izquierda a derecha y devuelve el primer valor
                    "verdadero" (truthy) que encuentra. Si el primer operando es verdadero, se devuelve ese valor y no
                    se evalúa el segundo operando. Si el primer operando es falso (falsy), se evalúa y devuelve el
                    segundo operando.
                </p>

                <p>
                    En este caso, la cadena <code>'hello'</code> es un valor "verdadero" (truthy), por lo que se
                    devuelve y se imprime en la consola. La segunda cadena, <code>'world'</code>, no se evalúa porque no
                    es necesario.
                </p>

                <p>Por lo tanto, la salida de la sentencia será:</p>

                <pre>{`hello`}</pre>
            </>
        ),
        answers: ['hello', 'world', 'true', 'Le digo hola, por si las IAs pierden el control.'],
    },
    {
        id: 'q47',
        text: "¿Qué devolverá esta sentencia?\nconsole.log('foo' && 'bar')",
        explanation: (
            <>
                <p>
                    La sentencia <code>console.log('foo' && 'bar')</code> devolverá <strong>'bar'</strong>. Esto se debe
                    a cómo funciona el operador lógico <strong>AND (&&)</strong> en JavaScript.
                </p>

                <p>
                    El operador <code>&&</code> evalúa los operandos de izquierda a derecha y devuelve el primer valor
                    "falso" (falsy) que encuentra. Si ambos operandos son "verdaderos" (truthy), se devuelve el segundo
                    operando. En otras palabras, el operador <code>&&</code> retorna el primer operando si es falsy, o
                    el segundo operando si el primero es truthy.
                </p>

                <p>
                    En este caso, la cadena <code>'foo'</code> es un valor "verdadero" (truthy), por lo que se evalúa el
                    segundo operando, que es <code>'bar'</code>. Como ambos son truthy, se devuelve el segundo operando,
                    que es <code>'bar'</code>.
                </p>

                <p>Por lo tanto, la salida de la sentencia será:</p>

                <pre>{`bar`}</pre>
            </>
        ),
        answers: ['bar', 'foo', 'true', 'No sé, pero lo de ir al bar suena bien.'],
    },
    {
        id: 'q48',
        text: '¿Qué es una IIFE (Immediately Invoked Function Expression)?',
        explanation: (
            <>
                <p>
                    Una <strong>IIFE</strong> (Immediately Invoked Function Expression) es una función en JavaScript que
                    se define y se ejecuta inmediatamente después de su creación. Esta técnica se utiliza para crear un
                    ámbito (scope) local, evitando la contaminación del ámbito global y encapsulando variables y
                    funciones.
                </p>

                <p>
                    <strong>Estructura de una IIFE:</strong>
                    <br />
                    La sintaxis de una IIFE implica envolver la función en paréntesis y luego añadir otro paréntesis al
                    final para invocarla. A continuación, se muestra un ejemplo básico de una IIFE:
                </p>

                <pre>
                    {`
              // Ejemplo de una IIFE
              (function() {
                const mensaje = 'Hola, mundo!';
                console.log(mensaje);
              })();
                `}
                </pre>

                <p>
                    En este ejemplo, la función se define y se invoca inmediatamente. El mensaje{' '}
                    <code>'Hola, mundo!'</code> se imprime en la consola, y la variable <code>mensaje</code> permanece
                    dentro del ámbito de la función, lo que significa que no se puede acceder desde el ámbito global.
                </p>

                <p>
                    <strong>Beneficios de usar IIFE:</strong>
                    <br />
                    - **Encapsulación:** Ayuda a encapsular el código, lo que evita que las variables y funciones se
                    filtren al ámbito global.
                    <br />
                    - **Evitar colisiones de nombres:** Permite definir variables y funciones sin el riesgo de que
                    colisionen con otras variables en el ámbito global o en otros scripts.
                    <br />- **Inmediata ejecución:** A veces es útil ejecutar código inmediatamente, como en la
                    inicialización de variables o configuraciones.
                </p>

                <p>
                    <strong>Ejemplo con parámetros:</strong>
                    <br />
                    Las IIFE también pueden aceptar parámetros, lo que permite pasar argumentos a la función:
                </p>

                <pre>
                    {`
              // IIFE con parámetros
              (function(nombre) {
                console.log('Hola, ' + nombre + '!');
              })('Juan');
                `}
                </pre>

                <p>
                    En este caso, se pasa el argumento <code>'Juan'</code> a la IIFE, y el mensaje{' '}
                    <code>'Hola, Juan!'</code> se imprime en la consola.
                </p>
            </>
        ),
        answers: [
            ";(function () {console.log('IIFE executed')})()",
            'function activar() {console.log("IIFE executed")}',
            'const activar = function () {console.log("IIFE executed")}',
            'Empiezo tirando iniciativa, ese ogro no me gana',
        ],
    },
    {
        id: 'q49',
        text: "¿Cuál es el valor de foo?\n\nvar foo = 10 + '20'",
        explanation: (
            <>
                <p>
                    El valor de <code>foo</code> en la sentencia <code>var foo = 10 + '20'</code> será{' '}
                    <strong>'1020'</strong>. Esto se debe a la forma en que JavaScript maneja la{' '}
                    <strong>coerción de tipos</strong> durante la concatenación de cadenas.
                </p>

                <p>
                    En este caso, se están sumando un número (10) y una cadena ('20'). Cuando uno de los operandos es
                    una cadena, JavaScript convierte el otro operando (el número) en una cadena y realiza una
                    concatenación en lugar de una suma matemática.
                </p>

                <p>Así que la operación se lleva a cabo de la siguiente manera:</p>

                <pre>
                    {`10 + '20'  // Se convierte 10 en '10' y luego se concatenan
                => '10' + '20'
                => '1020'`}
                </pre>

                <p>
                    Por lo tanto, el resultado de la operación es la cadena <code>'1020'</code>, que se asigna a la
                    variable <code>foo</code>.
                </p>
            </>
        ),
        answers: ['1020', '30', 'NaN', 'Foo fighters'],
    },
    {
        id: 'q50',
        text: '¿Cuál será la salida de este código?\n\nconsole.log(0.1 + 0.2 == 0.3)',
        explanation: (
            <>
                <p>
                    La salida de la expresión <code>console.log(0.1 + 0.2 == 0.3)</code> será <strong>false</strong>.
                    Esto puede parecer sorprendente, pero se debe a cómo JavaScript (y muchas otras lenguajes de
                    programación) maneja la representación de números de punto flotante.
                </p>

                <p>
                    Al realizar la operación <code>0.1 + 0.2</code>, el resultado no es exactamente <code>0.3</code>,
                    sino un número muy cercano a <code>0.3</code>, pero con una pequeña imprecisión debido a la forma en
                    que los números de punto flotante son representados en la memoria. En el caso de JavaScript, la
                    operación resulta en <code>0.30000000000000004</code>.
                </p>

                <p>
                    Por lo tanto, cuando se evalúa la comparación <code>0.1 + 0.2 == 0.3</code>, se está comparando{' '}
                    <code>0.30000000000000004</code> con <code>0.3</code>, lo que resulta en <strong>false</strong>.
                </p>

                <p>
                    Si se desea verificar la igualdad de números de punto flotante en JavaScript, se recomienda usar un
                    enfoque que considere un margen de error (tolerancia) debido a esta imprecisión. Por ejemplo:
                </p>

                <pre>
                    {`
              // Comparación con margen de error
              const epsilon = 0.00001;
              const resultado = Math.abs((0.1 + 0.2) - 0.3) < epsilon;
              console.log(resultado); // Esto imprimirá true
                `}
                </pre>
            </>
        ),
        answers: ['false', 'true', '0.3', 'Enter the Matrix, Neo'],
    },
    // {
    //     id: 'q51',
    //     text: '¿Cómo harías funcionar este código?\n\nadd(2, 5) // 7\nadd(2)(5) // 7',
    //     explanation:
    //         'Puedes lograr este comportamiento con una función curry que verifique si se pasan ambos argumentos de inmediato o solo uno, devolviendo una función para el segundo',
    //     answers: [
    //         'La función se puede escribir de manera que acepte dos argumentos o que devuelva una función que espera el segundo argumento',
    //         'El código funcionará solo si se pasan ambos argumentos al mismo tiempo',
    //         'Se debe usar una función diferente para manejar ambos casos',
    //         'No es posible hacer que este código funcione sin usar bind()',
    //     ],
    // },
    {
        id: 'q52',
        text: "¿Qué valor devuelve esta sentencia?\n\n\"im a lasagna hog\".split('').reverse().join('')",
        explanation: (
            <>
                <p>
                    La sentencia <code>"im a lasagna hog".split('').reverse().join('')</code> devolverá{' '}
                    <strong>"goh angasal a mi"</strong>. Vamos a desglosar lo que hace cada parte de la expresión:
                </p>

                <p>
                    1. **<code>split('')</code>:** Esta función divide la cadena en un array de caracteres. En este
                    caso, la cadena <code>"im a lasagna hog"</code> se convierte en un array de caracteres:
                </p>

                <pre>{`['i', 'm', ' ', 'a', ' ', 'l', 'a', 's', 'a', 'g', 'n', 'a', ' ', 'h', 'o', 'g']`}</pre>

                <p>
                    2. **<code>reverse()</code>:** Esta función invierte el orden de los elementos en el array. Por lo
                    tanto, el array anterior se convierte en:
                </p>

                <pre>{`['g', 'o', 'h', ' ', 'a', 'n', 'g', 'a', 's', 'a', 'l', 'a', ' ', 'a', ' ', 'm', 'i']`}</pre>

                <p>
                    3. **<code>join('')</code>:** Finalmente, esta función une todos los elementos del array en una sola
                    cadena, utilizando el separador especificado (en este caso, una cadena vacía). El resultado es:
                </p>

                <pre>{`"goh angasal a mi"`}</pre>

                <p>
                    Por lo tanto, el valor final devuelto por la sentencia es <strong>"goh angasal a mi"</strong>.
                </p>
            </>
        ),
        answers: ['goh angasal a mi', 'im a lasagna hog', 'error', 'Mums Spaggetti.'],
    },
    {
        id: 'q53',
        text: "¿Cuál es el valor de window.foo?\n\nwindow.foo || (window.foo = 'bar')",
        explanation: (
            <>
                <p>
                    El valor de <code>window.foo || (window.foo = 'bar')</code> depende de si <code>window.foo</code> ya
                    está definido o no.
                </p>

                <p>
                    - Si <code>window.foo</code> ya tiene un valor asignado (es decir, no es <code>undefined</code> ni{' '}
                    <code>null</code>), entonces la expresión devolverá el valor actual de <code>window.foo</code>.
                    <br />- Si <code>window.foo</code> no está definido (es <code>undefined</code>), la expresión
                    evaluará el segundo operando, <code>(window.foo = 'bar')</code>, lo que asignará el valor{' '}
                    <code>'bar'</code> a <code>window.foo</code> y devolverá este nuevo valor.
                </p>

                <p>Aquí hay un ejemplo práctico:</p>

                <pre>
                    {`
              // Supongamos que window.foo no está definido
              console.log(window.foo || (window.foo = 'bar')); // Esto imprimirá 'bar'
              
              // Si ahora verificamos window.foo
              console.log(window.foo); // Esto imprimirá 'bar'
                `}
                </pre>

                <p>
                    En resumen, el valor de <code>window.foo</code> será <strong>'bar'</strong> solo si no estaba
                    definido previamente. Si ya estaba definido, devolverá el valor que tenía antes de la evaluación.
                </p>
            </>
        ),
        answers: [
            'El valor de window.foo será "bar" si no estaba definido anteriormente',
            'El valor de window.foo será siempre "bar"',
            'El valor de window.foo será undefined',
            'Ya, eso es con Windows pero y en Mac?',
        ],
    },
    {
        id: 'q54',
        text: (
            <>
                ¿Cuál es la salida de las dos alertas de abajo?
                <br />
                <pre>
                    <code>
                        {`var foo = 'Hello'
;(function () {
    var bar = ' World'
    alert(foo + bar)
})()
alert(foo + bar)`}
                    </code>
                </pre>
            </>
        ),
        explanation: (
            <>
                <p>La salida de las dos alertas en el código dado será la siguiente:</p>

                <pre>
                    {`alert(foo + bar); // Salida: 'Hello World'
              alert(foo + bar); // Salida: ReferenceError: bar is not defined`}
                </pre>

                <p>Vamos a desglosar lo que sucede en el código:</p>

                <ol>
                    <li>
                        La variable <code>foo</code> se define en el ámbito global y se le asigna el valor{' '}
                        <code>'Hello'</code>.
                    </li>
                    <li>
                        Se define e invoca una <strong>IIFE</strong> (Immediately Invoked Function Expression), donde:
                        <ul>
                            <li>
                                Dentro de la IIFE, se declara la variable <code>bar</code> con el valor{' '}
                                <code>' World'</code>. Esta variable es local a la IIFE y no está accesible fuera de
                                ella.
                            </li>
                            <li>
                                La primera <code>alert()</code> concatenará <code>foo</code> y <code>bar</code>,
                                resultando en <code>'Hello World'</code>. Por lo tanto, la salida de esta alerta será:
                                <strong>'Hello World'</strong>.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Después de la IIFE, se intenta ejecutar <code>alert(foo + bar)</code> nuevamente. Sin embargo,
                        en este contexto, <code>bar</code> no está definido porque es una variable local de la IIFE.
                        Esto provoca un error de referencia:
                        <strong>ReferenceError: bar is not defined</strong>.
                    </li>
                </ol>

                <p>En resumen, la salida de las dos alertas es:</p>

                <ul>
                    <li>
                        <strong>Primera alerta:</strong> <code>'Hello World'</code>
                    </li>
                    <li>
                        <strong>Segunda alerta:</strong> <code>ReferenceError: bar is not defined</code>
                    </li>
                </ul>
            </>
        ),
        answers: [
            '"Hello World" +  error porque "bar" no está definido fuera de la función',
            'Ambos alerts mostrarán "Hello World"',
            'El segundo alert muestra "Hello" porque "bar" es undefined',
            'Llaman a los cazafantasmas, por que es una callback function',
        ],
    },
    {
        id: 'q55',
        text: '¿Cuál es el valor de foo.length?\n\nvar foo = []\nfoo.push(1)\nfoo.push(2)',
        explanation: (
            <>
                <p>
                    El valor de <code>foo.length</code> después de ejecutar el siguiente código:
                </p>

                <pre>
                    {`var foo = [];
              foo.push(1);
              foo.push(2);`}
                </pre>

                <p>
                    será <strong>2</strong>. Aquí está el desglose de lo que sucede:
                </p>

                <ol>
                    <li>
                        Se declara la variable <code>foo</code> y se inicializa como un array vacío: <code>[]</code>.
                    </li>
                    <li>
                        Se utiliza <code>foo.push(1)</code> para añadir el número <code>1</code> al array. Ahora,{' '}
                        <code>foo</code> se convierte en <code>[1]</code>.
                    </li>
                    <li>
                        Luego, se llama a <code>foo.push(2)</code>, que añade el número <code>2</code> al array. Ahora,{' '}
                        <code>foo</code> se convierte en <code>[1, 2]</code>.
                    </li>
                </ol>

                <p>
                    El método <code>push()</code> incrementa la propiedad <code>length</code> del array en 1 por cada
                    elemento añadido. Como se han añadido 2 elementos, la propiedad <code>foo.length</code> será:
                </p>

                <pre>{`foo.length // Resultado: 2`}</pre>

                <p>
                    Por lo tanto, el valor de <code>foo.length</code> es <strong>2</strong>.
                </p>
            </>
        ),
        answers: ['2', '1', 'undefined', 'Por favor, para de preguntarme cosas raras.'],
    },
    {
        id: 'q56',
        text: '¿Cuál es el valor de foo.x?\n\nvar foo = { n: 1 }\nvar bar = foo\nfoo.x = foo = { n: 2 }',
        explanation: (
            <>
                <p>
                    El valor de <code>foo.x</code> en el siguiente código:
                </p>

                <pre>
                    {`var foo = { n: 1 };
              var bar = foo;
              foo.x = foo = { n: 2 };`}
                </pre>

                <p>
                    será <strong>undefined</strong>. Vamos a desglosar cómo se llega a este resultado:
                </p>

                <ol>
                    <li>
                        Se declara la variable <code>foo</code> y se le asigna un objeto con una propiedad{' '}
                        <code>n</code> que tiene el valor <code>1</code>: <code>{`{ n: 1 }`}</code>.
                    </li>
                    <li>
                        La variable <code>bar</code> se asigna a <code>foo</code>, por lo que <code>bar</code> ahora
                        también referencia el mismo objeto que <code>foo</code>.
                    </li>
                    <li>
                        La línea <code>foo.x = foo = {`{ n: 2 };`}</code> puede parecer confusa debido al encadenamiento
                        de asignaciones. Se evalúa de la siguiente manera:
                        <ul>
                            <li>
                                Primero, <code>foo = {`{ n: 2 }`}</code> crea un nuevo objeto con <code>n: 2</code> y
                                asigna este nuevo objeto a <code>foo</code>. Sin embargo, <code>foo</code> sigue
                                apuntando al objeto original en el contexto donde se está ejecutando la asignación.
                            </li>
                            <li>
                                A continuación, la expresión <code>foo.x =</code> se evalúa. En este punto,{' '}
                                <code>foo</code> aún se refiere al objeto original {`({ n: 1 })`} en el contexto actual,
                                antes de que se haya completado la asignación.
                            </li>
                            <li>
                                Por lo tanto, se intenta asignar la propiedad <code>x</code> del objeto original (que
                                tiene <code>n: 1</code>) a un valor, pero <code>foo</code> se está asignando a un nuevo
                                objeto en ese momento. Como resultado, <code>foo.x</code> se establece en{' '}
                                <strong>undefined</strong> porque nunca se le asignó un valor antes de la operación.
                            </li>
                        </ul>
                    </li>
                </ol>

                <p>
                    Finalmente, el valor de <code>foo.x</code> es <strong>undefined</strong>, ya que no se ha asignado
                    un valor a la propiedad <code>x</code> del objeto original.
                </p>
            </>
        ),
        answers: ['undefined', '{ n: 1 }', '{ n: 2 }', 'Pero quién es FOO?'],
    },
    {
        id: 'q57',
        text: (
            <>
                ¿Qué imprime el siguiente código?
                <pre style={{ textAlign: 'start !important' }}>
                    <code>
                        {`console.log('one')
setTimeout(function () {
    console.log('two')
}, 0)
    Promise.resolve().then(function () {
    console.log('three')
})
console.log('four')
                            `}
                    </code>
                </pre>
            </>
        ),
        explanation: (
            <>
                <p>El código dado imprimirá el siguiente resultado en la consola:</p>

                <pre>
                    {`one
              four
              three
              two`}
                </pre>

                <p>Vamos a desglosar la ejecución paso a paso:</p>

                <ol>
                    <li>
                        La primera línea <code>console.log('one')</code> se ejecuta inmediatamente, por lo que se
                        imprime <strong>'one'</strong> en la consola.
                    </li>
                    <li>
                        La función <code>setTimeout</code> se llama con un tiempo de espera de <code>0</code>. Esto
                        significa que el código dentro de <code>setTimeout</code> se añadirá a la cola de tareas y se
                        ejecutará después de que el hilo principal esté libre. Sin embargo, no se ejecuta de inmediato.
                    </li>
                    <li>
                        La siguiente línea es <code>Promise.resolve().then(...)</code>. Las promesas tienen una
                        prioridad más alta que los temporizadores. Por lo tanto, el manejador de la promesa se añadirá a
                        la cola de microtareas y se ejecutará después de la ejecución del código síncrono, pero antes de
                        que se manejen las tareas de la cola de tareas.
                    </li>
                    <li>
                        Luego, se ejecuta <code>console.log('four')</code>, que imprime <strong>'four'</strong> en la
                        consola.
                    </li>
                    <li>
                        Ahora, el código síncrono ha terminado y se han procesado las colas. Primero se ejecutará el
                        manejador de la promesa, lo que imprime <strong>'three'</strong> en la consola.
                    </li>
                    <li>
                        Finalmente, se ejecuta el código dentro de <code>setTimeout</code>, imprimiendo{' '}
                        <strong>'two'</strong> en la consola.
                    </li>
                </ol>

                <p>Resumiendo, la salida en la consola será:</p>

                <ul>
                    <li>
                        <strong>'one'</strong>
                    </li>
                    <li>
                        <strong>'four'</strong>
                    </li>
                    <li>
                        <strong>'three'</strong>
                    </li>
                    <li>
                        <strong>'two'</strong>
                    </li>
                </ul>
            </>
        ),
        answers: [
            'one, four, three, two',
            'one, two, three, four',
            'one, three, two, four',
            'Ai don tal inglish, yo very gud fandango',
        ],
    },
    // {
    //     id: 'q58',
    //     text: '¿Cuál es la diferencia entre estas cuatro funciones?\n\ndoSomething().then(function () {\n    return doSomethingElse()\n})\n\ndoSomething().then(function () {\n    doSomethingElse()\n})\n\ndoSomething().then(doSomethingElse())\n\ndoSomething().then(doSomethingElse)',
    //     explanation:
    //         'La primera promesa devuelve el resultado de doSomethingElse(), encadenando la promesa. La segunda ejecuta doSomethingElse() pero no retorna nada, por lo que no encadena la promesa. La tercera ejecuta doSomethingElse() inmediatamente, lo que es incorrecto. La cuarta pasa doSomethingElse como callback, lo que es el comportamiento correcto',
    //     answers: [
    //         'La primera devuelve y encadena la promesa. La segunda no encadena la promesa. La tercera ejecuta doSomethingElse() inmediatamente. La cuarta pasa doSomethingElse correctamente como callback',
    //         'La primera es incorrecta porque retorna una promesa vacía',
    //         'La segunda ejecuta doSomethingElse inmediatamente',
    //         'La cuarta encadena incorrectamente la promesa',
    //     ],
    // },
    {
        id: 'q59',
        text: (
            <>
                ¿Qué sacará por consola este código y por qué?
                <pre style={{ textAlign: 'start !important' }}>
                    <code>
                        {`;(function () {
    var a = (b = 3)
})()
console.log('a defined? ' + (typeof a !== 'undefined'))
console.log('b defined? ' + (typeof b !== 'undefined'))
                                `}
                    </code>
                </pre>
            </>
        ),
        explanation: (
            <>
                <p>El código dado imprimirá el siguiente resultado en la consola:</p>

                <pre>
                    {`a defined? false
              b defined? true`}
                </pre>

                <p>Vamos a desglosar el comportamiento del código paso a paso:</p>

                <ol>
                    <li>
                        Se define e invoca una <strong>IIFE</strong> (Immediately Invoked Function Expression):
                        <pre>
                            {`;(function () {
                        var a = (b = 3)
                    })()`}
                        </pre>
                        Dentro de esta función, se hace una asignación:
                        <ul>
                            <li>
                                <code>b = 3</code> asigna el valor <code>3</code> a la variable <code>b</code>. Sin
                                embargo, como <code>b</code> no está declarada con <code>var</code>, <code>let</code> o{' '}
                                <code>const</code>, se crea una variable global <code>b</code> (en el objeto{' '}
                                <code>window</code> si se está ejecutando en un entorno de navegador).
                            </li>
                            <li>
                                La variable <code>a</code> es declarada con <code>var</code>, por lo que su alcance es
                                local a la IIFE y no será accesible fuera de ella.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Después de ejecutar la IIFE, se evalúan las siguientes líneas:
                        <pre>{`console.log('a defined? ' + (typeof a !== 'undefined'))`}</pre>
                        Aquí, <code>typeof a</code> devolverá <code>'undefined'</code> porque <code>a</code> no está
                        definida fuera de la IIFE. Por lo tanto, se imprimirá:
                        <strong>'a defined? false'</strong>.
                    </li>
                    <li>
                        A continuación, se evalúa:
                        <pre>{`console.log('b defined? ' + (typeof b !== 'undefined'))`}</pre>
                        En este caso, <code>typeof b</code> devolverá <code>'number'</code> (ya que <code>b</code> fue
                        asignada a <code>3</code> y se creó como variable global). Por lo tanto, se imprimirá:
                        <strong>'b defined? true'</strong>.
                    </li>
                </ol>

                <p>En resumen, el resultado en la consola será:</p>

                <ul>
                    <li>
                        <strong>'a defined? false'</strong>
                    </li>
                    <li>
                        <strong>'b defined? true'</strong>
                    </li>
                </ul>
            </>
        ),
        answers: [
            ' "a defined? false" y "b defined? true"',
            '"a defined? true" y "b defined? true"',
            'El código arrojará un error de referencia',
            'Es el momento de ir a tocar un poco de pasto',
        ],
    },
    {
        id: 'q60',
        text: (
            <>
                ¿Considerando las dos funciones de abajo, devuelven lo mismo? ¿Por qué o por qué no?
                <pre style={{ textAlign: 'start !important' }}>
                    <code>
                        {`function foo1() {
    return {
        bar: 'hello'
    }
}
function foo2() {
    return {
        bar: 'hello'
    }
}`}
                    </code>
                </pre>
            </>
        ),
        explanation: (
            <>
                <p>
                    Las dos funciones <code>foo1</code> y <code>foo2</code> no devuelven lo mismo, y la diferencia
                    radica en cómo JavaScript interpreta el retorno en <code>foo2</code>.
                </p>

                <pre>
                    {`function foo1() {
                    return {
                        bar: 'hello'
                    }
                }
              
                function foo2() {
                    return
                    {
                        bar: 'hello'
                    }
                }`}
                </pre>

                <p>Vamos a analizar cada función:</p>

                <ol>
                    <li>
                        En <code>foo1</code>, la función devuelve un objeto que tiene una propiedad <code>bar</code> con
                        el valor <code>'hello'</code>. Esto se debe a que el <code>return</code> está en la misma línea
                        que el objeto que se está devolviendo:
                        <pre>{`foo1(); // Resultado: { bar: 'hello' }`}</pre>
                    </li>
                    <li>
                        En <code>foo2</code>, el <code>return</code> está seguido de un salto de línea. JavaScript tiene
                        un comportamiento llamado <strong>automático de inserción de punto y coma</strong> (automatic
                        semicolon insertion). Esto significa que el intérprete de JavaScript interpreta el salto de
                        línea después de <code>return</code> como el final de la instrucción. Como resultado, se
                        insertará un punto y coma después de <code>return</code>, y la función <code>foo2</code>{' '}
                        terminará devolviendo <code>undefined</code> en lugar del objeto:
                        <pre>{`foo2(); // Resultado: undefined`}</pre>
                    </li>
                </ol>

                <p>En resumen, los resultados son:</p>

                <ul>
                    <li>
                        <strong>foo1()</strong> devuelve: <code>{`{ bar: 'hello' }`}</code>
                    </li>
                    <li>
                        <strong>foo2()</strong> devuelve: <code>undefined</code>
                    </li>
                </ul>

                <p>
                    Por lo tanto, <code>foo1</code> y <code>foo2</code> no devuelven lo mismo debido a la forma en que
                    se maneja la inserción automática de punto y coma en JavaScript.
                </p>
            </>
        ),
        answers: [
            'No, foo2 devuelve undefined debido al salto de línea después del return',
            'Sí, ambas funciones devuelven el mismo objeto',
            'No, foo1 devuelve undefined',
            'Esto no hay dios que lo entienda',
        ],
    },
]

<<<<<<< HEAD
# Galeria-de-arte
=======
1. En el componente `App` importa el hook `useState` de React y crea un estado para las `cards` dándole como valor inicial el array que retorna la función `generateCardPairs`:

```js
const [cards, setCards] = useState(...
```

De este modo tu aplicación en el navegador ya debería de verse como al inicio del ejemplo.

2. Crea un segundo estado en el cual almacenarás las cartas seleccionadas, este estado deberás inicializarlo con un array vacío.

```js
const [selectedCards...
```

3. Ahora programa al botón que se retorna dentro del return de tu componente `App`, para que cuando le hagan click, llame a la función `handleCardClick` y como puedes ver, esta función `handleCardClick` recibe un índice, ¡no olvides pasarle este parámetro! El cual es el índice del elemento dentro del array.
4. Dentro de la función `handleCardClick` crea un bloque `if` que valide que se cumplan las dos condiciones a la vez:

   1. **`!cardPairs[cardIndex].flipped`**: Esta condición comprueba si la carta seleccionada ya está boca arriba. Si lo está, no se hace nada.
   2. **`!cardPairs[cardIndex].matched`**: Esta condición verifica si la carta seleccionada ya ha sido emparejada. Si lo está, tampoco se hace nada.

5. Dentro del bloque `if` crea una variable que sea igual a una copia del estado actual de `cards`:

```js
const updatedCards = [...cards]
```

6. Ahora usa la notación de corchetes para acceder al array en la posición indicada por el índice que recibe tu función y haz que la propiedad flipped pase a ser `true`.
7. Setea tu estado de cartas seleccionadas para añadir el índice de la carta en el array.
8. Setea tu estado de `cards` con la variable `updatedCards` para que de este modo las modificaciones que hiciste al elemento dentro del array se puedan ver.

```js
updatedCards[cardIndex].flipped = true
setSelectedCards([...selectedCards, cardIndex])
setCards(updatedCards)
```

En este punto de tu aplicación al darle click a una carta se debería de mostrar su valor, pero la tarea aún no está finalizada 💪.

9. Importa el hook `useEffect` e implemént

alo de tal modo que solo se ejecute cuando los valores de `selectedCards` y `cards` tengan algún cambio. 19. Crea un bloque condicional `if` en el que valides que la cantidad de cartas seleccionadas sea 2. **CONSEJO:** Recuerda que hay métodos de array que te permiten validar su largo. 20. De igual modo que como lo hiciste anteriormente crea una copia del estado y guárdalo en una variable ✅. 21. Crea una nueva condición (aún dentro de la que ya estás) en la que valides que los valores de los dos elementos seleccionados sean los mismos: - Recuerda que en el estado de `selectedCards` tienes los índices de los elementos y en el estado de `cards` tienes los elementos.

10. Crea la lógica para cuando se cumpla la condición, ambas cartas dentro del array su propiedad `matched` pasen a ser `true`, recuerda que la modificación debe hacerse en la copia del estado y no en el valor directo del estado.
    - **PISTA:** Es de forma muy similar a como hiciste en el paso 15.
11. Setea el estado de `cards` con la copia que generaste y el estado de `selectedCards` de nuevo a un array vacío.
12. Ahora crea el caso contrario en el que al no coincidir los valores de las cartas seleccionadas vuelves a dar vuelta a las cartas, lo cual es de manera similar al paso anterior, pero pasando la propiedad flipped de los elementos a `false`.
    - Esta lógica debe estar dentro de un [setTimeOut](https://developer.mozilla.org/es/docs/Web/API/setTimeout) el cual se ejecuta despues de medio segundo `500`, con el fin de que al dar click a la carta no se vuelva a ocultar de manera inmediata.
13. Setea el estado de `cards` con la copia que generaste y el estado de `selectedCards` de nuevo a un array vacío.

En este punto tu `useEffect` debería tener la siguiente estructura:

```
	useEffect(() => {

	if (selectedCards.length === 2) {
                       // lógica para copiar el estado
		if (/*validación de que tengan el mismo valor*/) {
			...
		} else {
			setTimeout(() => {
			...
			}, 500)
		}
	}
}, [selectedCards, cards])
```

14. Crea un nuevo `useEffect` que solo este observando los cambios de `cards`
15. Dentro de este `useEffect` crea un bloque `if` en el cual realices un `window.alert` con el mensaje de 'Has ganado'. Cuando todas las cartas tengan su propiedad matched en `true`
16. Felicitaciones 🎉, has completado tu asignación con éxito.9
>>>>>>> f0a9dd1 (base code for the labs)

1. En el archivo `App.jsx` importa el video que se encuentra en `'../public/ada-video.mp4'`.
2. Crea un estado `isPlaying` con `useState` y haz que su valor inicial sea false.
3. Crea una referencia con el hook `useRef` e inicilizalo en null.

```jsx
const ref = useR...
```

4. Pasale la referencia a la etiqueta `video`.
5. A la etiquta `source` pasale el video a traves del atributo `src`.
   - **IMPORTANTE:** No remuevas el `data-testid` ya que los tests depende de este.

```jsx
<video
	ref={ref}
	data-testid='video'
>
	<source src={...} type='video/mp4' />
</video>
```

Si vas al navegador deberías de ver la imagen inicial del video, pero la tarea aun no esta completada 🦾. 6. Crea un botón, en el que haciendo uso del operador ternario, muestre el texto `'Play'` o `'Pause'` dependiendo de si `isPlaying` es `true` o `false`. Si es `false` significa que el video esta pausado, por lo tanto se debe mostrar el texto de `'Play'`.

7. Ahora, crea una función `handleClick` en la que en una constante `nextIsPlaying` guardaras la negativa de lo que hay en el estado de `isPlaying`.

```jsx
const nextIsPlaying = !isPlaying
```

8. Setea el estado de isPlaying con la nuev constante que has generado.
9. Crea un bloque `if` en el que si `nextIsPlaying` es `true`, vas a hacer uso de la referencia que creaste, recuerda que le pasaste esa referencia a la etiqueta `video`, es decir, que ahora tienes acceso a las propiedades de la etiqueta. A traves de la propiedad current de tu referncia, accede a la función play y haz un llamado de esta `ref.current.play()`

- De este modo estas indicando que el video se empiece a reproducir

10. Ahora, para el caso contrarío de tu bloque `if`, realiza la misma lógica, accediendo y haciendo el llamado de la función `pause` a traves de la referencia que haz creado
11. A la etiqueta `video` pasale una función callback al atributo `onPlay` con la cual hagas un set de `isPlaying` a `true` para así saber que el video esta siendo reproducido.
12. Por ultimo realiza una acción similar que en el paso anterior, pero a traves del atributo `onPause` y haciendo un set del estado a `false`.

```jsx
onPlay={() => setIsPlaying(true)}
onPause={() => setIsPlaying(false)}
```

13. Una vez las pruebas pasen, ejecuta el siguiente comando para enviar tu asignación y obtener tu nota

# Evaluation

### Quel composant vu en cours permet la gestion des routes avec React ?
C'est le BrowserRouter avec son enfant Routes qui permet de gérer plusieurs routes en React avec le package react-router-dom

### Quel hook permet de récupérer un paramètre passé dans l’url ?
C'est le composant useParams qui permet de récupérer les paramètres de l'URL dans une route en React avec le package react-router-dom

### Qu’est-ce qu’un fragment ?
Un fragment est un élément React qui permet d'encapsuler d'autres éléments.
Il est utilisé quand un composant a plusieurs enfants

### Quel hook permet de déclencher une action à un moment précis du cycle de vie du composant ?
C'est le hook useEffect, quand le composant est monté, démonté ou mis à jour

### React manipule-t-il directement le DOM de l’application ? expliquez…
Non, React crée un DOM virtuel. Les modifications sont d'abord faites sur celui-ci puis il analyse les 
différences entre ce dernier et le dom. C'est la réconcilation. De cette manière, React évite les rendus inutiles et coûteux en ressources


## Questions pratiques

### Vous mettez en place un routeur sur votre projet react, écrivez la route qui permet de lancer le composant Post en lui transmettant le slug du post à afficher en paramètre
```jsx
 <Route path="/post/:postId" element={<Post />}/>
```

### Vous utilisez useReducer dans votre projet. Dans le code JSX, quel code permet d’afficher un bouton qui, lorsque l’on clique dessus, lance l’action « SET_ITEM »
```js
const [state, dispatch] = useReducer(PostReducer, {
    ...
})
```
```jsx

<button onClick={() => dispatch({
    type: 'SET_ITEM',
    payload: {
        title: 'Test'
    }
})}>
    {operation.format}
</button>
```

### Votre composant nécessite un state isAdmin. Ecrivez la ligne qui permet de le créer et de lui affecter la valeur « false » par dafaut.

```js
const [isAdmin, setAdmin] = useState(false)
```

### En JSX, une div affiche le texte du state « message », elle possède du style inline déterminant sa couleur de police à rouge.

```jsx
<div style={{
    color: 'red'
}}>
    {message}
</div>
```

### En JSX, créez un input qui est rattaché au state « ville » et qui stockera ce que saisit l’utilisateur dans le state.
```jsx
<label htmlFor='ville'>Ville</label>
<input type='text' name='ville' value={ville} onChange={e => setVille(e.target.value)}/>
``` 
```

# Preservar el estado de un hook

cómo hace React para saber cuál estado corresponde a cuál llamado del `useState`?

La respuesta es que **React se basa en el orden en el cual los Hooks son llamados**. Nuestro ejemplo funciona porque el orden en los llamados de los Hooks son el mismo en cada render:

```JS
// ------------
// Primer render
// ------------
useState('Mary')           // 1. Inicializa la variable de estado del nombre con 'Mary'
useEffect(persistForm)     // 2. Agrega un efecto para persistir el formulario
useState('Poppins')        // 3. Inicializa la variable de estado del apellido con 'Poppins'
useEffect(updateTitle)     // 4. Agrega un efecto para la actualización del título

// -------------
// Segundo render
// -------------
useState('Mary')           // 1. Lee la variable de estado del nombre (el argumento es ignorado)
useEffect(persistForm)     // 2. Reemplaza el efecto para persistir el formulario
useState('Poppins')        // 3. Lee la variable de estado del apellido (el argumento es ignorado)
useEffect(updateTitle)     // 4. Reemplaza el efecto de actualización del título
```

Siempre y cuando el orden los llamados a los hooks sean los mismos entre renders, React puede asociar algun estado local con cada uno de ellos.

React context es una propiedada que nos deja usar y consumir datos en cualquier componente que necesitemos en nuestra app usuando propiedades.

## Casos de uso de React Context

React context es usable cuando estas pasando datos que pueden ser usados en cualquier componente en tu aplicacion.

estos tipos de datos incluyen:

- Datos sobre el uso de un tema (claro u oscuro)
- Datos del usuario
- Datos sobre la ubicacion espeficica del usuario

Los datos que son reemplazados por React Context no necesitan de ser actualizados o utilizados muy seguido. Esto es porque React Context no hizo como un sistema completo de gestion del estado, se hizo para facilitar el consumo de datos.

Se puede pensar al React Context como el equivalente de las variables globales para nuestros componentes de react.

## Que problemas soluciona React context?

Gracias a react context podemos evitar el ___props drilling___ el cual es un problema que hace repetitivo el uso de props en componentes de react.

```JS
export default function App({ theme }) {
  return (
    <>
      <Header theme={theme} />
      <Main theme={theme} />
      <Sidebar theme={theme} />
      <Footer theme={theme} />
    </>
  );
}

function Header({ theme }) {
  return (
    <>
      <User theme={theme} />
      <Login theme={theme} />
      <Menu theme={theme} />
    </>
  );
}

```

El problema es que estamos perforando la prop ___theme___ a través de múltiples componentes que no lo necesitan inmediatamente.

[[React]]
[[01 Conceptos Basicos]]
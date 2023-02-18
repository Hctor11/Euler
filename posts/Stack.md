Una pila o Stack es una coleccion de objetos que son insertados y removidos de manera <mark style="background: #BBFABBA6; padding: 3px; border-radius: 3px">LIFO (Last-In-First-Out)</mark>

![[Pasted image 20221125115902.png]]

Los objetos se pueden insertar en cualquier momento, pero el que sera el primero en salir va a ser ultimo en llegar.

Una analogía de la pila es el dispensador de platos que se encuentra en el mobiliario de alguna cafetería o cocina. Para este caso, las operaciones fundamentales involucran <mark style="background: #BBFABBA6; padding: 3px; border-radius: 3px">\push"</mark> (empujar) platos y <mark style="background: #BBFABBA6; padding: 3px; border-radius: 3px">\pop"</mark> (sacar) platos de la pila.

Otro ejemplo son los navegadores Web de internet que guardan las direcciones de los sitios recientemente visitados en una pila. Cada vez que un usuario visita un nuevo sitio, esa dirección del sitio es empujada en la pila de direcciones.

Las pilas son las estructuras de datos más simples, no obstante estas también están entre las más importantes, ya que son usadas en un sistema de diferentes aplicaciones que incluyen estructuras de datos mucho más sofisticadas.

Formalmente, una pila es un tipo de dato abstracto que soporta los siguientes dos métodos:  

-   **push(e):** inserta el elemento e, para que sea la cima de la pila.
-   **pop():** quita el elemento de la cima de la pila y lo regresa; un error ocurre si la pila esta vacía.

Adicionalmente, también se podrán definir los siguientes métodos:  

-   **size():** regresa el número de elementos en la pila.
-   **isEmpty():** regresa un booleano indicando si la pila esta vacía.
-   **top():** regresa el elemento de la cima de la pila, sin removerlo; un error ocurre si la pila esta vacía

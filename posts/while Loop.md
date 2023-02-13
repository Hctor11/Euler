# While
En [[Java]] tambien hay bucles, uno de estos bucles es el bucle mientras, el cual funciona de la siguiente manera:

>![[Pasted image 20211124162524.png]]

```Java
/*
Algoritmo que hace que imprima los numeros
del 1 al 10
*/

public class WhileAVerSiSirve {
    public static void main(String[] args) {
        int n = 0;
        while(n <= 10){
            System.out.println(n);
            n++;
        }
    }
}
```



```Java
/*
Algoritmo que genera una tabla de multiplicar de el numero ingresado.
*/

import java.util.Scanner;

public class tablaDeMultitplicar {
    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in);
        System.out.println("Ingrese un numero entero: ");
        int E = leer.nextInt();
        
        
        int x = 0;
        while (x <= 10) {            
            System.out.println( E + " por " + x + " = " + E*x);
            x++;
        }
    }
}
```
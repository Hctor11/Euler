# Estructuras de control
En [[Java]] la estructura de control que se mira en un inicio es la estructura secuencial, este tipo de estructuras es la que se ejecuta un paso a la vez de manera lineal, yendo paso a paso por cada instruccion.

>_ejemplo de una estructura secuencial_
>![[Pasted image 20211119180016.png]]

### Estructura selectiva simple
En las estructuras selectivas mas simples son aquellas que depuran los datos ingresados con operadores que dividen en 2 los resultados posibles: __true o false.__

>_Flujograma de estructura selectiva simple_
>![[Pasted image 20211119180404.png]]

### Estructura selectiva doble
En las estructuras selectivas dobles, aparte de depurar en _true o false_, tambien generan codigo distinto dependiendo de si los valores ingresados dieron verdadero o falso.

>_Flujograma de una estructura selectiva doble_
>![[Pasted image 20211119180718.png]]

### Estructura Selectiva anidada
En estas estructuras los condicionales se anidan, dejando lugar a que sea posible la depuracion de datos ya antes depurados.


## Condicionales en Java

En java las condiciones simples y dobles se dan al rededor del operador "if":

```Java
public class mainClass {

    public static void main(String [] args){
    
        //Estructura selectiva simple
        if(true){
            System.out.println("Se cumple la condicion");
        }
        
        //Estructura selectiva doble
        if(false){
            System.out.println("Se cumple la condicion");
        }else{
            System.out.println("No se cumple la condicion principal");
		}       
    }
}
```

_ejemplo en Java del ejercicio anterior pero con operadores anidados_
```Java
/*
Programa que detecte si el numero que ingresamos es par
o inpar
*/

import java.util.Scanner;
public class Pareados {
    
    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in);
        System.err.println("-- PROGRAMA QUE DETECTA SI UN NUMERO ES PAR --");
        
        System.out.println("Ingrese su numero:");
        var n1 = leer.nextInt();
        
		// este if controla si el numero es cero
        if(n1 != 0){
            
			// este if controla si el numero es par o impar
            if(n1 % 2 == 0){
                System.out.println("su numero es par");
                
				// este if controla si en numero es negativo o no
                if(n1 > 0){
                    System.out.println("su numero par es positivo");
                }else{
                    System.out.println("su numero par es negativo");
                }
                
            }else{
                System.out.println("su numero es impar");
                
				// este if controla si en numero es negativo o no
                if(n1 > 0){
                    System.out.println("su numero impar es positivo");
                }else{
                    System.out.println("su numero impar es negativo");
                }
            }
                   
        }else{
            System.out.println("su numero es cero");
        }
        
        System.out.println("---------- FIN DEL PROGRAMA --------");
        
    }   
}
```
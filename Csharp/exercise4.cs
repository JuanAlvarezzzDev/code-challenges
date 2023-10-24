/*
Escribe un programa en C# que permita al usuario ingresar una cantidad de dinero en efectivo y 
luego calcule la cantidad de billetes y monedas necesarios para representar esa cantidad. 
El programa debe calcular la cantidad de billetes de $100, $50, $20, $10, $5 y monedas de $1 necesarios.
*/

using System;

namespace Exercise4
{
    class Program
    {
        static void Main(string[] args)
        {
            int amount;
            int[] denominations = new int[] { 100, 50, 20, 10, 5, 1 };

            Console.Write("Recargar con devuelta: ");
            string input = Console.ReadLine();

            if (int.TryParse(input, out amount))
            /* Tryparse retorna un false o true, convierte input 
            en entero y guarda ese valor en amout con la clave out  */
            {
                for (int i = 0; i < denominations.Length; i++)
                {
                    int count = amount / denominations[i];
                    amount %= denominations[i];
                    Console.WriteLine($"BILLETES DE A {denominations[i]}: {count}");
                }

                Console.Write("Pulse una Tecla:");
                Console.ReadLine();
            }
            else
            {
                Console.WriteLine("Entrada no válida. Por favor, ingrese un número válido.");
            }
        }
    }
}

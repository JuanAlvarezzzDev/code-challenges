using System;
namespace Practice
{
 class Program{
    static void Main(String[] args){
       int Num, AUX, DEC, UNI;
       string linea;
       Console.WriteLine("Ingrese numeros de dos cifras");
       linea = Console.ReadLine();
       Num = int.Parse(linea);
       DEC = Num/10;
       UNI = Num %10;
       AUX = (UNI *10) + DEC;
       Console.WriteLine($"Numero invertido es: {AUX}");
       Console.WriteLine($"Pulse una tecla");
       Console.ReadLine();
    }
 }
}
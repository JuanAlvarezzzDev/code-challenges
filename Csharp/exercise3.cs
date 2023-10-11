using System;
namespace Practice
{
 class Program{
    static void Main(String[] args){
     int NUM1;
     string linea;
     long result;
     Console.Write("Digite un numero:");
     linea = Console.ReadLine();
     NUM1 = int.Parse(linea);
     result = Math.Abs(NUM1);
     Console.WriteLine($"Valor Absoluto : {result}");
     Console.WriteLine($"Potencia: {Math.Pow(NUM1, 3)}");
     Console.WriteLine ($"Raiz Cuadrada : {Math.Sqrt(NUM1)}");
     Console.WriteLine ($"Seno: {Math.Sin(NUM1 * Math.PI / 180)}");
     Console.WriteLine ($"Coseno: {Math.Cos(NUM1 * Math.PI / 180)}");
     Console.WriteLine ($"Numero Maximo {Math.Max(NUM1, 50)}");
     Console.WriteLine ($"Numero Minimo {Math.Min(NUM1, 50)}");
     Console.WriteLine ($"Parte Entera {Math.Truncate(18.78)}");
     Console.WriteLine($"Redondeo: {Math.Round(18.78)}");
     Console.WriteLine($"Pulsa una tecla");
     Console.ReadLine();
    }
 }
}
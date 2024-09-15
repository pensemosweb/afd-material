import java.io.*;

// Driver Class
class EnsaladaBase {

	// Constructor
	EnsaladaBase()
	{
		super();
		System.out.println("Constructor Called");
	}
  
  void preparar() {
    System.out.println("Corta la lechuga y el tomate. Despues mezcla todo");
  }

  void entregar(String cliente) {
    System.out.println("entregar a " + cliente);
  }

	// main function
	public static void main(String[] args)
	{
		EnsaladaBase eB = new EnsaladaBase();
        eB.preparar();
        eB.entregar("Norris");
	}
}

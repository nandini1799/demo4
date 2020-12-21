public class Demo {
    
	
	public static void main(String[] args) {
		
		int a= 12;
		int b = 15;
		
		System.out.println("a value = "+a+"b value is = "+b);
		
		a= a+b;
		b= a-b;
		a= a-b;
		
		System.out.println("Values after swap a= "+a+"b= "+b );
	}
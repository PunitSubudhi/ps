import java.util.Scanner;

/**
 * transitive
 */
public class transitive {
    private static double pow3(double num){
        return num*num*num;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (true) {
            System.out.print("\na: ");
            double a = sc.nextDouble();

            System.out.print("b: ");
            double b = sc.nextDouble();

            System.out.print("c: ");
            double c = sc.nextDouble();

            if(!(a<=pow3(b) && b<=pow3(c))) System.out.println("\nThe precondition is not met \n");
            else if(a<=pow3(b) && b<=pow3(c) && a<=pow3(c)){
                System.out.println("\nThe relation is Transitive for the given example \n");
            } else System.out.println("\nThe relation is not Transitive \n");

            System.out.println("a<=b^3: " + a + " <= " + pow3(b));
            System.out.println("b<=c^3: " + b + " <= " + pow3(c));
            System.out.println("a<=c^3: " + a + " <= " + pow3(c));
        }
    }
}
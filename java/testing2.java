import java.util.*;

public class testing2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your number: ");
        int num = sc.nextInt();

        int j = 0;
        int i = 1;

        while(i <= 10){
            j = j + (i*num);
            System.out.println(j);
            ++i;
        }
        System.out.println(j);
    }
}
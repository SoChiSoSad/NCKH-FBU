import java.util.Scanner;
public class TimSoLonNhat {
    public static void main(String[] args) {
        int num1,num2,num3;
        Scanner scanner = new Scanner(System.in);
        System.out.println("Nhập vào số thứ nhất: ");
        num1 = scanner.nextInt();
        System.out.println("Nhập vào số thứ hai: ");
        num2 = scanner.nextInt();
        System.out.println("Nhập vào số thứ ba: ");
        num3 = scanner.nextInt();
        if( num1 >= num2 && num1 >= num3)
            System.out.println(num1+" là số lớn nhất!!");
 
        else if (num2 >= num1 && num2 >= num3)
            System.out.println(num2+" là số lớn nhất!!");
        else
            System.out.println(num3+" là số lớn nhất!!");
    }
}
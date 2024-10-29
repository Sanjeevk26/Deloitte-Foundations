// Main class
public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog("Buddy");
        System.out.println("Animal name: " + myDog.getName());
        myDog.sound();  // Calls the overridden method in Dog
    }
}

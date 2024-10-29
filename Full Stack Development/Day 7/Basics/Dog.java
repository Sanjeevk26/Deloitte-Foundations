// Define a subclass
public class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }

    // Method overriding (polymorphism)
    @Override
    public void sound() {
        System.out.println("Barks");
    }
}

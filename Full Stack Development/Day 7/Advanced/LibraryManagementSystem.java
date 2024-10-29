package Advanced;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

// Abstract Class: Person
abstract class Person {
    protected String name;
    protected int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Abstract Method
    public abstract void displayInfo();

    // Common Method
    public String getName() {
        return name;
    }
}

// Librarian Class (Inheritance)
class Librarian extends Person {
    private String employeeId;

    public Librarian(String name, int age, String employeeId) {
        super(name, age);
        this.employeeId = employeeId;
    }

    @Override
    public void displayInfo() {
        System.out.println("Librarian: " + name + ", Age: " + age + ", Employee ID: " + employeeId);
    }
}

// Member Class (Inheritance)
class Member extends Person {
    private String memberId;

    public Member(String name, int age, String memberId) {
        super(name, age);
        this.memberId = memberId;
    }

    @Override
    public void displayInfo() {
        System.out.println("Member: " + name + ", Age: " + age + ", Member ID: " + memberId);
    }

    public String getMemberId() {
        return memberId;
    }
}

// Book Class
class Book {
    private String title;
    private String author;
    private boolean isAvailable;

    public Book(String title, String author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }

    public String getTitle() {
        return title;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void borrowBook() {
        isAvailable = false;
    }

    public void returnBook() {
        isAvailable = true;
    }

    public void displayInfo() {
        System.out.println("Book: " + title + ", Author: " + author + ", Available: " + isAvailable);
    }
}

// Library Class: Manages Books and Members
class Library {
    private List<Book> books;
    private List<Member> members;

    public Library() {
        books = new ArrayList<>();
        members = new ArrayList<>();
    }

    // Add a book to the library
    public void addBook(Book book) {
        books.add(book);
    }

    // Register a member
    public void registerMember(Member member) {
        members.add(member);
    }

    // Search for a book by title
    public Book searchBook(String title) {
        for (Book book : books) {
            if (book.getTitle().equalsIgnoreCase(title)) {
                return book;
            }
        }
        return null;
    }

    // Borrow a book
    public void borrowBook(String title, String memberId) {
        Book book = searchBook(title);
        if (book != null && book.isAvailable()) {
            book.borrowBook();
            System.out.println("Book borrowed successfully by Member ID: " + memberId);
        } else {
            System.out.println("Sorry, the book is not available.");
        }
    }

    // Return a book
    public void returnBook(String title) {
        Book book = searchBook(title);
        if (book != null && !book.isAvailable()) {
            book.returnBook();
            System.out.println("Book returned successfully.");
        } else {
            System.out.println("Invalid book or the book is already returned.");
        }
    }

    // Display all books
    public void displayBooks() {
        System.out.println("Library Books:");
        for (Book book : books) {
            book.displayInfo();
        }
    }

    // Display all members
    public void displayMembers() {
        System.out.println("Library Members:");
        for (Member member : members) {
            member.displayInfo();
        }
    }
}

// Main Class with Menu and Input Handling
public class LibraryManagementSystem {
    public static void main(String[] args) {
        Library library = new Library();
        Scanner scanner = new Scanner(System.in);
        boolean running = true;

        while (running) {
            System.out.println("\n--- Library Management System ---");
            System.out.println("1. Add Book");
            System.out.println("2. Register Member");
            System.out.println("3. Display Books");
            System.out.println("4. Display Members");
            System.out.println("5. Borrow Book");
            System.out.println("6. Return Book");
            System.out.println("7. Exit");
            System.out.print("Choose an option: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline

            switch (choice) {
                case 1:
                    System.out.print("Enter book title: ");
                    String title = scanner.nextLine();
                    System.out.print("Enter author name: ");
                    String author = scanner.nextLine();
                    library.addBook(new Book(title, author));
                    System.out.println("Book added successfully!");
                    break;

                case 2:
                    System.out.print("Enter member name: ");
                    String name = scanner.nextLine();
                    System.out.print("Enter age: ");
                    int age = scanner.nextInt();
                    scanner.nextLine(); // Consume newline
                    System.out.print("Enter member ID: ");
                    String memberId = scanner.nextLine();
                    library.registerMember(new Member(name, age, memberId));
                    System.out.println("Member registered successfully!");
                    break;

                case 3:
                    library.displayBooks();
                    break;

                case 4:
                    library.displayMembers();
                    break;

                case 5:
                    System.out.print("Enter book title to borrow: ");
                    String borrowTitle = scanner.nextLine();
                    System.out.print("Enter member ID: ");
                    String borrowerId = scanner.nextLine();
                    library.borrowBook(borrowTitle, borrowerId);
                    break;

                case 6:
                    System.out.print("Enter book title to return: ");
                    String returnTitle = scanner.nextLine();
                    library.returnBook(returnTitle);
                    break;

                case 7:
                    running = false;
                    System.out.println("Exiting Library Management System.");
                    break;

                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }

        scanner.close();
    }
}

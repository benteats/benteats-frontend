public class App {
    public static void main(String[] args) {
        Client client = new Client("João Silva", "11912341234", "joao.silva@email.com", "joao123", 39);
        Client client2 = new Client("Giovanna Vieira", "11912341234", "giovanna@email.com", "gi123", 30);

        Restaurant restaurant = new Restaurant("Cantina do Pedro", "1112341234", "cantina@email.com", "cantina123", "12312312312312", 15);
        Restaurant restaurant2 = new Restaurant("Fogo de Chão", "1112341234", "fogodechao@email.com", "fogo123", "12312312312312", 40);

        UserController controller = new UserController();

        System.out.println(client.upgradeUser());
        System.out.println(client2.upgradeUser());

        controller.registerUser(client);
        controller.registerUser(client2);
        controller.registerUser(restaurant);
        controller.registerUser(restaurant2);

        System.out.println(controller.getUsers()) ;
        System.out.println(controller.getPremiumUsers());
    }
}

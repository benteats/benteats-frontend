import java.util.ArrayList;
import java.util.List;

public class UserController {
    private List<User> users;

    public UserController() {
        this.users = new ArrayList<>();
    }

    public String registerUser(User user) {
        for(User u : users) {
            if (user.getEmail().equals(u.getEmail())) {
                return "O email informado ja foi cadastrado";
            }
        }

        users.add(user);

        return String.format("O usuário %s foi cadastrado com sucesso", user.getName());
    }

    public List<User> getUsers() {
        return users;
    }

    public List<User> getPremiumUsers() {
        List<User> premiuns = new ArrayList<>();
        for (User u : users) {
            if (u.isPremiun())
                premiuns.add(u);
        }

        return premiuns;
    }
}

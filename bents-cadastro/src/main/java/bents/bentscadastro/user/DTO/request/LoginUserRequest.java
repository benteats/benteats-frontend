package bents.bentscadastro.user.DTO.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class LoginUserRequest {
    @NotBlank
    private String login;

    @NotBlank
    @Pattern(regexp = "^(?=.*[0-9]{3})(?=.*[A-z]{1})[A-z0-9]{6,}$", message = "Senha inválida")
    private String password;

    public LoginUserRequest(String login, String password) {
        this.login = login;
        this.password = password;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }
}

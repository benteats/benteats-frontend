package bents.bentscadastro.user.DTO.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class LoginUserRequest {
    @NotBlank
    @Pattern(regexp = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$", message = "E-mail inválido")
    private String email;

    @NotBlank
    @Pattern(regexp = "^(?=.*[0-9]{3})(?=.*[A-z]{1})[A-z0-9]{6,}$", message = "Senha inválida")
    private String password;

    public LoginUserRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}

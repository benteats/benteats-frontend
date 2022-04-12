package bents.bentscadastro.client;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.*;

@Entity
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idClient;

    @NotBlank
    private String name;

    @Pattern(regexp = "(\\(?\\d{2}\\)?\\s)?(\\d{4,5}\\-\\d{4})",
            message = "Informe um telefone válido com ou sem DDD")
    private String phone;

    @Email
    private String email;

    @NotBlank
    private String password;

    @NotBlank
    private String cep;

    @NotBlank
    private String address;

    @Positive
    private Integer addressNumber;

    private Boolean isLogged;

    public Client() {
        this.isLogged = false;
    }

    public Integer getIdClient() {
        return idClient;
    }

    public void setIdClient(Integer idClient) {
        this.idClient = idClient;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getAddressNumber() {
        return addressNumber;
    }

    public void setAddressNumber(Integer addressNumber) {
        this.addressNumber = addressNumber;
    }

    public Boolean getLogged() {
        return isLogged;
    }

    public void setLogged(Boolean logged) {
        isLogged = logged;
    }

    public boolean doLogin(String emailClient, String passwordClient) {
        if (emailClient.equals(this.email) && passwordClient.equals(this.password))
            setLogged(true);
        return isLogged;
    }
}

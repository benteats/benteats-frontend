package bents.bentscadastro.user.DTO.request;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class UpdateUserDto {

    @Size(min = 3, max = 35)
    private String name;

    @Pattern(regexp = "^(?=.*[0-9]{3})(?=.*[A-z]{1})[A-z0-9]{6,}$",
            message = "Senha inválida")
    private String password;

    @Pattern(regexp = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$",
            message = "E-mail inválido")
    private String email;

    @Pattern(regexp = "(\\(?\\d{2}\\)?\\s)?(\\d{4,5}\\-\\d{4})",
            message = "Informe um telefone válido com ou sem DDD")
    private String phone;


    @Size(min = 8, max = 8)
    private String cep;

    private String state;

    private String city;

    private String district;

    private String address;

    private Integer addressNumber;

    private String lat;

    private String lng;

    public UpdateUserDto(String name, String password, String email, String phone, String cep, String state, String city, String district, String address, Integer addressNumber, String lat, String lng) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.cep = cep;
        this.state = state;
        this.city = city;
        this.district = district;
        this.address = address;
        this.addressNumber = addressNumber;
        this.lat = lat;
        this.lng = lng;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public String getCep() {
        return cep;
    }

    public String getState() {
        return state;
    }

    public String getCity() {
        return city;
    }

    public String getDistrict() {
        return district;
    }

    public String getAddress() {
        return address;
    }

    public Integer getAddressNumber() {
        return addressNumber;
    }

    public String getLat() {
        return lat;
    }

    public String getLng() {
        return lng;
    }
}

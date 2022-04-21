package bents.bentscadastro.user.DTO.request;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class UpdateUserDto {
    private String name;

    private String password;

    private String email;

    private String phone;

    private String cep;

    private String state;

    private String city;

    private String district;

    private String address;

    private Integer addressNumber;

    private String lat;

    private String lng;

    public UpdateUserDto() {
        this.name = "";
        this.password = "";
        this.email = "";
        this.phone = "";
        this.cep = "";
        this.state = "";
        this.city = "";
        this.district = "";
        this.address = "";
        this.addressNumber = null;
        this.lat = "";
        this.lng = "";
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

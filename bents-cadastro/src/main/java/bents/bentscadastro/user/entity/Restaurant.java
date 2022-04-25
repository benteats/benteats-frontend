package bents.bentscadastro.user.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Entity
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idRestaurant;

    private String foodType;

    private String priceAverage;

    private String openingTime;

    private String closingTime;

    private String description;

    @Size(min = 3, max = 35)
    private String name;

    @NotBlank
    @Pattern(regexp = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$",
            message = "E-mail inválido")
    private String email;

    @NotBlank
    @Pattern(regexp = "^(?=.*[0-9]{3})(?=.*[A-z]{1})[A-z0-9]{6,}$",
            message = "Senha inválida")
    private String password;

    @NotBlank
    @Pattern(regexp = "^\\([1-9]{2}\\) (?:[2-8]|9[1-9])[0-9]{3}\\-[0-9]{4}$",
            message = "Informe um telefone válido com ou sem DDD")
    private String phone;

    @Size(min = 8, max = 8)
    private String cep;

    @NotBlank
    private String state;

    @NotBlank
    private String city;

    @NotBlank
    private String district;

    @NotBlank
    private String address;

    @NotBlank
    private String addressNumber;

    @NotNull
    private Float lat;

    @NotNull
    private Float lng;

    private String imgUrl;

    private Boolean isLogged;

    public Restaurant() {
        this.isLogged = false;
    }

    public Integer getIdRestaurant() {
        return idRestaurant;
    }

    public void setIdRestaurant(Integer idRestaurant) {
        this.idRestaurant = idRestaurant;
    }
    public String getFoodType() {
        return foodType;
    }

    public void setFoodType(String foodType) {
        this.foodType = foodType;
    }

    public String getPriceAverage() {
        return priceAverage;
    }

    public void setPriceAverage(String priceAverage) {
        this.priceAverage = priceAverage;
    }

    public String getOpeningTime() {
        return openingTime;
    }

    public void setOpeningTime(String openingTime) {
        this.openingTime = openingTime;
    }

    public String getClosingTime() {
        return closingTime;
    }

    public void setClosingTime(String closingTime) {
        this.closingTime = closingTime;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }


    public void setPhone(String phone) {
        this.phone = phone;
    }


    public String getCep() {
        return cep;
    }


    public void setCep(String cep) {
        this.cep = cep;
    }


    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }


    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getAddress() {
        return address;
    }


    public void setAddress(String address) {
        this.address = address;
    }

    public String getAddressNumber() {
        return addressNumber;
    }

    public void setAddressNumber(String addressNumber) {
        this.addressNumber = addressNumber;
    }

    public Float getLat() {
        return lat;
    }

    public void setLat(Float lat) {
        this.lat = lat;
    }

    public Float getLng() {
        return lng;
    }

    public void setLng(Float lng) {
        this.lng = lng;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }
}

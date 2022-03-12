package com.example.BentEats.entidade;

public abstract class Usuario {

    //Atributos do usuário
    private String name;
    private String phone;
    private String email;
    private String password;
    private String cep;
    private String address;
    private Integer addressNumber;

    public Usuario(String name, String phone, String email, String password, String cep, String address, Integer addressNumber) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.cep = cep;
        this.address = address;
        this.addressNumber = addressNumber;
    }

    public abstract void registerUser(String name, String phone, String email, String password, String cep, String address, Integer addressNumber);

    public void getAllUsers() { };

    public void getUserByName() { };

    public String loginUser(String email, String password) {
        return email + password;
    }

    public String logOffUser(String email) {
        return email;
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

    public String getPassword() {
        return password;
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
}


package com.example.BentEats.service;

public class RestaurantService extends UserService{

    public RestaurantService(String name, String phone, String email, String password, String cep, String address, Integer addressNumber) {
        super(name, phone, email, password, cep, address, addressNumber);
    }

    @Override
    public String registerUser(UserService user) {
        return super.registerUser(user);
    }
}

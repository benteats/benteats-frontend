package com.example.BentEats.service;

import com.example.BentEats.entidade.User;

public class UserService extends User {

    public UserService(String name, String phone, String email, String password, String cep, String address, Integer addressNumber) {
        super(name, phone, email, password, cep, address, addressNumber);
    }

    public String registerUser(UserService user) {
        return null;
    }

    @Override
    public String loginUser(String userCode, String password) {
        return null;
    }
}

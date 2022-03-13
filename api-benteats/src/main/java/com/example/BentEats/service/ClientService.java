package com.example.BentEats.service;

import com.example.BentEats.controller.ClientController;
import com.example.BentEats.entidade.User;

public class ClientService extends User {
    ClientController controller = new ClientController();

    public ClientService(String name, String phone, String email, String password, String cep, String address, Integer addressNumber) {
        super(name, phone, email, password, cep, address, addressNumber);
    }


    public String registerUser(ClientService user) {
        return controller.registerUser(user);
    }

    @Override
    public String loginUser(String userCode, String password) {
        return controller.loginClient(userCode, password);
    }
}

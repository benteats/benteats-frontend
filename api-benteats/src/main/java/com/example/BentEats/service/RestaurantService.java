package com.example.BentEats.service;

import com.example.BentEats.controller.RestaurantController;
import com.example.BentEats.entidade.User;

public class RestaurantService extends User {
    RestaurantController controller = new RestaurantController();
    private String cnpj;

    public RestaurantService(String name, String phone, String email, String password, String cep, String address, Integer addressNumber, String cnpj) {
        super(name, phone, email, password, cep, address, addressNumber);
        this.cnpj = cnpj;
    }

    public String registerResturant(RestaurantService restaurantService) {
        return controller.registerRestaurant(restaurantService);
    }

    @Override
    public String loginUser(String userCode, String password) {
        return controller.loginRestaurant(userCode, password);
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }
}

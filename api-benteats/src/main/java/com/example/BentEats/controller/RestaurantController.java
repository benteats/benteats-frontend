package com.example.BentEats.controller;

import com.example.BentEats.entidade.Usuario;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/aplicativos")
public class RestaurantController {

    private List<Usuario> listAplicativo = new ArrayList<>();

    private String cnpj;

    public void registerUser(String name, String phone, String email, String password, String cep, String address, Integer addressNumber, String cnpj) {

    }

}

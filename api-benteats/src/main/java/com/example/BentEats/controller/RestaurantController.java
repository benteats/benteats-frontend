package com.example.BentEats.controller;

import com.example.BentEats.entidade.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/aplicativos")
public class RestaurantController {

    private List<User> listAplicativo = new ArrayList<>();

    private String cnpj;

//    public void registerUser(@RequestMapping Usuario usuario) {
//
//    }

}

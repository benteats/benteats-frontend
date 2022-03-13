package com.example.BentEats.controller;

import com.example.BentEats.entidade.User;
import com.example.BentEats.service.ClientService;
import com.example.BentEats.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/users")
public class ClientController {

    private List<User> listUsers = new ArrayList<>();

    @PostMapping("/registerClient")
    public String registerUser(@RequestBody UserService user) {

        if (user.getName().equals(null) || user.getName().equals(""))
            return "É necessário informar um nome para cadastrar um usuário";

        if (user.getEmail().equals(null) || user.getEmail().equals(""))
            return "É necessário infomar um email para cadastrar um usuário";

        if (user.getPhone().equals(null) || user.getPhone().equals(""))
            return "É necessário infomar um telefone para cadastrar um usuário";

        if (user.getCep().equals(null) || user.getPhone().equals(""))
            return "É necessário infomar um CEP para cadastrar um usuário";

        if (user.getCep().equals(null) || user.getCep().equals(""))
            return "É necessário infomar um CEP para cadastrar um usuário";

        if (user.getAddress().equals(null) || user.getAddress().equals(""))
            return "É necessário infomar um endereço para cadastrar um usuário";

        if (user.getAddress().equals(null) || user.getAddress().equals(""))
            return "É necessário infomar um endereço para cadastrar um usuário";

        if (user.getAddressNumber().equals(null) || user.getAddressNumber().equals(""))
            return "É necessário infomar um endereço para cadastrar um usuário";

        listUsers.add(user);

        return String.format("Usuário %s cadastrado com sucesso", user.getName());
    }

    @GetMapping("/getAllUsers")
    public List<User> getListUsers() {
        return listUsers;
    }

    @PostMapping("/loginClient/{userCode}/{password}")
    public String loginClient(@PathVariable String userCode, @PathVariable String password) {
        if (listUsers.isEmpty())
            return  "Nenhum usuário cadastrado";

        for (User users : listUsers) {
            if ((users.getEmail().equals(userCode) || users.getPhone().equals(userCode)) && users.getPassword().equals(password)) {
                users.setLogged(true);
                return String.format("Usuário %s autenticado com sucesso", users.getName());
            }
        }

        return "Senha e/ou Usuário incorreto(s)";
    }

    @DeleteMapping("/logoffClient")
    public String logoffClient(String userCode) {
        if (listUsers.isEmpty())
            return  "Nenhum usuário cadastrado";

        for (User users : listUsers) {
            if ((users.getEmail().equals(userCode) || users.getPhone().equals(userCode)) && users.getLogged()) {
                users.setLogged(false);
                return String.format("Logout do usuário %s realizado com sucesso", users.getName());
            } else if ((users.getEmail().equals(userCode) || users.getPhone().equals(userCode) && !users.getLogged())) {
                return String.format("O usuário %s não está logado", users.getName());
            }
        }

        return "Usuário não encontrado";
    }
}

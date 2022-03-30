package com.example.BentEats.controller;

import com.example.BentEats.entidade.User;
import com.example.BentEats.service.ClientService;
import com.example.BentEats.service.UserService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/clients")
public class ClientController {

    private List<ClientService> listUsers = new ArrayList<>();

    @PostMapping("/registerClient")
    public String registerUser(@RequestBody @Valid ClientService client) {
        //O código foi comentado pois o @Valid fará a verificação se o campo está vazio
        //Poupando os if e else

//        if (client.getName() == null || client.getName().equals(""))
//            return "É necessário informar um nome para cadastrar um usuário";
//
//        if (client.getEmail() == null || client.getEmail().equals(""))
//            return "É necessário infomar um email para cadastrar um usuário";
//
//        if (client.getPhone() == null || client.getPhone().equals(""))
//            return "É necessário infomar um telefone para cadastrar um usuário";
//
//        if (client.getCep() == null || client.getPhone().equals(""))
//            return "É necessário infomar um CEP para cadastrar um usuário";
//
//        if (client.getCep() == null || client.getCep().equals(""))
//            return "É necessário infomar um CEP para cadastrar um usuário";
//
//        if (client.getAddress() == null || client.getAddress().equals(""))
//            return "É necessário infomar um endereço para cadastrar um usuário";
//
//        if (client.getAddress() == null || client.getAddress().equals(""))
//            return "É necessário infomar um endereço para cadastrar um usuário";

        List<ClientService> allUsers = getListUsers();

        for (User u : allUsers) {
            if (client.getEmail().equals(u.getEmail()))
                return "O email informado ja está cadastrado";
        }

        listUsers.add(client);

        return String.format("Usuário %s cadastrado com sucesso", client.getName());
    }

    @GetMapping("/getAllUsers")
    public List<ClientService> getListUsers() {
        return listUsers;
    }

    @PostMapping("/loginClient/{userCode}/{password}")
    public String loginClient(@PathVariable String userCode, @PathVariable String password) {
        if (listUsers.isEmpty())
            return  "Nenhum usuário cadastrado";

        for (User users : listUsers) {

            if ((users.getEmail().equals(userCode) || users.getPhone().equals(userCode)) && users.getPassword().equals(password) && users.getLogged()) {
                return String.format("O usuário %s já está logado", users.getName());
            } else if ((users.getEmail().equals(userCode) || users.getPhone().equals(userCode)) && users.getPassword().equals(password)) {
                users.setLogged(true);
                return String.format("Usuário %s autenticado com sucesso", users.getName());
            }
        }

        return "Senha e/ou Usuário incorreto(s)";
    }

    @DeleteMapping("/logoffClient/{userCode}")
    public String logoffClient(@PathVariable String userCode) {
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

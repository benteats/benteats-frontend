package com.example.BentEats.controller;

import com.example.BentEats.entidade.User;
import com.example.BentEats.service.RestaurantService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/restaurants")
public class RestaurantController {

    private List<RestaurantService> listRestaurants = new ArrayList<>();

    @PostMapping("/registerRestaurant")
    public String registerRestaurant(@RequestBody RestaurantService restaurant) {
        if (restaurant.getName() == null || restaurant.getName().equals(""))
            return "É necessário informar um nome para cadastrar um usuário";

        if (restaurant.getEmail() == null || restaurant.getEmail().equals(""))
            return "É necessário infomar um email para cadastrar um usuário";

        if (restaurant.getPhone() == null || restaurant.getPhone().equals(""))
            return "É necessário infomar um telefone para cadastrar um usuário";

        if (restaurant.getCep() == null || restaurant.getPhone().equals(""))
            return "É necessário infomar um CEP para cadastrar um usuário";

        if (restaurant.getCep() == null || restaurant.getCep().equals(""))
            return "É necessário infomar um CEP para cadastrar um usuário";

        if (restaurant.getAddress() == null || restaurant.getAddress().equals(""))
            return "É necessário infomar um endereço para cadastrar um usuário";

        if (restaurant.getAddress() == null || restaurant.getAddress().equals(""))
            return "É necessário infomar um endereço para cadastrar um usuário";

        if (restaurant.getCnpj() == null || restaurant.getCnpj().equals(""))
            return "É necessário informar um CNPJ para cadastrar um usuário";

        List<RestaurantService> allRestaurants = getListRestaurants();

        for (User r : allRestaurants) {
            if (restaurant.getEmail().equals(r.getEmail()))
                return "O email informado ja está cadastrado";
        }

        listRestaurants.add(restaurant);

        return String.format("Usuário %s cadastrado com sucesso", restaurant.getName());
    }

    @GetMapping("/getAllRestaurants")
    public List<RestaurantService> getListRestaurants() {
        return listRestaurants;
    }

    @PostMapping("/loginRestaurant/{userCode}/{password}")
    public String loginRestaurant(@PathVariable String userCode, @PathVariable String password) {
        if (listRestaurants.isEmpty())
            return  "Nenhum usuário cadastrado";

        for (RestaurantService r : listRestaurants) {

            if ((r.getEmail().equals(userCode) || r.getCnpj().equals(userCode)) && r.getPassword().equals(password) && r.getLogged()) {
                return String.format("O usuário %s já está logado", r.getName());
            } else if ((r.getEmail().equals(userCode) || r.getCnpj().equals(userCode)) && r.getPassword().equals(password)) {
                r.setLogged(true);
                return String.format("Usuário %s autenticado com sucesso", r.getName());
            }
        }

        return "Senha e/ou Usuário incorreto(s)";
    }

    @DeleteMapping("/logoutRestaurant/{userCode}")
    public String logoffClient(@PathVariable String userCode) {
        if (listRestaurants.isEmpty())
            return  "Nenhum usuário cadastrado";

        for (RestaurantService r : listRestaurants) {
            if ((r.getEmail().equals(userCode) || r.getCnpj().equals(userCode)) && r.getLogged()) {
                r.setLogged(false);
                return String.format("Logout do usuário %s realizado com sucesso", r.getName());
            } else if ((r.getEmail().equals(userCode) || r.getPhone().equals(userCode) && !r.getLogged())) {
                return String.format("O usuário %s não está logado", r.getName());
            }
        }

        return "Usuário não encontrado";
    }
}

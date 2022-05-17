package sptech.bentscadastro.restaurant.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sptech.bentscadastro.restaurant.entity.Restaurant;
import sptech.bentscadastro.restaurant.repository.RestaurantRepository;
import sptech.bentscadastro.user.entity.User;
import sptech.bentscadastro.user.repository.UserRepository;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/restaurants")
public class RestaurantController {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/{idUser}")
    public ResponseEntity registerRestaurant(@RequestBody @Valid Restaurant newRestaurant, @PathVariable Integer idUser) {
        Optional<User> restaurantUser = userRepository.findById(idUser);
        return ResponseEntity.status(201).build();
    }
}

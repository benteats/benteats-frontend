package bents.bentscadastro.restaurant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/restaurants")
public class RestaurantController {

    @Autowired
    private RestaurantRepository repository;

    @PostMapping("/resgisterClient")
    public ResponseEntity registerClient(@RequestBody @Valid Restaurant restaurant) {
        repository.save(restaurant);
        return ResponseEntity.status(200).build();
    }

    @GetMapping("/getAllClients")
    public ResponseEntity getAllRestaurants() {
        List<Restaurant> restaurants = repository.findAll();
        return ResponseEntity.status(200).body(restaurants);
    }

    @PostMapping("loginClient/{email}/{password}")
    public ResponseEntity doLoginRestaurant(@PathVariable String email, @PathVariable String password) {
        List<Restaurant> restaurants = repository.findAll();
        for (Restaurant restaurant : restaurants) {
            if(restaurant.doLogin(email, password))
                return ResponseEntity.status(200).build();
        }
        return ResponseEntity.status(202).build();
    }

    @DeleteMapping("/logoutClient/{email}")
    public ResponseEntity logoutRestaurant(@PathVariable String email) {
        List<Restaurant> restaurants = repository.findAll();
        for (Restaurant restaurant : restaurants) {
            if (restaurant.getEmail().equals(email)) {
                restaurant.setLogged(false);
                return ResponseEntity.status(200).build();
            }
        }
        return ResponseEntity.status(202).build();
    }

//    @PatchMapping("/updateClientById/{idClient}")
//    public ResponseEntity updateClientById(@RequestBody ClientDto client) {
//
//    }

//    @DeleteMapping("/deleteClient/{idClient}")
//    public ResponseEntity deleteClient(@PathVariable Integer idClient) {
//        repository.
//    }
}

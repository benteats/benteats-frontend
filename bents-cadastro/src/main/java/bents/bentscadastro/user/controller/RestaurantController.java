package bents.bentscadastro.user.controller;

import bents.bentscadastro.user.DTO.request.RegisterRestaurant;
import bents.bentscadastro.user.DTO.request.UserRestaurant;
import bents.bentscadastro.user.entity.Restaurant;
import bents.bentscadastro.user.entity.User;
import bents.bentscadastro.user.repository.RestaurantRepository;
import bents.bentscadastro.user.repository.UserRepository;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/restaurants")
public class RestaurantController {
    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private UserRepository userRepository;

//    public void teste()  {
//        User user = new User("Restaurant", "teste", "teste123", "teste@gmail.com",
//                "(11)99607-3601", "03251050", "teste", "")
//    }

    @PostMapping
    public ResponseEntity registerRestaurant(@RequestBody RegisterRestaurant newRestaurant) {
        System.out.println(newRestaurant.getRestaurant());
        System.out.println(newRestaurant.getUser());

//        userRepository.save(newRestaurant.getUser());
////        newRestaurant.setIdUser(user.getIdUser());
//        restaurantRepository.save(newRestaurant.getRestaurant());
        return ResponseEntity.status(200).build();
    }

    @GetMapping
    public ResponseEntity<List<Restaurant>> getAllRestaurants() {
        List<Restaurant> restaurants = restaurantRepository.findAll();
        if (restaurants.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(restaurants);
    }

    @DeleteMapping("/{idRestaurant}")
    public ResponseEntity deleteRestaurantById(@PathVariable Integer idRestaurant) {
        if (restaurantRepository.existsById(idRestaurant)) {
            restaurantRepository.deleteById(idRestaurant);
            return ResponseEntity.status(200).build();
        }

        return ResponseEntity.status(404).build();
    }

    @PatchMapping("/idRestaurant")
    private ResponseEntity updateUserById(@RequestBody UserRestaurant restaurant, @PathVariable Integer idRestaurant) {
        ResponseEntity result = ResponseEntity.status(404).build();
        if (restaurantRepository.existsById(idRestaurant)) {
            if (restaurant.getFoodType() != null && !restaurant.getFoodType().equals("")) {
                restaurantRepository.updateFoodTypeById(idRestaurant, restaurant.getFoodType());
                result = ResponseEntity.status(200).build();
            }

            if (restaurant.getPriceAverage() != null && !restaurant.getPriceAverage().equals("")) {
                restaurantRepository.updatePriceAverageById(idRestaurant, restaurant.getPriceAverage());
                result = ResponseEntity.status(200).build();
            }

            if (restaurant.getOpeningTime() != null && !restaurant.getOpeningTime().equals("")) {
                restaurantRepository.updateOpeningTimeById(idRestaurant, restaurant.getOpeningTime());
                result = ResponseEntity.status(200).build();
            }

            if (restaurant.getClosingTime() != null && !restaurant.getClosingTime().equals("")) {
                restaurantRepository.updateClosinTimeById(idRestaurant, restaurant.getClosingTime());
                result = ResponseEntity.status(200).build();
            }

            if (restaurant.getDescription() != null && !restaurant.getDescription().equals("")) {
                restaurantRepository.updateDescriptionById(idRestaurant, restaurant.getDescription());
                result = ResponseEntity.status(200).build();
            }
        }
        return result;
    }
}

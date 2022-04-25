package bents.bentscadastro.user.controller;

import bents.bentscadastro.user.DTO.request.UserRestaurant;
import bents.bentscadastro.user.entity.Restaurant;
import bents.bentscadastro.user.entity.RestaurantDetailDTO;
import bents.bentscadastro.user.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/restaurants")
public class RestaurantController {
    @Autowired
    private RestaurantRepository restaurantRepository;

    @PostMapping
    public ResponseEntity registerRestaurant(@RequestBody @Valid Restaurant restaurant) {
        restaurantRepository.save(restaurant);
        return ResponseEntity.status(201).build();
    }

    @PostMapping("/registerAllRestaurant")
    public ResponseEntity registerAllRestaurant(@RequestBody @Valid List<Restaurant> listRestaurant) {
        restaurantRepository.saveAll(listRestaurant);
        return ResponseEntity.status(201).build();
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

    @GetMapping("/getRestaurantByCoordinates/{lat}/{lng}")
    private ResponseEntity getRestaurantByCoordinates(@PathVariable Float lat, @PathVariable Float lng) {
        List<RestaurantDetailDTO> restaurants = restaurantRepository.findRestaurantsWithInDistance(lat, lng, 5);
        if (restaurants.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(restaurants);
    }
}

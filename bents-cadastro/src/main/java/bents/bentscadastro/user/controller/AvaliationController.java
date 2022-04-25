package bents.bentscadastro.user.controller;

import bents.bentscadastro.user.entity.Avaliation;
import bents.bentscadastro.user.repository.AvaliationRepository;
import bents.bentscadastro.user.repository.RestaurantRepository;
import bents.bentscadastro.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/avaliation")
public class AvaliationController {

    @Autowired
    private AvaliationRepository avaliationRepository;

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity registerAvaliation(@RequestBody Avaliation avaliation) {
        if (userRepository.existsById(avaliation.getIdUser()) && restaurantRepository.existsById(avaliation.getIdRestaurant())) {
            avaliationRepository.save(avaliation);
            return ResponseEntity.status(201).build();
        }

        return ResponseEntity.status(404).build();
    }

    @GetMapping
    public ResponseEntity<List<Avaliation>> getAllAvaliation() {
        List<Avaliation> avaliations = avaliationRepository.findAll();
        if (avaliations.isEmpty()) {
            return ResponseEntity.status(204).build();
        }

        return ResponseEntity.status(200).body(avaliations);
    }

    @GetMapping("/userAvaliarions/{idUser}")
    public ResponseEntity<List<Avaliation>> getAvaliationsByIdUser(@PathVariable Integer idUser) {
        if (userRepository.existsById(idUser)) {
            List<Avaliation> avaliations = avaliationRepository.findByIdUser(idUser);
            if (avaliations.isEmpty()) {
                return ResponseEntity.status(204).build();
            }

            return ResponseEntity.status(200).body(avaliations);
        }

        return ResponseEntity.status(404).build();
    }

    @GetMapping("/restaurantAvaliations/{idRestaurant}")
    public ResponseEntity<List<Avaliation>> getAvaliationsByIdRestaurant(@PathVariable Integer idRestaurant) {
        if (restaurantRepository.existsById(idRestaurant)) {
            List<Avaliation> avaliations = avaliationRepository.findByIdRestaurant(idRestaurant);
            if (avaliations.isEmpty()) {
                return ResponseEntity.status(204).build();
            }

            return ResponseEntity.status(200).body(avaliations);
        }

        return ResponseEntity.status(404).build();
    }

//    @GetMapping("/getAvaliations")
}

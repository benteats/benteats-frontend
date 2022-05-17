package sptech.bentscadastro.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sptech.bentscadastro.user.entity.User;
import sptech.bentscadastro.user.repository.UserRepository;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity resgisterUser(@RequestBody User newUser) {
        System.out.println(newUser.getEmail());
        userRepository.save(newUser);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userRepository.findAll();
        if (users.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        System.out.println(users);
        return ResponseEntity.status(200).body(users);
    }

}

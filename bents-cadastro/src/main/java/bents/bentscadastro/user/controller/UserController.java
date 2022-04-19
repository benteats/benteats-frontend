package bents.bentscadastro.user.controller;

import bents.bentscadastro.user.entity.User;
import bents.bentscadastro.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository repository;

    @PostMapping
    public ResponseEntity postUser(@RequestBody @Valid User newUser) {
        repository.save(newUser);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity getUsers() {
        List<User> users = repository.findAll();
        if (users.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(users);
    }
}

package bents.bentscadastro.user.controller;

import bents.bentscadastro.user.DTO.request.LoginUserRequest;
import bents.bentscadastro.user.DTO.request.UpdateUserDto;
import bents.bentscadastro.user.entity.User;
import bents.bentscadastro.user.repository.RestaurantRepository;
import bents.bentscadastro.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static bents.bentscadastro.user.util.formatt.FormattUtil.formattPhone;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository repository;
    @Autowired
    RestaurantRepository restaurantRepository;

    @PostMapping
    public ResponseEntity resgisterUser(@RequestBody @Valid User newUser) {
        repository.save(newUser);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = repository.findAll();
        if (users.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(users);
    }

    @PatchMapping("/updateUserById/{idUser}")
        public ResponseEntity updateUserById(@PathVariable Integer idUser, @RequestBody UpdateUserDto updateUser) {
        ResponseEntity result = ResponseEntity.status(404).build();
        if (repository.existsById(idUser)) {

            if (updateUser.getName() != null && !updateUser.getName().equals("")) {
                repository.updateNameUserById(updateUser.getName(), idUser);
                result = ResponseEntity.status(200).build();
            }

            if (updateUser.getEmail() != null && !updateUser.getEmail().equals("")) {
                repository.updateEmailUserById(updateUser.getEmail(), idUser);
                result = ResponseEntity.status(200).build();
            }

            if (updateUser.getPhone() != null && !updateUser.getPhone().equals("")) {
                repository.updatePhoneUserById(updateUser.getPhone(), idUser);
                result = ResponseEntity.status(200).build();
            }

            if (updateUser.getCep() != null && !updateUser.getCep().equals("")) {
                repository.updateCepUserById(updateUser.getCep(), idUser);
                result = ResponseEntity.status(200).build();
            }

            if (updateUser.getState() != null && !updateUser.getState().equals("")) {
                repository.updateStateUserById(updateUser.getState(), idUser);
                result = ResponseEntity.status(200).build();
            }

            if (updateUser.getCity() != null && !updateUser.getCity().equals("")) {
                repository.updateCityUserById(updateUser.getCity(), idUser);
                result = ResponseEntity.status(200).build();
            }

            if (updateUser.getDistrict() != null && !updateUser.getDistrict().equals("")) {
                repository.updateDistrictUserById(updateUser.getDistrict(), idUser);
                result = ResponseEntity.status(200).build();
            }

            if (updateUser.getAddress() != null && !updateUser.getAddress().equals("")) {
                repository.updateAddressUserById(updateUser.getAddress(), idUser);
                result = ResponseEntity.status(200).build();
            }

            if (updateUser.getAddressNumber() != null) {
                repository.updateAddressNumberUserById(updateUser.getAddressNumber(), idUser);
                result = ResponseEntity.status(200).build();
            }

            if (updateUser.getLat() != null && !updateUser.getLat().equals("")) {
                repository.updateLatUserById(updateUser.getLat(), idUser);
                result = ResponseEntity.status(200).build();
            }

            if (updateUser.getLng() != null && !updateUser.getLng().equals("")) {
                repository.updateLatUserById(updateUser.getLng(), idUser);
                result = ResponseEntity.status(200).build();
            }

            return result;
        }
        return result;
    }

    @DeleteMapping("/{idUser}")
    public ResponseEntity deleteUserById(@PathVariable Integer idUser) {
        if (repository.existsById(idUser)) {
            repository.deleteById(idUser);
            return ResponseEntity.status(200).build();
        }

        return ResponseEntity.status(404).build();
    }

    @PostMapping("/loginUser")
    public ResponseEntity loginUser(@RequestBody LoginUserRequest loginUser) {
        if (repository.existsByEmailAndPassword(loginUser.getLogin(), loginUser.getPassword())) {
            repository.loginUser(loginUser.getLogin(), loginUser.getPassword());
            Integer idUser = repository.getIdUser(loginUser.getLogin());
            return ResponseEntity.status(200).body(idUser);
        }

        if (restaurantRepository.existsByEmailAndPassword(loginUser.getLogin(), loginUser.getPassword())) {
            restaurantRepository.loginUser(loginUser.getLogin(), loginUser.getPassword());
            Integer idUser = restaurantRepository.getIdUser(loginUser.getLogin());
            return ResponseEntity.status(200).body(idUser);
        }

        try {
            loginUser.setLogin(formattPhone(loginUser.getLogin()));
        } catch (java.text.ParseException e) {
            e.printStackTrace();
        }

        if (repository.existsByPhoneAndPassword(loginUser.getLogin(), loginUser.getPassword())) {
            repository.loginUser(loginUser.getLogin(), loginUser.getPassword());
            Integer idUser = repository.getIdUser(loginUser.getLogin());
            return ResponseEntity.status(200).body(idUser);
        }

        if (restaurantRepository.existsByPhoneAndPassword(loginUser.getLogin(), loginUser.getPassword())) {
            restaurantRepository.loginUser(loginUser.getLogin(), loginUser.getPassword());
            Integer idUser = restaurantRepository.getIdUser(loginUser.getLogin());
            return ResponseEntity.status(200).body(idUser);
        }

        return ResponseEntity.status(404).build();
    }

    @DeleteMapping("/logOffUser/{idUser}")
    public ResponseEntity logOffUser(@PathVariable Integer idUser) {
        if (repository.existsById(idUser)) {
            if (repository.existsByIdUserAndIsLoggedTrue(idUser)) {
                repository.logOff(idUser);
                return ResponseEntity.status(200).build();
            }

            if (repository.existsByIdUserAndIsLoggedFalse(idUser))
                return ResponseEntity.status(406).build();
        }

        return ResponseEntity.status(404).build();
    }

    @GetMapping("/authenticateSession/{idUser}")
    public ResponseEntity<Boolean> authenticateSession(@PathVariable Integer idUser) {

        if (repository.existsById(idUser)) {
            if (repository.existsByIdUserAndIsLoggedTrue(idUser)) {
                return ResponseEntity.status(200).body(true);
            }

            if (repository.existsByIdUserAndIsLoggedFalse(idUser)) {
                return ResponseEntity.status(200).body(false);
            }
        }

        return ResponseEntity.status(404).build();
    }
}

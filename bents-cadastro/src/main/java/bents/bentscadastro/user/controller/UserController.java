package bents.bentscadastro.user.controller;

import bents.bentscadastro.user.DTO.request.LoginUserRequest;
import bents.bentscadastro.user.DTO.request.UpdateUserDto;
import bents.bentscadastro.user.entity.User;
import bents.bentscadastro.user.repository.UserRepository;
import net.bytebuddy.asm.Advice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository repository;

    @PostMapping
    public ResponseEntity resgisterUser(@RequestBody @Valid User newUser) {
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

    @PatchMapping("/updateUserById/{idUser}")
    public ResponseEntity updateUserById(@PathVariable Integer idUser, @RequestBody UpdateUserDto updateUser) {
        ResponseEntity result = ResponseEntity.status(404).build();
        if (repository.existsById(idUser)) {

            if (updateUser.getName() != null && !updateUser.getName().equals("")){
                repository.updateNameUserById(updateUser.getName(), idUser);
                result = ResponseEntity.status(200).build();
            }

            if (updateUser.getEmail() != null && !updateUser.getEmail().equals("")){
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
            return ResponseEntity.status(200).build();
        }

        if (repository.existsByPhoneAndPassword(loginUser.getLogin(), loginUser.getPassword())) {
            repository.loginUser(loginUser.getLogin(), loginUser.getPassword());
            return ResponseEntity.status(200).build();
        }


        return ResponseEntity.status(404).build();
    }

    @DeleteMapping("/logOffUser/{idUser}")
    public ResponseEntity logOffUser(@PathVariable Integer idUser) {
        if (repository.existsById(idUser)) {
            if (repository.existsByIdAndIsLoggedTrue(idUser)) {
                repository.logOff(idUser);
                return ResponseEntity.status(200).build();
            }

            if (repository.existsByIdAndIsLoggedFalse(idUser))
                return ResponseEntity.status(406).build();
        }

        return ResponseEntity.status(404).build();
    }

}

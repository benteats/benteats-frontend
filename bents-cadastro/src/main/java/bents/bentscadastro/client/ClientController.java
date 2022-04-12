package bents.bentscadastro.client;

import bents.bentscadastro.client.clientDto.ClientDto;
import bents.bentscadastro.client.clientDto.PasswordDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/clients")
public class ClientController {

    @Autowired
    private ClientRepository repository;

    @PostMapping("/registerClient")
    public ResponseEntity registerClient(@RequestBody @Valid Client client) {
        repository.save(client);
        return ResponseEntity.status(200).build();
    }

    @GetMapping("/getAllClients")
    public ResponseEntity getAllClients() {
        List<Client> clients = repository.findAll();
        return ResponseEntity.status(200).body(clients);
    }

    @GetMapping("/getClientById/{idClient}")
    public ResponseEntity getClientById(@PathVariable Integer idClient) {
        if (repository.findAll().isEmpty()) {
            return ResponseEntity.status(202).build();
        }

        if (repository.existsById(idClient)) {
            Optional<Client> client = repository.findById(idClient);
            return ResponseEntity.status(200).body(client);
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @PostMapping("/loginClient/{email}/{password}")
    public ResponseEntity doLoginClient(@PathVariable String email, @PathVariable String password) {
//        List<Client> clients = repository.findAll();
        for (Client client : repository.findAll()) {
            if(client.doLogin(email, password)) {
                client.setLogged(true);
                return ResponseEntity.status(200).build();
            }
        }
        return ResponseEntity.status(202).build();
    }

    @DeleteMapping("/logoutClient/{email}")
    public ResponseEntity logoutClient(@PathVariable String email) {
        List<Client> clients = repository.findAll();
        for (Client client : clients) {
            if(client.getEmail().equals(email)) {
                client.setLogged(false);
                return ResponseEntity.status(200).build();
            }
        }
        return ResponseEntity.status(202).build();
    }

    @PatchMapping("/updateClient/{idUser}")
    public ResponseEntity updateClientById(@RequestBody ClientDto client, @PathVariable Integer idClient) {
        ResponseEntity result;
        if(repository.existsById(idClient)) {
            if (client.getName() != null) {
                repository.updateNameById(idClient, client.getName());
                result = ResponseEntity.status(200).build();
            }

            if (client.getPhone() != null) {
                repository.updatePhoneById(idClient, client.getPhone());
                result = ResponseEntity.status(200).build();
            }

            if (client.getEmail() != null) {
                repository.updateEmailById(idClient, client.getEmail());
                result = ResponseEntity.status(200).build();
            }

            if (client.getAddress() != null) {
                repository.updateAddressById(idClient, client.getEmail());
                result = ResponseEntity.status(200).build();
            }

            if (client.getCep() != null) {
                repository.updateCepById(idClient, client.getEmail());
                result = ResponseEntity.status(200).build();
            }

            if (client.getAddressNumber() != null) {
                repository.updateAddressNumberById(idClient, client.getEmail());
                result = ResponseEntity.status(200).build();
            }
        }
        result = ResponseEntity.status(404).build();
        return result;
    }

    @PatchMapping("/updatePasswordById/{idClient}")
    public ResponseEntity updatePasswordById(@RequestBody PasswordDto newPassword, @PathVariable Integer idClient) {
        if (repository.existsById(idClient)) {
            repository.updatePasswordById(idClient, newPassword.getPassword());
            return ResponseEntity.status(200).build();
        }

        return ResponseEntity.status(404).build();
    }

    @DeleteMapping("/deleteClient/{idClient}")
    public ResponseEntity deleteClient(@PathVariable Integer idClient) {
        if (repository.findAll().isEmpty()) {
            return ResponseEntity.status(202).build();
        }

        if (repository.existsById(idClient)) {
            repository.deleteById(idClient);
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }
}

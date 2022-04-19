package bents.bentscadastro.user.repository;

import bents.bentscadastro.client.Client;
import bents.bentscadastro.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface UserRepository extends JpaRepository<User, Integer> {
}

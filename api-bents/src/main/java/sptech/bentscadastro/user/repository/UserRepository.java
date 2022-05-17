package sptech.bentscadastro.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sptech.bentscadastro.user.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}

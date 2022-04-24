package bents.bentscadastro.user.repository;

import bents.bentscadastro.user.entity.Avaliation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AvaliationRepository extends JpaRepository<Avaliation, Integer> {

    List<Avaliation> findByIdUser(Integer idUser);

    List<Avaliation> findByIdRestaurant(Integer idRestaurant);


}

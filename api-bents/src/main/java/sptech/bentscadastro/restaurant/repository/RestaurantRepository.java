package sptech.bentscadastro.restaurant.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sptech.bentscadastro.restaurant.entity.Restaurant;

public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {
}

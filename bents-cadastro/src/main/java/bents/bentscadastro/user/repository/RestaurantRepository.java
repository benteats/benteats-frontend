package bents.bentscadastro.user.repository;

import bents.bentscadastro.user.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {

    @Modifying
    @Transactional
    @Query("update Restaurant r set r.foodType = ?2 where r.idRestaurant = ?1")
    void updateFoodTypeById(Integer idRestaurant, String value);

    @Modifying
    @Transactional
    @Query("update Restaurant r set r.priceAverage = ?2 where r.idRestaurant = ?1")
    void updatePriceAverageById(Integer idRestaurant, Double value);

    @Modifying
    @Transactional
    @Query("update Restaurant r set r.openingTime = ?2 where r.idRestaurant = ?1")
    void updateOpeningTimeById(Integer idRestaurant, String value);

    @Modifying
    @Transactional
    @Query("update Restaurant r set r.closingTime = ?2 where r.idRestaurant = ?1")
    void updateClosinTimeById(Integer idRestaurant, String value);

    @Modifying
    @Transactional
    @Query("update Restaurant r set r.description = ?2 where r.idRestaurant = ?1")
    void updateDescriptionById(Integer idRestaurant, String value);
}

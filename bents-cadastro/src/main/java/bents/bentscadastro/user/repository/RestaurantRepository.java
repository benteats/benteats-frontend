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

    boolean existsByEmailAndPassword(String email, String password);

    boolean existsByPhoneAndPassword(String email, String password);

    @Transactional
    @Query("select r.idRestaurant from Restaurant r where r.email = ?1 or r.phone = ?1")
    Integer getIdUser(String login);

    @Transactional
    @Modifying
    @Query("update Restaurant r set r.isLogged = true where r.email = ?1 or r.phone = ?1 and r.password = ?2")
    void loginUser(String login, String password);
}

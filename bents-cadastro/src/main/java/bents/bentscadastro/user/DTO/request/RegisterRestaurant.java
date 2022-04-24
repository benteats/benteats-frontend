package bents.bentscadastro.user.DTO.request;

import bents.bentscadastro.user.entity.Restaurant;
import bents.bentscadastro.user.entity.User;

public class RegisterRestaurant {
    private User user;
    private Restaurant restaurant;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }
}

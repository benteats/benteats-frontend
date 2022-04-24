package bents.bentscadastro.user.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
public class Avaliation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idAvaliation;
    private Date data;
    private Double rating;

    @NotBlank
    private String comment;
    private Integer idUser;
    private Integer idRestaurant;

    public Integer getIdAvaliation() {
        return idAvaliation;
    }

    public void setIdAvaliation(Integer idAvaliation) {
        this.idAvaliation = idAvaliation;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Integer getIdUser() {
        return idUser;
    }

    public void setIdUser(Integer idUser) {
        this.idUser = idUser;
    }

    public Integer getIdRestaurant() {
        return idRestaurant;
    }

    public void setIdRestaurant(Integer idRestaurant) {
        this.idRestaurant = idRestaurant;
    }
}

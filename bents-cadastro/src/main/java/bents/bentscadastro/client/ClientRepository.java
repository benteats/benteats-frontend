package bents.bentscadastro.client;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface ClientRepository extends JpaRepository<Client, Integer> {

    @Query("update Client c set c.name=?2 where idClient=?1")
    @Modifying
    @Transactional
    void updateNameById(Integer idClient, String value);

    @Query("update Client c set c.email=?2 where idClient=?1")
    @Modifying
    @Transactional
    void updateEmailById(Integer idClient, String value);

    @Query("update Client c set c.phone=?2 where idClient=?1")
    @Modifying
    @Transactional
    void updatePhoneById(Integer idClient, String value);

    @Query("update Client c set c.address=?2 where idClient=?1")
    @Modifying
    @Transactional
    void updateAddressById(Integer idClient, String value);

    @Query("update Client c set c.addressNumber=?2 where idClient=?1")
    @Modifying
    @Transactional
    void updateAddressNumberById(Integer idClient, String value);

    @Query("update Client c set c.cep=?2 where idClient=?1")
    @Modifying
    @Transactional
    void updateCepById(Integer idClient, String value);

    @Query("update Client c set c.password=?2 where idClient=?1")
    @Modifying
    @Transactional
    void updatePasswordById(Integer idClient, String value);
}

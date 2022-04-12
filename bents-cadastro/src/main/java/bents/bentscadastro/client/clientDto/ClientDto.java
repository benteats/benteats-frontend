package bents.bentscadastro.client.clientDto;

public class ClientDto {
    private String name;
    private String phone;
    private String email;
    private String cep;
    private String address;
    private Integer addressNumber;

    public ClientDto(String name, String phone, String email, String cep, String address, Integer addressNumber) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.cep = cep;
        this.address = address;
        this.addressNumber = addressNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getAddressNumber() {
        return addressNumber;
    }

    public void setAddressNumber(Integer addressNumber) {
        this.addressNumber = addressNumber;
    }
}

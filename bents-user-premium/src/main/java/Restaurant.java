public class Restaurant extends User{
    private String cnpj;
    private Integer qtdFavorited;

    public Restaurant(String name, String phone, String email, String password, String cnpj, Integer qtdFavorited) {
        super(name, phone, email, password);
        this.cnpj = cnpj;
        this.qtdFavorited = qtdFavorited;
    }

    @Override
    public String upgradeUser() {
        if (this.qtdFavorited > 20)
            super.setPremiun(true);
        return String.format("O usuario %s agora é um usuário premium", super.getName());
    }

    @Override
    public String toString() {
        return String.format("%s \n" +
                "CNPJ: %s \n" +
                "Quantidade de vezes que foi favoritado: %d",
                super.toString(),
                this.cnpj,
                this.qtdFavorited);
    }
}

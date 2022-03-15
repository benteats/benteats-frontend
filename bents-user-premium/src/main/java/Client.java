public class Client extends User{
    private Integer qtdEvaluation;

    public Client(String name, String phone, String email, String password, Integer qtdEvaluation) {
        super(name, phone, email, password);
        this.qtdEvaluation = qtdEvaluation;
    }

    @Override
    public String upgradeUser() {
        if(this.qtdEvaluation > 35)
            super.setPremiun(true);
        return String.format("Usuário %s agora é um usuário premium", super.getName());
    }

    @Override
    public String toString() {
        return String.format("%s \n" +
                "Quantidade de avaliações: %d",
                super.toString(),
                this.qtdEvaluation);
    }
}

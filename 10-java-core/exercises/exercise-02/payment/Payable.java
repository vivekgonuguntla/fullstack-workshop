public interface Payable {

    double getPaymentAmount();

    default void printPaymentInfo() {
        System.out.println(
            this.getClass().getSimpleName() +
            " payment amount: $" + getPaymentAmount()
        );
    }
}

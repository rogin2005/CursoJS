export const bootstrap = (): void => {
    enum OrderStatus { // lista e type alias
        PENDING, // default = 0 referencia cruzada
        DELIVERED = 'Entregue', // sem referencia cruzada
        CANCELED = 'Cancelado',
    }

    console.log(OrderStatus);
    //console.log(OrderStatus.DELIVERED);
    //console.log(OrderStatus[5678]);

    enum OrderStatus {
        WAITINGFORPAYMENT = 500,
        SENT = 'Enviado',
    }

    function changeOrderStatus(newStatus: OrderStatus): void {
        if (newStatus === OrderStatus.SENT) {
            // ... ENVIAR UM EMAIL PARA O CLIENTE
            console.log('Novo Status: ', newStatus);
        }
    }

    changeOrderStatus(OrderStatus.SENT);
};

export class Order { // Model

    public constructor(
        public _id: string = '',
        public customerId?: string, 
        public cartId?: string, 
        public finalPrice?: number,
        public shippingCity?: string,
        public shippingAdress?: string,
        public sippingDate?: string,
        public carditCardNumber?: string) {
    }


}



export class Contract{
    constructor(
        public name: String,
        public address: String,
        public totalPrice: number,
        public brokerName: String,
        public brokerAddress: String,
        public contractStartDate: Date,
        public contractEndDate: Date
    ){}
}
export class Customer { // Model
public constructor(
    public _id?: String,
    public fname?: String,
    public lname?: String,
    public mail?: String,
    public password?: String,
    public confirmpassword?: String,
    public phone?: String,
    public city?: String,
    public street?: String,
    public houseNumber?: Number) {
    }
}

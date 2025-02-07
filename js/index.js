class User{
    constructor(fullName, email, password) {
        this.fullName=fullName;
        this.email=email;
        this.password=password;
    }
}

let userArray=[];

// =================user management================== //

const createUser=()=>{

    const fullName=document.getElementById('fullName').value;
    const email=document.getElementById('registerEmail').value;
    const password=document.getElementById('registerPassword').value;

    // const hash= bcrypt.hashSync(password,bcrypt.genSaltSync(10));
    // console.log(hash);


    let createdUser=new User(fullName, email, password);
    let existsUserData=userArray.find(e=>e.email==email);
    if(existsUserData){
        alert('user email already exists');
        return;//programme terminate
    }
    userArray.push(createdUser);
    console.log(userArray)
}
const login=()=>{
    const email=$('#email').val();
    const password=$('#password').val();

    let existsUserData=userArray.find(e=>e.email==email);

    if(existsUserData){
        if(existsUserData.password==password){
            alert('login success');
        }else {
            alert('password incorrect');
            return;
        }
    }else{
        alert('user not found');
    }
}
// const clearAndLoad=(element)=>{
//
// }
class Customer{
    constructor(name, address, salary, nic) {
        this.name=name;
        this.address=address;
        this.salary=salary;
        this.nic=nic;
    }
}

const customerArray=[];

const createCustomer=()=>{
    const customer =new Customer(
        $('#name').val(),
        $('#address').val(),
        parseInt($('#salary').val()),
        $('#nic').val()
    );
    if (customerArray.find(e=>e.nic==customer.nic)){
        alert('nic already exists');
        return;
    }
    console.log(customer)
    customerArray.push(customer);
    console.log(customerArray);
}

const findCustomer=(id)=>{
    const nic=$('#nic').val();
    const customer=customerArray.find(e=>e.nic===customer.nic);
    if(customer){
        console.log(customer);
    }
}

const updateCustomer=(id)=> {
    let customer = findCustomer(id);
    if (customer) {
        $('#name').val(customer.name);
        $('#address').val(customer.address);
        $('#salary').val(customer.salary);
        $('#nic').val(customer.nic)
    } else {
        alert('customer not found');
    }
}

const deleteCustomer=(id)=>{
    let customer=findCustomer(id);
    if(customer){
        customerArray.splice(customerArray.indexOf(customer),1);
        alert('customer deleted');
        return;
    }else
        alert('customer not found');
}

const findAllCustomer =()=>{
    console.log(customerArray);
}
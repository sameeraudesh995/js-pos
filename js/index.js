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



class Customer{
    constructor(name, address, salary, nic) {
       this.name=name;
       this.address=address;
       this.salary=salary;
       this.nic=nic;
    }
}

const clearAndLoad=(element)=>{

}

const customerArray=[];

const createCustomer=()=>{
    const customer = new Customer(
        $('#name').val(),
        $('#address').val(),
        parseFloat($('#salary').val()),
        $('#nic').val(),
        );

    let existsData = customerArray.find(el=>el.el.nic==customer.nic);

    if (existsData) {
        alert('customer already exists');
        return;
    }

    customerArray.push(customer);

}

const findCustomer=(id)=>{

}

const updateCustomer=(id)=>{}

const deleteCustomer=(id)=>{}


const getAllCustomer=(id)=>{}



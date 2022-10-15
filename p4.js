//Given stored username and password and input username and password, Print if the user can login or not.
let stored_username="himanshu@gmail.com";
let stored_password="him123";
//login details
let username="himanshu@gmail.com";
let password="him123";
if (username == stored_username){
  if(password == stored_password){
    console.log("Login Successful");
}else {
    console.log("Invalid Password");
} }else {
  console.log("Invalid Credentials");
}


export const validateForm=(e)=>{
    if (!e.target.email.value) {
        alert("Email is required");
      } else if (!e.target.email.value) {
        alert("Valid email is required");
      } else if (!e.target.password.value) {
        alert("Password is required");
      } else if (
        e.target.email.value === "test@bsgroup.eu" &&
        e.target.password.value === "Test12!@"
      ) {
        e.target.email.value = "";
        e.target.password.value = "";
      } else {
        alert("Wrong email or password ");
        e.target.email.value = "";
        e.target.password.value = "";
        return false;
      }
}
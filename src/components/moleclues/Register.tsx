import { Button } from "@nextui-org/button";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {auth} from "../../lib/firebase"
import { createUserWithEmailAndPassword , } from "firebase/auth";

interface RegisterFormInterface {
 email : string,
 password : string,
 ConfirmPassword : string
}


const Register = () => {
  const { register, handleSubmit } = useForm<RegisterFormInterface>();
  async function onSubmit(values:RegisterFormInterface) {
    if(values.password === values.ConfirmPassword){
      createUserWithEmailAndPassword(auth,values.email,values.password)
      alert("DONE")
      console.log(values.email,values.password)
    }
    else{
      alert("Enter correct Password")
    }
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <Card className="p-8 w-96 flex flex-col gap-4">
        <CardHeader>
         <h1 className="text-2xl text-violet-600 font-bold ">Register Here</h1>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
         isRequired
          type="email"
          label="Email"
          defaultValue=""
          className="max-w-xs"
          {...register("email")}
        />
        <Input
         isRequired
          type="password"
          label="Password"
          defaultValue=""
          className="max-w-xs"
          {...register("password")}
        />
        <Input
         isRequired
          type="password"
          label="Confirm Password"
          defaultValue=""
          className="max-w-xs"
          {...register("ConfirmPassword")}
        />
        <Button type = "submit" color = "secondary">Register</Button>
        </form>
        <CardFooter>
          <Link to = "/login" className=" underline text-purple-600">Already Register ? Login here</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;

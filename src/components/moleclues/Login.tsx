import { Button } from "@nextui-org/button";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../lib/firebase";
import { signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup } from "firebase/auth";


interface LoginFormInterface {
 email : string,
 password : string,
}

const provider = new GoogleAuthProvider();

const Login = () => {
  const navigate  = useNavigate()
  const { register, handleSubmit } = useForm<LoginFormInterface>();
  async function onSubmit(values:LoginFormInterface) {
    console.log(values.email,values.password)
    signInWithEmailAndPassword(auth,values.email,values.password).then(
      ()=>{
        navigate('/')
      }
    )
  }
  async function signinWithGoogle(){
      signInWithPopup(auth,provider).then(
        ()=>{
          navigate('/')
        }
      )
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <Card className="p-8 w-96 flex flex-col gap-4">
        <CardHeader>
         <h1 className="text-2xl text-violet-600 font-bold ">Login Here</h1>
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
        <Button type = "submit" color = "secondary">Login</Button>
        <Button type = "submit" onClick={signinWithGoogle} >Signup with Google</Button>
        </form>
        <CardFooter>
          <Link to = "/signup" className=" underline text-purple-600">New user ? Register here</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;


import { Button } from "@nextui-org/button";
import { Card, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";

interface LoginFormInterface {
 email : string,
 password : string,
}


const Login = () => {
  const { register, handleSubmit } = useForm<LoginFormInterface>();
  async function onSubmit(values:LoginFormInterface) {
    console.log(values.email,values.password)
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <Card className="p-8 w-96 flex flex-col gap-4">
        <CardHeader>
         <h1 className="text-2xl text-violet-600 font-bold ">Login Here</h1>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
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
        </form>
      </Card>
    </div>
  );
};

export default Login;

import { Button } from "@nextui-org/button";
import { Card, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";

const Login = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <Card className="p-8 w-96 flex flex-col gap-4">
        <CardHeader>
         <h1 className="text-2xl text-violet-600 font-bold ">Login Here</h1>
        </CardHeader>
        <form>
        <Input
         isRequired
          type="email"
          label="Email"
          defaultValue=""
          className="max-w-xs"
        />
        <Input
         isRequired
          type="password"
          label="Password"
          defaultValue=""
          className="max-w-xs"
        />
        <Button type = "submit" color = "secondary">Login</Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;

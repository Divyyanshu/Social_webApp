import {useForm } from "react-hook-form";
import { child, ref, set, get } from "firebase/database";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import {auth, db} from "../../lib/firebase"
import { useEffect, useState } from "react";


export default function Account() {
  const [userData , setUserData]  = useState({bio: 'jiio', name: 'Divyanshu tailor'})
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit } = useForm();

  // const userRef = ref(db, 'users/' + auth.currentUser?.uid);
  useEffect(()=>{
    get(child(ref(db), `users/${auth.currentUser?.uid}`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setUserData({
          name : snapshot.val().name,
          bio : snapshot.val().bio
        })
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  },[])
  
  async function onSubmit(values: any) {
      set(ref(db, 'users/' + auth.currentUser?.uid), {
        name: values.name,
        bio: values.bio,
      });
  }

  return (
    <>
    <p>Name : {userData.name}</p>
    <p>Bio : {userData.bio}</p>
    <p>Profile : </p>
      <Button onPress={onOpen} color="primary">
        Upload
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Input
                    autoFocus
                    type="text"
                    label="Name"
                    placeholder="Enter Your name"
                    variant="bordered"
                    {...register("name")}
                  />
                  <Input
                    autoFocus
                    type="text"
                    label="Bio"
                    placeholder="Enter Your bio"
                    variant="bordered"
                    {...register("bio")}
                  />
                  <Button color="primary" type="submit" onPress={onClose}>
                    Upload
                  </Button>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

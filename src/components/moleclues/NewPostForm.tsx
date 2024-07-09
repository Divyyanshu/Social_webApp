import { useForm } from "react-hook-form";
import { ref, uploadBytes } from "firebase/storage";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { bucket } from "../../lib/firebase";

export default function NewPostForm() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit } = useForm();

  const storageRef = ref(bucket, "posts/post1");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function onSubmit(values: any) {
    uploadBytes(storageRef, values.image).then(() => {
      console.log("Uploaded an array!");
    });
    console.log(values)
  }

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Open Modal
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
                    type="file"
                    accept=".jpg"
                    label="Post"
                    placeholder="Upload your Post"
                    variant="bordered"
                    {...register("image")}
                  />
                  <Button color="primary" type="submit" onPress={onClose}>
                    Sign in
                  </Button>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/modal"
import { useForm } from "react-hook-form";


const Account = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit } = useForm();

  async function onSubmit(values: any) {
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
                    Upload
                  </Button>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default Account
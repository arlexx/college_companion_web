import {
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { HouseGif } from "../../../public";
import { useEffect } from "react";

export function Success() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);
  return (
    <>
      <Button onClick={onOpen}>Trigger modal</Button>

      <Modal onClose={onClose} isOpen={isOpen} size={"xl"} isCentered>
        <ModalOverlay />
        <ModalContent className="py-32 px-6 h-[500px] flex flex-col items-center justify-center gap-y-8">
          <h1 className="text-primary font-medium text-2xl">
            Welcome to Homehub
          </h1>
          <Image src={HouseGif} width={184} height={161} alt="" />
          <p className="text-sec text-center">
            We are so thrilled to have you join the team. Ready to let us guide
            you home?
          </p>
          <button onClick={onClose} className="bg-primary px-4 py-2 text-white">
            Lets explore
          </button>
        </ModalContent>
      </Modal>
    </>
  );
}

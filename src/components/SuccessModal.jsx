"use client";
import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
} from "@nextui-org/react";
import { MdCheckCircle } from "react-icons/md";
const SuccessModal = () => {
  return (
    <>
      <Modal
        backdrop={"blur"}
        isOpen={true}

        // onClose={() => {}}
      >
        <ModalContent>
          {(onClose) => (
            <d>
              {/* <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader> */}
              <ModalBody>
                <div className="w-56 mx-auto">
                  <div className="my-8 flex justify-center items-center">
                    <div className="flex justify-center items-center">
                      <MdCheckCircle className="text-6xl text-green-500" />
                    </div>
                    <div>
                      <h1 className="font-bold text-xl">Thank You</h1>
                      <div className="text-sm">Review Submitted</div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Button
                      className="bg-gray-900 text-white rounded-full"
                      onPress={onClose}
                    >
                      Learn More
                    </Button>
                    <Button
                      variant="bordered"
                      className="rounded-full border-gray-900"
                      onPress={onClose}
                    >
                      Leave another Review
                    </Button>
                  </div>
                </div>
              </ModalBody>
            </d>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SuccessModal;

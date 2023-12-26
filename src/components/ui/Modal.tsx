import { Dispatch, FormEvent, Fragment, SetStateAction, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

import Button from "./Button";
import Input from "./Input";
import TickCircle from "../../assets/svg/tick-circle.svg";

type ModalProps = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ openModal, setOpenModal }: ModalProps) => {
  const [emailInput, setEmailInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const mutation = useMutation({
    mutationFn: (data: { email: string }): any => {
      return axios.post(
        "https://api.blog.redberryinternship.ge/api/login",
        data
      );
    },
    onSuccess: () => {
      // Handle success
      setSuccess(true);
    },
    onError: () => {
      // Handle error
      if (emailInput.endsWith("@redberry.ge")) {
        setErrorMessage("ელ-ფოსტა არ მოიძებნა");
      } else {
        setErrorMessage("ელ-ფოსტა უნდა მთავრდებოდეს @redberry.ge-თი");
      }
    },
  });

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailInput === "") return;

    // Call mutation for checking email
    mutation.mutate({ email: emailInput });
  };

  const handleInputChange = (input: string) => {
    setErrorMessage("");
    setEmailInput(input);
  };

  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={setOpenModal}
      >
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
              onClick={() => setOpenModal(false)}
            />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block w-[480px] pt-[20px] pb-[40px] px-[24px] overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl  sm:align-middle ">
              <div className="pb-[24px] text-center">
                <div className="flex justify-end">
                  <XIcon
                    className="w-5 h-auto cursor-pointer"
                    onClick={() => setOpenModal(false)}
                  />
                </div>
                {!success && (
                  <h2 className="text-[#1A1A1F] text-[24px] font-bold">
                    შესვლა
                  </h2>
                )}
              </div>
              {success ? (
                <div>
                  <div className="flex flex-col gap-y-[16px] items-center">
                    <img src={TickCircle} alt="tick circle" />
                    <h3 className="text-[#1A1A1F] text-[20px] leading-[28px] font-bold">წარმატებული ავტორიზაცია</h3>
                  </div>
                  <div className="mt-[24px]">
                    <Button propClassName="w-full" onClick={() => setOpenModal(false)}>
                      კარგი
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={submitHandler}>
                  <div className="flex flex-col gap-y-[8px]">
                    <Input
                      label="ელ-ფოსტა"
                      name="email"
                      placeholder="Example@redberry.ge"
                      setInput={handleInputChange}
                      errorMessage={errorMessage}
                    />
                  </div>
                  <div className="mt-[24px]">
                    <Button type="submit" propClassName="w-full">
                      შესვლა
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;

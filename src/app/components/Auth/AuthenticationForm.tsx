"use client";

import { MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { handleSignIn, handleSignUp } from "./event-handlers";
import EmailInput from "../Form/Input/EmailInput";
import NicknameInput from "../Form/Input/NicknameInput";
import PasswordInput from "../Form/Input/PasswordInput";
import GoGoblinButton from "../Form/Button/GoGoblinButton";

export default function AuthenticateForm() {
  const [isAlradyRegistered, setIsAlreadyRegistered] = useState(true);
  const router = useRouter();

  function toggleAuthenticationForm(event: MouseEvent) {
    event.preventDefault();

    setIsAlreadyRegistered(!isAlradyRegistered);
  }

  function onSignUp() {
    return handleSignUp(router);
  }

  function onSignIn() {
    return handleSignIn(router);
  }

  const buttonMessage = isAlradyRegistered
    ? "Not registered yet ?"
    : "Already an account ?";

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-center text-xl">
        {isAlradyRegistered ? "Connect to your account" : "Create your account"}
      </p>
      <button
        className="p-2 m-2 text-xs outline-none focus:outline-none underline hover:italic"
        onClick={toggleAuthenticationForm}
      >
        {buttonMessage}
      </button>
      <form
        className="m-2 p-2 flex flex-col justify-center items-center pb-10"
        onSubmit={isAlradyRegistered ? onSignIn() : onSignUp}
      >
        {isAlradyRegistered || <EmailInput />}
        <NicknameInput />
        <PasswordInput />
        <GoGoblinButton />
      </form>
    </div>
  );
}

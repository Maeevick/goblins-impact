import { FormEvent } from "react";
import { signIn, SignInResponse } from "next-auth/react";
import {
  Router,
  SignInCredentialsDto,
  SignInFormProps,
  SignInProvider,
  SignUpCredentialsDto,
  SignUpFormProps,
} from "./types";

function sendSignUpRequest(credentials: SignUpCredentialsDto) {
  return fetch("/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
}

function sendSignInRequest(
  signInProvider: SignInProvider,
  { nickname, password }: SignInCredentialsDto
) {
  return signInProvider("credentials", {
    redirect: false,
    callbackUrl: "/game",
    nickname,
    password,
  });
}

function maySendSignInRequest(
  signInProvider: SignInProvider,
  { nickname, password }: SignInCredentialsDto
) {
  return function (signUpResponse: Response) {
    if (signUpResponse?.ok) {
      return sendSignInRequest(signInProvider, { nickname, password });
    }
  };
}

function mayRedirectToSignInTargetUrl(router: Router) {
  return function (signInResponse: SignInResponse | undefined) {
    if (signInResponse?.ok && signInResponse.url) {
      router.push(signInResponse.url);
    }
  };
}

export function handleSignUp(router: Router) {
  return function (event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const { nickname, email, password } = event.target as typeof event.target &
      SignUpFormProps;

    const credentials = {
      nickname: nickname.value,
      email: email.value,
      password: password.value,
    };

    return sendSignUpRequest(credentials)
      .then(maySendSignInRequest(signIn, credentials))
      .then(mayRedirectToSignInTargetUrl(router));
  };
}

export function handleSignIn(router: Router) {
  return function (event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const { nickname, password } = event.target as typeof event.target &
      SignInFormProps;

    const credentials = {
      nickname: nickname.value,
      password: password.value,
    };

    return sendSignInRequest(signIn, credentials).then(
      mayRedirectToSignInTargetUrl(router)
    );
  };
}

import { signIn } from "next-auth/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export type Router = AppRouterInstance;
export type SignInProvider = typeof signIn;

export type SignUpFormProps = {
  nickname: { value: string };
  email: { value: string };
  password: { value: string };
};

export type SignInFormProps = {
  nickname: { value: string };
  password: { value: string };
};

export type SignUpCredentialsDto = {
  nickname: string;
  email: string;
  password: string;
};

export type SignInCredentialsDto = {
  nickname: string;
  password: string;
};

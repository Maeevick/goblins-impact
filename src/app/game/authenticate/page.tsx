import Header from "@/app/components/Header";
import HomeLink from "@/app/components/HomeLink";
import PageTitle from "@/app/components/PageTitle";
import SignInForm from "@/app/components/Auth/AuthenticationForm";

import { GAME_DATA } from "@/data/game";
import AuthenticateForm from "@/app/components/Auth/AuthenticationForm";

export default function Authenticate() {
  return (
    <>
      <Header description={GAME_DATA.header} action={<HomeLink />} />
      <PageTitle title={GAME_DATA.title} />
      <AuthenticateForm />
    </>
  );
}

import Image from "next/image";

export default function GoblinsImage() {
  return (
    <Image
      src="/images/maeevick.png"
      alt="portrait"
      width={100}
      height={100}
      priority
    />
  );
}

import Image from "next/image";

export default function GoblinsImage() {
  return (
    <Image
      src="/images/maeevick.png"
      alt="portrait"
      width={80}
      height={80}
      priority
    />
  );
}

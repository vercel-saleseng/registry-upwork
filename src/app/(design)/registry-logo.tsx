import Image from "next/image";

export function RegistryLogo() {
  return (
    <>
      <div className="flex-shrink-0 rounded-md bg-primary p-1">
        <Image src="/upwork.svg" alt="Upwork Logo" width={32} height={32} />
      </div>
      <span className="font-semibold">Registry</span>
    </>
  );
}

import Image from 'next/image'
export default async function Page() {
  return (
    <>
      <p className='text-center '> Welcome to our About page! This page is about me.</p>
      <Image
          className="mx-auto mt-2"
          src="/assets/images/turborepo-dark.svg"
          alt="Crowdin Translation Management System"
          width={128}
          height={26}
        />
    </>
  );
}

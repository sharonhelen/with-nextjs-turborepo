import Image from "@repo/ui/img";
import Vercel from '/vercel.svg'

export default function Home(): React.ReactNode {
  return (
    <div>
      <Image src="/google.png" width={100} height={100}/>
      <Vercel />
    </div>
  );
}

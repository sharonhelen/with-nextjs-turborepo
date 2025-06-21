import Image from "@repo/ui/img";
import Vercel from '@/assets/images/google.svg'

export default function Home(): React.ReactNode {
  return (
    <div>
      <Image src="/google.png" width={100} height={100} alt="google"/>
      <Vercel width={100} height={100}/>
    </div>
  );
}

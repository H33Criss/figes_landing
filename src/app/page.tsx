import { Caracteristicas } from "@/components";
import { LandingPage } from "@/components/home/presentation/LandingPage";


export const metadata = {
  title: 'Figes SPA',
  description: 'SEO Title',
};


export default function Home() {
  return (
    <div className="flex flex-col" >
      <LandingPage />
      <Caracteristicas />
    </div>
  )
}

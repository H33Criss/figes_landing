import { LandingPage } from "@/components";


export const metadata = {
  title: 'Figes SPA',
  description: 'SEO Title',
};


export default function Home() {
  return (
    <div className="flex flex-col" >
      <LandingPage />
    </div>
  )
}

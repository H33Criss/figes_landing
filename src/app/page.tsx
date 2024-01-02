import { PresentationImage } from "@/components";


export const metadata = {
  title: 'Figes SPA',
  description: 'SEO Title',
};


export default function Home() {
  return (
    <div className="grid grid-cols-6" >
      <div className="col-span-3">

      </div>
      <div className="col-span-3">
        <PresentationImage />

      </div>
    </div>
  )
}

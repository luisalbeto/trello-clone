
import Formulario from "@/components/ui/formulario";
import { Model1 } from "@/components/ui/model1";
import { Model2 } from "@/components/ui/model2";
import { Model3 } from "@/components/ui/model3";
import { Model4 } from "@/components/ui/model4";
import { Model5 } from "@/components/ui/model5";
import { Model6 } from "@/components/ui/model6";
import { Model7 } from "@/components/ui/model7";


import localFont from "next/font/local";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2"
});

const MarketingPage = () => {
  return(

    <div
      className="flex items-center justify-center flex-col 
    ">
      <div >
       
        <Model1/>
        <Model2/>
        <div className="flex items-center justify-center flex-col ">
          <h1 className="text-black text-2xl font-extrabold ">Apuntate a la waiting list</h1>
        <br/>
        <button className="button
                rounded-full
                p-5
                bg-lime-500
                text-black
                font-bold
                flex
                items-center
                hover:bg-lime-300">
            <a href="#register"> WOOWIZATE</a>

        </button>
        <br/>
        <h2 className="text-black text-2xl font-extrabold">www.woowii.hr.com</h2>
        </div>
        <Model3/>
        <Model4/>
        <Model7/>
       <section id="register" className="bg-white relative flex items-start justify-start flex-col">
        <div className="flex items-center justify-center">
        <Model5/>
        <Formulario/>
        
        
        
        </div>    
       </section>
       <Model6/>
      </div>
    </div>
  )
}

export default MarketingPage;
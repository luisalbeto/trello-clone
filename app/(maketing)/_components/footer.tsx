import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export const Footer = () => {



  return(
    <div className="fixed bottom-0 w-full px-4 bg-indigo-800 text-lime-500">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between
        ">
               <Logo/>
          <p className="items-center text-center text-xs text-lime-500">
          &copy; 2024 Woowii Inc. All rights reserved.
        </p>
          <div className="space-x-4 md:bloc md:w-auto flex items-center justify-between w-full">
            <Button size="sm" variant="ghost">
         
              Politica de privacidad
    
            </Button>
            <Button size="sm" variant="ghost">

              Politica de Cookies

            </Button>

          </div>
      </div>
    </div>
  );
};
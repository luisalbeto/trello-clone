import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({
  children,
}:{
  children: React.ReactNode;
}) => {
  return(
    <div className="h-full ">
      <Navbar/>
     <main 
      className="pt-10 pb-5 bg-white
        ">
       {children}
       <Footer/>
     </main>
 
    </div>
  )
}

export default MarketingLayout;
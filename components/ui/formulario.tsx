"use client"
import axios from 'axios';
import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/validations/userSchema";
import toast from 'react-hot-toast';
import { useFormik } from 'formik';


const Formulario = () => {
  const {register, watch, formState: {errors}} = useForm({
    resolver: zodResolver(userSchema)
  })


  const formik = useFormik({
    initialValues: {
        name: '', 
        email: '',
    },
    onSubmit: values => {
      axios.post('api/register', values)
      .then(() =>{
        toast.success('Exito!')
     
      })
      .catch((error) => {
        toast.error('Algo ha ido mal')
      })
  
      
    },
  });

  
  return(
    <div>
      <form onSubmit={formik.handleSubmit}>
      <div>
        <label className="font-sans font-bold text-2xl">Como te llaman tus Colegas?</label>
        <br/>
        <input className="bg-lime-200 rounded-sm" type="text" id="name" value={formik.values.name} onBlur={formik.handleBlur}   onChange={formik.handleChange} ></input>
    </div>
    <br></br>
    <div>
        <label className="font-sans font-bold text-2xl">Email</label>
        <br/>
        <input className="bg-lime-200 rounded-sm"type="email" id="email" value={formik.values.email} onBlur={formik.handleBlur}   onChange={formik.handleChange} ></input>

    </div>
    <br></br>

    <div className='relative flex items-start justify-center flex-col'>
        <label className="font-sans font-bold">Aceptar Terminos y condiciones</label>

        <input className="bg-lime-200 rounded-sm" type="checkbox" id="checkbox" onChange={formik.handleChange} ></input>
    </div>
    <br/>
    
    <div>

        <button className="button
                rounded-full
                p-5
                bg-lime-500
                text-black
                font-sans
                font-semibold
                text-xl
                flex
                items-center
                hover:bg-lime-300"  type="submit">Apuntame a la Waiting list
                </button>
        
    </div>
      </form>
      <div>
      </div>
    </div>
        

  )
}

export default Formulario;


import { z } from 'zod'

export const userSchema = z.object({
    name: z.string().min(3,{
        message: 'Que nombre tan corto! intentalo mejor'
    }).max(200, {
        message: 'Tampoco te pases...'
    }),

    email: z.string().email({
        message:'Debe ser un correo real'
    })

})


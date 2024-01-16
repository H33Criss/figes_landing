'use client';

import { sendEmail } from '@/actions';
import { useModalStore } from '@/store';
import { Button, Input, Select, SelectItem, Textarea, useDisclosure } from '@nextui-org/react'
import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
interface FormInputs {
    name: string,
    email: string,
    phone: string,
    message: string,
    subject: string,

}

const posiblesSubject=[
    'Cotizacion de Productos',
    'Venta personalizada',
    'Consultar por producto especifico',
    'Instalacion sistema acuicultura',
];
export const FormContact = () => {
    const getModal = useModalStore(state => state.getModal)
    const [sendingEmail, setSendingEmail] = useState<boolean>(false)
    const { register, handleSubmit,reset, formState: { errors, }, getValues } = useForm<FormInputs>();

    const onSubmit = async (data: FormInputs) => {
        setSendingEmail(true)
        await sendEmail({ ...data, phone:`+ 56 9 ${data.phone}` }).then(resp => {
            getModal('contact-success-modal')?.onOpen(resp.message)
            setSendingEmail(false)
            reset();
        }).catch((error:any)=>{
            getModal('contact-error-modal')?.onOpen(error.message)
            setSendingEmail(false)
        })
    }

    return (
        <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Select
                {...register('subject', { required: 'El Asunto es requerido' })}
                    label="Asunto"
                    placeholder="Selecciona un asunto"
                    errorMessage={errors.subject?.message}
                        isInvalid={errors.subject && true}
                    
                >          
                    {
                        posiblesSubject.map(subject =>(
                            <SelectItem   key={subject} value={subject}>
                            {subject}
                            </SelectItem>
                        ))
                    }         
                </Select>
                </div>
            </div>
            <div className="mb-6">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input
                        {...register('name', { required: 'El nombre es requerido' })}
                        errorMessage={errors.name?.message}
                        isInvalid={errors.name && true}
                        type="text" name='name' label="Nombre o Empresa" />
                </div>
            </div>
            <div className="mb-6">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input
                        // startContent={
                        //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        // } 
                        {...register('email', {
                            required: 'El correo es requerido',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Ingresa un correo electrónico válido',
                            },
                        })}
                        errorMessage={errors.email?.message}
                        isInvalid={errors.email && true}
                        type="email" name='email' label="Tu Correo electronico" />
                </div>
            </div>
            <div className="mb-6">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input
                    startContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">+56</span>
                          <span className="ml-1 text-default-400 text-small">9</span>
                        </div>
                      }
                        {...register('phone', { 
                            required: 'El teléfono es requerido',
                            minLength:{
                                value:8,
                                message:'Telefono invalido'
                            }, 
                            maxLength:{
                                value:8,
                                message:'Telefono invalido'
                            }, 
                            validate:(value)=>{
                                if(isNaN(Number(value))) return 'Telefono no puede contener letras'
                                return true;
                            }
                        
                    })}
                        errorMessage={errors.phone?.message}
                        isInvalid={errors.phone && true}
                        inputMode='numeric'
                        type='tel'
                        maxLength={8}
                        name='phone' label="Telefeno de contacto" />        
                </div>
            </div>
            <div className="mb-6">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Textarea
                        {...register('message', { required: 'El mensaje es requerido' })}
                        errorMessage={errors.message?.message}
                        isInvalid={errors.message && true}
                        label="Tu Mensaje"
                        placeholder="Escribe tu mensaje aqui"
                        className="w-full"
                    />
                </div>
            </div>
            <div>
                <Button isLoading={sendingEmail} isDisabled={sendingEmail} disabled={sendingEmail} type='submit' color='primary' variant='shadow'
                    className={
                        clsx(
                            'w-full py-6',
                            {
                                'bg-blue-300 shadow-none': sendingEmail,

                            }
                        )
                    }

                >
                    {
                        !sendingEmail
                            ? 'Enviar mensaje'
                            : 'Enviando mensaje por correo...'
                    }
                </Button>
            </div>
        </form>
    )
}

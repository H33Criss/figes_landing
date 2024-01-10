'use client';

import { sendEmail } from '@/actions';
import { useModalStore } from '@/store';
import { Button, Input, Textarea, useDisclosure } from '@nextui-org/react'
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
export const FormContact = () => {
    const getModal = useModalStore(state => state.getModal)
    const [sendingEmail, setSendingEmail] = useState<boolean>(false)
    const { register, handleSubmit, formState: { errors, }, getValues } = useForm<FormInputs>();

    const onSubmit = async (data: FormInputs) => {
        setSendingEmail(true)
        await sendEmail({ ...data, subject: 'Test Formulario' }).then(resp => {
            getModal('contact-modal')?.onOpen()
            setSendingEmail(false)
        })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input
                        {...register('name', { required: 'El nombre es requerido' })}
                        errorMessage={errors.name?.message}
                        isInvalid={errors.name && true}
                        type="text" name='name' label="Tu Nombre" />
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
                        type="email" name='email' label="Email" />
                </div>
            </div>
            <div className="mb-6">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input
                        {...register('phone', { required: 'El teléfono es requerido' })}
                        errorMessage={errors.phone?.message}
                        isInvalid={errors.phone && true}
                        type="text" name='phone' label="Tu telefeno" />
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

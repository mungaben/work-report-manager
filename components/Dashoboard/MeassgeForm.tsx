import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
interface IFormInputs {
    firstName: string
    lastName: string
}
const MeassgeForm = () => {
    const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>()
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true })} />
                {errors.firstName && "First name is required"}
                <input {...register("lastName", { required: true })} />
                {errors.lastName && "Last name is required"}
                <input type="submit" />
            </form>
        </div>
    )
}

export default MeassgeForm
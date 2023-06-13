import React from "react";
import { useForm } from "react-hook-form";

interface IFormInputs {
    name: string
    showAge: boolean
    age: number
    content: string
    userid: string
}

const MeassgeForm = () => {
    const { register, watch, formState: { errors }, handleSubmit } = useForm<IFormInputs>();
    const watchShowAge = watch("showAge", false); // you can supply default value as second argument
    const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
    const watchFields = watch(["content"]); // you can also target specific fields by their names
    console.log("watchfielsds in text",watchFields[0]);
    


    // Callback version of watch.  It's your responsibility to unsubscribe when done.
    React.useEffect(() => {
        const subscription = watch((value, { name, type }) => console.log(value, name, type));
        return () => subscription.unsubscribe();
    }, [watch]);

    const onSubmit = (data: IFormInputs) => console.log(data);
  
      
        const value = watchFields[0];
        if (value?.length > 2) {
            // Manually set the error if the character limit is exceeded
            errors.content = { type: "maxLength", message: "Maximum character limit exceeded." };
            console.log("error", errors.content);
            
        } else {
            // Clear the error if the input is within the limit
            delete errors.content;
        }
  
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                type="text"
                    {...register("content", { required: true })}
                    // onChange={handleContentChange}
                />
                {errors.content?.type === "required" && (
                    <p>This field is required.</p>
                )}
                {errors.content?.type === "maxLength" && (
                    <p>{errors.content.message}</p>
                )}
                {/* <input type="checkbox" {...register("showAge")} /> */}
                {/* based on yes selection to display Age Input*/}
                {/* {watchShowAge && (
          <input type="number" {...register("age", { min: 50 })} />
        )} */}

                <input type="submit" />
            </form>
        </>
    );
}
export default MeassgeForm;

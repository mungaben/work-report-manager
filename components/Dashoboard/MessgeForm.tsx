
"use client"

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSession } from 'next-auth/react';
import axios from "axios";
import {useRouter} from "next/navigation";
import { useMessageStore } from "@/app/utils/Stores/Messages";
import { toast } from "react-hot-toast";

interface IFormInputs {
    name: string
    showAge: boolean
    age: number
    content: string
    userid: string
}
type messageFormProps = {
    receiverId?: string|null
}

const MeassgeForm :React.FC<messageFormProps>= ({receiverId}) => {
    const [showinput, setshowinput] = useState(false)
    const { register, watch, formState: { errors }, handleSubmit } = useForm<IFormInputs>();
    const watchShowAge = watch("showAge", false); // you can supply default value as second argument
    const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
    const watchFields = watch(["content"]); // you can also target specific fields by their names
    console.log("watchfielsds in text", watchFields[0]);
    const { data: session } = useSession();
    const router = useRouter();
    const { addMessage } = useMessageStore();
    







    // Callback version of watch.  It's your responsibility to unsubscribe when done.
    React.useEffect(() => {
        const subscription = watch((value, { name, type }) => console.log(value, name, type));
        return () => subscription.unsubscribe();
    }, [watch]);

    const onSubmit = (data: IFormInputs) => {
        console.log("data",data);
        const messages={
            content: data.content,
            authorId:session?.user?.id as string,
            receiverId:receiverId ?? null,
        }
        addMessage(messages);
            toast.success("Message Sent");
            router.refresh();
            
        // data
        // axios.post("/api/Messages",{
        //     content: data.content,
        //     authorId:session?.user?.id,
        //     receiverId:receiverId,
        // } ).then((res) => {
            
            

        // }).catch((error)=>{
        //     toast.error("Something went wrong");
           
        // });
        setshowinput((prev) => !prev);

    }


    const value = watchFields[0];
    if (value?.length > 150) {
        // Manually set the error if the character limit is exceeded
        errors.content = { type: "maxLength", message: "Maximum character limit exceeded." };
        console.log("error", errors.content);

    } else {
        // Clear the error if the input is within the limit
        delete errors.content;
    }

    return (
        <div className="  w-full">
            {
                !showinput ? <div className=" rounded-md ">
                    <button type="button" onClick={() => setshowinput((prev) => !prev)}>
                        <p>text</p>
                    </button>
                </div> :
                    <>

                        <form onSubmit={handleSubmit(onSubmit)} className=" rounded-md p-1 m-1 ">
                            <textarea
                            className=" rounded-md p-1 m-1 overflow-x-auto"
                            placeholder="Enter your message"
                            rows={3}
                            cols={20}
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
                        <button type="button" onClick={() => setshowinput((prev) => !prev)}> close</button>
                    </>
            }
        </div>
    );
}
export default MeassgeForm;

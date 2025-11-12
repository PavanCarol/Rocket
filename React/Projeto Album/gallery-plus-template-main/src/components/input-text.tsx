import {type VariantProps,tv} from 'tailwind-variants';
import Icon from "./icon";
import Text from "./text";
import type { ComponentProps, ReactNode } from "react";

export const InputTextContainerVariants = tv({
    base: "flex flex-col gap-1"
})

export const inputTextWrapperVariants = tv({
    base:`
    border border-solid border-border-primary
    focus:border-border-active bg-transparent
    rounded flex items-center gap-3
    `,
    variants:{
        size:{
            md:"h-10 p-3"
        },
        disabled:{
            true:"pointer-events-none"
        }
    },
    defaultVariants:{
        size:"md",
        disabled:false
    }
})

interface InputTextProps
  extends VariantProps<typeof inputTextWrapperVariants>,
    Omit<ComponentProps<"input">, "size" | "disabled"> {
  icon?: ComponentProps<typeof Icon>["svg"];
  error?: ReactNode;
}

export default function InputText({
    size,
    disabled,
    className,
    icon,
    error
}: InputTextProps){
    return (
        <div className={InputTextContainerVariants({className})} >
            <div className={inputTextWrapperVariants({size, disabled})}>
               { icon && <Icon svg={icon}/>  }  
                <input/>
            </div>
           {error && <Text variant="label-small" className="text-accent-red">
               {error}
            </Text> }
        </div>
    )
}
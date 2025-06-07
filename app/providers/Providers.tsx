import { SessionProvider } from "next-auth/react";
import { ToastProvider } from "@/components/Toast";

export const Providers = ({children} : {children: React.ReactNode}) => {
    return <SessionProvider>
        <ToastProvider>
            {children}
        </ToastProvider>
    </SessionProvider>
}
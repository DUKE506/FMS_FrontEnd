'use client'
import { ReactNode } from "react"
import Nav from "./_components/Nav/Nav";
import Drawer from "./_components/Drawer/Drawer";
import { Drawer2 } from "./_components/Drawer2/Drawer2";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/lib/store";


type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
    return (
        <PersistGate loading={null} persistor={persistor}>
            <div className="inner">
                <Drawer2 adminMode={true}/>
                
                <div className="body">
                    {/* <Drawer loginType={true} /> */}
                    <Nav />    
                    <div className="body-content">
                        {children}
                    </div>

                </div>

            </div>
        </PersistGate>
        
    )

}
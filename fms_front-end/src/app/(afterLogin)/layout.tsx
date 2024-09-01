import { ReactNode } from "react"


type Props = {children : ReactNode};

export default function Layout({children} : Props){
    return(
        <div className="inner">
            {children}
        </div>
    )
    
}
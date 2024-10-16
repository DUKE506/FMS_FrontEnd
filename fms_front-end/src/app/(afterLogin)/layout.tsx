import { ReactNode } from "react"
import Nav from "./_components/Nav/Nav";
import Drawer from "./_components/Drawer/Drawer";


type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
    return (
        <div className="inner">
            <Nav />
            <div className="body">
                <Drawer loginType={true} />
                <div className="body-content">
                    {children}
                </div>

            </div>

        </div>
    )

}
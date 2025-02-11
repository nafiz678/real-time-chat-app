import React from 'react'
import DesktopNav from './nav/DesktopNav'
import MobileNav from './nav/MobileNav'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = React.PropsWithChildren<{}>

const SidebarWrapper = ({ children }: Props) => {
    return (
        <div className='h-[calc(100vh-30px)] w-full p-4 gap-4 flex flex-col lg:flex-row'>
            <MobileNav />
            <DesktopNav />
            <main className='h-[calc(100%-40px)] lg:h-full w-full flex gap-4'>
                {children}
            </main>
        </div>
    )
}

export default SidebarWrapper
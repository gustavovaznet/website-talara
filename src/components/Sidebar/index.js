//SIDEBAR INDES

//IMPORTING
import React from 'react'
import { SidebarContainer , Icon , CloseIcon , SidebarWrapper , SidebarMenu , SidebarLink , SideBtnWrap ,SidebarRoute} from './SideBarElements'

//SIDEBAR
const Sidebar = ( {  toggle , isOpen } ) => {
    return (
        <SidebarContainer isOpen = { isOpen } onClick = { toggle}>
            <Icon onClick = { toggle}>
                <CloseIcon /> 
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick = { toggle}>
                        Sobre
                    </SidebarLink>
                    <SidebarLink to='discover' onClick = { toggle}>
                        Soluções
                    </SidebarLink>
                    <SidebarLink to='services' onClick = { toggle}>
                        Serviços
                    </SidebarLink>
                    <SidebarLink to='signup' onClick = { toggle}>
                        Cadastrar
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='signin'>
                        Entrar
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;

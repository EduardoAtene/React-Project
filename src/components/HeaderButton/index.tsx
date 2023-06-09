import { HeaderContainer, HeaderContent, NewHistoryButton } from "./style";

import logoImage from '../../assets/logo.svg';
import * as Dialog from '@radix-ui/react-dialog';
import { HistoryModal } from "../HistoryModal";


export function HeaderButton() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImage}/>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewHistoryButton>
                            Novo Historico
                        </NewHistoryButton>
                    </Dialog.Trigger>
                    <HistoryModal/>
                </Dialog.Root>
                {/* <NavButtonHeader>
                    <ListDashes size={26}/>
                </NavButtonHeader> */}
            </HeaderContent>
        </HeaderContainer>
    );
}
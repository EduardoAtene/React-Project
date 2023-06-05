import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TypesHistory, TypesHistoryButton } from './style';

import { useForm } from "react-hook-form";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const newHistoryFormScheme = zod.object({
    description: zod.string(),
    price: zod.number(),
    category: zod.string(),
    // type: zod.enum(['income','outcome']).,
});

type newHistoryFormInputs = zod.infer<typeof newHistoryFormScheme>;

export function HistoryModal(){
    const   {   register,
                handleSubmit,
                formState: {isSubmitted}
            } = useForm({
                resolver: zodResolver(newHistoryFormScheme),
            });

    async function handleCreateNewHistory(data: newHistoryFormInputs){
        await new Promise(resolve => setTimeout(resolve,2000));
        console.log(data);
    }

    return(
        <Dialog.Portal>
        <Overlay />
        <Content>
            <Dialog.Title > Adicionar Histórico</Dialog.Title>
            
            <CloseButton>
                <X size={24}/>
            </CloseButton>
            
            <form onSubmit={handleSubmit(handleCreateNewHistory)}>
                <input 
                    type='text'
                    placeholder="Descrição"
                    required
                    {...register('description')}
                />
                <input 
                    type='number'
                    placeholder="Preço"
                    required
                    {...register('price',{valueAsNumber:true})}
                />
                <input 
                    type='text'
                    placeholder="Categoria"
                    required
                    {...register('category')}
                />
                <TypesHistory>
                    <TypesHistoryButton  value="income" variant="income">
                        <ArrowCircleUp size={24} />
                        Entrada
                    </TypesHistoryButton>

                    <TypesHistoryButton value="outcome" variant="outcome">
                        <ArrowCircleDown size={24} />
                        Saida
                    </TypesHistoryButton>
                </TypesHistory>

                <button type="submit" disabled={isSubmitted}> Cadastrar</button>
            </form>
            {/* <Dialog.Close asChild>
                <button className="Button green">Save changes</button>
            </Dialog.Close>
            <Dialog.Close asChild>
                <X/>
            </Dialog.Close> */}
        </Content>
    </Dialog.Portal>
    );
}
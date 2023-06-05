import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TypesHistory, TypesHistoryButton } from './style';

import { useForm, Controller } from "react-hook-form";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { HistoryContext } from '../../contexts/HistoryContext';
import { useContextSelector } from 'use-context-selector';

const newHistoryFormScheme = zod.object({
    description: zod.string(),
    price: zod.number(),
    category: zod.string(),
    type: zod.enum(['income','outcome']),
});

type newHistoryFormInputs = zod.infer<typeof newHistoryFormScheme>;

export function HistoryModal(){
    const createHistory = useContextSelector(HistoryContext, (v) => {
        return v.createHistory;
    });

    const   {   register,
                reset,
                control,
                handleSubmit,
                formState: {isSubmitting}
            } = useForm<newHistoryFormInputs>({
                resolver: zodResolver(newHistoryFormScheme),
            });

    async function handleCreateNewHistory(data: newHistoryFormInputs){
        const {description,price,category,type} = data;
        
        await createHistory({
            description,
            price,
            category,
            type});

        reset();
    
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
                
                <Controller
                    control={control}
                    name='type'
                    render={ ({ field }) => {
                        return(
                            <TypesHistory onValueChange={field.onChange} value={field.value} >
                                <TypesHistoryButton  value="income"  variant="income">
                                    <ArrowCircleUp size={24} />
                                    Entrada
                                </TypesHistoryButton>
            
                                <TypesHistoryButton value="outcome" variant="outcome">
                                    <ArrowCircleDown size={24} />
                                    Saida
                                </TypesHistoryButton>
                            </TypesHistory>
                        );
                    }}
                />
                <button type="submit" disabled={isSubmitting}> Cadastrar</button>
            </form>
        </Content>
    </Dialog.Portal>
    );
}
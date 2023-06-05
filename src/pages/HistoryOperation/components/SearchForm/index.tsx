import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchFormContainer,
        ButtonSearchForm        
} from "./style";
import { useForm } from "react-hook-form";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { HistoryContext } from "../../../../contexts/HistoryContext";
import { useContextSelector } from "use-context-selector";

const SearchHistoryScheme = zod.object({
    query: zod.string(),
});

type SearchHistoryData = zod.infer<typeof SearchHistoryScheme> ;

export function SearchForm(){
    const fetchHistory = useContextSelector(HistoryContext, (v) => {
        return v.fetchHistory;
    });

    const { register, handleSubmit, formState: {isSubmitting} } = useForm<SearchHistoryData>({
        resolver: zodResolver(SearchHistoryScheme),
        defaultValues:{
            query: ''
        }
    });

    async function handleSearchHistory(data : SearchHistoryData){
        await fetchHistory(data.query);
    }
    return(
        <SearchFormContainer onSubmit={handleSubmit(handleSearchHistory)}>
            <input 
                type="text"
                placeholder="Busque uma transação"
                {...register('query')}
            />
            <ButtonSearchForm 
                    type="submit"
                    disabled={isSubmitting}
            >
                <MagnifyingGlass size={25}/>
                <span>Buscar</span>

            </ButtonSearchForm>

        </SearchFormContainer>
    );
}
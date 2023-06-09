import { AvatarRoot, AvatarImage,  AvatarFallback} from "./style";

interface PropsAvatarModel{
  src: string
}

export function AvatarModel({ src }: PropsAvatarModel) {
    return(
        <>
            <AvatarRoot>
                <AvatarImage
                    className="AvatarImage"
                    src={src}
                    alt="Colm Tuite"
                />
                <AvatarFallback delayMs={600}>
                    CT
                </AvatarFallback>
            </AvatarRoot>
        </>
    )
}
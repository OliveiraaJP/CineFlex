import { ButtonEl } from "./styles";

function Button({buttonHTML="erro", isLarge=false}){
    return(
    <ButtonEl isLargee={isLarge}> {buttonHTML} </ButtonEl>
    )
}

export default Button;
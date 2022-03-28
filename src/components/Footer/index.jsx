import {$Footer, $imgBox, $textBox} from "./styles"


function Footer({imgMovie, nameMovie, dayMovie, timeMovie, hyphen}){
    return(
        <$Footer>
            <$imgBox>
                <img src={imgMovie}/>
            </$imgBox>
            <$textBox>
                <p>{nameMovie}</p>
                <p>{dayMovie} {hyphen} {timeMovie}</p>
            </$textBox>
        </$Footer>
    )
}

export default Footer;
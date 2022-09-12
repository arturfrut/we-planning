import { Image } from "../../Common/Grid";
import { BadgeCrudContainer } from "../../Styles/storiesStateStyles";

const BadgeCRUD = ({ imgSrc, title, handleClick }) => {
    return (
        <BadgeCrudContainer onClick={handleClick}>
            <Image src={imgSrc} />
            <p>{title}</p>
        </BadgeCrudContainer>
    );
};

export default BadgeCRUD

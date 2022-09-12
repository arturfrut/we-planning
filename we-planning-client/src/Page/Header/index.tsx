import { useContext } from "react";
import { CONTEXT } from "../../App/context";
import { Image, PositionContainer } from "../../Common/Grid";
import ICONS from "../../Constants/icons";
import { HeaderContainer, ProfileContainer } from "../../Styles/headerStyle";

const Header = () => {
    const { state }: any = useContext(CONTEXT);
    const {profileName} = state
    return (
        <HeaderContainer>
            <PositionContainer justifyContent={'space-between'} maxWidth={'70%'} margin={'auto'}>
                <h1>WePlanningLogo</h1>
                <ProfileContainer>
                    <h1>{profileName}</h1>
                    <Image src={ICONS.LOGO} />
                </ProfileContainer>
            </PositionContainer>
        </HeaderContainer>
    );
};

export default Header;

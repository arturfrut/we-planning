import { TokenCard } from "../../Styles/tokenBoardStyle";

const Token = ({ tokenValue, tokenColor }) => {
    console.log('SOY TOKEN',tokenValue,tokenColor);
    return (
        <TokenCard bgColor={tokenColor}>{tokenValue}</TokenCard>
    );
};

export default Token;

import map from "lodash/map";
import { useContext } from "react";
import { CONTEXT } from "../../App/context";
import { TOKEN } from "../../Constants";
import { TokenBoardContainer } from "../../Styles/tokenBoardStyle";
import Token from "./Token";

const TokenBoard = () => {
    const { state }: any = useContext(CONTEXT);
    const {tokenSelected} = state.roomConfig;
    const tokens = TOKEN.FIBONACCI;

    return (
        <TokenBoardContainer>
            {map(tokens, (token, i) => (
                <Token
                    key={i}
                    tokenValue={token.value}
                    tokenColor={token.color}
                />
            ))}
        </TokenBoardContainer>
    );
};

export default TokenBoard;

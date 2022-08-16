import map from "lodash/map";
import { TOKEN } from "../../Constants";

const TokenBoard = tokenSelected => {
    const tokens = TOKEN[tokenSelected];
    return (
        <div>
            {map(tokens, (token, i) => (
                <div key={i} className={tokenSelected}>
                    <h1>{token.value}</h1>
                </div>
            ))}
        </div>
    );
};

export default TokenBoard

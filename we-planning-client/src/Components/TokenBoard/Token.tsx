const Token = (tokenStyle, tokenProp) => (
    <div className={tokenStyle}>
        <h1 className={`${tokenStyle},${tokenProp.color}`}>{tokenProp.value}</h1>
    </div>
)

export default Token
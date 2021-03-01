const orderProgress = () => {
    return (
        <div className="order-progress-bar">
            <ul className="order-progress">
                <li>
                    {/*te ikonki są ozdobą, nie trzeba ich czytać*/}
                    <span className="fa-stack fa-2x" aria-label="Krok 1/4: Koszyk">>
                        <i className="fa fa-circle fa-stack-2x progress-active"></i>
                        <i className="fas fa-shopping-cart fa-stack-1x icon"></i>
                    </span><br />
                    {/* jakos trzeba oznaczyc arią gdzie jestesmy w procesie
                    najlatwiej bedzie przeczytac tylko aktywny tytul
                    */}
                    <p className="name-active">Koszyk</p>
                </li>
                <li>
                    <span className="fa-stack fa-2x" aria-label="delivery" aria-hidden={true}>
                        <i className="fa fa-circle fa-stack-2x progress"></i>
                        <i className="fas fa-truck fa-stack-1x icon"></i>
                    </span><br />
                    <p className="name">Dostawa</p>
                </li>
                <li>
                    <span className="fa-stack fa-2x" aria-label="summary">
                        <i className="fa fa-circle fa-stack-2x progress"></i>
                        <i className="fas fa-clipboard-list fa-stack-1x icon"></i>
                    </span><br />
                    <p className="name">Podsumowanie</p>
                </li>
                <li>
                    <span className="fa-stack fa-2x" aria-label="confirmation">
                        <i className="fa fa-circle fa-stack-2x progress"></i>
                        <i className="fas fa-clipboard-check fa-stack-1x icon"></i>
                    </span><br />
                    <p className="name">Potwierdzenie</p>
                </li>
            </ul>
        </div> 
    )
}

export default orderProgress
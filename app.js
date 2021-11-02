
let Categories = data.map((result, index) => {
    return (
        <ul className="cat-nav center-align">
        <Category key={index} data={result} />
        </ul>
    )
})


ReactDOM.render(
    <div className="row">
        {Categories}
    </div>, 
    document.getElementById('root')
)


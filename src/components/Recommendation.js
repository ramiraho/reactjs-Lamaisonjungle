

function Recommedation() {
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >=2 && currentMonth <= 5
    
    if(!isSpring) {
        return (<div>Ce n'est pas encore le moment de rempoter</div>)
    }
    return (
        <div>C'est le moment de rempoter</div>
    )
}

export default Recommedation;
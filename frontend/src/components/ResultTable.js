function ResultTable(){

    const teams=["oxy","cms","pomona"];

    const teamHeaderFactory=()=>{
        return( teams.map(t=>{
            return (
                <th> {t}</th>
            )
        }))
    }

    return(
        <table>
            <tr>
                <th>Event</th>
                {teamHeaderFactory()}
            </tr>
        </table>
    )

}
export default ResultTable;
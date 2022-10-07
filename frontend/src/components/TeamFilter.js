function TeamFilter(){

    const teams=["lmu","ucla","wsu","uw"];

    const teamFactory=()=>{
        return (teams.map(t=>{
            return(
                <option value={t}>t</option>
            )
        }))
    }

    return(
        
        <div className="container">
            <label htmlFor="filter-teams">Select Teams</label>
            <select id="filter-teams" multiple>
                <option selected>Select Teams</option>  
                {teamFactory()}
            </select>
        </div>
    )

}
export default TeamFilter;
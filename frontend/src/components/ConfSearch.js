
import { useForm } from "react-hook-form";


function ConfSearch({meetResults,setMeetResults}){

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange"
      });

    const submitHandler=(obj)=>{
        console.log(obj)
        console.log(obj.confInput)
        fetch("http://localhost:8080/api/meetResults/"+obj.confInput)
        .then((response)=> response.json())
        .then((data)=>setMeetResults(data))
        .then(console.log(meetResults))
        .catch(console.error);

    }

    

    return(
        <div className="container">
            <form onSubmit={handleSubmit(submitHandler)} id="confSearchForm">
            <label htmlFor="conf"> Enter conference</label>
            <input className="outline outline-1 outline-black"id="conf" type="text"
              {...register("confInput")}>
            </input>
            <button type="submit">sumbit</button>
            </form>
        </div>
    )

}
export default ConfSearch;
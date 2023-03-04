export const Application = () =>{
    return(
      
            <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label htmlFor="job-location"></label>
                <select id="job-location">
                <option value="">Select Country</option>
                <option value="In">India</option>
                <option value="CN">Canada</option>
                <option value="US">United States</option>
                </select>
            </div>
            <div>
                <label>
                    <input type="checkbox" id="terms"/>I agree to terms and conditions
                </label>
            </div>
            <button>Submit</button>
            </form>

    )
}
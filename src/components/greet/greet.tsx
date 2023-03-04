type GreetProps = {
    name?:string
}

const Greet = (props:GreetProps) =>{
    return(
        <h1>Hello {props.name ? props.name : "Guest"} </h1>
    )
}

export default Greet;
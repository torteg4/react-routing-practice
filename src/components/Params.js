import React from 'react';
import { useParams } from 'react-router-dom';

const Params = (props)=>{

    // const Number = (props) => {
    //     const { num } = useParams();
    //     return (
    //         <div>
    //             {/* <h1 style={{color: "blue"}}>About Component</h1> */}
    //             <div style= {{padding: "10px", textAlign: "center"}}>
    //             <span style={{padding: "10px"}}>The number is: {num} </span>
    //             </div>
    //             <div style= {{padding: "10px", textAlign: "center"}}>
    //             <Link to={"/"}>Go to Dashboard</Link> 
    //             </div>
    //         </div>
    //     );
    // }
    const {word, color, bgCol} = useParams();

    return(
        <div>
            {/* isNaN() = is not a number. Can use to see if param submitted is a num or not */}
            {isNaN(word)?
                <p style={ color ? {
                        color: color, 
                        backgroundColor: bgCol,
                        padding: "10px", 
                        textAlign: "center"}
                    :null}>
                    {/* {padding: "10px", textAlign: "center"} */}
                    This is a word: {word}
                </p>
                : //If the word param IS a number:
                <p style = {{
                        padding: "10px", 
                        textAlign: "center"}}>
                    This is a number: {word}
                </p>
            }
        </div>
        
    )
}

export default Params;
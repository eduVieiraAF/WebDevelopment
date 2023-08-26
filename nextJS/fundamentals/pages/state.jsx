import Layout from "@/components/Layout";
import { useState } from "react";

export default function State() {
    // let number = 3

    const state = useState(0) 
    let number = state[0]
    let setNumber = state[1]


    function add() {
        setNumber(number + 1)
    }

    return (
        <div>
            <Layout>
                <div>{ number }</div>
                <button onClick={add}> + </button>
            </Layout>
        </div>
    )
}
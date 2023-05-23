import Link from 'next/link'
import React from 'react'

const index = () => {
    return (
        <>
            <div>Next/Link Tests</div>
            <ul>
                <li> <Link href={"/on-demand-test"}>❌ /on-demand-test (error when build, works on dev)</Link> </li>
            </ul>
        </>
    )
}

export default index
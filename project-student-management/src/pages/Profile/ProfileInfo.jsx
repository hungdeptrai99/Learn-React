import React from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'

export default function ProfileInfo() {
    const params = useParams()
    const match  = useRouteMatch()
    console.log(match);
    return (
        <div>
            <h2>ProfileInfo</h2>
        </div>
    )
}

import React from 'react'
import { RouteComponentProps } from "react-router-dom";

type TParams = { id: string };

export default function Post({ match }: RouteComponentProps<TParams>) {
    return (
        <div>
            <h2>Post Detail - {match.params.id}</h2>
        </div>
    )
}

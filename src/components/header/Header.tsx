import * as React from 'react';

export interface IHeaderProps {
    name: string;
}

export function Header (props: IHeaderProps) {

    const style = {
        color: "red"
    }

    return (
        <div>
            <h1 style={style} >{props.name}</h1>
        </div>
    );
}

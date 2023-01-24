import React,{FC} from 'react';



interface VehicleInfoProps {
    Value: string;
    Variable: string;
    VariableId: number;
}

const VehicleInfo: FC<VehicleInfoProps> = ({Value, VariableId, Variable}) => {

    return (
        <article>
            <h2>{Variable}</h2>
            <p>{Value}</p>
        </article>
    );
};

export default VehicleInfo;

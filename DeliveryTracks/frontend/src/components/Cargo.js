import React from 'react';

const CargoItem = ({cargo}) => {
    return (
        <tr>
            <td>
                {cargo.pick_up}
            </td>
            <td>
                {cargo.delivery}
            </td>
            <td>
                {cargo.weight}
            </td>
        </tr>
    )
}

const CargoList = ({cargos}) => {
    return (
        <table>
            <th>
                Pick up
            </th>
            <th>
                Delivery
            </th>
            <th>
                Weight
            </th>
            {cargos.map((cargo) => <CargoItem cargo={cargo} />)}
        </table>
    )
}

export default CargoList
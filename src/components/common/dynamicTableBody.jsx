import React from 'react';
import { deleteApartment } from '../../services/apartmentService';
import { deleteBooking } from '../../services/bookingService';
import { deleteUser } from '../../services/userService';

function rows(count, objs, usedFor) {
    const rows = [];
    for (let i = 0; i < count; i++) {
        rows.push(<tr>{cells(objs[i], usedFor)}</tr>)
    }
    return rows;
}

function cells(obj, usedFor) {
    const cells = [];
    const items = [];

    Object.keys(obj).forEach(function(key) {
        items.push(obj[key]);
    });

    for (let i = 0; i < items.length; i++) {
        cells.push(<td>{`${items[i]}`}</td>);
    }

    if (usedFor === "user") {
        cells.push(<button type="button" className="btn btn-danger" onClick={() => {deleteUser(items[0])}}>Slet</button>);
    }
    else if (usedFor === "apartment") {
        cells.push(<button type="button" className="btn btn-danger" onClick={() => {deleteApartment(items[0])}}>Slet</button>);
    }
    else if (usedFor === "booking") {
        cells.push(<button type="button" className="btn btn-danger" onClick={() => {deleteBooking(items[0])}}>Slet</button>);
    }

    return cells;
}

const DynamicTableBody = ({objs, usedFor}) => {
    return ( 
        <tbody>
            {rows(objs.length, objs, usedFor)}
        </tbody>
    );
}
 
export default DynamicTableBody;
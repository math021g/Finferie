import React from 'react';
import { deleteApartment } from '../../services/apartmentService';
import { deleteBooking } from '../../services/bookingService';
import { deleteUser } from '../../services/userService';

function rows(count, objs, using) {
    const rows = [];
    for (let i = 0; i < count; i++) {
        rows.push(<tr>{cells(objs[i], using)}</tr>)
    }
    return rows;
}

function cells(obj, using) {
    const cells = [];
    const items = [];

    Object.keys(obj).forEach(function(key) {
        items.push(obj[key]);
    });

    for (let i = 0; i < items.length; i++) {
        cells.push(<td>{`${items[i]}`}</td>);
    }
    console.log(using);

    if (using === "user") {
        cells.push(<button type="button" className="btn btn-danger" onClick={deleteUser(items[0])}>Slet</button>);
    }
    else if (using === "apartment") {
        cells.push(<button type="button" className="btn btn-danger" onClick={deleteApartment(items[0])}>Slet</button>);
    }
    else if (using === "booking") {
        cells.push(<button type="button" className="btn btn-danger" onClick={deleteBooking(items[0])}>Slet</button>);
    }
    return cells;
}

const DynamicTableBody = ({objs, using}) => {
    return ( 
        <tbody>
            {rows(objs.length, objs, using)}
        </tbody>
    );
}
 
export default DynamicTableBody;
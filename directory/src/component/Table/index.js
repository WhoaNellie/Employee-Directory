import React from "react";
import { useTable, useSortBy } from 'react-table';
import employees from '../../employees';

function Table(){
    let data = employees;

    const columns = React.useMemo(
        () => [
          {
            Header: 'ID',
            accessor: 'id'
          },
          {
            Header: 'Name',
            accessor: 'name'
          },{
            Header: 'Role',
            accessor: 'role'
          },{
            Header: 'Salary',
            accessor: 'salary'
          }
        ],
        []
      )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
      } = useTable({
        columns,
        data
      }, useSortBy);
    
    // const { defaultCanSort } = useSortBy()


    return (
        <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : '⏹️'}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    );
}

export default Table;
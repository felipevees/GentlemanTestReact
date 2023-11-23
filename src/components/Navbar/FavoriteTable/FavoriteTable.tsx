import { Person } from "@/models";
import { removeFavorite } from "@/redux/states";
import { AppStore } from "@/redux/store";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export interface FavoriteTableInterface {}

const FavoriteTable: React.FC<FavoriteTableInterface> = () => {
  const dispatch = useDispatch();

  const stateFavorites = useSelector((store: AppStore) => store.favorites);

  const pageSize = 5;

  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person));
  };

  const columns = [
    {
      field: "actions",
      type: "actions",
      headerName: "",
      sortable: false,
      minWidth: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <IconButton
              color="primary"
              aria-label="favorites"
              component="label"
              onClick={() => handleClick(params.row)}
            >
              <DeleteIcon />
            </IconButton>
          }
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "level of happiness",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];
  return (
    <DataGrid
      rows={stateFavorites}
      columns={columns}
      disableColumnSelector
      disableRowSelectionOnClick
      autoHeight
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: pageSize,
          },
        },
      }}
      pageSizeOptions={[pageSize]}
      getRowId={(row: any) => row.id}
    />
  );
};
export default FavoriteTable;

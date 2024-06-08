import styled from "styled-components";

export default styled.div`
  background-color: #f3f3f3;
  border-radius: 0.5rem;

  .styled-table {
    width: 100%;
    margin-top: 1.25rem;

    thead {
      background-color: #f5f5f5;
      th {
        padding: 0.5rem;
      }
    }

    th,
    td {
      padding: 0.5rem;
      border: 1px solid #ddd;
      text-align: left;
    }

    tbody tr:nth-child(even) {
      background-color: #f9f9f9;
    }
  }

  .table-container {
    margin-top: 1.25rem;
    width: 100%;
    overflow-x: auto;
  }
`;

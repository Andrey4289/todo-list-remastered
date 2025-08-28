import "./index.css";

const Table = () => {
  return (
    <div className="table-container">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>Engineer</td>
            <td>alice@example.com</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>Designer</td>
            <td>bob@example.com</td>
          </tr>
          <tr>
            <td>Charlie</td>
            <td>Manager</td>
            <td>charlie@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

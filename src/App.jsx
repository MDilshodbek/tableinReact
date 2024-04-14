// import './App.css'
import { Component } from "react";

const styleWrapper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  flexDirection: "column",
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: "1",
          Name: "A",
          Surname: "A",
          Age: "A",
        },
        {
          id: "2",
          Name: "B",
          Surname: "B",
          Age: "B",
        },
        {
          id: "3",
          Name: "C",
          Surname: "C",
          Age: "C",
        },
      ],
      selectedColumn: null,
    };
  }
  render() {
    const onEdit = (value) => {
      this.setState({
        selectedColumn: value,
      });
    };

    const onSave = () => {
      this.setState({
        data: this.state.data.map((value) => {
          return value.id === this.state.selectedColumn.id
            ? this.state.selectedColumn.id
            : value;
        }),
        selectedColumn: null,
      });
    };

    const onDelete = (value) => {
      this.setState({
        data: this.state.data.filter((item) => item.id !== value.id),
      });
    };
    return (
      <div style={styleWrapper}>
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((value) => {
              return (
                <tr key={value.id}>
                  <td>
                    {this.state.selectedColumn &&
                    value.id === this.state.selectedColumn.id ? (
                      <input
                        type="text"
                        defaultValue={this.state.selectedColumn.Name}
                        onChange={(e) => {
                          this.setState({
                            selectedColumn: {
                              Name: e.target.value,
                              Surname: this.state.selectedColumn.Surname,
                              Age: this.state.selectedColumn.Age,
                              id: this.state.selectedColumn.id,
                            },
                          });
                        }}
                      />
                    ) : (
                      value.Name
                    )}
                  </td>
                  <td>
                    {this.state.selectedColumn &&
                    value.id === this.state.selectedColumn.id ? (
                      <input
                        type="text"
                        defaultValue={this.state.selectedColumn.Surname}
                        onChange={(e) => {
                          this.setState({
                            selectedColumn: {
                              Surname: e.target.value,
                              Name: this.state.selectedColumn.Name,
                              Age: this.state.selectedColumn.Age,
                              id: this.state.selectedColumn.id,
                            },
                          });
                        }}
                      />
                    ) : (
                      value.Surname
                    )}
                  </td>
                  <td>
                    {this.state.selectedColumn &&
                    value.id === this.state.selectedColumn.id ? (
                      <input
                        type="text"
                        defaultValue={this.state.selectedColumn.Age}
                        onChange={(e) => {
                          this.setState({
                            selectedColumn: {
                              Age: e.target.value,
                              Surname: this.state.selectedColumn.Surname,
                              Name: this.state.selectedColumn.Name,
                              id: this.state.selectedColumn.id,
                            },
                          });
                        }}
                      />
                    ) : (
                      value.Age
                    )}
                  </td>
                  <td>
                    {this.state.selectedColumn ? (
                      <button onClick={onSave}>Save</button>
                    ) : (
                      <button
                        onClick={() => {
                          onEdit(value);
                        }}
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => {
                        onDelete(value);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

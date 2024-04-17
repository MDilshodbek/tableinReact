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
            ? this.state.selectedColumn
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

    const onAdd = (event) => {
      event.preventDefault();
      console.log(this.state.data);
      const newData = {
        Name: event.target[0].value,
        Surname: event.target[1].value,
        Age: event.target[2].value,
        id: this.state.data.value + 1,
      };
      this.setState({
        data: [...this.state.data, newData],
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
                              id: this.state.selectedColumn.id,
                              Name: e.target.value,
                              Surname: this.state.selectedColumn.Surname,
                              Age: this.state.selectedColumn.Age,
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
                              id: this.state.selectedColumn.id,
                              Name: this.state.selectedColumn.Name,
                              Surname: e.target.value,
                              Age: this.state.selectedColumn.Age,
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
                              id: this.state.selectedColumn.id,
                              Name: this.state.selectedColumn.Name,
                              Surname: this.state.selectedColumn.Surname,
                              Age: e.target.value,
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
        <form style={{ marginTop: "100px" }} onSubmit={onAdd}>
          <input type="Name" placeholder="Name" />
          <input type="Surname" placeholder="Surname" />
          <input type="Age" placeholder="Age" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;

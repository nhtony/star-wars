import React, { useEffect } from "react";
import { Table } from "antd";
import { connect } from "react-redux";

const { Column } = Table;

function ListCharacter(props) {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  useEffect(() => {
    console.log(props.characters);
  }, []);

  return (
    <Table dataSource={dataSource}>
      <Column title="Name" dataIndex="name" />
      <Column title="Height" dataIndex="height" />
      <Column title="Mass" dataIndex="mass" />
      <Column title="Hair color" dataIndex="hair_color" />
      <Column title="Skin color" dataIndex="skin_color" />
      <Column title="Eye color" dataIndex="eye_color" />
      <Column title="Birth day" dataIndex="birth_year" />
      <Column title="Gender" dataIndex="gender" />
    </Table>
  );
}

const mapStateToProps = (state) => {
  const { characters } = state.CharacterReducer;
  return {
    characters,
  };
};

export default connect(mapStateToProps, null)(ListCharacter);

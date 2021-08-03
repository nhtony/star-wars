import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table, Spin, Tag } from "antd";
import { Link } from "react-router-dom";
import { fetchCharacterAction } from "../../stores/actions/character.action";
import customColors from "../../constant/customColors";

const { Column } = Table;

function ListCharacter(props) {
  useEffect(() => {
    props.fetchCharacters();
  }, []);

  return (
    <Spin spinning={props.status === "pending"}>
      <Table dataSource={props.characters} rowKey={(record) => record.name}>
        <Column title="Name" dataIndex="name" />
        <Column title="Height" dataIndex="height" />
        <Column title="Mass" dataIndex="mass" />
        <Column
          title="Hair color"
          dataIndex="hair_color"
          render={(colors) => {
            return colors.split(",").map((color) => {
              return color !== "n/a" && color !== "none" ? (
                <Tag key={color} color={customColors[color]}>
                  {color}
                </Tag>
              ) : null;
            });
          }}
        />
        <Column title="Skin color" dataIndex="skin_color" />
        <Column
          title="Eye color"
          dataIndex="eye_color"
          render={(colors) => {
            return colors.split(",").map((color) => (
              <Tag key={color} color={customColors[color]}>
                {color}
              </Tag>
            ));
          }}
        />
        <Column title="Birth day" dataIndex="birth_year" />
        <Column
          title="Gender"
          dataIndex="gender"
          render={(gender) => (gender !== "n/a" ? gender : "")}
        />
        <Column
          title="Actions"
          dataIndex="name"
          render={(name) => <Link to={`/${name}`}>Detail</Link>}
        />
      </Table>
    </Spin>
  );
}

const mapStateToProps = (state) => {
  const { characters, status } = state.CharacterReducer;
  return {
    characters,
    status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCharacters: () => {
      dispatch(fetchCharacterAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListCharacter);

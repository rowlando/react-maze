import createMazeRow from './MazeRow';

export default React => {

  const MazeRow = createMazeRow(React);

  const maze = ({size}) => {

    var rows = [];
    for(let i = 0; i < size; i++) {
      rows.push(<MazeRow size={size}/>);
    }
    return (
      <div className="maze">{rows}</div>
    )

  }

  return maze;
};

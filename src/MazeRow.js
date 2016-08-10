import MazeTile from './MazeTile';

export default React => {

  const mazeRow = ({size}) => {
    var tiles = [];
    for(let i = 0; i < size; i++) {
      tiles.push(<MazeTile/>);
    }
    return (
      <div className="maze-row">{tiles}</div>
    )
  }

  return mazeRow;
};

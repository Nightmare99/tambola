import { useEffect, useState } from "react";
import Cell from "./Cell";

function Grid({ numbers, revealedFlags }) {
    let offset = 0;
    let [grid, setGrid] = useState([]);

    useEffect(() => {
        let tempGrid = [];
        offset = 0;
        for (let i = 0; i < 9; i++) {
            let temp = [];
            for (let j = 0; j < 10; j++) {
                temp.push(numbers[j] + offset);
            }
            tempGrid.push(temp);
            temp = [];
            offset += 10;
        }
        setGrid(tempGrid);
        console.log(grid);
    }, []);

    return (
        <table>
            <tbody>
            {grid.map((row) => (
                <tr key={row}>
                    {row.map((cell) => (
                        <td key={cell}><Cell isRevealed={revealedFlags[cell]} number={cell + 1}></Cell></td>
                    )
                    )}
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Grid;
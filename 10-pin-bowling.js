function isNumeric(value) {
    return /^\d+$/.test(value);
}

function bowlingScore(frames) {
    var frameArr = frames.split(' ');
    if (frameArr.length !== 10) {
        throw new Error('Invalid input.');
    }
    var runningTotal = 0;
    for (let i = 0; i < frameArr.length; ++i) {
        for (let x = 0; x < frameArr[i].length; ++x) {
            let indiScore = frameArr[i][x];
            let prevElement = x - 1;
            let subsequentCell = i + 1;
            if (+indiScore === 0)
                continue;
            if (isNumeric(indiScore)) {
                runningTotal += +indiScore;
            } else if (indiScore === '/') {
                if (!isNumeric(frameArr[i][prevElement])) {
                    throw new Error('Invalid input.');
                }
                if (subsequentCell < frameArr.length) {
                    let subsequentCellEle = frameArr[subsequentCell][0];
                    if (isNumeric(subsequentCellEle)) {
                        runningTotal += 10 + +frameArr[subsequentCell][0] - +frameArr[i][prevElement];
                    } else if (+subsequentCellEle === 0) {
                        runningTotal += 10 - +frameArr[i][prevElement];
                    } else { // is strike
                        runningTotal += 20 - +frameArr[i][prevElement];
                    }
                } else {
                    runningTotal += 10 - +frameArr[i][prevElement];
                }
            } else { // is strike
                if (indiScore.length > 1) { // can only be "X" itself
                    throw new Error('Invalid input.')
                }
                if (subsequentCell < frameArr.length) {
                    let subsequentCellEle = frameArr[subsequentCell][0];
                    let subsequentCellEle2 = frameArr[subsequentCell][1];
                    if (isNumeric(subsequentCellEle)) {
                        if (isNumeric(subsequentCellEle2)) {
                            runningTotal += 10 + +subsequentCellEle + +subsequentCellEle2;
                        } else if (subsequentCellEle2 === '/') { // is spare
                            runningTotal += 20;
                        } else { // 0
                            runningTotal += 10 + +subsequentCellEle;
                        }
                    } else if (subsequentCellEle === 'X') { // is strike
                        runningTotal += 20;
                        if (subsequentCell + 1 < frameArr.length) {
                            let cellAfterStrike = frameArr[subsequentCell + 1][0];
                            if (isNumeric(cellAfterStrike)) {
                                runningTotal += +cellAfterStrike;
                            } else if (+cellAfterStrike === 0) {
                                continue;
                            } else {
                                runningTotal += 10;
                            }
                        } else { // last cell
                            let lastCell = frameArr[subsequentCell][0];
                            let lastCell2 = frameArr[subsequentCell][1];
                            if (isNumeric(lastCell)) {
                                if (isNumeric(lastCell2)) {
                                    runningTotal += +lastCell + +lastCell2;
                                } else {
                                    runningTotal += 10 + +lastCell;
                                }
                            } else { // is strike
                                runningTotal += 10;
                            }
                        }
                    } else if (subsequentCellEle === '0' && subsequentCellEle2 === '/') { // 0 after strike
                        runningTotal += 20;
                    } else if (subsequentCellEle === '0' && +subsequentCellEle2 > 0 ||
                                +subsequentCellEle > 0 && +subsequentCellEle2 === 0) {
                        runningTotal += 10 + +subsequentCellEle + +subsequentCellEle2;
                    } else { // both 0s
                        runningTotal += 10;
                    }
                } else {
                    if (isNumeric(indiScore)) {
                        runningTotal += +indiScore;
                    } else {
                        runningTotal += 10;
                    }
                }
            } // is initial strike
        }
    }
    return runningTotal;
}

module.exports = bowlingScore;